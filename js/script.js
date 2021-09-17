/*function books(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
        return `${title} by ${author}, ${pages} pages, ${read}`; 
    }  
*/





/*
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
    //getValue();
}

function setValue() {
    localStorage.setItem('title', document.getElementById('title').value)
    localStorage.setItem('author', document.getElementById('author').value)
    localStorage.setItem('pages', document.getElementById('pages').value);
    localStorage.setItem('readStatus', document.getElementById('readStatus').checked)
    getValue();
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
*/

/// 

  


let myLibrary = [];

const titleForm = document.getElementById('title');
const authorForm = document.getElementById('author');
const pagesForm = document.getElementById('pages');
const readStatus = document.getElementById('readStatus');



function newBook(){
}

function Book(title,author,pages,read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read; 
}


Book.prototype = Object.create(newBook.prototype);




function addBookToLibrary(book) {
    myLibrary.push(book);
}

const userInput = document.querySelectorAll('.container_input'); 
const submitButton = document.querySelector('#container_submit_button'); 

submitButton.addEventListener('click', showUserInput)

let userValues = [];



function showUserInput() {

    let titleValue = titleForm.value;
    let authorValue = authorForm.value;
    let pagesValue = pagesForm.value;
    let readValue = readStatus.checked;

    if(readValue === true) readValue = 'Read'
    else readValue = 'Unread';

    const addBook = new Book(titleValue, authorValue, pagesValue, readValue);

    if(titleValue === '' || authorValue === '' || pagesValue === '') {
        alert('Please complete the form');
        return;
    }

    myLibrary.push(addBook);




    const body = document.querySelector('body')
    const newDiv = document.createElement('div')
    newDiv.setAttribute('class', 'user_text')
    


    myLibrary.forEach((book,index,array) => {
        newDiv.setAttribute('data-book-number', index);
        if(index === array.length - 1) {
            Object.values(book).forEach( categorie => {
            

            let information = document.createElement('div');
            information.setAttribute('class','book_information');
            information.textContent = categorie;
            newDiv.appendChild(information);



            if (categorie === 'Read' || categorie === 'Unread') {
            
                let readState = document.createElement('button');
                readState.setAttribute('class', 'readConfirmation');
                readState.textContent = readValue; 
                newDiv.appendChild(readState);
                information.replaceWith(readState);

                readState.addEventListener('click', changeReadState) 

                function changeReadState() {
                    if(readState.textContent === 'Read') {
                        readState.textContent = 'Unread';
                        myLibrary[index].read = 'Unread';
                    } else { readState.textContent = 'Read'; 
                    myLibrary[index].read = 'Read';
                }
                }


            }
        }
            
)
        
        let deleteButton = document.createElement('button');
        deleteButton.innerHTML = '<i class="material-icons">close</i>';
        deleteButton.setAttribute('class' , 'deleteButton')
        newDiv.appendChild(deleteButton);

        deleteButton.addEventListener('click', deleteBook)

        function deleteBook() {
            myLibrary.splice(newDiv.dataset.bookNumber, 1);
            if(newDiv.dataset.bookNumber === 0) myLibrary = [];
            newDiv.remove();
        }

        }
    })
    body.appendChild(newDiv);
}






