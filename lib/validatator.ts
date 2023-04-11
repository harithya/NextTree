import { ValidationError, ValidationErrorItem } from "joi";

const validation = (errors: ValidationError | undefined): any => {
    const newError: any = {};

    if (errors) {
        errors.details.map((val) => {
            newError[val.path[0]] = val.message.replace("\"", "").replace("\"", "");
        })
    }
    return newError;
}

export default validation;