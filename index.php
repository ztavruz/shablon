<?php
// ini_set('display_errors','On');
// error_reporting('E_ALL');

//header('Content-Type: application/json');
//header('Access-Control-Allow-Origin: *');
//header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
//header('Access-Control-Allow-Headers: Content-Type');
//header('Access-Control-Allow-Credentials: true');

require_once __DIR__ . "/vendor/autoload.php";
require_once __DIR__ . "/engine/Config/const.php";
$routes = require_once __DIR__ . "/engine/Config/routes.php";

use \RedBeanPHP\R as R;
use Engine\Token\Token;
use Engine\Router\Router;
use Api\ApiLoader;




$url = trim($_SERVER['REQUEST_URI'], "/");



if (preg_match("#^api.*#", $url)) {

    $api = new ApiLoader($url);
    $api->run();

}else
{
    $router = new Router($routes);
    $router->run();
}