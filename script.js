// // It makes favourite list array when doesn't exists in LocalStorage
// if (localStorage.getItem("favouritesList") == null) {
//   localStorage.setItem("favouritesList", JSON.stringify([]));
// }

// //It Fetches Meals form Api and Return a Meal
// const fetchMeals = async (url, value) => {
//   const response = await fetch(`${url + value}`);
//   const meals = await response.json();
//   return meals;
// };

// // This Function showing all Meals whose realted to input value
// function showMealList() {
//   let inputValue = document.getElementById("my-search").value;
//   let arr = JSON.parse(localStorage.getItem("favouritesList"));
//   let url = "https://www.themealdb.com/api/json/v1/1/search.php?s=";
//   let html = ``;
//   let meals = fetchMeals(url, inputValue);

//   meals.then((data) => { 
//     if (data.meals) {
//       data.meals.forEach((ele) => {  // Iterate all element in meals Object
//         console.log(ele);
//         let isFav = false;
//         for (let i = 0; i < arr.length; i++) {
//           if (arr[i] == ele.idMeal) {
//             isFav = true;
//           }
//         }

//         if (isFav) {  // When meal is favourite then show Glow favourite icon 
//           html += `
//                     <div id="card" class="card mb-3" style="width: 20rem;">
//                       <img src="${ele.strMealThumb}" class="card-img-top" alt="...">
//                       <div class="card-body">
//                         <h5 class="card-title">${ele.strMeal}</h5>
//                         <div class="d-flex justify-content-between mt-5">
//                             <button type="button" class="btn btn-outline-light" onclick="showMealDetails(${ele.idMeal})">More Details</button>
//                             <button id="main${ele.idMeal}" class="btn btn-outline-light active" onclick="addRemoveToFavList(${ele.idMeal})" style="border-radius:50%"><i class="fa-solid fa-heart"></i></button>
//                         </div>
//                       </div>
//                     </div>
//                 `;
//         } else { // when meal not is in Favourite list
//           html += `
//                    <div id="card" class="card mb-3" style="width: 20rem;">
//                      <img src="${ele.strMealThumb}" class="card-img-top" alt="...">
//                      <div class="card-body">
//                         <h5 class="card-title">${ele.strMeal}</h5>
//                         <div class="d-flex justify-content-between mt-5">
//                             <button type="button" class="btn btn-outline-light" onclick="showMealDetails(${ele.idMeal})">More Details</button>
//                             <button id="main${ele.idMeal}" class="btn btn-outline-light" onclick="addRemoveToFavList(${ele.idMeal})" style="border-radius:50%"><i class="fa-solid fa-heart"></i></button>
//                         </div>
//                      </div>
//                   </div>
//             `;
//         }
//       });
//     } else { // When Not match with input value then Show 404 Error 
//       html += `
//           <div class="page-wrap d-flex flex-row align-items-center">
//            <div class="container">
//             <div class="row justify-content-center">
//                 <div class="col-md-12 text-center">
//                     <span class="display-1 d-block">Not Found</span>
//                     <div class="mb-4 lead">
//                         The meal you are looking for was not found.
//                     </div>
//                 </div>
//             </div>
//           </div>
//          </div>
//         `;
//     }

//     document.getElementById("main-card").innerHTML = html;  // extract Main-card Id from DOM then upadte html
//   });
// }

// //it shows full meal details in main-card Setcion
// async function showMealDetails(id) {
//   let url = "https://www.themealdb.com/api/json/v1/1/lookup.php?i=";
//   let html = ``;
//   await fetchMeals(url, id).then((data) => {
//     html += `
//       <div id="meal-details" class="mb-5">
//         <!-- Add Back Button -->
//         <button class="btn btn-outline-light mb-3" onclick="goBack()">Back</button>
//         <!-- Meal Details -->
//         <div id="meal-header" class="d-flex justify-content-around flex-wrap">
//           <div id="meal-thumbnail">
//             <img class="mb-2" src="${data.meals[0].strMealThumb}" alt="" srcset="">
//           </div>
//           <div id="details">
//             <h3>${data.meals[0].strMeal}</h3>
//             <h6>Category : ${data.meals[0].strCategory}</h6>
//             <h6>Area : ${data.meals[0].strArea}</h6>
//           </div>
//         </div>
//         <div id="meal-instruction" class="mt-3">
//           <h5 class="text-center">Instruction :</h5>
//           <p>${data.meals[0].strInstructions}</p>
//         </div>
//         <div class="text-center">
//           <a href="${data.meals[0].strYoutube}" target="_blank" class="btn btn-outline-light mt-3">Watch Video</a>
//         </div>
//       </div>
//     `;
//   });
//   document.getElementById("main-card").innerHTML = html;
// }

// // Function to go back to the previous page
// function goBack() {
//   // You can implement custom logic to handle the back functionality here
//   // For example, you can show the list of meals again or navigate to a different page.
//   showMealList();
// }


// // it shows all favourites meals in favourites body
// async function showFavMealList() {
//   let arr = JSON.parse(localStorage.getItem("favouritesList")); // create array and fetch data from localStorage
//   let url = "https://www.themealdb.com/api/json/v1/1/lookup.php?i=";
//   let html = ``;
//   if (arr.length == 0) {
//     html += `
//             <div class="page-wrap d-flex flex-row align-items-center">
//                 <div class="container">
//                     <div class="row justify-content-center">
//                         <div class="col-md-12 text-center">
//                             <span class="display-1 d-block">Not Found</span>
//                             <div class="mb-4 lead">
//                                 No meal added in your favourites list.
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             `;
//   } else {
//     for (let i = 0; i < arr.length; i++) {
//       await fetchMeals(url, arr[i]).then((data) => {
//         html += `
//                 <div id="card" class="card mb-3" style="width: 20rem;">
//                     <img src="${data.meals[0].strMealThumb}" class="card-img-top" alt="...">
//                     <div class="card-body">
//                         <h5 class="card-title">${data.meals[0].strMeal}</h5>
//                         <div class="d-flex justify-content-between mt-5">
//                             <button type="button" class="btn btn-outline-light" onclick="showMealDetails(${data.meals[0].idMeal})">More Details</button>
//                             <button id="main${data.meals[0].idMeal}" class="btn btn-outline-light active" onclick="addRemoveToFavList(${data.meals[0].idMeal})" style="border-radius:50%"><i class="fa-solid fa-heart"></i></button>
//                         </div>
//                     </div>
//                 </div>
//                 `;
//       });
//     }
//   }
//   document.getElementById("favourites-body").innerHTML = html;
// }

// function addRemoveToFavList(id) {
//   let arr = JSON.parse(localStorage.getItem("favouritesList"));
//   let contain = false;
//   for (let i = 0; i < arr.length; i++) {
//     if (id == arr[i]) {
//       contain = true;
//     }
//   }
//   if (contain) {
//     let number = arr.indexOf(id);
//     arr.splice(number, 1);
//     localStorage.setItem("favouritesList", JSON.stringify(arr));
//     showMealList();
//     showFavMealList();

//     // Show the modal for meal removal with danger class
//     showNotificationModal("Your meal has been removed from your favorites list.", "text-danger");
//   } else {
//     arr.push(id);
//     localStorage.setItem("favouritesList", JSON.stringify(arr));
//     showMealList();
//     showFavMealList();

//     // Show the modal for meal addition with success class
//     showNotificationModal("Your meal has been added to your favorites list.", "text-success");
//   }
// }

// function showNotificationModal(message, className) {
//   let modalElement = document.getElementById("notificationModal");
//   let notificationText = document.getElementById("notificationText");

//   if (modalElement && notificationText) {
//     notificationText.textContent = message;
//     notificationText.classList.remove("text-success", "text-danger"); // Remove any existing classes
//     notificationText.classList.add(className); // Add the specified class
//     const modal = new bootstrap.Modal(modalElement);
//     modal.show();

//     // Hide the modal after 3 seconds
//     setTimeout(() => {
//       modal.hide();
//     }, 3000);
//   }
// }


// JavaScript

// Helper function to fetch meals from the API
async function fetchMeals(url) {
  const response = await fetch(url);
  const data = await response.json();
  return data.meals || [];
}

// Helper function to check if a meal is in the favorites list
function isMealFavorited(id) {
  const arr = JSON.parse(localStorage.getItem("favouritesList")) || [];
  return arr.includes(id);
}

// Helper function to update the main card section with meal HTML
function updateMainCard(mealData) {
  const html = `
    <div id="card" class="card mb-3" style="width: 20rem;">
      <img src="${mealData.strMealThumb}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${mealData.strMeal}</h5>
        <div class="d-flex justify-content-between mt-5">
          <button type="button" class="btn btn-outline-light" onclick="showMealDetails(${mealData.idMeal})">More Details</button>
          <button id="main${mealData.idMeal}" class="btn btn-outline-light ${isMealFavorited(mealData.idMeal) ? "active" : ""}" onclick="addRemoveToFavList(${mealData.idMeal})" style="border-radius:50%">
            <i class="fa-solid fa-heart"></i>
          </button>
        </div>
      </div>
    </div>
  `;
  return html;
}

// Helper function to show the 404 error message
function showNotFoundError() {
  return `
    <div class="page-wrap d-flex flex-row align-items-center">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-12 text-center">
            <span class="display-1 d-block">Not Found</span>
            <div class="mb-4 lead">
              The meal you are looking for was not found.
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}

// Helper function to show the "No meals added to favorites" message
function showNoFavMealsMessage() {
  return `
    <div class="page-wrap d-flex flex-row align-items-center">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-12 text-center">
            <span class="display-4 d-block">No Favourite Meal Added to List.</span>
          </div>
        </div>
      </div>
    </div>
  `;
}

// Function to show the meal list based on the search input
async function showMealList() {
  const inputValue = document.getElementById("my-search").value;
  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${inputValue}`;
  const meals = await fetchMeals(url);
  let html = "";

  if (meals.length === 0) {
    html = showNotFoundError();
  } else {
    meals.forEach((mealData) => {
      html += updateMainCard(mealData);
    });
  }

  document.getElementById("main-card").innerHTML = html;
}

// Function to show full meal details in the main-card section
async function showMealDetails(id) {
  const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
  const mealData = await fetchMeals(url);
  const html = `
    <div id="meal-details" class="mb-5">
      <!-- Add Back Button -->
      <button class="btn btn-outline-light mb-3" onclick="goBack()">Back</button>
      <!-- Meal Details -->
      <div id="meal-header" class="d-flex justify-content-around flex-wrap">
        <div id="meal-thumbnail">
          <img class="mb-2" src="${mealData[0].strMealThumb}" alt="" srcset="">
        </div>
        <div id="details">
          <h3>${mealData[0].strMeal}</h3>
          <h6>Category : ${mealData[0].strCategory}</h6>
          <h6>Area : ${mealData[0].strArea}</h6>
        </div>
      </div>
      <div id="meal-instruction" class="mt-3">
        <h5 class="text-center">Instruction :</h5>
        <p>${mealData[0].strInstructions}</p>
      </div>
      <div class="text-center">
        <a href="${mealData[0].strYoutube}" target="_blank" class="btn btn-outline-light mt-3">Watch Video</a>
      </div>
    </div>
  `;

  document.getElementById("main-card").innerHTML = html;
}

// Function to go back to the previous page
function goBack() {
  showMealList();
}

// Function to show all favorite meals in the favorites body
async function showFavMealList() {
  const arr = JSON.parse(localStorage.getItem("favouritesList")) || [];
  const url = "https://www.themealdb.com/api/json/v1/1/lookup.php?i=";
  let html = "";

  if (arr.length === 0) {
    html = showNoFavMealsMessage();
  } else {
    for (const id of arr) {
      const mealData = await fetchMeals(url + id);
      html += updateMainCard(mealData[0]);
    }
  }

  document.getElementById("favourites-body").innerHTML = html;
}

// Function to add or remove a meal from the favorites list
function addRemoveToFavList(id) {
  const arr = JSON.parse(localStorage.getItem("favouritesList")) || [];
  const index = arr.indexOf(id);

  if (index === -1) {
    arr.push(id);
    localStorage.setItem("favouritesList", JSON.stringify(arr));
    showNotificationModal("Your meal has been added to your favorites list.", "text-success");
  } else {
    arr.splice(index, 1);
    localStorage.setItem("favouritesList", JSON.stringify(arr));
    showNotificationModal("Your meal has been removed from your favorites list.", "text-danger");
  }

  showMealList();
  showFavMealList();
}

// Function to show the notification modal
function showNotificationModal(message, className) {
  const modalElement = document.getElementById("notificationModal");
  const notificationText = document.getElementById("notificationText");

  if (modalElement && notificationText) {
    notificationText.textContent = message;
    notificationText.classList.remove("text-success", "text-danger");
    notificationText.classList.add(className);

    const modal = new bootstrap.Modal(modalElement);
    modal.show();

    setTimeout(() => {
      modal.hide();
    }, 3000);
  }
}
