//3) Write a program gather and display information from an object like the reading status (i.e. display book name, author name and reading status) of books and check book are reading or not in console.

class Book{
    bookName;
    bookAuthor;
    readingStatus;
    constructor(name, author, status=false){
        this.bookName = name;
        this.bookAuthor = author;
        this.status = status;
        if(this.status){
            console.log("Reading");
        }
        else{
            console.log("Not reading");
        }
    }
}

const book1 = new Book('book1','author1',true);
const book2 = new Book('book2','author2');
