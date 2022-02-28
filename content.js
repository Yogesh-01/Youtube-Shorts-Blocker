

    function isNum(x){
        let xx = Number(x)
        if(isNaN(xx))return false;
        else return true;
    }

var stat= 0;

chrome.runtime.onMessage.addListener(gotMessage)
function gotMessage(message, sender, sendResponse){
   console.log(message.text)
   if(message.text == "hii")stat=1
   else if(message.text == "bye")stat=0
}

window.onload=function(){
    

                                          /** search result videos / Explore **/

     var intervalId = window.setInterval(function(){  // main repeating function
        var exec=stat
        if(exec==0)return
        
        let vid_list = document.querySelectorAll('#dismissible.style-scope.ytd-video-renderer')

        for(let i=0; i<vid_list.length; i++){
            let curr = vid_list[i];
            if(exec==1)curr.style.border = "1px solid rgba(196, 196, 196, 0.4)";

            let curr_vid_dur = curr.querySelector('span#text')
           // if(curr_vid_dur!=null) curr_vid_dur.style.border = "1px solid yellow";             //
            if(curr_vid_dur!=null) var time_str = curr_vid_dur.textContent 
            if(time_str == null)continue                   //                                               
            if(time_str.trim() == "SHORTS"){                            
                if(exec==1){
                    curr.style.border='3px solid red'
                    curr.remove()
                } 
               continue
               
            }

                let t1 = time_str[time_str.indexOf(':')-2]
               // console.log(t1)
                let t2 = time_str[time_str.indexOf(':')-1]
                //console.log(t2)
                let t3 = time_str[time_str.indexOf(':')+1]
                //console.log(t3)
                let t4 = time_str[time_str.indexOf(':')+2]
                //console.log(t4)
                let t5 = time_str[time_str.indexOf(':')+4]
               // console.log(t5)
                let t6 = time_str[time_str.indexOf(':')+5]
               // console.log(t6)
               console.log(time_str.trim())
                
                let h=0
                let m=0
                let s=0

                // if t6 number, then string is hours
                if(isNum(t5)){
                    // console.log("hours present")
                    //  console.log(Number(t1+t2))
                     h=Number(t1+t2)
                     m=Number(t3+t4)
                     s=Number(t5+t6)
                }
                else{
                     
                     m=Number(t1+t2)
                     s=Number(t3+t4)
                }

            console.log('h - '+h+' m- '+m+' s- '+s)
    
         

           if((m<=0 && h==0)||(m==1 && h==0 && s<=40)){
            if(exec==1){
                curr.style.border='1px solid red'
                curr.remove()
            } 
           }
           
          // console.log(curr.querySelector('span#text'))

        }

     
      }, 500);
   


                                                   /** For recommendation videos at HOME  **/


   var intervalId_home = window.setInterval(function(){  // main repeating function
    var exec=stat
    if(exec==0)return
    let vid_list_home = document.querySelectorAll('ytd-rich-item-renderer.style-scope.ytd-rich-grid-row')
   

    for(let i=0; i<vid_list_home.length; i++){
        let curr_home = vid_list_home[i];
        if(exec==1)curr_home.style.border = "1px solid rgba(196, 196, 196, 0.4)";

        let curr_vid_dur_home = curr_home.querySelector('span#text')
        //if(curr_vid_dur_home!=null)curr_vid_dur_home.style.border = "1px solid yellow";
        if(curr_vid_dur_home!=null) var time_str_home = curr_vid_dur_home.textContent
        if(time_str_home==null) continue;                                                           ///
        if(time_str_home.trim() == "SHORTS"){
            if(exec==1){
                curr_home.style.border='3px solid red'
                curr_home.remove()
            } 
           continue
           
        }

            let t1_home = time_str_home[time_str_home.indexOf(':')-2]
           // console.log(t1)
            let t2_home = time_str_home[time_str_home.indexOf(':')-1]
            //console.log(t2)
            let t3_home = time_str_home[time_str_home.indexOf(':')+1]
            //console.log(t3)
            let t4_home = time_str_home[time_str_home.indexOf(':')+2]
            //console.log(t4)
            let t5_home = time_str_home[time_str_home.indexOf(':')+4]
           // console.log(t5)
            let t6_home = time_str_home[time_str_home.indexOf(':')+5]
           // console.log(t6)
           console.log(time_str_home.trim())
            
            let h_home=0
            let m_home=0
            let s_home=0

            // if t6 number, then string is hours
            if(isNum(t5_home)){
                 console.log("hours present")
                 console.log(Number(t1_home+t2_home))
                 h_home=Number(t1_home+t2_home)
                 m_home=Number(t3_home+t4_home)
                 s_home=Number(t5_home+t6_home)
            }
            else{
                 
                 m_home=Number(t1_home+t2_home)
                 s_home=Number(t3_home+t4_home)
            }

        console.log('h - '+h_home+' m- '+m_home+' s- '+s_home)

       //console.log(vid_list.length)

       if((m_home<=0 && h_home==0)||(m_home==1 && h_home==0 && s_home<=40)){
        if(exec==1){
            curr_home.style.border='1px solid red'
            curr_home.remove()
        } 
       }
       
     //  console.log(curr_home.querySelector('span#text'))

    }

 
  }, 500);

                                                /*** NEWS AND OTHER AT HOME ***/

                                                
var intervalId_home = window.setInterval(function(){  // main repeating function
    var exec=stat
    if(exec==0)return
    let vid_list_news = document.querySelectorAll('ytd-rich-item-renderer.style-scope.ytd-rich-shelf-renderer')
   

    for(let i=0; i<vid_list_news.length; i++){
        let curr_news = vid_list_news[i];
        if(exec==1) curr_news.style.border = "1px solid rgba(196, 196, 196, 0.4)";

        let curr_vid_dur_news = curr_news.querySelector('span#text')
        //if(curr_vid_dur_news!=null)curr_vid_dur_news.style.border = "1px solid yellow";
        if(curr_vid_dur_news!=null) var time_str_news = curr_vid_dur_news.textContent
        if(time_str_news==null) continue;                                                           ///
        if(time_str_news.trim() == "SHORTS"){
            if(exec==1){
                curr_news.style.border='3px solid red'
                curr_news.remove()
            } 
           continue
           
        }

            let t1_news = time_str_news[time_str_news.indexOf(':')-2]
           // console.log(t1)
            let t2_news = time_str_news[time_str_news.indexOf(':')-1]
            //console.log(t2)
            let t3_news = time_str_news[time_str_news.indexOf(':')+1]
            //console.log(t3)
            let t4_news = time_str_news[time_str_news.indexOf(':')+2]
            //console.log(t4)
            let t5_news = time_str_news[time_str_news.indexOf(':')+4]
           // console.log(t5)
            let t6_news = time_str_news[time_str_news.indexOf(':')+5]
           // console.log(t6)
         //  console.log(time_str_news.trim())
            
            let h_news=0
            let m_news=0
            let s_news=0

            // if t6 number, then string is hours
            if(isNum(t5_news)){
                 console.log("hours present")
                 console.log(Number(t1_news+t2_news))
                 h_news=Number(t1_news+t2_news)
                 m_news=Number(t3_news+t4_news)
                 s_news=Number(t5_news+t6_news)
            }
            else{
                 
                 m_news=Number(t1_news+t2_news)
                 s_news=Number(t3_news+t4_news)
            }

        console.log('h - '+h_news+' m- '+m_news+' s- '+s_news)

       if((m_news<=0 && h_news==0)||(m_news==1 && h_news==0 && s_news<=40)){
        if(exec==1){
            curr_news.style.border='1px solid red'
            curr_news.remove()
        } 
       }
       
    //   console.log(curr_news.querySelector('span#text'))

    }

 
  }, 500);


                                                        /** Subscription  page  **/

  var intervalId_subs = window.setInterval(function(){  // main repeating function
    var exec=stat
    if(exec==0)return
    let vid_list_subs = document.querySelectorAll('#items .style-scope.ytd-grid-renderer')
   

    for(let i=0; i<vid_list_subs.length; i++){
        let curr_subs = vid_list_subs[i];
        if(exec==1) curr_subs.style.border = "1px solid rgba(196, 196, 196, 0.4)";

        let curr_vid_dur_subs = curr_subs.querySelector('span#text')
       // curr_vid_dur_subs.style.border = "1px solid yellow";
        var time_str_subs = curr_vid_dur_subs.textContent
        if(time_str_subs==null) continue
        if(time_str_subs.trim() == "SHORTS"){
            if(exec==1){
               curr_subs.style.border='1px solid red'
               curr_subs.remove()
            } 
           continue
           
        }

            let t1_subs = time_str_subs[time_str_subs.indexOf(':')-2]
           // console.log(t1)
            let t2_subs = time_str_subs[time_str_subs.indexOf(':')-1]
            //console.log(t2)
            let t3_subs = time_str_subs[time_str_subs.indexOf(':')+1]
            //console.log(t3)
            let t4_subs = time_str_subs[time_str_subs.indexOf(':')+2]
            //console.log(t4)
            let t5_subs = time_str_subs[time_str_subs.indexOf(':')+4]
           // console.log(t5)
            let t6_subs = time_str_subs[time_str_subs.indexOf(':')+5]
           // console.log(t6)
         //  console.log(time_str_subs.trim())
            
            let h_subs=0
            let m_subs=0
            let s_subs=0

            // if t6 number, then string is hours
            if(isNum(t5_subs)){
                 console.log("hours present")
                 console.log(Number(t1_subs+t2_subs))
                 h_subs=Number(t1_subs+t2_subs)
                 m_subs=Number(t3_subs+t4_subs)
                 s_subs=Number(t5_subs+t6_subs)
            }
            else{
                 
                 m_subs=Number(t1_subs+t2_subs)
                 s_subs=Number(t3_subs+t4_subs)
            }

        console.log('h - '+h_subs+' m- '+m_subs+' s- '+s_subs)


       if((m_subs<=0 && h_subs==0)||(m_subs==1 && h_subs==0 && s_subs<=40)){
        if(exec==1){
            curr_subs.style.border='2px solid red'
            curr_subs.remove()
        } 
       }
       
      // console.log(curr_subs.querySelector('span#text'))

    }


  }, 500);




                                           /***  In video  side bar recommendations  ***/


  var intervalId_sidebar = window.setInterval(function(){  // main repeating function
    var exec=stat
    if(exec==0)return
    let vid_list_sidebar = document.querySelectorAll('#dismissible.style-scope.ytd-compact-video-renderer')  //redo
   

    for(let i=0; i<vid_list_sidebar.length; i++){
        let curr_sidebar = vid_list_sidebar[i];
        if(exec==1) curr_sidebar.style.border = "1px solid rgba(196, 196, 196, 0.4)";

        let curr_vid_dur_sidebar = curr_sidebar.querySelector('span#text')
        if(curr_vid_dur_sidebar==null)continue
        //if(curr_vid_dur_sidebar!=null)curr_vid_dur_sidebar.style.border = "1px solid yellow";
        if(curr_vid_dur_sidebar!=null) var time_str_sidebar = curr_vid_dur_sidebar.textContent
        if(time_str_sidebar==null) continue                                         //
        if(time_str_sidebar.trim() == "SHORTS"){                          //
            if(exec==1){
                curr_sidebar.style.border='3px solid red'
                curr_sidebar.remove()
            } 
           continue
           
           
        }

            let t1_sidebar = time_str_sidebar[time_str_sidebar.indexOf(':')-2]
           // console.log(t1)
            let t2_sidebar = time_str_sidebar[time_str_sidebar.indexOf(':')-1]
            //console.log(t2)
            let t3_sidebar = time_str_sidebar[time_str_sidebar.indexOf(':')+1]
            //console.log(t3)
            let t4_sidebar = time_str_sidebar[time_str_sidebar.indexOf(':')+2]
            //console.log(t4)
            let t5_sidebar = time_str_sidebar[time_str_sidebar.indexOf(':')+4]
           // console.log(t5)
            let t6_sidebar = time_str_sidebar[time_str_sidebar.indexOf(':')+5]
           // console.log(t6)
           console.log(time_str_sidebar.trim())
            
            let h_sidebar=0
            let m_sidebar=0
            let s_sidebar=0

            // if t6 number, then string is hours
            if(isNum(t5_sidebar)){
                 console.log("hours present")
                 console.log(Number(t1_sidebar+t2_sidebar))
                 h_sidebar=Number(t1_sidebar+t2_sidebar)
                 m_sidebar=Number(t3_sidebar+t4_sidebar)
                 s_sidebar=Number(t5_sidebar+t6_sidebar)
            }
            else{
                 
                 m_sidebar=Number(t1_sidebar+t2_sidebar)
                 s_sidebar=Number(t3_sidebar+t4_sidebar)
            }

        console.log('h - '+h_sidebar+' m- '+m_sidebar+' s- '+s_sidebar)

       //console.log(vid_list.length)

       if((m_sidebar<=0 && h_sidebar==0)||(m_sidebar==1 && h_sidebar==0 && s_sidebar<=40)){
        if(exec==1){
            curr_sidebar.style.border='1px solid red'
            curr_sidebar.remove()
        } 
       }
       
    //   console.log(curr_sidebar.querySelector('span#text'))

    }

 
  }, 500);


                            /***  SHORTS PLAYING OVERLAY***/

  var intervalId_reel = window.setInterval(function(){  // main repeating function
    var exec=stat
    if(exec==0)return
    let vid_list_reel = document.querySelectorAll('.reel-video-in-sequence.style-scope.ytd-shorts')  
   

    for(let i=0; i<vid_list_reel.length; i++){
        let curr_reel = vid_list_reel[i];
        if(exec==1){
           curr_reel.style.border = "2px solid orange";
           curr_reel.remove()
        } 


    }

 
  }, 500);



}   // will run after DOM loads

  