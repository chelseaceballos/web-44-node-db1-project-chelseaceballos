const router = require('express').Router()

router.get('/', (req, res, next) => {
  // returns an array of accounts (or an empty array if there aren't any).
  try{
      res.json('get accounts')
  } catch (err) {
    next({status: 422 , message:"an error in the get"})
  }
})

router.get('/:id', (req, res, next) => {
  // returns an account by the given id.
  try{
    res.json('get accounts by ID')
  } catch (err) {
    next(err)
  }
})

router.post('/', (req, res, next) => {
  //returns the created account. Leading or trailing whitespace on budget `name` should be trimmed before saving to db.
  try{
    res.json('POSTS account')
  } catch (err) {
    next(err)
  }
})

router.put('/:id', (req, res, next) => {
  //returns the updated account. Leading or trailing whitespace on budget `name` should be trimmed before saving to db.
  try{
    res.json('updates account')
  } catch (err) {
    next(err)
  }
});

router.delete('/:id', (req, res, next) => {
  // returns the deleted account.
  try{
    res.json('deletes account')
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
