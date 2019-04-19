
// 初始化数据
// 学生姓名列表
var rosterList = ["张","李","王","林"];
// 判断是否开始随机的标志
var flag = false;

// =================================
// 获取所需要的元素
// 花名册表格
var rosterTable = my$("roster").children[1];
// 按钮
var btn = my$("btn");
// 结果展示区
var resultTr = my$("result").children[0].getElementsByTagName("tr")[0];
// 表格td元素列表
var trList = my$("roster").children[1].getElementsByTagName("tr");
// 表格td元素列表
var tdList = my$("roster").children[1].getElementsByTagName("td");
// 选项列表
var ckList = my$("chooseBox").children[1].getElementsByTagName("input");
// 测试
// console.log(result);
// document
// ======================================

// 动态的生成学生花名册
for(var i=0;i<rosterList.length;i++){
    // 第一层循环控制行数
    var tr = document.createElement("tr");
    rosterTable.appendChild(tr);
    for(var j=0;j<12;j++){
        // 第二层循环控制列数
        var td = document.createElement("td");
        tr.appendChild(td);
        td.innerHTML = rosterList[i]+(j+1);
    }
}

// =================主事件函数区===================
// 为按钮注册点击事件
btn.onclick = function(){
    flag = !flag;
    this.value = flag?"停止":"开始";
    clearInterval(btn.timeId);
    if(flag){
        btn.timeId = setInterval(function(){
            // 检查是哪一个选项被选中了被选中了
            switch(true)
            {
                case ckList[0].checked: ck1Handle(); break;
                case ckList[1].checked: ck2Handle(); break;
                case ckList[2].checked: ck3Handle(); break;
                case ckList[3].checked: ck4Handle(); break;
            }
        },30)
    }else{
        clearInterval(btn.timeId);
    }
}

// ========函数封装区==============
function ck1Handle(){//选中第1个==>随机选中一个
    // 在花名册内容个数范围内生成一个随机数
    var random = parseInt(Math.random()*tdList.length);
    // 将随机数指向的元素插入展示区
    resultTr.innerHTML = "";
    resultTr.appendChild(tdList[random].cloneNode(true));
}
function ck2Handle(){//选中第2个==》随机选中三个
    // 清空展示区
    resultTr.innerHTML = "";
    for(var i=0;i<3;i++){
        // 在花名册内容个数范围内生成一个随机数
        var random = parseInt(Math.random()*tdList.length);
        // 将随机数指向的元素插入展示区
        resultTr.appendChild(tdList[random].cloneNode(true));
    }// end for 
}
function ck3Handle(){//选中第3个==》随机选中一行
    // 在花名册行数范围内生成一个随机数
    var random = parseInt(Math.random()*trList.length);
    // 将随机数指向的元素插入展示区
    resultTr.innerHTML = "";
    // 将此列的元素的clone版依次追加到展示区中
    for(var i=0;i<trList[random].children.length;i++){
        resultTr.appendChild(trList[random].children[i].cloneNode(true));
    }
}
function ck4Handle(){//选中第4个==》随机选中一列
    // 清空展示区
    resultTr.innerHTML = "";
    // 在花名册列数范围内生成一个随机数
    var random = parseInt(Math.random()*12);
    for(var i=0;i<trList.length;i++){
        // 将随机数指向的元素插入展示区
        resultTr.appendChild(trList[i].children[random].cloneNode(true));
    }// end for 
}