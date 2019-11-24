const buttn = () => {
    document.location = "http://google.com"
}

frstflag = false
secflag = false

document.getElementById("thecond").addEventListener("click", () => {
    frstflag =!frstflag
    frstflag ?
        document.getElementById("butts").className = "try" :
        document.getElementById("butts").className = "buttons" 
})

document.getElementById("thrd").addEventListener("click", () => {
    secflag =!secflag
    secflag ?
        document.getElementById("butts").className = "flex" :
        document.getElementById("butts").className = "buttons" 
})

var term = {
    Canada: 10,
    Germany: 23,
    Spain: 22
}
var sum = 0
var times = 0
for (let key in term){
    sum += term[key]
    times ++
}
alert(sum/times)

 var max = 0
    for (let key in term){
        max >= term[key]?
        null:
        max = term[key];
    }
alert(max)