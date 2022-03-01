
var btn =  document.querySelector('#togBtn').addEventListener('click', 
function(){checkk();}
);


chrome.browserAction.onClicked.addListener(iconClicked)
function iconClicked(){
    var session_click=localStorage.getItem("click_stat")
    isChecked= document.querySelector('#togBtn').checked
    checkk()
}

let msg= {
    text: ""
}
var isChecked = false

function checkk(){
    var session_click=localStorage.getItem("click_stat")
    isChecked= document.querySelector('#togBtn').checked

    if(isChecked==true ){
        msg.text="hii"
        pingContentJs()
        
        console.log('clickeddddd')
        localStorage.setItem("click_stat", 1)
    }
    else if(session_click==1 || isChecked==false){
        msg.text="bye"
        pingContentJs()
        
        console.log("not clicked")
        localStorage.setItem("click_stat", 0)
    } 
    

}
setInterval(change_toggle_btn_by_session, 100) //  inefficient, but not gonna work on that 

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


