/*function books(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
        return `${title} by ${author}, ${pages} pages, ${read}`; 
    }  
*/

const addButton = document.querySelector('.addButton')
const closeWindow = document.querySelector('.closeWindow')
const body = document.querySelector('body');
const informationField = document.querySelector('.informationField')


addButton.addEventListener('click', newBook)
function newBook () {
    informationField.setAttribute("style", "display: block");

}

closeWindow.addEventListener('click', closeForm)
function closeForm() {
    informationField.setAttribute("style", "display: none");
}

///

const titleForm = document.getElementById('title');
const authorForm = document.getElementById('author');
const pagesForm = document.getElementById('pages');
const readStatus = document.getElementById('readStatus');
const submitButton = document.getElementById('storageData');

submitButton.addEventListener('click', saveBook)

function saveBook() {
    setValue();
    getValue();
    
}

function setValue() {
    localStorage.setItem('title', document.getElementById('title').value)
    localStorage.setItem('author', document.getElementById('author').value)
    localStorage.setItem('pages', document.getElementById('pages').value);
    localStorage.setItem('readStatus', document.getElementById('readStatus').checked)
}

let saveTitle;
let saveAuthor;
let savePages;
let saveReadStatus;

function getValue() {
    saveTitle = localStorage.getItem('title');
    saveAuthor = localStorage.getItem('author');
    savePages = localStorage.getItem('pages')
    saveReadStatus = localStorage.getItem('readStatus');
}



///

let library = []; 

function Libro() {}

function allNewBook(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read; 
}  

Libro.prototype.showBook = function() {
    console.log(`title: ${this.title}, author: ${this.author}, pages: ${this.pages}, read: ${this.read}`);
}

allNewBook.prototype = Object.create(Libro.prototype);

