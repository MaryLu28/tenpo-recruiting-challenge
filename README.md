# Desafío Técnico Tenpo

Este repositorio contiene la solución a la prueba técnica para el proceso de selección de talento en Tenpo. Consulta el [enunciado del desafío](./challenge-banco-de-talentos-2025.pdf) para obtener más detalles.

## Requisitos del Entorno:

- Node.js: Se recomienda la versión 18 o superior para asegurar la compatibilidad.

## Tecnologías y Librerías Utilizadas

- Frontend:
  - React 19 (con TypeScript)
  - React Scripts
  - Styled Components
  - React Router DOM
  - Axios
- Librerías Adicionales:
  - React Spinner: Para indicadores de carga.
  - Sweet Alert 2: Para notificaciones y alertas.

## Instalación y Configuración

1. **Instalación de Dependencias:**

   ```bash
   npm install
   ```

2. **Configuración de Variables de Entorno:**

   - Crea un archivo .env en la raíz del proyecto.
   - Agrega la variable _REACT_APP_MARVEL_KEY_ con tu API Key de Marvel (enviada en el email de entrega o También se puede generar gratis en https://developer.marvel.com/).
   - Por motivos de seguridad, la API Key no se incluye directamente en el repositorio. Se entiende que, por seguridad, las "variables de ambiente" del lado del cliente no son entornos secretos, pero por simplicidad del proyecto y no agregar un backend, se utiliza para el API Key.
   - Consulta el archivo de ejemplo [.env-example](./.env-example) para la estructura.

3. **Ejecución del Proyecto:**

   ```bash
   npm start
   ```

   - La aplicación estará disponible abriendo el browser en [http://localhost:3000](http://localhost:3000)

## Detalles de Implementación

### Gestión de Autenticación con Contexto

- Se implementó un contexto de React con un provider (AuthProvider) para gestionar el estado de autenticación de los usuarios (login/logout).
- Con el _AuthProvider_ disponible para la mayoría de la aplicación, el proyecto puede extenderse para futuras funcionalidades relacionadas con la autenticación, como el cambio de contraseña.
- El componente _AuthRequired_ protege las rutas privadas, redirigiendo a los usuarios no autenticados a la página de inicio de sesión.
- Con esta arquitectura, se facilita la gestión de rutas publicas y privadas de forma simple.

### Visualización Optimizada de la Lista en la Home

- Se implementó una carga bajo demanda de los datos, solicitando lotes de 20 elementos a la API de Marvel (Personajes de Marvel Comics).
- Se utiliza un scroll infinito para cargar más elementos a medida que el usuario se desplaza, mejorando el rendimiento inicial al reducir los elementos cargados al principio.

### Propuesta para la Mejora de Llamadas al Backend

- Implementación de cache a diferentes niveles de localidad. Los mas comunes siendo locales al browser, como lo son LocalStorage API y Service Worker API; o entre el servidor de origen y el cliente, como son los CDNs (Content Delivery Networks).
- De esta forma, las siguientes veces que el usuario requiera la misma información, se obtiene del navegador o CDN, mejorando la velocidad de la aplicación, y evitando solicitudes redundantes al servidor de origen.
