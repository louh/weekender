/* eslint-env jest */
import React from 'react'
import renderer from 'react-test-renderer'
import Icon from '../Icon'

describe('<Icon>', () => {
  it('renders bus icon', () => {
    const component = renderer.create(
      <Icon type="bus" />
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders accessibility icon', () => {
    const component = renderer.create(
      <Icon type="isa" />
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
