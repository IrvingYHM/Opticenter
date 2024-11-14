# Proyecto de OptiCenter

## Descripción del Proyecto
Este proyecto tiene como objetivo el desarrollo de un sitio web para una óptica que permite la gestión de citas y la venta de productos ópticos. El sistema está desarrollado utilizando tecnologías modernas, como React para el frontend y Express para el backend, con una base de datos relacional para la gestión de citas y productos.

El proyecto sigue la metodología XP (Extreme Programming), que se caracteriza por la flexibilidad, la colaboración cercana con el cliente y la mejora continua del código a través de ciclos cortos de desarrollo y entrega.

## Objetivos
- Desarrollar una solución web que facilite la compra de productos ópticos.
- Implementar un sistema para la gestión de citas de manera eficiente.
- Aplicar prácticas de desarrollo ágil XP para asegurar calidad y rapidez en la entrega.

## Metodología de Trabajo
Se utiliza la metodología XP (Extreme Programming), que se enfoca en la simplicidad del código, pruebas continuas, integración frecuente y la retroalimentación constante del cliente para asegurar que el proyecto cumpla con sus expectativas.

## Control de Versiones
El proyecto utiliza Git como herramienta de control de versiones, con el repositorio alojado en GitHub. El flujo de trabajo sigue la estrategia Git Flow, donde se manejan ramas principales y de características:

- master: Contiene el código listo para producción.
- develop: Ramas para el desarrollo activo, donde se integran las características antes de pasar a producción.
- Ramas de características (feature/nueva-funcionalidad): Para el desarrollo de nuevas funcionalidades.
- Ramas de correcciones (hotfix/arreglo-de-error): Para aplicar correcciones rápidas a la rama de producción.

## Estrategia de Versionamiento y Gestión de Ramas
El versionamiento sigue el esquema SemVer (Versionado Semántico), que se estructura de la siguiente manera:

- MAJOR: Cambios incompatibles con versiones anteriores.
- MINOR: Nuevas funcionalidades que son compatibles hacia atrás.
- PATCH: Correcciones de errores compatibles hacia atrás.

La gestión de ramas utiliza el flujo Git Flow, permitiendo el desarrollo ordenado, pruebas e integración continua de nuevas características o correcciones.

## Estrategia de Despliegue
El proyecto se despliega automáticamente utilizando un sistema de CI/CD. El entorno de despliegue consta de:

- Entorno de Desarrollo: Permite probar nuevas características antes de ser desplegadas en producción.
- Entorno de Producción: Recibe el código listo para el cliente.

Cada vez que se integra código en la rama main, se desencadena un proceso de despliegue automatizado hacia el servidor de producción, utilizando una plataforma como Railway o Vercel para el hosting.

## Instrucciones de Instalación

1.- Clona el repositorio en tu máquina local:

    git clone https://github.com/IrvingYHM/Opticenter.git

2.- Navega al directorio del proyecto:

    cd Opticenter

3.- Instala las dependencias del proyecto:

    npm install

4.- Configura las variables de entorno necesarias para la base de datos y otros servicios.

5.- Ejecuta el proyecto localmente:

    npm run dev

6.- Accede al sitio web desde tu navegador en http://localhost:3000.