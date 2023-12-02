let count = 0;
const btns = document.querySelectorAll('.btns');
const val = document.querySelector('#val');

btns.forEach(function(btn){
    btn.addEventListener("click", function(e){
        const value = e.currentTarget.value;
        const style = e.currentTarget.classList;
        if(value === 'decrease'){
            count--;
        }
        else if(value === 'increase'){
            ++count;
        }
        else if(value==='reset'){
            count = 0;
        }
        if(count > 0){
            val.style.color = "green";
        }
        if(count < 0){
            val.style.color = "red";
        }
        if( count === 0){
            val.style.color = "white";
        }
        val.textContent = count;
    });
});
