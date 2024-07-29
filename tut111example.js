// inserting db in mongo 

use bhavanikart
 db.items.insertOne({ name: "apple" , price: 21000, rating: 4.5 , qty: 500, sold:100})


 db.items.insertmany([{ name: "apple" , price: 21000, rating: 4.5 , qty: 500, sold:100}])
 ,{ name: "apple" , price: 21000, rating: 4.5 , qty: 500, sold:100},
 { name: "apple" , price: 21000, rating: 4.5 , qty: 500, sold:100},
 { name: "apple" , price: 21000, rating: 4.5 , qty: 500, sold:100},
 { name: "apple" , price: 21000, rating: 4.5 , qty: 500, sold:100}
