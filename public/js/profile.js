function qs(element) {
    return document.querySelector(element)
}


window.addEventListener("load", () => {

    let avatar = qs('#avatar'), 
    name = qs('#name'), 
    imgPreview = qs('#imgPreview'), 
    fileErrors = qs('#fileErrors'),
    nameErrors = qs('#nameErrors');

    name.addEventListener("blur", () => {
        switch (true) {
            case !name.value.trim(): 
                nameErrors.innerHTML = "Requerido";
                name.classList.add("is-invalid");
                break;
            case !regExAlpha.test(name.value):
                nameErrors.innerHTML = "Nombre inválido";
                name.classList.add("is-invalid");
                break;
            default: 
                name.classList.remove("is-invalid");
                name.classList.add("is-valid");
                nameErrors.innerHTML = "";
                break;
        }
    })

    avatar.addEventListener('change', function fileValidation(){
        let filePath = avatar.value, 
            allowefExtensions = /(.jpg|.jpeg|.png|.gif|.web)$/i 
        if(!allowefExtensions.exec(filePath)){ 
            fileErrors.innerHTML = 'Carga un archivo de imagen válido, con las extensiones (.jpg - .jpeg - .png - .gif)';
            avatar.value = '';
            imgPreview.innerHTML = '';
            return false;
        }else{
            console.log(avatar.files);
            if(avatar.files && avatar.files[0]){
                let reader = new FileReader();
                reader.onload = function(e){
                    imgPreview.innerHTML = '<img src="' + e.target.result +'"/>';
                };
                reader.readAsDataURL(avatar.files[0]);
                fileErrors.innerHTML = '';
                avatar.classList.remove('is-invalid')
            }
        }
    })

    
})