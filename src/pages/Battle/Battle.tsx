import React, { useEffect, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';

import GameUnit from '../../components/GameUnit';
import Button from '../../components/Button';
import { units, getGameResult } from '../../utils/gameutil';
import { getComputerUnit } from '../../utils/helper';

import { IScoreObj } from '../../redux/scoreReducer';

import './Battle.css';

export interface Props {
  curScore: IScoreObj;
  round: number;
  selectedUnit: number;
  nextRound: () => void;
  calcScore: (gameResult: string) => void;
}

const Battle: React.FC<Props> = ({ curScore, round, selectedUnit, nextRound, calcScore }) => {
  const [computerUnit] = useState(getComputerUnit());
  const [gameResult] = useState(getGameResult(selectedUnit, computerUnit));

  useEffect(() => {
    nextRound();
  }, [nextRound]);

  useEffect(() => {
    calcScore(gameResult);
  }, [calcScore]);

  if (selectedUnit > 3) {
    return <Redirect to="/" />;
  }

  return (
    <div className="page-wrapper">
      <header className="header-wrapper">
        <div className="battle_round-wrapper">
          <span>Current Round:</span>
          <span id="current_round">
            <b>{round}</b>
          </span>
        </div>
      </header>
      <div className="battle_content-wrapper">
        <div className="battle_unit-wrapper">
          <div className="battle_gameunit_player-label">Player:</div>
          <GameUnit imgSrc={units[selectedUnit].imgSrc} label={units[selectedUnit].label} />
        </div>
        <div className="battle_result-wrapper">
          {gameResult === 'win' && <div className="battle_result-txt">Win this Round</div>}
          {gameResult === 'loss' && <div className="battle_result_loss-txt">Loss this Round</div>}
          {gameResult === 'none' && <div className="battle_result_none-txt">Both are defeathed.</div>}
          {round === 20 && <div>Game is end.</div>}
          <div className="battle_result-score">Your current Score: {curScore.player}</div>
          <div className="battle_result-action">
            {round !== 20 && (
              <Link to="/board">
                <Button label="Next Round" />
              </Link>
            )}
            <a href="/">
              <Button label="Exit Game" />
            </a>
          </div>
        </div>
        <div className="battle_unit-wrapper">
          <div className="battle_gameunit_player-label">Computer:</div>
          <GameUnit imgSrc={units[computerUnit].imgSrc} label={units[computerUnit].label} />
        </div>
      </div>
    </div>
  );
};

export default Battle;
