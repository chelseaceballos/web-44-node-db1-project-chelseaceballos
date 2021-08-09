const router = require('express').Router()

router.get('/', (req, res, next) => {
  // returns an array of accounts (or an empty array if there aren't any).
})

router.get('/:id', (req, res, next) => {
  // returns an account by the given id.
})

router.post('/', (req, res, next) => {
  //returns the created account. Leading or trailing whitespace on budget `name` should be trimmed before saving to db.
})

router.put('/:id', (req, res, next) => {
  //returns the updated account. Leading or trailing whitespace on budget `name` should be trimmed before saving to db.
});

router.delete('/:id', (req, res, next) => {
  // returns the deleted account.
})

router.use((err, req, res, next) => { // eslint-disable-line
  // DO YOUR MAGIC
})

module.exports = router;
