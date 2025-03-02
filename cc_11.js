// Task 1 creating a book class
class Book {
    constructor(title, author, isbn, copies) {
        this.title = title; // string
        this.author = author; // string
        this.isbn = isbn; // number
        this.copies = copies; // number
    }
    getDetails() {
        return `Title: ${this.title}, Author: ${this.author}, ISBN: ${this.isbn}, Copies: ${this.copies}`
    }; // returns book details
    updateCopies(quantity) {
        this.copies += quantity;
    } // update copies of book
}; // class for book

const book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald", 123456, 5);
console.log(book1.getDetails()); // Title: The Great Gatsby, Author: F. Scott Fitzgerald, ISBN: 123456, Copies: 5

book1.updateCopies(-1); // udating copies of book
console.log(book1.getDetails()); // Title: The Great Gatsby, Author: F. Scott Fitzgerald, ISBN: 123456, Copies: 4

// Task 2 creating a borrower class
class Borrower {
    constructor(name, borrowerId,) {
        this.name = name; // string
        this.borrowerId = borrowerId; // number
        this.borrowedBooks = []; // array
    }
    borrowBook(book) {
        this.borrowedBooks.push(book); // adding books to array
    }
    returnBook(book) {
        this.borrowedBooks = this.borrowedBooks.filter(b => b !== book); // removing books to array
    }
}; // class for borrower

const borrower1 = new Borrower("Alice Johnson", 201);
borrower1.borrowBook("The Great Gatsby");
console.log(borrower1.borrowedBooks); // [ 'The Great Gatsby' ]

borrower1.returnBook("The Great Gatsby");
console.log(borrower1.borrowedBooks); // []

// Task 3 Creating a library class
class Library {
    constructor() {
        this.books = []; // array
        this.borrowers = []; // array
    }
    addBook(book) {
        this.books.push(book); // adds books to arryy
    }
    listBooks() {
        this.books.map(book => console.log(book.getDetails())); // lists book details
    }
    addBorrower(borrower) {
        this.borrowers.push(borrower); // adds brrower to array
    }
    
    // Task 4 implementing book borrowing
    lendBook(borrowerId, isbn) {
        const book = this.books.find(book => book.isbn === isbn); // finds book by isbn
        const borrower = this.borrowers.find(borrower => borrower.borrowerId === borrowerId); // finds borrower by id
        if (book && borrower) {
        if (book.copies > 0) {
            book.updateCopies(-1); // updates copies
            borrower.borrowBook(book); // borrows selected book
            } 
            else {
                console.log("No copies available");
            }
        } else {
            console.log("Book or borrower not found")
        }
    }

    //Task 5 implementing book returns
    returnBook(borrowerId, isbn) {
        const borrower = this.borrowers.find(b => b.borrowerId === borrowerId); // finds borrower by id
        const book = this.books.find(b => b.isbn === isbn); // finds book by isbn
        if (book) {
            book.updateCopies(1); // updates copies
            if (borrower) {
                borrower.returnBook(book); // returns book
            }
        }
    }
} // class for library

const library = new Library();
library.addBook(book1); // adding book to library
library.addBorrower(borrower1); // adding borrower to library
library.listBooks(); // Title: The Great Gatsby, Author: F. Scott Fitzgerald, ISBN: 123456, Copies: 5

library.lendBook(201, 123456); // borrows book
console.log(book1.getDetails());
console.log(borrower1.borrowedBooks); // Book { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', isbn: 123456, copies: 3 }

library.returnBook(201, 123456); // returns book
console.log(book1.getDetails());

console.log(borrower1.borrowedBooks); // []