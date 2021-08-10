const db = require('../../data/db-config');

const getAll = () => {
  //select * from accounts; <-- this is raw SQL
  return db('accounts')
}

const getById = id => {
  //select * from accounts where ID = 1;
  return db('accounts').where('id', id).first() // results in collection 
}

const create = async account => {
  // resolves to the newly created account
  // insert into accounts (name, budget) values ('account-15' '1234')
  const [id] = await db('accounts').insert(account)
  return getById(id)
}

const updateById = async (id, account) => {
  // resolves to the updated account

  
}

const deleteById = id => {
  // delete from account where id = 1; 
 return db('accounts').where('id', id).del()
 
}

module.exports = {
  getAll,
  getById,
  create,
  updateById,
  deleteById,
}
