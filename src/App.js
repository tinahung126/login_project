import './App.css'
import React from 'react'
import { useForm } from './useForm'

function App () {
  const { handleChange, handleSubmit, values, errors } = useForm({
    initialValues: { account: '', password: '', rememberMe: false },
    validation: (values) => {
      const errors = {}
      if (!values.account) {
        errors.account = '請輸入帳號'
      } else if (!values.password) {
        errors.password = '請輸入密碼'
      }
      return errors
    },
    onSubmit: (values) => console.table(values)
  })
  return (
    <div className="App">
      <header className="App-header">
        {values.onsubmited && <div className="alert alert-success fs-5 p-2 w-25"
            role="alert">Success!</div>}
        <input className=" form-control w-25"
              name="account"
              onChange={handleChange}
              value={values.account}
              placeholder="Account" />
        {errors.account && (<div className="text-danger">{errors.account}</div>)}
        <input className="form-control w-25 mt-3"
              name="password"
              onChange={handleChange}
              value={values.password}
              placeholder="password" />
        {errors.password && (<div className="text-danger">{errors.password}</div>)}
        <label className="form-control-sm form-check-label mb-2">
          <input className=" form-check-input me-2"
                type="checkbox"
                name="rememberMe"
                onChange={handleChange}
                checked={values.rememberMe} />Remember Me</label>
        <button className="btn btn-primary"
                onClick={handleSubmit}>Login</button>
      </header>
    </div>
  )
}

export default App
