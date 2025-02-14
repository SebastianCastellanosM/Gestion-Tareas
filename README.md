# Descripción del Proyecto

El proyecto Gestión de Tareas es una aplicación web diseñada para facilitar la organización y seguimiento de tareas dentro de proyectos. A través de esta plataforma, los usuarios pueden crear proyectos, asignar tareas, marcar su progreso y colaborar con otros miembros del equipo.

El sistema está dividido en dos roles principales: Administrador y Usuario Regular. El Administrador tiene acceso completo para gestionar proyectos, usuarios y tareas, mientras que el Usuario Regular tiene la capacidad de gestionar y completar tareas dentro de los proyectos a los que está asignado.

El proyecto se construye utilizando tecnologías modernas como Next.js para el frontend, Prisma para la gestión de la base de datos, y GraphQL para la interacción con la API. Además, la autenticación se maneja a través de NextAuth.js para asegurar una experiencia de usuario fluida y segura.

## Funcionalidades Principales

###Gestión de Usuarios

- Administradores pueden crear, editar y eliminar usuarios.
- Usuarios pueden actualizar sus perfiles, pero no pueden gestionar otros usuarios.

###Gestión de Proyectos

- Administradores pueden crear, editar y eliminar proyectos.
- Usuarios pueden ver los proyectos a los que están asignados y seguir el progreso de las tareas.

###Gestión de Tareas

- Administradores pueden asignar tareas a usuarios, establecer fechas de vencimiento y marcar tareas como completadas.
- Usuarios pueden ver las tareas asignadas, marcarlas como completadas y agregar comentarios.

###Autenticación de Usuarios

- Implementación de inicio de sesión y autenticación con NextAuth.js.
- Los roles de usuario se asignan al momento de la creación de la cuenta (Administrador o Usuario Regular).

###Interfaz de Usuario

- Diseño limpio y funcional utilizando React y TailwindCSS.
- Dashboard para visualizar proyectos, tareas y usuarios de manera rápida y eficiente.

###API GraphQL
- Uso de GraphQL para realizar operaciones CRUD (Crear, Leer, Actualizar, Eliminar) en los proyectos, usuarios y tareas.
- Apollo Server gestionando las consultas y mutaciones de GraphQL.

###Seguridad
- Roles diferenciados para Administradores y Usuarios, asegurando que solo los administradores puedan realizar ciertas acciones como la gestión de usuarios y proyectos.


# Tecnologías Usadas

##Backend

- Node.js: Entorno de ejecución para el servidor.
- Next.js: Framework para React, utilizado para construir la aplicación de servidor y cliente.
- Apollo Server: Para la implementación de GraphQL, gestionando consultas y mutaciones en la base de datos.
- GraphQL: Lenguaje de consulta para la API, utilizado para realizar operaciones CRUD sobre proyectos, usuarios y tareas.
- Prisma: ORM para interactuar con la base de datos y gestionar modelos de datos.
- Supabase: Base de datos backend y servicios de autenticación para usuarios.

##Frontend

- React: Biblioteca de JavaScript para construir interfaces de usuario dinámicas.
- TailwindCSS: Framework de CSS para diseñar interfaces de usuario con un enfoque en la productividad y diseño responsivo.
- NextAuth.js: Librería para la autenticación de usuarios, con soporte para roles como ADMIN y USER.

##Otras herramientas

- GitHub: Control de versiones y colaboración en el proyecto.
- Vercel: Plataforma para el despliegue continuo de la aplicación web.



# Usuarios
### Usuario ADMIN
Email: admin@gmail.com
Password: Admin123*

### Usuario USER
Email: user@gmail.com
Password: User123*



![{42CD7524-8B76-4C99-8FC3-DCB242F1DB7D}](https://github.com/user-attachments/assets/47e66a7e-070d-43f4-a244-0cc5e85f97dc)

