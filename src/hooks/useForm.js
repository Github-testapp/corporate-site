import { useState } from 'react';

export default function useForm(initialValues, validationSchema) {
    const [values, setValues] = useState(initialValues);
    const [errors, setErrors] = useState({});
    const [touched, setTouched] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const validate = async (fieldValues = values) => {
        if (validationSchema) {
            try {
                await validationSchema.validate(fieldValues, { abortEarly: false });
                setErrors({});
                return {};
            } catch (validationErrors) {
                const errorsObj = {};

                validationErrors.inner.forEach((error) => {
                    errorsObj[error.path] = error.message;
                });

                setErrors(errorsObj);
                return errorsObj;
            }
        }
        return {};
    };

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        const fieldValue = type === 'checkbox' ? checked : value;

        setValues((prevValues) => ({
            ...prevValues,
            [name]: fieldValue,
        }));

        setTouched((prevTouched) => ({
            ...prevTouched,
            [name]: true,
        }));
    };

    const handleBlur = (e) => {
        const { name } = e.target;

        setTouched((prevTouched) => ({
            ...prevTouched,
            [name]: true,
        }));

        validate({
            ...values,
            [name]: values[name],
        });
    };

    const handleSubmit = (callback) => async (e) => {
        e.preventDefault();
        setTouched(
            Object.keys(values).reduce((touched, field) => {
                touched[field] = true;
                return touched;
            }, {})
        );

        const validationErrors = await validate();

        if (Object.keys(validationErrors).length === 0) {
            setIsSubmitting(true);
            await callback(values);
            setIsSubmitting(false);
        }
    };


    const resetForm = () => {
        setValues(initialValues);
        setErrors({});
        setTouched({});
        setIsSubmitting(false);
    };

    return {
        values,
        errors,
        touched,
        isSubmitting,
        handleChange,
        handleBlur,
        handleSubmit,
        resetForm,
    };
}