document.getElementById('btn-withdraw').addEventListener('click', function(){

    const withdraw_field =document.getElementById('withdraw-input')
    let Withdrawstring= withdraw_field.value
    const mainWithdraw= parseFloat(Withdrawstring)
    withdraw_field.value=''
     
    

    // adding the value of withdraw

    let withdraw_total_element= document.getElementById('withdraw-total');
    let withdraw_total_element_string= withdraw_total_element.innerText;
    let old_withdraw_total= 
    parseFloat(withdraw_total_element_string);
    let new_withdraw= old_withdraw_total + mainWithdraw;
    withdraw_total_element.innerText= new_withdraw;

   
    
    // making the total value which will be add from deposit

    let main_total_value= document.getElementById('main-total');
    let main_total_value_string= main_total_value.innerText;
    let old_total_value= parseFloat(main_total_value_string);
     let   mainWithdraw_two= mainWithdraw;
    let new_total_value= old_total_value - mainWithdraw_two;
    main_total_value.innerText= new_total_value;

    if (mainWithdraw_two> new_total_value){
        alert("You have less money in your account, bitch.")
        withdraw_field.value=''
    }
    
      

})

