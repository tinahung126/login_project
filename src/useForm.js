import { useState } from 'react'

export const useForm = (options) => {
  const { initialValues, validation, onSubmit } = options
  const [values, setValues] = useState((initialValues || {}))
  const [errors, setErrors] = useState({})

  const handleChange = (event) => {
    if (event.target.type === 'checkbox') {
      setValues(values => ({ ...values, [event.target.name]: !values[event.target.name] }))
    } else {
      setValues(values => ({ ...values, [event.target.name]: event.target.value }))
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    let isValid = true

    if (validation) {
      const errors = validation(values)
      setErrors({ ...errors })
      if (Object.keys(errors).length !== 0) {
        isValid = false
        setValues(values => ({ ...values, onsubmited: false }))
      }
      if ((onSubmit) && isValid) {
        onSubmit(values)
        setValues(values => ({ ...values, onsubmited: true }))
      }
    }
  }
  return {
    values,
    handleChange,
    handleSubmit,
    errors
  }
}
