$(document).ready(function () {
    $(".cataloge > li").click(function () {
        if (!$(this).hasClass("li-active")) {
            // Remove the class from anything that is active
            $("li.li-active").removeClass("li-active");
            // And make this active
            $(this).addClass("li-active");
        }
    });
    $("td > .rectangle").click(function () {
        if (!$(this).hasClass("dadatghe")) {
            $(this).toggleClass("dangchonghe");
            $(this).toggleClass("ghetrong");
        }
    });
});