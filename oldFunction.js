$('#myModal').on('shown.bs.modal', function () {
    $('#myInput').trigger('focus')
})

function markComplete(myelement) {
    let mydad = $(myelement).parent().parent();
    $(mydad).toggleClass("complete");
    $(mydad).find(".iconspot").toggleClass("fa-check");



}
function removeRow(theelement) {
    let grandpa = $(theelement).parent().parent();

    $(grandpa).animate({
            opacity: 0,
            left: "+=50"
        },
        800, function (){
            //animation complete
            $(grandpa).remove();

        });
}
// function removeRow(theelement) {
//     let grandpa = $(theelement).parent().parent();\
//
//     $(grandpa).slideUp("900", function () {
//         //fires after slide up is done
//         $(grandpa).remove();
//     });
// }
