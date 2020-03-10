import { connect } from 'react-redux';
import Board from './Board';
import { IRootState } from '../../redux/getStore';
import { getScore } from '../../redux/scoreReducer';
import { getRound } from '../../redux/roundReducer';
import { setUnitAction, getSelectedUnit } from '../../redux/unitReducer';

export const mapStateToProps = (state: IRootState) => {
  const curScore = getScore(state.score);
  const round = getRound(state.round);
  const selectedUnit = getSelectedUnit(state.unit);
  return {
    curScore,
    round,
    selectedUnit,
  };
};

export const mapDispatchToProps = {
  setUnit: setUnitAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(Board);
