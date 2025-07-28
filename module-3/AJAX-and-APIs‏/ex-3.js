// searches for books using the Google Books API based on a given isbn or title.
// it loops through all the results in the items array and prints the title, authors, and ISBN for each book.


function fetchBook(queryType, queryValue) {
    const baseUrl = "https://www.googleapis.com/books/v1/volumes";
    let query;

    if (queryType.toLowerCase() === "isbn") {
        query = `q=isbn:${queryValue}`;
    } else if (queryType.toLowerCase() === "title") {
        query = `q=intitle:${encodeURIComponent(queryValue)}`;
    } else {
        console.error("Invalid query type. Use 'isbn' or 'title'.");
        return;
    }

    const url = `${baseUrl}?${query}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (!data.items || data.items.length === 0) {
                console.log("No books found.");
                return;
            }

            data.items.forEach((item, index) => {
                const info = item.volumeInfo;
                const title = info.title || "No title";
                const authors = info.authors ? info.authors.join(', ') : "No authors";
                
                // try to get ISBN-13 or ISBN-10 if available
                let isbn = "No ISBN";
                if (info.industryIdentifiers) {
                    const isbnObj = info.industryIdentifiers.find(id =>
                        id.type === "ISBN_13" || id.type === "ISBN_10"
                    );
                    if (isbnObj) isbn = isbnObj.identifier;
                }

                console.log(`\nBook ${index + 1}`);
                console.log(`Title: ${title}`);
                console.log(`Author(s): ${authors}`);
                console.log(`ISBN: ${isbn}`);
            });
        })
        .catch(error => {
            console.error("Error fetching book data:", error);
        });
}

fetchBook("isbn", 9789814561778); // From Third World to First
fetchBook("title", "How to Win Friends and Influence People");
fetchBook("title", "The Wise Man's Fears");