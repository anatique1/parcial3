export const PRACTICE_MARKER = "gitflow-examen";

export const missions = [
  {
    id: 1,
    title: "Crear rama develop",
    body: `## Lo que debes realizar
- Debe existir una rama llamada \`develop\` publicada en GitHub.

## Anotaciones importantes
- No edites archivos en esta misión.
- No adelantes cambios de HTML.

## Criterio de cierre
La misión se cerrará cuando la rama \`develop\` exista en GitHub.`
  },
  {
    id: 2,
    title: "Actualizar encabezado de excusas",
    body: `## Lo que debes realizar
- Trabaja en la rama \`feature/hero-excusas\`.
- Modifica únicamente el encabezado de \`index.html\`.

## Cambios exactos en index.html
- En el \`<header>\`, cambia el \`<h1>\` para que diga exactamente: \`Oficina Nacional de Excusas Técnicas\`.
- En el \`<header>\`, cambia el párrafo con clase \`intro\` para que diga exactamente: \`Donde cada bug encuentra una explicación convincente.\`
- En el \`<header>\`, cambia el botón con \`id="boton-hero"\` para que diga exactamente: \`Solicitar excusa urgente\`.

## Anotaciones importantes
- No agregues todavía el catálogo de excusas.
- No agregues todavía el formulario.
- No agregues todavía la sección de versión final.
- No corrijas todavía el botón del pie de página que dice \`Enbiar excusa\`.

## Criterio de cierre
La misión se cerrará cuando el cambio esté publicado en la rama solicitada y el HTML tenga exactamente los textos pedidos.`
  },
  {
    id: 3,
    title: "Integrar encabezado en develop",
    body: `## Lo que debes realizar
- Debe existir un Pull Request desde \`feature/hero-excusas\` hacia \`develop\`.
- Ese Pull Request debe quedar fusionado.

## Anotaciones importantes
- No agregues cambios nuevos al HTML durante esta integración.
- No mezcles ramas distintas a las solicitadas.

## Criterio de cierre
La misión se cerrará cuando el Pull Request solicitado esté fusionado.`
  },
  {
    id: 4,
    title: "Crear catálogo de excusas",
    body: `## Lo que debes realizar
- Trabaja en la rama \`feature/catalogo-excusas\`.
- Modifica \`index.html\` para agregar un catálogo de excusas.

## Cambios exactos en index.html
- Dentro de \`<main>\`, después de la sección con \`id="aviso-inicial"\`, agrega una sección con \`id="catalogo-excusas"\`.
- Dentro de \`#catalogo-excusas\`, agrega al menos cuatro tarjetas.
- Cada tarjeta debe tener la clase \`excusa-card\`.
- Cada tarjeta debe tener un título visible en un \`<h3>\`.
- Cada tarjeta debe tener una descripción visible en un \`<p>\`.
- Cada tarjeta debe incluir una etiqueta visible que empiece con \`Gravedad:\`.
- Deben aparecer estas cuatro excusas como títulos de tarjetas:
  - \`El servidor estaba reflexionando\`
  - \`Funciona en mi máquina\`
  - \`El CSS tomó decisiones propias\`
  - \`Producción no estaba emocionalmente preparada\`

## Anotaciones importantes
- No agregues todavía el formulario.
- No agregues todavía la sección de versión final.
- No corrijas todavía el botón del pie de página que dice \`Enbiar excusa\`.
- No cambies los textos del encabezado si ya fueron aprobados.

## Criterio de cierre
La misión se cerrará cuando la rama solicitada tenga el catálogo con las tarjetas requeridas.`
  },
  {
    id: 5,
    title: "Proteger un cambio temporal",
    body: `## Lo que debes realizar
- Trabaja sobre \`feature/catalogo-excusas\`.
- En \`index.html\`, crea de forma temporal un texto visible que diga exactamente: \`BORRADOR TEMPORAL DE EXCUSA\`.
- Protege ese cambio fuera del historial antes de continuar.
- El texto \`BORRADOR TEMPORAL DE EXCUSA\` no debe quedar publicado en el HTML final.
- Cuando termines, comenta en este issue exactamente: \`cambio temporal protegido\`.

## Anotaciones importantes
- No agregues el formulario.
- No agregues la sección de versión final.
- No corrijas todavía el botón del pie de página que dice \`Enbiar excusa\`.

## Criterio de cierre
La misión se cerrará cuando exista el comentario exacto solicitado en este issue.`
  },
  {
    id: 6,
    title: "Agregar formulario de solicitud",
    body: `## Lo que debes realizar
- Trabaja en la rama \`feature/formulario-excusa\`.
- Modifica \`index.html\` para agregar un formulario de solicitud de excusas.

## Cambios exactos en index.html
- Dentro de \`<main>\`, después de la sección \`#catalogo-excusas\`, agrega un formulario con \`id="formulario-excusa"\`.
- El formulario debe tener un campo obligatorio con \`name="nombre"\`.
- El formulario debe tener un campo obligatorio con \`name="tipo-problema"\`.
- El formulario debe tener un campo obligatorio con \`name="nivel-urgencia"\`.
- El formulario debe tener un campo obligatorio con \`name="descripcion-desastre"\`.
- El botón final del formulario debe decir exactamente: \`Enviar excusa al comité\`.

## Anotaciones importantes
- No agregues todavía la sección de versión final.
- No corrijas todavía el botón del pie de página que dice \`Enbiar excusa\`.
- No cambies el catálogo si ya fue aprobado.

## Criterio de cierre
La misión se cerrará cuando la rama solicitada tenga el formulario con los campos requeridos.`
  },
  {
    id: 7,
    title: "Integrar catálogo y formulario",
    body: `## Lo que debes realizar
- Debe existir un Pull Request desde \`feature/catalogo-excusas\` hacia \`develop\`.
- El Pull Request de \`feature/catalogo-excusas\` hacia \`develop\` debe quedar fusionado.
- Debe existir un Pull Request desde \`feature/formulario-excusa\` hacia \`develop\`.
- El Pull Request de \`feature/formulario-excusa\` hacia \`develop\` debe quedar fusionado.

## Anotaciones importantes
- No agregues cambios nuevos al HTML durante esta integración.
- No mezcles ramas distintas a las solicitadas.
- No corrijas todavía el botón del pie de página que dice \`Enbiar excusa\`.

## Criterio de cierre
La misión se cerrará cuando ambos Pull Requests solicitados estén fusionados hacia \`develop\`.`
  },
  {
    id: 8,
    title: "Preparar versión final",
    body: `## Lo que debes realizar
- Trabaja en la rama \`release/v1.0.0\`.
- Modifica \`index.html\` para agregar una sección final de revisión.

## Cambios exactos en index.html
- Dentro de \`<main>\`, después del formulario \`#formulario-excusa\`, agrega una sección con \`id="version-final"\`.
- La sección \`#version-final\` debe contener exactamente el texto: \`Versión 1.0.0\`.
- La sección \`#version-final\` debe indicar que la versión está lista para revisión.

## Anotaciones importantes
- No cambies el encabezado aprobado.
- No cambies el catálogo aprobado.
- No cambies el formulario aprobado.
- No corrijas todavía el botón del pie de página que dice \`Enbiar excusa\`.

## Criterio de cierre
La misión se cerrará cuando la rama solicitada exista y el HTML tenga la sección final requerida.`
  },
  {
    id: 9,
    title: "Publicar release en main",
    body: `## Lo que debes realizar
- Debe existir un Pull Request desde \`release/v1.0.0\` hacia \`main\`.
- Ese Pull Request debe quedar fusionado.

## Anotaciones importantes
- No agregues cambios nuevos al HTML durante esta integración.
- No uses una rama distinta a la solicitada.

## Criterio de cierre
La misión se cerrará cuando el Pull Request solicitado esté fusionado hacia \`main\`.`
  },
  {
    id: 10,
    title: "Corregir botón de emergencia",
    body: `## Lo que debes realizar
- Trabaja en la rama \`hotfix/texto-boton\`.
- Modifica únicamente el texto incorrecto del botón del pie de página.

## Cambio exacto en index.html
- En el \`<footer>\`, cambia el botón con \`id="boton-envio-rapido"\` de \`Enbiar excusa\` a exactamente: \`Enviar excusa\`.

## Anotaciones importantes
- No cambies el encabezado.
- No cambies el catálogo.
- No cambies el formulario.
- No cambies la sección de versión final.
- No hagas cambios de estilo o estructura para esta corrección.

## Criterio de cierre
La misión se cerrará cuando la rama solicitada tenga una corrección pequeña y el texto incorrecto ya no aparezca.`
  },
  {
    id: 11,
    title: "Integrar hotfix en main y develop",
    body: `## Lo que debes realizar
- Debe existir un Pull Request desde \`hotfix/texto-boton\` hacia \`main\`.
- El Pull Request de \`hotfix/texto-boton\` hacia \`main\` debe quedar fusionado.
- Debe existir un Pull Request desde \`hotfix/texto-boton\` hacia \`develop\`.
- El Pull Request de \`hotfix/texto-boton\` hacia \`develop\` debe quedar fusionado.

## Anotaciones importantes
- No agregues cambios nuevos al HTML durante esta integración.
- No mezcles ramas distintas a las solicitadas.

## Criterio de cierre
Esta es la última misión. Se cerrará cuando el hotfix esté fusionado hacia \`main\` y hacia \`develop\`.`
  }
];

export function missionNumber(id) {
  return String(id).padStart(2, "0");
}

export function missionMarker(id) {
  return `<!-- ${PRACTICE_MARKER}:mission=${id} -->`;
}

export function missionIssueTitle(mission) {
  return `[Misión ${missionNumber(mission.id)}] ${mission.title}`;
}

export function missionIssueBody(mission) {
  return `${missionMarker(mission.id)}

## Regla de alcance
Modifica solo lo solicitado en esta misión. No adelantes trabajo de misiones futuras, no reestructures la página completa y no agregues cambios adicionales.

${mission.body}

## Cierre automático
No cierres este issue manualmente.`;
}

export function getMissionById(id) {
  return missions.find((mission) => mission.id === Number(id));
}

export function getNextMission(id) {
  return getMissionById(Number(id) + 1);
}

export function extractMissionId(text = "") {
  const markerMatch = text.match(/gitflow-examen:mission=(\d+)/i);
  if (markerMatch) {
    return Number(markerMatch[1]);
  }

  const titleMatch = text.match(/\[?Misi[oó]n\s+0?(\d+)\]?/i);
  if (titleMatch) {
    return Number(titleMatch[1]);
  }

  return null;
}
