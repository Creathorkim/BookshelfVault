class Book {
  constructor(title, author, pages, read) {
    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }
  toggleRead() {
    this.read = !this.read;
  }
}

class Library {
  constructor() {
    const storedBook = localStorage.getItem("library");
    this.books = storedBook
      ? JSON.parse(storedBook).map(
          (book) => new Book(book.title, book.author, book.pages, book.read)
        )
      : [];
    this.container = document.getElementById("library");
    this.updateDisplay();
  }

  save() {
    localStorage.setItem("library", JSON.stringify(this.books));
  }

  addBook(book) {
    this.books.push(book);
    this.save();
    this.updateDisplay();
  }

  removeBook(id) {
    this.books = this.books.filter((book) => book.id !== id);
    this.save();
    this.updateDisplay();
  }

  toggleRead(id) {
    const book = this.books.find((book) => book.id === id);
    if (book) {
      book.toggleRead();
      this.save();
      this.updateDisplay();
    }
  }

  updateDisplay() {
    this.save();
    this.container.innerHTML = this.books
      .map(
        (book) =>
          `
       <div class = "col">
         <div class = "card-body bg-white rounded shadow-sm p-3 text-dark">
            <h5 class ="card-title mb-4">${book.title}</h5>
            <p class="card-text">Author: ${book.author}</p>
            <p class="card-text">Pages: ${book.pages}</p>
            <p class = "card-text">Status : ${
              book.read ? "Read" : "Not Read Yet"
            }</p>
            <button class = "btn btn-sm btn-info" onclick = "library.toggleRead('${
              book.id
            }')">Toggle Read</button>
            <button class="btn btn-sm btn-danger" onclick="library.removeBook('${
              book.id
            }')">Remove</button>
         </div>
       </div>
     `
      )
      .join("");
  }
}
const library = new Library();
library.updateDisplay();

document.addEventListener("DOMContentLoaded", () => {
  const bookFormDialog = document.getElementById("bookFormDialog");
  const bookForm = document.getElementById("bookForm");
  const bookTitle = document.getElementById("title");
  const bookAuthor = document.getElementById("author");
  const bookPages = document.getElementById("pages");

  const titleError = document.getElementById("titleError");
  const authorError = document.getElementById("authorError");
  const pagesError = document.getElementById("pagesError");

  document.getElementById("newBookBtn").addEventListener("click", () => {
    bookFormDialog.showModal();
  });

  document.getElementById("closeForm").addEventListener("click", () => {
    bookFormDialog.close();
  });

  bookTitle.addEventListener("input", showTitleError);

  function showTitleError() {
    if (bookTitle.validity.valueMissing) {
      titleError.textContent = "Title is required";
      bookTitle.classList.add("is-invalid");
    } else {
      titleError.textContent = "";
      bookTitle.classList.remove("is-invalid");
      bookTitle.classList.add("is-valid");
    }
  }

  bookAuthor.addEventListener("input", showAuthorError);

  function showAuthorError() {
    if (bookAuthor.validity.valueMissing) {
      authorError.textContent = "Author is required.";
      bookAuthor.classList.add("is-invalid");
    } else {
      authorError.textContent = "";
      bookAuthor.classList.remove("is-invalid");
      bookAuthor.classList.add("is-valid");
    }
  }

  bookPages.addEventListener("input", showPagesError);

  function showPagesError() {
    if (bookPages.validity.valueMissing) {
      pagesError.textContent = "Page count is required.";
      bookPages.classList.add("is-invalid");
    } else if (bookPages.validity.rangeUnderflow) {
      pagesError.textContent = "Page count must be at least 1.";
      bookPages.classList.add("is-invalid");
    } else {
      pagesError.textContent = "";
      bookPages.classList.remove("is-invalid");
      bookPages.classList.add("is-valid");
    }
  }

  bookForm.addEventListener("submit", (e) => {
    e.preventDefault();

    if (!bookTitle.validity.valid) {
      showTitleError();
      return;
    }

    if (!bookAuthor.validity.valid) {
      showAuthorError();
      return;
    }

    if (!bookPages.validity.valid) {
      showPagesError();
      return;
    }
    const form = e.target;
    const title = form.title.value.trim();
    const author = form.author.value.trim();
    const pages = form.pages.value.trim();
    const read = form.read.checked;

    const newBook = new Book(title, author, pages, read);
    library.addBook(newBook);

    bookFormDialog.close();
    form.reset();
  });
});
