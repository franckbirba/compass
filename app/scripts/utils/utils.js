function formBuilder(obj){
  var keys = [];
  Object.keys(obj).forEach(function(key){
    keys.push(key);
  })
  return keys;
}
