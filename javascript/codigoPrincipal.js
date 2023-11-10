var formPer = document.getElementById("formPersona");
formPer.addEventListener("submit", validar);

function validar(e) {
    if (
        (validanome() == false) ||
        (validaidade() == false) ||
        (validalocal() == false) ||
        (validafamilia() == false) ||
        (validafamily() == false) ||
        (validatipo() == false) ||
        (validamotivos() == false) ||
        (validaaparencia() == false) ||
        (validaemail() == false)
    ) {
        e.preventDefault();
    }
}

function validanome() {
    var nome = document.getElementById('nomePersona');
    var helpIdnome = document.getElementById('helpIdNome');
    if (nome.value.length < 5) {
        helpIdnome.innerHTML = "Informe um nome!";
        nome.classList.add('erro');
        nome.classList.remove('correto');
        return false;
    } else {
        helpIdnome.innerHTML = "";
        nome.classList.remove('erro');
        nome.classList.add('correto');
        return true;
    }
}

function validaidade() {
    var idade = document.getElementById('idadePersona').value;
    var data = new Date(idade);
    var helpIdidade = document.getElementById('helpIdIdade');
    if (isNaN(data)) {
        helpIdidade.innerHTML = "Preencha o campo com a data do seu aniversário!";
        return false;
    } else {
        helpIdidade.innerHTML = "";
        return true;
    }
}

function validalocal() {
    var local = document.getElementById('localPersona');
    var helpIdTipoLocal = document.getElementById('helpIdTipoLocal');
    if (local.value === '') {
        helpIdTipoLocal.innerHTML = "Preencha com o local de onde sua família é originária!";
        local.classList.add('erro');
        return false;
    } else {
        helpIdTipoLocal.innerHTML = "";
        local.classList.remove('erro');
        return true;
    }
}

function validafamilia() {
    var familia = document.getElementById('familiaPersona');
    var helpIdTipoFamilia = document.getElementById('helpIdTipoFamilia')
    if (familia.value === '') {
        helpIdTipoFamilia.innerHTML = "Por favor, preencher campo";
        familia.classList.add('erro');
        return false;
    } else {
        helpIdTipoFamilia.innerHTML = "";
        familia.classList.remove('erro');
        return true;
    }
}

function validafamily() {
    var family = document.getElementById('familyPersona');
    var helpIdTipoFamily = document.getElementById('helpIdTipoFamily');
    if (family.value === '') {
        helpIdTipoFamily.innerHTML = "Por favor, preemcer caso."
        family.classList.add('erro');
        return false;
    } else {
        helpIdTipoFamily.innerHTML = "";
        family.classList.remove('erro');
        return true;
    }
}

function validatipo() {
    var tipoPersona = document.getElementsByName("tipoPersona");
    var helpIdTipoPersonagem = document.getElementById('helpIdTipoPersonagem');
    for (var i = 0; i < tipoPersona.length; i++) {
        if (tipoPersona[i].checked) {
            helpIdTipoPersonagem.innerHTML = "";
            return true;
        }
    }
    helpIdTipoPersonagem.innerHTML = "Selecione uma opção.";
    return false;
}

function validamotivos() {
    var motivos = document.getElementById('motivosPersona');
    if (motivos.value === '') {
        motivos.classList.add('erro');
        return false;
    } else {
        motivos.classList.remove('erro');
        return true;
    }
}

function validaaparencia() {
    var aparencia = document.getElementById('aparenciaPersona');
    if (aparencia.value === '') {
        aparencia.classList.add('erro');
        return false;
    } else {
        aparencia.classList.remove('erro');
        return true;
    }
}

function validaemail() {
    var email = document.getElementById('email').value;
    var helpIdTipoEmail = document.getElementById('helpIdTipoEmail');
    if (email.indexOf("@") == -1) {
        helpIdTipoEmail.innerHTML = "Email inválido";
        return false;
    } else {
        var usuario = email.substring(0, email.indexOf("@"));
        var dominio = email.substring(email.lastIndexOf("@") + 1, email.length);
        helpIdTipoEmail.innerHTML = usuario + dominio;
        return true;
    }
}
