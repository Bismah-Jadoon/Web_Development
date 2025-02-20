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
import Header from '../Components/Header/Header';
import Footer from '../Components/Footer/Footer';
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

### 4. **Bridals Component**
```jsx
import React from 'react';
export default function Bridals() {
  return (
    <div className='grid grid-cols-4 gap-4'>
      <figure className='h-[31rem] w-[20rem] rounded-xl m-12 mt-24'>
        <img className='p-6 cursor-pointer' src="https://i.pinimg.com/564x/66/23/b8/6623b8b7070d6276a9fa49e97dab6c64.jpg" alt="Maxi Gown" />
        <div className='transition delay-150 ease-in-out hover:scale-110 cursor-pointer'>
          <span className='ml-[8rem] text-xl font-semibold hover:text-[#3b7fcb] hover:underline'>Rs 29,000</span>
          <h2 className='font-semibold text-2xl text-center'>Maxi Gown</h2>
        </div>
      </figure>
    </div>
  );
}
```

### 5. **Jewelry Component**
```jsx
import React from 'react';
function Jewelry() {
  return <h2>Jewelry Collection</h2>;
}
export default Jewelry;
```

### 6. **PartyWear Component**
```jsx
import React from 'react';
function PartyWear() {
  return <h2>Party Wear Collection</h2>;
}
export default PartyWear;
```

### 7. **NewArrivals Component**
```jsx
import React from 'react';
function NewArrivals() {
  return <h2>New Arrivals</h2>;
}
export default NewArrivals;
```

### 8. **Formal Component**
```jsx
import React from 'react';
function Formal() {
  return <h2>Formal Wear Collection</h2>;
}
export default Formal;
```

### 9. **WeddingWear Component**
```jsx
import React from 'react';
function WeddingWear() {
  return <h2>Wedding Wear Collection</h2>;
}
export default WeddingWear;
```

### 10. **MainPage Component**
```jsx
import React from 'react';
function MainPage() {
  return <h2>Main Page</h2>;
}
export default MainPage;
```

## Conclusion
React provides a powerful way to build user interfaces with reusable components. By utilizing hooks and the component-based architecture, developers can create scalable and efficient applications.


