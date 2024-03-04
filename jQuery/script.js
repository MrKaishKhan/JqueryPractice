 
 
 // *************** 01 ***************
 // 2. $(document).ready(function(){});
 // 1. $(function(){}) first load then show the element...

//   // jQuery methods go here...

// 
$(document).ready(function(){
    let a = $(".first").html();
   
    console.log(a)
});


// *********** 02 selector ***************

$(document).ready(function(){
    $("li:eq(2)").css("color", "red");
});


// *********** 03 selector ***************
 $(document).ready(function(){
    $(".top-01").click(function(){
    $(".top-01").css("background-color", "blue");
    });

    $(".top-01").dblclick(function(){
    $(".top-01").css("background-color", "gray");
    });

    // right click
    $(".top-01").contextmenu(function(){
    $(".top-01").css("background-color", "purple");
    });


    $(".top-01").mouseenter(function(){
    $(".top-01").css("background-color", "red");
    });


    $(".top-01").mouseleave(function(){
    $(".top-01").css("background-color", "white");
    });

 })
 
 // *********** 04 selector ***************
 // keyboard events file****************






    