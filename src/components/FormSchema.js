import * as yup from 'yup'

const formSchema = yup.object().shape({
    name: yup
        .string()
        .trim()
        .required('Please Enter a Name for the Order')
        .min(2, 'name must be at least 2 characters'),
    size: yup
        .string()
        .oneOf(['small', 'medium', 'large', 'XL'], 'Please pick a size'),
    pepperoni: yup.boolean(),
    sausage: yup.boolean(),
    mushroom: yup.boolean(),
    pepper: yup.boolean(),
    special: yup
        .string()
        .trim()
})

export default formSchema;