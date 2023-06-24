require('./database/mongodb');
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/indexRouter');
var clienteRouter = require('./routes/clienteRouter');
var categoriaRouter = require('./routes/categoriaRouter');
var produtoRouter = require('./routes/produtoRouter');
var pedidoRouter = require('./routes/pedidoRouter');
var imageRouter = require('./routes/imageRouter');
var loginRouter = require('./routes/loginRouter');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/clientes', clienteRouter);
app.use('/categoria', categoriaRouter);
app.use('/produto', produtoRouter);
app.use('pedido', pedidoRouter);
app.use('imagens', imageRouter);
app.use('/auth', loginRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});


app.get("/get", async(req,res)=>{

  const data=new monmodel({
    id:req.body.id
  });

  const val=await data.save();
  res.send("obtido");
})

// app.put("/put", async(req,res)=>{

//   const data=new monmodel({
//     id:req.body.id
//   });

//   const val=await data.save();
//   res.send("obtido");
// })

// app.post("/post", async(req,res)=>{

//   const data=new monmodel({
//     id:req.body.id
//   });

//   const val=await data.save();
//   res.send("obtido");
// })

// app.list("/list", async(req,res)=>{

//   const data=new monmodel({
//     id:req.body.id
//   });

//   const val=await data.save();
//   res.send("obtido");
// })
module.exports = app;
