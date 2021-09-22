
let url = 'https://api.chucknorris.io/jokes/random';
let btn = document.querySelector('.change');


function urlfetch(){
    fetch(url)
    .then( response =>response.json())
    .then(data=> {
        document.querySelector('.jokepara').innerHTML=data.value
    });
}

btn.addEventListener('click',urlfetch)

