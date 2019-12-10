function insert(num){
document.querySelector('input').value = document.querySelector('input').value + num;
}

function equal(){
  let exp = document.querySelector('input').value;
  if(exp){
    document.querySelector('input').value = eval(exp);
  }
}

function clean(){
  document.querySelector('input').value = "";
  }

function back(){
  let back = document.querySelector('input').value;
  document.querySelector('input').value = back.substring(0,back.length-1);
}

function fact(){
  let x = document.querySelector('input').value;
  let q = 1;
  while(x){ 
    q *= x--;
}
document.querySelector('input').value = q;
}