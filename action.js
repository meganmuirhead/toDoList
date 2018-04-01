
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
   $(myItem).addClass("inputCDiv");
   $(myItem).attr("placeholder", "Add item");
   CDiv.append(myItem);
   var CDivspan = document.createElement("button");
   $(CDivspan).addClass("addBtn");
   $(CDivspan).attr("onclick", "newTodo(this)");
   CDiv.append(CDivspan);
   $(CDivspan).text("Add Todo Item");
   var DDDiv = document.createElement("div");
   var myDDDivUl = document.createElement("ul");

   Bdiv.append(DDDiv);
   DDDiv.append(myDDDivUl);


}


// mark compete and remove


function markComplete(myElement) {
    let mydad = $(myElement).parent();
    $(mydad).toggleClass("complete");
    $(mydad).find(".iconspot").toggleClass("fa-check");



}
// remove aspect
function removeRow(theElement) {
    let grandpa = $(theElement).parent();

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
function newTodo(buttonElement) {
    var li = document.createElement("li");
    var CDiv = $(buttonElement).parent();

    var DDDivSpan = document.createElement("span");

    var input = $(CDiv).find("input.inputCDiv");
    var inputPlaceholder = input[0].value;
    var t = document.createTextNode(inputPlaceholder);
    DDDivSpan.append(t);
    li.append(DDDivSpan);

    var trashDiv = document.createElement("div");
    li.append(trashDiv);
    $(trashDiv).addClass("fa");
    $(trashDiv).addClass("fa-trash");
    $(trashDiv).attr("onclick", "removeRow(this)");

    var iconspotDiv = document.createElement("div");
    li.append(iconspotDiv);
    $(iconspotDiv).addClass("iconspot");
    $(iconspotDiv).addClass("fa");

    var buttz = document.createElement("button");
    li.append(buttz);
    var buttzText = document.createTextNode("Complete");
    buttz.append(buttzText);

    $(buttz).attr("onclick", "markComplete(this)");

    var buttz2 = document.createElement("button");
    li.append(buttz2);
    var buttz2Text = document.createTextNode("Edit");
    buttz2.append(buttz2Text);
    $(buttz2).attr("onclick", "edit(this)");

    var BDiv = $(CDiv).parent();
    var returnUl = $(BDiv).find("ul");

    returnUl.append(li);

}

// var CDiv = $(buttonElement).parent();
//     var input = $(CDiv).find("input.inputCDiv");


function edit(editButton) {
    var buttonParent = $(editButton).parent();
    var DDDivSpanArray = $(buttonParent).find("span");
    var DDDivSpan = DDDivSpanArray[0];
    var spanText = DDDivSpan.innerText;

    var inputField = document.createElement("input");

    inputField.value = spanText;

    DDDivSpan.innerHTML = '';
    $(DDDivSpan).append(inputField);

}







    //
    // if (inputValue === '') {
    //     alert("You must write something!");
    // } else {
    //     document.getElementById("myUL").appendChild(li);
    // }
    // document.getElementById("myNewItem").value = "";
    //
    // var span = document.createElement("SPAN");
    // var txt = document.createTextNode("\u00D7");
    // span.className = "close";
    // span.appendChild(txt);
    // li.appendChild(span);
    //
    // for (i = 0; i < close.length; i++) {
    //     close[i].onclick = function() {
    //         var div = this.parentElement;
    //         div.style.display = "none";
    //     }
    // }
