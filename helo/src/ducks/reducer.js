const initialState = { username: '', password: ''}

const USER = 'USER'

export function updateInfo(username) {
    return {
        type: USER,
        payload: username
    }
}


export default function reducer(state = initialState, action) {
    switch (action.type) {
        case USER:
            return Object.assign({}, state, { user: action.payload })
        default:
            return state;
    }
}