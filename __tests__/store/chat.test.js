import { act } from "react-dom/test-utils";
import { socket } from "socket.io-client";
import { faker } from "@faker-js/faker";
import { localSetup, localTearDown } from "../../__mocks__/storeSetup";
import { addPredefinedAssistantMessage, fillAssistantHistoryData, fillUserHistoryData, hideResendIcon, resetIsLoading, resetOutgoing, setClosed, setConnected, setExistingHistory, setIsLoading, setIsStreaming, setOutgoing, setTypingTimeoutExpired, showResendIcon } from "../../src/store/slices/chat";
import { Roles } from "../../src/config";
import initialState from "../../src/store/initialState";
import { serverHistoryMock } from "../../__fixtures__/chat";

socket.on = jest.fn();
socket.emit = jest.fn();
socket.close = jest.fn();

let root;
describe('chat slice must be working accordingly', () => {
  beforeEach(async () => {
    socket.connected = true;
    root = await localSetup();
  });

  afterEach(localTearDown);

  test('setIsLoading is setting the loader to true', () => {
    // Act
    act(() => root.store.dispatch(setIsLoading()))

    // Assert
    expect(getChat().isLoading).toBe(true);
  });

  test('resetIsLoading is setting the loader to false', () => {
    // Act
    act(() => root.store.dispatch(resetIsLoading()))

    // Assert
    expect(getChat().isLoading).toBe(false);
  });

  test('setOutgoing sets the outgoing message correctly', () => {
    // Arrange
    const text = faker.lorem.sentence();

    // Act
    act(() => root.store.dispatch(setOutgoing(text)));

    // Assert
    expect(getChat().outgoing).toEqual({
      term: '',
      user_id: '',
      role: Roles.user,
      message: text,
    });
  });

  test('resetOutgoing resets the outgoing message correctly', () => {
    // Act
    act(() => root.store.dispatch(resetOutgoing()));

    // Assert
    expect(getChat().outgoing).toEqual(initialState.chat.outgoing)
  });

  test('setExistingHistory sets store history and historyData and historyIds length matches', () => {
    // Arrange
    const lastServerEntry = [...serverHistoryMock].pop();

    // Act
    act(() => root.store.dispatch(setExistingHistory(serverHistoryMock)));

    // Assert
    const lastRecordId = [...getChat().historyIds].pop();
    const lastRecordData = getChat().historyData[lastRecordId];
    expect(getChat().historyIds.length).toEqual(serverHistoryMock.length);
    expect(Object.entries(getChat().historyData).length).toEqual(serverHistoryMock.length);
    expect(Object.entries(getChat().historyData).length).toEqual(getChat().historyIds.length);
    expect(lastRecordData.id).toEqual(lastServerEntry.id);
    expect(lastRecordData.role).toEqual(lastServerEntry.role);
    expect(lastRecordData.content).toEqual(lastServerEntry.content);
  });

  test('setExistingHistory resend: true and sent: false to messages that are not recorded server side', () => {
    // Arrange
    const currentHistoryWithUnsentMessage = [...serverHistoryMock, { id: faker.string.uuid(), role: Roles.user, content: 'user test' }];
    const lastServerEntry = [...currentHistoryWithUnsentMessage].pop();
    act(() => root.store.dispatch(setExistingHistory(currentHistoryWithUnsentMessage)));

    // Act
    act(() => root.store.dispatch(setExistingHistory(serverHistoryMock)));

    // Assert
    const lastRecordId = [...getChat().historyIds].pop();
    const lastRecordData = getChat().historyData[lastRecordId];
    expect(getChat().historyIds.length).toEqual(currentHistoryWithUnsentMessage.length);
    expect(Object.entries(getChat().historyData).length).toEqual(currentHistoryWithUnsentMessage.length);
    expect(Object.entries(getChat().historyData).length).toEqual(getChat().historyIds.length);
    expect(lastRecordData.id).toEqual(lastServerEntry.id);
    expect(lastRecordData.role).toEqual(lastServerEntry.role);
    expect(lastRecordData.content[0].sent).toEqual(false);
    expect(lastRecordData.content[0].resend).toEqual(true);
  });

  test('addPredefinedAssistantMessage', () => {
    // Arrange
    const predefinedMessage = { content: faker.lorem.sentence(), buttons: [] };

    // Act
    act(() => root.store.dispatch(addPredefinedAssistantMessage(predefinedMessage)));

    const lastEntry = [...getChat().historyIds].pop();
    // Assert
    expect(getChat().historyIds.length).toEqual(Object.entries(getChat().historyData).length);
    expect(getChat().historyData[lastEntry].content.length).toBe(2);
  });

  test('fillAssistantHistoryData adds new message to history when id is not stored', () => {
    const recordId = faker.string.uuid();

    // Act
    act(() => root.store.dispatch(fillAssistantHistoryData({ id: recordId })));

    // Assert
    expect(getChat().historyData[recordId]).toBeDefined();
    expect(getChat().historyIds.length).toEqual(Object.entries(getChat().historyData).length);
  });

  test('fillAssistantHistoryData deduplicates when we have sequence and type matching in one record', () => {
    // Arrange
    const recordId = faker.string.uuid();
    const firstRecordContent = { type: 'text', text: faker.lorem.sentence() };
    const secondRecordContent = { type: 'text', text: faker.lorem.sentence() };

    // Act
    act(() => {
      root.store.dispatch(fillAssistantHistoryData({ id: recordId }));
      root.store.dispatch(fillAssistantHistoryData({ id: recordId, content: firstRecordContent, sequence: 1 }));
      root.store.dispatch(fillAssistantHistoryData({ id: recordId, content: secondRecordContent, sequence: 1 }));
    });

    // Assert
    expect(getChat().historyData[recordId].content[0].text).toBe(firstRecordContent.text + secondRecordContent.text);
    expect(getChat().historyIds.length).toEqual(Object.entries(getChat().historyData).length);
    expect(getChat().historyIds.length).toEqual(1);
  });

  test('should fillUserHistoryData has one user record but with two messages', () => {
    // Arrange
    const recordId = faker.string.uuid();
    const groupId = faker.string.uuid();
    const firstSent = { groupId, sent: true, resend: false, message: faker.lorem.sentence() };
    const secondSent = { groupId, sent: true, resend: false, message: faker.lorem.sentence() };

    // Act
    act(() => {
      root.store.dispatch(fillUserHistoryData({ id: recordId, content: firstSent }));
      root.store.dispatch(fillUserHistoryData({ id: recordId, content: secondSent }));
    });

    // Assert
    expect(getChat().historyIds.length).toBe(1);
    expect(getChat().historyData[recordId].content.length).toBe(2);
  });

  test('should setTypingTimeoutExpired', () => {
    // Arrange
    const recordId = faker.string.uuid();
    const groupId = faker.string.uuid();
    const firstSent = { groupId, sent: true, resend: false, message: faker.lorem.sentence() };

    // Act
    act(() => {
      root.store.dispatch(fillUserHistoryData({ id: recordId, content: firstSent }));
      root.store.dispatch(setTypingTimeoutExpired(true));
    });

    // Assert
    expect(getChat().typingTimeoutExpired).toBe(true);
  });

  test('should setConnected true', () => {
    // Act
    act(() => root.store.dispatch(setConnected(true)));
    // Assert
    expect(getChat().connected).toBe(true);
  });

  test('should setConnected false', () => {
    // Act
    act(() => root.store.dispatch(setConnected(false)));
    // Assert
    expect(getChat().connected).toBe(false);
  });

  test('should setClosed', () => {
    // Act
    act(() => root.store.dispatch(setClosed()));

    // Assert
    expect(getChat().closed).toBe(true);
  });

  test('should showResendIcon', () => {
    // Arrange
    const recordId = faker.string.uuid();
    const groupId = faker.string.uuid();
    const firstSent = { groupId, sent: true, resend: false, message: faker.lorem.sentence() };

    // Act
    act(() => {
      root.store.dispatch(fillUserHistoryData({ id: recordId, content: firstSent }));
      root.store.dispatch(showResendIcon({ itemId: recordId }));
    });

    // Assert
    expect(getChat().historyData[recordId].content[0].resend).toBe(true);
    expect(getChat().historyData[recordId].content[0].sent).toBe(false);
  });

  test('should hideResendIcon', () => {
    // Arrange
    const recordId = faker.string.uuid();
    const groupId = faker.string.uuid();
    const firstSent = { groupId, sent: true, resend: false, message: faker.lorem.sentence() };

    // Act
    act(() => {
      root.store.dispatch(fillUserHistoryData({ id: recordId, content: firstSent }));
      root.store.dispatch(hideResendIcon({ itemId: recordId }));
    });

    // Assert
    expect(getChat().historyData[recordId].content[0].resend).toBe(false);
    expect(getChat().historyData[recordId].content[0].sent).toBe(true);
  });

  test('should setIsStreaming', () => {
    // Act
    act(() => root.store.dispatch(setIsStreaming(true)));

    // Assert
    expect(getChat().isStreaming).toBe(true);
  });
});


function getChat() {
  return root.store.getState().chat;
}
