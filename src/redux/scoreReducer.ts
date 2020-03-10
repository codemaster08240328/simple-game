import { Action, ActionCreator } from 'redux';

export const CALC_SCORE = 'CALC_SCORE';
export type CALC_SCORE = typeof CALC_SCORE;

export interface IScoreCalcAction extends Action<CALC_SCORE> {
  type: CALC_SCORE;
  payload: 'win' | 'loss' | 'none';
}

export const scoreCalcAction: ActionCreator<IScoreCalcAction> = (payload) => ({
  type: CALC_SCORE,
  payload,
});

export interface ICalcState {
  playerScore: number;
  computerScore: number;
}

export const initialState: ICalcState = {
  playerScore: 0,
  computerScore: 0,
};

export const scoreReducer = (state: ICalcState = initialState, action: IScoreCalcAction) => {
  switch (action.type) {
    case CALC_SCORE:
      return {
        ...state,
        playerScore: state.playerScore + (action.payload === 'win' ? 1 : -1),
        computerScore: state.computerScore + (action.payload === 'loss' ? 1 : -1),
      };
    default:
      return state;
  }
};

export interface IScoreObj {
  computer: number;
  player: number;
}

export const getScore = (state: ICalcState): IScoreObj => {
  return {
    computer: state.computerScore,
    player: state.playerScore,
  };
};
