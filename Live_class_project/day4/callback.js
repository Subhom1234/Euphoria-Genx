let sayhello = (name, anotherFn) => {
    console.log(`Hello, ${name}`);
    anotherFn(name)
}
let saybye = (name) => {
    console.log(`Bye, ${name}`);
}
let userName = "Subhom";
// sayhello(userName);
// saybye(userName);
sayhello(userName, saybye); // Callback function
