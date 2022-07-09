function qs(element) {
    return document.querySelector(element)
}

window.addEventListener("load", () => {
    let $inputName = qs('#name'),
        $nameErrors = qs('#nameErrors'),
        $price = qs('#price'),
        $priceErrors = qs('#priceErrors'),
        $description = qs ('#description'),
        $descriptionErrors = qs ('#descriptionErrors'),
                
        regExAlpha = /^[a-zA-Z\sñáéíóúü ]*$/,
        regExPrice = /^[0-9]{7,8}$/,
        regExCategory = /^[a-zA-Z\sñáéíóúü ]*$/,
        regExDescription = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{20,100}$/;
        

    $inputName.addEventListener("blur", () => {
        switch (true) {
            case !$inputName.value.trim():
                $nameErrors.innerHTML = "Requerido";
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
                $priceErrors.innerHTML = "Requerido";
                $price.classList.add("is-invalid");
                break;
            case !regExPrice.test($price.value):
                $priceErrors.innerHTML = "Ingrese un precio válido";
                $price.classList.add("is-invalid");
                break;
            default:
                $price.classList.remove("is-invalid");
                $price.classList.add("is-valid");
                $priceErrors.innerHTML = "";
                break;
        }
    })
    
    $category.addEventListener("blur", () => {
        switch (true) {
            case !$category.value.trim():
                $categoryErrors.innerHTML = "Requerido";
                $category.classList.add("is-invalid");
                break;
            case !regExCategory.test($category.value):
                $categoryErrors.innerHTML = "Requerido";
                $category.classList.add("is-invalid");
                break;
            default:
                $category.classList.remove("is-invalid");
                $category.classList.add("is-valid");
                $categoryErrors.innerHTML = "";
                break;
        }
    })
    
    $description.addEventListener("blur", () => {
        switch (true) {
            case !$description.value.trim():
                $descriptionErrors.innerHTML = "Requerido";
                $description.classList.add("is-invalid");
                break;
            case !regExDescription.test($description.value):
                $descriptionErrors.innerHTML = "Ingrese la descripción del curso";
                $description.classList.add("is-invalid");
                break;
            default:
                $description.classList.remove("is-invalid");
                $description.classList.add("is-valid");
                $descriptionErrors.innerHTML = "";
                break;
        }
    })
           
      
    $form.addEventListener("submit", function (event) {

        event.preventDefault()
        let elementsForm = this.elements;
        let errores = false;

        console.log(elementsForm)

        for (let index = 0; index < elementsForm.length - 1; index++) {
            if (elementsForm[index].value == ""
                && elementsForm[index].name !== "apellido"
                && elementsForm[index].type !== "file"
                || elementsForm[index].classList.contains("is-invalid")) {
                elementsForm[index].classList.add("is-invalid");
                submitErrors.innerHTML = "Hay errores en el formulario"
                errores = true;
            }
        }
    })

})


