let myLibrary=[];

function Book(title,author,pages,read){
this.title = title
  this.author = author
  this.pages = pages
  this.read = read

}

function addBookToLibrary(book){
    myLibrary.push(book);
    // displayLibrary(myLibrary);
    const div = document.createElement('div');
    const container = document.querySelector('.Book_Container');
    div.innerText = book.title;
    container.append(div);


}

// function displayLibrary(list){
// const div = document.createElement('div');
// div.value = 

// }

console.log("test");

const addBook = document.querySelector('input[type=submit');
addBook.addEventListener('click',()=>{
    const bookData = document.querySelectorAll('input[name=book_data');
    let book = [];
    bookData.forEach((field)=>{
        book.push(field.value);
        console.log(field.value);
    });
    const new_book = new Book(book[0],book[1],book[2],book[3]);
    addBookToLibrary(new_book);
    console.log(myLibrary);
})

