let password;
let login = prompt('Please inputs your login');
let loginAdmin ='Admin';
let loginUser = 'User';
let passAdmin = 'RootPass';
let passUser = 'UserPass';
let currentTime = new Date().getHours();

if (login === null || login === '') {
    alert('“Canceled.”');
} else if (login.length < 4) {
    alert('“I don\'t know any users having name length less than 4 symbols”. ')
} else if (login === loginAdmin) {
    password = prompt('Please inputs your password');
        if (password === passAdmin) {
            if (currentTime < 20) {
                alert('“Good day, dear Admin!”');
            } else {
                alert('“Good evening, dear Admin!”');
            }
        } else if (password === null || password === ''){
            alert('“Canceled.”');
        } else {
            alert('“Wrong password”.');
        }
} else if (login === loginUser) {
    password = prompt('Please inputs your password');
        if (password === passUser) {
            if (currentTime < 20) {
                alert('“Good day, dear User!”');
            } else {
                alert('“Good evening, dear User!”');
            }
        } else if (password === null || password === ''){
            alert('“Canceled.”');
        } else {
            alert('“Wrong password”.');
        }
    } else {
        alert('“I don’t know you”.');
    }

