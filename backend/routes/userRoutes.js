import express from 'express'
import {
  authUser,
  deleteUser,
  getUserById,
  getUserProfile,
  getUsers,
  registerUser,
  upateUserProfile,
  updateUser,
} from '../controllers/userController.js'
import { admin, protect } from '../middleware/authMiddleware.js'

const router = express.Router()

router.route('/').post(registerUser).get(protect, admin, getUsers)
router.post('/login', authUser)
router
  .route('/profile')
  .get(protect, getUserProfile)
  .put(protect, upateUserProfile)
router
  .route('/:id')
  .get(protect, admin, getUserById)
  .put(protect, admin, updateUser)
  .delete(protect, admin, deleteUser)

export default router
