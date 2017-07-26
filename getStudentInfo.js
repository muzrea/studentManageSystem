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
    let allInfo = {};
    let sno = [];
    let information = [];
    localStorage.removeItem(undefined);
    for(let j=0;j<localStorage.length;j++){
        sno[j] =  localStorage.key(j);
        allInfo.snos = [];
        allInfo.snos[j] = sno[j];
        information[j] = localStorage[sno[j]].split('，');
    }
    allInfo.name =[];
    allInfo.math =[];
    allInfo.chinese =[];
    allInfo.english =[];
    allInfo.code =[];
    for(let i in information){
        allInfo.name[i] = information[i][0];
        allInfo.math[i] = information[i][4];
        allInfo.chinese[i] = information[i][5];
        allInfo.english[i] = information[i][6];
        allInfo.code[i] = information[i][7];
    }
    //在页面显示
    let getStuInfo = ' ';
    for(let i=0;i<allInfo.name.length;i++){
        getStuInfo += "<tr>"+"<td>"+` ${allInfo.name[i]}`+"</td>"
            +"<td>" +` ${allInfo.math[i]}`+"</td>"
            +"<td>" +` ${allInfo.chinese[i]}`+"</td>"
            +"<td>" +` ${allInfo.english[i]}`+"</td>"
            +"<td>" +` ${allInfo.code[i]}`+"</td>"+"</tr>";
    }
    $("#myTable").append(getStuInfo);
    return allInfo;
}

//通过学号查询学生信息
document.getElementById("queryItem").onclick = function getStuInfo(){
    let inputSno = document.getElementById("items").value;
    inputSno.split('，');
    let allInfo = showstu();
    let requiredItems = {};
    for(let i in inputSno){
        for(let j in allInfo){
            if(inputSno[i]==allInfo.snos[j]){
                requiredItems.push(allInfo[j]);
            }
        }
    }
}



