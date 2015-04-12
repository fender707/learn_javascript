  
   function Calculator() {
     this.stack = [0];
   };

   Calculator.prototype = {
     value: function() {
       return this.stack[this.stack.length - 1];
     }




   }