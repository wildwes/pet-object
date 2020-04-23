const cuddles = {
    species: "hammster",

    height: 2,

    weight: 3,

    color: "caramel brown",

    Age: 1,

    favoriteToys: [],
}

play: function (toy) {
    if (toy === "hammster ball" || toy === "hammster wheel") {
        this.favoriteToys.push(toy)
    } else {
        window.alert("HIDE UNDER BEDDING!!!")

    }

}

cuddles.play("hammster ball");

// Create an object that represents your pet.

// Name property with a string value.
// Species property with a string value.
// Nicknames property with an array value. Array contains strings.
// Age property with an integer value
// Practice: Pet Sounds
// Now that you have an object that represents your pet, it's time to add some behavior. Pick three behaviors that your pet has and add three kys to your pet object. Each key's value should be a function that logs to the console or displays a window alert. Your choice.

// For example, if your pet is a dog, you could add a bark property, and the function would window.alert("WOOF!").

// Once you have define the properties, invoke each behavior. For example:

// angus.bark()
// angus.whine()
// angus.pant()
// Practice: My Pet "This"
// Give your pet a new key named favoriteToys whose value is an empty array.
// Now define another new key named play whose value is a function with a single parameter named toy.
// The function should determine if your pet liked the toy, and if s/he does, then it should be added to the favoriteToys array using the this keyword (see example above).
// Here's an example. If your pet is a cat, then he likely only likes furry toys, so you could put an if..then condition in the play() method that checks if the word "fuzzy" is in the argument value. If it is, it gets added to the array.

// Practice: Fast Food Ordering
// You need to write code to represent the process of ordering food at a fast food joint. Your restaurant is Bob's Burgers, and you have some starter code below. The object will have two behaviors that you must define.

// The object should have a property named orders that is an array. You will need to define this.
// Define a function to represent the behavior of placing an order. It should accept one argument named meal. This argument will be an object. There is starter code provided.
// Define a function to represent the behavior of getting all orders. It should return the order property (hint: this). You will need to define this.
// Each meal object should have three properties: sandwichType, fries (true or false), and drinkSize.
// const restaurant = {
//     name: "Bob's Burgers",
//     placeOrder: function () {
//     }
// }

// const chickenComboMeal = {

// }

// Place an order
// restaurant.placeOrder()

// Invoke the function to return the list of all orders

// Output all orders to the console using console.table()