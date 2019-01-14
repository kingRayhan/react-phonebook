import { combineReducers } from 'redux'

import contacts from './contactReducer'
import bookmarks from './bookmarkReducer'

const rootReducer = combineReducers({ contacts, bookmarks })

export default rootReducer
