function qs(element) {
    return document.querySelector(element)
}

window.addEventListener("load", () => {
    let $inputName = qs('#name'),
        $nameErrors = qs('#nameErrors'),
        $price = qs('#price'),
        $priceErrors = qs('#priceErrors'),
        $instructor = qs('#instructor'),
        $instructorErrors = qs('#instructorErrors'),
        $contentHours = qs('#contentHours'),
        $contentHoursErrors = qs('#contentHoursErrors'),
        $practiceTime = qs('#practiceTime'),
        $practiceTimeErrors = qs('#practiceTimeErrors'),
        $lessons = qs('#lessons'),
        $lessonErrors = qs('#lessonErrors'),
        $category = qs('#category'),
        $categoryErrors = ('#categoryErrors')
        $description = qs ('#description'),
        $descriptionErrors = qs ('#descriptionErrors'),
        avatar = qs('#avatar'),
        $form = qs('#form'),
        submitErrors = qs('#submitErrors')
        $fileErrors = qs('#fileErrors'),
        $imgPreview = qs('#img-preview'),
        
        
        regExAlpha = /^[a-zA-Z\sñáéíóúü ]*$/,
        regExPrice = /^[0-9]{4,6}$/,
        regExInstructor = /^[a-zA-Z\sñáéíóúü ]*$/,
        regExContentHours = /^[0-9]{1,4}$/,
        regExPracticeTime = /^[0-9]{1,4}$/,
        regExLessons = /^[0-9]{1,4}$/,
        regExCategory = /^[a-zA-Z\sñáéíóúü ]*$/,
        regExDescription = /^([a-zA-Z\sñáéíóúü0-9 _-]+){10,100}$/;
        

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
    $instructor.addEventListener("blur", () => {
        switch (true) {
            case !$instructor.value.trim():
                $instructorErrors.innerHTML = "Nombre del instructor requerido";
                $instructor.classList.add("is-invalid");
                break;
            case !regExInstructor.test($instructor.value):
                $instructorErrors.innerHTML = "Ingrese un nombre válido";
                $instructor.classList.add("is-invalid");
                break;
            default:
                $instructor.classList.remove("is-invalid");
                $instructor.classList.add("is-valid");
                $instructorErrors.innerHTML = "";
                break;
        }
    })
    $contentHours.addEventListener("blur", () => {
        switch (true) {
            case !$contentHours.value.trim():
                $contentHoursErrors.innerHTML = "Cantidad de horas requeridas";
                $contentHours.classList.add("is-invalid");
                break;
            case !regExContentHours.test($contentHours.value):
                $contentHoursErrors.innerHTML = "Ingrese un número válido";
                $contentHours.classList.add("is-invalid");
                break;
            default:
                $contentHours.classList.remove("is-invalid");
                $contentHours.classList.add("is-valid");
                $contentHoursErrors.innerHTML = " ";
                break;
        }
    })
    $practiceTime.addEventListener('blur', function () {
        switch (true) {
            case !$practiceTime.value.trim():
                $practiceTimeErrors.innerHTML = 'Ingrese un número válido'
                $practiceTime.classList.add('is-invalid')
                break;
            case !regExPracticeTime.test($practiceTime.value):
                $practiceTimeErrors.innerHTML = " ";
                $practiceTime.classList.add('is-invalid')
                break;
            default:
                $practiceTime.classList.remove("is-invalid");
                $practiceTime.classList.add('is-valid')
                $practiceTimeErrors.innerHTML = ""
                break;
        }
    })
    $lessons.addEventListener("blur", () => {
        switch (true) {
            case !$lessons.value.trim():
                $lessonErrors.innerHTML = "Cantidad de lecciones requeridas";
                $lessons.classList.add("is-invalid");
                break;
            case !regExLessons.test($lessons.value):
                $lessonErrors.innerHTML = "Ingrese un número válido";
                $lessons.classList.add("is-invalid");
                break;
            default:
                $lessons.classList.remove("is-invalid");
                $lessons.classList.add("is-valid");
                $lessonErrors.innerHTML = " ";
                break;
        }
    })
    $category.addEventListener("blur", () => {
        switch (true) {
            case !$category.value.trim():
                $categoryErrors.innerHTML = "Categoría requerida";
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
                $descriptionErrors.innerHTML = "Descripción del curso requerida";
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
    courseImage.addEventListener('change', function fileValidation(){
        let filePath = courseImage.value, 
            allowefExtensions = /(.jpg|.jpeg|.png|.gif|.web)$/i 
        if(!allowefExtensions.exec(filePath)){ 
            $fileErrors.innerHTML = 'Carga un archivo de imagen válido, con las extensiones (.jpg - .jpeg - .png - .gif)';
            courseImage.value = '';
            $imgPreview.innerHTML = '';
            return false;
        }else{
            console.log(courseImage.files);
            if(courseImage.files && courseImage.files[0]){
                let reader = new FileReader();
                reader.onload = function(e){
                    $imgPreview.innerHTML = '<img src="' + e.target.result +'" width="100%" height="200px"/>';
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
        if(!errores){
            $form.submit()
        }
    })
})