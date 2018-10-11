document.addEventListener("DOMContentLoaded",function(){
let var1 = document.getElementById('name1');
let var2 = document.getElementById('name2');
let name3 = document.getElementById('name3');
let name4 = document.getElementById('name4');
const joker=document.getElementById('joker');


var1.addEventListener('keyup',function(){
name3.value=var1.value;
});

joker.addEventListener('click',function(){
  document.getElementsByClassName('contB').style.backgroundColor="purple";
}
  )

});