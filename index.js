const len = document.querySelectorAll(".drum").length;
console.log(len)


   for(let i = 0;i< len;i++){
      document.querySelectorAll(".drum")[i].addEventListener("click", function(){
         const value = this.innerHTML;
         result(value);
         buttonAnimation(value);
 document.querySelectorAll(".drum")[i].addEventListener("keypress", function(event){
       result(event.key);
       buttonAnimation(event.key);
 });

     function result(key){    
         switch(key){
            case "w":
         var play1 = new Audio("sounds/crash.mp3")
         play1.play();
         break;
         case "a":
         var play2 = new Audio("sounds/kick-bass.mp3")
         play2.play();
         break;
         case "s":
         var play3 = new Audio("sounds/snare.mp3")
         play3.play();
         break;
         case "d":
         var play4 = new Audio("sounds/tom-1.mp3")
         play4.play();
         break;
         case "j":
         var play5 = new Audio("sounds/tom-2.mp3")
         play5.play();
         break;
         case "k":
         var play6 = new Audio("sounds/tom-3.mp3")
         play6.play();
         break;
         case "l":
         var play7 = new Audio("sounds/tom-4.mp3")
         play7.play();
         break;
         default:console.log("nothing");  
         }
      }
      })
      function buttonAnimation(currentKey){
     var rsultBtn = document.querySelector("." + currentKey);
         rsultBtn.classList.add("pressed");

         setTimeout(function(){
            rsultBtn.classList.remove("pressed");
         },200)
      }
     
   }



























