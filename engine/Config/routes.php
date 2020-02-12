<?php

return [

    "guest" => [
        'controller' => 'user',
        'method'     => 'guest'
    ],
    "user" => [
        'controller' => 'user',
        'method'     => 'user',
    ],
    "signup" => [
        'controller' => 'user',
        'method'     => 'signup'
    ],
    "signin" => [
        'controller' => 'user',
        'method'     => 'user'
    ],
    "addProduct" => [
        'controller' => 'product',
        'method'     => ''
    ],
    "product" => [
        'controller' => 'product',
        'method'     => ''
    ],
    "allproducts" => [
    'controller' => 'repository',
    'method'     => 'getall'
]

];