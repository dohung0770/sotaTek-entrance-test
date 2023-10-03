import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import { beforeEach, describe, expect, it } from 'vitest'
import App from '../src/App'
import { getScenes } from '../src/seed'

function sleep(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

describe('Mounting', () => {
  beforeEach(() => {
    render(<App />)
  })

  it('It should render properly!', () => {
    const scenes = getScenes()

    // Image
    expect(screen.getAllByAltText(scenes[1].backgroundImage)[0]).toBeDefined()

    // Button move left
    expect(screen.getByTitle('move-left')).toBeDefined()

    // Button move right
    expect(screen.getByTitle('move-right')).toBeDefined()
  })

  it('Moving screen to right', async () => {
    const container = screen.getAllByTitle('scroller')
    const viewport = container[0]
    expect(viewport.scrollLeft).toBe(0)

    const moveRightBtn = screen.getAllByTitle('move-right')
    fireEvent.click(moveRightBtn[0])

    await sleep(100)

    expect(viewport.scrollLeft).greaterThan(0)
  })


  // it('Moving screen to left', async () => {
  //   fireEvent.click(screen.getAllByTitle('move-right')[0])
  //   await sleep(100)
    
  //   fireEvent.click(screen.getAllByTitle('move-left')[0])
  //   await sleep(100)

  //   const viewport = screen.getAllByTitle('scroller')
  //   expect(viewport[0].scrollLeft).toBe(0)
  // })

  it('Chaning scene', async () => {
    const scenes = getScenes()
    const currImg = screen.getAllByAltText(scenes[1].backgroundImage)[0]
    expect(currImg).toBeDefined()

    const btns = screen.getAllByTitle('move')
    fireEvent.click(btns[0])

    await sleep(100)

    const nextScene = scenes[scenes[1].hitzones[0].id]
    expect(
      screen.getAllByAltText(nextScene.backgroundImage)[0]
    ).not.equals(currImg.getAttribute('alt'))

    expect(
      nextScene.backgroundImage
    ).equals(scenes[2].backgroundImage)
  })
})
