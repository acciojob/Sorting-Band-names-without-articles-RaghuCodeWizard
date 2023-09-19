// Suppose an array that contains a list of popular tourist spots
let touristSpots = ['The Virupaksha Temple', 'Victoria Memorial', 'Tajmahal'];

// Function to sort tourist spots without articles
function sortTouristSpots(names) {
  const articles = ['a', 'an', 'the'];
  return names.sort((a, b) => {
    const nameA = a.toLowerCase();
    const nameB = b.toLowerCase();
    for (const article of articles) {
      if (nameA.startsWith(article + ' ')) {
        nameA = nameA.slice(article.length + 1);
      }
      if (nameB.startsWith(article + ' ')) {
        nameB = nameB.slice(article.length + 1);
      }
    }
    return nameA.localeCompare(nameB);
  });
}

// Sort the tourist spots
const sortedTouristSpots = sortTouristSpots(touristSpots);

// Create an HTML string for the unordered list
const ulHTML = '<ul id="bands">' + sortedTouristSpots.map(name => `<li>${name}</li>`).join('') + '</ul>';

// Add the HTML string to the body
document.body.innerHTML = ulHTML;
