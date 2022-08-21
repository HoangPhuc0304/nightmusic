import Theme from '../modules/Theme.js'

const ThemeController = {
  //[POST] /api/theme/create  (admin)
  createTheme: (req, res) => {
    const newTheme = new Theme({
      mainColor: req.body.mainColor,
      styleColor: req.body.styleColor,
      darkColor: req.body.darkColor,
      textColor: req.body.textColor,
      textChangeColor: req.body.textChangeColor,
      image: req.body.image,
    })

    newTheme
      .save()
      .then((theme) => res.status(200).json(theme))
      .catch((err) => res.status(500).json(err))
  },

  //[POST] /api/theme/createMany  (admin)
  createManyTheme(req, res) {
    const data = req.body
    Theme.insertMany(data)
      .then((data) => res.status(200).json(data))
      .catch((err) => res.status(500).json(err))
  },

  //[GET] /api/theme/  (user)
  getThemes(req, res) {
    Theme.find({})
      .then((themes) => res.status(200).json(themes))
      .catch((err) => res.status(500).json(err))
  },
}

export default ThemeController
