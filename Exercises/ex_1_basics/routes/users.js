import express from 'express'


const router = express.Router()


router.get('/', (req, res) => {
    res.send('burası users anasayfası')
})


router.get('/:slug', (req, res) => {
    res.send(`${req.params.slug} - profil`)
})
// http://localhost:3000/users/abdulkadir  ---> abdulkadir - profil

export default router