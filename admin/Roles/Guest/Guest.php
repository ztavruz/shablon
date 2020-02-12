<?php

namespace Admin\Roles\Guest;

class Moderator 
{
    protected $addUser = false;
    protected $deleteUser = false;
    protected $blockUser  = true;

    protected $upRole = false;
    protected $downRole = false;

    protected $addComment = false;
    protected $deleteComment = false;
}