const Account = require('./accounts-model')

exports.checkAccountPayload = (req, res, next) => {
//   - `checkAccountPayload` returns a status 400 with if `req.body` is invalid:

//   - If budget is a negative number or over one million, return  `{ message: "budget of account is too large or too small" }`
   const error = {status: 400}
   const {name, budget } = req.body
  if (name === undefined || budget === undefined) {
    error.message ='name and budget are required'
    // next(error)
  } else if (typeof name !== 'string') {
    error.message = "name of account must be a string"
    // next(error)
  } else if (name.trim().length < 3 || name.trim().length > 100 ){
    error.message = "name of account must be between 3 and 100"
    // next(error)
  } else if (typeof budget !== 'number' || isNaN(budget)){ //NaN have to do || to be safe
    error.message = "budget of account must be a number"
    // next(error)
  } else if (budget < 0 || budget > 1000000) {
    error.message = "budget of account is too large or too small"
    // next(error)
  } 
  
  if (error.message) {
    next(error)
  } else {
    next()
  }
}

exports.checkAccountNameUnique = (req, res, next) => {
  // - `checkAccountId` returns a status 404 with a `{ message: "account not found" }` if `req.params.id` does not exist in the database
  console.log("checkAccountNameUnique Middleware");

  next()
}

exports.checkAccountId = async (req, res, next) => {
  // - `checkAccountNameUnique` returns a status 400 with a `{ message: "that name is taken" }` if the _trimmed_ `req.body.name` already exists in the database
  try{
    const account = await Account.getById(req.params.id)
    if (!account) {
      next({ status: 400 , message: "that name is taken"})
    } else {
      req.account = account 
      next()
    }
  } catch (err) {
    next(err)
  }
}
