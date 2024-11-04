
class product {
    constructor (name, price, quantity) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    } 
    
    calculatePrice () {
        return this.price * this.quantity;
        
    }
}

class cart {
    constructor (items = []) {
        this.items = [];
    }

    addItem(product) {
        let currentProduct;
        /* once product cartta var mi zaten ona bakicaz. itemin icinde ne kadar product varsa ve carttaki her product ismi product isim propertysine esitse o zaman carttaki product items da store edilicek*/ 
        for (let i=0; i < this.items.length; i++) {
            if (this.items[i].name === product.name) {
                currentProduct = true;
                this.items[i].quantity += product.quantity;
            }
        }
            // current product yoksa, items a yeni product ekleticek
        if (!currentProduct) {
            this.items.push(product);
            //if I have already a product, then it will increment
        }
    }

    removeItem(productName) {
        let toBeRemoved;
        /* once cartta urun varsa onu bulcaz onu da productName le check edicez*/
        for (let i=0; i<this.items.length; i++) {
            if (this.items[i].name === productName){
                // eger urun varsa yani yeni define ettigimiz toBeRemoved, o zaman decline
               
                    if (this.items[i].quantity > 1) {
                        this.items[i].quantity--;
                        //cart da zaten urun yoksa direk remove
                    } else {
                       // delete this.items[i];
                        this.items[i].splice(1, 1);
                    }
                }
            }
        }

        getTotalCost() {
            let totalCost = 0;
            //total cost = sum of price * quantity
            for (let i = 0; i < this.items.length; i++) {
             totalCost += this.items[i].calculatePrice();
            }
            return totalCost;
          }

          getCartSummary() {
            //summary ye fiyat toplamini eklemek icin push kullanicaz o yuzden sum array olmali
            let sum = [];
            for (let i = 0; i < this.items.length; i++) {
                //array e eklicegimiz value da loop a giren her item in ismi ve sayisi (property olarak), her item in fiyati * quantity si ne assign edicez
              sum.push(`${this.items[i].name} * ${this.items[i].quantity} = ${this.items[i].calculatePrice()}`);
            }
            return sum;
          }
        }
    
        function getUserChoice () {
            console.log("User Menu");
            console.log("1 Add item to cart");
            console.log("2 Remove item from cart");
            console.log("3 View cart summary");
            console.log("4 View total cost");
            console.log("Exit");
            // user can insert its input
            let userChoice = prompt("Select your choice:");
            return userChoice; 
        }

        function shoppingCartApp () {
            let cart1 = new cart();
            //when there is a new cart so it's true
            while (true){
                //user choice u recall edicez
                let userChoice = getUserChoice();

                switch (userChoice) {
                    case 1:
                        product.name = prompt("product name");
                        product.price = promt("product price");
                        product.quantity = promt("product quantity");
                        product = new Product();
                        cart.addItem(Product);
                        console.log("Add item to cart");
                        break;
                    case 2:
                        product.name = promt("Remove item from cart");
                        cart.removeItem(toBeRemoved);
                        break;
                    case 3:
                        cart = promt("View cart summary");
                        cart.getCartSummary(sum);
                        console.log(cart.getCartSummary(sum));
                    case 4:
                        cart = promt("View total cost");
                        cart.getUserChoice(totalCost);
                        console.log(cart.getUserChoice(totalCost));
                    case 5:
                }       userChoice = promt("Exit");
                        console.log("Exit");
            } 

        }

        

        let c = new cart();
        c.addItem(new product("hugo", 10, 2))
        c.addItem(new product("chloe", 11, 1))
        c.addItem(new product("hugo", 10,2))

        console.log(c.items)
        console.log(c.getTotalCost())
        console.log(c.getCartSummary())