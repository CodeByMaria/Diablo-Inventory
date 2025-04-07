// Função para o clique no link "Home"
document.getElementById('home-link').addEventListener('click', function (event) {
    event.preventDefault(); // Impede o comportamento padrão de navegação do link
    // Exibir a tela principal (Home)
    mostrarTelaPrincipal(); // Chama a função que mantém o conteúdo principal visível
});

// Função para exibir a tela principal
function mostrarTelaPrincipal() {
    // Aqui você pode controlar a exibição de diferentes seções da página, se necessário
    // No caso, a tela principal já está visível, então apenas podemos garantir que o conteúdo esteja na tela inicial.
    document.getElementById('register-form').style.display = 'none'; // Esconde o formulário de cadastro
    document.getElementById('login-form').style.display = 'none'; // Esconde o formulário de login
    document.getElementById('inventory').style.display = 'none'; // Esconde o inventário, se necessário
}


// Resto do código permanece o mesmo...
document.getElementById('register-link').addEventListener('click', function(event) {
    event.preventDefault();
    // Exibe o formulário de registro e esconde os outros
    document.getElementById('register-form').style.display = 'block';
    document.getElementById('login-form').style.display = 'none';
    document.getElementById('inventory').style.display = 'none';
    
    // Altera a classe 'active' na navegação
    setActiveLink('register-link');
});

document.getElementById('login-link').addEventListener('click', function(event) {
    event.preventDefault();
    // Exibe o formulário de login e esconde os outros
    document.getElementById('login-form').style.display = 'block';
    document.getElementById('register-form').style.display = 'none';
    document.getElementById('inventory').style.display = 'none';
    
    // Altera a classe 'active' na navegação
    setActiveLink('login-link');
});

document.addEventListener('DOMContentLoaded', function () {
    const loginLink = document.getElementById('login-link');
    const registerLink = document.getElementById('register-link');
    const inventoryLink = document.getElementById('inventory-link');
    const homeLink = document.getElementById('home-link'); // Apenas referência, sem evento

    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');
    const loggedInContent = document.getElementById('logged-in-content');
    const formLogin = document.getElementById('form-login');
    const errorMessage = document.getElementById('error-message');
    const userName = document.getElementById('user-name');

    let isLoggedIn = false; // Controla se o usuário está logado

    // 🔹 Função para ocultar todas as seções antes de exibir uma nova
    function hideAllSections() {
        loginForm.style.display = 'none';
        registerForm.style.display = 'none';
        loggedInContent.style.display = 'none';
    }

    // 🔹 Quando o usuário clica em "Login"
    loginLink.addEventListener('click', function () {
        hideAllSections();
        loginForm.style.display = 'block';
    });

    // 🔹 Quando o usuário clica em "Register"
    registerLink.addEventListener('click', function () {
        hideAllSections();
        registerForm.style.display = 'block';
    });

    // 🔹 Quando o usuário faz login
    formLogin.addEventListener('submit', function (e) {
        e.preventDefault();

        const email = document.getElementById('email-login').value;
        const password = document.getElementById('password-login').value;

        // 🔹 Simulação de login (troque por autenticação real)
        if (email === 'cah@hotmail.com' && password === '123') {
            isLoggedIn = true; // Marca usuário como logado
            hideAllSections();
            loggedInContent.style.display = 'block'; // Exibe o conteúdo do usuário logado
            userName.textContent = email.split('@')[0]; // Exibe o nome do usuário
        } else {
            errorMessage.textContent = 'Credenciais inválidas, tente novamente.';
        }
    });

    // 🔹 Quando o usuário clica em "Inventory"
    inventoryLink.addEventListener('click', function () {
        if (isLoggedIn) {
            hideAllSections();
            loggedInContent.style.display = 'block';
        } else {
            alert("Você precisa estar logado para acessar o inventário.");
        }
    });

    // ❌ Nenhuma ação para o botão Home, então ele mantém a tela atual!
});

document.addEventListener("DOMContentLoaded", function () {
    const home = document.getElementById("home-content");
    const register = document.getElementById("register-form");
    const login = document.getElementById("login-form");
    const inventory = document.getElementById("inventory");

    document.getElementById("home-link").addEventListener("click", function () {
        home.style.display = "block";
        register.style.display = "none";
        login.style.display = "none";
        inventory.style.display = "none";
    });

    document.getElementById("register-link").addEventListener("click", function () {
        home.style.display = "none";
        register.style.display = "block";
        login.style.display = "none";
        inventory.style.display = "none";
    });

    document.getElementById("login-link").addEventListener("click", function () {
        home.style.display = "none";
        register.style.display = "none";
        login.style.display = "block";
        inventory.style.display = "none";
    });

    document.getElementById("inventory-link").addEventListener("click", function () {
        home.style.display = "none";
        register.style.display = "none";
        login.style.display = "none";
        inventory.style.display = "block";
    });
});
