# Mongoose Store
### Description
A product inventory manager that allows a user to buy, create, and sell products on a website. 

### Purpose
This is a small CRUD application that allows me to practice my understanding of the 'MEEN' stack: MongoDB, Express, Ejs, and Node.

### Routes
`index: GET "/products/" => renders index show page that contains all of the products available.` <br>
`new: GET "/products/new/" => renders new page to create a new product` <br>
`create: POST "/products/" => Post the newly created product to the homepage` <br>
`show: GET "/products/:id/" => renders show page info on a particular product` <br>
`edit: GET "/products/:id/edit/" => renders edit show page for a certain product` <br>
`update: PUT "/products/:id/" => update the edited product` <br>
`delete: DELETE "/products/:id/" => delete the product` <br>