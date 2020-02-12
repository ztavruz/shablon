<?php

//header('Content-Type: application/json');
//header('Access-Control-Allow-Origin: *');
//header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
//header('Access-Control-Allow-Headers: Content-Type');
//header('Access-Control-Allow-Credentials: true');


namespace Engine\Router;
use Engine\View\View;

class Router
{
    private $url;

    public function __construct($routes)
    {
        $this->url = $this->url();
        
    }

    public function run()
    {
       if ($this->pageExist() != '') {

            $url = $this->pageExist();
            $view = new View($url);
            return $view->render();

       }else
       {
        echo 'Страница не найдена';
       }
    }

    public function url()
    {
        $url = $_SERVER['REQUEST_URI'];
        $url = trim($url, '/');
        $url = preg_replace("#\?.*$#", null, $url);
        if ($url == '') {
            $url = 'main';
        }

        
        return $url;
    }

    

    public function pageExist()
    {
        $views = array_diff(scandir(VIEW_DIR), ['.','..']);
        $result = "";
        foreach ($views as $view) {
            if ($view == $this->url) {
                $result =  $this->url;
            }
        }

        return $result;
    }
}

