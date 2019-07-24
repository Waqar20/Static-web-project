// JavaScript Document
  

function get1(){
var user=document.getElementById('registervalue1').value;
var password=document.getElementById('registervalue2').value;


if(user=="admin" && password=="admin" ){
document.getElementById('button').disabled=false;
}

else{
	
	document.getElementById('button').disabled=true;
	localStorage.setItem('registervalue1',user);	
} 



}






