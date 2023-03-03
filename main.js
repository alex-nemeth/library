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

function render() {
    let bookList = document.querySelector(".booklist");
    bookList.innerHTML = "";
    for (let i = 0; i < myLibrary.length; i++) {
        const newCard = document.createElement("div");
        newCard.innerHTML = `<p>Title: ${myLibrary[i].title}</p>
        <p id="author">Author: ${myLibrary[i].author}</p>
        <p id="pages">Pages: ${myLibrary[i].pages}</p>`;
        newCard.classList.add("card");
        newCard.classList.add(`${myLibrary[i].read}`);
        bookList.appendChild(newCard);
    }
}

const showFormBtn = document.querySelector(".showform");
const hideFormBtn = document.querySelector(".closeform");
const form = document.querySelector(".newbook");
const addBookBtn = document.querySelector(".addbook");

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
