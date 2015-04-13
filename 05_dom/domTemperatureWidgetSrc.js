  function TemperatureWidget() {
    this.widgetElement = document.getElementById('temperatureWidget');
    var fahrenheit = this.widgetElement.getElementsByTagName('input')[0];
    var celcius = this.widgetElement.getElementsByTagName('span')[0];
    var convertButton = this.widgetElement.getElementsByTagName('input')[1];
     
    function f2c(fahr) {
      return (fahr-32) * 5/9;
    }

    function convert() {
      var fahr = fahrenheit.value;
      var celci = f2c(fahr);
      celcius.innerHTML = celci;
      
    }

    this.fahrenheit = fahrenheit;
    this.celcius = celcius;
    this.convertButton = convertButton;
    this.convert = convert;
  }