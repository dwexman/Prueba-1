$(document).ready(function(){
    // Smooth scroll
    $('a.nav-link').on('click', function(e) {
        if (this.hash !== "") {
            e.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top - 56
            }, 800);
        }
    });

    // Tooltip 
    $('[data-toggle="tooltip"]').tooltip();

    
});
