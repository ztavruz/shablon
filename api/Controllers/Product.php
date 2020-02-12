<?php

namespace Api\Controllers;

use Api\Controllers\Repository;

class Product
{
    public $errors = [];

    public function add()
    {
        $blackList = [
            '.php', '.phtml', '.html', '.php3', '.php4', '.htm'
        ];

        $file       = $_FILES['img'];
        $newDirFile = "/../../content/img/products/lol/";

        $title     = $_POST['title'];
        $descript  = $_POST['description'];
        $price      = $_POST['price'];
        $imgName   = $file['name'];
        $type ;

        if($this->isEmpty($title))
        {
            $this->errors[] = "Не задано название продукта!";
        }
        if($this->isEmpty($price))
        {
            $this->errors[] = "Не установлена цена товара!";
        }
        if($this->isEmpty($title))
        {
            $this->errors[] = "Не задано название продукта!";
        }
        if($this->isEmpty($file))
        {
            $this->errors[] = "Не выбрано изображение товара!";
        }
        else
        {
            foreach($blackList as $item)
            {
                if(preg_match("#{$item}$#", $file['name']))
                {
                    $this->errors[] = "Данное расширение файла запрещено!";
                }

            }
            $type = getimagesize($file['tmp_name']);
        }
                
        if($type == false && ($type['mime'] != 'image/png' || $type['mime'] != 'image/jpg' || $type['mime'] != 'image/jpeg'))
        {
            $this->errors[] = "Тип файла не является изображением!";
        }

        if(!empty($this->errors))
        {
            foreach($this->errors as $key => $item){
                var_dump($item);
            }
            exit();
        }
        else
        {
            $upload = __DIR__ . $newDirFile .  $file['name'];
            if(move_uploaded_file($file['tmp_name'], $upload))
            {
                $data = [];
                $data['name'] = $title;
                $data['description'] = $descript;
                $data['price'] = $price;
                $data['img'] = $newDirFile . $imgName;
                
                $repository = new Repository('products');
                $repository->add($data);

                var_dump($data);
                echo "Товар успешно добавлен";
            }
        }
        
        


        // var_dump($_FILES['img']);
        // var_dump($img);
        // var_dump($uploads);
        // var_dump($this->errors);
        // var_dump($type)
    }



    public function isEmpty($string)
    {
        if($string == "" || $string == null){
            return true;
        }else{
            return false;
        }
    }
}