# Instrucciones para docentes

Este repositorio es una plantilla de examen de Git Flow. El estudiante trabaja sobre `index.html`, una página ficticia llamada **Oficina Nacional de Excusas Técnicas**.

El HTML es estático: el estudiante puede abrir `index.html` directamente en el navegador, sin instalar dependencias ni iniciar servidor.

## Qué evalúa

- Creación de `develop`.
- Separación de cambios en ramas `feature/`.
- Integración por Pull Request hacia `develop`.
- Uso de una rama `release/`.
- Corrección puntual con una rama `hotfix/`.
- Retorno del hotfix a `main` y `develop`.
- Respeto del alcance: cada misión pide cambios concretos y prohíbe adelantar trabajo.

## Automatización

- **Iniciar examen**: crea la primera misión.
- **Validar progreso de misiones**: revisa ramas, PRs, comentarios de evidencia y contenido de `index.html`.
- **Proteger cierre de misiones**: reabre issues cerrados manualmente.
- **Validar HTML**: revisa que `index.html` siga siendo un documento base válido.
- **Validar Git Flow**: revisa estructura general de ramas y dirección de Pull Requests.

## Archivos principales

```text
index.html
scripts/practice-missions.js
scripts/validate-progress.js
scripts/validate-html.js
scripts/validate-gitflow.js
.github/workflows/
```

## Rúbrica sugerida

- 35% ramas y separación de features.
- 25% Pull Requests correctos.
- 20% cambios HTML exactos y limitados al alcance.
- 10% release sin cambios extra.
- 10% hotfix pequeño integrado en `main` y `develop`.
