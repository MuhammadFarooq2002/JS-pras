var collections = [
    {
        id: 511,
        firstName: "Caps",
        items: [
            { price: 250, color: "black", quantity: 210 },
            { price: 380, color: "white", quantity: 460 },
            { price: 600, color: "Blue and white", quantity: 160 },
            { price: 110, color: "black and white", quantity: 300 },
        ]
    },
    {
        id: 512,
        firstName: "shoes",
        items: [
            { price: 1800, color: "green", quantity: 110 },
            { price: 5800, color: "red", quantity: 250 },
            { price: 3500, color: "black", quantity: 270 },
            { price: 2500, color: "white", quantity: 100 },
        ]
    },
    {
        id: 513,
        firstName: "watch",
        items: [
            { price: 8000, color: "golden", quantity: 200 },
            { price: 13000, color: "silver", quantity: 560 },
            { price: 6500, color: "white", quantity: 330 },
            { price: 10000, color: "black", quantity: 800 },
        ]
    }
]

for (let farooq = 0; farooq < collections.length; farooq++) {
    var sum = 0;
    var index = farooq;

    for (let i = 0; i < collections[index].items.length; i++) {
        sum = sum + collections[index].items[i].quantity
    }

    var avg = sum / collections[index].items.length

    console.log("collections " + collections[index].firstName + " = " + sum + " (" + avg + ")");
}