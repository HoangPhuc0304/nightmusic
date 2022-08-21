import jwt from 'jsonwebtoken'

const verifyToken = (req, res, next) => {
  const authHeader = req.headers.token
  if (authHeader) {
    const accessToken = authHeader.split(' ')[1]
    if (accessToken && accessToken !== 'null') {
      jwt.verify(accessToken, process.env.JWT_SECRET, (err, data) => {
        if (err) {
          return res.status(403).json({ message: 'Token is invalid' })
        }
        req.user = data
        next()
      })
    } else {
      return res.status(401).json({ message: 'You have to need a token' })
    }
  } else {
    return res.status(401).json({ message: 'You are not authenticated' })
  }
}

const verifyTokenAndAuthorization = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.id === req.params.id || req.user.isAdmin) {
      next()
    } else {
      return res.status(403).json({ message: 'You are not allowed to do that' })
    }
  })
}

const verifyTokenAndAdmin = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user && req.user.isAdmin) {
      next()
    } else {
      return res.status(403).json({ message: 'You are not an admin' })
    }
  })
}

export { verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin }
