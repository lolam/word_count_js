//counts words withn a given text
self.addEventListener('message', function(e) {
  var txt = e.data;
    
  // Removes all 3 types of line breaks with spaces
  txt = txt.replace(/(\r\n|\n|\r)/gm," "); 
  // Splts the text to words
  words = txt.split(" ");

  //Create a word count dictionary
  wc = Object();

  for (i = 0; i < words.length; i ++){
    var word = words[i];
    
    if (word != ""){
      // If word alreay exists, increment the counter
      if (word in wc){
        wc[word] += 1;
      }else{ // otherwise set the counter to 1
        wc[word] = 1;
      }
    }
  }

  
  // get object keys = unique words
  unique_words = Object.keys(wc);
  
  var tbl = "<table>";
  tbl += '<tr><th>Word</th><th>Count</th></tr>';

  //unique_words.sort(); 
  for (i = 0; i < unique_words.length; i ++){
    var word = unique_words[i];
    //get the number of occurrences for the word
    var count = wc[word];
    // create a row with a a column for word and a column for counter
    tbl += '<tr><td>' + word +' </td><td>' + count + '</td></tr>';
  }

  tbl += "</table>";

  self.postMessage(tbl);
  
}, false);

