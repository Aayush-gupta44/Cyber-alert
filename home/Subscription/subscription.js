
document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll(".subscribe-btn");
    
    buttons.forEach(button => {
        button.addEventListener("mouseover", function() {
            button.style.backgroundColor = "#ff4081";
        });
        button.addEventListener("mouseout", function() {
            button.style.backgroundColor = "#333";
        });
    });

    // Change tick color to red
    const ticks = document.querySelectorAll("ul li");
    ticks.forEach(tick => {
        tick.innerHTML = tick.innerHTML.replace("✔", "<span style='color: red;'>✔</span>");
    });
});
