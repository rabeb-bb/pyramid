console.log('Hello and welcome to My pyramid! choose the number or rows you want your pyramid to have!');
function pyramid() {
    var n;
    n= window.prompt('enter a number under 25');
    var row="";
    if (n>25){
      console.log('No can do!');
    }else{
        console.log('Your pyramid has '+n+' rows:');
    for (var i = 0; i <n; i++) {
    var space = "";
    for(let j = 0; j <(n-i-1); j++) {
        space += " ";
    }
        for (var k = 1; k <= (2*i+1); k++) {
            row=row+"#";
        }

        console.log(space+row);
        row="";
    }
}
}
