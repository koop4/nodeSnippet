# Topics

## Module
include inner workings of node.js and cover the following topics:

- V8 Engine
- Global object
- Modules import
- Event Emitter
- File System


### [V8 Engine](https://v8.dev/)

An engine convert js code in machine code.
The code goes throug this transformetion process:

1. Javascript  
1. C++  
1. Assembly  
1. Machine Code

V8 is written by google in C++ and can run standalone or be embedded. 
Node.Js in reality is a C++ application which hooks in V8 engine


### Global object
Global Objects in node is called _global_ and allow to call various javascript method.  
>E.G.  
global.setInterval  
global.__dirname  
global.__filename  

Note: you can call anything withouth typing global!


## Server
server creation and topic related to web servers

- Server creation, request, response
- Buffers, streams, pipes
- Serving html and Json
- Routing
- Express
- Templating


