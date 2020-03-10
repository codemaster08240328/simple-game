import { Action, ActionCreator } from 'redux';

export const NEXT_ROUND = 'NEXT_ROUND';
export type NEXT_ROUND = typeof NEXT_ROUND;

export interface INextRoundAction extends Action<NEXT_ROUND> {
  type: NEXT_ROUND;
}

export const nextRoundAction: ActionCreator<INextRoundAction> = () => ({
  type: NEXT_ROUND,
});

export interface IRoundState {
  round: number;
}

export const initialState: IRoundState = {
  round: 0,
};

export const roundReducer = (state: IRoundState = initialState, action: INextRoundAction) => {
  switch (action.type) {
    case NEXT_ROUND:
      return {
        ...state,
        round: state.round + 1,
      };
    default:
      return state;
  }
};

export const getRound = (state: IRoundState) => {
  return state.round;
};
