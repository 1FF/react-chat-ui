import { act } from "react-dom/test-utils";
import { socket } from "socket.io-client";
import { faker } from "@faker-js/faker";
import { localSetup, localTearDown } from "../../__mocks__/storeSetup";
import { addPredefinedAssistantMessage, fillAssistantHistoryData, resetIsLoading, resetOutgoing, setExistingHistory, setIsLoading, setOutgoing } from "../../src/store/slices/chat";
import { Roles } from "../../src/config";
import initialState from "../../src/store/initialState";
import { serverHistoryMock } from "../../__fixtures__/chat";

socket.on = jest.fn();
socket.emit = jest.fn();
socket.close = jest.fn();

describe('chat slice must be working accordingly', () => {
  let root;
  beforeEach(async () => {
    socket.connected = true;
    root = await localSetup();
  });

  afterEach(localTearDown);

  test('setIsLoading is setting the loader to true', () => {
    // Act
    act(() => root.store.dispatch(setIsLoading()))

    // Assert
    expect(root.store.getState().chat.isLoading).toBe(true);
  });

  test('resetIsLoading is setting the loader to false', () => {
    // Act
    act(() => root.store.dispatch(resetIsLoading()))

    // Assert
    expect(root.store.getState().chat.isLoading).toBe(false);
  });

  test('setOutgoing sets the outgoing message correctly', () => {
    // Arrange
    const text = faker.lorem.sentence();

    // Act
    act(() => root.store.dispatch(setOutgoing(text)));

    // Assert
    expect(root.store.getState().chat.outgoing).toEqual({
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
    expect(root.store.getState().chat.outgoing).toEqual(initialState.chat.outgoing)
  });

  test('setExistingHistory sets store history and historyData and historyIds length matches', () => {
    // Arrange
    const lastServerEntry = [...serverHistoryMock].pop();

    // Act
    act(() => root.store.dispatch(setExistingHistory(serverHistoryMock)));

    // Assert
    const lastRecordId = [...root.store.getState().chat.historyIds].pop();
    const lastRecordData = root.store.getState().chat.historyData[lastRecordId];
    expect(root.store.getState().chat.historyIds.length).toEqual(serverHistoryMock.length);
    expect(Object.entries(root.store.getState().chat.historyData).length).toEqual(serverHistoryMock.length);
    expect(Object.entries(root.store.getState().chat.historyData).length).toEqual(root.store.getState().chat.historyIds.length);
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
    const lastRecordId = [...root.store.getState().chat.historyIds].pop();
    const lastRecordData = root.store.getState().chat.historyData[lastRecordId];
    expect(root.store.getState().chat.historyIds.length).toEqual(currentHistoryWithUnsentMessage.length);
    expect(Object.entries(root.store.getState().chat.historyData).length).toEqual(currentHistoryWithUnsentMessage.length);
    expect(Object.entries(root.store.getState().chat.historyData).length).toEqual(root.store.getState().chat.historyIds.length);
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

    const lastEntry = [...root.store.getState().chat.historyIds].pop();
    // Assert
    expect(root.store.getState().chat.historyIds.length).toEqual(Object.entries(root.store.getState().chat.historyData).length);
    expect(root.store.getState().chat.historyData[lastEntry].content.length).toBe(2);
  });

  test('fillAssistantHistoryData adds new message to history when id is not stored', () => {
    const recordId = faker.string.uuid();

    // Act
    act(() => root.store.dispatch(fillAssistantHistoryData({ id: recordId })));

    // Assert
    expect(root.store.getState().chat.historyData[recordId]).toBeDefined();
    expect(root.store.getState().chat.historyIds.length).toEqual(Object.entries(root.store.getState().chat.historyData).length);
  });

  test('fillAssistantHistoryData deduplicates when we have sequence and type matching in one record', () => {
    // Arrange
    const recordId = faker.string.uuid();
    const firstRecordContent = { type: 'text', text: faker.lorem.sentence()};
    const secondRecordContent = { type: 'text', text: faker.lorem.sentence()};

    // Act
    act(() => {
      root.store.dispatch(fillAssistantHistoryData({ id: recordId }));
      root.store.dispatch(fillAssistantHistoryData({ id: recordId, content: firstRecordContent , sequence: 1 }));
      root.store.dispatch(fillAssistantHistoryData({ id: recordId, content: secondRecordContent , sequence: 1 }));
    });

    // Assert
    expect(root.store.getState().chat.historyData[recordId].content[0].text).toBe(firstRecordContent.text + secondRecordContent.text);
    expect(root.store.getState().chat.historyIds.length).toEqual(Object.entries(root.store.getState().chat.historyData).length);
    expect(root.store.getState().chat.historyIds.length).toEqual(1);
  });
});
