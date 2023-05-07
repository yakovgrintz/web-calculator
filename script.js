function add_num_to_output(id){
    let number_field = document.getElementById('number-field');
    let result=document.getElementById('calc-result')
    let value=document.getElementById(id).innerText;
    switch (value) {
        case 'delete':
            number_field.value='';
            result.value='';
            break;
        case 'Recall':
            break;
        default:
            number_field.value+=value;
            sum_output();


    }

}
function sum_output_by_user(){
    sum_output();
    let number_field = document.getElementById('number-field');
    number_field.value='';
}

function sum_output(){
    let number_field = document.getElementById('number-field');
    let result=document.getElementById('calc-result')
    let expression = number_field.value;
    result.value=eval(expression)




}




