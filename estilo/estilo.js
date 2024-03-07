function abrir(){
    let telefone_menu= document.querySelector('.telefone_menu');
    if (telefone_menu.classList.contains('open')){
        telefone_menu.classList.remove('open');
    } else {
        telefone_menu.classList.add('open')
    }
}