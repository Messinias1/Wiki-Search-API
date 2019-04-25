// make a function for the button to perform a task
/* global axios */
function handleClick() {
  
  // create a variable that gets the input value 
  const inputVal = document.getElementById("input").value;
  
  // create a variable for the url and set search to inputVal and the format to json
  const url = `https://cors-anywhere.herokuapp.com/https://en.wikipedia.org/w/api.php?action=opensearch&search=${inputVal}&format=json`;
  
  axios.get(url)
  .then(response => {
    
    console.log(response.data);
    
    const titles = response.data[1];
    const content = response.data[2];
    const links = response.data[3];
    
    // console.log(titles);
    // console.log(content);
    // console.log(links);
    
    for (let i = 0; i < titles.length; i++) {
      document.getElementById("data").innerHTML += `
      <h2>
      <a href=${links[i]}>${titles[i]}</a>
      </h2>
      <h6>${content[i]}</h6>
      <br>`;
    }
  });
}