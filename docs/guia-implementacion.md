# Guía de Implementación

Esta guía explica paso a paso cómo replicar una animación interactiva del ciclo replicativo del bacteriófago M13 utilizando herramientas accesibles como Blender, React y Three.js.

---

## 🧰 Requisitos previos

### Herramientas necesarias:

- [Blender 3.0+](https://www.blender.org/download/)
- Node.js 16+
- npm o yarn
- Editor de código (Visual Studio Code recomendado)

---

## 🧱 Paso 1: Modelado y animación en Blender

1. Crear un nuevo proyecto en Blender.
2. Modelar las siguientes estructuras:
   - Cápside del fago M13 (tubo largo helicoidal)
   - ADN de cadena simple (curva animada o mesh interno)
   - Bacteria huésped (forma ovalada tipo E. coli)
3. Agregar materiales básicos (colores o texturas).
4. Animar el proceso:
   - Entrada del ADN
   - Conversión a ADN doble
   - Formación de nuevos fagos
   - Liberación sin lisis
5. Exportar la escena animada a formato `.glb`.

> 💡 *Guardar la animación en una carpeta organizada y con el nombre `m13.glb`.*

---

## 🌍 Paso 2: Integración con React + Three.js

1. Crear un proyecto React:
```bash
npx create-react-app m13-visualizacion
cd m13-visualizacion
```

2. Instalar dependencias:
```bash
npm install three @react-three/fiber @react-three/drei
```

3. Crear el componente de animación y cargar el modelo `.glb` usando `useGLTF`.

4. Implementar controles con `OrbitControls` y reproducir la animación con `AnimationMixer`.

5. Usar `Canvas` para renderizar el modelo.

6. Asegúrate de que el modelo se cargue desde un servidor seguro (ej. S3) y no esté embebido en el build.

---

## 🔐 Paso 3: Subir el modelo a S3 de forma segura

1. Crea un bucket privado en AWS S3.
2. Sube el archivo `m13.glb` a una carpeta tipo `modelos/`.
3. Configura una política que permita acceso **solo desde localhost o tu dominio** (`bactosim.com`).
4. Configura CORS para permitir GET desde esos orígenes.
5. Carga el modelo desde la URL en tu código React.

> Revisa el ejemplo en `/src/ejemplo-codigo/ModelLoader.jsx`

---

## ✅ Resultado

Una aplicación web en React que muestra la animación del bacteriófago M13 de forma interactiva, permitiendo:
- Reproducir o pausar la animación
- Ver distintas etapas del ciclo
- Interactuar con el modelo en 3D

---
