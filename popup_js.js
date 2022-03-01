
var btn =  document.querySelector('#togBtn').addEventListener('click', 
function(){checkk();}
);
//localStorage.setItem("click_stat",-1)

var session_;
chrome.storage.sync.get(['click_status'],function(result){session_ = result.click_status})
if(session_==null)chrome.storage.sync.set({click_status: -1})

chrome.browserAction.onClicked.addListener(iconClicked)
function iconClicked(){
    if(chrome.storage.sync.get(['click_status'])==1)document.querySelector('#togBtn').checked=true
    if(chrome.storage.sync.get(['click_status'])==0)document.querySelector('#togBtn').checked=false
}

// local storage dies after popup closes, so use other storage

let msg= {
    text: ""
}
var isChecked = false

function checkk(){
    var session_click=localStorage.getItem("click_stat")
    isChecked= document.querySelector('#togBtn').checked
    if(session_click==-1 && isChecked==true){
        msg.text="hii"
        pingContentJs()
        //document.querySelector('#togBtn').checked=truee
        console.log("clickeddddd")
        localStorage.setItem("click_stat", 1)
    } 
   else if(isChecked==false && session_click==1){
        msg.text="bye"
        pingContentJs()
        document.querySelector('#togBtn').checked=false
        console.log('not clicked')
        localStorage.setItem("click_stat", 0)
    }
 
    if(isChecked==true || session_click==-1){
        msg.text="hii"
        pingContentJs()
        document.querySelector('#togBtn').checked=true
        console.log('clickeddddd')
        localStorage.setItem("click_stat", 1)
    }
    else if(session_click==1 || isChecked==false){
        msg.text="bye"
        pingContentJs()
        document.querySelector('#togBtn').checked=false
        console.log("not clicked")
        localStorage.setItem("click_stat", 0)
    } 
    

}
setInterval(change_toggle_btn_by_session, 500)

function change_toggle_btn_by_session(){
    console.log(localStorage.getItem("click_stat"))
    if(localStorage.getItem("click_stat")==1)document.querySelector('#togBtn').checked=true
    if(localStorage.getItem("click_stat")==0)document.querySelector('#togBtn').checked=false
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


