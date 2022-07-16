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

const body = document.querySelector("body");
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

// New Book button 

const button = document.createElement("button");
button.classList.add("newbook");
button.textContent = "New Book";
body.appendChild(button);

button.addEventListener("click", () => {
    const form = document.createElement("form");

    const titleInput = document.createElement("input");
    titleInput.setAttribute("type", "text");
    const titleLabel = document.createElement("label");
    titleLabel.textContent = "Title:";
    form.appendChild(titleLabel);
    form.appendChild(titleInput);

    const authorInput = document.createElement("input");
    authorInput.setAttribute("type", "text");
    const authorLabel = document.createElement("label");
    authorLabel.textContent = "Author:";
    form.appendChild(authorLabel);
    form.appendChild(authorInput);

    const pagesInput = document.createElement("input");
    pagesInput.setAttribute("type", "number");
    const pagesLabel = document.createElement("label");
    pagesLabel.textContent = "# of pages:";
    form.appendChild(pagesLabel);
    form.appendChild(pagesInput);

    const yes = document.createElement("input");
    yes.setAttribute("type", "radio");
    yes.setAttribute("name", "pages");
    const yesLabel = document.createElement("label");
    yesLabel.textContent = "Yes";
    form.appendChild(yesLabel);
    form.appendChild(yes);

    const no = document.createElement("input");
    no.setAttribute("type", "radio");
    no.setAttribute("name", "pages");
    const noLabel = document.createElement("label");
    noLabel.textContent = "No";
    form.appendChild(noLabel);
    form.appendChild(no);

    body.appendChild(form);
})

