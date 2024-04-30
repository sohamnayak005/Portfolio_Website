window.addEventListener('scroll',()=>{
    let nav=document.getElementById("header");
    if(window.scrollY>=10){
       nav.classList.add('scroll_header');
    }
    else{
        nav.classList.remove('scroll_header');
    }
})


let tablinks=document.getElementsByClassName('tab_links');
let tabcontents=document.getElementsByClassName('tab_contents');

function OpenData(tabname){
    for(tablink of tablinks){
     tablink.classList.remove('active_link');
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove('active_tab');
    }
    console.log(event.currentTarget);
    event.currentTarget.classList.add('active_link');
    document.getElementById(tabname).classList.add('active_tab');
}