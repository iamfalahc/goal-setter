//@desc Get goals
//GET api/goals
//@access Private
const getGoals = (req, res) => {
    res.status(200).json({ message: "Get goals" });
};
//@desc Set goal
//POST api/goals
//@access Private
const setGoal =(req,res)=>{
    res.status(200).json({message:"Set goals"})
};
//@desc Edit goal
//PUT api/goals/:id
//@access Private
const editGoal =(req,res)=>{
    res.status(200).json({message:`Edit Goal ${req.params.id}`})
};
//@desc Delete goal
//DELETE api/goals/:id
//@access Private
const deleteGoal =(req,res)=>{
    res.status(200).json({message:`Delete Goal ${req.params.id}`})
};
module.exports={
    getGoals,setGoal,editGoal,deleteGoal
}