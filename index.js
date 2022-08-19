document.onload=function(){
    window.location.reload();
}


document.getElementsByClassName("hamburger")[0].addEventListener('click',function(){
    var sidebar=document.getElementsByClassName("sidebar")[0];
    sidebar.classList.toggle("sidebar-go");
    if(sidebar.classList.contains("sidebar-go")){
        document.getElementsByClassName("cross-icon")[0].style.display="none";
        document.getElementsByClassName("hamrburger-icon")[0].style.display="inline";
        
    }
    else{
        document.getElementsByClassName("cross-icon")[0].style.display="inline";
        document.getElementsByClassName("hamrburger-icon")[0].style.display="none";
    }
    
})