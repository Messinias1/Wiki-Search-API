/* global fetch */
// make a function for the button to perform a task

function handleClick() {
  
  // create a variable that gets the input value 
  const inputVal = document.getElementById("input").value;
  
  // create a variable for the url and set search to inputVal and the format to json
  const url = `https://cors-anywhere.herokuapp.com/https://en.wikipedia.org/w/api.php?action=opensearch&search=${inputVal}&format=json`;
  
  // create the fetch API
  fetch(url)
  .then(function(response) {
    return response.json();
  })
  .then(function(response) {
    console.log(response);
    displayResults(response);
  });
}
  // create a function to display the api search to the dom
  function displayResults(results) {
    
    // create a variable using .map() to make a new array with the search results value and index
    const iterateThruLinks = results[3].map(function(item, index) {
      
      // create variables for link name and link description
      const title = results[1][index];
      const content = results[2][index];
      
      // create outline for how the data will be displayed to the page
      return `
      
      <li>
      <a href=${item}>${title}</a>
      </li>
      <h6>${content}</h6>
      <br>`;
    });
    // create document manipulation to display data to the webpage
    document.getElementById("results").innerHTML = iterateThruLinks.join("");
  }