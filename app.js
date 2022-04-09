// first declare the action variables


submit.addEventListener('click', () => {
    // let declare some variables
    
    
    let submit = document.getElementById("submit")
    let user = document.getElementById('name')
    let password = document.getElementById('pass')
    let confirmPassword = document.getElementById('cnfpass')
    let email = document.getElementById('email')
    let num = document.getElementById('num')
    
    //  =========== USERNAME =========
    
    if (user.value === "") {
        let userErr = document.getElementById('user-err')
        userErr.innerHTML = "You haven't given your name."
        return false
    }
    if (user.value.length < 3) {
        let userErr = document.getElementById('user-err')
        userErr.innerHTML = "Name must have 3 letter"
        return false
    }



    // ============== PASSWORD ===========


    if (password.value.length < 3) {
        let passErr = document.getElementById('pass-err')
        passErr.innerHTML = "Name must have 3 letter"
        return false
    }

    // ============== CONFORM PASSWORD ============


    if (password.value === confirmPassword.value) {
        let cnfErr = document.getElementById('cnf-err')
        cnfErr.innerHTML = 'Password is not same.'
        return false
    }



    // ========== EMAIL ================



    // =============== NUMBER ==============


    if (!(isNAN(num.value))) {
        console.log("first")
    }


});