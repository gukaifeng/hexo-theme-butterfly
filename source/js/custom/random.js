function randomPost() {
    fetch('/sitemap.xml').then(res => res.text()).then(str => (new window.DOMParser()).parseFromString(str, "text/xml")).then(data => {
        let ls = data.querySelectorAll('url loc');
        let locationHref, locSplit;
        do {
            locationHref = ls[Math.floor(Math.random() * ls.length)].innerHTML
            locSplit = locationHref.split('/')[3] || ''
        } while (locSplit !== 'posts');
        location.href = locationHref.split('/').slice(3).join('/')
    })
}