function formBuilder(obj){
  var keys = [];
  Object.keys(obj).forEach(function(key){
    if (typeof obj[key] !== 'function')
      keys.push(key);
  })
  return keys;
}
