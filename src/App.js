import React, {useState, useEffect} from "react";
import axios from 'axios'


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

  return (
    <h1>Lambda Eats</h1>
  )
};
export default App;
