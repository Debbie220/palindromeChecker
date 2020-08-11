/**
 * The palindrome functions takes a string input
 * and checks if the string is is spelled the 
 * same way both forward and backward, ignoring 
 * punctuation, case and spacing.
 * @param  {[string]} str [a string input]
 * 
 */
function palindrome(str) {
    str = str.toLowerCase(); //so no issues in case matching
    var empty=""; //variable to store string without special characters
  
    //removes all special characters in the string
    for(var char=0; char<str.length; char++){
        if(str[char].match(/[a-z]|[A-Z]|[0-9]/)){
          empty+=str[char];
        }
    }
  
    var start=0;
    var end=empty.length-1;
  
    //checks if string is a palindrome
    while(start!=end && start<end){
      if(empty[start]!=empty[end]){
        return false;
      }
      start++;
      end--;
    }
  
    return true;
  }
  
  /**
   * runpalindrome basically gets the string that the user typed in and 
   * displays information based on if the string is a palindrome or not
   * 
   */

  function runpalindrome(){
    var sentence = document.getElementById("sentence").value;
    document.getElementById("sentence").value ='';
    var table = document.getElementById("tbody");
    if (palindrome(sentence) == true){
        table.innerHTML += "<tr> <th scope='row'></th> <td>"+sentence+"</td><td>Yes</td></tr>";
    }
    else{
        table.innerHTML += "<tr> <th scope='row'></th> <td>"+sentence+"</td><td>No</td></tr>";
    }
  }


  
  