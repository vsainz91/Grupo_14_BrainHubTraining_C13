function qs(element) {
    return document.querySelector(element)
}

window.addEventListener("load", () => {
    let $inputName = qs('#name'),
        $nameErrors = qs('#nameErrors'),
        $price = qs('#price'),
        $priceErrors = qs('#priceErrors'),
        $description = qs('#description'),
        $descriptionErrors = qs('#descriptionErrors'),
        avatar = qs('#avatar'),
        $form = qs('#form'),
        submitErrors = qs('#submitErrors')
    $fileErrors = qs('#fileErrors'),
        $imgPreview = qs('#img-preview'),

        regExAlpha = /^[a-zA-Z\sñáéíóúü ]*$/,
        regExPrice = /^[0-9]{4,6}$/,
        regExDescription = /^([a-zA-Z0-9 _-]+){10,100}$/;


    $inputName.addEventListener("blur", () => {
        switch (true) {
            case !$inputName.value.trim():
                $nameErrors.innerHTML = "Nombre del curso requerido";
                $inputName.classList.add("is-invalid");
                break;
            case !regExAlpha.test($inputName.value):
                $nameErrors.innerHTML = "Nombre inválido";
                $inputName.classList.add("is-invalid");
                break;
            default:
                $inputName.classList.remove("is-invalid");
                $inputName.classList.add("is-valid");
                $nameErrors.innerHTML = "";
                break;
        }
    })


    $price.addEventListener("blur", () => {
        switch (true) {
            case !$price.value.trim():
                $priceErrors.innerHTML = "Precio requerido";
                $price.classList.add("is-invalid");
                break;
            case !regExPrice.test($price.value):
                $priceErrors.innerHTML = "Ingrese un precio entre 4 y 6 dígitos";
                $price.classList.add("is-invalid");
                break;
            default:
                $price.classList.remove("is-invalid");
                $price.classList.add("is-valid");
                $priceErrors.innerHTML = "";
                break;
        }
    })


    $description.addEventListener("blur", () => {
        switch (true) {
            case !$description.value.trim():
                $descriptionErrors.innerHTML = "Descripción requerida";
                $description.classList.add("is-invalid");
                break;
            case !regExDescription.test($description.value):
                $descriptionErrors.innerHTML = "Ingrese como mínimo 10 caracteres";
                $description.classList.add("is-invalid");
                break;
            default:
                $description.classList.remove("is-invalid");
                $description.classList.add("is-valid");
                $descriptionErrors.innerHTML = "";
                break;
        }
    })
    courseImage.addEventListener('change', function fileValidation() {
        let filePath = courseImage.value,
            allowefExtensions = /(.jpg|.jpeg|.png|.gif|.web)$/i
        if (!allowefExtensions.exec(filePath)) {
            $fileErrors.innerHTML = 'Carga un archivo de imagen válido, con las extensiones (.jpg - .jpeg - .png - .gif)';
            courseImage.value = '';
            $imgPreview.innerHTML = '';
            return false;
        } else {
            console.log(courseImage.files);
            if (courseImage.files && courseImage.files[0]) {
                let reader = new FileReader();
                reader.onload = function (e) {
                    $imgPreview.innerHTML = '<img src="' + e.target.result + '" width="100%" height="200px"/>';
                };
                reader.readAsDataURL(courseImage.files[0]);
                $fileErrors.innerHTML = '';
                courseImage.classList.remove('is-invalid')
            }
        }
    })

    $form.addEventListener("submit", function (event) {

        event.preventDefault()
        let elementsForm = this.elements;
        let errores = false;

        console.log(elementsForm)

        for (let index = 0; index < elementsForm.length - 1; index++) {
            if (elementsForm[index].value == ""
                && elementsForm[index].name !== ""
                && elementsForm[index].type !== "file"
                || elementsForm[index].classList.contains("is-invalid")) {
                elementsForm[index].classList.add("is-invalid");
                submitErrors.innerHTML = "Hay errores en el formulario"
                errores = true;
            }
        }
        if (!errores) {
            $form.submit()
        }
    })

})


