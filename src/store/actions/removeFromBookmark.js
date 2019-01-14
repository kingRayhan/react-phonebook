import { REMOVE_BOOKMARK } from './actionTypes'

export const removeFromBookmark = id => ({ type: REMOVE_BOOKMARK, payload: id })
