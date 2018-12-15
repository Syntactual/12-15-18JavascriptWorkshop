//Still promises just es7 syntax
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
//async version
async function Run(){
    try{
        await DoFirst();
        DoSecond();
    }catch(error){
        console.log(error);
    }
    
}
Run();

//promise version
function RunNoAsync(){
    DoFirst().then(DoSecond).catch(function(error){
        console.log(error);
    });
}
RunNoAsync();

//Can use either as long as the function being awaited or chained with then returns a Promise



//Yet another example of how this can look 
// async function GetRecordsFromDatabase(connectinonString){
//     try{
//         let results = await makeSqlConnection(connectinonString);
//         let transformedResults = await tranformResultSet(results);
//         let response = await sendResultToExternalAPI(tranformResultSet);
//         if(reponse.Code === 200){
//             log("result set sent successfully");
//         }else{
//             log("result set failed to send");
//         }
//     }catch(error){
//         log(error);
//     }
    