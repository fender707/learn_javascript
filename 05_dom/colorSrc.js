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

  }

  Number.prototype.toHex = function() {
    var hex = this.toString(16);
    if(hex.length == 1)
      hex = "0" +hex;
    return hex;
  }