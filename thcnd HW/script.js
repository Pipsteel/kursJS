var list = document.querySelector('ul');
list.addEventListener('click', function (ev){
    if(ev.target.tagName === "H2"){
        var div = ev.target.parentNode;
        div.remove();
        
    }
}, false);

function newElement() {
    var li = document.createElement('li');
    var inputValue = document.getElementById('toDoEl').value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if(inputValue == "") {
        alert("input smth");
    }else{
        document.getElementById('list').appendChild(li);
    }
    document.getElementById('toDoEl').value = "";
    var del = document.createElement('H2');
    var txt = document.createTextNode("X");
    del.className = "close";
    del.appendChild(txt);
    li.appendChild(del);

    let time = document.createElement('span');
    time.innerHTML = timer(info.time);
    li.appendChild(time)
    /////////////////
    function timer(){
    var times = document.getElementById('time').value;
    var tm = new Date(times).getTime();
    var curent_time = new Date().getTime();
    var perem = (tm - curent_time)/1000; 
    if (seconds_left < 0) {
        return `You are Fall!!!`
    } else {
        days = parseInt(perem / 86400);
        seconds_left = sperem % 86400;
        hours = pad(parseInt(perem / 3600));
        minutes = pad(parseInt(perem / 60));
        seconds = pad(parseInt(perem % 60));
        return `${days} days ${hours} h ${minutes} m ${seconds} s left`
    }
    }
    timer();
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



