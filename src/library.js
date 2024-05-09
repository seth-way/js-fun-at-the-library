var { shelfBook, unshelfBook, listTitles, searchShelf } = require('./shelf.js');

function createLibrary(name) {
  return {
    name: name,
    shelves: {
      fantasy: [],
      fiction: [],
      nonFiction: [],
    },
  };
}

function addBook(library, book) {
  var genre = book.genre;
  shelfBook(book, library.shelves[genre]);
}

function checkoutBook(library, title, genre) {
  var message;
  var isAvailable = searchShelf(library.shelves[genre], title);

  if (isAvailable) {
    unshelfBook(title, library.shelves[genre]);
    message = `You have now checked out ${title} from the ${library.name}.`;
  } else {
    message = `Sorry, there are currently no copies of ${title} available at the ${library.name}.`;
  }

  return message;
}

function takeStock(library, genre) {
  var booksCount = 0;
  var message;

  if (library.shelves[genre] !== undefined) {
    booksCount = library.shelves[genre].length;
    message = `There are a total of ${booksCount} ${genre} books at the ${library.name}.`;
  } else {
    var currentGenre;
    var allGenres = Object.keys(library.shelves);

    for (let i = 0; i < allGenres.length; i += 1) {
      currentGenre = allGenres[i];
      booksCount += library.shelves[currentGenre].length;
    }

    message = `There are a total of ${booksCount} books at the ${library.name}.`;
  }

  return message;
}

module.exports = {
  createLibrary,
  addBook,
  checkoutBook,
  takeStock,
};
