const uname = document.getElementById('uname');
const password = document.getElementById('pword');


function validate() {

    if (uname.value.trim() == '') {
        uname.style.border = 'solid 2px red'
        const labelusername = document.getElementById('labeluser').style.visibility = 'visible'
    }

    if (password.value.trim().length < 6) {
        password.style.border = 'solid 2px red'
        const passworduser = document.getElementById('passworduser').style.visibility = 'visible'
    }
}