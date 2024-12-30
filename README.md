README

Instalación y Ejecución del Proyecto
Este documento proporciona instrucciones detalladas para instalar, configurar y ejecutar el proyecto NFTY, una aplicación web desarrollada con Next.js, TypeScript, Material UI, React Hook Form, Yup y una base de datos MySQL utilizando Prisma ORM.

1. Requisitos Previos
    Antes de comenzar, asegúrese de tener instaladas las siguientes herramientas:

    Node.js (versión 18 o superior): https://nodejs.org/
    MySQL (versión 8.x o superior): https://dev.mysql.com/downloads/
    Git: https://git-scm.com/

2. Clonar el Repositorio
    Abra una terminal y ejecute los siguientes comandos:

    bash
    Copiar código
    git clone https://github.com/matiasgandolfi-cormbie/nfty-challenge
    cd nfty

3. Configuración del Entorno

3.1 Variables de Entorno
    Cree un archivo .env en la raíz del proyecto y añada las siguientes variables:

    DATABASE_URL: Cadena de conexión a la base de datos MySQL.
    NEXTAUTH_URL: URL base de la aplicación Next.js.
    NEXTAUTH_SECRET: Clave secreta para NextAuth.

    Ejemplo:
    DATABASE_URL="mysql://root:root@localhost:3306/nfty"
    NEXTAUTH_URL="http://localhost:3000"
    NEXTAUTH_SECRET="CLAVE"


3.2 Instalación de Dependencias
    Instale las dependencias del proyecto con el siguiente comando:

        npm install

3.3 Configuración de la Base de Datos
    Aplicar migraciones existentes

        npx prisma migrate deploy
        
    Genere el cliente Prisma:

        npx prisma generate

    Inserte datos iniciales utilizando el archivo de seed:

        npx prisma db seed


4. Ejecución de la Aplicación


4.1 Entorno de Desarrollo
    Para iniciar el servidor de desarrollo, ejecute:

        npm run dev


    Abra su navegador y visite la siguiente URL:

        http://localhost:3000


5. Dependencias Clave
    Frontend
        React.js: Framework para el desarrollo de la interfaz de usuario.
        Next.js: Framework para renderizado y enrutamiento.
        Material UI: Librería de componentes UI.
        React Hook Form: Manejo eficiente de formularios.
        Yup: Validación de formularios.

    Backend
        Prisma ORM: Manejo de base de datos MySQL.
        NextAuth.js: Autenticación de usuarios.

6. Seguridad

    Almacene las claves y configuraciones sensibles en el archivo .env.
    No exponga la clave secreta de NextAuth en el cliente.
    Use siempre HTTPS en producción para proteger las transmisiones de datos.


7. Notas Finales

    La sesión del usuario se mantiene activa mientras está autenticado.
    Los datos críticos se almacenan en localStorage para evitar pérdidas de información en caso de cierre inesperado del navegador.


8. Contacto
Desarrollador: Matias Gandolfi Perez
Correo electrónico: matias.gandolfi@crombie.dev
LinkedIn: https://www.linkedin.com/in/matiasgandolfi/
