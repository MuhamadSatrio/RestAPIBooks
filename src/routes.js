const {
  menyimpanBuku, menampilkanAllBooks, editBooks, hapusBuku, ambilBukuId,
} = require('./handler');

const routes = [
  {
    method: 'POST',
    path: '/books',
    handler: menyimpanBuku,
  },

  {
    method: 'GET',
    path: '/books',
    handler: menampilkanAllBooks,
  },

  {
    method: 'GET',
    path: '/books/{bookId}',
    handler: ambilBukuId,
  },

  {
    method: 'PUT',
    path: '/books/{bookId}',
    handler: editBooks,
  },

  {
    method: 'DELETE',
    path: '/books/{bookId}',
    handler: hapusBuku,
  },
];

module.exports = routes;
