document.querySelectorAll('[type="password"]').forEach(input => {
    const toggle = input.parentElement.querySelector('button');
    if (!toggle) return;

    toggle.addEventListener('click', () => {
        const icon = toggle.querySelector('i');
        if (input.type === 'password') {
            input.type = 'text';
            icon.classList.replace('fa-eye-slash', 'fa-eye');
        } else {
            input.type = 'password';
            icon.classList.replace('fa-eye', 'fa-eye-slash');
        }
    });
});
tailwind.config = {
    theme: {
        extend: {
            colors: {
                primary: '#6366f1',
                'primary-hover': '#4f46e5',
                dark: '#1e293b',
                'dark-light': '#334155',
            },
            animation: {
                'float': 'float 6s ease-in-out infinite',
                'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-10px)' }
                }
            }
        }
    }
}