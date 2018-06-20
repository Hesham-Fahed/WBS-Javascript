---
layout: techdoc
title: REST APIs
order: 3200
examples: false
exercises: false
solutions: false
---
* TOC
{:toc}

```
GET     /posts            index()     <- show all posts
GET     /posts/{id}       show(id)    <- show single post
GET     /posts/create     create()    <- show create post form
POST    /posts            store()     <- save post
GET     /posts/{id}/edit  edit(id)    <- show edit post form
PATCH   /posts/{id}       update(id)  <- update post
DELETE  /posts/{id}       destroy(id) <- delete post
```
