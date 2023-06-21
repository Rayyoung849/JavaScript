function countBs(string) {
    return countChar(string, "B");
  }
  
  function countChar(string, char) {
    let count = 0;
    for (let i = 0; i < string.length; i++) {
      if (string.charAt(i) === char) {
        count++;
      }
    }
    return count;
  }
  
  // Testing countBs
  console.log(countBs("BBC"));     // Output: 2
  console.log(countBs("ABCBDB"));  // Output: 0
  console.log(countBs("BEBB"));    // Output: 3
  
  // Testing countChar
  console.log(countChar("hello", "l"));        // Output: 2
  console.log(countChar("OpenAI", "A"));       // Output: 1
  console.log(countChar("JavaScript", "z"));  // Output: 0