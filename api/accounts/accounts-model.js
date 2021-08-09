const db = require('../../data/db-config');

const getAll = () => {
  //select * from accounts; <-- this is raw SQL
  return db('accounts')
}

const getById = id => {
  //select * from accounts where ID = 1;
  return db('accounts').where('id', id).first() // results in collection 
}

const create = account => {
  // resolves to the newly created account
  
}

const updateById = (id, account) => {
  // resolves to the updated account
  
}

const deleteById = id => {
  // resolves to the deleted account
  
}

module.exports = {
  getAll,
  getById,
  create,
  updateById,
  deleteById,
}
