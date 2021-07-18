console.log('Hello and welcome to My pyramid! choose the number of rows you want your pyramid to have!');
let pyr= document.getElementById('pyr');
let btn= document.getElementById('btn');
// let list= document.getElementById('list')
// let line= document.createElement('li');
//console.log(pyr)

  btn.addEventListener('click', function(){
    let numberOfRows= window.prompt('enter a number under 25');   //getting the user's input
  if (numberOfRows>25){
    console.log('No can do!');
    pyr.innerText='No can do!';
  }else{
      console.log('Your pyramid has '+numberOfRows+' rows:');
      pyr.innerHTML='Your pyramid has '+numberOfRows+' rows:'
      for (let i = 0; i <numberOfRows; i++) { //iteration for the each row
        let space = "";
        let row="";
        for(let j = 0; j <(numberOfRows-i-1); j++) {  // iteration for the number of spaces needed to center the hashtags
        space += "_";
        }
        for (let k = 1; k <= (2*i+1); k++) { // iteration the number of hashtags needed in each row
          row=row+"#";
        }
          // line.innerHTML='<li>'+space+row+'</li>';
          // document.body.appendChild(line)
          newP = document.createElement('p');
          newP.innerHTML ='<p>'+space+row+'</p>';
          document.body.appendChild(newP);
         
      console.log(space+row);
      row=""; //clearing the current row to start a new one
    }
  }
  })
  

