import { nextRoundAction, roundReducer, INextRoundAction, getRound, initialState } from '../roundReducer';

describe('RoundReducer Test', () => {
  const NextRoundAction: INextRoundAction = {
    type: 'NEXT_ROUND',
  };

  it('NextRoundAction test', () => {
    const action = nextRoundAction();
    expect(action.type).toEqual(NextRoundAction.type);
  });

  it('roundReducer binds correctly', () => {
    const round_store = roundReducer(initialState, NextRoundAction);
    expect(round_store.round).toEqual(1);
  });

  it('getRound worked correctly', () => {
    expect(getRound(initialState)).toEqual(0);
  });
});
