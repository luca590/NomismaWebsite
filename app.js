const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const http = require('http')

var formidable = require('formidable');
var fs = require('fs');

const app = express()
const server = http.createServer(app)
app.set('port', (process.env.PORT || 8080))	//do I need to open port 5000 on AWS?

app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
// app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET')
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Authorization')
  next()
})

app.use('/', express.static(__dirname + '/dist'))

app.post('/api/upload/media', function(req, res){
  // create an incoming form object
  var form = new formidable.IncomingForm();

  // specify that we want to allow the user to upload multiple files in a single request
  form.multiples = true;

  // store all uploads in the /uploads directory
  form.uploadDir = path.join(__dirname, '/uploads');

  // every time a file has been uploaded successfully,
  // rename it to it's orignal name
  form.on('file', function(field, file) {
    fs.rename(file.path, path.join(form.uploadDir, file.name));
  });

  // log any errors that occur
  form.on('error', function(err) {
    console.log('An error has occured: \n' + err);
  });

  // once all the files have been uploaded, send a response to the client
  form.on('end', function() {
    return res.json({
      status: 'ok',
    })
  });

  // parse the incoming request containing the form data
  form.parse(req);

});

app.post('/api/upload/mediaCropped', function(req, res){
  var fs      = require('fs'),
  data        = fs.readFileSync('base64', 'utf8'),
  base64Data,
  binaryData;

  base64Data  =   req.body.fileData.replace(/^data:image\/png;base64,/, "");
  base64Data  +=  base64Data.replace('+', ' ');
  binaryData  =   new Buffer(base64Data, 'base64').toString('binary');

  fs.writeFile('uploads/' + req.body.fileName, binaryData, "binary", function (err) {
      console.log(err); // writes out file without error, but it's not a valid image
  });
})

app.post('/api/trackState', function(req, res){
  console.log(req.body)
  return res.json({
    status: 'ok',
  })
})

app.get('/*', function(req, res) {
  res.sendFile(path.resolve('./src/index.html'))
});

app.listen(app.get('port'), function() {
  console.log('Running on port: ', app.get('port'))
})
