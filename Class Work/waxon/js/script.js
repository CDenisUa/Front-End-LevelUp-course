$('img').each(function () {
    let way = $(this).attr('src');
    let slash = way.lastIndexOf("/");
    let result = way.slice(slash);
    $(this).attr('alt', result);
})
