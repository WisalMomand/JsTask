//Task No 1........................................................


// let Name="Wisal"
// let GreetingM=" Hello " + Name + "Wellcome To Js Journey"
// alert(GreetingM)

//Task No1 Complete.....................................................





//Task No 2.................................................................


// let number = prompt("Enter a number:");
//    if (number % 2 === 0) {
//         alert(number + " is an even number.");
//     } else  {
//         alert(number + " is an odd number.");
//     }


    //Task No2 Compelte.........................................................




    //Task No3....................................................................


    // let num=" ";
    // for(let n =10; n >=0; n--){
    //     num +=  n ;
    // }
    
    // alert(   num );


    //Task No3 Complete.............................................................




    //Task No4 ......................................................................


    // let num1 = + prompt("Enter First Number");
    // let opt = prompt("Enter operter");
    // let num2 = +prompt("Enter 2nd Number");
    // if(opt == "+"){
    //     console.log(num1 + num2);
    // }else if(opt == "-"){
    //     console.log(num1 - num2)
    // }
    // else if(opt == "*"){
    //     console.log(num1 * num2)
    // }
    // else if(opt == "%"){
    //     console.log(num1 % num2)
    // }


    //Task No 4 completed.............................................................


    // Task No 5 ...............................................................
    //  const myarr =["apple","Orange","mango","Banana"];
    //  console.log(myarr);
    //  myarr.pop(); // The pop() method removes the last element from an array:
    //  console.log(myarr);
    //  myarr.push("Pinneple");  //The push element add new element to array at last position....
    //  console.log(myarr);
    //  myarr.shift();     //It is similear to pop but it remove First Element from array......
    //  console.log(myarr);
    //  myarr.unshift("Watermealon");   // it is similer to push but it add new element at first position....
    //  console.log(myarr);


  // Task no 5 completed....................................
    
     

  //Task No6...........................
   
  

// // Questions and Answers
// let question1 = prompt("What is 2 + 2?");
// let question2 = prompt("What is the capital of France?");
// let question3 = prompt("Which planet is known as the Red Planet?");
// let question4 = prompt("KP stand for What")

// // Correct answers
// let correctAnswers = 0;

// // Checking answers with if...else statements
// if (question1 == "4") {
//     correctAnswers++;
// }

// if (question2.toLowerCase() === "paris") {
//     correctAnswers++;
// }

// if (question3.toLowerCase() === "mars") {
//     correctAnswers++;
// }
// if (question4.toLowerCase() ==="khyber pakhtukhwa"){
//     correctAnswers++;
// }

// // Displaying the result
// alert("You got " + correctAnswers + " out of  4 correct!");

// Task 6 Complete ..........................................................................

 // Task No 7 ................................................................


// Grade Calculator in JavaScript


let score = prompt("Enter your score (0-100):");


score = Number(score);


let grade;


if (score >= 90 && score <= 100) {
    grade = "A";
} else if (score >= 80 && score < 90) {
    grade = "B";
} else if (score >= 70 && score < 80) {
    grade = "C";
} else if (score >= 60 && score < 70) {
    grade = "D";
} else if (score >= 0 && score < 60) {
    grade = "F";
} else {
    grade = "Invalid score";
}


alert("Your grade is " + grade + ".");

   




