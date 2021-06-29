console.log("This is ES6 index.js");
class Book {
    constructor(name, author, type) {
        this.name = name;
        this.author = author;
        this.type = type;
    }
}

class Display {
    add(book) {
        console.log('adding to ui');
        let tableBody = document.getElementById('tableBody');
        let uistring = `<tr>
                            <td>${book.name}</td>
                            <td>${book.author}</td>
                            <td>${book.type}</td>
                        </tr>`;
        tableBody.innerHTML += uistring;
    }

    clear() {
        let libraryForm = document.getElementById('libraryForm');
        libraryForm.reset();
    }

    validate(book) {
        if (book.name.length < 2 || book.author.length < 2) {
            return false;
        }
        else
            return true;
    }

    show(type, displayMessage) {
        let message = document.getElementById('message');
        message.innerHTML = `<div class="alert alert-${type} alert-dismissible fade show" role="alert">
                        <strong>Message:</strong> ${displayMessage}
                        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                        </div>`;
        setTimeout(function () {
            message.innerHTML = ""
        }, 2000);

    }
}
let libraryForm = document.getElementById('libraryForm');
libraryForm.addEventListener('submit', libraryFormSubmit)

function libraryFormSubmit(e) {
    console.log('you have submitted libraryForm');
    let name = document.getElementById('bookName').value;
    let author = document.getElementById('author').value;

    let fiction = document.getElementById('fiction');
    let programming = document.getElementById('programming');
    let thriller = document.getElementById('thriller');
    let type;

    if (fiction.checked) {
        type = fiction.value;
    }
    else if (programming.checked) {
        type = programming.value;
    }
    else if (thriller.checked) {
        type = thriller.value;
    }

    //type = document.getElementById('bookName').value;
    let book = new Book(name, author, type);
    console.log(book);

    let display = new Display();

    if (display.validate(book)) {
        display.add(book);
        display.clear();
        display.show('success', ' The book has been added successfully.');
    }
    else {
        display.show('danger', ' Sorry you cannot add this book.');
    }


    e.preventDefault();
}