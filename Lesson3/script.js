var clearBtn = document.getElementById("btn");
var formWrite = document.getElementById("inputs-form");

clearBtn.addEventListener("click", function(){
    clearBtn.style.display = 'none';
    formWrite.style.display = 'block';
})



function Person(age=15, name = 'default', height=180){
    this.age = age;
    this.name = name;
    this.height = height;
    this.getAgeName = function(){
        return 'Мне ' + age + ' и меня зовут ' + name;
    }
}

var vitaly = new Person(25, 'Vitaly', 185);

console.log(vitaly.getAgeName());

function Teach(age, name, height, counterGroup, time ){
    Person.call(this);
    var time = 15;
    this.counterGroup = counterGroup;
    this.getInfo = function(){
        return 'Количество групп ' + counterGroup + ' и ' + age + 'лет' + time;
    }
}

var prepod = new Teach(34, 'Peter', 190, 5, 45);

console.log(prepod.getInfo());

console.log(prepod);

console.log(prepod.time);