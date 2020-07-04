const store = require('./store')

function addMessage(user, message) {
  
  return new Promise((resolve, reject) => {
    if (!user || !message) {
      console.log('[messageController] no hay usuario o mensaje');
      
      return reject('Los datos son incorrectos')
    }

    const fullMessage = {
      user: user,
      message: message,
      date: new Date(), //nueva fecha en js
    }
    
    store.add(fullMessage)
    resolve(fullMessage)
  })
}


function getMessages(filterUser) {
  return new Promise((resolve, reject) => {
    resolve(store.list(filterUser))
  })
}


function updateMessage(id, message) {
  return new Promise(async (resolve, reject) => {
    if (!id || !message) {
      reject('Invalid Data')
      return false
    }
    const result = await store.updateText(id, message)
    resolve(result)
  })
}


function deleteMessages(id) {
  return new Promise((resolve, reject) => {
    if (!id) {
      reject('Id inválido')
      return false
    }

    store.remove(id)
      .then(() => {
        resolve()
      })
      .catch(e => {
        reject(e)
      })
  })
}


module.exports = {
  addMessage,
  getMessages,
  updateMessage,
  deleteMessages,
}