
// Create a new list item when clicking on the "Add" button
function newCategory() {
    // creating new <div></div>
   var Bdiv = document.createElement("div");
   // <div>a new b</div>
   // $(Bdiv).text("A New B");

   var ADiv = document.getElementById("ADiv");

   ADiv.prepend(Bdiv);
   $(Bdiv).addClass("header");

   var CDiv = document.createElement("div");
   var h3 = document.createElement("h3");
   var inputValue = document.getElementById("myInput").value;
   var butt = document.createElement("button");
   $(h3).text(inputValue);
   $(butt).text("Edit");
   h3.append(butt);
   CDiv.append(h3);
   Bdiv.append(CDiv);
   var myItem = document.createElement("input");
   $(myItem).attr("placeholder", "Add item");
   CDiv.append(myItem);
   var CDivspan = document.createElement("span");
   $(CDivspan).addClass("addBtn");
   $(CDivspan).attr("onclick", "newTodo()");
   CDiv.append(CDivspan);
   $(CDivspan).text("Add Todo Item");

}
// mark compete and remove


function markComplete(myelement) {
    let mydad = $(myelement).parent();
    $(mydad).toggleClass("complete");
    $(mydad).find(".iconspot").toggleClass("fa-check");



}
function removeRow(theelement) {
    let grandpa = $(theelement).parent();

    $(grandpa).animate({
            opacity: 0,
            left: "+=50"
        },
        800, function (){
            //animation complete
            $(grandpa).remove();

        });
}

// Create an item on the todo list

function newTodo() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("myNewItem").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
        alert("You must write something!");
    } else {
        document.getElementById("myUL").appendChild(li);
    }
    document.getElementById("myNewItem").value = "";

    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

    for (i = 0; i < close.length; i++) {
        close[i].onclick = function() {
            var div = this.parentElement;
            div.style.display = "none";
        }
    }
}