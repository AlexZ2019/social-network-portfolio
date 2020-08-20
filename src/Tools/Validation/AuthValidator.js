export const required = (value) => {
    return !value && "Field is required"
};

export const checkValueLength = (minLength, maxLength) => value => {
    return value.length <= minLength
        ? "this field must contain at least " + minLength + " symbols"
        : value.length >= maxLength && "maximum symbols what can be entered if this field are " + maxLength
};


