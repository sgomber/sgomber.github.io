$(document).ready(function() {
    $('a.abstract').click(function() {
        $(this).parent().parent().find(".abstract.hidden").toggleClass('open');
    });
    $('a.bibtex').click(function() {
        $(this).parent().parent().find(".bibtex.hidden").toggleClass('open');
    });

    $('a').filter(function() {
        return !$(this).attr('class')?.startsWith('nav');
    }).attr({
        'target': '_blank',
        'rel': 'noopener noreferrer'
    });

    $('.navbar-nav').find('a').removeClass('waves-effect waves-light');
});
