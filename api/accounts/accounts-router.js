const router = require('express').Router()
const mid = require('./accounts-middleware.js');
const Account = require('./accounts-model')

router.get('/', async (req, res, next) => {
  // returns an array of accounts (or an empty array if there aren't any).
  try{
     const accounts = await Account.getAll() 
      res.json(accounts)
  } catch (err) {
    next(err)
  }
})

router.get('/:id', mid.checkAccountId, (req, res, next) => {
res.json(req.account)
})

router.post(
  '/',
  mid.checkAccountNameUnique,
  mid.checkAccountPayload,
   async (req, res, next) => {
  //returns the created account. Leading or trailing whitespace on budget `name` should be trimmed before saving to db.
 try {
   const newAccount = await Account.create(req.body)
  res.json(newAccount)
 } catch (err){
   next(err)
 }
})

router.put(
  '/:id', 
  mid.checkAccountId, 
  mid.checkAccountPayload, 
  mid.checkAccountNameUnique, 
  async (req, res, next) => {
  //returns the updated account. Leading or trailing whitespace on budget `name` should be trimmed before saving to db.
  try{
   const updated = await Account.updateById(req.params.id, req.body)
    res.json(updated)
  } catch (err) {
    next(err)
  }
});

router.delete('/:id', mid.checkAccountId, async (req, res, next) => {
  // returns the deleted account.
  try{
  await Account.deleteById(req.params.id)
  res.json(req.account)
  } catch (err) {
    next(err)
  }
})

router.use((err, req, res, next) => { // eslint-disable-line
  res.status(err.status || 500).json({
    message: err.message,
  })
})

module.exports = router;
