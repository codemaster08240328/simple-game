import { setUnitAction, unitReducer, ISetUnitAction, getSelectedUnit, initialState } from '../unitReducer';

describe('UnitReducer Test', () => {
  const SetUnitAction: ISetUnitAction = {
    type: 'SET_UNIT',
    payload: 1,
  };

  it('SetUnitAction test', () => {
    const action = setUnitAction(1);
    expect(action.type).toEqual(SetUnitAction.type);
    expect(action.payload).toEqual(1);
  });

  it('unitReducer binds correctly', () => {
    const unit_store = unitReducer(initialState, SetUnitAction);
    expect(unit_store.selectedUnit).toEqual(SetUnitAction.payload);
  });

  it('getSelectedUnit worked correctly', () => {
    expect(getSelectedUnit(initialState)).toEqual(0);
  });
});
