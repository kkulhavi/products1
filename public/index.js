

//fetch('https://products-diois.herokuapp.com/')
fetch('/api')
.then(data=>data.json())
.then(data=>console.log(data))
