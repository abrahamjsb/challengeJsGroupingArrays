function chunkArrayInGroups(arr, size) {
  // Break it up.
  var newArr=[];
  var i = 0;
  var block;
  var f =  function (arr, size) {

   if(arr.length < size && arr.length !== 0) {

     return newArr.push(arr);

   } else if(arr.length >= size){

    block = arr.slice(i, size);
    newArr.push(block);
    arr.splice(i, size);
    f(arr, size);

   }

    return newArr;
 };

  return f(arr, size);
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
