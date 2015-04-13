  function TemperatureWidget() {
    var self = this;
    this.widgetElement = document.getElementById('temperatureWidget');
    var fahrenheit = this.widgetElement.getElementsByTagName('input')[0];
    var celcius = this.widgetElement.getElementsByTagName('span')[0];
    var convertButton = this.widgetElement.getElementsByTagName('input')[1];
     
    function f2c(fahr) {
      return Math.round((fahr-32) * 5/9);
    }
    
    function convert() {
      var fahr = fahrenheit.value;
      var celci = f2c(fahr);
      celcius.innerHTML = celci;
      self.widgetElement.style.backgroundColor = self.colorFor(celci);
      
    }
    convertButton.onclick = convert;
    this.fahrenheit = fahrenheit;
    this.celcius = celcius;
    this.convertButton = convertButton;
    this.convert = convert;

  }


  TemperatureWidget.prototype.colorFor = function(celcius) {
    var freezing = new Color(208, 230, 254);
    var boiling = new Color(255, 50 ,65);
    var persent = celcius / 100;
    return freezing.gradient(boiling, persent).toHex();
  }