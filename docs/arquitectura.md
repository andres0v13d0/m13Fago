# Arquitectura del Proyecto

Este documento describe la estructura técnica y modular del sistema desarrollado para visualizar el ciclo replicativo del bacteriófago M13.

---

## 📂 Estructura general

```
/bacteriofago-m13-visualizacion
├── /docs
├── /assets
│   └── imagenes-referenciales/
├── /src
│   └── ejemplo-codigo/
├── README.md
└── LICENSE
```

---

## 🧠 Componentes principales

### 1. **Modelado 3D (Blender)**
- Se diseñan y animan los objetos biológicos (fago, ADN, bacteria).
- Se exporta a `.glb` para usarse en web.

### 2. **Frontend interactivo (React + Three.js)**
- Uso de `@react-three/fiber` para renderizar escenas 3D en el navegador.
- `useGLTF()` para cargar modelos.
- `AnimationMixer` de Three.js para controlar la animación.
- `OrbitControls` para navegación.

### 3. **Hosting del modelo (S3)**
- AWS S3 usado como servidor de almacenamiento seguro.
- Acceso restringido por dominio mediante política de Referer y CORS.

---

## 🔄 Flujo de datos

```
Usuario -> React (Canvas) -> Modelo .glb desde S3 -> Scene renderizada
```

---

## 💡 Consideraciones

- No se incluye backend para proteger la simplicidad del proyecto.
- Los modelos no se distribuyen directamente; el repositorio describe cómo recrearlos.
- Se usó diseño modular para facilitar futuras extensiones.

---
