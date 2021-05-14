import {
    SET_VALIDATION_ERRORS,
    CLEAR_VALIDATION_ERRORS,
} from '../../actions/Types';

const initialState = {};

export default function validationErrors(state = initialState, action: { type: any; payload: any; }) {
    const { type, payload } = action;

    switch (type) {
        case SET_VALIDATION_ERRORS:
            return { validationErrors: payload };

        case CLEAR_VALIDATION_ERRORS:
            return { validationErrors: {} };

        default:
            return state;
    }
}
