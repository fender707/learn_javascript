  function TemperatureWidget() {
    this.widgetElement = document.getElementById('temperatureWidget');
    var fahrenheit = this.widgetElement.getElementsByTagName('input')[0];
    var celcius = this.widgetElement.getElementsByTagName('span')[0];
    var convertButton = this.widgetElement.getElementsByTagName('input')[1];
    this.fahrenheit = fahrenheit;
    this.celcius = celcius;
    this.convertButton = convertButton;
    
  }