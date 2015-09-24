/**
 * Created by Kelsie on 9/24/2015.
 */

var testarray = ["apple", "pear"];

function addlength (list1) {
  return _.map(list1,
      function(key) {
        return key + " " + key.length;
  });
}

console.log(addlength(testarray));

// Time: 19 min 58 sec