//Functions without callback
function DoFirst(){
    console.log(1);
}
function DoSecond(){
    console.log(2);
    
}

DoFirst();
DoSecond();

// //With a Timeout
// function DoFirstWithTimeout(){
//     setTimeout(function(){
//         console.log(1);
//     }, 1000);
// }

// DoFirstWithTimeout();
// DoSecond();