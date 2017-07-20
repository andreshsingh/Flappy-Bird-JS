import Container from './Container'
import Bird from './Bird'
import UpperObstacle from './UpperObstacle'
import LowerObstacle from './LowerObstacle'
import Animator from './Animator'
import Score from './Score'
let container = new Container();
let bird = new Bird();
let uo = new UpperObstacle();
let lo = new LowerObstacle();
let score = new Score();
// uo.setPosition(-500,100);
// lo.setPosition(-500,100);


class Index{
  constructor(){
    this.element = document.getElementById('body');
    this.element.style.marginLeft = 300;
    this.element.appendChild(score.element);
    this.element.appendChild(container.element);
    
    
    container.append(uo.element);
    container.append(lo.element);
    container.append(bird.element);

    let animator =  new Animator(container , bird , uo ,lo , score);
    animator.animate();

    }
}

 let index = new Index();