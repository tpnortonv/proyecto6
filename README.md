# 🛒 Backend de Gestión de Usuarios y Productos

Este backend ha sido desarrollado utilizando tecnologías modernas como Node.js, Express y MongoDB. Su principal objetivo es gestionar la autenticación de usuarios mediante tokens JWT, permitir el registro y login de usuarios, y ofrecer un conjunto completo de operaciones CRUD (Crear, Leer, Actualizar, Eliminar) para la gestión de productos. Además, el sistema se asegura de que solo los usuarios autenticados y autorizados puedan realizar modificaciones o consultar información sensible.

La aplicación permite a los usuarios gestionar su perfil, iniciar sesión para obtener un token de autenticación, y actualizar su información personal. Los productos también son manejados a través de un sistema CRUD, que permite a los administradores del sistema agregar, actualizar, leer y eliminar productos de un catálogo. Todo esto está asegurado a través de la implementación de JWT para la autenticación y la validación de permisos.

El proyecto utiliza MongoDB como base de datos NoSQL para almacenar tanto la información de los usuarios como de los productos, lo que permite una escalabilidad y flexibilidad en el manejo de los datos.

## 🚀 Tecnologías Utilizadas

El backend ha sido desarrollado utilizando las siguientes tecnologías:

- **Node.js**: Una plataforma de desarrollo basada en JavaScript para crear aplicaciones escalables y rápidas, permitiendo la ejecución del código del lado del servidor.
- **Express.js**: Un framework minimalista para Node.js que facilita la creación de APIs y servidores web. Proporciona una estructura robusta para gestionar rutas, middlewares y respuestas HTTP.
- **MongoDB**: Una base de datos NoSQL que almacena datos en formato de documentos BSON (una extensión de JSON). MongoDB es ideal para proyectos que requieren flexibilidad en el almacenamiento y consulta de datos.
- **Mongoose**: Una biblioteca para MongoDB que simplifica la interacción con la base de datos. Mongoose facilita la validación de datos y la creación de modelos para manejar documentos de MongoDB de manera eficiente.
- **JSON Web Token (JWT)**: Utilizado para la autenticación y autorización. JWT permite la creación de tokens que validan la identidad de un usuario y le otorgan acceso a recursos protegidos del sistema.
- **Dotenv**: Una herramienta para cargar variables de entorno desde un archivo `.env` a las variables de entorno de Node.js. Esto es útil para mantener configuraciones y secretos de forma segura, como las credenciales de la base de datos y claves API.
- **Thunder Client / Postman**: Herramientas utilizadas para probar las APIs. Ambas permiten enviar solicitudes HTTP a los endpoints de la aplicación para verificar su funcionamiento y depurar problemas de manera eficiente.

## 📌 Instalación

Para comenzar a trabajar con este proyecto, sigue los siguientes pasos de instalación:

1. **Clona el repositorio**:
   Primero, clona el repositorio de GitHub en tu máquina local usando el siguiente comando:
   ```bash
   git clone https://github.com/tpnortonv/proyecto6
