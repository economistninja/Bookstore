require('dotenv').config();
const {connectDB, mongoose} = require('./db');
const {Books} = require('./plp_bookstore/books');

async function main() {
    await connectDB();

    await Books.insertMany([
        {
            title: 'Mastery',
            author: 'Robert Greene',
            genre: 'Self-help',
            published_Year: 2012,
            price: 15.99,
            in_stock: true,
            pages: 352,
            publisher: 'Viking' },
        {
            title: 'The 48 Laws of Power',
            author: 'Robert Greene',
            genre: 'Self-help',
            published_Year: 1998,
            price: 20.00,
            in_stock: true, 
            pages: 452,
            publisher: 'Penguin Random House' },
        {
            title: 'The Art of War',
            author: 'Sun Tzu',
            genre: 'Philosophy',
            published_Year: -500,
            price: 10.00,
            in_stock: true,
            pages: 273,
            publisher: 'Oxford University Press' },
        {
            title: 'Ode to the West Wind',
            author: 'Percy Bysshe Shelley',
            genre: 'Poetry',
            published_Year: 1820,
            price: 5.99,
            in_stock: true,
            pages: 48,
            publisher: 'John Murray' },
        {
            title: 'She comes first',
            author: 'Ian Kerner',
            genre: 'Self-help',
            published_Year: 2004,
            price: 12.99,
            in_stock: true,
            pages: 256,
            publisher: 'HarperCollins' },
        {
            title: 'Ode on a Grecian Urn',
            author: 'John Keats',
            genre: 'Poetry',
            published_Year: 1819,
            price: 4.99,
            in_stock: true,
            pages: 32,
            publisher: 'Taylor and Hessey' },
        {
            title: 'Ode to a Nightingale',
            author: 'John Keats',
            genre: 'Poetry',
            published_Year: 1819,
            price: 4.99,
            in_stock: true,
            pages: 28,
            publisher: 'Taylor and Hessey' },
        { 
            title: 'Leaders Eat Last',
            author: 'Simon Sinek',
            genre: 'Self-help',
            published_Year: 2014,
            price: 14.99,
            in_stock: true,
            pages: 320,
            publisher: 'Portfolio' },
        {
            title: 'The Prince',
            author: 'Niccolò Machiavelli',
            genre: 'Philosophy',
            published_Year: 1532,
            price: 9.99,
            in_stock: true,
            pages: 140,
            publisher: 'Antonio Blado d\'Asola' },
        { 
            title: 'To Autumn',
            author: 'John Keats',
            genre: 'Poetry',
            published_Year: 1819,
            price: 3.99,
            in_stock: true,
            pages: 24,
            publisher: 'Taylor and Hessey' }
    ]);

    console.log('Data seeded successfully');
    await mongoose.connection.close();
}

main().catch(err => console.log(err));



    
    
