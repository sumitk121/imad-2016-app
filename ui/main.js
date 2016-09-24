//counter code
var button= document.getElementbyId("counter");

button.onclick = function() {
    
    //create a request object 
    var request = new XMLHttpRequest();
    
    //capture the response and store it in a variable
    request.onreadystatechange= function(){
      if(request.readyState===XMLHttpRequest.DONE){
       //take some action  
       if(request.status===200){
           var counter= request.responseText;
           var span= document.getElementbyId("count");
           span.innerHTML= counter.toString();
       }
      }  
      //not done yet
    };
    //make the request
    
   request.open('GET','http://http://sumitk121.imad.hasura-app.io/counter',true);
   request.send(null);
    
    
};
