const books = [
    {
        title: 'The Catcher in the Rye',
        author: 'J.D. Salinger',
        year: 1951
    },
    {
        title: 'To kill a Mockingbird',
        author: 'Harper Lee',
        year: 1960
    },
    {
        title: 'The Great Gatsby',
        author: 'F. Scott Fitzgerald',
        year: 19250
    },
    {
        title: 'Pride and Prejudice',
        author: 'Jane Austen',
        year: 1813
    },
    {
        title: 'The Hunger Games',
        author: 'Suzanne Collins',
        year: 2018
    },
    {
        title: 'The Girl with the Dragon Tattoo',
        author: 'Stieg Larsson',
        year: 2005
    }
];


const filteredBooks = books.filter(book => book.year >= 2010).map(book => ({title: book.title, author: book.author.toUpperCase() }));


console.log(filteredBooks);