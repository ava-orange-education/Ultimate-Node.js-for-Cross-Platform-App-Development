const express = require('express')
const app = express()

app.use((req, res, next) => {
  console.log('Time:', Date.now())
  next()
})

app.use('/employee/:id', (req, res, next) => {
    console.log('Request What http method Type used:', req.method);
    
    res.send("Employee with id - ",req.params.id);
})

app.use('/employee/:id?isActive=true', (req, res, next) => {
    console.log('Request URL:', req.params.id);
    next()
  }, (req, res, next) => {
    console.log('Request Type:', req.query.isActive);
    next()
})
  
// using middleware as an array
function authMiddleware (req, res, next) {
    console.log('Authentication of request will happen');
    next();
}

function logMiddleware (req, res, next) {
    console.log('Request logging will take care here');
    next();
}

const logStuff = [authMiddleware, logMiddleware]
    app.get('/order/:id', logMiddleware, (req, res, next) => {
    res.send('Order detail...');
})


// ROuter level middleware
const express = require('express');
const app = express();
const router = express.Router();

// a middleware function with no mount path. This code is executed for every request to the router
router.use((req, res, next) => {
    console.log('Time:', Date.now())
    next()
  })
  
// handler for the /user/:id path, which renders a special page
router.get('/order/:id', (req, res, next) => {    
    res.render('order detail page')
  })

// mount the router on the app
app.use('/', router)
  
// use the router and 401 anything falling through
app.use('customer/settings', router, (req, res) => {
    res.sendStatus(401).redirect('error page')
  })
  
// error handler
app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send('Something broke!')
})
  
//$ npm install body-parser
const express = require('express')
const app = express()
const bodyParser = require('body-parser')

// load the cookie-parsing middleware
app.use(bodyParser())

// serving static files
express.static(root, [options])

app.use(express.static('public'))
//Now, following listed files can be loaded from public directory:

http://localhost:3000/images/kitten.jpg
http://localhost:3000/css/style.css
http://localhost:3000/js/app.js
http://localhost:3000/images/bg.png
http://localhost:3000/hello.html

app.use('/static', express.static('public'))
//this will help us to serve file that are in the public directory from the /static path prefix.

http://localhost:3000/static/images/kitten.jpg
http://localhost:3000/static/css/style.css
http://localhost:3000/static/js/app.js
http://localhost:3000/static/images/bg.png
http://localhost:3000/static/hello.html

///$ npx express-generator

//PS D:\Book\Building-Real-Time-application-using-Node.js\chap_03> npx express-generator  