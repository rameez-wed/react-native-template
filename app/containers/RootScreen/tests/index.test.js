/**
 *
 * Tests for HomeScreen
 *
 * @see https://github.com/react-boilerplate/react-boilerplate/tree/master/docs/testing
 *
 */

import React from 'react'
import { renderWithIntl } from 'app/utils/testUtils'
import { RootScreen as RootScreenTest } from '../index'

describe('<HomeScreen />', () => {
  let submitSpy

  beforeAll(() => {
    submitSpy = jest.fn()
  })

  it('Should render and match the snapshot', () => {
    const { baseElement } = renderWithIntl(
      <RootScreenTest startup={submitSpy} />
    )
    expect(baseElement).toMatchSnapshot()
  })

  it('should call the startup prop on mount', () => {
    renderWithIntl(<RootScreenTest startup={submitSpy} />)
    expect(submitSpy).toHaveBeenCalled()
  })

  it('should not render rootSceen Container', () => {
    const { getByTestId } = renderWithIntl(
      <RootScreenTest startup={submitSpy} />
    )
    expect(getByTestId('root-screen').type).toBe('View')
    expect(submitSpy).toHaveBeenCalled()
  })
})
