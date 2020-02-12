<?php


namespace Api\Controllers;
use Api\Controllers\Repository;

class CategoryProducts
{
    public $name;
    public $table;
    public $sale;

    public function __construct()
    {
        $this->table = "productcategory";
        $this->name = $_POST["product_category"];
    }

    public function add()
    {
        $name = $this->name;
        $repository = new Repository($this->table);
        $repository->add($name);
    }

    public function delete()
    {
        $id = $_POST['id'];

        $repository = new Repository($this->table);
        $repository->delete($id);
//        echo "Категория удалена";
    }

    public function rename($nameCategory)
    {
        $name = $this->name;
        $idCategory = $_POST['idCategory'];
        $repository = new Repository($this->table);
        $repository->update($idCategory,"name", $name);
    }

    public function getAll()
    {
        $repository = new Repository($this->table);
        $repository->getAll();

    }
}