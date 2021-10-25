console.clear()

// object is a collection of different datatypes.it has name value pair.

var personInfo = {
  'firstName' : "Vamshi",
  'lastName' : "Medipally",
  age : 23 ,
}
console.log(personInfo.lastName)
console.log(personInfo)
console.log(typeof(personInfo))

//to create a object in the object
var honda = {
  name : "City",
  location : "Japan",
  engine : {
    capacity : "1500cc",
    bhp : 120
  },
    milage: {
    petrol : "18kmpl",
    disel : "25kmpl"
  },
}
console.log(honda.name)
console.log(honda.milage)
console.log(honda.engine)
console.log(honda.milage.petrol)

