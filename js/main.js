document.addEventListener("DOMContentLoaded", () => {

    // Function to update the clock
    function updateClock() {
        const timeElements = document.querySelectorAll('.status-bar span:nth-child(2)');
        const now = new Date();
        let hours = now.getHours();
        let minutes = now.getMinutes();
        const ampm = hours >= 12 ? 'PM' : 'AM';

        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
        minutes = minutes < 10 ? '0' + minutes : minutes;

        const strTime = hours + ':' + minutes + ' ' + ampm;

        timeElements.forEach(el => {
            el.textContent = strTime;
        });
    }

    // Update clock every minute
    setInterval(updateClock, 1000 * 60);
    updateClock(); // initial call


    // Index page logic
    const secretTrigger = document.getElementById('secretTrigger');
    if (secretTrigger) {
        let clickCount = 0;
        let lastClickTime = 0;

        secretTrigger.addEventListener('click', () => {
            const currentTime = new Date().getTime();

            // Reset click count if more than 1 second has passed since the last click
            if (currentTime - lastClickTime > 1000) {
                clickCount = 0;
            }

            clickCount++;
            lastClickTime = currentTime;

            // Trigger admin page if clicked 3 times quickly
            if (clickCount >= 3) {
                window.location.href = 'secret-admin.html';
            }
        });
    }


    // Admin page logic
    const loginBtn = document.getElementById('loginBtn');
    const adminPasswordInput = document.getElementById('adminPassword');
    const loginArea = document.getElementById('loginArea');
    const adminContent = document.getElementById('adminContent');
    const errorMsg = document.getElementById('errorMsg');

    if (loginBtn && adminPasswordInput) {
        // The "secret" password is "vintage"
        const SECRET_PASSCODE = 'vintage';

        function checkPassword() {
            const inputVal = adminPasswordInput.value.toLowerCase().trim();
            if (inputVal === SECRET_PASSCODE) {
                // Success
                loginArea.classList.add('hidden');
                adminContent.classList.remove('hidden');
                errorMsg.classList.add('hidden');

                // Optional: Store session in localStorage so it persists until closed
                localStorage.setItem('admin_access', 'granted');
            } else {
                // Fail
                errorMsg.classList.remove('hidden');
                adminPasswordInput.value = '';
                adminPasswordInput.focus();

                // Shake effect for wrong password (simple version)
                loginArea.style.transform = 'translateX(10px)';
                setTimeout(() => loginArea.style.transform = 'translateX(-10px)', 100);
                setTimeout(() => loginArea.style.transform = 'translateX(10px)', 200);
                setTimeout(() => loginArea.style.transform = 'translateX(0)', 300);
            }
        }

        loginBtn.addEventListener('click', checkPassword);

        // Also check when pressing Enter
        adminPasswordInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                checkPassword();
            }
        });

        // Check if already authenticated
        if (localStorage.getItem('admin_access') === 'granted') {
            loginArea.classList.add('hidden');
            adminContent.classList.remove('hidden');
        }

        // Add a logout button function somewhere if needed
        window.logoutAdmin = function() {
            localStorage.removeItem('admin_access');
            location.reload();
        }
    }
});