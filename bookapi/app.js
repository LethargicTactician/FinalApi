var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
//var usersRouter = require('./routes/users');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
const { initialize } = require('express-openapi');
const swaggerUi = require('swagger-ui-express');
const expressPromBundler = require('express-prom-bundle');

app.use('/', indexRouter);
//app.use('/users', usersRouter);

const port = process.env.port || 5000;
app.listen(port, () => console.log("Listening on port: " + port));

initialize({
  app,
  apiDoc: require("./api/apiDoc"),
  paths: "./api/paths"
});


const metricsMiddleware = expressPromBundler({
  includeMethod: true,
  includePath: true,
  includeStatusCode: true,
  includeUp: true,
  customLabels: {project_name: "bookapi", project_type: "api_service"},
  promClient:{
    collectDefaultMetrics:{

    }

  }
})
app.use(metricsMiddleware);

app.use(
    "/api-documentation",
    swaggerUi.serve,
    swaggerUi.setup(null, {
      swaggerOptions:{
        url:"http://localhost:5000/apiDocs"
      }
    })
);


module.exports = app;
