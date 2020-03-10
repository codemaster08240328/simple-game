import * as React from 'react';
import { Link } from 'react-router-dom';

import GameUnit from '../../components/GameUnit';
import Button from '../../components/Button';

import { IUnit, units } from '../../utils/gameutil';

import { IScoreObj } from '../../redux/scoreReducer';
import './Board.css';

export interface Props {
  curScore: IScoreObj;
  round: number;
  selectedUnit: number;
  setUnit: (unitId: number) => void;
}

export const Board: React.FC<Props> = ({ curScore, round, selectedUnit, setUnit }) => {
  return (
    <div className="page-wrapper">
      <header className="header-wrapper">
        <div className="board_score-wrapper">
          <span>Player Current Score: </span>
          <span id="player_current_score">
            <b>{curScore.player}</b>
          </span>
        </div>

        <div className="board_score-wrapper">
          <span>Computer Current Score: </span>
          <span id="computer_current_score">
            <b>{curScore.computer}</b>
          </span>
        </div>

        <div className="board_round-wrapper">
          <span>Next Round:</span>
          <span id="next_round">
            <b>{round + 1}</b>
          </span>
        </div>
      </header>
      <div className="board_content-wrapper">
        <h2>Select your unit for the next round</h2>

        <div className="unit_select-wrapper">
          {units.map((item: IUnit, index: number) => {
            return (
              <div
                key={item.label}
                className={`unit_item-wrapper ${selectedUnit === index ? 'unit_selected' : ''}`}
                onClick={() => setUnit(index)}>
                <GameUnit imgSrc={item.imgSrc} label={item.label} />
              </div>
            );
          })}
        </div>

        <div className="board_action-wrapper">
          {selectedUnit < 10 && (
            <Link to="/battle">
              <Button label="Start Battle" />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Board;
