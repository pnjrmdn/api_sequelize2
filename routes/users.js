var express = require('express');
var router = express.Router();

const Validator = require('fastest-validator');
const v = new Validator();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('test your code here');
});

router.get('/json', (req, res) => {
  res.json({
    message: 'this is data JSON'
  });
});

router.post('/post', async (req, res) => {
  const schema = {
      name: 'string',
      brand: 'string',
      description: 'string|optional'
  }

  const validate = v.validate(req.body, schema);

  if (validate.length) {
    return res.status(400).json(validate);
  }

  res.send('OK');
  // res.send('this method post');
});

// router.get('/me', (req, res,  next) => {
//   res.send('Hi this me');
// });

// router.get('/', function(req, res, next) {
//   res.send(process.env.APP_NAME);
// });

module.exports = router;