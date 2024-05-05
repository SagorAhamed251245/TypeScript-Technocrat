{
  // op - class

  class Animal {
    public name: string;
    public species: string;
    public sound: string;

    constructor(name: string, species: string, sound: string) {
      this.name = name;
      this.species = species;
      this.sound = sound;
    }
    makeSound() {
      console.log(`the ${this.name}  vai ${this.species} says ${this.sound}`);
    }
  }
  const dog = new Animal("german shapred", "dog", "gaw gaw");
  const cat = new Animal("pertian", "cat", "miaw miaw");
  //
  /*  console.log(dog);
  dog.makeSound();
  console.log(cat);
  cat.makeSound(); */

  //   method 2

  class Animal2 {
    // public name: string;
    // public species: string;
    // public sound: string;

    constructor(
      public name: string,
      public species: string,
      public sound: string
    ) {
      //   this.name = name;
      //   this.species = species;
      //   this.sound = sound;
    }
    makeSound() {
      console.log(`the ${this.name}  vai ${this.species} says ${this.sound}`);
    }
  }
  const dog2 = new Animal2("german shapred", "dog", "gaw gaw");
  const cat2 = new Animal2("pertian", "cat", "miaw miaw");
  //
  console.log(dog2);
  dog2.makeSound();
  console.log(cat2);
  cat2.makeSound();
}
