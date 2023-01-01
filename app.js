const menu = [{
    image: './images/javascriptDef.png',
    title: 'what is javascript?',
    category: 'JS',
    price: 9.9 
  },
  {
    image: './images/htmlBasics.PNG',
    title: 'basics of HTML',
    category: 'HTML',
    price: 5.9 
},
{
    image: './images/htmlElements.png',
    title: 'HTML elements and tags',
    category: 'HTML',
    price: 9.9 
},
{
    image: './images/cssSelectors.jpg',
    title: 'CSS selectors',
    category: 'CSS',
    price: 69.9  
},
{
    image: './images/javascriptVariables.png',
    title: 'variables and data type of javascript',
    category: 'JS',
    price: 19.9 
},
{
    image: './images/javascriptOperators.png',
    title: 'Javascript operators and conditions',
    category: 'JS',
    price: 29.9 
},
{
    image: './images/htmlAttrVal.jpg',
    title: 'HTML attributes and values',
    category: 'HTML',
    price: 19.9 
},
{
    image: './images/cssProperties.png',
    title: 'CSS properties',
    category: 'CSS',
    price: 29.9 
},
{
    image: './images/javascriptObjects.png',
    title: 'Javascript objects and arrays',
    category: 'JS',
    price: 39.9 
},
{
    image: './images/cssMesures.png',
    title: 'mesures and unites of CSS',
    category: 'CSS',
    price: 19.9 
},
{
    image: './images/cssAnimation.png',
    title: 'CSS animations',
    category: 'CSS',
    price: 19.9 
},
{
    image: './images/javascriptFunctions.png',
    title: 'The basics of javascript',
    category: 'JS',
    price: 29.9 
},
{
    image: './images/javascriptEvents.png',
    title: 'javascript events',
    category: 'JS',
    price: 59.9 
},
{
    image: './images/cssColors.png',
    title: 'css colors',
    category: 'CSS',
    price: 29.9 
},
{
    image: './images/phpBasics.png',
    title: 'getting started with php',
    category: 'PHP',
    price: 15.9 
},
{
    image: './images/javascriptFunctions2.png',
    title: 'functions and loops with javascript',
    category: 'JS',
    price: 19.9 
},
{
    image: './images/phpDataBase.png',
    title: 'connecting to database using PHP',
    category: 'PHP',
    price: 29.9 
},
{
    image: './images/phpCRUD.png',
    title: 'manipulating crud using php',
    category: 'PHP',
    price: 45.9 
},
{
    image: './images/javascriptDOM.png',
    title: 'DOM the power of javascript',
    category: 'JS',
    price: 23.9 
}
]
courses = document.querySelector(".section-center")
btnContainers = document.querySelector(".btn-container")
window.addEventListener("DOMContentLoaded", function (){
    diplayMenuItems(menu)
    displayMenuButtons()
})

function diplayMenuItems(menuItems) {
    let displayMenu = menuItems.map(function (item) {
      // console.log(item);
  
      return `<div class="card">
      <img src="${item.image}" class="imageCard"/>
      <div class="title">${item.title}</div>
      <div class="price">${item.price}</div>
    </div>`;
    });
    displayMenu = displayMenu.join("");
    // console.log(displayMenu);
    courses.innerHTML = displayMenu;
  }

  function displayMenuButtons() {
    const categories = menu.reduce(
      function (values, item) {
        if (!values.includes(item.category)) {
          values.push(item.category);
        }
        return values;
      },
      ["all"]
    );
    const categoryBtns = categories
      .map(function (category) {
        return `<button type="button" class="filter-btn" data-id=${category}>${category}</button>`;
      })
      .join("");
  
    btnContainers.innerHTML = categoryBtns;
    const filterBtns = btnContainers.querySelectorAll(".filter-btn");
    filterBtns.forEach(function (btn) {
        btn.addEventListener("click", function (e) {
          // console.log(e.currentTarget.dataset);
          const category = e.currentTarget.dataset.id;
          const menuCategory = menu.filter(function (menuItem) {
            // console.log(menuItem.category);
            if (menuItem.category === category) {
              return menuItem;
            }
          });
          if (category === "all") {
            diplayMenuItems(menu);
          } else {
            diplayMenuItems(menuCategory);
          }
        }
        )
    })
  }