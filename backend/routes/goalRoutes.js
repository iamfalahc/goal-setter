const express =require("express")
const router = express.Router()
const {getGoals,setGoal,editGoal,deleteGoal} =require('../controllers/goalControllers')

router.route("/").get(getGoals).post(setGoal)
router.route("/:id").put(editGoal).delete(deleteGoal)

module.exports = router