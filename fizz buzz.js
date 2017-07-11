function fizzBuzz(value) {
  value --;
  
  if (value % 3 === 0 && value % 5 === 0) {
    console.log("fizzbuzz");
  
  } else if (value % 3 === 0) {
    console.log("fizz");
    
  } else if (value % 5 === 0) {
      console.log("buzz");
  
  }else {
    console.log(value);
  
  } 
  
  if (value !== 0) {
     fizzBuzz(value);
  } 

} 
fizzBuzz(20);
