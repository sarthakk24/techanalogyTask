class Car {
  company: String;
  seats: Number;

  // Constructor
  constructor(company: String, seats: Number) {
    this.seats = seats;
    this.company = company;
  }

  // Function for returning number of seats
  noOfSeats(): Number {
    return this.seats;
  }

  // Function for returning passenger seats
  passengerSeats(): Number {
    const newSeats: Number = +this.seats - 1;
    return newSeats;
  }

  // function to get a description of vehicle
  description(): String {
    return `In ${
      this.company
    } There is ${this.noOfSeats()} seats and ${this.passengerSeats()} passenger seats`;
  }
}

class Bus extends Car {
  constructor(company: String, seats: Number) {
    super(company, seats);
  }

  //function Overide
  passengerSeats(): Number {
    return +this.seats - 2;
  }
}

const audi = new Car("Audi", 4);
const volvo = new Bus("Volvo", 30);

console.log(audi.description());
console.log(volvo.description());
