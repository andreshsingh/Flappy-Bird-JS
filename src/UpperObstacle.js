//upper obsdtacle

class UpperObstacle{
	constructor(){
		this.element = document.createElement('div');
		this.element.style.height = 793;
		this.element.style.width = 138;
		this.element.style.backgroundImage = "url('./images/obstacletop.png')";
		this.element.style.position = 'absolute';
		this.element.style.top = -500;
		this.element.style.left = 200;
		this.mock;
		this.mocktop;
	}

	setPosition( x , y ){
		this.element.style.top = x;
		this.mock = y;
		this.element.style.left = this.mock;
		this.mocktop=x;

	}

	updatePosition(a){
		this.mock -=a;
		this.element.style.left= this.mock;
	}
}

export default UpperObstacle;