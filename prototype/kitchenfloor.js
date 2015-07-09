var KitchenFloor = function(mat, l, w){

	this.material = mat;
	this.length = l;
	this.width = w;

};

KitchenFloor.prototype.getSquareFootage = function(){
	this.squarefootage = this.length * this.width; 
	return this.squarefootage;
};

var floor = new KitchenFloor('hardwood', 30, 54);
console.log(floor.getSquareFootage());


var floor2 = new KitchenFloor('hardwood', 10, 10);
console.log(floor2.getSquareFootage());

