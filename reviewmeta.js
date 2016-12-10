javascript:(function() {
    let url = 'https://' + location.host + location.pathname.slice(0, location.pathname.lastIndexOf('/'));
    url = 'http://reviewmeta.com/amazon' + url.slice(url.lastIndexOf('/'));
    window.open(url); 
})();
