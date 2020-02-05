function fun () { 
    var person = prompt("pleas enter your email");
var result;

if (person != null) {
result='hello welcom to our university.'

}
return result;
}
 
 document.write('<h3>'+ fun() +'</h3>');
 function good (){
     var person = prompt("are you studing here?(yes/no)");
     while(person.toLocaleLowerCase() !=='yes' && person !=='no'){
     var person = prompt("are you studing here?(yes/no)");
    
     }
     var okay =prompt("are you studing here?(yes/no)");
     console.log(okay);
     var result="";
     for(var i=0; i<okay; i++)
     if(person === 'yes')
     { result = result + '<img src="img/youjourney-small.png">'; 
    }   else if (person === 'no')
    { result = result + '<img src="img/maxresdefault.jpg">';
    }
if (person !=null) { 
  result='so '  
  return result;
 }
}

 document.write('<h3>' +good()+ '<h3>' );
 function add(){ 
     var person = prompt("pleas enter your qustion?");
     var result;
if (person != null) {
    result='thank you we will answer your questoin as soon as we can.'
}
 return result;

}
 document.write('<h3>' +add()+'<h3>');
 
 

 

