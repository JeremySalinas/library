let myLibrary = [];

function addBooks() {
  let popUp = document.getElementById("addBookPopUp");
  popUp.style.display = popUp.style.display == "none" ? "" : "none";
  document.getElementsByTagName("div")[0].classList.toggle("blur");
  // document.getElementById("addBooksBtn").disabled = true;
  // document.getElementsByClassName("logInBtn").disabled = true;
}

let i = 0

function addBookToLibrary(book) {
  let libraryOne = document.getElementById("books");
  let div = document.createElement("div");
  let title = document.createElement("div");
  let author = document.createElement("div");
  let pages = document.createElement("div");
  let read = document.createElement("button");
  let remove = document.createElement("button");

  title.classList.add("title");
  title.textContent = myLibrary[i].title;

  author.classList.add("author");
  author.textContent = myLibrary[i].author;

  pages.classList.add("pages");
  pages.textContent = myLibrary[i].pages + " pages";

  if (!myLibrary[i].read) {
    read.classList.toggle("unfinished");
    read.textContent = "not read";
  } else {
    read.classList.toggle("finished");
    read.textContent = "read";
  }

  read.onclick = function() {
    read.classList.toggle("unfinished");
    read.classList.toggle("finished");
    if (read.textContent === "not read"){
      read.textContent = "read"
    } else {
      read.textContent = "not read";
    }
  }

  remove.classList.add("remove");
  remove.textContent = "remove";
  remove.onclick = function() {
    div.remove();
  };

  div.classList.add("bookCard");

  libraryOne.append(div);
  div.append(title);
  div.append(author);
  div.append(pages);
  div.append(read);
  div.append(remove);
  i++;
  
}

const newBook = (ev) => {
  ev.preventDefault();

  let book = {
    title: document.getElementById("title").value,
    author: document.getElementById("author").value,
    pages: document.getElementById("pages").value,
    read: document.getElementById("read").checked,
    remove: 1,
  };

  console.log(book.remove)
  myLibrary.push(book);
  
  addBookToLibrary(book); 
  addBooks();
};

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("submitBtn").addEventListener("click", newBook);
});
