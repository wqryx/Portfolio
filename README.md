# ⚙️ Portfolio Personal - Arquitectura y Configuración

¡Bienvenido al repositorio de mi portfolio personal\! Este documento está diseñado para ayudarte a entender la estructura, las tecnologías y los pasos para poner en marcha este proyecto.

-----

## 🏗️ Estructura del Proyecto

Este repositorio sigue una arquitectura de monorepo dividida en dos partes principales: el frontend y el backend.

  - `frontend/`: Contiene toda la lógica y la interfaz de usuario de la aplicación.
  - `backend/`: Aloja el servidor y la API que maneja las solicitudes del frontend.

-----

## 🛠️ Tecnologías Utilizadas

Este proyecto full-stack se ha construido con un conjunto de tecnologías modernas para garantizar un rendimiento óptimo y una experiencia de desarrollo eficiente.

### **Frontend** 💻

  - **React:** Una librería de JavaScript para construir interfaces de usuario interactivas.
  - **Tailwind CSS:** Un framework CSS para un diseño rápido y utilitario.
  - **CRACo:** Para configurar Create React App sin necesidad de `eject`.
  - **Vercel / Render:** Plataformas de despliegue para el frontend.

### **Backend** 🐍

  - **Python:** El lenguaje de programación principal para el servidor.
  - **Render:** Plataforma de despliegue para el backend.

-----

## 📦 Instalación y Configuración

Sigue estos pasos para configurar y ejecutar el proyecto en tu entorno local.

### 1\. Clonar el Repositorio

```bash
git clone https://github.com/wqryx/portfolio.git
cd portfolio
```

### 2\. Configurar el Backend

```bash
cd backend
pip install -r requirements.txt
python server.py
```

El servidor se ejecutará en `http://localhost:5000`.

### 3\. Configurar el Frontend

Abre una nueva terminal para el frontend.

```bash
cd frontend
npm install
npm start
```

La aplicación del frontend se ejecutará en `http://localhost:3000`.

-----

## 🚀 Despliegue

Ambas partes del proyecto (frontend y backend) están configuradas para su despliegue en plataformas como **Render** y **Vercel**, facilitando la integración continua y la entrega.

### Despliegue en Vercel:

[![Vercel](https://img.shields.io/badge/Vercel-Deploy-blue?logo=vercel&logoColor=white)](https://portfolio-roberto-ma.vercel.app)

## 📸 Captura de Pantalla
<img width="2518" height="1283" alt="image" src="https://github.com/user-attachments/assets/f1badcd4-1686-4fc9-b7a7-e668a418da4b" />
