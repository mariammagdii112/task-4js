
document.querySelectorAll("button").forEach(function(item){
        item.onclick= function (){
                document.querySelector("#change").style.color=item.dataset.color;
                // document.querySelector("#change").style.color=item.getAttribute("id");
        }
})
// //////////////////////////////////
// /////////////////////////////تاني طريقه/////////////////////////////
// function validata(){
        
//         var userData= document.querySelector("#user-data").value;
//         var listData= document.querySelector("#list-data");
//         var myLi = document.createElement("li");  //<li></li>//
//         myLi.innerHTML= userData;
//         listData.appendChild(myLi);
//         return false;
// }

// تالت طريقه
document.querySelector("#form-data").addEventListener(submit,validata)
function validata(){
        var userData= document.querySelector("#user-data").value;
        var listData= document.querySelector("#list-data");
        
        if(userData==""){
                return false
        }else {
                var myLi = document.createElement("li");  //<li></li>//
                myLi.innerHTML= userData;
                listData.appendChild(myLi);
                document.querySelector("#user-data").value="";
                return false;
        }
}
// ////////////////////////////bom
