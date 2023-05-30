document.addEventListener("DOMContentLoaded", function() {
    const textArea = document.querySelector(".text-area");
    const mensajeEncriptado = document.querySelector(".mensaje-encriptado");
    const imagenMensaje = document.querySelector("#munheco-encriptado");
    const btnEncriptar = document.querySelector(".btn-encriptar");
    const btnDesencriptar = document.querySelector(".btn-desencriptar");
    const copiarBtn = document.querySelector(".copiar");
  
    btnEncriptar.addEventListener("click", function() {
      const textoEncriptado = encriptar(textArea.value);
      mensajeEncriptado.querySelector("h1").textContent = "";
      mensajeEncriptado.querySelector("p").textContent = "";
      mensajeEncriptado.querySelector("textarea").value = textoEncriptado;
      textArea.value = "";
      ocultarImagen();
      mostrarTextarea();
    });
  
    btnDesencriptar.addEventListener("click", function() {
      const textoEncriptado = mensajeEncriptado.querySelector("textarea").value;
      const textoDesencriptado = desencriptar(textoEncriptado);
      textArea.value = textoDesencriptado;
      mensajeEncriptado.querySelector("textarea").value = "";
      ocultarImagen();
      mostrarTextarea();
    });
  
    copiarBtn.addEventListener("click", function() {
      mensajeEncriptado.querySelector("textarea").select();
      document.execCommand("copy");
    });
  
    function ocultarImagen() {
      imagenMensaje.style.display = "none";
    }
  
    function mostrarTextarea() {
      const textarea = mensajeEncriptado.querySelector("textarea");
      textarea.style.display = "block";
      textarea.readOnly = true;
    }
  
    function encriptar(stringEncriptado) {
      const matrizCodigo = [
        ["e", "enter"],
        ["i", "imes"],
        ["a", "ai"],
        ["o", "ober"],
        ["u", "ufat"]
      ];
      stringEncriptado = stringEncriptado.toLowerCase();
  
      for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringEncriptado.includes(matrizCodigo[i][0])) {
          stringEncriptado = stringEncriptado.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
      }
      return stringEncriptado;
    }
  
    function desencriptar(stringDesencriptado) {
      const matrizCodigo = [
        ["enter", "e"],
        ["imes", "i"],
        ["ai", "a"],
        ["ober", "o"],
        ["ufat", "u"]
      ];
  
      for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringDesencriptado.includes(matrizCodigo[i][0])) {
          stringDesencriptado = stringDesencriptado.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
      }
      return stringDesencriptado;
    }
  });
  