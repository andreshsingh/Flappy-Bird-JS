//bird
class Bird{

 	constructor() {
		this.element = document.createElement('div');
		this.element.style.height = 50;
		this.element.style.width = 60;
		this.element.style.backgroundImage = "url('./images/bird.png')";
		this.element.style.position = 'absolute';
		this.element.style.top = 300;
		this.element.style.left = 80;
		this.a = 300;
	}

	updatePosition(x){
		this.a -=x;
		//console.log(this.a);
		this.element.style.top = this.a; 

	}
}


export default Bird;