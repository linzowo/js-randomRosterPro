// 通过id获取元素
var my$ = function(id){
    return document.getElementById(id);
}
// 获取一个指定格式的时间串
function getNewNum(date){
    // 如果获取的月日小时分钟秒小于10就在前面加上一个0
    return date<10?"0"+date:date;
}
function getDate(dt){
    // 获取年
    var year = dt.getFullYear();
    // 获取月
    var month = getNewNum(dt.getMonth());
    // 获取日
    var day = getNewNum(dt.getDay());
    // 获取小时
    var hour = getNewNum(dt.getHours());
    // 获取分钟
    var minute = getNewNum(dt.getMinutes());
    // 获取秒
    var second = getNewNum(dt.getSeconds());
    return year+"年"+month+"月"+day+"日 "+hour+":"+minute+":"+second;
}

// <!-- 设置任意标签中的任意文本内容 -->
function setInnerText(element,text){
    if(typeof element.innerText=="undefined"){
        element.textContent = text;
    }else{
        element.innerText = text;
    }
}

// <!-- 获取在意标签中间的文本内容 -->
function getInnerText(element){
    if(typeof element.innerText=="undefined"){
        return element.textContent;
    }else{
        return element.innerText;
    }
}

// <!-- 第一个子节点和第一个子元素的获取代码在ie8中可能不支持 -->
// 其余几个代码同理，主要针对部分代码在ie8中可能不支持的情况

// 代码1 获取任意一个父级元素的第一个子元素
function getFirstElementChild(element){
    if(element.firstElementChild){
        return element.firstElementChild;
    }else{
        // 如果其他浏览器使用firstChild获取到的不是元素，仍然是节点的情况下，我们就需要判断其获取到的是标签还是其他类型的节点
        var node = element.firstChild;  // 将获取到的第一个内容存储起来
        while(node&&node.nodeType!=1){  // 如果获取到的内容不是标签就检查下一个内容
            node = node.nextSibling;
        }// end while
        return node;
    }
}
// 代码2 获取任意一个父级元素的最后一个子元素
function getLastElementChild(element){
    if(element.lastElementChild){
        return element.lastElementChild;
    }else{
        var node = element.lastChild;
        while(node&&node.nodeType!=1){
            node = node.previousSibling;
        }// end while
        return node;
    }
}
// 代码3 获取任意一个元素的前一个兄弟元素
function getPreviousElement(element){
    if(element.previousElementSibling){
        return element.previousElementSibling;
    }else{
        var node = element.previousSibling;
        while(node&&node.nodeType!=1){
            node = node.previousSibling;
        }// end while
        return node;
    }
}
// 代码4 获取任意一个元素的后一个兄弟元素
function getNextElement(element){
    if(element.nextElementSibling){
        return element.nextElementSibling;
    }else{
        var node = element.nextSibling;
        while(node&&node.nodeType!=1){
            node = node.nextSibling;
        }// end while
        return node;
    }
}
//  代码5 获取任意一个元素的所有兄弟元素
function getBrotherElementAll(element){
    var broElementList = [];
    var preEle = getPreviousElement(element);
    var nextEle = getNextElement(element);
    while(preEle||nextEle){
        if(preEle){
            broElementList.push(preEle)
            preEle = getPreviousElement(preEle);
        }else if(nextEle){
            broElementList.push(nextEle);
            nextEle = getNextElement(nextEle);
        }// end if
    }// end while
    return broElementList;
}

// 为任意元素绑定任意事件，元素，事件类型，事件处理函数
function addEventListener(element,type,fn){
    if(element.addEventListener){
        // chrome,firefox等
        element.addEventListener(type,fn,false);
    }else if(element.attachEvent){
        // ie8
        element.attachEvent("on"+type,fn);
    }else{
        // 其他浏览器
        element["on"+type]=fn;
    }// end if
}

// 为任意元素解绑任意事件
function removeEventListener(element,type,fnName){
    if(element.removeEventListener){
        // chrome,firefox等
        element.removeEventListener(type,fnName,false);
    }else if(element.detachEvent){
        // ie8
        element.detachEvent("on"+type,fnName);
    }else{
        // 其他浏览器
        element["on"+type]=null;
    }// end if
}
// =================================================
//封装:获取任意一个元素的任意一个样式属性值
function getStyle(element,attr){
    // 判断浏览器是否支持该方法,支持则使用其
    return window.getComputedStyle ? window.getComputedStyle(element,null)[attr] : element.currentStyle[attr];
}