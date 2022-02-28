
var btn =  document.querySelector('#togBtn').addEventListener('click', 
function(){checkk();}
);

let msg= {
    text: ""
}
var isClicked = false

function checkk(){
    isClicked= document.querySelector('#togBtn').checked
    if(isClicked==true){
        msg.text="hii"
        pingContentJs()
        console.log('clickeddddd')
    }
    else if(isClicked==false){
        msg.text="bye"
        pingContentJs()
        console.log("not clicked")
    } 
}




function pingContentJs(){
  let params = {
      active: true,
      currentWindow: true
  }

  chrome.tabs.query(params, gotTabs)

  function gotTabs(tabs){
      chrome.tabs.sendMessage(tabs[0].id, msg)
  }
}