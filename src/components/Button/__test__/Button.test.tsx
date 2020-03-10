import * as React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import Button, { Props as IProps } from '../Button';

describe('GameUnit', () => {
  let wrapper: ShallowWrapper;
  const props: IProps = {
    label: 'test',
  };

  beforeEach(() => {
    wrapper = shallow(<Button {...props} />);
  });

  it('render correctly', () => {
    expect(wrapper).toHaveLength(1);
  });

  it('render button correctly', () => {
    expect(wrapper.find('button').text()).toEqual(props.label);
  });
});
