import * as React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import Board, { Props as IProps } from '../Board';
import Button from '../../../components/Button';
import GameUnit from '../../../components/GameUnit';
import { IUnit, units } from '../../../utils/gameutil';
import { setUnitAction } from '../../../redux/unitReducer';
import { mapStateToProps } from '../';
import { initialState } from '../../../redux/getStore';

describe('GameUnit', () => {
  let wrapper: ShallowWrapper;

  const props: IProps = {
    curScore: {
      player: 0,
      computer: 0,
    },
    round: 0,
    selectedUnit: 0,
    setUnit: setUnitAction,
  };

  beforeEach(() => {
    wrapper = shallow(<Board {...props} />);
  });

  it('render correctly', () => {
    expect(wrapper).toHaveLength(1);
  });

  it('Player Score displayed correctly', () => {
    expect(wrapper.find('#player_current_score b').text()).toEqual(props.curScore.player.toString());
  });

  it('Computer Score displayed correctly', () => {
    expect(wrapper.find('#computer_current_score b').text()).toEqual(props.curScore.computer.toString());
  });

  it('Next Round displayed correctly', () => {
    expect(wrapper.find('#next_round b').text()).toEqual((props.round + 1).toString());
  });

  units.forEach((unit: IUnit, index: number) => {
    it(`Game Unit ${unit.label} rendered correctly`, () => {
      expect(
        wrapper
          .find(GameUnit)
          .at(index)
          .props().label
      ).toEqual(unit.label);
    });
  });

  it('Selected Unit displayed correctly', () => {
    expect(wrapper.find('.unit_selected').key()).toEqual(units[props.selectedUnit].label);
  });

  it('Start Battle Button rendered correctly', () => {
    expect(wrapper.find(Button).props().label).toEqual('Start Battle');
    const new_props = {
      ...props,
      selectedUnit: 10,
    };
    let new_wrapper = shallow(<Board {...new_props} />);
    expect(new_wrapper.find(Button).exists()).toBe(false);
  });

  it('Properly binds state', () => {
    const props = mapStateToProps({
      ...initialState,
      unit: {
        selectedUnit: 2,
      },
      round: {
        round: 2,
      },
      score: {
        computerScore: 2,
        playerScore: 2,
      },
    });

    expect(props.selectedUnit).toEqual(2);
    expect(props.round).toEqual(2);
    expect(props.curScore.player).toEqual(2);
    expect(props.curScore.computer).toEqual(2);
  });
});
