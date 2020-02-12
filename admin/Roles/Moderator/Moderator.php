<?php

namespace Admin\Roles\Moderator;

class Moderator 
{
    protected $addUser = false;
    protected $deleteUser = false;
    protected $blockUser  = true;

    protected $upRole = false;
    protected $downRole = false;

    protected $addComment = true;
    protected $deleteComment = true;
}