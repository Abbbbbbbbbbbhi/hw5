document.addEventListener('DOMContentLoaded', function () {
    console.log("loaded");
    $('#done').click(function () {
        let correctcount = 0;
        if ($('#a0').is(':checked')) { correctcount++ }
        if ($('#a1').is(':checked')) { correctcount++ }
        if ($('#a2').is(':checked')) { correctcount++ }
        if ($('#a3').is(':checked')) { correctcount++ }
        if ($('#a4').is(':checked')) { correctcount++ }

        console.log(correctcount);
        document.getElementById("questions").hidden = true;
        document.querySelector("#endscreen").innerHTML =
            `<h2>End</h2> <div>Score: ${correctcount}/5 </div> <div>Percentage: ${correctcount / 5}</div>`
        document.querySelector("#done").parentNode.removeChild(document.querySelector("#done"));
        timer = 0;
    });
    let timer = 60;

    function startTimer() {

        setInterval(() => {
            timer--;
            if (timer < 1) {
                document.querySelector("#done").click();
            }
            document.querySelector("#timer").textContent = timer;
        }, 1000);   
    }
    startTimer();
})

