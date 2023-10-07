    // Selecciona el elemento del header
    const header = document.querySelector('.main-header');
    
    // Función para controlar el cambio de color del header al hacer scroll
    function handleHeaderColorChange() {
        if (window.scrollY > 0) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    }
    
    // Agrega un evento de desplazamiento para controlar el cambio de color
    window.addEventListener('scroll', handleHeaderColorChange);