<?php

namespace Engine\View;

class View
{
    private $page;

    public function __construct($page)
    {
        $this->page = $page;
    }

    public function render()
    {   
        $page = __DIR__. "/../../view/{$this->page}/index.php";

        
        ob_start();
        require $page;
        $page = ob_get_clean();

        return require __DIR__. "/../../view/layout.php";
    }

    public function libsCss()
    {
        $items = scandir(LIBS_DIR . '/css');
        $items = array_diff($items, ['.','..']);

        $links = "";

        foreach ($items as $item) {
            $links .= "<link rel='stylesheet' type='text/css' href='/libs/css/{$item}'>";
        }
        return $links;
    }

    public function libsJs()
    {
        $items = scandir(LIBS_DIR . '/js');
        $items = array_diff($items, ['.','..']);

        $scripts = "";

        foreach ($items as $item) {
            $scripts .= "<script src='/libs/js/{$item}'></script>";
        }
        return $scripts;
    }

    public function filesCss()
    {
        $items = scandir( __DIR__. "/../../view/{$this->page}/css");
        $items = array_diff($items, ['.','..']);

        $links = "";

        foreach ($items as $item) {
            $links .= "<link rel='stylesheet' href='/view/{$this->page}/css/{$item}'>";
        }
        return $links;
    }

    public function filesJs()
    {
        $items = scandir( __DIR__. "/../../view/{$this->page}/js");
        $items = array_diff($items, ['.','..']);

        $scripts = "";

        foreach ($items as $item) {
            $scripts .= "<script src='/view/{$this->page}/js/{$item}'></script>";
        }
        return $scripts;
    }
}