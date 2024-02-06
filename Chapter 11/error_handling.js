app.use((req, res, next) => {
    console.log("Middleware 1 called.")
    console.log(req.path)
    next() // calling next middleware function or handler
})

app.get('/', (req, res) => {
    console.log("Route handler called.")
    res.send("Hello world!") // response sent back – no more middleware called
})

app.use((req, res, next) => {
    console.log("Last middleware called❓") // not called
})

app.get('/', (req, res) => {
    setTimeout(() => {
        try {
            console.log("Code executed after timeout")
            throw new Error("throw Error!")
        } catch (error) { 
            next(error)  // pass on error to next middleware handler
        }
    }, 1000)
})