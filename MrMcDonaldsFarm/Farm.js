"use strict";
// namespace Farm {
//     class Animal {
//         type: string;
//         name: string;
//         sound: string;
//         food: string;
//         consumption: number;
//         constructor(_type: string, _name: string, _sound: string, _food: string, _consumption: number) {
//             this.type = _type;
//             this.name = _name;
//             this.sound = _sound;
//             this.food = _food;
//             this.consumption = _consumption;
//         }
//         sing(): string {
//             return `${this.name}
//             Old MacDonald had a farm, E-I-E-I-O!
//             And on that farm he had a ${this.type}, E-I-E-I-O!
//             With a ${this.sound} ${this.sound} here and a ${this.sound} ${this.sound} there,
//             Here a ${this.sound}, there a ${this.sound}, everywhere a ${this.sound} ${this.sound}`
//         }
//         // Helper function to find food silo
//         findFoodSilo(_silos: Food[]): Food | undefined {
//             for (let i: number = 0; i < _silos.length; i++) {
//                 if (_silos[i].foodType === this.food) {
//                     return _silos[i];
//                 }
//             }
//             return undefined; // Return undefined if not found
//         }
//         eat(_silos: Food[]): void {
//             // Use the helper function to find the corresponding food silo
//             const foodSilo: Food | undefined = this.findFoodSilo(_silos);
//             if (foodSilo && foodSilo.foodStorage >= this.consumption) {
//                 // Reduce the food in the silo by the animal's consumption
//                 foodSilo.foodStorage -= this.consumption;
//                 console.log(`${this.name} ate ${this.consumption} units of ${this.food}. Remaining: ${foodSilo.foodStorage}`);
//                 if (foodSilo.foodStorage < 10) {
//                     console.log(`Running low on ${this.food} for ${this.type}s! MacDonald needs to restock soon.`);
//                 }
//             }
//         }
//     }
//     class Food {
//         foodType: string;
//         foodStorage: number;
//         constructor(_foodType: string, _foodStorage: number) {
//             this.foodType = _foodType;
//             this.foodStorage = _foodStorage
//         }
//         restock(_silos: Food[]): void {
//             // Find the matching silo for the food type and restock if storage is low
//             for (let i: number = 0; i < _silos.length; i++) {
//                 if (_silos[i].foodType === this.foodType && _silos[i].foodStorage < 10) {
//                     _silos[i].foodStorage += 50;
//                     console.log(`MacDonald bought 50 units of ${this.foodType}. New storage: ${_silos[i].foodStorage}`);
//                 }
//             }
//         }
//     }
//     const animals: Animal[] = []
//     animals.push(new Animal("Cow", "Maxine", "Moo", "Grass", 7))
//     animals.push(new Animal("Duck", "Ella", "Quack", "Bread", 5))
//     animals.push(new Animal("Horse", "Nina", "Neigh", "Hay", 9))
//     animals.push(new Animal("Chicken", "Frodo", "Cluck", "Grains", 3))
//     animals.push(new Animal("Pig", "Beatrice", "Oink", "Slop", 9))
//     animals.push(new Animal("Sheep", "Shear", "Baa", "Grass", 6))
//     const silos: Food[] = []
//     silos.push(new Food("Grass", 55))
//     silos.push(new Food("Bread", 15))
//     silos.push(new Food("Hay", 11))
//     silos.push(new Food("Grains", 12))
//     silos.push(new Food("Slop", 42))
//     for (let i: number = 0; i < animals.length; i++) {
//         console.log(animals[i].sing());
//         animals[i].eat(silos); // Animal eats from the silos
//     }
//     for (let j: number = 0; j < silos.length; j++) {
//         silos[j].restock(silos);
//     }
// }
var Farm;
(function (Farm) {
    class Animal {
        constructor(_type, _sound, _food, _foodamount) {
            this.type = _type;
            this.sound = _sound;
            this.food = _food;
            this.foodamount = _foodamount;
        }
        sing() {
            console.log(`
            Old MacDonald had a farm, E-I-E-I-O!
            And on that farm he had a ${this.type}, E-I-E-I-O!
            With a ${this.sound} ${this.sound} here and a ${this.sound} ${this.sound} there,
            Here a ${this.sound}, there a ${this.sound}, everywhere a ${this.sound} ${this.sound}`);
        }
        checkFoodAmount(_foodSilos) {
            const foodSilo = _foodSilos.find(_silo => _silo.type === this.food.type);
            if (foodSilo) {
                if (foodSilo.amount >= this.foodamount) {
                    console.log(`There is enough ${this.food.type} for the ${this.type} to eat.`);
                    return true;
                }
                else {
                    console.log(`Not enough ${this.food.type} for the ${this.type} to eat. Only ${foodSilo.amount} units left.`);
                    return false;
                }
            }
            else {
                console.log(`No ${this.food.type} found for ${this.type}.`);
                return false;
            }
        }
        eat(_foodSilos) {
            if (this.checkFoodAmount(_foodSilos)) {
                const foodSilo = _foodSilos.find(_silo => _silo.type === this.food.type);
                if (foodSilo) {
                    foodSilo.amount -= this.foodamount;
                    console.log(`${this.type} ate ${this.foodamount} units of ${this.food.type}. Remaining: ${foodSilo.amount}`);
                }
            }
            else {
                console.log(`${this.type} could not eat due to insufficient food.`);
            }
        }
    }
    class FoodSilo {
        constructor(_type, _amount) {
            this.type = _type;
            this.amount = _amount;
        }
        checkStockAmount() {
            if (this.amount < 10) {
                console.log(`Low stock alert: ${this.type} is running low with only ${this.amount} units left.`);
                return true; // Indicates that a restock is needed
            }
            console.log(`Stock for ${this.type} is sufficient with ${this.amount} units.`);
            return false;
        }
        restock() {
            if (this.checkStockAmount()) {
                this.amount += 50;
                console.log(`Restocked ${this.type}. New storage: ${this.amount}`);
            }
        }
    }
    const haySilo = new FoodSilo("Hay", 11);
    const cornSilo = new FoodSilo("Corn", 12);
    const meatSilo = new FoodSilo("Meat", 42);
    const foodSilos = [haySilo, cornSilo, meatSilo];
    const animals = [];
    animals.push(new Animal("Cow", "Moo", haySilo, 10));
    animals.push(new Animal("Dog", "Bark", meatSilo, 5));
    animals.push(new Animal("Horse", "Neigh", haySilo, 9));
    animals.push(new Animal("Chicken", "Cluck", cornSilo, 3));
    animals.push(new Animal("Cat", "Meow", meatSilo, 9));
    for (let i = 0; i < animals.length; i++) {
        animals[i].sing();
        animals[i].eat(foodSilos); // Animal eats from the silos
    }
    for (let j = 0; j < foodSilos.length; j++) {
        foodSilos[j].restock();
    }
})(Farm || (Farm = {}));
//# sourceMappingURL=Farm.js.map