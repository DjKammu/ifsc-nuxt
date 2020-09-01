<?php

 $data = ["title" =>  "sunt aut facere jkjjkj provident occaecati excepturi optio reprehenderit",
  "body"=> "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"];


header('Content-type: application/json');

echo json_encode( $data );

?>