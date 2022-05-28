
// Main Distiller js
let search = $("#available_cocktails");
function showResults(ingredients_list) {
    $.ajax({
        type: "POST",
        url:"/getcocktails",
        contentType: "application/json",
        data: JSON.stringify({query: ingredients_list}),
        success: function(result) {
             search.html(result.response);
        }
    })
}

// get the selected distillers by class name
function getSelectedDistillers() { 
    var inputs = document.querySelectorAll('.form-check-input');
    var distiller_list = [] 
    for (var i = 0; i < inputs.length; i++) {   
        if (inputs[i].checked == true) {
            distiller_list.push(inputs[i].id);
        }
    }
    return distiller_list
}


// get the selected liquers by class name
function getSelectedLiquers() { 
    var inputs = document.querySelectorAll('.liqeur_close');
    var liquer_list = [] 
    for (var i = 0; i < inputs.length; i++) {   
        liquer_list.push(inputs[i].id);
    }
    return liquer_list
}


// Main Function
function refreshAvailableCocktails(){
    const distiller_list = getSelectedDistillers()
    const liquer_list = getSelectedLiquers()
    const ingredient_list = distiller_list.concat(liquer_list)
    console.log(ingredient_list)
    showResults(ingredient_list)
}

// Liquer js
function filterFunction() {
  var input, filter, ul, li, a, i;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  div = document.getElementById("myDropdown");
  a = document.querySelectorAll('.liqueur');
  for (i = 0; i < a.length; i++) {
    txtValue = a[i].textContent || a[i].innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      a[i].style.display = "";
    } else {
      a[i].style.display = "none";
    }
  }
}

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}


function selectLiquer(liquer) {
    const chosen_liquer_list = document.querySelectorAll('.liqeur_close');
    for (var i = 0; i < chosen_liquer_list.length; i++) {   
        if (chosen_liquer_list[i].id === liquer) {
            return
        }   
    }
    
    document.getElementById("show_liquer_selection").innerHTML += `<li class ="liqeur_close" id="${liquer}">${liquer}<span class="close", onclick="delete_liquer(this)">&times;</span></li>`
    refreshAvailableCocktails()
}

function delete_liquer(button) {
    button.parentElement.remove()
    refreshAvailableCocktails()
}