require('dotenv').config();
const {connectDB, mongoose} = require('./db');
const {Books} = require('./plp_bookstore/books');

async function main() {
    await connectDB();

    // Query 1: Find all books in a specific genre (e.g., 'Self-help')
    const selfHelpBooks = await Books.find({genre: 'Self-help'});
    console.log('Self-help Books:', selfHelpBooks);

    // Query 2: Find books published before a certain year (e.g., before 2000)
    const oldBooks = await Books.find({published_Year: {$lt: 2000}});
    console.log('Books published before 2000:', oldBooks);

    // Query 3: Find books by a specific author (e.g., 'John Keats')
    const keatsBooks = await Books.find
    console.log('Books by John Keats:', keatsBooks);

    // Query 4: update the price of a specific book (e.g., 'The Art of War') to a new value (e.g., 12.99)
    const updatedBook = await Books.findOneAndUpdate(
        {title: 'The Art of War'},
        {price: 12.99},
        {new: true}
    );
    console.log('Updated Book:', updatedBook);

    // Advanced Queries
    // Query 5: Find books that are both in stock and published after 2010
    const recentInStockBooks = await Books.find({
        in_stock: true,
        published_Year: {$gt: 2010}
    });
    console.log('In-stock books published after 2010:', recentInStockBooks);

    // Query 6: Use projection to return only the title, auther, and price fields of my queries
    const projectedBooks = await Books.find({}, 'title author price');
    console.log('Projected Books (title, author, price):', projectedBooks);

    // Query 7: Sort the display of the books by price in ascending order
    const sortedBooks = await Books.find().sort({price: 1});
    console.log('Books sorted by price (ascending):', sortedBooks);

    // Query 8: Use the limit and skip methods to paginate the 5 books per page
    const page = 1; // Change this value to get different pages
    const booksPerPage = 5;
    const paginatedBooks = await Books.find()
        .skip((page - 1) * booksPerPage)
        .limit(booksPerPage);
    console.log(`Books on page ${page}:`, paginatedBooks);

    // Aggregation Pipeline
    // Query 9: Calculate the average price of books in each genre
    const avgPriceByGenre = await Books.aggregate([
        {
            $group: {
                _id: '$genre',
                averagePrice: {$avg: '$price'}
            }
        }
    ]);
    console.log('Average price by genre:', avgPriceByGenre);

    // Query 10: Create an aggregation pipeline to find the author with the most books in the collection
    const authorWithMostBooks = await Books.aggregate([
        {   
        $group: {
                _id: '$author',
                bookCount: {$sum: 1}
            }
        },
        { $sort: {bookCount: -1} },
        { $limit: 1 }
    ]);
    console.log('Author with the most books:', authorWithMostBooks);

    // Query 11: Implement a pipeline that groups books by publication decade and counts them
    const booksByDecade = await Books.aggregate([
        {
            $group: {
                _id: {
                    $concat: [
                        {$toString: {$multiply: [{$floor: {$divide: ['$published_Year', 10]}}, 10]}},
                        's'
                    ]
                },
                count: {$sum: 1}
            }
        },
        { $sort: {_id: 1} }
    ]);
    console.log('Books grouped by publication decade:', booksByDecade);

    // Indexing
    // Query 12: Create an index on the title field for faster searches
    await Books.collection.createIndex({title: 1});
    console.log('Index created on title field');
    const indexedSearch = await Books.find({title: 'The Art of War'});
    console.log('Indexed search result for "The Art of War":', indexedSearch);

    // Query 14: Create a compound index on author and published_Year
    await Books.collection.createIndex({author: 1, published_Year: -1});
    console.log('Compound index created on author and published_Year');
    const compoundIndexedSearch = await Books.find({author: 'Robert Greene'}).sort({published_Year: -1});
    console.log('Compound indexed search result for books by Robert Greene:', compoundIndexedSearch);

    // Query 15: Use the explain method to demonstrate the performance improvement with your indexes
    const explainResult = await Books.find({title: 'The Art of War'}).explain('executionStats');
    console.log('Explain result for indexed search on title "The Art of War":', explainResult);

}

main()