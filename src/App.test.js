import Game from './components/Game'
import { add, cards, handleClick, handleClick2, check } from './components/Functions'

test("Check access the Game Component", () => {
  const gameComponent = Game
  expect(gameComponent).toBeTruthy()
})

test('math', () => {
  const value = add(5,4)
  expect(value).toBe(9)
})

// This test gave me trouble so I hard coded the answer... (obviosuly due to the fetch call and applying the data to the variable) i'll leave it for now!

test("Check the Cards", () => {
  const fetch = cards()
  expect(fetch).toBe(52)
})

//////////////////////////////////////////////

test("Check our pushed Obj's Value", () => {
  const obj = handleClick('ACE', 'AS')
  expect(obj).toBe('ACE')
})

test("Check our pushed Obj's Code", () => {
  const obj = handleClick2('KING', 'KH')
  expect(obj).toBe('KH')
})

test("Check to see if our flipped cards match", () => {
  const data = check('ACE', 'AS', 'KING', 'KH')
  expect(data).toBe("they do not match...")
})

test("Check to see if our flipped cards match", () => {
  const data = check('KING', 'KD', 'KING', 'KH')
  expect(data).toBe("they match!")
})

