function shelfBook(book, shelf) {
  if (shelf.length < 3) {
    shelf.unshift(book);
  }
}

function unshelfBook(title, shelf) {
  for (let i = 0; i < shelf.length; i += 1) {
    if (shelf[i].title === title) {
      shelf.splice(i, 1);
      i -= 1;
    }
  }
}

function listTitles(shelf) {
  var titlesList = '';

  for (let i = 0; i < shelf.length; i += 1) {
    titlesList += shelf[i].title;
    // if not last book on shelf
    if (i + 1 < shelf.length) {
      titlesList += ', ';
    }
  }

  return titlesList;
}

function searchShelf(shelf, title) {
  for (let i = 0; i < shelf.length; i += 1) {
    if (shelf[i].title === title) {
      return true;
    }
  }

  return false;
}

module.exports = {
  shelfBook,
  unshelfBook,
  listTitles,
  searchShelf
};
