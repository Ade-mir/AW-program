const { v4: uuidv4 } = require('uuid'); // Random id node module
const fs = require('fs');

const BookAPI = (function () {
  let books = [];

  return {
    createBook: function (book) {
      const newBook = {
        id: uuidv4(),
        title: book.title,
        author: book.author,
        summary: book.summary,
        coverImage: book.coverImage,
      };

      books.push(newBook);
      return newBook;
    },

    getBooks: function () {
      return books;
    },

    getBook: function (bookId) {
      const id = bookId;
      return books.find((book) => book.id === id);
    },

    updateBook: function (bookId, updates) {
      const bookIndex = books.findIndex((book) => book.id === bookId);
      if (bookIndex !== -1) {
        books[bookIndex] = { ...books[bookIndex], ...updates };
      }
    },

    deleteBook: function (bookId) {
      books = books.filter((book) => book.id !== bookId, 10);
    },

    load: function (save) {
      try {
        const data = fs.readFileSync(save);
        books = JSON.parse(data);
      } catch (err) {
        console.error(err);
      }
    },

    save: function (save) {
      try {
        const data = JSON.stringify(books);
        fs.writeFileSync(save, data);
      } catch (err) {
        console.error(err);
      }
    },
  };
})();

module.exports = {
  createBook: BookAPI.createBook,
  getBooks: BookAPI.getBooks,
  getBook: BookAPI.getBook,
  updateBook: BookAPI.updateBook,
  deleteBook: BookAPI.deleteBook,
  load: BookAPI.load,
  save: BookAPI.save,
};
