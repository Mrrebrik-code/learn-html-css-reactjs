document.addEventListener('DOMContentLoaded', function(event){
    console.log('Started js-script!');
    var calculator_form = document.querySelector('.calculator');
    
    calculator_form.addEventListener('submit', function(e){
        e.preventDefault();
    });
    
    var result_field = document.querySelector('.calculator-result-field');
    var button_number = document.querySelectorAll('.js-button-add-result');
    var button_reset = document.querySelector('.js-button-reset');
    var button_calculating = document.querySelector('.js-button-calculating');
    
    for(i = 0; i <button_number.length; i++){
        button_number[i].addEventListener('click', function(e){
            e.preventDefault();
            result_field.value += this.innerHTML;
        });
    }
    
    button_reset.addEventListener('click', function(e){
        e.preventDefault();
        result_field.value = '';
    });
    
    button_calculating.addEventListener('click', function(e){
        e.preventDefault();
        result_field.value = eval(result_field.value);
    });
})