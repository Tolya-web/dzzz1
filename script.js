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
/*
var obj = {Canada: 10, Germany: 13, Spain: 22};
for (key in obj) {
	alert(obj[key]); 
}
*/
var obj = {
    Canada: 10,
    Germany: 13,
    Spain: 22,
}
function meanTemperature(obj){
    var sum = 0;
    var counter = 0;
    for (let key in obj) {
         sum += obj[key];
         counter ++;
    }
   alert (sum / counter);
}
meanTemperature(obj);
function maxTemperature(term){
    var max = 0;
    for(let key in term){
        if(term[key] > max){
            max = term[key];
        }
    }
    return max;
}
var obj1 = {
    Canada: 10,
    Germany: 13,
    Spain: 22,
}
alert (maxTemperature(obj1));