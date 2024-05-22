// Part 3 : Colorful T-shirts
type Product = {
    name: string,
    price: number,
    color: string,
    inventory:{
        stock: number,
        colorOptions?: string,
        changeColor: (newColor:string)=> void
        };
    };
function createProduct( name:string, price: number, color: string, stock:number, colorOption: string[] ): Product{
const Tshirt: Product = {
    name: "Polo",
    price: 2000,
    color: "white",
    inventory:{
        stock: 10,
        colorOptions: " White, Black , Cyan, Peach, Grey, Blue",
        changeColor: function (newColor: string): void {
            Tshirt.color = newColor;
            switch (newColor) {
                case "Cyan":
            Tshirt.price += 200;
                break;
                case "Peach":
            Tshirt.price -= 500;
                break;
                default:
            Tshirt.price *= 2000
            }
        }
    }
}
return Tshirt;
}
const tshirt = createProduct("Cool T-Shirt", 2000, "white", 3000, ["White", "Cyan", "Blue", "Peach"]);
console.log("Initial Product Details:", tshirt);
tshirt.inventory.changeColor("Cyan");
console.log("Update Product Details (Cyan):", tshirt);
tshirt.inventory.changeColor("Peach");
console.log("Update Product Details (Peach):", tshirt);