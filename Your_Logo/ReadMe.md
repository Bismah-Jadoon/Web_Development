# React Complete Documentation

## Introduction to React
React is a JavaScript library for building user interfaces. It allows developers to create reusable UI components and efficiently update the UI when data changes. React is maintained by Facebook and a large community of developers.

## Installation of React
To install React, follow these steps:

### 1. Install Node.js and npm
React requires Node.js and npm (Node Package Manager). You can download and install Node.js from [nodejs.org](https://nodejs.org/).

### 2. Create a React App using Create React App
Use the following command to create a new React project:

```sh
npx create-react-app my-app
cd my-app
npm start
```

This will create a project named `my-app` and start the development server.

## Understanding React Hooks
Hooks are functions that let you use state and other React features in function components.

### Commonly Used Hooks:
1. **useState:** Manages state in functional components.
   ```jsx
   import { useState } from 'react';
   function Counter() {
     const [count, setCount] = useState(0);
     return (
       <div>
         <p>Count: {count}</p>
         <button onClick={() => setCount(count + 1)}>Increment</button>
       </div>
     );
   }
   ```

2. **useEffect:** Handles side effects such as fetching data.
   ```jsx
   import { useEffect } from 'react';
   function Example() {
     useEffect(() => {
       console.log('Component Mounted');
     }, []);
     return <div>Check Console</div>;
   }
   ```

3. **useContext:** Provides global state management.
4. **useReducer:** An alternative to `useState` for complex state logic.
5. **useRef:** Manages references to DOM elements.

## Understanding the Provided Code
### Layout Component
```jsx
import React from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
```
**Explanation:**
- The `Layout` component serves as the base layout for the application.
- It includes a `Header`, `Footer`, and an `Outlet` to render nested routes dynamically.

## React Components
### 1. **Header Component**
```jsx
import React from 'react';
function Header() {
  return <header><h1>My Website</h1></header>;
}
export default Header;
```

### 2. **Footer Component**
```jsx
import React from 'react';
function Footer() {
  return <footer><p>&copy; 2024 My Website</p></footer>;
}
export default Footer;
```

### 3. **Home Component**
```jsx
import React from 'react';
function Home() {
  return <h2>Welcome to Home Page</h2>;
}
export default Home;
```

### 4. **About Component**
```jsx
import React from 'react';
function About() {
  return <h2>About Us</h2>;
}
export default About;
```

### 5. **User Component**
```jsx
import React from 'react';
function User() {
  return <h2>User Profile</h2>;
}
export default User;
```

### 6. **GitHub Component**
```jsx
import React, { useEffect, useState } from 'react';
function GitHub() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('https://api.github.com/users/example')
      .then(response => response.json())
      .then(data => setData(data));
  }, []);

  return (
    <div>
      {data ? <h2>GitHub Username: {data.login}</h2> : <p>Loading...</p>}
    </div>
  );
}
export default GitHub;
```

### 7. **Contact Component**
```jsx
import React from 'react';
function Contact() {
  return <h2>Contact Us</h2>;
}
export default Contact;
```

## Conclusion
React provides a powerful way to build user interfaces with reusable components. By utilizing hooks and the component-based architecture, developers can create scalable and efficient applications.


