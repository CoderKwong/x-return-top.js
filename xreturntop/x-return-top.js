/* 
* @Author: hzwangzhiwei
* @Date:   2014-12-08 16:14:37
* @Last Modified by:   hzwangzhiwei
* @Last Modified time: 2014-12-08 16:14:43
*/
var opt = {}; //配置
var __returnTopInterval = null; //动画定时器
var xReturnTopEle = null; //节点
var xReturnTopBox = null; //子节点

//x-return-top.js执行方法
function xReturnTop(id, options) {
    opt = options
    xReturnTopEle = document.getElementById(id);
    
    __createReturnTopHtml();
    
    var oldOnscroll = window.onscroll;
    window.onscroll = function () {
        if(typeof oldOnscroll == 'function'){
            oldOnscroll.call(this);
        }
        __onWindowScroll();
    }; //卷动事件
    xReturnTopEle.onclick = __animateReturnTop; //点击
    xReturnTopBox.onmouseover = __onBoxMouseOver; //鼠标
    xReturnTopBox.onmouseout = __onBoxMouseOut;
}

function __getOption(key) {
    //TODO
}

function __onBoxMouseOut() {
    xReturnTopBox.style.width = '36px';
}

function __onBoxMouseOver() {
    xReturnTopBox.style.width = '100px';
}

function __getScrollTopOffset() {
    return window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
}

function __setScrollTopOffset(value) {
	if (document.body && document.body.scrollTop) {
        document.body.scrollTop = value
    }
    if (document.documentElement && document.documentElement.scrollTop) {
        document.documentElement.scrollTop = value
    }
}

function __animateHideXReturnTop() {
    xReturnTopBox.style.bottom = '-60px';
}

//显示按钮动画
function __animateShowXReturnTop() {
    xReturnTopBox.style.bottom = '200px';
}

function __setScrollTopOffset(value) {
    if (document.body && document.body.scrollTop) {
        document.body.scrollTop = value
    }
    if (document.documentElement && document.documentElement.scrollTop) {
        document.documentElement.scrollTop = value
    }
}

function __scrollMove() {
    __setScrollTopOffset(__getScrollTopOffset() / 1.15);
    //滚动到最上面的时候，清除定时器
    if (__getScrollTopOffset() < 1) {
        clearInterval(__returnTopInterval);
        __returnTopInterval = null;
    }
}
function __animateReturnTop() {
    __returnTopInterval = setInterval(__scrollMove, 10);//每10毫秒只是一次方法
}

function __onWindowScroll() {
    if (__returnTopInterval == null) __getScrollTopOffset() > 5 ? __animateShowXReturnTop() : __animateHideXReturnTop();
}

function __createReturnTopHtml() {
    xReturnTopBox = document.createElement("div");
    xReturnTopBox.className = "box";
    xReturnTopBox.style.overflow = "hidden";
    
    var xReturnTopA = document.createElement("a");
    xReturnTopA.href = "javascript:void(0)";
        
    var xReturnTopSpan = document.createElement("span");
    var spanText = document.createTextNode("返回顶部");
    xReturnTopSpan.appendChild(spanText);
        
    xReturnTopBox.appendChild(xReturnTopA);
    xReturnTopBox.appendChild(xReturnTopSpan);
        
    xReturnTopEle.appendChild(xReturnTopBox);
}

function __createCss() {
    //TODO
}