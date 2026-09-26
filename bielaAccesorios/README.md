# Bielaaccesorios — Sitio Web + Panel de Administración

Sitio web para el negocio de accesorios **Bielaaccesorios**, con panel de administración propio para gestionar productos e imágenes del carousel sin necesidad de tocar código.

## 🌐 Demo

- Sitio público: _pendiente de deploy_
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