document.getElementById('btn-deposit').addEventListener('click',function(){
    let old_deposit_input= document.getElementById('deposit-input')
    let deposit_input_string = old_deposit_input.value;
    let deposit_input_main = parseFloat(deposit_input_string);
    old_deposit_input.value='';


    // adding the value to the deposit info

    let mainDeposit_amount= document.getElementById('deposit-total')
    let mainDeposit_amount_string= mainDeposit_amount.innerText
    let old_deposit_amount= parseFloat(mainDeposit_amount_string)

    let new_deposit_amount= old_deposit_amount + deposit_input_main

    mainDeposit_amount.innerText= new_deposit_amount

    // making the total value which will be add from deposit
    let main_total_value= document.getElementById('main-total');
    let main_total_value_string= main_total_value.innerText;
    let old_total_value= parseFloat(main_total_value_string);
    let new_total_value= old_total_value + deposit_input_main
    main_total_value.innerText= new_total_value;

    

})




