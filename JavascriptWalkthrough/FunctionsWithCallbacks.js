//With callback
function DoFirstWithCallback(callback){
    setTimeout(function(){
        console.log(1);
        callback();
    }, 1000);
    
}
function DoSecond(){
    console.log(2);
}

DoFirstWithCallback(DoSecond);

//much more complex also known as callback hell
//This is not runnable code; this is just to show what it can turn into
// function GetRecordsFromDatabase(clientId){
//     makeSqlConnection(connectinonString, function(error, resultSet){
//         if(error){
//             log(error.message);
//         }else{
//             tranformResultSet(resultSet, function(error, transformedSet){
//                 if(error){
//                     log(error.message);
//                 }else{
//                     sendResultToExternalAPI(transformedSet, function(error, response){
//                         if(error){
//                             log(error.message);
//                         }else{
//                             if(reponse.Code === 200){
//                                 log("result set sent successfully");
//                             }else{
//                                 log("result set failed to send");
//                             }
//                         }
//                     });
//                 }
//             };
//         }
//     })
// }