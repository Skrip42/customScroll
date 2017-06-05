# customScroll
custom scroll functionality

To use the "customScroll" you must have a "DOM" structure of the form:

        <div id = "test1" class = "test">
           <div id = "test1_subcontainer" class = "test_subcontainer">
              <div id = "test1_content" class = "test_content">
                content
              </div> 
           </div> 
            <div id = "test1_scrollBar" class = "test_scrollBar">
               <div id = "test1_scrollBar_element" class = "test_scrollBar_element">
                   
               </div> 
            </div>
        </div>

And have styles similar:


.test{
    width:you width;
    height:you height;
}
.test_subcontainer{
    width:100%;
    height:100%;
    overflow:hidden;
    float:left;
}
.test_content{
    width:100%;
    overflow:auto;
    height:100%;
}
.test_scrollBar{
    float:left;
    width:20px; /*you scrollbar width*/
    height:you scrollbar height; 
    display:none;
}
.test_scrollBar_element{
   margin:1px; /*you can use the "margin" to form an indentation*/
}
/*-------------------------------------------*/
/* "customScroll_scrolable" class added to the element if it needs scrolling. auto added to containerElement if it is set */
.customScroll_scrolable .test_subcontainer{
    width:calc(100% - you scrolldar width) !important; 
}
.customScroll_scrolable .test_content{
    width:calc(100% + 20px) !important; /*20px distance needed to hide the default scroll*/
}
.customScroll_scrolable .test_scrollBar{ 
    display:block !important;
}

Then use:
    "new customScroll(contentElement, scrollBarAreaElement, scrollBarCarriageElement, containerElement)"
    or
    "new customScroll(contentElement, scrollBarAreaElement, scrollBarCarriageElement)"
to initialize scrollBar

You can also use the following methods to control the scrollbar:
customScrollElement.update()
customScrollElement.redrow()
customScrollElement.setScrollByProcent(procent) where p - is number 0-1
customScrollElement.toNextPage(offset)

