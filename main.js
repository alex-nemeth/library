let myLibrary = [];

class Book {
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }
}

function addBook() {
    const title = document.querySelector(".title").value;
    const author = document.querySelector(".author").value;
    const pages = document.querySelector(".pages").value;
    const read = document.querySelector(".read").checked;
    myLibrary.push(new Book(title, author, pages, read));
    render();
}

function toggleRead(index) {
    myLibrary[index].read = !myLibrary[index].read;
    render();
}

function removeBook(index) {
    myLibrary.splice(index, 1);
    render();
}

function render() {
    let bookList = document.querySelector(".booklist");
    bookList.innerHTML = "";
    for (let i = 0; i < myLibrary.length; i++) {
        const newCard = document.createElement("div");
        newCard.innerHTML = `<p>Title: ${myLibrary[i].title}</p>
        <p id="author">Author: ${myLibrary[i].author}</p>
        <p id="pages">Pages: ${myLibrary[i].pages}</p>
        <div class="bookbtns">
        <svg class="readicon" onclick="toggleRead(${i})" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>Read</title><path d="M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M12 20C7.59 20 4 16.41 4 12S7.59 4 12 4 20 7.59 20 12 16.41 20 12 20M16.59 7.58L10 14.17L7.41 11.59L6 13L10 17L18 9L16.59 7.58Z" /></svg>
        <svg class="removeicon" onclick="removeBook(${i})" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>Remove Book</title><path d="M13 19C13 20.1 13.3 21.12 13.81 22H6C4.89 22 4 21.11 4 20V4C4 2.9 4.89 2 6 2H7V9L9.5 7.5L12 9V2H18C19.1 2 20 2.89 20 4V13.09C19.67 13.04 19.34 13 19 13C15.69 13 13 15.69 13 19M22.54 16.88L21.12 15.47L19 17.59L16.88 15.47L15.47 16.88L17.59 19L15.47 21.12L16.88 22.54L19 20.41L21.12 22.54L22.54 21.12L20.41 19L22.54 16.88Z" /></svg>
        </div>`;
        newCard.classList.add("card");
        newCard.classList.add(`${myLibrary[i].read}`);
        bookList.appendChild(newCard);
    }
}

const showFormBtn = document.querySelector(".showform");
const hideFormBtn = document.querySelector(".closeform");
const form = document.querySelector(".newbook");
const addBookBtn = document.querySelector(".addbook");
const readBtn = document.querySelector(".readicon");
form.style.display = "none";

showFormBtn.addEventListener("click", function () {
    form.style.display = "flex";
    hideFormBtn.style.display = "block";
    showFormBtn.style.display = "none";
});

hideFormBtn.addEventListener("click", function () {
    form.style.display = "none";
    hideFormBtn.style.display = "none";
    showFormBtn.style.display = "block";
});

addBookBtn.addEventListener("click", function (event) {
    event.preventDefault();
    addBook();
});
