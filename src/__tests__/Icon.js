import React from 'react'
import renderer from 'react-test-renderer'
import { Icon } from '..'
import icons from '../../icons.json'

const keys = Object.keys(icons)
const oldIcons = ['srollLeft', 'chevronLight', 'chevronThick']

describe('Icon', () => {
  keys.forEach(name => {
    test(`${name} renders`, () => {
      const icon = renderer.create(<Icon name={name} />).toJSON()
      expect(icon).toMatchSnapshot()
    })
  })

  oldIcons.forEach(name => {
    test(`${name} still renders old renamed icons`, () => {
      const icon = renderer.create(<Icon name={name} />).toJSON()
      expect(icon).toMatchSnapshot()
    })
  })

  test('returns false for non-existing icons', () => {
    // Mock out console.error since we're expecting a propType warning
    console.error = jest.genMockFunction()
    const icon = renderer.create(<Icon name="nope" />).toJSON()

    // We expect one propType warning.
    expect(console.error.mock.calls.length).toBe(1)
    expect(icon).toBe(null)
    jest.mock
  })
})
