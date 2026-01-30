// const message = "Hello world";
// message.toLowerCase();
// message();


// fucntion fn(x){
//     return x.flip();
// }
//declare a function fn that takes a parameter x
//returns the method flip on x



// RUN 
// npx tsc main.ts   <-- converts/makes to js file
// node main.js

const user = {
    name: "Daniel",
    age: 26,
}

//user.location;

function greet(person: string, date: Date) {
    console.log(`Hello ${person}, today is ${date.toDateString()}`);
}
greet("Maddison", new Date()); //calling the greet function passing in ~
