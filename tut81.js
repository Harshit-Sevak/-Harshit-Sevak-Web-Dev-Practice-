// inserting data in mongo db 
 use harshuKart
 db.items.insertOne({ name: "samsung 30s " , price: 21000, rating: 4.6 , qty: 211 , sold: 121})

 db.items.insertMany([{ name: "samsung 30s " , price: 21000, rating: 4.6 , qty: 211 , sold: 121},
 { name: "opppo  as1 " , price: 15000, rating: 5.6 , qty: 400 , sold: 121},
 { name: "vivo y11 s " , price: 25000, rating: 3.6 , qty: 311 , sold: 221},
 { name: "mi  s11 s " , price: 111000, rating: 4.6 , qty: 511 , sold: 99},
 { name: "apple 11pr   " , price: 50000, rating: 5.6 , qty: 1000 , sold: 200}
  ]);