function receivesAFunction(callback){
    callback();
}


function returnsANamedFunction(){
    return function namedFn(){
        console.log("This is a named function")
    }
}
returnsANamedFunction()(); 


function returnsAnAnonymousFunction(){
    return function(){
        console.log("This is the return of an anonymous function")
    }
}
returnsAnAnonymousFunction()();