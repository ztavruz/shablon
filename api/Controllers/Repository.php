<?php

namespace Api\Controllers;


use \RedBeanPHP\R as R;
use Api\Controllers\Connect;

class Repository
{
    private $tableName;
    private $connect;

    public function __construct($tableName = "products")
    {
        $this->tableName = $tableName;
        $this->connect = new Connect();
    }


    public function add($data)
    {
        $data = json_decode($data);


        $table = R::dispense($this->tableName);
            foreach($data as $key => $item)
            {

                if($key == "password"){
                    $table->$key = password_hash($item, PASSWORD_DEFAULT);
                }else{
                    $table->$key = $item;
                }
            }


        R::store($table);

    }

    public function getAll()
    {
        $data = R::getAll("SELECT * FROM $this->tableName ");

        echo json_encode($data);
    }

    public function getOne()
    {

        // var_dump($id);
        $bind = [$id];

        $item = R::getAll("SELECT * FROM $this->tableName WHERE id LIKE ?", $bind);

        echo json_encode($item);
    }

    public function delete($item)
    {
        $item = json_decode($item);

//        var_dump($this->tableName);
//        var_dump(json_decode($item));
        $deleted = R::load($this->tableName, $item);
        R::trash($deleted);
    }

    public function update($id, $pole, $newValue)
    {
        $table = R::load($this->tableName, $id);
        $table->$pole = $newValue;
    }
}