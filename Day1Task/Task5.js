userLogin(register);
userLogin(login);

function register(){

    console.log("you register already ");

}
function login(){

    console.log("you must login");
}
function  userLogin(doNext){

    doNext();
}