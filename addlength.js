/**
 * Created by Kelsie on 9/24/2015.
 */

var testarray = ["apple", "pear"];

function addlength (list1) {
  return _.keys(testarray),
      function(key) {
        return {key, 'length'};
  }
}

console.log(addlength(testarray));