console.log('Hello and welcome to My pyramid! choose the number or rows you want your pyramid to have!');
function pyramid() {
  var numberOfRows= window.prompt('enter a number under 25');   //getting the user's input
  var row="";
  if (numberOfRows>25){
    console.log('No can do!');
  }else{
      console.log('Your pyramid has '+numberOfRows+' rows:');
      for (var i = 0; i <numberOfRows; i++) {
        var space = "";
        for(let j = 0; j <(numberOfRows-i-1); j++) {
        space += " ";
        }
        for (var k = 1; k <= (2*i+1); k++) {
          row=row+"#";
        }

      console.log(space+row);
      row=""; //clearing the current row to start a new one
    }
  }
}
