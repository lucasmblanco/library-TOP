let myLibraryStorage = [];

window.onload = loadBooks();

function loadBooks() {
    myLibraryStorage = JSON.parse(localStorage.getItem('bookStorage') || '[]');
}
  


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
    localStorage.setItem('bookStorage', JSON.stringify(book));
}

const userInput = document.querySelectorAll('.container_input'); 
const submitButton = document.querySelector('.container_submit_button'); 

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

    addBookToLibrary(addBook);


   
 


    const libraryContainer = document.getElementById('container_library');
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
                if(categorie === 'Read') {
                    readState.innerHTML = '<i class="material-icons">visibility</i>'
             } else {
                 readState.innerHTML = '<i class="material-icons">visibility_off</i>'
            }
                newDiv.appendChild(readState);
                information.replaceWith(readState);

                readState.addEventListener('click', changeReadState) 

                function changeReadState() {
                    if(readState.innerHTML  === '<i class="material-icons">visibility</i>') {
                        //readState.textContent = 'Unread';
                        readState.innerHTML = '<i class="material-icons">visibility_off</i>'
                        myLibrary[index].read = 'Unread';
                    } else { 
                    readState.innerHTML = '<i class="material-icons">visibility</i>'
                    // readState.textContent = 'Read'; 
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
    libraryContainer.appendChild(newDiv);

    titleForm.value = '';
    authorForm.value = '';
    pagesForm.value = '';
    readStatus.checked = false;


}

/////////

const buttonAddBook = document.getElementById('button_addBook');
const containerForm = document.querySelector('.container');

buttonAddBook.addEventListener('click', seeForm);


function seeForm() {
    containerForm.style.display = 'flex';

}

const cancelForm = document.querySelector('.container_cancel_form');

cancelForm.addEventListener('click', formIsNoMore)

function formIsNoMore() {

    titleForm.value = '';
    authorForm.value = '';
    pagesForm.value = '';
    readStatus.checked = false;

    containerForm.style.display = 'none';
}


let almacenadoLibros = JSON.parse(localStorage.getItem("bookStorage") || "[]");
