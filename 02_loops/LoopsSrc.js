  function repeat(symbols, count) {
    var result='';
    for(var i=0;i<count;i++)
      result += symbols;
    return result; 
  }

  function join(array,glue) {
    var result=""; 
    glue = glue || "";
    for(var i=0;i<array.length;i++){
      result += array[i];
      if(i!=array.length-1) 
        result += glue;
    }
    return result;
  }

  function sum(array) {
    var result=0;
    for(var i=0;i<array.length;i++) {
      result += array[i];
    }
    return result;
  }
 
  function paramify(hash) {
    var result="";
    var keys = Object.keys(hash).sort();
    console.log(keys);
    for(var index in keys){
      var key=keys[index];  
      result += key + "=" + hash[key] + "&";
    }
    if(result){
      result = result.substring(0,result.length-1);
     }
    return result;
   }
   
   