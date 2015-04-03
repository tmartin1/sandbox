// Translated text that is input into the textarea box and displays it under the 'Translated Text' section.
var translateText = function() {
  $('#posttranslated').html(pigLatin($('#pretranslated').val()));
};

// Assumes that the input is always a string. Returns translated string.
var pigLatin = function(str) {
  var paragraphs = str.split('\n');
  if (paragraphs.length > 1) {
    for (var i=0, n=paragraphs.length; i<n; i++) {
      paragraphs[i] = pigLatin(paragraphs[i]);
    }
    return paragraphs.join('<br>');
  } else {
    str = str.split(' ');
    for (var i=0, n=str.length; i<n; i++) {
      str[i] = translate(str[i]);
    }
    return str.join(' ');
  }
};

// Accept single word as parameter, return translated word.
var translate = function(word) {
  if (word === '') return word;
  // Check for and address hyphens in the word.
  var subs = word.split('-');
  if (subs.length > 1) {
    for (var i=0, n=subs.length; i<n; i++) {
      subs[i] = translate(subs[i]);
    }
    return subs.join('-');
  }

  // Remove punctuation and set to lower case.
  var result = word.replace(/[^a-z0-9]/ig, '').toLowerCase();
  var length = result.length;
  if (result.match(/[^a-z0-9]/gi)) return word;

  // If word ends in 'way' don't modify.
  // If word starts with vowel: move first letter to end and add 'way'.
  // If word starts with consonant (or non-alpha): move first letter to end and add 'ay'.
  if (result.substring(length-3, length) !== 'way') {
    if (result[0].match(/[aeiou]/i)) result += 'way';
    else result = result.substring(1, length) + result[0] + 'ay';
  }

  // Check for capitals and punctuation. Match style if needed.
  if (word.match(/[A-Z]/g)) result = matchCaps(word, result);
  if (word.match(/[^a-z0-9]/ig)) result = matchPunctuation(word, result);

  return result;
};

// Capitalizes the translated word to match the original word format (from front).
var matchCaps = function(word, result) {
  result = result.split('');
  for (var i=0, n=word.length; i<n; i++) {
    if (word[i].match(/[A-Z]/)) result[i] = result[i].toUpperCase();
  }
  return result.join('');
};

// Adds punctuation to match the original word format (from end).
var matchPunctuation = function(word, result) {
  var wLength = word.length - 1, rLength = result.length - 1;
  for (var i=wLength, r=rLength, shift=1; i>=0; i--, r--) {
    if (word[i].match(/[^a-z0-9]/i)) {
      result = result.substring(0, r+shift) + word[i] + result.substring(r+shift, rLength+shift);
      shift++;
    }
  }
  return result;
};
