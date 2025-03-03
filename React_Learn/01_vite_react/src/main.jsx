import React from 'react'
import ReactDOM from 'react-dom/client'
import {jsx as _jsx} from "react/jsx-runtime.js"
import App from './App.jsx'


function MyApp(){
    return(
        <div>
            <h1>custom app</h1>
        </div>
    )
}

// it wont work bcz we wont write render code for it react gave us render method and react also expect some syntax from us to run properly but we wont gave react that particular syntax so react wont work with this syntax
/*
const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank',
 
    },
    children: 'Click me to visit google'
}
*/

const anotherElement =(
    <a href='https://google.com' target='_blank'>Visit google</a>
)

const anotherUser = " chaiiii"  //variable

const reactElement = React.createElement( //babel inject this behind the scene
    'a',
    {href: 'https://google.com',target: '_blank'},
    'click me to visit google',
    anotherUser  // variable injected after tree is complete
)


ReactDOM.createRoot(document.getElementById('root')).render(
  
    // <reactElement />
    // anotherElement
    // reactElement
    // <App/>
    reactElement
)
