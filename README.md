# Bielaaccesorios — Sitio Web + Panel de Administración

Sitio web para el negocio de accesorios **Bielaaccesorios**, con panel de administración propio para gestionar productos e imágenes del carousel sin necesidad de tocar código.

## 🌐 Demo

- Sitio público: [Bielaaccesorios](https://bielaaccesorios-pdhj.vercel.app/)
- Panel admin: `/admin/login`

## 📋 Descripción

Aplicación full-stack compuesta por un frontend en React que consume una API REST propia, con autenticación JWT para proteger las operaciones de administración (crear, editar y eliminar contenido) y almacenamiento de imágenes en la nube vía Cloudinary.

## 🛠️ Stack tecnológico

**Frontend**
- React 19 + Vite
- React Router DOM (ruteo SPA)
- Bootstrap (carousel)
- CSS puro (sin frameworks de utilidades)

**Backend**
- Node.js + Express 5
- MongoDB Atlas + Mongoose
- JWT (autenticación)
- bcryptjs (hash de contraseñas)
- Multer + Cloudinary (subida y almacenamiento de imágenes)

## 📁 Estructura del proyecto

```
/
├── bielaAccesorios/            # Frontend (React + Vite)
│   ├── src/
│   │   ├── assets/             # Imágenes estáticas
│   │   ├── components/         # Componentes reutilizables (Header, Footer, Card, Carousel...)
│   │   ├── screens/            # Vistas (Inicio, Products, Contact, Admin...)
│   │   ├── services/           # Llamadas a la API (fetch)
│   │   └── routes/             # Rutas protegidas
│   └── .env.example
│
└── bielaAccesorios-Backend/    # Backend (Express + MongoDB)
    ├── src/
    │   ├── config/              # Conexión a DB y Cloudinary
    │   ├── controllers/         # Lógica de negocio
    │   ├── middlewares/         # Auth (JWT) y upload (Multer)
    │   ├── models/              # Esquemas de Mongoose
    │   └── routes/              # Endpoints de la API
    └── .env.example
```


## ✨ Funcionalidades

- Landing pública con carousel de imágenes, catálogo de productos, sección de contacto con mapa embebido, y links directos a WhatsApp e Instagram.
- Panel de administración protegido por login:
  - CRUD de productos (crear, listar, eliminar) con subida de imagen.
  - Gestión de imágenes del carousel (crear, listar, activar/desactivar, eliminar).
- Diseño responsive (mobile, tablet, desktop) en todo el sitio, incluido el panel admin.
- Autenticación con JWT — las rutas de escritura del backend están protegidas; las de lectura del sitio público quedan abiertas.

## 🚀 Instalación y uso local

### Requisitos previos

- Node.js 18 o superior
- Cuenta de [MongoDB Atlas](https://cloud.mongodb.com)
- Cuenta de [Cloudinary](https://cloudinary.com)

### 1. Clonar el repositorio

```bash
git clone https://github.com/SantiBrusa/Bielaaccesorios_.git
cd Bielaaccesorios_
```

### 2. Backend

```bash
cd bielaAccesorios-Backend
npm install
cp .env.example .env
```

Completá el `.env` con tus credenciales reales (ver sección [Variables de entorno](#-variables-de-entorno)).

Para generar el hash de la contraseña del admin:
```bash
node -e "console.log(require('bcryptjs').hashSync('tu-password', 10))"
```

Iniciar el servidor:
```bash
npm run dev
```

El backend queda disponible en `http://localhost:3000`.

### 3. Frontend

En otra terminal:

```bash
cd bielaAccesorios
npm install
cp .env.example .env
npm run dev
```

El sitio queda disponible en `http://localhost:5173`.

## 🔑 Variables de entorno

**Backend** (`bielaAccesorios-Backend/.env`)

| Variable | Descripción |
|---|---|
| `PORT` | Puerto del servidor Express |
| `MONGO_URI` | Connection string de MongoDB Atlas |
| `CLOUDINARY_CLOUD_NAME` | Nombre de la cuenta de Cloudinary |
| `CLOUDINARY_API_KEY` | API Key de Cloudinary |
| `CLOUDINARY_API_SECRET` | API Secret de Cloudinary |
| `ADMIN_USER` | Usuario para ingresar al panel admin |
| `ADMIN_PASSWORD_HASH` | Contraseña del admin, hasheada con bcrypt |
| `JWT_SECRET` | Frase secreta para firmar los tokens JWT |

**Frontend** (`bielaAccesorios/.env`)

| Variable | Descripción |
|---|---|
| `VITE_API_URL` | URL base de la API del backend |

## 📡 Endpoints principales

| Método | Ruta | Protegido | Descripción |
|---|---|---|---|
| GET | `/api/products` | No | Lista todos los productos |
| POST | `/api/products` | Sí | Crea un producto (con imagen) |
| DELETE | `/api/products/:id` | Sí | Elimina un producto |
| GET | `/api/carousel` | No | Lista imágenes activas del carousel |
| GET | `/api/carousel/admin` | Sí | Lista todas las imágenes (activas e inactivas) |
| POST | `/api/carousel` | Sí | Crea una imagen del carousel |
| PATCH | `/api/carousel/:id/toggle` | Sí | Activa/desactiva una imagen |
| DELETE | `/api/carousel/:id` | Sí | Elimina una imagen |
| POST | `/api/auth/login` | No | Login del admin, devuelve un JWT |

Las rutas protegidas requieren el header `Authorization: Bearer <token>`.

## 👤 Autor

Desarrollado por **Santino Vissani Brusadin**.

## 📄 Licencia

Este proyecto fue desarrollado a medida para el negocio Bielaaccesorios. Uso y distribución del código sujetos a acuerdo con el autor.