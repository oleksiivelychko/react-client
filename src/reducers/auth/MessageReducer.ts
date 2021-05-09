import { SET_MESSAGE, CLEAR_MESSAGE } from '../../types/auth/AuthTypes';

const initialState = {};

export default function message(state = initialState, action: { type: any; payload: any; }) {
    const { type, payload } = action;

    switch (type) {
        case SET_MESSAGE:
            return { message: payload };

        case CLEAR_MESSAGE:
            return { message: '' };

        default:
            return state;
    }
}
