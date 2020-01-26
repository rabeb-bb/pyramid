console.log('Hello and welcome to My pyramid! choose the number or rows you want your pyramid to have!');
function pyramid() {
  var numberOfRows= window.prompt('enter a number under 25');   //getting the user's input
  if (numberOfRows>25){
    console.log('No can do!');
  }else{
      console.log('Your pyramid has '+numberOfRows+' rows:');
      for (var i = 0; i <numberOfRows; i++) { //iteration for the each row
        var space = "";
        var row="";
        for(let j = 0; j <(numberOfRows-i-1); j++) {  // iteration for the number of spaces needed to center the hashtags
        space += " ";
        }
        for (var k = 1; k <= (2*i+1); k++) { // iteration the number of hashtags needed in each row
          row=row+"#";
        }

      console.log(space+row);
      row=""; //clearing the current row to start a new one
    }
  }
}
