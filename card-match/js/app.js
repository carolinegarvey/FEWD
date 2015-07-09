var gridSize = {x: 6, y: 3};
var cellSize = {x: 150, y: 200};

this.init = function (){
	for (var i=0; i < gridSize.x; i++){
		for (var j=0; j< gridSize.y; j++){
			this.createCard(i, j);
		}

	}
};

this.createCard = function (i, j){
	var x = (i - gridSize.x/2 + 0.5) * cellSize.x;
	var y = (j - gridSize.y/2 + 0.5) * cellSize.y;
	var sprite = new Sprite('images/bicycle-back.png');
	var card = new SceneObject(sprite, 0, x, y);
	this.addSceneObject(card);
};




var Card = function(card){
	this.model = card;
};

var View = function(elem,parent,className) {
	var self = this;
	this.element = document.createElement(elem);
	this.element.classList.add(className);
	parent.appendChild(self.element);
};


View.prototype = {
	setContent : function(content) {
		this.element.innerHTML = content;
	}

};

var Controller = function(){
	this.model = [];
};


Controller.prototype = {
	createView : function (){
		this.model.forEach(function(card){
			var v = new View('li',document.body,'card');
			v.setContent('<h3>'+user.model.name+'</h3><h5>'+user.model.age+'</h5><h5>'+user.model.occupation+'</h5>');
		});


	},
	fetchCards : function(){
		var self = this;
		var xhr = new XMLHttpRequest();
		xhr.open('GET','./model/users.json');
		xhr.setRequestHeader('Content-Type','application/json');
		xhr.onreadystatechange =  function(){
			if (xhr.readyState === 4){
				//parse our JSON
				console.log(xhr.responseText);
				var model = JSON.parse(xhr.responseText);
				model.users.forEach(function(user){
					self.model.push(new User(user));
				});
				self.createView();		
			}

		};
		xhr.send(); 
	}

};

var appController = new Controller();
appController.fetchCards();