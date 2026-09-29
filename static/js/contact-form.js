/* ============================================================
   CONTACT-FORM.JS - Validación del formulario de contacto
   ============================================================
   Valida que los campos obligatorios estén completados antes
   de enviar el formulario.

   Si el usuario intenta enviar sin completar los campos,
   se bloquea el envío y se muestra una alerta.

   No necesitas modificar este archivo normalmente.
   ============================================================ */

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contact-form");
    if (!form) return;  // Salir si no hay formulario en la página

    form.addEventListener("submit", (e) => {
        const name = form.querySelector('#name');
        const email = form.querySelector('#email');
        const message = form.querySelector('#message');

        if (!name.value || !email.value || !message.value) {
            e.preventDefault();
            alert("Por favor, completa todos los campos antes de enviar.");
        }
    });
});
