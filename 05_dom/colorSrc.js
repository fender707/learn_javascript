  function Color(red,green,blue) {
    this.red = red;
    this.green = green;
    this.blue = blue;
  }

  Color.prototype = {
    toHex: function() {
     return "#" +
     this.red.toHex() + 
     this.green.toHex() + 
     this.blue.toHex();
    },

    gradient: function(othcolor,persent) {
      if(persent < 0) persent = 0;
      if(persent > 1) persent = 1;
      return new Color((Math.floor((othcolor.red - this.red) * persent) + this.red), 
             (Math.floor((othcolor.green - this.green)*persent) + this.green), 
             (Math.floor((othcolor.blue - this.blue) * persent) + this.blue));

    }

  }

  Number.prototype.toHex = function() {
    var hex = this.toString(16);
    if(hex.length == 1)
      hex = "0" +hex;
    return hex;
  }

  