import {
    ADD_CONTACT,
    REMOVE_CONTACT,
    EDIT_CONTACT,
} from '../actions/actionTypes'

const contacts = [
    {
        id: '145dsds',
        name: 'name1',
        email: 'user1@exampl.com',
        phone: '123456',
    },
    {
        id: '145ghfgdsds',
        name: 'name2',
        email: 'user1@exampl.com',
        phone: '123456',
    },
    {
        id: '145dsdfghdfs',
        name: 'name3',
        email: 'user1@exampl.com',
        phone: '123456',
    },
    {
        id: '145dsdgghghfhfgs',
        name: 'name4',
        email: 'user1@exampl.com',
        phone: '123456',
    },
]

const reducer = (state = contacts, { type, payload }) => {
    switch (type) {
        case ADD_CONTACT: {
            return [payload, ...state]
        }
        case REMOVE_CONTACT: {
            // id -> payload
            const contacts = [...state]
            const index = contacts.findIndex(contact => contact.id === payload)
            contacts.splice(index, 1)
            return contacts
        }
        case EDIT_CONTACT: {
            // payload: { id , newdata }
            const contacts = [...state]
            const index = contacts.findIndex(
                contact => contact.id === payload.id
            )
            contacts[index] = payload.newData
            return contacts
        }
        default:
            return state
    }
}

export default reducer
