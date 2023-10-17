export default {
  getAllGroup: (req, res) => {
    res.send({ data: [] })
  },
  getOneGroup: (req, res) => {
    const groupId = parseInt(req.params.id)
    res.send({ data: groupId })
  },
  createGroup: (req, res) => { },
  updateGroup: (req, res) => { },
  deleteGroup: (req, res) => { }
}
