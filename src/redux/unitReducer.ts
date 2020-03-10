import { Action, ActionCreator } from 'redux';

export const SET_UNIT = 'SET_UNIT';
export type SET_UNIT = typeof SET_UNIT;

export interface ISetUnitAction extends Action<SET_UNIT> {
  type: SET_UNIT;
  payload: number;
}

export const setUnitAction: ActionCreator<ISetUnitAction> = (payload) => ({
  type: SET_UNIT,
  payload,
});

export interface IUnitState {
  selectedUnit: number;
}

export const initialState: IUnitState = {
  selectedUnit: 0,
};

export const unitReducer = (state: IUnitState = initialState, action: ISetUnitAction) => {
  switch (action.type) {
    case SET_UNIT:
      return {
        ...state,
        selectedUnit: action.payload,
      };
    default:
      return state;
  }
};

export const getSelectedUnit = (state: IUnitState) => {
  return state.selectedUnit;
};
