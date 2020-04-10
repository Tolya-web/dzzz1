function tstjs(){
    document.write("переход страницы!");
}

function buttonclick(button) {
document.body.style.backgroundColor = 'navy'
} 

function flexx(){
    var div = document.getElementsByClassName('flax');
    style = div[0].style;
    style.display = "flex";
    var div = document.getElementsByClassName('flexc');
    style = div[0].style;
    style.display = "flex";
    var div = document.getElementsByClassName('bt');
    style = div[0].style;
    style.display = "none";
    var div = document.getElementsByClassName('bt1');
    style = div[0].style;
    style.display = "none";
}



var obj = {Canada: 10, Germany: 13, Spain: 22};
for (key in obj) {
	alert(obj[key]); 
}

let num = '10,13,22';
let str = String(num);

let sum = 0;
for (let digit of str) {
    sum += +digit;
} 
console.log(sum);

