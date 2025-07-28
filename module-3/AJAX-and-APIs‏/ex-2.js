// takes a search type ("isbn" or "title") and a search value,
// then fetches book information from the Open Library API.
function fetchBook(queryType, queryValue) {
    let url;

    if (queryType.toLowerCase() === "isbn") {
        url = `https://openlibrary.org/api/books?bibkeys=ISBN:${queryValue}&format=json&jscmd=data`;
    } else if (queryType.toLowerCase() === "title") {
        const encodedTitle = encodeURIComponent(queryValue);
        url = `https://openlibrary.org/search.json?title=${encodedTitle}`;
    } else {
        console.error("Invalid query type. Use 'isbn' or 'title'.");
        return;
    }

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (queryType.toLowerCase() === "isbn") {
                const bookKey = `ISBN:${queryValue}`;
                const book = data[bookKey];

                if (book) {
                    console.log(`Title: ${book.title}`);
                    console.log(`Authors: ${book.authors.map(author => author.name).join(', ')}`);
                    console.log(`Publish Date: ${book.publish_date}`);
                } else {
                    console.log("Book not found.");
                }
            } else if (queryType.toLowerCase() === "title") {
                if (data.docs && data.docs.length > 0) {
                    const book = data.docs[0];
                    console.log(`Title: ${book.title}`);
                    console.log(`Author(s): ${book.author_name?.join(', ')}`);
                    console.log(`First Published: ${book.first_publish_year}`);
                } else {
                    console.log("No results found for this title.");
                }
            }
        })
        .catch(error => {
            console.error("Error fetching book data:", error);
        });
}

fetchBook("isbn", 9789814561778); // From Third World to First
fetchBook("title", "The Wise Man's Fears");
fetchBook("title", "How to Win Friends and Influence People");