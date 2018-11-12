function fetchBooks() {
  fetch('https://anapioficeandfire.com/api/books')
  .then(resp => resp.json())
<<<<<<< HEAD
  .then(json => renderBooks(json));
=======
  .then(json => console.log(json));
>>>>>>> 329744f957b117330e330617d2cec86cc4e3267f
}

function renderBooks(json) {
  const main = document.querySelector('main')
  json.forEach(book => {
    const h2 = document.createElement('h2')
    h2.innerHTML = `<h2>${book.name}</h2>`
    main.appendChild(h2)
  })
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks()
})
