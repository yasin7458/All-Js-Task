let arr = [
    { id: 1, bookName: "JavaScript Basics", author: "Raj Patel", category: "Programming", quantity: 5 },
    { id: 2, bookName: "Clean Code", author: "Robert Martin", category: "Programming", quantity: 0 },
    { id: 3, bookName: "The Great Gatsby", author: "F. Scott Fitzgerald", category: "Fiction", quantity: 3 }
];

document.querySelector('main').innerHTML += arr.length;

document.querySelector('.display').onclick = function () {
    document.querySelector('table').classList.add('show');
    document.querySelector('tbody').innerHTML = "";
    document.querySelector('thead tr').innerHTML = "<th>ID</th><th>Book Name</th><th>Author</th><th>Category</th><th>Quantity</th>";
    for (const book of arr) {
        document.querySelector('tbody').innerHTML += `
                    <tr>
                        <td>${book.id}</td>
                        <td>${book.bookName}</td>
                        <td>${book.author}</td>
                        <td>${book.category}</td>
                        <td>${book.quantity}</td>
                    </tr>`;
    }
}

document.querySelector('.add').onclick = function () {
    var book = {
        id: Number(prompt("Enter Book ID : ")),
        bookName: prompt("Enter Book Name : "),
        author: prompt("Enter Author Name : "),
        category: prompt("Enter Category : "),
        quantity: Number(prompt("Enter Quantity : "))
    };
    arr.push(book);
    document.querySelector('main').innerHTML = "Total Books : " + arr.length;
    console.log(arr);
}

document.querySelector('.update').onclick = function () {
    var bookid = Number(prompt("Enter Book ID to Update : "));
    for (const book of arr) {
        if (book.id == bookid) {
            book.bookName = prompt("Enter New Book Name : ");
            book.author = prompt("Enter New Author Name : ");
            book.category = prompt("Enter New Category : ");
            book.quantity = Number(prompt("Enter New Quantity : "));
        }
    }
}

document.querySelector('.delete').onclick = function () {
    var bookid = Number(prompt("Enter Book ID to Delete : "));
    arr = arr.filter((book) => {
        return book.id != bookid;
    });
    document.querySelector('main').innerHTML = "Total Books : " + arr.length;
}

document.querySelector('.search').onclick = function () {
    var choice = prompt("Search by :\n1. Name\n2. Author\n3. Category\nEnter 1, 2 or 3 : ");
    var keyword = prompt("Enter Keyword : ").toLowerCase();
    var result = [];
    
    if (choice == "1") {
        result = arr.filter((book) => book.bookName.toLowerCase().includes(keyword));
    } else if (choice == "2") {
        result = arr.filter((book) => book.author.toLowerCase().includes(keyword));
    } else if (choice == "3") {
        result = arr.filter((book) => book.category.toLowerCase().includes(keyword));
    }
    document.querySelector('table').classList.add('show');
    document.querySelector('tbody').innerHTML = "";
    document.querySelector('thead tr').innerHTML = "<th>ID</th><th>Book Name</th><th>Author</th><th>Category</th><th>Quantity</th>";
    for (const book of result) {
        document.querySelector('tbody').innerHTML += `
                    <tr>
                        <td>${book.id}</td>
                        <td>${book.bookName}</td>
                        <td>${book.author}</td>
                        <td>${book.category}</td>
                        <td>${book.quantity}</td>
                    </tr>`;
    }
}

document.querySelector('.issue').onclick = function () {
    var bookid = Number(prompt("Enter Book ID to Issue : "));
    for (const book of arr) {
        if (book.id == bookid) {
            if (book.quantity > 0) {
                book.quantity--;
                alert("Book Issued! Remaining : " + book.quantity);
            } else {
                alert("Out of Stock!");
            }
        }
    }
}

document.querySelector('.returnBook').onclick = function () {
    var bookid = Number(prompt("Enter Book ID to Return : "));
    for (const book of arr) {
        if (book.id == bookid) {
            book.quantity++;
            alert("Book Returned! Now in Stock : " + book.quantity);
        }
    }
}

document.querySelector('.asc').onclick = function () {
    arr.sort((a, b) => {
        return a.quantity - b.quantity;
    });
    document.querySelector('table').classList.add('show');
    document.querySelector('tbody').innerHTML = "";
    document.querySelector('thead tr').innerHTML = "<th>ID</th><th>Book Name</th><th>Author</th><th>Category</th><th>Quantity</th>";
    for (const book of arr) {
        document.querySelector('tbody').innerHTML += `
                    <tr>
                        <td>${book.id}</td>
                        <td>${book.bookName}</td>
                        <td>${book.author}</td>
                        <td>${book.category}</td>
                        <td>${book.quantity}</td>
                    </tr>`;
    }
}

document.querySelector('.desc').onclick = function () {
    arr.sort((a, b) => {
        return b.quantity - a.quantity;
    });
    document.querySelector('table').classList.add('show');
    document.querySelector('tbody').innerHTML = "";
    document.querySelector('thead tr').innerHTML = "<th>ID</th><th>Book Name</th><th>Author</th><th>Category</th><th>Quantity</th>";
    for (const book of arr) {
        document.querySelector('tbody').innerHTML += `
                    <tr>
                        <td>${book.id}</td>
                        <td>${book.bookName}</td>
                        <td>${book.author}</td>
                        <td>${book.category}</td>
                        <td>${book.quantity}</td>
                    </tr>`;
    }
}

document.querySelector('.status').onclick = function () {
    document.querySelector('table').classList.add('show');
    document.querySelector('tbody').innerHTML = "";
    document.querySelector('thead tr').innerHTML = "<th>ID</th><th>Book Name</th><th>Author</th><th>Category</th><th>Quantity</th><th>Status</th>";
    for (const book of arr) {
        document.querySelector('tbody').innerHTML += `
                    <tr>
                        <td>${book.id}</td>
                        <td>${book.bookName}</td>
                        <td>${book.author}</td>
                        <td>${book.category}</td>
                        <td>${book.quantity}</td>
                        <td>${(book.quantity > 0) ? "Available" : "Out of Stock"}</td>
                    </tr>`;
    }
}