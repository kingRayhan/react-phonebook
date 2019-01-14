import { ADD_CONTACT } from './actionTypes'
import { v4 } from 'uuid'
export const addContact = contact => ({
    type: ADD_CONTACT,
    payload: { id: v4(), ...contact },
})
