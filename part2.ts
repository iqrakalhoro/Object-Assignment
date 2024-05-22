// Part #2
const car = {
    carName: "Civic",
    modelNumber: 2004,
    engine:{
        horsePower: 127,
    },
    getHorsePower() {
        return this.engine.horsePower
    }}
    console.log(car);
    console.log(car.getHorsePower);