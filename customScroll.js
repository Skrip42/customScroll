"use strict";

var customScrollProto = {
    element : '',
    id : '',
    scrollBarArea : '',
    scrollBarElement : '',
    changeClass : false,
    classContainer : '',

    update : function () {
        this.scrollBarElement.style.marginTop = this.element.scrollTop / this.element.scrollHeight * this.scrollBarArea.clientHeight + this.offsetTop + 'px';
    },

    redrow : function () {
        if (this.changeClass) {
            if (this.element.scrollHeight > this.element.clientHeight) {
                this.classContainer.classList.add('customScroll_scrolable');
            } else {
                this.classContainer.classList.remove('customScroll_scrolable');
            }
        }
        this.scrollBarElement.style.height = this.element.clientHeight / this.element.scrollHeight * this.scrollBarArea.clientHeight - this.offsetTop - this.offsetBottom + 'px';
    },
    setScrollByProcent : function (procent) {
        this.element.scrollTop = this.element.scrollHeight * procent - this.element.clientHeight / 2;
    },
    toNextPage : function (offset) {
        if ((typeof offset) !== 'number') {
            if (typeof offset === 'string' && /[\d\-]/.test(offset)) {
                offset = +offset;
            } else {
                offset = 0;
            }
        }
        this.element.scrollTop = (this.element.scrollTop + this.element.clientHeight + offset);
    }
};

var customScrollList = {
    id : 0,
    list : [],
    setElement : function (obj) {
        this.list[this.id] = obj;
        this.id++;
        return this.id - 1;
    }
};

function CustomScroll(element, scrollBarArea, scrollBarElement, classContainer) {
    Object.setPrototypeOf(this, customScrollProto);
    this.element = element;
    this.id = customScrollList.setElement(this);
    this.element.setAttribute('customScrollId', this.id);
    this.element.setAttribute('customScrollType', 'element');
    this.scrollBarArea = scrollBarArea;
    this.scrollBarArea.setAttribute('customScrollId', this.id);
    this.scrollBarArea.setAttribute('customScrollType', 'scrollBarArea');
    this.scrollBarElement = scrollBarElement;
    this.scrollBarElement.setAttribute('customScrollId', this.id);
    this.scrollBarElement.setAttribute('customScrollType', 'scrollBarElement');
    if (classContainer) {
        this.changeClass = true;
        this.classContainer = classContainer;
    } else {
        this.changeClass = false;
    }
    this.offsetTop = +getComputedStyle(scrollBarElement).marginTop.replace('px', '');
    this.offsetBottom = +getComputedStyle(scrollBarElement).marginBottom.replace('px', '');


    this.element.addEventListener('scroll', function () {
        customScrollList.list[this.getAttribute('customScrollId')].update();
    });
    this.scrollBarArea.addEventListener('click', function (event) {
        customScrollList.list[this.getAttribute('customScrollId')].setScrollByProcent((event.clientY - customScrollList.list[this.getAttribute('customScrollId')].offsetTop) / this.clientHeight);
    });
    this.scrollBarElement.addEventListener('mousemove', function (event) {
        if (event.buttons & 1) {
            customScrollList.list[this.getAttribute('customScrollId')].setScrollByProcent((event.clientY - customScrollList.list[this.getAttribute('customScrollId')].offsetTop) / customScrollList.list[this.getAttribute('customScrollId')].scrollBarArea.clientHeight);
        }
    });
    this.scrollBarArea.addEventListener('mousemove', function (event) {
        if (event.buttons & 1) {
            customScrollList.list[this.getAttribute('customScrollId')].setScrollByProcent((event.clientY - customScrollList.list[this.getAttribute('customScrollId')].offsetTop) / customScrollList.list[this.getAttribute('customScrollId')].scrollBarArea.clientHeight);
        }
    });
    this.redrow();
}


document.addEventListener("DOMContentLoaded", function () {
    

    
});
