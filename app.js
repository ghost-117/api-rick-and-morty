const url = 'https://rickandmortyapi.com/api/character';
const container = document.querySelector('.container')

const card = character => {
    const div = document.createElement('div')
    div.classList = 'card'
    const html = 
        `<div class="card">
        <img src="${character.image}" alt="${character.name}">
            <h2>${character.name}</h2>
            <p>Status: ${character.status}</p>
            <p>Species: ${character.species}</p>
            <button class="btn" data-id="${character.id}">ID</button>
            
        </div>`

    div.innerHTML = html
    return div
}
const getId  = (e) =>{
    if(e.target.classList.contains('btn')){
        const id = e.target.getAttribute('data-id')
        alert(id)
    }
}

const page = Math.ceil(Math.random() * 42);
fetch(url+'?page'+ page)
.then(Response => Response.json())
.then(data => {
    data.results.forEach(character => {
        container.appendChild(card(character))

        
    });
})

container.addEventListener('click', getId)