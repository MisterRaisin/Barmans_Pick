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