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
        $inputFile = qs('#inputFile');
        $inputFileErrors = qs('#inputFileErrors'),
        
        regExAlpha = /^[a-zA-Z\sñáéíóúü ]*$/,
        regExPrice = /^[0-9]{7,8}$/,
        regExInstructor = /^[a-zA-Z\sñáéíóúü ]*$/,
        regExContentHours = /^[0-9]{7,8}$/,
        regExPracticeTime = /^[0-9]{7,8}$/,
        regExLessons = /^[0-9]{7,8}$/,
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
$instructor.addEventListener("blur", () => {
    switch (true) {
        case !$instructor.value.trim():
            $instructorErrors.innerHTML = "Requerido";
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
            $contentHoursErrors.innerHTML = "Requerido";
            $contentHours.classList.add("is-invalid");
            break;
        case !regExContentHours.test($contentHours.value):
            $contentHoursErrors.innerHTML = "Ingrese un número válido";
            $contentHours.classList.add("is-invalid");
            break;
        default:
            $contentHours.classList.remove("is-invalid");
            $contentHours.classList.add("is-valid");
            $contentHoursErrors.innerHTML = "el valor debe ser mayor a cero";
            break;
    }
})
$practiceTime.addEventListener('blur', function () {
    switch (true) {
        case !$practiceTime.value.trim():
            $practiceTimeErrors.innerHTML = 'Ingrese un número válido'
            $practiceTime.classList.add('is-invalid')
            break;
        case !regExPracticeTime.test($pass.value):
            $practiceTimeErrors.innerHTML = 'el valor debe ser mayor a cero';
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
            $lessonErrors.innerHTML = "Requerido";
            $lessons.classList.add("is-invalid");
            break;
        case !regExLessons.test($lessons.value):
            $lessonErrors.innerHTML = "Ingrese un número válido";
            $lessons.classList.add("is-invalid");
            break;
        default:
            $lessons.classList.remove("is-invalid");
            $lessons.classList.add("is-valid");
            $lessonErrors.innerHTML = "el valor debe ser mayor a cero";
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
       
    $file.addEventListener('change',
        function fileValidation() {
            let filePath = $file.value, //Capturo el valor del input
                allowefExtensions = /(.jpg|.jpeg|.png|.gif|.web)$/i //Extensiones permitidas
            if (!allowefExtensions.exec(filePath)) { //El método exec() ejecuta una busqueda sobre las coincidencias de una expresión regular en una cadena especifica. Devuelve el resultado como array, o null.
                $fileErrors.innerHTML = 'Carga un archivo de imagen válido, con las extensiones (.jpg - .jpeg - .png - .gif)';
                $file.value = '';
                $imgPreview.innerHTML = '';
            }
            else {
                // Image preview
                console.log($file.files);
                if ($file.files && $file.files[0]) {
                    let reader = new FileReader();
                    reader.onload = function (e) {
                        $imgPreview.innerHTML = '<img src="' + e.target.result + '"/>';
                    };
                    reader.readAsDataURL($file.files[0]);
                    $fileErrors.innerHTML = '';
                    $file.classList.remove('is-invalid')
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
                    && elementsForm[index].name !== "apellido"
                    && elementsForm[index].type !== "file"
                    || elementsForm[index].classList.contains("is-invalid")) {
                    elementsForm[index].classList.add("is-invalid");
                    submitErrors.innerHTML = "Hay errores en el formulario"
                    errores = true;
                }
            }
    })
