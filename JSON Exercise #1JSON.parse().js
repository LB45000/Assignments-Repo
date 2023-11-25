 const fs = require('fs');

const jsonData = `{
  "users": [
    {
      "id": 1,
      "name": "John Doe",
      "email": "john@example.com",
      "address": {
        "city": "New York",
        "zipcode": "10001"
      }
    }
  ],
  "products": [
    {
      "id": 101,
      "name": "Laptop",
      "price": 999.99
    },
    {
      "id": 102,
      "name": "Smartphone",
      "price": 499.99
    }
  ]
}`;

fs.writeFileSync('dummyData.json', jsonData);

const fileContent = fs.readFileSync('dummyData.json', 'utf-8');

const parsedData = JSON.parse(fileContent);

console.log(parsedData);
