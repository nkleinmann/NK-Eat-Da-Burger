$(function () {
    const submitButn = $("button.submit");
    const burgerRadioButtons = $("input.newBurger");
    const burgerInput = $("input.input");
    const burgerDelete = $("button.deleteBurger");
    const burgerDevour = $("button.devourBurger");
    const listEl = $("li.listEl");

    let burgerVal = "";
    let thisElVal = "";

    let id = "";

    listEl.on("click", function () {
        thisElVal = listEl.val();
        console.log(thisElVal);
    })


    burgerRadioButtons.on("click", function () {
        id = $(this).data("id");
    });

    submitButn.on("click", function (event) {
        event.preventDefault();
        console.log("clicked");
        burgerVal = burgerInput.val();

        $.post(
            "/api/burgers",
            // method: "POST",
            {
                name: burgerVal
            }
        )
            .then(function (response) {
                console.log(response);
                location.reload(true);
            });
    });

    burgerDelete.on("click", function (event) {
        event.preventDefault();
        // Send the DELETE request.
        $.ajax("/api/burgers/" + id, {
            type: "DELETE"
        }).then(
            function () {
                console.log("deleted burger", id);
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });

    burgerDevour.on("click", function () {
        console.log("Devoured!")
        // var id = $(this).data("id");
        var newDevour = $(this).data("newdevoured");

        var newDevourState = {
            devour: newDevour
        };

        // Send the PUT request.
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newDevourState
        }).then(
            function () {
                console.log("changed devour to", newDevourState);
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });

    //   $(".submit").on("submit", function(event) {
    //     // Make sure to preventDefault on a submit event.
    //     event.preventDefault();

    //     var newBurger = {
    //       name: $(".input").val().trim(),
    //       devoured: $("[name=devour]:checked").val().trim()
    //     };

    //     // Send the POST request.
    //     $.ajax("/api/burgers", {
    //       type: "POST",
    //       data: newBurger
    //     }).then(
    //       function() {
    //         console.log("created new burger");
    //         // Reload the page to get the updated list
    //         location.reload();
    //       }
    //     );
    //   });

    //   $(".deleteBurger").on("click", function(event) {
    //     var id = $(this).data("id");

    //     // Send the DELETE request.
    //     $.ajax("/api/burgers/" + id, {
    //       type: "DELETE"
    //     }).then(
    //       function() {
    //         console.log("deleted burger", id);
    //         // Reload the page to get the updated list
    //         location.reload();
    //       }
    //     );
    //   });


})