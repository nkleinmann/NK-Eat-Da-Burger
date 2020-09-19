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
       
        let newDevour = $(this).data("newdevoured");

        let newDevourState = {
            devour: true
        };

        console.log(id, 'IS THE ID');
        console.log(newDevourState, 'IS THE newDevourState');

        // Send the PUT request.
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            // data: newDevourState
        }).then(
            function (data) {
                console.log("changed devour to", newDevour);
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });
});