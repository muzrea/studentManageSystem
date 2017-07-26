/**
 * Created by muzrea on 17-7-26.
 */
/**
 * Created by muzrea on 17-7-24.
 */
'use strict';
document.getElementById("addInfo").onclick = function getStuInfo(){
    let myLocalStorage = localStorage;
    let sInfos = document.getElementById("sInfo").value;
    let item = sInfos.slice().split('，');
    let sno=`${item[1]}`;
    myLocalStorage.setItem(sno,sInfos);
    let s1 = myLocalStorage.sno;
    let str = '学生'+` ${sno}` +'成绩已被添加';
    alert(str);
    return false;
}
function addfilter(myLocalStorage){
    let result = new Boolean();
    for(let i in stuItem){
        for(let j=0;j<myLocalStorage.length;j++){
            if(stuItem[i]==myLocalStorage.sno(j)){
                result = true;
            }else{
                result = false;
            }
        }
    }
    return result;
}
//打印出所有学生信息
window.onload = function showstu(){
    //把localStorage中的每个学生的信息的字符串转化为对象allInfo
    let allInfo = [{}];
    let sno = [];
    let information = [];
    localStorage.removeItem(undefined);
    for(let j=0;j<localStorage.length;j++){
        sno[j] =  localStorage.key(j);
        allInfo[j]= {};
        allInfo[j].snos = sno[j];
        information[j] = localStorage[sno[j]].split('，');
    }
    for(let i in information){
        allInfo[i] = {};
        allInfo[i].name = information[i][0];
        allInfo[i].math = information[i][2];
        allInfo[i].chinese = information[i][3];
        allInfo[i].english = information[i][4];
        allInfo[i].code = information[i][5];
    }
    let str = `学生信息展示${allInfo[0].name}`;
    alert(str);
    alert(sss);
    //在页面显示
    for(let i in allInfo){
        let getStuInfo = "<tr><td>"+` ${allInfo[i].name} `+"</td></tr>"+"<tr><td>"+allInfo[i].math+"</td></tr>"+
            "<tr><td>"+allInfo[i].chinese+"</td></tr>";
    }

    $("#tableTest").append(getStuInfo);
}

document.getElementById("queryItem").onclick = function queryitems(){
    alert('success');
    let stuItems = document.getElementById("items").value;
    let stuItem = stuItems.slice().split('，');
    let requiredItems = {};
    //requiredItems = myLocalStorage.filter(addfilter);
    for(let j=0;j<stuItems.length;j++){
        let s = myLocalStorage.getItem(stuItems[j]);
    }
    alert(s[0]);
    for(let j=0;j<s.length;j++){
        s.sno(j).split('，');
        requiredItems[j].name = s.sno[0];
        requiredItems[j].math = s.sno[2];
        requiredItems[j].chinese = s.sno[3];
        requiredItems[j].english = s.sno[4];
        requiredItems[j].code = s.sno[5];
    }
    return requiredItems;
    let getStuInfo = "<tr></tr>>"+requiredItems.name;

    //创建tr节点
    var $tr = $("<tr></tr>");
    //遍历获取输入的内容
    $("#info input:text").each(function (requiredItems) {
        //添加td节点
        var $td = $("<td></td>");
        //将内容循环添加到创建好的TD中
        $td.append(requiredItems.name);
        //将td添加到创建好的TR 中
        $td.appendTo($tr);
    });
};



