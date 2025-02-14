# Documentación del Proyecto - Gestión de Tareas

## Descripción del Proyecto
El proyecto **Gestión de Tareas** es una aplicación web diseñada para facilitar la organización y seguimiento de tareas dentro de proyectos. A través de esta plataforma, los usuarios pueden **crear proyectos, asignar tareas, marcar su progreso y colaborar** con otros miembros del equipo.

El sistema define dos roles principales:
- **Administrador (ADMIN)**: Puede gestionar proyectos, tareas y usuarios.
- **Usuario Regular (USER)**: Puede gestionar y completar tareas dentro de los proyectos asignados.

El proyecto está construido con tecnologías modernas:
- **Next.js** para el frontend.
- **Prisma** para la gestión de la base de datos.
- **GraphQL** para la comunicación eficiente entre frontend y backend.
- **NextAuth.js** para autenticación de usuarios.

---
## Funcionalidades Principales

### 1. Gestión de Usuarios
- Los administradores pueden **crear, editar y eliminar usuarios**.
- Los usuarios pueden **actualizar su perfil**, pero no gestionar otros usuarios.

### 2. Gestión de Proyectos
- Los administradores pueden **crear, editar y eliminar proyectos**.
- Los usuarios pueden **ver los proyectos** a los que están asignados y **seguir el progreso de sus tareas**.

### 3. Gestión de Tareas
- Los administradores pueden **asignar tareas a usuarios**, establecer fechas de vencimiento y marcarlas como completadas.
- Los usuarios pueden **ver las tareas asignadas, marcarlas como completadas y agregar comentarios**.

### 4. Autenticación de Usuarios
- Implementación de **inicio de sesión con NextAuth.js**.
- Los roles de usuario (**ADMIN o USER**) se asignan al momento de la creación de la cuenta.

### 5. Interfaz de Usuario
- **Diseño limpio y funcional** con React y TailwindCSS.
- **Dashboard intuitivo** para visualizar proyectos, tareas y usuarios.

### 6. API GraphQL
- Uso de **GraphQL** para realizar operaciones CRUD en proyectos, usuarios y tareas.
- **Apollo Server** gestionando consultas y mutaciones de GraphQL.

### 7. Seguridad
- **Roles diferenciados** para evitar accesos indebidos.
- **Autenticación segura** con NextAuth.js.

---
## Tecnologías Usadas

### Backend
- **Node.js**: Entorno de ejecución para el servidor.
- **Next.js**: Framework para React con soporte SSR y API Routes.
- **Apollo Server**: Implementación de GraphQL.
- **GraphQL**: Lenguaje de consulta para la API.
- **Prisma**: ORM para la base de datos.
- **Supabase**: Base de datos y autenticación.

### Frontend
- **React**: Biblioteca para construir interfaces de usuario.
- **TailwindCSS**: Framework de CSS para diseño rápido y responsivo.
- **NextAuth.js**: Autenticación de usuarios con soporte de roles.

### Otras herramientas
- **GitHub**: Control de versiones.
- **Vercel**: Despliegue continuo.

---
## Diagrama de Arquitectura

![{42CD7524-8B76-4C99-8FC3-DCB242F1DB7D}](https://github.com/user-attachments/assets/47e66a7e-070d-43f4-a244-0cc5e85f97dc)

---
## Usuarios de Prueba

### Usuario ADMIN
- **Email**: admin@gmail.com
- **Contraseña**: Admin123*

### Usuario USER
- **Email**: user@gmail.com
- **Contraseña**: User123*

---
## Estructura del Proyecto

```
/sebastian-castellanos-gestion-tareas
│── /src
│   │── /components      # Componentes reutilizables
│   │── /pages           # Páginas de la aplicación
│   │── /api             # API Routes para GraphQL
│   │── /lib             # Configuraciones auxiliares (auth, db, utils)
│── /prisma              # Esquema y migraciones de la base de datos
│── .env                 # Variables de entorno
│── package.json         # Dependencias y scripts
```

---
## Despliegue y Configuración
1. **Clonar el repositorio**
   ```sh
   git clone https://github.com/20242-Ingenieria-Web-Udea-MJ/Sebastian-Castellanos-Gestion-Tareas.git
   cd Sebastian-Castellanos-Gestion-Tareas
   ```

2. **Instalar dependencias**
   ```sh
   npm install
   ```

3. **Configurar variables de entorno**
   Crear un archivo `.env` en la raíz con:
   ```env
   DATABASE_URL=postgresql://usuario:contraseña@host:puerto/db
   NEXTAUTH_SECRET=supersecreto
   NEXT_PUBLIC_API_URL=http://localhost:3000
   ```

4. **Ejecutar migraciones**
   ```sh
   npx prisma migrate dev --name init
   ```

5. **Ejecutar el servidor**
   ```sh
   npm run dev
   ```

6. **Abrir en el navegador**
   ```
   http://localhost:3000
   ```

---
## Conclusiones
Esta aplicación permite la gestión eficiente de tareas en proyectos colaborativos. Con una arquitectura modular y tecnólogas modernas, ofrece escalabilidad, seguridad y facilidad de uso.



![{42CD7524-8B76-4C99-8FC3-DCB242F1DB7D}](https://github.com/user-attachments/assets/47e66a7e-070d-43f4-a244-0cc5e85f97dc)

