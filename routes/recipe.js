const express=require("express")
const { getRecipes,getRecipe,addRecipe,editRecipe,deleteRecipe,upload  } = require("../controller/recipe")
const verifyToken = require("../middleware/auth")
const router=express.Router()


router.get("/",getRecipes) //Get All Recipes
router.get("/:id",getRecipe) //Get All Id
router.post("/",upload.single('file'),verifyToken, addRecipe) //Add Recipe
router.put("/:id",upload.single('file'), editRecipe) //Edit Recipe
router.delete("/:id",deleteRecipe)//Delete Recipe




module.exports=router
