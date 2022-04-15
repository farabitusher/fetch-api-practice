const searchFood = () => {
    
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    console.log(searchText);
  
    // const seachButton = document.getElementById('button-search')
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
    console.log(url);
    //fetch the api
  fetch(url)
    .then(res => res.json())
    .then(data => displaySearchResult(data.meals));
  //clear data
  searchField.value = '';
  if (data == 0) {
    const result = document.getElementById('no-result');
    result.style.display = 'inline';
  }
  
}


const displaySearchResult = meals => {
  const searchResult = document.getElementById('search-result');
  searchResult.textContent = '';
  //delete click item after new search
  const mealDetails = document.getElementById('meal-details');
  mealDetails.textContent= ''
 
    meals.forEach(meal => {
        console.log(meal);
        const div = document.createElement('div');
        // div.classList.add('col');
        div.innerHTML = `
        <div onClick="loadMealDetail(${meal.idMeal})" class="card col">
          <img src="${meal.strMealThumb}" class="card-img-top  img-fluid img-thumbnail" alt="..." />
          <div class="card-body">
            <h5 class="card-title">${meal.strMeal}</h5>
            <p class="card-text">
              ${meal.strInstructions.slice(0,100)}
            </p>
          </div>
        </div>`;
        searchResult.appendChild(div)
    });
}

// find the meal id 
const loadMealDetail = mealId => {
  console.log(mealId);
  const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
  fetch(url)
    .then(res => res.json())
    .then(data => displayMealDetail(data.meals[0]));
}
const displayMealDetail = meal => {
  console.log(meal);
  const mealDetails = document.getElementById('meal-details');
  mealDetails.textContent= ''
  const div = document.createElement('div')

  div.innerHTML = ` <img src="${meal.strMealThumb}" class="card-img-top" alt="..." />
  <div class="card-body">
    <h5 class="card-title"></h5>
    <p class="card-text">
    ${meal.strInstructions.slice(0,100)}
    </p>
    <a href="${meal.strYoutube}" class="btn btn-primary">Learn More</a>
    
  </div>`;
  mealDetails.appendChild(div);

}