// define sections
for (var i = 1; i < 17; i++) {
    $('section').append('<div></div>');
}
$('section div').append("<img class='hole' src='image/hole.png'>");
$('section div').append('<img class="rat" src="image/rat.png">');

// all not show up
$('.rat').hide();

// puncher: mouse of player
$('body').mousedown(function () {
    $('body').css({
        cursor: 'url("./image/cursor-down.png"), auto'
    });
}).mouseup(function () {
    $('body').css({
        cursor: 'url("./image/cursor.png") ,auto'
    });
});

//position: 0~15
var num
var index
var object;
setInterval(function () {
    num = Math.ceil(Math.random() * 2);
    for (var i = 1; i <= num; i++) {
        index = Math.floor(Math.random() * 16);
        object = $('section div:nth-of-type(' + (index + 1) + ') .rat')
        object.slideDown();
        object.delay(2000).slideUp();
    }
}, 1000);

function closeBlock() {
    document.getElementById("box").style.display = "none";
}

// score record
var score = 0;
$('.rat').click(function () {

    $(this).hide();
    score += 10;
    $(" <span id='count'>total score: " + score + "</span>").replaceAll('span');
    $('#knock').append('<audio src="audio/knock.wav" autoplay="autoplay" ></audio>');
    setTimeout(function () {
        $('#knock').empty();
    }, 1000);
    if (score % 100 == 0)
        document.getElementById("box").style.display = "block";
});




