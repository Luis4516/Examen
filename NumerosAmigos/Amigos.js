let btn = document.querySelector('#btn');
btn.addEventListener('click', sonAmigos);
    function numeros() {
        let n1 = document.querySelector("#numero1").value;
        let n2 = document.querySelector("#numero2").value;

    }

    function sonAmigos(sumaUno,sumaDos) {
        if(sumaUno == n1) {
            return true;
        }
        else {
            return false;
        }
    }

    function sumaUno(n1) {
        let sumaUno = 0;
        for(i=1; i<n1; i++) {
            if(n1%i == 0) {
                sumaUno+= i;
            }
        }
        return sumaUno
    }