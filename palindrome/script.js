function checkPalindrome() {
    const inputString = document.getElementById("inputString").value;
    const cleanedString = inputString.toLowerCase().replace(/\s/g, ""); // Convert to lowercase and remove spaces
    const reversedString = cleanedString.split("").reverse().join("");
  
    if (cleanedString === reversedString) {
      document.getElementById("result").textContent = "It's a Palindrome!";
    } else {
      document.getElementById("result").textContent = "Not a Palindrome!";
    }
  }