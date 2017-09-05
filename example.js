"use stirct";


document.addEventListener("DOMContentLoaded", function(){
    var test1Scroll = new CustomScroll(
            document.getElementById('test1_content'),
            document.getElementById('test1_scrollBar'),
            document.getElementById('test1_scrollBar_element')
            );
    var test2Scroll = new CustomScroll(
            document.getElementById('test2_content'),
            document.getElementById('test2_scrollBar'),
            document.getElementById('test2_scrollBar_element'),
            document.getElementById('test2')
            );
    var test3Scroll = new CustomScroll(
            document.getElementById('test3_content'),
            document.getElementById('test3_scrollBar'),
            document.getElementById('test3_scrollBar_element'),
            document.getElementById('test3')
            );
    document.getElementById('toNextPage').addEventListener('click',function(event){
        test2Scroll.toNextPage(+document.getElementById('offset').value);
    })
})
