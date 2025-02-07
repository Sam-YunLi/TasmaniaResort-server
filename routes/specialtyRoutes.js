import express from "express";
import {
  getSpecialtyList,
  getSpecialtyById,
  deleteSpecialty,
  createSpecialty,
  updateSpecialty,
  createSpecialtyReview,
} from "../controllers/specialtyControllers.js";
import { protectUser, admin } from "../middleware/authMiddleware.js";
const router = express.Router();

//@desc   Fetch all Specialties and create new specialty
router
  .route("/")
  .get(getSpecialtyList)
  .post(protectUser, admin, createSpecialty);
//@desc   Fetch single specialty(read,delete and update)
router
  .route("/:id")
  .get(getSpecialtyById)
  .delete(protectUser, admin, deleteSpecialty)
  .put(protectUser, admin, updateSpecialty);
//@desc   Post single specialty review
router.route("/:id/reviews").post(protectUser, createSpecialtyReview);

export default router;
