$(function () {
    $("#wizard").steps({
        headerTag: "h2",
        bodyTag: "section",
        transitionEffect: "fade",
        enableAllSteps: true,
        transitionEffectSpeed: 500,
        labels: {
            next: "Зарегестрироваться",
        }
    });
    $("a[href$='previous']").hide();
    $("a[href$='finish']").hide();


    $('.wizard > .steps li a').click(function () {
        $(this).parent().addClass('checked');
        $(this).parent().prevAll().addClass('checked');
        $(this).parent().nextAll().removeClass('checked');
    });
    // Custome Jquery Step Button
    $('.forward').click(function () {
        $("#wizard").steps('next');
    });

});

$(function () {
    $("#wizard-2").steps({
        headerTag: "h2",
        bodyTag: "section",
        transitionEffect: "fade",
        enableAllSteps: true,
        transitionEffectSpeed: 500,
        labels: {
            finish: "Готово",
            next: "Продолжть",
        }
    });
    $("a[href$='previous']").hide();


    $('.wizard > .steps li a').click(function () {
        $(this).parent().addClass('checked');
        $(this).parent().nextAll().removeClass('checked');
    });
    // Custome Jquery Step Button
    $('.forward').click(function () {
        $("#wizard").steps('next');
    });

});