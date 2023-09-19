
// This is Synchronous Method.
const func1=()=>{
    console.log("function1 is starting");
    func2();
    console.log("function1 is endinding");
}

const func2=()=>{
    console.log("function2 is starting");
}
func1();

//This is Asynchronous Method.
const fun1=()=>{
    console.log("function1 is starting");
    fun2();
    console.log("function1 is endinding");
}

const fun2=()=>{
   setTimeout(()=>{
    console.log("function2 is starting");
   },3000)
}
fun1();