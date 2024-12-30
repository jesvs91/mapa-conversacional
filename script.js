function navigateTo(sectionId) {
    // Ocultar todas las secciones
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.classList.add('hidden');
    });

    // Mostrar la sección deseada
    const section = document.getElementById(sectionId);
    if (section) {
        section.classList.remove('hidden');
    }
}

// Mostrar la primera sección al cargar la página (opcional)
document.addEventListener('DOMContentLoaded', function() {
    navigateTo('presentacion'); // O la sección que quieras mostrar primero
});
