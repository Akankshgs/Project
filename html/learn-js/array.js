let numArray=[10,20,30]

console.log(numArray[2])
numArray[2]=99
console.log(numArray[2])

for(let i=0;i<=numArray.length;i++){
    console.log(numArray[i])

}

let arr=[11,22,33]
 console.log(arr.length)
 arr.push(44)
 console.log("before poping")

 for(let i=0;i<=arr.length;i++){
    console.log(arr[i])
 }

 arr.pop()
 console.log("after poping")

 for(let i=0;i<=arr.length;i++){
    console.log(arr[i]) 
 }

 console.log(arr.slice(0,3))