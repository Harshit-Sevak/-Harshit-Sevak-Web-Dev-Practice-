const express = require ("express");
const app = express();
const  path = require("path");
const port = 80;


app.use('/static', express .static('static')); // For serving static files
app.use(express.urlencoded())
app.set('view engine', 'pug') // set the template engine for pug

app.set('views', path.join(__dirname, 'views')) // set the views directory 

// our pug demo endpoint
app.get('/', (req, res) => {
    const con = "this is the best content on the internet  so far use wisely  "
    const params ={'title': ' pubg is the best game', "content" : con}
    res.status(200).render('index.pug',params ) ;
  })


app.post('/', (req, res)=>{
  console.log(req.body)
  const params = {'message': ' Your form has been submitted successfully'}
  res.status(200).render('index.pug',params);
})



// END POINTS
    
      // START THE SERVER 
app.listen(port,  ()=>{
       console.log(`The application started successfully on port ${port}`);
})