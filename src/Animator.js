//animator
class Animator{
	constructor(container , bird , uo ,lo ,score){
		this.uo = uo;
		this.lo = lo;
		this.container = container;
		this.bird = bird;
		this.score = score;
		this.g = 5;
		this.v = 10;
		this.t = 0;
		this.final;
		this.checkKeyDown = this.checkKeyDown.bind(this);
		this.count=0;
		this.randomflag = 0;
		this.scorenum;
		this.scorenumflag;

	}

	animate(){
		// let n = Math.floor(Math.random()*300)+400;
		// console.log(n);
		// this.uo.setPosition(-n,500);
		// this.lo.setPosition(-n,500);
		this.scorenum = 0;
		this.scorenumflag = 0;
		
		this.intervalId = setInterval(() =>{
			//console.log(this.intervalId)
			this.checkCollision();



			if(this.randomflag==0){
				let n = Math.floor(Math.random()*300)+400;
				this.uo.setPosition(-n,500);
				this.lo.setPosition(-n,500);
				this.randomflag=1;
			}

			if(this.uo.mock <= -58 && this.scorenumflag == 0){
				this.scorenum++;
				this.scorenumflag = 1;
				console.log(this.scorenum);
			}

			this.score.element.innerHTML = "Score:" + this.scorenum;


			this.uo.updatePosition(4);
			this.lo.updatePosition(4);
			if(this.t==0){
				this.final =  -this.g
			}
			else {
				//debugger;
				if(this.count <15){
					this.final = 2 * this.g;
					this.count++;
				}
				else{
					this.count = 0;
					this.t = 0;
				}
			}
			document.onkeydown = this.checkKeyDown;
			this.bird.updatePosition(this.final);

			if(this.uo.mock <= -150 ){
				this.randomflag =0;
				this.scorenumflag = 0;
/*				debugger;
				console.log(this.randomflag);
				debugger;*/
			}

		},1000/60)

	}

	checkKeyDown(e){
		if (e.keyCode == '83'){
			//console.log(this);
			// debugger;
			this.t = 1;
			//console.log(this.t);
			//debugger;

		}

	}

	checkCollision(){
		if(this.bird.a+50>=700){
			//alert('you ded nigga');
			clearInterval(this.intervalId);
		}
		if((this.uo.mock<=130 && this.uo.mock >= -50) && ((this.uo.mocktop+793) >= this.bird.a) ){
			//alert('you ded nigga');
			clearInterval(this.intervalId);
		}
		if((this.lo.mock<=130 && this.lo.mock >= -50) && ( (this.bird.a+50) >=this.lo.mocktop )){
			console.log(this.bird.a);
			console.log(this.lo.mocktop);
			//alert('you ded nigga');
			clearInterval(this.intervalId);
		}

	}


}

export default Animator;