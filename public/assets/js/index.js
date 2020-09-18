$(function() {
    const submitButn = $("button.submit");
    const burgerInput = $("button.input");
    let burgerVal = "";


    submitButn.on("click", function() {
        console.log("clicked");
        burgerVal = burgerInput.val();

        $.post(
            "/api/burgers",
            // method: "POST",
            {
                name: burgerVal  
            }
        )
        .then(function(response) {
            console.log(response);
        })
    });

    
})