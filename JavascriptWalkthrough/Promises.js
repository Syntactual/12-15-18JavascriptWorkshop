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