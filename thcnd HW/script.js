var list = document.querySelector('ul');
list.addEventListener('click', function (ev){
    if(ev.target.tagName === "SPAN"){
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
    var span = document.createElement('SPAN');
    var txt = document.createTextNode("X");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);
    
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