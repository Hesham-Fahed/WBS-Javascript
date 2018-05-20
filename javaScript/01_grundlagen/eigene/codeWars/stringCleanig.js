"use strict";
function stringClean(s){
    // var newString = "";
    // for( var i = 0; i < s.length; i++) {
    //   newString += s[i].replace(/[0-9]/g, "");
    // }
    return s.replace(/[0-9]/g, "");
  }

var test = "Dsa32 cdsc34232 csa!!! 1I 4Am cool!";
document.write(stringClean(test));
//   Test.assertEquals(stringClean("(E3at m2e2!!)"), "(Eat me!!)")
//   Test.assertEquals(stringClean("Dsa32 cdsc34232 csa!!! 1I 4Am cool!"), "Dsa cdsc csa!!! I Am cool!")