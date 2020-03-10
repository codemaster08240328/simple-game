import * as React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import Home from '../Home';
import Button from '../../../components/Button';

describe('GameUnit', () => {
  let wrapper: ShallowWrapper;

  beforeEach(() => {
    wrapper = shallow(<Home />);
  });

  it('render correctly', () => {
    expect(wrapper).toHaveLength(1);
  });

  it('Start button rendered correctly', () => {
    expect(
      wrapper
        .find(Button)
        .at(0)
        .props().label
    ).toEqual('Start Game');
  });

  it('Rule button rendered correctly', () => {
    expect(
      wrapper
        .find(Button)
        .at(1)
        .props().label
    ).toEqual('Game Rule');
  });
});
