# Foodie - README

## Introduction
Foodie is a simple web application that allows users to search for recipes using the **MealDB API**. Built with **HTML, CSS, Bootstrap, and JavaScript**, this project fetches and displays meal details, including ingredients, measurements, and instructions.

## Features
- Search for meals using a keyword
- Displays meal information such as name, category, area, ingredients, and instructions
- Responsive UI using **Bootstrap**
- Background video effect for an enhanced visual experience

## Technologies Used
- **HTML** - Structuring the web page
- **CSS** - Styling and animations
- **Bootstrap** - Responsive design and UI components
- **JavaScript** - Fetching data and handling user interactions
- **MealDB API** - Fetching meal information

## Installation & Setup
Follow these steps to set up the project on your local system:

### 1. Clone the Repository
```sh
git clone https://github.com/your-username/foodie.git
cd foodie
```

### 2. Install Dependencies
Since this project uses Bootstrap via **CDN**, no additional dependencies are required. However, ensure you have a working internet connection to fetch styles and scripts.

### 3. Running the Project
Simply open `index.html` in your browser:
```sh
open index.html
```
Or use **Live Server** (if you have VSCode installed):
```sh
npm install -g live-server
live-server
```

## File Structure
```
foodie/
├── index.html        # Main HTML file
├── style.css         # Custom CSS file
├── script.js         # JavaScript file handling API fetch
├── video1.mp4        # Background video
```

## Using the MealDB API
This project utilizes the **MealDB API** to fetch meal details based on user input. The API endpoint used:

```
https://www.themealdb.com/api/json/v1/1/search.php?s=<meal_name>
```
### Definition of API

An **API (Application Programming Interface)** is a set of rules and protocols that allow different software applications to communicate with each other. It acts as a bridge between a client (such as a web application) and a server, enabling data exchange and functionality without exposing internal implementation details.

In the **Foodie** project, we use the **MealDB API** to fetch meal recipes. When a user enters a meal name, the API retrieves relevant data such as ingredients, instructions, and images, which are then displayed on the webpage. 
```

### API Response Example:
```json
{
  "meals": [
    {
      "strMeal": "Chicken Alfredo",
      "strCategory": "Pasta",
      "strArea": "Italian",
      "strInstructions": "Boil pasta, cook chicken, mix with sauce...",
      "strMealThumb": "https://www.themealdb.com/images/media/meals/xxxyyy.jpg",
      "strIngredient1": "Chicken",
      "strIngredient2": "Pasta",
      "strIngredient3": "Cream",
      "strMeasure1": "200g",
      "strMeasure2": "150g",
      "strMeasure3": "100ml"
    }
  ]
}
```

## JavaScript Functionality
### 1. Fetching Meal Data
```js
document.getElementById('btn').addEventListener('click', ()=>{
    let user = document.getElementById('button').value;
    let mealApi = fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${user}`);
    mealApi.then((getData)=>{
        return getData.json();
    }).then((sendData)=>{
        let data = '';
        sendData.meals.forEach(e => {
            data += `
                <h2 class='text-center text-secondary mt-5'>Food Area: ${e.strArea}</h2>
                <h2 class='text-center text-warning'>Food Name: ${e.strMeal}</h2>
                <div class='row'>
                    <div class='col-md-4'>
                        <img src='${e.strMealThumb}' alt='' class='w-100'>
                    </div>
                    <div class='col-md-4'>
                        <h2>Ingredients</h2>
                        <ul>
                            ${[...Array(20).keys()].map(i => `<li>${e[`strIngredient${i+1}`]}</li>`).join('')}
                        </ul>
                    </div>
                    <div class='col-md-4'>
                        <h2>Measurements</h2>
                        <ul>
                            ${[...Array(20).keys()].map(i => `<li>${e[`strMeasure${i+1}`]}</li>`).join('')}
                        </ul>
                    </div>
                </div>
                <div class='col-12'>
                    <h2>Instructions</h2>
                    <p>${e.strInstructions}</p>
                </div>
            `;
        });
        document.getElementById('heading').innerHTML = `<h1 class='text-center text-danger'>Food Category: ${sendData.meals[0].strCategory}</h1>`;
        document.getElementById('appendData').innerHTML = data;
    });
});
```

## Conclusion
This project demonstrates a simple meal search functionality using **JavaScript Fetch API** and **Bootstrap** for styling. Future improvements may include:
- Implementing a favorites feature
- Adding filters for meal categories
- Displaying nutrition facts

**Enjoy exploring new recipes with Foodie! 🍽️**


