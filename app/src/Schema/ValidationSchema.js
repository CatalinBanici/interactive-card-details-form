import * as yup from 'yup';

 export const schema = yup.object().shape({
    cardName: yup
        .string()
        .required("Can't be blank"),
    cardNumber: yup
        .number()
        .typeError("Wrong format, numbers only")
        .positive("Must be a positive number")
        .integer("Must be an integer")
        .required("Can't be blank"),
    expDateM: yup
        .number()
        .typeError("Wrong format, numbers only")
        .positive("Must be a positive number")
        .integer("Must be an integer")
        .required("Can't be blank"),
    expDateY: yup
        .number()
        .typeError("Wrong format, numbers only")
        .positive()
        .integer()
        .required("Can't be blank"),
    cvc: yup
        .number()
        .typeError("Wrong format, numbers only")
        .positive("Must be a positive number")
        .integer("Must be an integer")    
        .required("Can't be blank")

    
})
