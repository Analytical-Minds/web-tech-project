//smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault(); //prevents the default anchor click behavior

        //scroll to the element smoothly
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: "smooth"
        });

    });
});