import { scoreCalcAction, scoreReducer, getScore, initialState, IScoreCalcAction } from '../scoreReducer';

describe('ScoreReducer Test', () => {
  const ScoreCalcAction: IScoreCalcAction = {
    type: 'CALC_SCORE',
    payload: 'win',
  };

  it('SetUnitAction test', () => {
    const action = scoreCalcAction('win');
    expect(action.type).toEqual(ScoreCalcAction.type);
    expect(action.payload).toEqual(ScoreCalcAction.payload);
  });

  it('unitReducer binds correctly', () => {
    const score_store = scoreReducer(initialState, ScoreCalcAction);
    expect(score_store.playerScore).toEqual(1);
    expect(score_store.computerScore).toEqual(-1);
  });

  it('getScore worked correctly', () => {
    expect(getScore(initialState).computer).toEqual(0);
    expect(getScore(initialState).player).toEqual(0);
  });
});
