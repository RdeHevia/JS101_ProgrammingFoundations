/*
INPUT: array of objects
OUTPUT: same array (mutated)
RULES: 
  * order by year of publication
  * same array (mutate the caller)
ALGORITHM:
  use sort:
    access the key-value pair 'published' for each sub object
*/

let books = [
  { title: 'One Hundred Years of Solitude', author: 'Gabriel Garcia Marquez', published: '1967' },
  { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', published: '1925' },
  { title: 'War and Peace', author: 'Leo Tolstoy', published: '1869' },
  { title: 'Ulysses', author: 'James Joyce', published: '1922' },
  { title: 'The Book of Kells', author: 'Multiple Authors', published: '800' },
];

let booksSorted = books.sort((objA, objB) => {
  return Number(objA.published) - Number(objB.published);
});
console.log(books);
console.log(booksSorted);