BookshelfVault

BookshelfVault is a personal library management system built with HTML, CSS, and JavaScript. It allows you to add, remove, and update books using an object-oriented approach and persists your data using the browser's localStorage. This project includes form validation to ensure that all required fields are properly filled.

Features
Add Books: Create new book entries with title, author, pages, and read status.
Remove Books: Delete books from your library.
Toggle Read Status: Mark books as read or not read with a simple click.
LocalStorage Persistence: Your book list is saved in your browser, so your library remains intact even after refreshing the page.
Form Validation: Uses the Constraint Validation API to ensure that required fields are completed before submission.
Technologies Used
HTML5: Structure of the application.
CSS & Bootstrap: Styling and responsive layout.
JavaScript (ES6+): Object-oriented programming for managing the library.
LocalStorage: For data persistence on the client side.
Installation & Setup
Clone the repository:

bash
Copy
Edit
git clone https://github.com/creathorkim/BookshelfVault.git
Open the project directory:

bash
Copy
Edit
cd BookshelfVault
Open index.html in your web browser:
You can simply open the file in a browser or use a local server like Live Server in VS Code.

How to Use
Adding a Book:

Click the "Add Book" button to open the form dialog.
Fill in the required fields (Title, Author, Pages) and check the "Read" box if applicable.
Click "Add Book" to submit. The new book will appear in your library.
Toggling Read Status:

Click the "Toggle Read" button on a book card to change its read status.
Removing a Book:

Click the "Remove" button on a book card to delete it from your library.
Project Structure
index.html: The main HTML file that sets up the webpage.
library.css: Custom CSS styling for the project (along with Bootstrap).
library.js: JavaScript file containing the logic for the Book and Library classes, form validation, and DOM manipulation.
README.md: Project documentation.
Contributing
If you'd like to contribute, please fork the repository and submit a pull request. All contributions are welcome!

License
This project is open source and available under the MIT License.
