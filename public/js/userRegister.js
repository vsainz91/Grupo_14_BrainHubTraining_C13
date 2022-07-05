function qs(element) {
    return document.querySelector(element)
}

window.addEventListener("load", () => {
    let $inputName = qs('#name'),
        $nameErrors = qs('#nameErrors'),
        $email = qs('#email'),
        $emailErrors = qs('#emailErrors'),
        $pass = qs('#pass'),
        $passErrors = qs('#passErrors'),
        $pass2 = qs('#password2'),
        $pass2Errors = qs('#pass2Errors'),
        avatar = qs('#avatar'),
        $fileErrors = qs('#fileErrors'),
        $imgPreview = qs('#img-preview'),
        regExAlpha = /^[a-zA-Z\sñáéíóúü ]*$/,
        regExEmail = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i,
        regExPass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,12}$/;

        $inputName.addEventListener("blur", () => {
            switch (true) {
                case !$inputName.value.trim(): 
                    $nameErrors.innerHTML = "Requerido";
                    $inputName.classList.add("is-invalid");
                    break;
                case !regExAlpha.test($inputName.value):
                    $nameErrors.innerHTML = "Nombre y Apellido inválidos";
                    $inputName.classList.add("is-invalid");
                    break;
                default: 
                    $inputName.classList.remove("is-invalid");
                    $inputName.classList.add("is-valid");
                    $nameErrors.innerHTML = "";
                    break;
            }
        })

        $email.addEventListener("blur", () => {
            switch (true) {
                case !$email.value.trim(): 
                    $emailErrors.innerHTML = "Requerido";
                    $email.classList.add("is-invalid");
                    break;
                case !regExEmail.test($email.value):
                    $emailErrors.innerHTML = "E-mail inválido";
                    $email.classList.add("is-invalid");
                    break;
                default: 
                    $email.classList.remove("is-invalid");
                    $email.classList.add("is-valid");
                    $emailErrors.innerHTML = "";
                    break;
            }
        })

        $pass.addEventListener('blur', function(){
            switch (true) {
                case !$pass.value.trim():
                    $passErrors.innerHTML = 'El campo contraseña es obligatorio'
                    $pass.classList.add('is-invalid')
                    break;
                case !regExPass.test($pass.value):
                    $passErrors.innerHTML = 'La contraseña debe tener: entre 6 y 12 caracteres, al menos una mayúscula, una minúscula y un número';
                    $pass.classList.add('is-invalid')
                    break;    
                default:
                    $pass.classList.remove("is-invalid");
                    $pass.classList.add('is-valid')
                    $passErrors.innerHTML = ""
                    break;
            }
        })
    
        $pass2.addEventListener('blur', function(){
            switch (true) {
                case !$pass2.value.trim():
                    $pass2Errors.innerHTML = 'Reingresa tu contraseña'
                    $pass2.classList.add('is-invalid')
                    break;
    
                case $pass2.value !== $pass.value:
                    $pass2Errors.innerHTML = 'Las contraseñas no coinciden';
                    $pass2.classList.add('is-invalid')
                    break;    
    
                default:
                    $pass2.classList.remove("is-invalid");
                    $pass2.classList.add('is-valid')
                    $pass2Errors.innerHTML = ""
                    break;
            }
        })

        avatar.addEventListener('change', function fileValidation(){
        let filePath = avatar.value, 
            allowefExtensions = /(.jpg|.jpeg|.png|.gif|.web)$/i 
        if(!allowefExtensions.exec(filePath)){ 
            $fileErrors.innerHTML = 'Carga un archivo de imagen válido, con las extensiones (.jpg - .jpeg - .png - .gif)';
            avatar.value = '';
            $imgPreview.innerHTML = '';
            return false;
        }else{
            console.log(avatar.files);
            if(avatar.files && avatar.files[0]){
                let reader = new FileReader();
                reader.onload = function(e){
                    $imgPreview.innerHTML = '<img src="' + e.target.result +'"/>';
                };
                reader.readAsDataURL(avatar.files[0]);
                $fileErrors.innerHTML = '';
                avatar.classList.remove('is-invalid')
            }
        }
    })
})