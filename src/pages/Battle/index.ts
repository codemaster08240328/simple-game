import { connect } from 'react-redux';
import Battle from './Battle';
import { IRootState } from '../../redux/getStore';
import { getScore, scoreCalcAction } from '../../redux/scoreReducer';
import { getRound, nextRoundAction } from '../../redux/roundReducer';
import { getSelectedUnit } from '../../redux/unitReducer';

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
  nextRound: nextRoundAction,
  calcScore: scoreCalcAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(Battle);
