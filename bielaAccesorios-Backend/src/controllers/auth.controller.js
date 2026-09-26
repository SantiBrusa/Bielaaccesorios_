import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

export const login = async (req, res) => {
  try {
    const { usuario, password } = req.body

    if (usuario !== process.env.ADMIN_USER) {
      return res.status(401).json({ error: 'Usuario o contraseña incorrectos' })
    }

    const passwordValida = await bcrypt.compare(password, process.env.ADMIN_PASSWORD_HASH)
    if (!passwordValida) {
      return res.status(401).json({ error: 'Usuario o contraseña incorrectos' })
    }

    const token = jwt.sign(
      { usuario },
      process.env.JWT_SECRET,
      { expiresIn: '8h' }
    )

    res.json({ token })
  } catch (error) {
    res.status(500).json({ error: 'Error al iniciar sesión' })
  }
}