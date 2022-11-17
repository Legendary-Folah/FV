const uname = document.getElementById('uname');
const password = document.getElementById('pword')


function validate() {

    if (uname.value.trim() == '') {
        uname.style.border = 'solid 2px red'
    } else if (password.value.trim() == '') {
        password.style.border = 'solid 2px red'
    }

}