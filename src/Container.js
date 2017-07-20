class Container {
  
  constructor() {
  	this.element = document.createElement('div');
  	this.element.style.height = 700;
  	this.element.style.width = 500;
  	this.element.style.background = 'blue';
  	this.element.style.position = 'relative';
  	this.element.style.overflow = 'hidden';
  }

  append(element){
  	this.element.appendChild(element);
  }


}

export default Container;