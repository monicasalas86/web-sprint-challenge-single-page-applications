import React, {useState, useEffect} from "react"
import axios from 'axios'
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Form from './components/PizzaForm'
import schema from './components/FormSchema'
import * as yup from 'yup'
import Home from './components/Home'

const initialFormValues = {
  name: '',
  size: '',
  pepperoni: false,
  sausage: false,
  mushroom: false,
  pepper: false,
  special: ''
}

const initialFormErrors = {
  name: '',
  size: ''
}

const initialOrder = []
const initialDisabled = true


const App = () => {

  const [order, setOrder] = useState(initialOrder)
  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [disabled, setDisabled] =useState(initialDisabled)

  const postNewOrder = newOrder => {
    axios.post('https://reqres.in/api/orders', newOrder)
      .then(res => {
        setOrder([res.data.data, ...order])
        setFormValues(initialFormValues)
      }).catch(err => {
        console.log(err)
        setFormValues(initialFormValues)
      })
  }

  const validate = (name, value) => {
    yup.reach(schema, name)
      .validate(value)
      .then(() => setFormErrors({ ...formErrors, [name]: ''}))
      .catch(err => setFormErrors({ ...formErrors, [name]: err.errors[0]}))
  }

  const inputChange = (name, value) => {
    validate(name, value)
    setFormValues({
      ...formValues,
      [name]: value
    })
  }

  const formSubmit = () => {
    const newOrder = {
      name: formValues.name.trim(),
      size: formValues.size,
      toppings: ['pepperoni', 'sausage', 'mushroom', 'pepper'].filter(topping => !!formValues[topping]),
      special: formValues.special.trim()
    }
    postNewOrder(newOrder);
  }

  useEffect(() => {
    schema.isValid(formValues).then(valid => setDisabled(!valid))
  }, [formValues])

  return (
    <Router>
      <div>
        <Home path='/pizza'/>
        <Switch>
          <Route render={() => <Form
              values={formValues}
              change={inputChange}
              submit={formSubmit}
              disabled={disabled}
              errors={formErrors}
            />}>
            
          </Route>
        </Switch>
      </div>
    </Router>
  )
};
export default App;
