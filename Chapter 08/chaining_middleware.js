const middleware1 = (req, res, next)=>{
    //execute some code
    next()  // pass execution to the next middleware
  }
  const middleware2 = (req, res, next)=>{
    //execute some code
  }

  const middleware3 = (req, res, next)=>{
    //execute some code
  }
  
  app.get("/", middleware1, middleware2, middleware3 );
  
  // OR
  app.get("/", function(req, res, next){
    // first middleware
    next()  //Pass execution to the next middleware
  },
  function(){
    // second middleware
  })

  app.get(path, (req, res, next) => {}, (req, res) => {})