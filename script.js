class Vehicle {
    constructor(make,model,year){
        this.make = make;
        this.model = model;
        this.year = year;
}
 honk() {
    return "Beep";
 }
 toString (){

    return `${this.make}, ${this.model}, ${this.year}`;
 }

}

class Cars extends Vehicle {
    constructor(make,model,year){
        super(make,model,year);
        this.numWheels = 4;
    }
}

class Motorcycle extends Vehicle {
constructor(make,model,year){
    super(make,model,year);
    this.numWheels = 2;
    };
    revEngine(){
        return "VROOM!!!!!"
    }
};

class Garage {
    constructor(capacity) {
        this.vehicles = [];
        this.capacity = capacity;
    }
add(newVehicle) {
    if (!(newVehicle instanceof Vehicle)) {
      return "Only vehicles are allowed in here!";
    }
    if (this.vehicles.length >= this.capacity) {
      return "Sorry, we're full.";
    }
    this.vehicles.push(newVehicle);
    return "Vehicle added!";
  }
}

//const car1 = new Cars('Toyota', 'Camry', 2022);
//const motorcycle1 = new Motorcycle('Harley', 'Davidson', 2020);

// Create a garage with a capacity of 10
//const myGarage = new Garage(10);

// Add vehicles to the garage
//console.log(myGarage.add(car1)); // Vehicle added!
//console.log(myGarage.add(motorcycle1)); // Vehicle added!
