const Animal = function(sound){
    this.sound = sound;
  };
  
  Animal.prototype.makeSound = function(){
    console.log(this.sound);
  };
  
  const Dog = function(name, breed){
    this.name = name;
    this.breed = breed;
  }
  
  Dog.prototype = new Animal('gaf-gaf');
  
  const Cat = function(name, breed){
    this.name = name;
    this.breed = breed;
  };
  
  Cat.prototype = new Animal('mieo-mieo');
  
  const dog = new Dog('Dog', 'Doggiz');
  const cat = new Cat('Cat', 'Kitty');
  
  dog.makeSound();
  cat.makeSound();
