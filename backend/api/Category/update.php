<?php

// Include model
include_once('./../../config/Database.php');
include_once('./../../models/CategoryModel.php');

// Instantiate Category Object
$category_model = new CategoryModel();

// Get raw data
$data = json_decode(file_get_contents("php://input"), true);

// set values
$name = $data['name'];
$description = $data['description'];
$account_id = $data['account_id'];
$id = $data['id'];

// Delete Category
if ($category_model->updateCategory($name, $description, $account_id, $id)) {
  echo json_encode(
    array('message' => 'Category updated')
  );
} else {
  echo json_encode(
    array('message' => 'Category not updated')
  );
}
