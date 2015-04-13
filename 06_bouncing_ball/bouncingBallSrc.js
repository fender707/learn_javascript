  
  function BouncingBall(arena){

   this.div = document.createElement('div');
   arena.appendChild(this.div);
   this.height = 10;
    this.width = 10;
    this.x=0;
    this.y=0;    
    this.color = "#FF0000";

    this.div.style.height = this.height.toString() + "px";
    this.div.style.width = this.width.toString() + "px";
    this.div.style.left = this.x.toString() + "px";
    this.div.style.top = this.y.toString() + "px";
    this.div.style.backgroundColor = this.color;
    
}