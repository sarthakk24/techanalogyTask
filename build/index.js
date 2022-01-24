"use strict";
class Car {
    // Constructor
    constructor(company, seats) {
        this.seats = seats;
        this.company = company;
    }
    // Function for returning number of seats
    noOfSeats() {
        return this.seats;
    }
    // Function for returning passenger seats
    passengerSeats() {
        const newSeats = +this.seats - 1;
        return newSeats;
    }
    // function to get a description of vehicle
    description() {
        return `In ${this.company} There is ${this.noOfSeats()} seats and ${this.passengerSeats()} passenger seats`;
    }
}
class Bus extends Car {
    constructor(company, seats) {
        super(company, seats);
    }
    //function Overide
    passengerSeats() {
        return +this.seats - 2;
    }
}
const audi = new Car("Audi", 4);
const volvo = new Bus("Volvo", 30);
console.log(audi.description());
console.log(volvo.description());
