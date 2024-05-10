var { shelfBook, unshelfBook, searchShelf } = require('./shelf.js');

function createLibrary(name) {
  return {
    name,
    shelves: {
      fantasy: [],
      fiction: [],
      nonFiction: [],
    },
  };
}

function addBook(library, book) {
  shelfBook(book, library.shelves[book.genre]);
}

function checkoutBook(library, title, genre) {
  var isAvailable = searchShelf(library.shelves[genre], title);

  if (isAvailable) {
    unshelfBook(title, library.shelves[genre]);
    return `You have now checked out ${title} from the ${library.name}.`;
  }

  return `Sorry, there are currently no copies of ${title} available at the ${library.name}.`;
}

function takeStock(library, genre) {
  if (library.shelves[genre]) {
    booksCount = library.shelves[genre].length;
    return `There are a total of ${booksCount} ${genre} books at the ${library.name}.`;
  }
  
  var currentGenre;
  var booksCount = 0;
  var allGenres = Object.keys(library.shelves);

  for (let i = 0; i < allGenres.length; i += 1) {
    currentGenre = allGenres[i];
    booksCount += library.shelves[currentGenre].length;
  }

  return `There are a total of ${booksCount} books at the ${library.name}.`;
}

module.exports = {
  createLibrary,
  addBook,
  checkoutBook,
  takeStock,
};
