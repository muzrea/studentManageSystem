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
window.onload = function showStu(){
    //把localStorage中的每个学生的信息的字符串转化为对象allInfo
    let allInfo = {};
    let sno = [];
    let information = [];
    localStorage.removeItem(undefined);
    for(let j=0;j<localStorage.length;j++){
        sno[j] =  localStorage.key(j);
        allInfo[j] = {};
        allInfo[j].snos = sno[j];
        information[j] = localStorage[sno[j]].split('，');
    }
    for(let i=0;i<information.length;i++){
        allInfo[i] = {};
        allInfo[i].name = information[i][0];
        allInfo[i].math = information[i][4];
        allInfo[i].chinese = information[i][5];
        allInfo[i].english = information[i][6];
        allInfo[i].code = information[i][7];
    }
    //在页面显示
    let getStuInfo = ' ';
    for(let i=0;i<information.length;i++){
         getStuInfo += "<tr>" +"<td>" +` ${allInfo[i].name}`+"</td>"
             +"<td>" +` ${allInfo[i].math}`+"</td>"
             +"<td>" +` ${allInfo[i].chinese}`+"</td>"
             +"<td>" +` ${allInfo[i].english}`+"</td>"
             +"<td>" +` ${allInfo[i].code}`+"</td>"+"</tr>";
    }
    $("#myTable").append(getStuInfo);
    return allInfo;
}

//通过学号查询学生信息
document.getElementById("queryItem").onclick = function getStuInfo(){
    let inputSno = document.getElementById("items").value;
    inputSno.split('，');
    for(let i in inputSno){
        document.getElementById('myTable').deleteRow(i+1);
    }
    let allInfo = showStu();
    let requiredItems = {};
    for(let i in inputSno){
        for(let j in allInfo){
            if(inputSno[i]==allInfo[j].snos){
                requiredItems.push(allInfo[j]);
            }
        }
    }
    //在页面显示
    let getRequiredItems = ' ';
    for(let i=0;i<inputSno.length;i++){
        getRequiredItems += "<tr class='active'>" +"<td>" +` ${getRequiredItems[i].name}`+"</td>"
            +"<td>" +` ${getRequiredItems[i].math}`+"</td>"
            +"<td>" +` ${getRequiredItems[i].chinese}`+"</td>"
            +"<td>" +` ${getRequiredItems[i].english}`+"</td>"
            +"<td>" +` ${getRequiredItems[i].code}`+"</td>"
            +"<td><input type='button' value='修改' ></input></td>"
            +"<td><input type='button' value='删除' ></td>"+"</tr>";
    }
    $("#myTable").append(getRequiredItems);
}



