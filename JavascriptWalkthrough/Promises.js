//3 states; fullfilled, rejected, or pending
//ES6

function DoFirst(){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            console.log(1);
            resolve();
        }, 1000);
    });
}
function DoSecond(){
    console.log(2);
}

//DoSecond is still passed as a callback but its not inside the first function. 
//This solves the nesting problems with callbacks
//catch allows us to handle errors for all functions that are chained.

DoFirst().then(DoSecond).catch(function(error){
    console.log(error);
});

//Psuedo Code Example of what it can be like
// function GetRecordsFromDatabase(connectinonString){
//     makeSqlConnection(connectinonString)
//         .then(tranformResultSet)
//         .then(sendResultToExternalAPI)
//         .then(function(){
//             if(reponse.Code === 200){
//                 log("result set sent successfully");
//             }else{
//                 log("result set failed to send");
//             }
//         })
//         .catch(error){
//             log(error);
//         }     