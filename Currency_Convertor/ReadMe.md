# Currency Converter - README

## Introduction
Currency Converter is a **React-based** web application that allows users to convert currencies in real time. It fetches the latest exchange rates using an API and provides an interactive UI for seamless conversion.

## Features
- Convert currencies in real time
- Swap functionality for quick conversion
- Interactive UI with a modern design
- Custom React Hooks for fetching currency exchange rates
- Responsive layout using Tailwind CSS

## Technologies Used
- **React.js** - Frontend framework
- **Tailwind CSS** - Styling and responsiveness
- **JavaScript (ES6+)** - Functional components & hooks
- **Fetch API** - Fetching exchange rates from an external API

---
## Installation & Setup
Follow the steps below to set up and run the project on your local machine.

### 1. Clone the Repository
```sh
git clone https://github.com/your-username/currency-converter.git
cd currency-converter
```

### 2. Install Dependencies
Make sure you have **Node.js** and **npm** installed. Run the following command to install the required packages:
```sh
npm install
```

### 3. Start the Development Server
```sh
npm start
```
This will start the React development server, and you can view the application at:
```
http://localhost:3000
```

---
## Project Structure
```
currency-converter/
├── src/
│   ├── components/
│   │   ├── InputBox.jsx       # Input component for amount & currency selection
│   ├── hooks/
│   │   ├── useCurrencyInfo.js # Custom hook for fetching currency data
│   ├── App.jsx                # Main application component
│   ├── index.js               # Root file for rendering React app
├── public/
├── package.json
├── README.md
```

---
## API Used
The project uses the **Currency API** for real-time exchange rate data.

### API Endpoint:
```
https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/{currency}.json
```

Example response for `usd`:
```json
{
  "usd": {
    "pkr": 277.50,
    "eur": 0.92,
    "gbp": 0.81
  }
}
```

---
## How the Code Works

### 1. Fetching Currency Data
The `useCurrencyInfo.js` custom hook fetches the latest exchange rates based on the selected currency.
```js
export default function useCurrencyInfo(currency) {
    const [data, setData] = useState({});
    
    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
            .then((res) => res.json())
            .then((res) => setData(res[currency]));
    }, [currency]);
    
    return data;
}
```

### 2. Currency Conversion Logic
- The `App.jsx` component manages state for **amount, fromCurrency, toCurrency, and convertedAmount**.
- When the user submits the form, the `convert` function calculates the converted amount.
```js
const convert = () => {
    setConvertedAmount(amount * currencyInfo[to]);
};
```

- Users can swap the currencies using:
```js
const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
};
```

### 3. Input Handling
The `InputBox.jsx` component handles user input for **amount** and **currency selection**.
```js
<input
    type="number"
    placeholder="Amount"
    value={amount}
    onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
/>
```

---
## Deployment
To deploy the project on **Vercel** or **Netlify**, follow these steps:

### 1. Build the project
```sh
npm run build
```

### 2. Deploy on Vercel
```sh
npm install -g vercel
vercel
```

### 3. Deploy on Netlify
```sh
npm install -g netlify-cli
netlify deploy
```

---
## Future Enhancements
- **Add more currency options**
- **Improve UI with animations**
- **Store recent conversions using local storage**
- **Add a historical exchange rate chart**

---
## Conclusion
This **Currency Converter** is a simple yet powerful tool to check live exchange rates. It's built using **React Hooks**, **Tailwind CSS**, and a free **Currency API**. Feel free to contribute and improve the project! 💰💱🚀

---

Happy Coding! 🎉


