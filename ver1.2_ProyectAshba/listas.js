var checkbox1 = document.getElementById('checkbox1');
checkbox1.addEventListener( 'change', function() {
    if(this.checked) {
        document.getElementById('total').innerHTML = "$1,999.00";
    } 
    else{
        document.getElementById('total').innerHTML = "$0,000.00";
    }
});

var checkbox2 = document.getElementById('checkbox2');
checkbox2.addEventListener( 'change', function() {
    if(this.checked) {
        document.getElementById('total').innerHTML = "$4,499.00";
    } else{
        document.getElementById('total').innerHTML = "$0,000.00";
    }
});


var checkbox3 = document.getElementById('checkbox3');
checkbox3.addEventListener( 'change', function() {
    if(this.checked) {
        document.getElementById('total').innerHTML = "$2,695.00";
    } else{
        document.getElementById('total').innerHTML = "$0,000.00";
    }
});


var checkbox4 = document.getElementById('checkbox4');
checkbox4.addEventListener( 'change', function() {
    if(this.checked) {
        document.getElementById('total').innerHTML = "$399.00";
    } else{
        document.getElementById('total').innerHTML = "$0,000.00";
    }
});


var checkbox5 = document.getElementById('checkbox5');
checkbox5.addEventListener( 'change', function() {
    if(this.checked) {
        document.getElementById('total').innerHTML = "$4,499.00";
    } else{
        document.getElementById('total').innerHTML = "$0,000.00";
    }
});


