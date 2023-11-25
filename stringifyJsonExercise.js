const dataObject = {
    user: {
        id: 1,
        name: "John Doe",
        email: "john@example.com",
        address: {
            city: "New York",
            zipcode: "10001"
        }
    },
    product: {
        id: 101,
        name: "Laptop",
        price: 999.99
    }
};


const jsonString = JSON.stringify(dataObject);
console.log(jsonString);
