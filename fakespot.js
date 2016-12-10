javascript:(function() {
    let url = 'https://' + location.host + location.pathname.slice(0, location.pathname.lastIndexOf('/'));
    url = 'http://fakespot.com/analyze?url=' + encodeURI(url);
    window.open(url);
})();
