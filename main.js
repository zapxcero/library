let myLibrary = [];
const tbody = document.querySelector("tbody");
const newBookButton = document.querySelector(".add-book");
const displayBooksBtn = document.querySelector(".display-books");

function Book(title, author, pages) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = false;
}

function addBookToLibrary(book) {
  myLibrary.push(book);
}

newBookButton.addEventListener("click", () => {
  title = prompt("Enter new book title: ");
  author = prompt("Enter new book author: ");
  pages = prompt("Enter new book pages: ");
  addBookToLibrary(new Book(title, author, pages));
  displayBooks();
});
displayBooksBtn.addEventListener("click", () => {
  displayBooks();
});

function resetTable() {
  tbody.textContent = "";
}

function displayBooks() {
  resetTable();
  myLibrary.forEach((book, counter) => {
    const row = document.createElement("tr");
    row.setAttribute("scope", "row");
    const id = document.createElement("th");
    id.textContent = ++counter;
    const title = document.createElement("td");
    title.textContent = book.title;

    const author = document.createElement("td");
    author.textContent = book.author;

    const pages = document.createElement("td");
    pages.textContent = book.pages;
    row.appendChild(id);
    row.appendChild(title);
    row.appendChild(author);
    row.appendChild(pages);
    tbody.appendChild(row);
  });
}

// Sample Books
book1 = new Book("I Shall Seal the Heavens", "Er Gen", 1232);
book2 = new Book("Reverend Insanity", "Gu Zhen Ren", 2000);
book3 = new Book("Lord of the Mysteries", "Cuttlefish that Loves Diving", 1600);

addBookToLibrary(book1);
addBookToLibrary(book2);
addBookToLibrary(book3);

displayBooks();

//TODO: Add Modal Forms
//TODO: Add remove button for books
// Add a button on each book’s display to change its read status.
// To facilitate this you will want to create the function that toggles a book’s read status on your Book prototype instance.
