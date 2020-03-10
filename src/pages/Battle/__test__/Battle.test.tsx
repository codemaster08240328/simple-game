import * as React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import Battle, { Props as IProps } from '../Battle';
import Button from '../../../components/Button';
import GameUnit from '../../../components/GameUnit';
import { nextRoundAction } from '../../../redux/roundReducer';
import { scoreCalcAction } from '../../../redux/scoreReducer';
import { units } from '../../../utils/gameutil';
import * as Helper from '../../../utils/helper';

describe('GameUnit', () => {
  let wrapper: ShallowWrapper;

  const props: IProps = {
    curScore: {
      computer: 0,
      player: 0,
    },
    round: 1,
    selectedUnit: 1,
    nextRound: nextRoundAction,
    calcScore: scoreCalcAction,
  };

  beforeEach(() => {
    wrapper = shallow(<Battle {...props} />);
    jest.spyOn(React, 'useEffect').mockImplementation((f) => f());
    jest.spyOn(Helper, 'getComputerUnit').mockImplementation(() => 2);
  });

  it('render correctly', () => {
    expect(wrapper).toHaveLength(1);
  });

  it('Current Round displayed correctly.', () => {
    expect(wrapper.find('#current_round b').text()).toEqual(props.round.toString());
  });

  it('Selected Unit rendered correctly', () => {
    expect(
      wrapper
        .find(GameUnit)
        .at(0)
        .props().label
    ).toEqual(units[props.selectedUnit].label);
  });

  it('Computer Unit selected correctly', () => {
    expect(
      wrapper
        .find(GameUnit)
        .at(1)
        .props().label
    ).toEqual(units[2].label);
  });

  it('Current Score displayed correctly', () => {
    expect(wrapper.find('.battle_result-score').text()).toEqual(
      `Your current Score: ${props.curScore.player.toString()}`
    );
  });

  it('Next Round Button displayed correctly', () => {
    expect(
      wrapper
        .find(Button)
        .at(0)
        .props().label
    ).toEqual('Next Round');
  });

  it('Exit Game Button displayed correctly', () => {
    expect(
      wrapper
        .find(Button)
        .at(1)
        .props().label
    ).toEqual('Exit Game');
  });
});
