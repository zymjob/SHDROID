(function(){
    var docElement = document.documentElement;  
    var deviceWidth = window.innerWidth;
    console.log(docElement)
    console.log(deviceWidth)
    var initRem = 32;
    var designWidth = 320;
    if(deviceWidth != designWidth){
        docElement.style.fontSize = deviceWidth / initRem + 'px';
    }else{
        docElement.style.fontSize = designWidth / initRem + 'px';
    }
     
})() 