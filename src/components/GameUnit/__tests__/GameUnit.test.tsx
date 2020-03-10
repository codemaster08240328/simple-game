import * as React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { GameUnit, Props as IProps } from '../GameUnit';

describe('GameUnit', () => {
  let wrapper: ShallowWrapper;
  const props: IProps = {
    imgSrc: 'http://test.com',
    label: 'test',
  };

  beforeEach(() => {
    wrapper = shallow(<GameUnit {...props} />);
  });

  it('render correctly', () => {
    expect(wrapper).toHaveLength(1);
  });

  it('render image correctly', () => {
    expect(wrapper.find('img').props().src).toEqual(props.imgSrc);
  });

  it('render label correctly', () => {
    expect(wrapper.find('span').text()).toEqual(props.label);
  });
});
