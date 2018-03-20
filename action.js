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

    // $(grandpa).animate({
    //     opacity: 0,
    //     left: "+=50"
    // },
    //     800, function (){
    //     //animation complete
        $(grandpa).remove();

    // });
}
// function removeRow(theelement) {
//     let grandpa = $(theelement).parent().parent();\
//
//     $(grandpa).slideUp("900", function () {
//         //fires after slide up is done
//         $(grandpa).remove();
//     });
// }

function validateForm() {var message = document.forms["myForm"]["myMessage"].value;if (message == null || message.trim().length < minLength) {  alert("Message must be filled out");returnfalse;    }}

function checkInp() {
    var x=document.forms["myForm"]["age"].value;
    if (isNaN(x)) {
        alert("Must input numbers");
        return false;
    }
}