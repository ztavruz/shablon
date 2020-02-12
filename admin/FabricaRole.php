<?php

namespace Admin;

class FabricaRole
{
    public static function setRole($nameRole)
    {
        if (class_exists($nameRole)) {
            return new $nameRole;
        }else{
            throw new Exception('Role' . $nameRole . 'not found');
        }
    }
}