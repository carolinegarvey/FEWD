Element.prototype.nav = function(){
	var nav = this;
	var btn = document.createElement('div');
	var container = document.getElementById('container');


	this.toggleNav = function(){

	};

	this.createButton = function(){
		btn.classList.add('hamburger');
		btn.addEventListenter('mousedown',nav.toggleNav);
		container.insertBefore(btn);
	};

	this.init = function(){
		this.createButton();
	};

	this.init();


};
