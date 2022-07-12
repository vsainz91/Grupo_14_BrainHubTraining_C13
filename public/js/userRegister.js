function qs(element) {
    return document.querySelector(element)
}

window.addEventListener("load", () => {
    let name = qs('#name'),
        $nameErrors = qs('#nameErrors'),
        email = qs('#email'),
        $emailErrors = qs('#emailErrors'),
        pass = qs('#pass'),
        $passErrors = qs('#passErrors'),
        pass2 = qs('#password2'),
        $pass2Errors = qs('#pass2Errors'),
        avatar = qs('#avatar'),
        $form = qs('#form'),
        $fileErrors = qs('#fileErrors'),
        $imgPreview = qs('#img-preview'),
        regExAlpha = /^[a-zA-Z\sñáéíóúü ]*$/,
        regExEmail = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i,
        regExPass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,12}$/;

    name.addEventListener("blur", () => {
        switch (true) {
            case !name.value.trim(): 
                $nameErrors.innerHTML = "El nombre es requerido";
                name.classList.add("is-invalid");
                break;
            case !regExAlpha.test(name.value):
                $nameErrors.innerHTML = "Nombre y Apellido inválidos";
                name.classList.add("is-invalid");
                break;
            default: 
                name.classList.remove("is-invalid");
                name.classList.add("is-valid");
                $nameErrors.innerHTML = "";
                break;
        }
    })

    email.addEventListener("blur", () => {
        switch (true) {
            case !email.value.trim(): 
                $emailErrors.innerHTML = "El email es requerido";
                email.classList.add("is-invalid");
                break;
            case !regExEmail.test(email.value):
                $emailErrors.innerHTML = "E-mail inválido";
                email.classList.add("is-invalid");
                break;
            default: 
                email.classList.remove("is-invalid");
                email.classList.add("is-valid");
                $emailErrors.innerHTML = "";
                break;
        }
    })

    pass.addEventListener('blur', function(){
        switch (true) {
            case !pass.value.trim():
                $passErrors.innerHTML = 'La contraseña es requerida'
                pass.classList.add('is-invalid')
                break;
            case !regExPass.test(pass.value):
                $passErrors.innerHTML = 'La contraseña debe tener: entre 6 y 12 caracteres, al menos una mayúscula, una minúscula y un número';
                pass.classList.add('is-invalid')
                break;    
            default:
                pass.classList.remove("is-invalid");
                pass.classList.add('is-valid')
                $passErrors.innerHTML = ""
                break;
        }
    })

    pass2.addEventListener('blur', function(){
        switch (true) {
            case !pass2.value.trim():
                $pass2Errors.innerHTML = 'Reingresa tu contraseña'
                pass2.classList.add('is-invalid')
                break;

            case pass2.value !== pass.value:
                $pass2Errors.innerHTML = 'Las contraseñas no coinciden';
                pass2.classList.add('is-invalid')
                break;    

            default:
                pass2.classList.remove("is-invalid");
                pass2.classList.add('is-valid')
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
                    $imgPreview.innerHTML = '<img src="' + e.target.result +'" width="100%" height="200px"/>';
                };
                reader.readAsDataURL(avatar.files[0]);
                $fileErrors.innerHTML = '';
                avatar.classList.remove('is-invalid')
            }
        }
    })

    $form.addEventListener('submit', function(event) {
        
        event.preventDefault()
        let formElements = this.elements;
        let errores = false;

        for (let index = 0; index < formElements.length - 1; index++) {
            if(formElements[index].value == "" 
            && formElements[index].name !== "apellido"
            && formElements[index].type !== "file"
            || formElements[index].classList.contains("is-invalid")
            ){
                formElements[index].classList.add("is-invalid");
                submitErrors.innerHTML = "Hay errores en el formulario";
                errores = true;
            }           
        }

        if(!errores){
            $form.submit()
        }
    })
})