$(".ofcourse-button").hide();
$(".nah-button").hide();
$(".optionThree").hide();
$(".popcorn").hide();
$(".going").hide();
$(".notgoing").hide();
$(".good-choice").hide();
$(".bad-choice").hide();
$(".play-again").hide();

$(".start-button").click(function() {
    $(".title").text("Michael is calling you. Do you want to answer?");   $(".firstImage").attr("src","https://i.pinimg.com/originals/c3/42/10/c34210208859d6dc48be7eaf8196c441.jpg");
    $(".start-button").hide();
    $(".ofcourse-button").show("slow");
    $(".nah-button").show("slow");    
});

$(".nah-button").click(function() {
    $(".title").text("You decide to ignore Michael and you guys don't talk anymore after that, causing you guys' friendship to deteriorate over time.Try again."); $(".firstImage").attr("src","https://i.pinimg.com/originals/e1/ce/e0/e1cee0b20a3a292f6d270e877853b335.gif");
    $(".nah-button").hide();
    $(".ofcourse-button").hide();
    $(".play-again").show();
});

$(".ofcourse-button").click(function(){
    $(".title").text("Once you answer he asks if you would like to go out with him to see a movie.What will you say back?");
    $(".firstImage").attr("src","https://media2.giphy.com/media/pcLw0jLBelkbK/200w.gif?cid=82a1493bjpnuqqj4i8iihui5vufpp510rkbdl3zgtxcz3noc&rid=200w.gif&ct=g");
    $(".ofcourse-button").hide();
    $(".nah-button").hide();
    $(".going").show("slow");
    $(".notgoing").show("slow");
});

$(".going").click(function(){
    $(".title").text("He asks if 8pm is okay and you agree. You guys then arrive and Michael buys you both some popcorn to enjoy.Click continue to go to the next part.");
    $(".firstImage").attr("src","https://media1.giphy.com/media/daG6C0PH6vEU8/giphy.gif?cid=ecf05e478chli4aqe6fgtssqkx681udianw14ltltf3emjvn&rid=giphy.gif&ct=g");
    $(".going").hide();
    $(".notgoing").hide();
    $(".popcorn").show("slow");
});

$(".notgoing").click(function(){
    $(".title").text("You make up an excuse not to go because you have something better to do but you didn't realize how sad this made Michael feel.Try again.");
$(".firstImage").attr("src","https://media.tumblr.com/tumblr_mdyk88pqYm1qdiylb.gif");
    $(".notgoing").hide();
    $(".going").hide();
    $(".play-again").show();
});

$(".popcorn").click(function(){
    $(".title").text("As you too sit and enjoy the movie Michael starts to act weird so you ask him what happened,he replied that he needs to talk to you,so you two leave the theater and that's when Michael asks you to be his significant other.What will you say back?");
$(".firstImage").attr("src","https://media0.giphy.com/media/guufsF0Az3Lpu/200.webp?cid=ecf05e47pq302dzn0zwld1f2ho0g2qavs11i18enzg3qtyz5&rid=200.webp&ct=g");
    $(".popcorn").hide();
    $(".good-choice").show();
    $(".bad-choice").show();
});

$(".good-choice").click(function(){
    $(".title").text("You accept to be his significant other and that makes Michael very content.Good job you got the good ending!");
$(".firstImage").attr("src","http://38.media.tumblr.com/tumblr_m6d874gqRJ1qcvaxho1_500.gif");
    $(".good-choice").hide();
    $(".bad-choice").hide();
    $(".play-again").show();
});

$(".bad-choice").click(function(){
    $(".title").text("You tell him that you only care about him as a friend and nothing more. Michael does not appreciate your answer and he turns into a werewolf and kills you.You got the bad ending,try the game all over again to get the good ending.");
$(".firstImage").attr("src","https://i1.wp.com/halloweenshindig.com/wp-content/uploads/2018/07/thriller_wolf1.gif");
    $(".good-choice").hide();
    $(".bad-choice").hide();
    $(".play-again").show();
});

$(".play-again").click(function(){
$(".firstImage").attr("src","https://thumbs.gfycat.com/AltruisticAngryBluetonguelizard-size_restricted.gif");    
    $(".title").text("At the movie theater with Michael Jackson");
    $(".start-button").show();
    $(".play-again").hide();
    
});