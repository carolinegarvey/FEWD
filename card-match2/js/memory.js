App = function(){
	this.load = function(){

	};

	this.init = function(){
		var sprite = new Sprite('images/bicycle-back.jpg')
		var card = new SceneObject(sprite);
		wade.addSceneObject(card);
	};

};