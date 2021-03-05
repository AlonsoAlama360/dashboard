//MODAL
let open = document.getElementById('open'),
    modal = document.getElementById('modalAgregarUsuario'),
    salir = document.getElementById('salir'),
    close = document.getElementById('close'),
    editarUsuario = document.getElementById('editarUsuario'),
    modalEditarUsuario = document.getElementById('modalEditarUsuario');
open.addEventListener('click', function() {
    modal.style.display = 'block';
});
close.addEventListener('click', function() {
    modal.style.display = 'none';
});
salir.addEventListener('click', function() {
    modal.style.display = 'none';
});
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
editarUsuario.addEventListener('click', function() {
    modalEditarUsuario.style.display = 'block';
});