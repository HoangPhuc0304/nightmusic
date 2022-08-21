import User from '../modules/User.js'
import jwt from 'jsonwebtoken'

const AuthorController = {
  //[POST]: /api/author/register  (public)
  async register(req, res) {
    //Check email isn't registered yet
    try {
      const newEmail = await User.findOne({ email: req.body.email })
      if (newEmail) {
        res.status(409).json('This email is already registered!')
        return
      }
    } catch (err) {
      return res.status(500).json(err)
    }

    //Check username isn't registered yet
    try {
      const newUsername = await User.findOne({ username: req.body.username })
      if (newUsername) {
        res.status(409).json('This username is already registered!')
        return
      }
    } catch (err) {
      return res.status(500).json(err)
    }

    //Create user into database
    const newUser = new User({
      email: req.body.email,
      username: req.body.username,
      password: req.body.password,
    })
    try {
      const savedUser = await newUser.save()
      const accessToken = jwt.sign(
        {
          id: savedUser._id,
          isAdmin: savedUser.isAdmin,
        },
        process.env.JWT_SECRET,
        {
          expiresIn: '1d',
        },
      )
      const { password, ...others } = savedUser._doc
      return res.status(200).json({ ...others, accessToken })
    } catch (err) {
      return res.status(500).json(err)
    }
  },

  //[POST]: /api/author/login (public)
  async login(req, res) {
    try {
      let foundUser
      if (req.body.email) {
        foundUser = await User.findOne({ email: req.body.email })
        if (!foundUser) {
          res.status(401).send('Wrong email !')
          return
        }
      } else {
        foundUser = await User.findOne({ username: req.body.username })
        if (!foundUser) {
          res.status(401).send('Wrong username !')
          return
        }
      }

      if (foundUser.password !== req.body.password) {
        return res.status(401).send('Wrong password !')
      } else {
        const accessToken = jwt.sign(
          {
            id: foundUser._id,
            isAdmin: foundUser.isAdmin,
          },
          process.env.JWT_SECRET,
          {
            expiresIn: '1d',
          },
        )
        const { password, ...others } = foundUser._doc
        return res.status(200).json({ ...others, accessToken })
      }
    } catch (err) {
      return res.status(500).json(err)
    }
  },
}

export default AuthorController
