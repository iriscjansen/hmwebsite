// JavaScript Document

//Hamburgermenu

var body = document.querySelector('body');
var hamburger = document.querySelector('nav ul:nth-of-type(2) li button');
var menu = document.querySelector('nav ul:first-of-type')

function toonHamburger() {    
	document.body.classList.toggle('toonHamburger')
    
    window.addEventListener('click', function (e) {        
    	if (e.clientX > menu.offsetWidth) {            
    		document.body.classList.remove('toonHamburger')       
    		 }   
    	})
	}
	
hamburger.addEventListener('click', toonHamburger);