// redux/actions.js
import { SELECT_PAGE } from './actionTypes'

export const selectPage = page => ({
  type: SELECT_PAGE,
  payload: {
    page
  }
})