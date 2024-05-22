"use strict";
function createProduct(name, price, color, stock, colorOption) {
    const Tshirt = {
        name: "Polo",
        price: 2000,
        color: "white",
        inventory: {
            stock: 10,
            colorOptions: " White, Black , Cyan, Peach, Grey, Blue",
            changeColor: function (newColor) {
                Tshirt.color = newColor;
                switch (newColor) {
                    case "Cyan":
                        Tshirt.price += 200;
                        break;
                    case "Peach":
                        Tshirt.price -= 500;
                        break;
                    default:
                        Tshirt.price *= 2000;
                }
            }
        }
    };
    return Tshirt;
}
const tshirt = createProduct("Cool T-Shirt", 2000, "white", 3000, ["White", "Cyan", "Blue", "Peach"]);
console.log("Initial Product Details:", tshirt);
tshirt.inventory.changeColor("Cyan");
console.log("Update Product Details (Cyan):", tshirt);
tshirt.inventory.changeColor("Peach");
console.log("Update Product Details (Peach):", tshirt);
