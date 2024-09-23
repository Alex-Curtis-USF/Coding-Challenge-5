//Create an Inventory Array of Product Objects
// Already ordered
let inventory = [ 
    { name: 'Coffee', price: 5, quantity: 20 },
    { name: 'Tea', price: 3, quantity: 15},
    { name: 'Muffin', price: 2, quantity: 50},
    { name: 'Donut', price: 3, quantity: 25}
];

//Create an Orders Array of Order Objects

let orders = [];

// Task 3

itemsOrdered = [
    { name: 'Coffee', quantity: 1},
    { name: 'Tea', quantity: 1}
]

//Create a Function to Place an Order

function placeOrder(customerName, itemsOrdered) {
    let orderError = false;

    // element is every element of items ordered
    itemsOrdered.forEach(itemToOrder => {
        // inv is every element of inventory
        let invResult = inventory.find((itemInInv)=>
            itemInInv.name === itemToOrder.name
        )

        if (!invResult || 0 > (invResult.quantity - itemToOrder.quantity)) {
            orderError = true;
            return;
        }
        invResult.quantity -= itemToOrder.quantity;
    });

    if (orderError) {
        console.log("Order can not be processed.")
        return;
    }
    orders.push({
        costumerName: customerName,
        items: itemsOrdered,
        status: "Pending"
    })
    console.log(orders);

}

placeOrder("James", itemsOrdered);

// Create a Function to Calculate Total for an Order

function calculateOrderTotal(itemsOrdered) {
    return itemsOrdered.reduce((total, item) => {
        let inventoryItem = inventory.find(invItem => invItem.name === item.name);
        return total + (inventoryItem ? inventoryItem.price * item.quantity : 0);
    }, 0);
}

console.log("Total price of the order: $" + calculateOrderTotal(itemsOrdered));

// 