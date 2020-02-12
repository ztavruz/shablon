<?php

namespace Api\Controllers;
use Engine\Token\Token;

$header = [
    "alg" => "HS256", 
    "typ" => "JWT"
];
$header = json_encode($header);

$payload = [
    "userId" => "1",
];
$payload = json_encode($payload);

$secret = 'ztavruz';

class Author
{
    public $secret;
    public $token;

    public function __construct()
    {
        $this->secret = "ztavruz";
    }

    public function create()
    {

    }

    public function author()
    {

    }
}