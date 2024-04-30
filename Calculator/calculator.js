function buttonClick(value){
    str = document.getElementById('display');
    if(str.value === '0'){
        str.value = value;
    }else{
        str.value += value;
    }
}

function clearDisplay(){
    document.getElementById('display').value = '0';
}

function deleteEnd(){
    str = document.getElementById('display');
    str.value = str.value.slice(0,-1) || '0';
}

function calculate(){
    const str = document.getElementById('display');
    try{
        str.value = eval(str.value);
    }catch(e){
        str.value = 'Error'
    }
}