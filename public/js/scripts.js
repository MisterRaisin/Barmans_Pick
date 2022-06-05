// Contact form validation
function validateForm() {
    var form_list = {}
    form_list['name'] = document.forms["contact-form"]["name"].value;
    form_list['email'] = document.forms["contact-form"]["email"].value;
    form_list['subject'] = document.forms["contact-form"]["subject"].value;
    form_list['message'] = document.forms["contact-form"]["message"].value;
    var flag = false

    for (var i in form_list) {
        if (form_list[i] == "") {
            flag = true
        } 
    }

    if (flag) {
        return false;
    } 
}




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

// get the selected distillers by class name and id
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


// get the selected liquers by class name and id
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

// Show the liquer dropdown menu
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Function that runs when the user clicks on a liquer from the list
function selectLiquer(liquer_id, liquer_name) {
    // Gets all already chose liquers
    const chosen_liquer_list = document.querySelectorAll('.liqeur_close');
    // Checks that the user didnt already select this liquer (No duplicates can happen)
    for (var i = 0; i < chosen_liquer_list.length; i++) {   
        if (chosen_liquer_list[i].id === liquer_id) {
            return
        }   
    }
    
    // Create a element of the chosen liquer so the user can see what he chose
    document.getElementById("show_liquer_selection").innerHTML += `<li class ="liqeur_close" id="${liquer_id}">${liquer_name}<span class="close", onclick="delete_liquer(this)">&times;</span></li>`
    // Refresh the list of available cocktails with the new liquer implemented
    refreshAvailableCocktails()
}

function delete_liquer(button) {
    button.parentElement.remove()
    refreshAvailableCocktails()
}