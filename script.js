let myLibrary = [];

function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = Boolean(read);
}

function addBookToLibrary(book){
    myLibrary.push(book);
}

const book1 = new Book ("The Hobbit", "J.R.R. Tolkien", "237", true);
addBookToLibrary(book1);
const book2 = new Book ("Harry Potter & The Prisoner of Azkaban", "J.K. Rowling", "654", false);
addBookToLibrary(book2);


const table = document.querySelector("table");

myLibrary.forEach((book)=>{
    const libraryItem = document.createElement("tr");

    const title = document.createElement("td");
    title.textContent = `${book.title}`;
    libraryItem.appendChild(title);

    const author = document.createElement("td");
    author.textContent = `${book.author}`;
    libraryItem.appendChild(author);

    const pages = document.createElement("td");
    pages.textContent = `${book.pages}`;
    libraryItem.appendChild(pages);

    if(book.read === true){
        const read = document.createElement("td");
        read.textContent = "Yes"
        libraryItem.appendChild(read);
    }
    else {
        const read = document.createElement("td");
        read.textContent = "No"
        libraryItem.appendChild(read); 
    }
    
    table.appendChild(libraryItem);
})