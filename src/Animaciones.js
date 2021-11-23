
var scrollPos = 0;

window.addEventListener('scroll', function(){
    if ((document.body.getBoundingClientRect()).top > scrollPos){
        document.getElementById('Service').innerHTML = '<h1>hola</h1>';

    }
    else{
        document.getElementById('root').style.backgroundColor = "#b897e8";
        console.log("hola");
    }

    scrollPos = (document.body.getBoundingClientRect()).top;
});
