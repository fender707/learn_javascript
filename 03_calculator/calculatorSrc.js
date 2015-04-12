  
   function Calculator() {
     this.stack = [0];
   };

   Calculator.prototype = {
     value: function() {
       return this.stack[this.stack.length - 1];
     },

     add: function(x) {
       this.push(x);
       this.plus();
     },
     plus: function() {
       this.stack.push(this.pop() + this.pop()); 
     },
    
     push: function(value) {
       this.stack.push(value)
     },

     pop: function() {
       var number = this.stack.pop();
       return number;

     },
   
     subtract: function(x) {
       this.push(x);
       this.minus();
     },   
     
     minus: function() {
       var last = this.pop();
       var first = this.pop();
       this.stack.push(first - last);
     }
   };