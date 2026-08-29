document.addEventListener("DOMContentLoaded", () => {

    // Carga un componente HTML (navbar / sidebar) dentro de un contenedor
    const cargarComponente = (idContenedor, rutaArchivo, alCargar) => {
        fetch(rutaArchivo)
            .then(response => {
                if (!response.ok) throw new Error("Error al cargar " + rutaArchivo);
                return response.text();
            })
            .then(html => {
                document.getElementById(idContenedor).innerHTML = html;
                if (alCargar) alCargar();
            })
            .catch(error => console.error(error));
    };

    cargarComponente("navbar-contenedor", "navbar.html");
    cargarComponente("sidebar-contenedor", "sidebar.html", () => {
        const btnCerrarSesion = document.getElementById("btnCerrarSesion");
        if (btnCerrarSesion) {
            btnCerrarSesion.addEventListener("click", (evento) => {
                const confirmar = confirm("¿Seguro que deseas cerrar sesión?");
                if (!confirmar) evento.preventDefault();
            });
        }
    });
});
