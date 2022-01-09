// need to make a event lister and another if statment in the operator for the symbles
document.addEventListener("click",number);
document.addEventListener("click",operator);
const calValues={
  num1:null,
  num2:null,
  operater:null


}
//it is only dedecting the two number as value 1 and 2 right away
//need to see if we can  expanded to dedecting the two numbers as in the same num1 value.
//is there a different way to get the value of the number from the button will have to ask the teach for help if we can exmanded the basic functionally of this app


// I want it so that you click on the number you want to calualte and after you click on the operater it displays the amount you entered
//as soon as you click on it it shows the element i need it not to do that as and just happends when you just click sumbit




function operator(theEvent){
  if(theEvent.target.id.startsWith("operater")){
    const [,clickedOperater]=theEvent.target.id.split("__")
    if(!calValues.operater){
      calValues.operater=clickedOperater
      document.getElementById("input").value+=clickedOperater
      
    }

  }

}



function clearOut(){
    document.getElementById("input").value=""
    calValues.num1=null
    calValues.num2=null
    calValues.operater=null
    
    document.getElementById("answer").innerHTML=""

}

//get data from both numbers and display them in the conole.log
//basic: add both numbers up and display the result in the console.log
let value;
function sumbit(){
  const convert1=parseInt(calValues.num1)
  
 

   const convert2=parseInt(calValues.num2)



  if(calValues.operater==="+"){
    

    value=convert1+convert2
 
    document.getElementById("answer").innerHTML=value
    

  }
  if(calValues.operater==="-"){
    
    
    value=convert1-convert2;
    document.getElementById("answer").innerHTML=value
    
    
  }
  

if(calValues.operater==="*"){
  

 value=convert1*convert2
 document.getElementById("answer").innerHTML=value
  

}
if(calValues.operater==="÷"){
  

  value=convert1/convert2
  document.getElementById("answer").innerHTML=value
  

}


console.log(value)

}

 function number(event){
if(event.target.id.startsWith("number")){
const [,clickedNumber]= event.target.id.split("--")
if(!calValues.num1){
calValues.num1=clickedNumber
document.getElementById("input").value+=clickedNumber
}
else{
  calValues.num2=clickedNumber
  document.getElementById("input").value+=clickedNumber
  
}
}

//console.log(clickedNumber)
  
}
