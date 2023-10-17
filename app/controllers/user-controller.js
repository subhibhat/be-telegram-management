export default {
  getAllUser: (req, res) => {
    res.send({ data: [] })
  },
  getOneUser: (req, res) => {
    const userId = parseInt(req.params.id)
    res.send({ data: userId })
  },
  createUser: (req, res) => { },
  updateUser: (req, res) => { },
  deleteUser: (req, res) => { }
}
