console.log('hello');

$("#button-1").on("click", function(){
    $(this).addClass("button-active")
    $(".zalea").html("<img src='../images/base.PNG'>")
    $("#button-2, #button-3, #button-4, #button-5").removeClass("button-active");
});

$("#button-2").on("click", function(){
    $(this).addClass("button-active")
    $(".zalea").html("<img src='../images/1st-gen.PNG'>")
    $("#button-1, #button-3, #button-4, #button-5").removeClass("button-active");
});

$("#button-3").on("click", function(){
    $(this).addClass("button-active")
    $(".zalea").html("<img src='../images/2nd-gen.PNG'>")
    $("#button-2, #button-1, #button-4, #button-5").removeClass("button-active");
});

$("#button-4").on("click", function(){
    $(this).addClass("button-active")
    $(".zalea").html("<img src='../images/3rd-gen.PNG'>") 
    $("#button-2, #button-3, #button-1, #button-5").removeClass("button-active");
});

$("#button-5").on("click", function(){
    $(this).addClass("button-active")
    $(".zalea").html("<img src='../images/4th-gen.PNG'>")
    $("#button-2, #button-3, #button-1, #button-4").removeClass("button-active");
});
