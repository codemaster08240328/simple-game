import { Action, applyMiddleware, createStore, Store, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import { appReducer, AppActions, initialState as appInitialState } from './appReducer';
import { scoreReducer, IScoreCalcAction, initialState as scoreInitialState } from './scoreReducer';
import { roundReducer, INextRoundAction, initialState as roundInitialState } from './roundReducer';
import { unitReducer, ISetUnitAction, initialState as unitInitialState } from './unitReducer';

export type rootAction = AppActions | IScoreCalcAction | INextRoundAction | ISetUnitAction;

export const rootReducer = combineReducers({
  app: appReducer,
  score: scoreReducer,
  round: roundReducer,
  unit: unitReducer,
});

export type IRootState = ReturnType<typeof rootReducer>;

export const initialState: IRootState = {
  app: appInitialState,
  score: scoreInitialState,
  round: roundInitialState,
  unit: unitInitialState,
};

export type RootStore = Store<IRootState, rootAction | Action>;

export default function getStore(): RootStore {
  const store = createStore(rootReducer, composeWithDevTools(applyMiddleware()));
  return store;
}
