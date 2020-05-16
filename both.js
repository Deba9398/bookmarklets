// This bookmarklet will attempt to open both FakeSpot and ReviewMeta at the same time. 
// Some browsers will prevent both tabs from opening.

javascript:(function() {
    const url = 'https://' + location.host + location.pathname.slice(0, location.pathname.lastIndexOf('/'));
    const reviewMetaUrl = 'http://reviewmeta.com/amazon' + url.slice(url.lastIndexOf('/'));
    const fakeSpotUrl = 'http://fakespot.com/analyze?url=' + encodeURI(url);

    window.open(reviewMetaUrl, '_new'); 
    window.open(fakeSpotUrl, 'secondWindow');
})();
