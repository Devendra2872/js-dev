const promiseOne = new Promise(function(resolve, reject){
    setTimeout(function(){
     console.log('async task is complete');
     resolve()
    }, 1000)
})

promiseOne.then(function(){
    console.log("promise consumed");
})

new Promise (function(resolve, reject){
    setTimeout(function(){
        console.log('my second sync');
        resolve()
    }, 1000)
}) .then(function(){
    console.log('sync ');
})