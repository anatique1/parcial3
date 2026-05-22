export const PRACTICE_MARKER = "gitflow-examen";

export const missions = [
  {
    id: 1,
    title: "Crear rama develop",
    summary: "Crearás la línea de integración del examen.",
    why: "`develop` concentra el trabajo aprobado antes de preparar una versión estable.",
    body: `## Objetivo
Dejar disponible la rama de integración llamada \`develop\`.

## Cambios permitidos
- No edites archivos para esta misión.
- No adelantes cambios de HTML.

## Criterio de cierre
La misión se cerrará cuando exista la rama \`develop\` publicada en GitHub.`
  },
  {
    id: 2,
    title: "Actualizar encabezado de excusas",
    summary: "Modificarás únicamente el encabezado principal de la página.",
    why: "Una rama de feature debe contener un cambio concreto y fácil de revisar.",
    body: `## Objetivo
Actualizar el encabezado de \`index.html\` para presentar la oficina ficticia del examen.

## Rama esperada
\`feature/hero-excusas\`

## Cambios obligatorios en index.html
- Cambia el título principal visible a exactamente: \`Oficina Nacional de Excusas Técnicas\`.
- Cambia o agrega un subtítulo visible con exactamente: \`Donde cada bug encuentra una explicación convincente.\`
- Cambia el botón principal del encabezado para que diga exactamente: \`Solicitar excusa urgente\`.

## Cambios no permitidos en esta misión
- No agregues todavía el catálogo de excusas.
- No agregues todavía el formulario.
- No agregues todavía la sección de versión final.
- No corrijas todavía el botón del pie de página que dice \`Enbiar excusa\`.

## Criterio de cierre
La misión se cerrará cuando el cambio esté publicado en la rama esperada y el HTML tenga exactamente los textos solicitados.`
  },
  {
    id: 3,
    title: "Integrar encabezado en develop",
    summary: "Integrarás la feature del encabezado mediante Pull Request.",
    why: "El Pull Request deja evidencia de revisión antes de mezclar cambios en la línea de integración.",
    body: `## Objetivo
Integrar el encabezado actualizado en \`develop\`.

## Pull Request esperado
- Origen: \`feature/hero-excusas\`
- Destino: \`develop\`

## Cambios no permitidos en esta misión
- No agregues cambios nuevos al HTML durante la integración.
- No mezcles otras ramas en este Pull Request.

## Criterio de cierre
La misión se cerrará cuando el Pull Request esperado esté fusionado.`
  },
  {
    id: 4,
    title: "Crear catálogo de excusas",
    summary: "Agregarás una sección con tarjetas de excusas técnicas.",
    why: "Las features deben agrupar trabajo relacionado sin mezclar responsabilidades.",
    body: `## Objetivo
Agregar a \`index.html\` un catálogo visible de excusas técnicas.

## Rama esperada
\`feature/catalogo-excusas\`

## Cambios obligatorios en index.html
- Agrega una sección con \`id="catalogo-excusas"\`.
- Dentro de esa sección, agrega al menos cuatro tarjetas.
- Cada tarjeta debe usar la clase \`excusa-card\`.
- Cada tarjeta debe tener un título visible.
- Cada tarjeta debe tener una descripción visible.
- Cada tarjeta debe incluir una etiqueta visible que empiece con \`Gravedad:\`.
- Deben aparecer estas cuatro excusas:
  - \`El servidor estaba reflexionando\`
  - \`Funciona en mi máquina\`
  - \`El CSS tomó decisiones propias\`
  - \`Producción no estaba emocionalmente preparada\`

## Cambios no permitidos en esta misión
- No agregues todavía el formulario.
- No agregues todavía la sección de versión final.
- No corrijas todavía el botón del pie de página que dice \`Enbiar excusa\`.
- No cambies textos del encabezado si ya fueron aprobados.

## Criterio de cierre
La misión se cerrará cuando la rama esperada tenga el catálogo con las tarjetas requeridas.`
  },
  {
    id: 5,
    title: "Proteger un cambio temporal",
    summary: "Practicarás un cambio de contexto sin convertir un borrador en historial.",
    why: "En Git Flow es común pausar trabajo incompleto antes de cambiar de rama o continuar otra tarea.",
    body: `## Objetivo
Demostrar que sabes proteger un cambio temporal sin publicarlo como parte del historial.

## Rama esperada
\`feature/catalogo-excusas\`

## Cambio temporal solicitado
- En \`index.html\`, crea de forma temporal un texto visible que diga exactamente: \`BORRADOR TEMPORAL DE EXCUSA\`.
- Protege ese cambio fuera del historial antes de continuar.
- El texto temporal no debe quedar publicado como parte del HTML final.
- Cuando termines, comenta en este issue exactamente: \`cambio temporal protegido\`.

## Cambios no permitidos en esta misión
- No agregues el formulario.
- No agregues la sección de versión final.
- No corrijas todavía el botón del pie de página que dice \`Enbiar excusa\`.

## Criterio de cierre
La misión se cerrará cuando exista la evidencia solicitada en el comentario del issue.`
  },
  {
    id: 6,
    title: "Agregar formulario de solicitud",
    summary: "Agregarás un formulario para pedir excusas técnicas.",
    why: "Una segunda feature permite comprobar que el flujo mantiene cambios separados antes de integrarlos.",
    body: `## Objetivo
Agregar a \`index.html\` un formulario visible de solicitud de excusas.

## Rama esperada
\`feature/formulario-excusa\`

## Cambios obligatorios en index.html
- Agrega un formulario con \`id="formulario-excusa"\`.
- El formulario debe tener un campo obligatorio con \`name="nombre"\`.
- El formulario debe tener un campo obligatorio con \`name="tipo-problema"\`.
- El formulario debe tener un campo obligatorio con \`name="nivel-urgencia"\`.
- El formulario debe tener un campo obligatorio con \`name="descripcion-desastre"\`.
- El botón final del formulario debe decir exactamente: \`Enviar excusa al comité\`.

## Cambios no permitidos en esta misión
- No agregues todavía la sección de versión final.
- No corrijas todavía el botón del pie de página que dice \`Enbiar excusa\`.
- No cambies el catálogo si ya fue aprobado.

## Criterio de cierre
La misión se cerrará cuando la rama esperada tenga el formulario con los campos requeridos.`
  },
  {
    id: 7,
    title: "Integrar catálogo y formulario",
    summary: "Fusionarás las features restantes hacia develop.",
    why: "`develop` debe reunir las features aprobadas antes de crear una release.",
    body: `## Objetivo
Integrar en \`develop\` el catálogo de excusas y el formulario de solicitud.

## Pull Requests esperados
- Origen: \`feature/catalogo-excusas\`; destino: \`develop\`.
- Origen: \`feature/formulario-excusa\`; destino: \`develop\`.

## Cambios no permitidos en esta misión
- No agregues cambios nuevos al HTML durante la integración.
- No mezcles ramas distintas a las esperadas.
- No corrijas todavía el botón del pie de página que dice \`Enbiar excusa\`.

## Criterio de cierre
La misión se cerrará cuando ambos Pull Requests esperados estén fusionados hacia \`develop\`.`
  },
  {
    id: 8,
    title: "Preparar versión final",
    summary: "Crearás la release y agregarás una sección final de revisión.",
    why: "La rama de release congela una versión candidata antes de llevarla a producción.",
    body: `## Objetivo
Preparar la versión candidata del HTML.

## Rama esperada
\`release/v1.0.0\`

## Cambios obligatorios en index.html
- Agrega una sección con \`id="version-final"\`.
- La sección debe contener exactamente el texto: \`Versión 1.0.0\`.
- La sección debe indicar que la versión está lista para revisión.

## Cambios no permitidos en esta misión
- No cambies el encabezado aprobado.
- No cambies el catálogo aprobado.
- No cambies el formulario aprobado.
- No corrijas todavía el botón del pie de página que dice \`Enbiar excusa\`.

## Criterio de cierre
La misión se cerrará cuando la rama de release exista y el HTML tenga la sección final requerida.`
  },
  {
    id: 9,
    title: "Publicar release en main",
    summary: "Llevarás la versión candidata a la rama estable.",
    why: "`main` debe recibir únicamente cambios listos para entrega.",
    body: `## Objetivo
Integrar la versión candidata en \`main\`.

## Pull Request esperado
- Origen: \`release/v1.0.0\`
- Destino: \`main\`

## Cambios no permitidos en esta misión
- No agregues cambios nuevos al HTML durante la integración.
- No uses una rama distinta a la release esperada.

## Criterio de cierre
La misión se cerrará cuando el Pull Request esperado esté fusionado hacia \`main\`.`
  },
  {
    id: 10,
    title: "Corregir botón de emergencia",
    summary: "Aplicarás un hotfix pequeño sobre un error visible.",
    why: "Un hotfix debe corregir un problema puntual desde la versión estable.",
    body: `## Objetivo
Corregir un error de texto en el botón del pie de página.

## Rama esperada
\`hotfix/texto-boton\`

## Cambio obligatorio en index.html
- Corrige el texto \`Enbiar excusa\` para que diga exactamente: \`Enviar excusa\`.

## Cambios no permitidos en esta misión
- No cambies el encabezado.
- No cambies el catálogo.
- No cambies el formulario.
- No cambies la sección de versión final.
- No hagas cambios de estilo o estructura que no sean necesarios para esta corrección.

## Criterio de cierre
La misión se cerrará cuando la rama esperada tenga una corrección pequeña y el texto incorrecto ya no aparezca.`
  },
  {
    id: 11,
    title: "Integrar hotfix en main y develop",
    summary: "Cerrarás el hotfix sin perder la corrección en la línea de desarrollo.",
    why: "Un hotfix que solo llega a `main` puede reaparecer cuando `develop` se publique más adelante.",
    body: `## Objetivo
Integrar la corrección urgente tanto en \`main\` como en \`develop\`.

## Pull Requests esperados
- Origen: \`hotfix/texto-boton\`; destino: \`main\`.
- Origen: \`hotfix/texto-boton\`; destino: \`develop\`.

## Cambios no permitidos en esta misión
- No agregues cambios nuevos al HTML durante la integración.
- No mezcles ramas distintas a las esperadas.

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

## Resumen rápido
- **Qué harás:** ${mission.summary}
- **Por qué importa:** ${mission.why}

## Regla de alcance del examen
Modifica solo lo solicitado en esta misión. No adelantes trabajo de misiones futuras, no reestructures la página completa y no agregues cambios "de paso". Si una misión pide integración, integra únicamente las ramas indicadas.

${mission.body}

## Seguimiento automático
Cuando avances, el workflow **Validar progreso de misiones** revisará criterios verificables. Si cumple, comentará el resultado, cerrará este issue y creará la siguiente misión. Si no cumple todavía, dejará una revisión breve de lo pendiente.

No cierres este issue manualmente. Si se cierra desde la interfaz de GitHub o desde un Pull Request, el workflow **Proteger cierre de misiones** lo reabrirá.

---
Examen de Git Flow. Identificador interno: misión ${mission.id}.`;
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
