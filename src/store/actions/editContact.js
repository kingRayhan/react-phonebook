import { EDIT_CONTACT } from './actionTypes'

export const editContact = (id, newData) => ({
    type: EDIT_CONTACT,
    payload: { id, newData },
})
