# Mongoose Store
### Description
A product inventory manager!

Here is a link to the deployment!
https://mongoose-store-sunghunp.herokuapp.com/products

### Purpose
This is a small CRUD application that allows me to practice my understanding of the 'MEEN' stack: MongoDB, Express, Ejs, and Node.

### Usage and Features
A user will be able to create a product, view a particular product, edit that product, and delete the product. 
They are also able to buy items reducing the stock. 

### Routes
`index: GET "/products/" => renders index show page that contains all of the products available.` <br>
`new: GET "/products/new/" => renders new page to create a new product` <br>
`create: POST "/products/" => Post the newly created product to the homepage` <br>
`show: GET "/products/:id/" => renders show page info on a particular product` <br>
`edit: GET "/products/:id/edit/" => renders edit show page for a certain product` <br>
`update: PUT "/products/:id/" => update the edited product` <br>
`delete: DELETE "/products/:id/" => delete the product` <br>

### Technologies and requirements
- Html
- CSS
- JavaScript
- Ejs
- Node
- Express
- jQuery (https://code.jquery.com/jquery-3.6.0.js)

### Dependencies
- dotenv: "^16.0.0",
- ejs: "^3.1.6",
- express: "^4.17.3",
- method-override: "^3.0.0",
- mongoose: "^6.3.0",
- morgan: "^1.10.0"
