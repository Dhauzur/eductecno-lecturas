$(document).ready(function () {
    $("h2").dblclick(function () {
        $(this).css({
            color: 'red',
        })
    })
    $("#enviarCorreo").click(function () {
        alert("El correo fue enviado correctamente...")
    })

    // $('[data-toggle="popover"]').popover()
    $('[data-toggle="tooltip"]').tooltip()
    // $('#exampleModal').on('shown.bs.modal', function () {
    //   $('#modal1').trigger('focus')
    // })

    $('.carousel').carousel({
        interval: false
    })
})
