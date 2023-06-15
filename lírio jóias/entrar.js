// Script para manipulação dos dados do formulário e validação de idade

// Função para exibir uma mensagem de erro
function showError(message) {
    const errorElement = document.getElementById("error");
    errorElement.textContent = message;
    errorElement.style.display = "block";
  }
  
  // A função será executada quando o formulário for enviado
  function handleFormSubmit(event) {
    event.preventDefault(); // Impede o envio padrão do formulário
  
    // Obter os valores dos campos de entrada
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const cpf = document.getElementById("cpf").value;
    const phone = document.getElementById("phone").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const age = document.getElementById("age").value;
    const gender = document.getElementById("gender").value;
  
    // Verificar se a idade é maior ou igual a 18
    if (age < 18) {
      showError("Você deve ter pelo menos 18 anos para entrar.");
      return;
    }
  
    // Armazenar os valores no armazenamento local
    localStorage.setItem("firstName", firstName);
    localStorage.setItem("lastName", lastName);
    localStorage.setItem("cpf", cpf);
    localStorage.setItem("phone", phone);
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);
    localStorage.setItem("age", age);
    localStorage.setItem("gender", gender);
  
    // Redirecionar para a página de perfil
    window.location.href = "dados.html";
  }
  
  // A função será executada na página de perfil do usuário
  function displayUserProfile() {
    // Obter os valores armazenados do armazenamento local
    const firstName = localStorage.getItem("firstName");
    const lastName = localStorage.getItem("lastName");
    const cpf = localStorage.getItem("cpf");
    const phone = localStorage.getItem("phone");
    const email = localStorage.getItem("email");
    const age = localStorage.getItem("age");
    const gender = localStorage.getItem("gender");
  
    // Verificar se os valores existem
    if (firstName && lastName && cpf && phone && email && age && gender) {
      // Exibir os dados do usuário no perfil
      document.getElementById("userName").textContent = firstName;
      document.getElementById("userLastName").textContent = lastName;
      document.getElementById("userCPF").textContent = cpf;
      document.getElementById("userPhone").textContent = phone;
      document.getElementById("userEmail").textContent = email;
      document.getElementById("userAge").textContent = age;
      document.getElementById("userGender").textContent = gender;
      document.getElementById("userAddress").textContent = localStorage.getItem("userAddress") || "!";
      if (!localStorage.getItem("userAddress")) {
        document.getElementById("userAddress").classList.add("missing-field");
      }
    } else {
      // Redirecionar de volta para o formulário
      window.location.href = "registrar.html";
    }
  }
  
  // Verificar se estamos na página de formulário de login ou de perfil do usuário
  if (document.getElementById("loginForm")) {
    // Adicionar um ouvinte de evento para o envio do formulário
    document.getElementById("loginForm").addEventListener("submit", handleFormSubmit);
  } else {
    // Chamar a função para exibir o perfil do usuário
    displayUserProfile();
  }
  
  // Pop-up
  const addAddressButton = document.querySelector(".add-address button");
  const popup = document.getElementById("popup");
  const popupClose = document.querySelector(".popup-close");
  
  addAddressButton.addEventListener("click", function () {
    popup.style.visibility = "visible";
  });
  
  popupClose.addEventListener("click", function () {
    popup.style.visibility = "hidden";
  });
  