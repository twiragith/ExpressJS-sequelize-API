const express = require('express');
const bodyParser = require('body-parser');
const { Book } = require('./models');

const app = express();
app.use(bodyParser.json());

// Get all books
app.get('/books', async (req, res) => {
  const books = await Book.findAll();
  res.json(books);
});

// Create a new book
app.post('/books', async (req, res) => {
  const { title, author, year } = req.body;
  const newBook = await Book.create({ title, author, year });
  res.json(newBook);
});

// Update a book
app.put('/books/:id', async (req, res) => {
  const { id } = req.params;
  const { title, author, year } = req.body;
  const book = await Book.findByPk(id);
  if (book) {
    book.title = title;
    book.author = author;
    book.year = year;
    await book.save();
    res.json(book);
  } else {
    res.status(404).json({ error: 'Book not found' });
  }
});

// Delete a book
app.delete('/books/:id', async (req, res) => {
  const { id } = req.params;
  const book = await Book.findByPk(id);
  if (book) {
    await book.destroy();
    res.json({ message: 'Book deleted' });
  } else {
    res.status(404).json({ error: 'Book not found' });
  }
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
