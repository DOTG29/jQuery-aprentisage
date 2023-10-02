

$(document).ready(function() {
    let link = $("<a>", {
        href : "https://www.edenschool.fr/",
        title: "Allez sur le site de l'ecole"
    })
    link.text("lien eden school");
    $( "#menu" ).replaceWith(link);
})








// $("td").each(function(index) {
//     console.log(index + ":" + $(this).text());
// })

// $("#operation-dom").submit(function(event) {
//     $("input:checked").each(function() {
//         console.log($(this).val());
//     })
//     event.preventDefault()
// })



$("h2").css("background-color", "yellow")
$(".syntax").addClass("fondcouleur")