
$(function () {
    $("button.tg").next().toggle();
    $("button.tg").next().next().toggle();
    $("box").ready(function () { document.getElementById("box").style.display = "none";})
    $("button.tg").on("click", function () {
        $(this).next().toggle();
        $(this).next().next().toggle();
    })
    $(".nav li").on("mouseover", function () {
        $(".nav li div").hide();  //所有子div都hide
        $(this).children("div").show(); //当前的show
    }).on("mouseout", function () {
        $(".nav li div").css("display", "none");
    })
    $("button.hover").on("click", function () {
        document.getElementById("box").style.display = "block";
    })
});
function closeBlock() {
    document.getElementById("box").style.display = "none";
}
