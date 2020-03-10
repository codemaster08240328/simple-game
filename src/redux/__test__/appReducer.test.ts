import { appStartAction, appReducer, isAppStarted, IAppStartAction, initialState } from '../appReducer';

describe('AppReducer Test', () => {
  const AppStartAction: IAppStartAction = {
    type: 'APP_START',
  };

  it('appStartAction test', () => {
    const action = appStartAction();
    expect(action.type).toEqual(AppStartAction.type);
  });

  it('appReducer binds correctly', () => {
    const app_store = appReducer(initialState, AppStartAction);
    expect(app_store.started).toBeTruthy();
  });

  it('isAppStarted Function Worked Correctly', () => {
    expect(isAppStarted(initialState)).toBeFalsy();
  });
});
