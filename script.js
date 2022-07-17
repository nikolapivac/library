let myLibrary = [];

const form = document.querySelector("form");
form.style.display = "none";

const addBtn = document.querySelector('#addBtn');
addBtn.addEventListener('click', addBookToLibrary);


const newBtn = document.querySelector("#newBtn");
newBtn.addEventListener("click", ()=> form.style.display = "block");

const closeForm = document.getElementsByTagName('span')[0];
closeForm.addEventListener('click', () => form.style.display = 'none');

class Book {
    constructor(title, author, pages, read) {
        this.title = form.title.value; 
        this.author = form.author.value; 
        this.pages = form.pages.value; 
        this.read = form.read.checked; 
    }
}

function addBookToLibrary(book){
    form.style.display = "none";
    newBook = new Book(title, author, pages, read); 
    myLibrary.push(newBook); 
    render();
}

function render() {
    const table = document.getElementById("booklist");
    const books = document.querySelectorAll('.book');
    books.forEach(book => table.removeChild(book));

    for (let i=0; i<myLibrary.length; i++){
        createBook(myLibrary[i]);
    }
}

function createBook(item) {
    const library = document.querySelector('#booklist');
    const book = document.createElement('tr');
    const title = document.createElement('td');
    const auth = document.createElement('td');
    const page = document.createElement('td');
    const remove = document.createElement('button');
    const read = document.createElement('button');
    
    
    book.classList.add('book');
    book.setAttribute('id', myLibrary.indexOf(item));

    title.textContent = item.title;
    title.classList.add('title');
    book.appendChild(title);

    auth.textContent = item.author;
    auth.classList.add('author');
    book.appendChild(auth);

    page.textContent = item.pages;
    page.classList.add('pages');
    book.appendChild(page);

    read.classList.add('readBtn')    
    book.appendChild(read);
    if(item.read===false) {
        read.textContent = 'Not Read';
        read.style.backgroundColor = "grey"
    }else {
        read.textContent = 'Read';
    }

    remove.textContent = 'Remove'; 
    remove.setAttribute('id', 'removeBtn');
    book.appendChild(remove);

    library.appendChild(book);

    remove.addEventListener('click', () => {
        myLibrary.splice(myLibrary.indexOf(item),1);
        render();
    });

    read.addEventListener('click', () => { 
        item.read = !item.read; 
        render();
    }); 
}