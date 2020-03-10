import getStore, { rootReducer, initialState } from '../getStore';
import { appStartAction } from '../appReducer';

describe('redux related tests', () => {
  it('reducer should return initial state', () => {
    const state = rootReducer(undefined, { type: 'something' });
    expect(state).toEqual(initialState);
  });

  it('reducer should return started state', () => {
    const testAction = appStartAction();
    const expectedState = {
      ...initialState,
      app: {
        started: true,
      },
    };
    const state = rootReducer(initialState, testAction);
    expect(state).toEqual(expectedState);
  });

  it('creates redux store without crashing', () => {
    const store = getStore();
    expect(store.getState).toBeDefined();
    expect(store.dispatch).toBeDefined();
    expect(store.subscribe).toBeDefined();
  });
});
