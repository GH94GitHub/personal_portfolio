/*====================
; Title: Diagrams JS
; Author: George Henderson
; Date: 29 March 2021
; Description: This is the js for the diagrams page.
;====================*/
var baseURL = "./nosql-data-diagrams/";
var diagrams = {
    index: 0,
    items: [
        {
            title: "Title 1",
            description: "Description for item 1",
            relUrl: baseURL + "relational-ord.png",
            nosqlUrl: baseURL + "nosql-data-structure.png"
        },
        {
            title: "Title 2",
            description: "Description for item 2",
            relUrl: baseURL + "nodeshopper_ord.png",
            nosqlUrl: baseURL + "nodeshopper_nosql.png"
        },
        {
            title: "Title 3",
            description: "Description for item 3",
            relUrl: baseURL + "nodetech_ord.png",
            nosqlUrl: baseURL + "nodetech_nosql.png"
        },
        {
            title: "Title 4",
            description: "Description for item 4",
            relUrl: baseURL + "nodesecurity_rules.png",
            nosqlUrl: baseURL + "nodesecurity_nosql.png"
        },
        {
            title: "Title 5",
            description: "Description for item 5",
            relUrl: baseURL + "nodebookco_ord.png",
            nosqlUrl: baseURL + "nodebookco_nosql.png"
        }
    ]
}

function changeDiagrams() {
    console.log('executed');
    var newItem = diagrams.items[diagrams.index];
    $(".diagramsTitle").text(newItem.title);
    $(".diagramsDescription").text(newItem.description);
    $("img#relational").attr('src', newItem.relUrl);
    $("img#nosql").attr('src', newItem.nosqlUrl);
}

$(function() {
    // Image
    $('.pop').on('click', function() {
        $('.imagepreview').attr('src', $(this).find('img').attr('src'));
        $('#imagemodal').modal('show');   
    });
    
    $("button.previous").click(function() {
        if (diagrams.index > 0) {
            diagrams.index--;
            changeDiagrams();
        }

    });

    $("button.next").click(function() {
        if (diagrams.index < diagrams.items.length - 1) {
            diagrams.index++;
            changeDiagrams();
        }
    });
});