import { act } from "react-dom/test-utils";
import { socket } from "socket.io-client";
import { localSetup, localTearDown } from "../../__mocks__/storeSetup";

import { contentMock } from "../../__fixtures__/chat";
import { setResponseFormVisibility } from "../../src/store/slices/intentions";
import { Definition } from "../../src/config/enums";

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

  test('setResponseFormVisibility in case of buttons', () => {
    // Act
    act(() => root.store.dispatch(setResponseFormVisibility(contentMock)))

    // Assert
    expect(getIntentions().response.isFormVisible).toBe(false);
    expect(getIntentions().email.isFormVisible).toBe(false);
    expect(getIntentions().payment.isFormVisible).toBe(false);
  });

  test('setResponseFormVisibility in case of email', () => {
    // Act
    act(() => root.store.dispatch(setResponseFormVisibility([...contentMock, { type: Definition.email, [Definition.email]: 'Provide email' }])))

    // Assert
    expect(getIntentions().response.isFormVisible).toBe(false);
    expect(getIntentions().email.isFormVisible).toBe(true);
    expect(getIntentions().payment.isFormVisible).toBe(false);
  });

  test('setResponseFormVisibility in case of payment', () => {
    // Act
    act(() => root.store.dispatch(setResponseFormVisibility([...contentMock, { type: Definition.payment, [Definition.payment]: 'Provide payment' }])))

    // Assert
    expect(getIntentions().response.isFormVisible).toBe(false);
    expect(getIntentions().email.isFormVisible).toBe(false);
    expect(getIntentions().payment.isButtonVisible).toBe(true);
  });
});


function getIntentions() {
  return root.store.getState().intentions;
}
