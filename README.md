# Mongoose Store
### Description
A product inventory manager that allows a user to buy, create, and sell products on a website. 

### Purpose
This is a small CRUD application that allows me to practice my understanding of the 'MEEN' stack: MongoDB, Express, Ejs, and Node.

### Routes
`index: GET "/products/" => renders index show page that contains all of the products available.`
`new: GET "/products/new/" => renders new page to create a new product`
`create: POST "/products/" => Post the newly created product to the hompage`
`show: GET "/products/:id/" => renders show page info on a particular product`
`edit: GET "/products/:id/edit/" => renders edit show page for a certain product`
`update: PUT "/products/:id/" => update the edited product`
`delete: DELETE "/products/shop/:id/" => delete the product`