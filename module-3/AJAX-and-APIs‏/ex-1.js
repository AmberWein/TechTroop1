// fetch and display information about a book, such as: its title, authors, and publish date using its ISBN from the Open Library API

function fetchBook(isbn) {
    const url = `https://openlibrary.org/api/books?bibkeys=ISBN:${isbn}&format=json&jscmd=data`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const bookKey = `ISBN:${isbn}`;
            const book = data[bookKey];

            if (book) {
                console.log(`Title: ${book.title}`);
                console.log(`Authors: ${book.authors.map(author => author.name).join(', ')}`);
                console.log(`Publish Date: ${book.publish_date}`);
            } else {
                console.log("Book not found.");
            }
        })
        .catch(error => {
            console.error("Error fetching book data:", error);
        });
}

fetchBook(9782806269171); // The Little Prince: Book Analysis
fetchBook(1440633908); // Of Mice and Men by John Steinbeck
fetchBook(9781945048470 );    // The Alchemist by Paulo Coelho
fetchBook(9780307417138 ); // Hitchhiker's Guide to the Galaxy