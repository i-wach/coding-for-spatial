const GOOGLE_BOOKS_URL =
  "https://www.googleapis.com/books/v1/volumes?q=painting";

  function getBooks(){
  fetch(GOOGLE_BOOKS_URL)
    .then(response => response.json())
    .then(data => {
        renderBook(data);
    });
}

function renderBook(book){

    let bookItem = book.items;

    for (idx in bookItem){
            
    }
}

getBooks()