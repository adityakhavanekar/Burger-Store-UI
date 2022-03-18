$(function(){
    let ct=1;
    $(".items-2").hide();
    $(".more-btn").click(function(){
        let val = $(".more-btn").html();
        console.log("val")
        if (ct==1){
            $(".items-2").slideDown(1000,function(){
                $(".more-btn").html("&#11165")
                ct = 2;
            });
        }
        else{
            $(".items-2").slideUp(1000,function(){
                $(".more-btn").html("&#11167")
                ct=1;
            });
        }
    });
    $(".add").click(function(){
        alert("Added to cart");
        return false;
    });

});

function added(){
    alert("Added to cart");
};