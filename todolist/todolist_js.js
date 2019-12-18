window.onload=function operation() {
    let area = document.getElementById("showarea");
       for(let i=0;i<this.localStorage.length;i++)
       {
          
               let newDiv = document.createElement("div");
               newDiv.className="block";
               let text = this.localStorage.getItem(this.localStorage.key(i));
               let newtext=document.createTextNode(text);
               let modifyButton = document.createElement("button");
               let deleteButton = document.createElement("button");
               let modifytext = document.createTextNode("修改");
               let deletetext = document.createTextNode("删除");
               let textDiv = document.createElement("div");
               modifyButton.appendChild(modifytext);
               modifyButton.className = "button";
               deleteButton.appendChild(deletetext);
               deleteButton.className = "button";
               textDiv.className = "text";
               textDiv.appendChild(newtext);
               newDiv.appendChild(textDiv);
               newDiv.appendChild(modifyButton);
               newDiv.appendChild(deleteButton);
               area.appendChild(newDiv);
               modifyButton.addEventListener("click", function (e) {
                   let modifyValue = prompt("请输入你要修改的值", "");
                   let key = e.target.parentNode.firstChild.firstChild.nodeValue;
                   window.localStorage.removeItem(key);
                   e.target.parentNode.firstChild.firstChild.nodeValue = modifyValue;
                   window.localStorage.setItem(modifyValue,modifyValue);
               })
               deleteButton.addEventListener("click", function (e) {
                   e.target.parentNode.parentNode.removeChild(e.target.parentNode);
                   let key = e.target.parentNode.firstChild.firstChild.nodeValue;
                   window.localStorage.removeItem(key);

               })
               
           
       }
     
     let aDD=document.getElementsByClassName("add")[0];
    aDD.onclick = function add() {
        let addValue = prompt("请输入你要添加的事项", "");
        let newDiv = document.createElement("div");
       
        newDiv.className = "block";
        let addText = document.createTextNode(addValue);
        let modifyButton=document.createElement("button");
        let deleteButton=document.createElement("button");
        let modifytext=document.createTextNode("修改");
        let deletetext=document.createTextNode("删除");
        let textDiv=document.createElement("div");
        modifyButton.appendChild(modifytext);
        modifyButton.className="button";
        deleteButton.appendChild(deletetext);
        deleteButton.className="button";
        textDiv.className="text";
        window.localStorage.setItem( addValue,addValue);
        textDiv.appendChild(addText);
        newDiv.appendChild(textDiv);
        newDiv.appendChild(modifyButton);
        newDiv.appendChild(deleteButton);
        area.appendChild(newDiv);
        modifyButton.addEventListener("click",function(e){
            let modifyValue=prompt("请输入你要修改的值","");
            let key = e.target.parentNode.firstChild.firstChild.nodeValue;
            window.localStorage.removeItem(key);
            e.target.parentNode.firstChild.firstChild.nodeValue=modifyValue;
            window.localStorage.setItem(modifyValue, modifyValue);
        })
        deleteButton.addEventListener("click",function(e) {
            e.target.parentNode.parentNode.removeChild(e.target.parentNode);
            let key=e.target.parentNode.firstChild.firstChild.nodeValue;
            window.localStorage.removeItem(key);
        })
       
        
    }
    
}