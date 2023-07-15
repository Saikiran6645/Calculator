let  string="";
let count=0;
let display=document.getElementById('display1');
let buttons=document.querySelectorAll('button');
Array.from(buttons).forEach((button)=>{
button.addEventListener('click',(e)=>{
    if(e.target.innerHTML== '='){
        string=eval(string);
   
        display.value=string;
         let ans=parseInt(string);
 
    }
    else if(e.target.innerHTML== 'AC'){
        string="";
        display.value=string;
    }
    else if(e.target.innerHTML=='del'){
     
        display.value= display.value.slice(0, -1);
        string=display.value;
    }
    else{
        try{
        console.log(e.target)
        string=string+e.target.innerHTML;
        display.value=string;
        }
        catch (error) {
            display1.value = "Error";
            string="";
          }
    }
})
})