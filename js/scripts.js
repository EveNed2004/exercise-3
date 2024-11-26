console.log('hello');

$("#button-1").on("click", function(){
    $(this).addClass("button-active")
    $(".zalea").html("<img src='./images/base.png'>")
    $("#button-2, #button-3, #button-4, #button-5").removeClass("button-active");
});

$("#button-2").on("click", function(){
    $(this).addClass("button-active")
    $(".zalea").html("<img src='./images/1stgen.png'>")
    $("#button-1, #button-3, #button-4, #button-5").removeClass("button-active");
});

$("#button-3").on("click", function(){
    $(this).addClass("button-active")
    $(".zalea").html("<img src='./images/2ndgen.png'>")
    $("#button-2, #button-1, #button-4, #button-5").removeClass("button-active");
});

$("#button-4").on("click", function(){
    $(this).addClass("button-active")
    $(".zalea").html("<img src='./images/3rdgen.png'>") 
    $("#button-2, #button-3, #button-1, #button-5").removeClass("button-active");
});

$("#button-5").on("click", function(){
    $(this).addClass("button-active")
    $(".zalea").html("<img src='./images/4thgen.png'>")
    $("#button-2, #button-3, #button-1, #button-4").removeClass("button-active");
});
