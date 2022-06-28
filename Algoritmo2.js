const boton = document.getElementById("submit");

boton.addEventListener("click", (e) => {
    e.preventDefault();
    let A = document.getElementById("n1");
    let B = document.getElementById("n2");
    let C = document.getElementById("n3");
    let D = document.getElementById("n4");
    let resultado = document.getElementById("resultado");

    //Conversion de numeros ingresados

    A = parseFloat(A.value);
    B = parseFloat(B.value);
    C = parseFloat(C.value);
    D = parseFloat(D.value);

    //Validacion numeros enteros

    if (isNaN(A) || isNaN(B) || isNaN(C) || isNaN(D) || A < 0 || B < 0 || C < 0 || D < 0) {
        respuesta.textContent = "Por favor solo ingresa numeros enteros positivos";
    }else{
        //validacion de repeticion de numero
        if (A != B && A != C && A != D && B != C && B != D && C != D) {
            const numeros = [A, B, C, D];
            console.log(numeros);
            resultado.innerHTML = "El numero mayor es: " + Math.max(...numeros) +
            "<br>" + "El valor minimo es: " + Math.min(...numeros);    
        }else{
            resultado.textContent = "Error: Ninguno de los numeros deben ser iguales";
        }
    }
});