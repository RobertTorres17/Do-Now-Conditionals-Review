$("button").click(function() {
    var waterStatus=$("input").val();
if ("Boiling!"){
    $("p").text("Boiling!");
}else if ("Frozen!"){
    $("p").text("Frozen!");
}else{
    $("p").text("Drink it!");
}
});


