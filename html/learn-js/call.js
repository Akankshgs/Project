console.log("serve bread")
prepareonmlette(5000,serveomlette)
console.log("serve coffee")

function serveomlette(){
    console.log("serve omlette")
}

function prepareonmlette(duration,callback){
    console.log("omlette prepared")
    setTimeout(()=>{
        console.log("omlette serve")
        callback()
    },duration)
}