function addLink(income,type,info,link){
    let here=document.getElementById(income);
    let newLink = document.createElement("a");
    newLink.appendChild(document.createTextNode(info));
    newLink.href=link;
    let newListItem = document.createElement(type);
    newListItem.appendChild(newLink);
    here.appendChild(newListItem);
}
getInfo=fetch("https://docs.google.com/spreadsheets/d/1oyQ4lXR-65aMETwaSTrQRAN8a5_05NmQ3ABRp6pI5TE/export?format=csv")
.then(response=>response.text())
.then(text=>{
    console.log(text);
    webSiteList=text.split("\r\n");
    for (count=1;count<=webSiteList.length-1;count++)
    {
        curSite=webSiteList[count].split(",");
        curNode=curSite[2];
        link=curSite[1];
        desc=curSite[0];
        addLink(curNode,"li",desc,link);
    }
});
