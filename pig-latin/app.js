// This was the coding challenge from the onsite interview, plugged my computer into a large monitor
// and I explained what I was doing and why as I was coding.

// Assume input is always a string.
function pigLatin(str) {
  str = str.split(' ');
  // end of word is when there is a non-alphabetic character (also not apost.)
  for (var i=0, n=str.length; i<n; i++) {
    str[i] = translate(str[i]);
  }
  return str.join(' ');
}

// Accept single word as parameter, return translated word.
function translate(word) {
  var wordLength = word.length;

  // Check for hyphens in word
  var subs = word.split('-');
  if (subs.length > 1) {
    for (var i=0, n=subs.length; i<n; i++) {
      subs[i] = translate(subs[i]);
    }
    return subs.join('-');
  }

  // If word ends in 'way' don't modify.
  if (wordLength >= 3 && word.substring(wordLength-3, wordLength) === 'way') {
    return word;
  }

  // Check for punctuation, preserve location relative to end of word.
  var punctuation = [];
  for (var i=0, n=wordLength; i<n; i++) {
    if (word[i].match(/[^a-z0-9]/i)) {
      punctuation.push([ word[i], wordLength - i - 1 ]);
    }
  }
  word = word.replace(/[^a-z0-9]/ig, '');
  wordLength = word.length;

  // Check for capitalization, preserve location relative to start of word.
  var caps = [];
  for (var i=0, n=wordLength; i<n; i++) {
    if (word[i].match(/[A-Z]/)) {
      caps.push(i);
    }
  }
  word = word.toLowerCase();

  // If word starts with vowel
  if (word[0].match(/[aeiou]/i)) {
    word += 'way';
  }

  // If word starts with consonant (or non-alpha)
  else {
    word = word.substring(1, wordLength) + word[0] + 'ay';
  }

  wordLength = word.length;

  // Correct for capitalization.
  word = word.split('');
  for (var i=0, n=caps.length; i<n; i++) {
    word[i] = word[i].toUpperCase();
  }
  word = word.join('');

  // Correct for punctuation.
  for (var i=0, n=punctuation.length; i<n; i++) {
    var temp = punctuation[i];
    word = word.substring(0, wordLength - temp[1]) + temp[0] + word.substring(wordLength - temp[1], word.length);
  }

  return word;
}

var test = 'Hi t\'his is a te-st.';
