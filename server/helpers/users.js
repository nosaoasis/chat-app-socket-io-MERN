const users = [];

const addUser = (props) => {
  let {id, name, room} = props
  name = name.trim().toLowerCase()
  room = room.trim().toLowerCase()

  const existingUser = users.find(user => user.room === room && user.name === name)
  if (existingUser) {
    return {error : "Username is taken"}
  }

  const user = {id, name, room}
  users.push(user)

  return user
};

const removeUser = (props) => {
  const {id} = props

  const userIndex = users.findIndex(user => user.id === id)

  if (userIndex !== -1) {
    return users.splice(index, 1)[0]
  }
};

const getUser = (id) => {
  // const id = props
  return users.find(user => user.id === id)
};

const getUserInRoom = (room) => {
  return users.filter(user => user.room === room)
};

module.exports = {
  users,
  addUser,
  removeUser,
  getUser,
  getUserInRoom,
};
