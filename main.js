$(document).ready(function() {
    console.log(document.querySelector('header button'))
    console.log($('.btn-cancelar'))

    document.querySelector('header button').addEventListener('click', () =>{

    })

    $('header button').click(() => {
        $('form').slideDown();
    })

    $('#btn-cancelar').click(() => {
        $('form').slideUp();
    })

    $('form').on('submit', (e) => {
        e.preventDefault()
        const enderecoDaNovaImage = $('#new-img-field').val();
        const novoItem = $('<li style="display: none"></li>');
    
        $(`<img src="${enderecoDaNovaImage}" />`).appendTo(novoItem)
        $(`<div class="overlay-image-link">
                <a href="${enderecoDaNovaImage}" target="_blank" title="Abrir imagem em uma nova guia" >Ver imagem</a>
            </div>`)
            .appendTo(novoItem);
        
        $(novoItem).appendTo('ul')
        $('#new-img').val('')
        $(novoItem).fadeIn();
    })
})