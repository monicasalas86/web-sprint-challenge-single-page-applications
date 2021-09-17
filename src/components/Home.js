import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'


const StyledHome = styled.div`
    border:1px solid black;

`

export default function Home(){
    return (
        <StyledHome>
            <header>
                <div className='header'>
                    <h1>Lambda Eats</h1>
                    <nav>
                        <Link to='/'>Home</Link>
                        <Link to='/pizza' id='order-pizza' >Order Pizza</Link>
                        
                    </nav>
                </div>
            </header>
            <div className='home-banner'>
                <img src='https://images.unsplash.com/photo-1605478371310-a9f1e96b4ff4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzR8fHBpenphfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' alt='pizza'/>
            </div>
        </StyledHome>
    )
}