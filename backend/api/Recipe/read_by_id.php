<?php
 // Headers
 header('Access-Control-Allow-Origin: *');
//  header('Content-Type: application/json');
// Include model
include_once('./../../config/Database.php');
include_once('./../../models/RecipeModel.php');

// Instantiate Account Object
$recipe_model = new RecipeModel();

// Get raw data
$data = json_decode(file_get_contents("php://input"), true);

// set values
$id = $data['id'];

// Get values from Database
$valueReturn = $recipe_model->getRecipeByID($id);

echo json_encode($valueReturn);