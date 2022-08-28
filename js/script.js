function muda(p) {
    var text = document.querySelector('#skilltext');
    switch (p) {
        case 1:
                text.innerHTML = 'HTML5 is the markup language that makes the content appear on your website';
                document.querySelector('#progress-p').style.display = 'block'
                document.querySelector('#progress-d').style.display = 'block'
                carrega(100);
            break;
        case 2:
                text.innerHTML = 'CSS is the language that makes your site come alive, making it more beautiful, authentic and with your personality'
                document.querySelector('#progress-p').style.display = 'block'
                document.querySelector('#progress-d').style.display = 'block'
                carrega(100);
            break;
        case 3:
                text.innerHTML = 'JavaScript is the programming language that makes the site talk to the user, bringing interactivity and thousands of functions'
                document.querySelector('#progress-p').style.display = 'block'
                document.querySelector('#progress-d').style.display = 'block'
                carrega(100);
            break;
        case 4:
            text.innerHTML = 'PHP is the programming language that connects your site to the server and makes it easy to save user data'
            document.querySelector('#progress-p').style.display = 'block'
            document.querySelector('#progress-d').style.display = 'block'
            carrega(90);
            break;
        case 5:
                text.innerHTML = 'GIT is versioning software that makes it easy to save and recover data after changes'
                document.querySelector('#progress-p').style.display = 'block'
                document.querySelector('#progress-d').style.display = 'block'
                carrega(70);
            break;
        case 6:
                text.innerHTML = 'Bootstrap is a css extension that makes life easier when styling documents'
                document.querySelector('#progress-p').style.display = 'block'
                document.querySelector('#progress-d').style.display = 'block'
                carrega(10);
            break;
        case 7:
                text.innerHTML = 'Hover over the icons for more information'
                document.querySelector('#progress-p').style.display = 'none'
                document.querySelector('#progress-d').style.display = 'none'
            break;
        default:
            break;
    }
}
function carrega(p){
    var barra = document.querySelector('.prog-bar')
    var width = 0
    var id = setInterval(frame , 20);
    function frame() {
        if(width == p){
            clearInterval(id)
        }else{
            width++
            barra.style.width = width + '%'
        }
    }
}
