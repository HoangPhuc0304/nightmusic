import User from '../modules/User.js'

const UserController = {
  //[GET] /api/users/find/:id (author)
  getUser(req, res) {
    User.findOne({ _id: req.params.id })
      .then((user) => res.status(200).json(user))
      .catch((err) => res.status(500).json(err))
  },

  //[GET] /api/users  (admin)
  getAllUsers(req, res) {
    const query = req.query.new
    query
      ? User.find({})
          .sort({ createdAt: 'desc' })
          .limit(10)
          .then((users) => {
            const foundUser = users.map((user) => {
              const { password, ...others } = user
              return others
            })
            return res.status(200).json(foundUser)
          })
          .catch((err) => res.status(500).json(err))
      : User.find({})
          .sort({ createdAt: 'desc' })
          .then((users) => {
            const foundUser = users.map((user) => {
              const { password, ...others } = user._doc
              return others
            })
            return res.status(200).json(foundUser)
          })
          .catch((err) => res.status(500).json(err))
  },

  //[GET] /api/users/bin  (admin)
  getDeletedUsers(req, res) {
    User.findDeleted({})
      .sort({ deletedAt: 'desc' })
      .then((users) => {
        const foundUser = users.map((user) => {
          const { password, ...others } = user._doc
          return others
        })
        return res.status(200).json(foundUser)
      })
      .catch((err) => res.status(500).json(err))
  },

  //[GET] /api/users/stat   (admin)
  getStatUsers(req, res) {
    const date = new Date()
    const lastYear = new Date(date.setFullYear(date.getFullYear() - 1))
    User.aggregateWithDeleted([
      {
        $match: { createdAt: { $gte: lastYear } },
      },
      {
        $project: {
          month: { $month: '$createdAt' },
        },
      },
      {
        $group: {
          _id: '$month',
          total: { $sum: 1 },
        },
      },
    ])
      .then((data) => res.status(200).json(data))
      .catch((err) => res.status(500).json(err))
  },

  //[POST] /api/users/upload-auto
  uploadAutoImage(req, res) {
    return res.status(200).json('Confirmed')
  },

  //[PUT] /api/users/edit/:id     (author)
  editUser(req, res) {
    if (
      req.body.email ||
      req.body.username ||
      req.body.coins ||
      req.body.energy ||
      req.body.isAdmin
    ) {
      return res.status(405).json('Cannot edit this field')
    }
    let data
    if (req.file.key) {
      data = {
        ...req.body,
        avatar: process.env.URL + '/api/resources/' + req.file.key,
      }
    } else {
      data = req.body
    }

    User.findByIdAndUpdate(
      req.params.id,
      {
        $set: data,
      },
      {
        new: true,
      },
    )
      .then((user) => res.status(200).json(user))
      .catch((err) => res.status(500).json(err))
  },

  //[DELETE] /api/users/delete/:id    (admin)
  deleteUser(req, res) {
    User.delete({ _id: req.params.id })
      .then((user) => res.status(200).json(user))
      .catch((err) => res.status(500).json(err))
  },
  //[POST] /api/users/delete    (admin)
  deleteMultipleUsers(req, res) {
    User.delete({ _id: { $in: req.body } })
      .then(() => res.status(200).json('Delete success'))
      .catch((err) => res.status(500).json(err))
  },

  //[DELETE] /api/users/destroy/:id   (admin)
  destroyUser(req, res) {
    User.deleteOne({ _id: req.params.id })
      .then(() => res.status(200).json('Delete success'))
      .catch((err) => res.status(500).json(err))
  },
  //[POST] /api/users/destroy   (admin)
  destroyMultipleUsers(req, res) {
    User.deleteMany({ _id: { $in: req.body } })
      .then(() => res.status(200).json('Delete success'))
      .catch((err) => res.status(500).json(err))
  },

  //[PATCH] /api/users/restore/:id    (admin)
  restoreUser(req, res) {
    User.restore({ _id: req.params.id })
      .then(() => res.status(200).json('Restore success'))
      .catch((err) => res.status(500).json(err))
  },
  //[POST] /api/users/restore    (admin)
  restoreMultipleUsers(req, res) {
    User.restore({ _id: { $in: req.body } })
      .then(() => res.status(200).json('Restore success'))
      .catch((err) => res.status(500).json(err))
  },
}

export default UserController
