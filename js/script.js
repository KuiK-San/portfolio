function muda(p) {
    var text = document.querySelector('#skilltext');
    switch (p) {
        case 1:
                text.innerHTML = 'HTML5 is the markup language that makes the content appear on your website'
            break;
        case 2:
                text.innerHTML = 'CSS is the language that makes your site come alive, making it more beautiful, authentic and with your personality'
            break;
        case 3:
                text.innerHTML = 'JavaScript is the programming language that makes the site talk to the user, bringing interactivity and thousands of functions'
            break;
        case 4:
            text.innerHTML = 'PHP is the programming language that connects your site to the server and makes it easy to save user data'
            break;
        case 5:
                text.innerHTML = 'GIT is versioning software that makes it easy to save and recover data after changes'
            break;
        case 6:
                text.innerHTML = 'Bootstrap is a css extension that makes life easier when styling documents'
            break;
        case 7:
                text.innerHTML = 'Hover over the icons for more information'
            break;
        default:
            break;
    }
}