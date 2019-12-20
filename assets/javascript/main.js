$(function () {
    $(".code-inputs .input").on('keydown', function (e) {
        e.preventDefault();
        let id = $(this).attr('id');
        let current = parseInt(id.charAt(id.length - 1));

        let regexp = /[ A-Za-z0-9]/;


        if (e.which == 8 || e.which == 46) {
            $(this).val('');
            $(`#number${current - 1}`).focus();
        } else {
            let string = String.fromCharCode(e.which || e.keyCode);
            if (!regexp.test(string)) return;

            $(this).val(string);
            $(`#number${current + 1}`).focus();
        }
    })
});
