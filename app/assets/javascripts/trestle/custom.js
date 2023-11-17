// This file may be used for providing additional customizations to the Trestle
// admin. It will be automatically included within all admin pages.
//
// For organizational purposes, you may wish to define your customizations
// within individual partials and `require` them here.
//
//  e.g. //= require "trestle/custom/my_custom_js"

window.addEventListener('DOMContentLoaded', () => {

    function displaySelectedFile(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();
            reader.onload = function (e) {
                var preview = document.querySelector('.img-preview');
                preview.src = e.target.result;
                preview.style.display = 'block';
            }
            reader.readAsDataURL(input.files[0]);
        }
    }
});