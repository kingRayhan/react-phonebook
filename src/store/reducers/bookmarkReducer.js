import { ADD_BOOKMARK, REMOVE_BOOKMARK } from '../actions/actionTypes'

const reducer = (state = [], { type, payload }) => {
    switch (type) {
        case ADD_BOOKMARK: {
            const bookmarks = [...state]
            const exits = bookmarks.filter(
                bookmark => bookmark.id === payload.id
            ).length
                ? true
                : false

            if (exits) {
                const index = bookmarks.findIndex(
                    contact => contact.id === payload.id
                )
                bookmarks.splice(index, 1)
                return bookmarks
            }

            return [payload, ...state]
        }
        case REMOVE_BOOKMARK: {
            const bookmarks = [...state]
            const index = bookmarks.findIndex(contact => contact.id === payload)
            bookmarks.splice(index, 1)
            return bookmarks
        }

        default:
            return state
    }
}

export default reducer
