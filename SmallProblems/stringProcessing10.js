/*
INPUT: (searchKey, text)
OUTPUT: text with words searched highlighted
RULES:
  * highlighted word: sed -> **SED**
ALGORITHM:
  separate the text into an array of words -> split
  iterate through array words. if word === searchKey -> **WORD**. -> use map
  join the array -> join
  return newText
*/


function searchWord(searchKey, text) {
  let highlightedTextArray = text.split(' ').map(word => {
    switch (word.toLowerCase()) {
      case searchKey.toLowerCase():
        return `**${word.toUpperCase()}**`;
      default:
        return word;
    }
  });
  return highlightedTextArray.join(' ');
}

const text = 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?';

console.log(searchWord('sed', text));      // 3