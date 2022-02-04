

fetch('https://products-diois.herokuapp.com/')
.then(data=>data.json())
.then(data=>console.log(data))