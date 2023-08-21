
// function getgiftbutton() {
//     var name = document.getElementById("name").value;
//     var age = parseInt(document.getElementById("age").value);
//     var gender = document.getElementById("gender").value;
//     var gift;
  
//     if (gender === 'G') {
//       if (age < 5) {
//         gift = "Teddy bear";
//       } else if (age >= 5 && age <= 10) {
//         gift = "Doll and princess set";
//       } else if (age > 10 && age < 15) {
//         gift = "Crayons set";
//       } else {
//         gift = "Lots of good blessings for you, child";
//       }

    // } else if (gender === 'B') {
    //   if (age < 5) {
    //     gift = "Car toy";
    //   } else if (age >= 5 && age <= 10) {
    //     gift = "Bat and ball";
    //   } else if (age > 10 && age < 15) {
    //     gift = "Walkie talkie";
    //   } else {
    //     gift = "Lots of good blessings for you, child";
    //   }
    // }
  
  //   var resultDisplay = document.getElementById("result");
  //   resultDisplay.innerHTML = "<br/>"+"Hurray " +  name + ", you will get a " + gift + "....."+"<br> Enjoy the Christmas Eve!";
    
  // }
  ////////////
  function getgiftbutton() {
    var name = document.getElementById("name").value;
    var age = parseInt(document.getElementById("age").value);
    var gender = document.getElementById("gender").value;
    var gift = ' ';
  
    if (gender === 'G') {
        if (age < 5) {
            gift = "Teddy bear";
        } else if (age >= 5 && age <= 10) {
            gift = "Doll and princess set";
        } else if (age > 10 && age < 15) {
            gift = "Crayons set";
        } else {
            gift = "Lots of good blessings for you, child";
        }
    } else if (gender === 'B') {
        if (age < 5) {
            gift = "Car toy";
        } else if (age >= 5 && age <= 10) {
            gift = "Bat and ball";
        } else if (age > 10 && age < 15) {
            gift = "Walkie talkie";
        } else {
            gift = "Lots of good blessings for you, child";
        }
    }
  
    var resultDisplay = document.getElementById("result");
    resultDisplay.innerHTML = "<br/>" + "Hurray " + name + ", you will get a " + gift + "....." + "<br> Enjoy the Christmas Eve!";
    
}
