const REQUIRED:string = 'This field is required!';
const INVALID_EMAIL:string = 'This is not a valid email.';
const PASSWORD_LENGTH:string = 'The password must be between 6 and 18 characters.'
const USERNAME_LENGTH:string = 'The username must be between 3 and 20 characters.'
const PASSWORD_MISMATCHED:string = 'Password mismatch.'

export function validateEmail(value: string, isRequired: boolean = true): string {
    let error = '';
    if (!value && isRequired) {
        error = REQUIRED;
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
        error = INVALID_EMAIL;
    }
    return error;
}

export function validatePassword(value: string, isRequired: boolean = true): string {
    let error = '';
    if (!value && isRequired) {
        error = REQUIRED;
    } else if (value.length < 6 || value.length > 18) {
        error = PASSWORD_LENGTH;
    }
    return error;
}

export function validateUsername(value: string, isRequired: boolean = true): string {
    let error = '';
    if (!value && isRequired) {
        error = REQUIRED;
    } else if (value.length < 3 || value.length > 20) {
        error = USERNAME_LENGTH;
    }
    return error;
}

export function confirmPassword(value: string, comparable:string, isRequired: boolean = true): string {
    let error = '';
    if (!value && isRequired) {
        error = REQUIRED;
    } else if (value.length < 6 || value.length > 18) {
        error = PASSWORD_LENGTH;
    } else if (value !== comparable) {
        error = PASSWORD_MISMATCHED;
    }
    return error;
}
