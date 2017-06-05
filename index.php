<!DOCTYPE html>
<html lang="ru">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=divice-width, initial-scale=1.0">
        <title></title>
        <link rel="stylesheet" href="style.css">
    </head>
    <body>
        <div id = "test1" class = "test customScroll_scrolable">
           <div id = "test1_subcontainer" class = "test_subcontainer">
              <div id = "test1_content" class = "test_content">
                 <?php
                    for($i = 0; $i< 50; $i++){
                        echo $i.'<br>';
                    }
                 ?> 
              </div> 
           </div> 
            <div id = "test1_scrollBar" class = "test_scrollBar">
               <div id = "test1_scrollBar_element" class = "test_scrollBar_element">
                   
               </div> 
            </div>
        </div>
        <div id = "test2" class = "test">
           <div id = "test2_subcontainer" class = "test_subcontainer">
              <div id = "test2_content" class = "test_content">
                 <?php
                    for($i = 0; $i< 100; $i++){
                        echo $i.'<br>';
                    }
                 ?> 
              </div> 
           </div> 
            <div id = "test2_scrollBar" class = "test_scrollBar">
               <div id = "test2_scrollBar_element" class = "test_scrollBar_element">
                   
               </div> 
            </div>
        </div>
        <div id = "test3" class = "test">
           <div id = "test3_subcontainer" class = "test_subcontainer">
              <div id = "test3_content" class = "test_content">
                 <?php
                    for($i = 0; $i< 9; $i++){
                        echo $i.'<br>';
                    }
                 ?> 
              </div> 
           </div> 
            <div id = "test3_scrollBar" class = "test_scrollBar">
               <div id = "test3_scrollBar_element" class = "test_scrollBar_element">
                   
               </div> 
            </div>
        </div>
        <button id = "toNextPage">toNextPage</button> 
        <input id = "offset" type = "number" value = "-30" name = "">
        <script src = "customScroll.js"></script>
        <script src = "test.js"></script>
    </body>
</html>
