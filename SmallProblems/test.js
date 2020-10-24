function removePunctuation(string,punctuation) {
  let punctuationRegex = new RegExp(`[${punctuation}]`,'g');
  console.log(punctuationRegex);
  return string.replace(punctuationRegex,'');
}

console.log(removePunctuation('dasda.,asda,dasd.sad...,','.,'));