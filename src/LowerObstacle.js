//obstacle botttom
class LowerObstacle{
	constructor(){
		this.element = document.createElement('div');
		this.element.style.height = 793;
		this.element.style.width = 138;
		this.element.style.backgroundImage = "url('./images/obstaclebottom.png')";
		this.element.style.position = 'absolute';
		this.element.style.top = 600;
		this.element.style.left = 200;
		this.mock;
		this.mocktop;


	}
	setPosition( x , y ){
		this.element.style.top = x+800+280;
		this.mock = y;
		this.element.style.left = this.mock;
		this.mocktop = x+800+280;

	}

	updatePosition(a){
		this.mock -=a;
		this.element.style.left= this.mock;
	}
}




export default LowerObstacle;