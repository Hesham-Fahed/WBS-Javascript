<?php

class Post
{
    private $id;
    private $type;
    private $title;
    private $content;
    private $created;
    private $modified;
    private $visibility;
    private $user_id;
    
    public function getId()         : int    { return $this->id; }
    public function getType()       : string { return $this->type; }
    public function getTitle()      : string { return $this->title; }
    public function getContent()    : string { return $this->content; }
    public function getCreated()    : string { return $this->created; }
    public function getModified()   : string { return $this->modified; }
    public function getVisibility() : bool   { return $this->visibility; }
    public function getUserId()     : int    { return $this->user_id; }
}