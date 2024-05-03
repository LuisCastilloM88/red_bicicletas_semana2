// Importa el módulo 'http-errors' para manejar errores HTTP
var createError = require('http-errors');
// Importa el módulo 'express' para crear la aplicación web
var express = require('express');
// Importa el módulo 'path' para manejar rutas de archivos
var path = require('path');
// Importa el módulo 'cookie-parser' para manejar cookies en la aplicación
var cookieParser = require('cookie-parser');
// Importa el módulo 'morgan' para hacer logging de las solicitudes HTTP
var logger = require('morgan');

// Importa los enrutadores para diferentes rutas
var indexRouter = require('./routes/castilloindex');
var usersRouter = require('./routes/castillousers');
var biciRouter = require('./routes/castillobicicletas');
var biciAPIRouter = require('./routes/api/castillobicicletas-api-routes');

// Crea una aplicación express
var app = express();

// Configuración del motor de vistas
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// Middleware para logging de solicitudes HTTP
app.use(logger('dev'));
// Middleware para parsear el cuerpo de las solicitudes en formato JSON
app.use(express.json());
// Middleware para parsear los cuerpos de las solicitudes codificados en URL
app.use(express.urlencoded({ extended: false }));
// Middleware para manejar cookies
app.use(cookieParser());
// Middleware para servir archivos estáticos desde el directorio 'public'
app.use(express.static(path.join(__dirname, 'public')));

// Define las rutas para diferentes recursos
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/bicicletas', biciRouter);
app.use('/api/bicicletas', biciAPIRouter);

// Middleware para manejar errores 404 (recurso no encontrado)
app.use(function(req, res, next) {
  next(createError(404));
});

// Middleware para manejar errores
app.use(function(err, req, res, next) {
  // Configura los datos locales para la plantilla de error
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // Renderiza la página de error
  res.status(err.status || 500);
  res.render('error');
});

// Exporta la aplicación para que pueda ser utilizada en otros archivos
module.exports = app;
