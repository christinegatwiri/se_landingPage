// $("#contact-btn").on('click', function() {
//     $("#new-survey").fadeIn();
//     $("original-contact").fadeOut();
//  });

function switchVisible() {
    if (document.getElementById('original-contact')) {

        if (document.getElementById('original-contact').style.display == 'none') {
            document.getElementById('original-contact').style.display = 'block';
            document.getElementById('original-contact').style.display = 'none';
        }
        else {
            document.getElementById('original-contact').style.display = 'none';
            document.getElementById('new-survey').style.display = 'block';
        }
    }
}