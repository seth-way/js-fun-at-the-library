function createTitle(title) {
  return 'The ' + title;
}

function buildMainCharacter(name, age, pronouns) {
  return {
    name,
    age,
    pronouns,
  };
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
  return {
    title,
    mainCharacter,
    genre,
    pageCount: calculatePageCount(title),
  };
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
  editBook,
};
