/* global axios */
function handleClick() {
    
    const url = "https://api.icndb.com/jokes/random";
    
    axios.get(url)
    .then(response => {
        
        console.log(response);
        
        const joke = response.data.value.joke;
        
        document.getElementById("data").innerHTML = `
        <h2>${joke}</h2>
        <br>`;
    });
}