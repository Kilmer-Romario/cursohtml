$(document).ready(function(){
  
    $(".open").click(function(){
       
         $(".modal").fadeIn();
         $("body").addClass("overflow");
       
     });
    
   
     $(".cerrar").click(function(){
       
         $(".modal").fadeOut(300);
         $("body").removeClass("overflow");      
 
     });
 
 });
  