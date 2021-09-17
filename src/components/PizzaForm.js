import React from 'react'

// name validation "name must be at least 2 characters long"

// checklist for toppings (at least 4 items - name each separately)
// text input with special instructions with id of 'special-text'
// order button with id of 'order-button' 
// sumbit button returns a database record of name, size, toppings, and special instructions
// 
// data looks like

    // {
    //     name: string,
    //     size: string,
    //     topping1: boolean,
    //     topping2: boolean,
    //     special: string
    // }

export default function PizzaForm(props) {
    const {values, submit, change, disabled, errors} = props

    const onSubmit = evt => {
        evt.preventDefault()
        submit()
    }

    const onChange = evt => {
        const {name, value, checked, type} = evt.target
        const valueToUse = type === 'checkbox' ? checked : value
        change(name, valueToUse)
    }

    return (
        <div className='form-container'>
            <h2>Build Your Own Pizza</h2>
                {/* <pizza image https://images.unsplash.com/photo-1590947132387-155cc02f3212?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHBpenphfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60/> */}

            <form id='piza-form' onSubmit={onSubmit}>
                <h3>Order Details</h3>

                {/* errors */}
                <div className='errors'>
                    <div>{errors.name}</div>
                    <div>{errors.size}</div>
                    <div>{errors.topping}</div>
                </div>

                <div className='form-inputs'>
                    <label>Order Name: 
                        <input
                            id='name-input'
                            name='name'
                            type='text'
                            placeholder='name'
                            value={values.name}
                            onChange={onChange}
                        />
                    </label>
                    <label>Pizza Size: 
                        <select
                            id='size-dropdown'
                            name='size'
                            value={values.size}
                            onChange={onChange}>
                                <option value=''>--Select a Size--</option>
                                <option value='small'>Small</option>
                                <option value='medium'>Medium</option>
                                <option value='large'>Large</option>
                                <option value='XL'>Extra Large</option>
                            </select>
                    </label>
                    <div className='toppings'>
                        <h4>Toppings</h4>
                        <p>choose up to 4</p>
                        <div className='topping-choices'>
                            <label>Pepperoni
                                <input
                                    type='checkbox'
                                    name='pepperoni'
                                    checked={values.pepperoni}
                                    onChange={onChange}
                                />
                            </label>
                            <label>Sausage
                                <input
                                    type='checkbox'
                                    name='sausage'
                                    checked={values.sausage}
                                    onChange={onChange}
                                />
                            </label>
                            <label>Mushrooms
                                <input
                                    type='checkbox'
                                    name='Mushrooms'
                                    checked={values.Mushrooms}
                                    onChange={onChange}
                                />
                            </label>
                            <label>Green Peppers
                                <input
                                    type='checkbox'
                                    name='peppers'
                                    checked={values.peppers}
                                    onChange={onChange}
                                />
                            </label>
                        </div>
                    </div>
                    <label>Special Instructions
                        <input
                            id='special-text'
                            name='special'
                            type='text'
                            placeholder='special intructions'
                            value={values.special}
                            onChange={onChange}
                        />
                    </label>
                </div>
                <div className='submit'>
                    <button id='order-button'>Submit Order</button>
                </div>
            </form>
        </div>
    )

}