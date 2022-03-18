$(function(){
    $(".take").hide();
    $("#d-dine").click(function(){
        $(".take").slideUp(300,function(){
            $("#change-head").html("DINE IN:")
            $(".dine").slideDown(300)
            });
        })
    $("#d-del").click(function(){
        $(".dine").slideUp(300,function(){
            $("#change-head").html("DELIVERY:")
            $(".take").slideDown(300);
        })
    })
})