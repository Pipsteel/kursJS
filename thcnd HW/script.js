var li = document.createElement('li');
var inputValue = document.getElementById('toDoEl').value;

var list = document.querySelector('ul');
list.addEventListener('click', function (ev){
    if(ev.target.tagName === "H2"){
        var div = ev.target.parentNode;
        div.remove();
        
    }
}, false);

function newElement() {
    var t = document.createTextNode(inputValue);
    console.log(inputValue)
    var del = document.createElement('H2');
    var txt = document.createTextNode("X");
    var list = document.getElementById('list');



    li.appendChild(t);
    if(inputValue === "") {
        alert("input smth");
    }else{
        list.innerHTML += t;
        document.getElementById('list').appendChild(li);
    }
    //hfhfgh
    document.getElementById('toDoEl').value = "";


    del.className = "close";
    del.appendChild(txt);
    li.appendChild(del);
    


    // var aim_time = document.getElementById('time').value;
    // var tm = new Date(aim_time).getTime();
    // var curent_time = new Date().getTime();
    // var perem = (tm - curent_time)/1000;
    // if(perem < 0 ){
    //     alert('YOU LOOSE');
    // }else{
    //     var days = (perem / 86400);
    //     var hours = pad(parseInt(perem / 3600));
    //     var minutes = pad(parseInt(perem / 60));
    //     var seconds = pad(parseInt(perem % 60));
    //    alert(days);
    // }
    // var ttt = document.createElement('span');
    // ttt.innerHTML = (days );
    // li.appendChild(ttt);
}



var todos;

function toLocal(){
    todos = list.innerHTML;
    localStorage.setItem('todos', todos);
}

if(localStorage.getItem('todos')){
    list.innerHTML = localStorage.getItem('todos');
}
function saveElement(){
    toLocal();
}



///////////////////////////////////////////



