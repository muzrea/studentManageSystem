/**
 * Created by muzrea on 17-7-24.
 */
'use strict';
function getStuInfo(){
    let sInfos = document.getElementById("sInfo").value;
    let item = sInfos.slice().split('，');
    let sno=`${item[1]}`;
    localStorage.setItem(sno,sInfos);
    let s1 = localStorage.sInfo;
    let str = '学生'+s1.toString()+'成绩已被添加';
    alert(str);
}
getStuInfo();

document.getElementById("queryItem").onclick= function queryitems(){
    alert(success);
    let stuItems = document.getElementById("items").value;
    let stuItem = stuItems.slice().split('，');
    let requiredItems = {};
    for(let i in stuItem){
        for(let j=0;j<localStorage.length;j++){
            if(stuItem[i]==localStorage.sno(j)){
                requiredItems[i].sno=stuItem[i];
                requiredItems.push(localStorage.sno(j));
            }
        }
    }
    return requiredItems;
    // function showItems(requiredItems){
    // }
    function showTable(requiredItems) {
        wi('<table border="1" width="300" style="border-collapse:collapse"><tbody id="table">');
        for (let i = 0; i < requiredItems.length; i++) {

            wi('<tr bgcolor=' + bg + '><td>第' + (i + 1) + '行</td></tr>');
        }
        wi('</tbody></table><br />');
        wi('<input type="button" value="Add" id="add" />');
    }

}




function wi(str) {
    return document.write(str);
}
showTable(10);
var add = document.getElementById("add");
add.onclick = function() {
    let n = n + 1;

    var table = document.getElementById("table");
    var tr = document.createElement("tr");
    tr.bgColor = bg;
    var td = document.createElement("td");
    td.innerHTML = '第' + (10 + n) + '行';
    tr.appendChild(td);
    table.appendChild(tr);
}


document.addEventListener("DOMContentLoaded", function() {
    // execute when DOM content is loaded
    document.getElementById('my-form').addEventListener('submit', function (event) {

        event.preventDefault();
        let firstNameArray = document.getElementsByName('firstname');
        printSomething(firstNameArray[0].value);

        return false;
    })

});








