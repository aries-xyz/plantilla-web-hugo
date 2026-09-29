/* ============================================================
   THEME.JS - Gestión del tema claro/oscuro
   ============================================================
   Controla el cambio entre tema oscuro y claro con persistencia
   en localStorage y reactividad a los cambios del sistema.

   PRIORIDAD DE TEMAS:
     1. Preferencia guardada en localStorage (decisión explícita del usuario)
     2. Preferencia del sistema operativo (prefers-color-scheme)
     3. Default: oscuro (definido en <html data-theme="dark"> en baseof.html)

   COMPORTAMIENTO:
     - Si el usuario no ha tocado el botón, el sitio sigue al sistema
       en tiempo real (cambia la preferencia del SO -> cambia el sitio)
     - Si el usuario hace click en el botón, se guarda su preferencia
       y el sitio deja de seguir al sistema
   ============================================================ */

document.addEventListener("DOMContentLoaded", () => {
    const html = document.documentElement;
    const button = document.getElementById("theme-toggle");

    const SYSTEM_QUERY = "(prefers-color-scheme: light)";
    const mediaQuery = window.matchMedia(SYSTEM_QUERY);

    // ¿El usuario ha expresado una preferencia explícita?
    function hasExplicitChoice() {
        const saved = localStorage.getItem("theme");
        return saved === "light" || saved === "dark";
    }

    // Aplicar el tema que pide el sistema
    function applySystemTheme() {
        const next = mediaQuery.matches ? "light" : "dark";
        html.setAttribute("data-theme", next);
        updateIcon();
    }

    // Estado inicial
    if (hasExplicitChoice()) {
        html.setAttribute("data-theme", localStorage.getItem("theme"));
    } else {
        applySystemTheme();
    }

    // Actualizar icono del botón según el tema actual
    function updateIcon() {
        button.textContent =
            html.getAttribute("data-theme") === "dark" ? "☀︎" : "☽";
    }

    updateIcon();

    // Escuchar cambios del sistema SOLO si el usuario no ha elegido
    // un tema explícito. Si guardó su preferencia, el botón manda.
    mediaQuery.addEventListener("change", () => {
        if (!hasExplicitChoice()) {
            applySystemTheme();
        }
    });

    // Cambiar tema al hacer click -> fija preferencia del usuario
    button.addEventListener("click", () => {
        const current = html.getAttribute("data-theme");
        const next = current === "dark" ? "light" : "dark";

        html.setAttribute("data-theme", next);
        localStorage.setItem("theme", next);

        updateIcon();
    });
});
