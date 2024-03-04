 
 
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
