// routes/protectedRoute.js
const express = require('express');
const router = express.Router();
const protect = require('../middlewares/auth');

// Bu route, sadece giriş yapan kullanıcılar için erişilebilir olacak
router.get('/profile', protect, (req, res) => {
  res.json({ message: 'Profil bilgisi', user: req.user });
});
router.put('/profile', protect, updateProfile);
router.get('/profile', protect, getProfile);

module.exports = router;