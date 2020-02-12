<?php

namespace Api;

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');

class ApiLoader
{
    private $object;
    private $method;

    public function __construct($url)
    {
        $params = explode("/", $url);
        $this->object = $params[1];
        $method       = $params[2];
        $this->method = preg_replace("#\?.*$#", null, $method);
       
    }

    public function run()
    {
        $class     = $this->object;
        $namespace = "Api\\Controllers\\" . ucfirst($class);
        if(class_exists($namespace)){
            $controller = new $namespace();
            $method = $this->method;
            if(method_exists($controller, $method)){
                $controller->$method();
            }
            else
            {
                echo "Метод {$method}, не найден в классе {$namespace}.";
            }
        }
        else
        {
            echo "Класс {$class}, не найден в папке Controllers.";
        }
    }


}