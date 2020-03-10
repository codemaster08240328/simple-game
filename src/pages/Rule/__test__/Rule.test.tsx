import * as React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import Rule from '../Rule';
import Button from '../../../components/Button';

describe('GameUnit', () => {
  let wrapper: ShallowWrapper;

  beforeEach(() => {
    wrapper = shallow(<Rule />);
  });

  it('render correctly', () => {
    expect(wrapper).toHaveLength(1);
  });

  it('content rendered correctly', () => {
    expect(wrapper.find('li')).toHaveLength(3);
  });

  it('Return button rendered correctly', () => {
    expect(wrapper.find(Button).props().label).toEqual('Return to the game');
  });
});
