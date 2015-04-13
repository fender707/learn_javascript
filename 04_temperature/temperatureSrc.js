  
  function f2c(value) {
    return (value-32)*5/9;
  }

  function c2f(value) {
    return value*9.0/5+32;
  }

  function Temperature(DegrFahr) {
    this.fahrenheit = function() {
      return DegrFahr;
    }

    this.celcius = function() {
      return (DegrFahr-32)*5/9;
    }

    this.setFahrenheit = function(fahren) {
      DegrFahr = fahren;
    }

    this.setCelcius = function(celsi) {
      DegrFahr = celsi * (9/5) + 32;
    }
  }