function onSubmit(){
    var form = document.getElementById('frm');
    form.addEventListener('submit', function(){
        event.preventDefault();
    })
    var fname = document.getElementById('fname').value;
    var lname = document.getElementById('lname').value;
    var fullname = fname + ' ' + lname;
    document.getElementById('d1').textContent = fullname; 
}

    

