function createTitle(title) {
  return 'The ' + title;
}

function buildMainCharacter(name, age, pronouns) {
  var character = {
    name: name,
    age: age,
    pronouns: pronouns,
  };

  return character;
}

function saveReview(review, allReviews) {
  if (!allReviews.includes(review)) {
    allReviews.push(review);
  }
}

function calculatePageCount(title) {
  return 20 * title.length;
}

function writeBook(title, mainCharacter, genre) {
  var book = {
    title: title,
    mainCharacter: mainCharacter,
    pageCount: calculatePageCount(title),
    genre: genre,
  };

  return book;
}

function editBook(book) {
  book.pageCount = Math.floor(book.pageCount * 0.75);
}

module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  writeBook,
  editBook
};
