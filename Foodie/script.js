

document.getElementById('btn').addEventListener('click',()=>{
	let user = document.getElementById('button').value;
    let mealApi = fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${user}`);

	mealApi.then((getData)=>{
		return getData.json();
	}).then((sendData)=>{
		console.log(sendData)


	let data = ''
	sendData.meals.forEach(e => {
	
		data +=`
		<h2 class='text-center text-secondary mt-5'>Food Area: ${e.strArea}</h2>
		<h2 class='text-center text-warning'>Food Name: ${e.strMeal}</h2>
		<div class="row">
		<div class = "col-md-4 ">
            <img src="${e.strMealThumb}" alt="" class='w-100'></div>
        </div>
        <div class="col-md-4">
          <h2>Ingredients</h2>
         <ul>
          <li>${e.strIngredient1}</li>
          <li>${e.strIngredient2}</li>
          <li>${e.strIngredient3}</li>
          <li>${e.strIngredient4}</li>
          <li>${e.strIngredient5}</li>
          <li>${e.strIngredient6}</li>
          <li>${e.strIngredient7}</li>
          <li>${e.strIngredient8}</li>
          <li>${e.strIngredient9}</li>
          <li>${e.strIngredient10}</li>
          <li>${e.strIngredient11}</li>
          <li>${e.strIngredient12}</li>
          <li>${e.strIngredient13}</li>
          <li>${e.strIngredient14}</li>
          <li>${e.strIngredient15}</li>
          <li>${e.strIngredient16}</li>
          <li>${e.strIngredient17}</li>
          <li>${e.strIngredient18}</li>
          <li>${e.strIngredient19}</li>
          <li>${e.strIngredient20}</li>
         </ul>
        <div class="col-4">
          <h2>Measurements</h2>
		  <ul>
          <li>${e.strMeasure1}</li>
          <li>${e.strMeasure2}</li>
          <li>${e.strMeasure3}</li>
          <li>${e.strMeasure4}</li>
          <li>${e.strMeasure5}</li>
          <li>${e.strMeasure6}</li>
          <li>${e.strMeasure7}</li>
          <li>${e.strMeasure8}</li>
          <li>${e.strMeasure9}</li>
          <li>${e.strMeasure10}</li>
          <li>${e.strMeasure11}</li>
          <li>${e.strMeasure12}</li>
          <li>${e.strMeasure13}</li>
          <li>${e.strMeasure14}</li>
          <li>${e.strMeasure15}</li>
          <li>${e.strMeasure16}</li>
          <li>${e.strMeasure17}</li>
          <li>${e.strMeasure18}</li>
          <li>${e.strMeasure19}</li>
          <li>${e.strMeasure20}</li>
         </ul>
        </div>
      </div>
      <div class="col-12 ">
      <h2>Instructions</h2>
      <p>${e.strInstructions}</p>
      </div>
      <div class = "col-6 offset-3">
      </div>
		`
       heading.innerHTML = `<h1 class='text-center text-danger'>Food Category: ${sendData.meals[0].strCategory}</h1>`
		appendData.innerHTML = data;
	 });
	})
});

