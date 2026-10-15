const passwordInput = document.getElementById('passwordInput');
const toggleBtn = document.getElementById('toggleBtn');
const strengthBar = document.getElementById('strengthBar');
const strengthLabel = document.getElementById('strengthLabel');
const passwordForm = document.getElementById('passwordForm');
const errorMessage = document.getElementById('errorMessage');

toggleBtn.addEventListener('click', function () {
    // Если пароль скрыт — показываем
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        toggleBtn.setAttribute('aria-label', 'Скрыть пароль');
        toggleBtn.parentElement.classList.add('visible');
    } else {
        // Иначе — прячем обратно
        passwordInput.type = 'password';
        toggleBtn.setAttribute('aria-label', 'Показать пароль');
        toggleBtn.parentElement.classList.remove('visible');
    }
});

function checkPassword(password) {
    return {
        length: password.length >= 8,                 // длина от 8 символов
        upper: /[A-ZА-Я]/.test(password),            // есть заглавная буква
        digit: /[0-9]/.test(password),               // есть цифра
        special: /[^A-Za-zА-Яа-я0-9]/.test(password)  // есть спецсимвол
    };
}

// Помощник: считает, сколько true в checks (от 0 до 4)
function countStrength(checks) {
    let count = 0;
    Object.values(checks).forEach(function (value) {
        if (value) {
            count = count + 1;
        }
    });
    return count;
}

// ШАГ 1: упаковываем цикл в функцию updateUI
function updateUI() {

    // ШАГ 2: внутри берём пароль из поля и вызываем checkPassword —
    // вот где рождается переменная checks!
    const password = passwordInput.value;      // текст из поля
    const checks = checkPassword(password);     // { length: false, upper: true, ... }

    document.querySelectorAll('.requirements li').forEach(function (item) {
        const key = item.dataset.requirement;
        if (checks[key]) {
            item.classList.add('valid');
        } else {
            item.classList.remove('valid');
        }
    });

    let strength = countStrength(checks);       // сколько требований выполнено (0–4)

    if (password.length === 0) {
        strengthBar.style.width = '0%';
        strengthLabel.textContent = 'Надёжность пароля';   // ← было: strengthBar
        strengthLabel.style.color = 'rgba(255, 255, 255, 0.55)';
    } else if (strength <= 1) {
        strengthBar.style.width = '25%';
        strengthBar.style.background = '#ef4444';
        strengthLabel.textContent = 'Слабый пароль';
    } else if (strength === 2) {
        strengthBar.style.width = '50%';
        strengthBar.style.background = '#f59e0b';
        strengthLabel.textContent = 'Средний пароль';
    } else if (strength === 3) {
        strengthBar.style.width = '75%';
        strengthBar.style.background = '#7f9635';   // твой цвет для 75%
        strengthLabel.textContent = 'Хороший пароль';
    } else if (strength === 4) {
        strengthBar.style.width = '100%';
        strengthBar.style.background = '#22c55e';
        strengthLabel.textContent = 'Отличный пароль!';
    }

}

// ШАГ 3: подключаем — при КАЖДОМ вводе символа вызываем updateUI
passwordInput.addEventListener('input', updateUI);



passwordForm.addEventListener('submit', function (event) {
    event.preventDefault();                      // НЕ перезагружать страницу!

    const checks = checkPassword(passwordInput.value);   // проверка пароля

    // Считаем, сколько true в checks (от 0 до 4)
    const strength = countStrength(checks);

    if (strength === 4) {
        errorMessage.textContent = '';            /* — стереть ошибку */
         alert('Пароль принят!');
        passwordInput.value = '';                 /* — очистить поле */
        updateUI();  
    } else {
        errorMessage.textContent = 'Пароль не соответствует требованиям выше.';
    }
});
