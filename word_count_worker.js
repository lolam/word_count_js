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

  self.postMessage(wc);
  
}, false);

