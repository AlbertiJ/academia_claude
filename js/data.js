// ============================================================
// CLAUDE ACADEMIA — DATA COMPLETA DE LECCIONES
// Autor: Alberti Juan | Licencia: MIT
// ============================================================

const ACADEMY_DATA = {

  // ══════════════════════════════════════════
  // MÓDULO 1 — PRINCIPIANTE (12 lecciones)
  // ══════════════════════════════════════════
  modulo1: {
    id: 'M1',
    titulo: 'Fundamentos',
    subtitulo: 'de 0 a 100',
    descripcion: 'Las bases para hablarle bien a Claude. Prompts claros, resultados concretos.',
    nivel: 'principiante',
    emoji: '🌱',
    color: '#6affcc',
    gratis: true,
    lecciones: [
      {
        id: 'M1L1', num: 1, titulo: 'El prompt vago vs el prompt preciso',
        gratis: true, tiempo: '5 min',
        concepto: 'Un prompt sin contexto obliga a Claude a adivinar. La especificidad es la diferencia entre una respuesta genérica y una que te sirve hoy.',
        tecnica: 'Contexto + Objetivo + Formato',
        mal: 'Ayudame con mi presentación.',
        bien: `Necesito crear 8 slides para una reunión con inversores el viernes.
El producto es una app de delivery para mascotas en LATAM.
Temas: problema, solución, mercado, tracción, equipo, competencia, financials, ask.
Dame un título impactante y 3 bullets por slide. Tono: directo y confiado.`,
        por_que: 'Especificás audiencia, deadline, producto, estructura y tono. Claude no tiene que adivinar nada.'
      },
      {
        id: 'M1L2', num: 2, titulo: 'El poder de los ejemplos (few-shot)',
        gratis: true, tiempo: '5 min',
        concepto: 'Mostrar 2 ejemplos del estilo que querés vale más que 100 palabras describiendo ese estilo.',
        tecnica: 'Few-shot prompting',
        mal: 'Escribí posts de LinkedIn con mi estilo.',
        bien: `Escribí 3 posts de LinkedIn con esta voz. Ejemplos míos:

EJEMPLO 1: "Fallé. 3 veces. Siempre por lo mismo: elegí habilidad sobre cultura. El talento entra por la puerta. La cultura sale por la misma."

EJEMPLO 2: "Nadie te dice que construir duele. Solo te dicen que falles rápido. Pero fallar duele igual de rápido."

TEMA NUEVO: Por qué dejé de tener reuniones diarias.
Sin hashtags. Sin emojis. Sin "En conclusión".`,
        por_que: 'Claude extrae el patrón de voz de los ejemplos reales con precisión imposible de describir en palabras.'
      },
      {
        id: 'M1L3', num: 3, titulo: 'Pedí razonamiento, no solo respuestas',
        gratis: true, tiempo: '6 min',
        concepto: 'Cuando Claude muestra su proceso, podés detectar errores, aprender del razonamiento y ajustar el camino.',
        tecnica: 'Chain-of-thought básico',
        mal: '¿Cómo mejoro la productividad de mi equipo?',
        bien: `Mi equipo de 8 devs remotos bajó productividad 30% en 2 meses.

Pensá paso a paso:
PASO 1 — DIAGNÓSTICO: 5 causas probables con % de probabilidad estimada.
PASO 2 — PRIORIZACIÓN: elegí las 2 más probables y justificá.
PASO 3 — ACCIONES: 2 acciones por causa, implementables esta semana sin costo.
PASO 4 — MÉTRICAS: 1 indicador por acción para saber si funciona.

Resumen final en 5 líneas.`,
        por_que: 'La estructura PASO a PASO obliga a razonar en secuencia. El resumen final hace el output inmediatamente accionable.'
      },
      {
        id: 'M1L4', num: 4, titulo: 'Controlar el formato de salida',
        gratis: true, tiempo: '5 min',
        concepto: 'Claude puede responder en cualquier formato. Vos decidís: tabla, JSON, lista, párrafo, código. Si no lo pedís, elige por vos.',
        tecnica: 'Formato explícito',
        mal: 'Comparame Notion, Obsidian y Roam.',
        bien: `Compará Notion, Obsidian y Roam Research en tabla con estas columnas exactas:

| Herramienta | Precio gratis | Offline | Colaboración | Curva de aprendizaje | Ideal para |

Al final, en 1 línea: cuál elegirías para un escritor independiente y por qué.
Respondé SOLO la tabla + esa línea, sin texto adicional.`,
        por_que: '"Respondé SOLO la tabla" evita que Claude agregue texto que no necesitás. Definir columnas específicas evita criterios irrelevantes.'
      },
      {
        id: 'M1L5', num: 5, titulo: 'Roles: hablale al experto que necesitás',
        gratis: true, tiempo: '6 min',
        concepto: 'Claude adopta cualquier identidad profesional. Asignar un rol específico cambia el nivel de expertise, vocabulario y perspectiva de la respuesta.',
        tecnica: 'Role prompting',
        mal: 'Analizá mi negocio.',
        bien: `Actuá como un CFO con 15 años de experiencia en startups SaaS latinoamericanas.

Mi startup: gestión de proyectos para arquitectura. ARR $200k. Quiero levantar Serie A.

Sé directo como lo harías con tu equipo directivo — señalá los puntos débiles primero.

1. ¿Es prematuro con este ARR?
2. ¿Qué métricas mejorar en 6 meses para valuar mejor?
3. ¿Qué due diligence me harán y cómo me preparo?`,
        por_que: '"Señalá los puntos débiles primero" y "directo como con tu equipo" desactiva la tendencia de Claude a ser diplomático.'
      },
      {
        id: 'M1L6', num: 6, titulo: 'Reducir alucinaciones con instrucciones de honestidad',
        gratis: true, tiempo: '5 min',
        concepto: 'Claude puede inventar datos si no le decís que no debe hacerlo. Una instrucción simple cambia esto completamente.',
        tecnica: 'Instrucciones de incertidumbre',
        mal: 'Analizá este contrato.',
        bien: `[Adjuntá el contrato]

Analizá este contrato y dame:

RESUMEN (2 párrafos): qué se acuerda, entre quiénes, valor y duración.
PUNTOS DE RIESGO: cláusulas que me ponen en desventaja o que son inusuales.
PREGUNTAS PARA MI ABOGADO: 3 preguntas clave basadas en lo que leíste.

REGLA IMPORTANTE: Si algo no está claro en el documento o requiere interpretación legal, decílo explícitamente. No asumas. No inventes datos que no están en el texto.`,
        por_que: 'La "REGLA IMPORTANTE" activa el modo de incertidumbre explícita. Claude dice "esto no está claro" en lugar de inventar.'
      },
      {
        id: 'M1L7', num: 7, titulo: 'Refinamiento quirúrgico',
        gratis: true, tiempo: '4 min',
        concepto: '"Hacelo mejor" produce loops interminables. El refinamiento quirúrgico te lleva al resultado en un turno.',
        tecnica: 'Feedback estructurado MANTENER / CAMBIAR',
        mal: 'Hacelo mejor. / No me gusta, reescribilo.',
        bien: `Buen comienzo. Ajustes específicos:

MANTENÉ: la estructura general, el ejemplo del cliente en párrafo 3, el título.

CAMBIÁ:
1. TONO: Demasiado formal. Hacelo conversacional, como persona real.
2. PÁRRAFO 2: Cortalo a la mitad. Conservá los 2 puntos más importantes.
3. CTA: "Contáctenos" → Dame 3 alternativas con urgencia y beneficio claro.

Reescribí SOLO las partes que pedí cambiar.`,
        por_que: 'Separar MANTENER de CAMBIAR evita que Claude reescriba todo. Las 3 opciones de CTA te dan el control final de la decisión.'
      },
      {
        id: 'M1L8', num: 8, titulo: 'Análisis de datos pegados directamente',
        gratis: true, tiempo: '6 min',
        concepto: 'No necesitás adjuntar archivos. Podés pegar datos directamente y Claude los procesa igual de bien.',
        tecnica: 'Data-in-prompt',
        mal: 'Analizá mis ventas.',
        bien: `Datos de ventas Q2 (miles USD):

Mes    | Prod A | Prod B | Prod C | Total
Abril  | 120    | 85     | 200    | 405
Mayo   | 135    | 70     | 210    | 415
Junio  | 110    | 95     | 180    | 385

Dame en este orden exacto:
RESUMEN EJECUTIVO: qué pasó en Q2 (3 líneas)
MEJOR TENDENCIA: qué producto creció más consistentemente y por qué
SEÑAL DE ALERTA: qué número te preocupa
PREDICCIÓN Q3: total estimado para julio si las tendencias continúan
UNA PREGUNTA: qué información te faltaría para un análisis más completo`,
        por_que: '"En este orden exacto" + títulos en mayúsculas hace la respuesta predecible y fácil de copiar a un informe.'
      },
      {
        id: 'M1L9', num: 9, titulo: 'Etiquetas XML — la técnica pro invisible',
        gratis: true, tiempo: '7 min',
        concepto: 'Las etiquetas XML organizan el prompt como carpetas. Claude las entiende de forma nativa y sabe qué es contexto, qué es instrucción y qué son datos.',
        tecnica: 'XML structuring',
        mal: 'Creá un plan de contenido para mi empresa de software de construcción.',
        bien: `<rol>
Especialista en marketing de contenidos B2B SaaS con experiencia en construcción.
</rol>

<contexto>
Software de gestión de obras para arquitectos. 50 clientes, ARR $300k.
Quiero crecer con contenido orgánico sin equipo de marketing.
</contexto>

<tarea>
Plan de contenido: 1 artículo semanal por 3 meses.
</tarea>

<restricciones>
- Solo temas que un director de obra buscaría en Google
- Sin jerga de marketing ni software genérico
- Cada título debe ser una pregunta real del sector
- Incluí volumen estimado (bajo/medio/alto)
</restricciones>

<formato>
Tabla: Semana | Título | Tema central | Audiencia | Volumen
</formato>`,
        por_que: 'La separación semántica XML elimina ambigüedades. Claude sabe exactamente qué parte del prompt es qué.'
      },
      {
        id: 'M1L10', num: 10, titulo: 'Comparar documentos adjuntos',
        gratis: true, tiempo: '6 min',
        concepto: 'Podés adjuntar varios archivos y pedirle a Claude que los compare, encuentre contradicciones o sintetice.',
        tecnica: 'Multi-document analysis',
        mal: 'Comparame estas dos propuestas.',
        bien: `[Adjuntá Propuesta_A.pdf y Propuesta_B.pdf]

Compará ambas propuestas:

1. TABLA: precio total | tiempo de entrega | garantía | soporte | penalidades
2. VENTAJAS A vs B: qué tiene cada una que la otra no
3. RED FLAGS: algo que te llame la atención negativamente en cualquiera
4. RECOMENDACIÓN DIRECTA: si tenés que elegir una basándote solo en estos documentos, ¿cuál y por qué?
   Sé directo. No des respuesta diplomática.

Citá número de página o sección cuando hagas afirmaciones importantes.`,
        por_que: '"Sé directo, no des respuesta diplomática" fuerza una posición. "Citá la página" hace el análisis verificable.'
      },
      {
        id: 'M1L11', num: 11, titulo: 'Debugging de código con contexto completo',
        gratis: true, tiempo: '7 min',
        concepto: 'Para bugs: el código + el error exacto + qué esperabas + qué probaste. Sin ese contexto, Claude da respuestas genéricas.',
        tecnica: 'Bug report estructurado',
        mal: 'Mi código no funciona, ayudame.',
        bien: `Bug en Python que no puedo resolver.

CÓDIGO:
\`\`\`python
def promedio(nums):
    return sum(nums) / len(nums)

print(promedio([]))  # Esto falla
\`\`\`

ERROR: ZeroDivisionError: division by zero

ESPERABA: que devuelva 0 o None con lista vacía.

YA INTENTÉ: agregar if antes del return, pero no sé dónde poner el try/except.

Dame:
1. Por qué ocurre el error (en términos simples)
2. Solución con try/except (la más pytónica)
3. Alternativa sin try/except
4. Cuál preferirías y por qué`,
        por_que: 'Dar el error exacto + lo que ya intentaste evita que Claude te diga lo que ya sabés. Va directo a tu caso específico.'
      },
      {
        id: 'M1L12', num: 12, titulo: 'Plantilla reutilizable con XML',
        gratis: true, tiempo: '8 min',
        concepto: 'Creás un prompt donde las instrucciones nunca cambian. Solo reemplazás los datos. Una plantilla que usás decenas de veces.',
        tecnica: 'Template prompting',
        mal: '[escribir el prompt completo cada vez]',
        bien: `<instrucciones>
Sos asistente de ventas. Analizá el feedback del cliente y generá una respuesta que:
1. Reconozca el problema específico
2. Ofrezca solución concreta (no genérica)
3. Incluya próximo paso con fecha
Tono: empático pero profesional. Máximo 150 palabras.
</instrucciones>

<info_empresa>
Empresa: TuEmpresa | Producto: TuProducto | Plan: Enterprise
Responsable: [Tu nombre]
</info_empresa>

<feedback_cliente>
[PEGÁ EL FEEDBACK ACÁ — esto es lo único que cambia cada vez]
</feedback_cliente>

<acciones_disponibles>
- Escalada técnica urgente (24-48hs)
- Reunión con equipo esta semana
- Descuento 15% en próxima renovación
</acciones_disponibles>`,
        por_que: 'Solo <feedback_cliente> cambia cada vez. Guardás este prompt y lo reutilizás para decenas de casos sin reescribir nada.'
      }
    ]
  },

  // ══════════════════════════════════════════
  // MÓDULO 2 — INTERMEDIO (20 lecciones)
  // ══════════════════════════════════════════
  modulo2: {
    id: 'M2',
    titulo: 'Tres Herramientas, Un Mundo',
    subtitulo: '20 lecciones para destrabar tu mente',
    descripcion: 'Con Contexto + Rol + Formato podés construir cualquier cosa. Ejemplos de vida real que nadie te muestra.',
    nivel: 'intermedio',
    emoji: '⚡',
    color: '#ffd86a',
    gratis: false,
    gratis_preview: 4,
    lecciones: [
      {
        id: 'M2L1', num: 1, titulo: 'La trinidad: Contexto + Rol + Formato',
        gratis: true, tiempo: '8 min',
        concepto: 'Tres palabras que lo cambian todo. Cualquier prompt del mundo puede mejorarse con estas 3 variables. No necesitás más herramientas.',
        tecnica: 'La Trinidad del Prompt',
        mal: 'Escribime un mail a mi jefe.',
        bien: `CONTEXTO: Pido un aumento después de 2 años sin ajuste. Última revisión fue hace 8 meses. Logré 3 proyectos que ahorraron $40k a la empresa.

ROL: Sos un coach de comunicación corporativa especializado en negociaciones de salario.

FORMATO: Email de 150 palabras. Sin adulaciones. Directo al punto. Abre con el logro más importante, cierra con una propuesta de reunión esta semana.`,
        por_que: 'Sin la trinidad: email genérico. Con ella: Claude tiene todo lo que necesita para escribir TU situación específica, no la de cualquiera.'
      },
      {
        id: 'M2L2', num: 2, titulo: '2 líneas que construyen una ciudad',
        gratis: true, tiempo: '6 min',
        concepto: 'El prompt más corto puede producir el resultado más complejo. La abstracción bien aplicada es más poderosa que la longitud.',
        tecnica: 'Prompt de alto nivel de abstracción',
        mal: 'Diseñá una ciudad sustentable con todos los detalles de infraestructura, transporte...[100 palabras más]',
        bien: `Diseñá una ciudad de 100.000 habitantes 100% sustentable en la Patagonia.
Rol de urbanista. Formato: árbol de decisiones con pros/contras de cada elección clave.`,
        por_que: '2 líneas. La abstracción "árbol de decisiones" + el rol hace que Claude estructure la complejidad solo. Vos solo pusiste el norte.'
      },
      {
        id: 'M2L3', num: 3, titulo: 'Claude como compañero de cocina',
        gratis: true, tiempo: '5 min',
        concepto: 'Uso cotidiano que nadie usa: Claude sabe exactamente qué hacer con lo que tenés en la heladera hoy. No es magia, es contexto.',
        tecnica: 'Inventario + restricciones + creatividad',
        mal: '¿Qué cocino hoy?',
        bien: `En mi heladera tengo: 2 huevos, medio pimiento rojo, queso fresco, ajo, y sobras de arroz de ayer.

No tengo: harina, carne, pasta fresca.
Restricción: vegetariano, sin gluten.
Tiempo: máximo 20 minutos.
Habilidad: cocinero amateur.

Dame: 2 opciones de plato completo, pasos exactos, y en cuál quedan mejor los sabores combinados.`,
        por_que: 'El inventario exacto + restricciones hace que Claude trabaje con TU realidad, no con la de un chef con heladera llena.'
      },
      {
        id: 'M2L4', num: 4, titulo: 'Destrabar el "no sé por dónde empezar"',
        gratis: true, tiempo: '7 min',
        concepto: 'El bloqueo creativo es falta de estructura, no falta de ideas. Claude puede darte la estructura que necesitás para arrancar.',
        tecnica: 'Estructura de desbloqueo',
        mal: 'No sé cómo empezar mi tesis / proyecto / negocio.',
        bien: `No sé por dónde empezar mi proyecto: crear un podcast sobre historia argentina para jóvenes.

Tengo: ganas, algo de tiempo los fines de semana, un celular con buena grabación.
No tengo: experiencia en audio, audiencia previa, presupuesto.

Hacé esto:
1. Dame las 3 PRIMERAS acciones concretas (cada una completable en menos de 2 horas)
2. El ERROR más común que comete alguien en mi situación en los primeros 30 días
3. Una pregunta que debo hacerme yo antes de seguir

Solo eso. No el plan completo. Solo el arranque.`,
        por_que: '"Solo el arranque, no el plan completo" es clave. Los planes completos paralizan. Los primeros 3 pasos, no.'
      },
      {
        id: 'M2L5', num: 5, titulo: 'Claude como mediador de conflictos',
        gratis: false, tiempo: '8 min',
        concepto: 'Podés pedirle a Claude que analice un conflicto desde TODAS las perspectivas simultáneamente, incluyendo la tuya con sus puntos ciegos.',
        tecnica: 'Análisis multiperspectiva',
        mal: 'Mi compañero de trabajo me cae mal, ¿qué hago?',
        bien: `Conflicto con compañero de trabajo. Situación:
Él llega tarde a todas las reuniones (15-30 min). Yo lo cubro siempre frente al jefe. Lleva 3 meses.

Analizá desde 3 perspectivas:
PERSPECTIVA MÍA: por qué estoy frustrado (válida)
PERSPECTIVA DE ÉL: 3 razones posibles de su comportamiento que yo no veo
PERSPECTIVA DE UN OBSERVADOR: qué dinámica está pasando entre los dos que ninguno ve

Luego: el script exacto de lo que debería decirle en una conversación de 5 minutos. Sin agresividad, con claridad.`,
        por_que: 'La perspectiva del observador neutral es lo que nadie pide y lo más valioso. Claude te muestra el punto ciego que vos no podés ver.'
      },
      {
        id: 'M2L6', num: 6, titulo: 'Estudiar cualquier tema en modo turbo',
        gratis: false, tiempo: '9 min',
        concepto: 'Claude puede ser tu tutor personalizado que adapta la complejidad, usa tus ejemplos y sabe exactamente cuándo empujarte al siguiente nivel.',
        tecnica: 'Tutor adaptativo',
        mal: 'Explicame la relatividad especial.',
        bien: `Quiero entender la relatividad especial de Einstein.

Mi nivel: sé física básica del secundario. Entiendo velocidad, masa, energía. No sé cálculo diferencial.

Enséñame así:
1. El concepto central en 1 analogía de la vida cotidiana (sin fórmulas)
2. El experimento mental que Einstein usó para entenderlo él mismo
3. La consecuencia más sorprendente en términos prácticos
4. Una pregunta para verificar que entendí bien
5. Si respondo bien, qué concepto sería el siguiente paso lógico

No avances hasta que yo responda la pregunta del punto 4.`,
        por_que: '"No avances hasta que yo responda" convierte a Claude en tutor real con checkpoint de comprensión.'
      },
      {
        id: 'M2L7', num: 7, titulo: 'Planificar un viaje completo en 3 minutos',
        gratis: false, tiempo: '6 min',
        concepto: 'Claude puede planificar itinerarios hiperdetallados considerando logística real: horarios, distancias, presupuesto y preferencias personales.',
        tecnica: 'Planning con restricciones reales',
        mal: '¿Qué hacer en Buenos Aires?',
        bien: `Viajo a Buenos Aires 4 días con mi pareja. Somos de Mendoza.

NOSOTROS: nos gustan los museos y el arte callejero. No nos gusta el turismo masivo. Comemos de todo pero evitamos los lugares con música fuerte.
PRESUPUESTO: $200 USD totales para actividades y comidas (no alojamiento).
RESTRICCIÓN: no alquilamos auto, solo transporte público y a pie.
PEDIDO: itinerario día por día con horarios aproximados, costo estimado de cada actividad, y 1 "joya oculta" por día que la mayoría de los turistas no visita.

Formato: tabla por día con columnas Hora | Lugar | Actividad | Costo estimado | Por qué lo elegiste`,
        por_que: '"Joya oculta que la mayoría no visita" activa el conocimiento profundo de Claude. Las columnas específicas hacen el itinerario directamente usable.'
      },
      {
        id: 'M2L8', num: 8, titulo: 'Claude como entrenador personal',
        gratis: false, tiempo: '7 min',
        concepto: 'Un entrenador personal en el bolsillo. La diferencia está en darle tus datos reales, no los de "alguien promedio".',
        tecnica: 'Plan adaptado a tu biología',
        mal: '¿Cómo bajo de peso?',
        bien: `Quiero mejorar mi condición física. Mis datos reales:

Contexto físico: 34 años, trabajo de oficina (8hs sentado), no hago ejercicio hace 2 años. 15kg de sobrepeso según mi médico.
Tiempo disponible: 40 minutos, 4 veces por semana (martes, jueves, sábado, domingo).
Equipamiento: solo lo que hay en mi casa (sin gimnasio).
Limitación: rodilla derecha con condromalacia (sin saltos ni sentadillas profundas).

Dame:
- Rutina de las primeras 4 semanas (progresión real, no inmediata)
- La señal de que estoy listo para aumentar la intensidad
- El error más común que comete alguien con mi perfil en los primeros 30 días`,
        por_que: 'La condromalacia en rodilla derecha es información que un gym genérico ignora. Claude la incorpora en el plan sin que tengas que insistir.'
      },
      {
        id: 'M2L9', num: 9, titulo: 'Escribir lo que no sabés escribir',
        gratis: false, tiempo: '8 min',
        concepto: 'Claude puede escribir cualquier tipo de documento que nunca escribiste antes: una demanda civil, una carta notarial, un recurso administrativo.',
        tecnica: 'Escritura formal guiada',
        mal: 'Escribime una carta de reclamo.',
        bien: `Necesito una carta formal de reclamo para presentar ante la Defensoría del Consumidor de Argentina.

SITUACIÓN: Compré un lavarropas en cuotas. A los 3 meses dejó de funcionar. La empresa dice que es "mal uso" pero el técnico independiente certificó falla de fábrica (tengo el certificado).

INCLUÍ:
- Encabezado formal con mis datos y los de la empresa
- Descripción cronológica de los hechos (con fechas que te voy a dar)
- Fundamento legal: Ley 24.240 de Defensa del Consumidor, artículo específico sobre garantía
- Petición concreta: cambio del producto o devolución del dinero
- Tono: formal, firme, sin agresividad

FECHAS: compra 12/03/2025, falla reportada 15/06/2025, respuesta negativa empresa 20/06/2025.`,
        por_que: 'El artículo específico de la ley + las fechas reales + "tono firme sin agresividad" produce un documento que podés presentar directamente.'
      },
      {
        id: 'M2L10', num: 10, titulo: 'Analizar una decisión con pre-mortem',
        gratis: false, tiempo: '9 min',
        concepto: 'Imaginás que ya fallaste y buscás las causas. La técnica más poderosa para tomar decisiones bajo incertidumbre.',
        tecnica: 'Pre-mortem decision analysis',
        mal: '¿Debería abrir mi propio negocio?',
        bien: `Voy a abrir una tienda online de ropa vintage en Argentina. Capital: $8,000 USD. Lanzamiento en 2 meses.

Hacé un PRE-MORTEM:
Asumí que es 18 meses después y el negocio cerró.

1. CAUSAS DEL FRACASO: las 5 más comunes para este tipo de negocio en contexto argentino (orden de probabilidad)
2. SEÑALES TEMPRANAS: para cada causa, la primera señal que aparece en los primeros 60 días
3. ACCIONES PREVENTIVAS: para las 2 causas más probables, qué haría diferente desde el día 1
4. PREGUNTA INCÓMODA: qué supuesto estoy haciendo que probablemente esté equivocado

Sé brutalmente honesto. No quiero aliento. Quiero ver lo que no quiero ver.`,
        por_que: '"Sé brutalmente honesto, quiero ver lo que no quiero ver" desactiva la tendencia de Claude a ser alentador. La PREGUNTA INCÓMODA es el punto ciego que vos mismo no ves.'
      },
      {
        id: 'M2L11', num: 11, titulo: 'Claude para criar hijos (sin juicio)',
        gratis: false, tiempo: '7 min',
        concepto: 'Una de las aplicaciones más útiles y menos usadas: crianza, comunicación con hijos, situaciones difíciles en familia.',
        tecnica: 'Psicología aplicada cotidiana',
        mal: 'Mi hijo de 8 años no quiere estudiar.',
        bien: `Mi hijo tiene 8 años. Situación específica: no quiere hacer la tarea de matemáticas. Cuando insisto, llora y dice "soy malo para los números". Esto pasa hace 3 semanas desde que empezó el tema de fracciones.

Analizá desde la perspectiva de psicología del desarrollo:
1. Qué puede estar pasando realmente (más allá de "no quiere")
2. Qué NO hacer que empeora la situación (cosas que los padres hacemos sin darse cuenta)
3. Una conversación de 5 minutos que puedo tener con él HOY. Dame el script exacto, incluyendo cómo respondo si dice "no sé" o "no puedo"
4. Una actividad de 10 minutos que conecte fracciones con algo que a él le guste (le encantan los dinosaurios)`,
        por_que: 'Los dinosaurios y las fracciones: Claude conecta lo que tu hijo ama con lo que necesita aprender. Eso es imposible con un manual genérico.'
      },
      {
        id: 'M2L12', num: 12, titulo: 'Crear contenido visual con solo texto',
        gratis: false, tiempo: '8 min',
        concepto: 'Claude puede describir, estructurar y guiar la creación de piezas visuales aunque no genere imágenes. El prompt correcto produce el brief perfecto para cualquier herramienta.',
        tecnica: 'Visual briefing',
        mal: 'Diseñame un logo.',
        bien: `Necesito el brief completo para diseñar el logo de mi emprendimiento.

Mi negocio: servicio de fotografía de naturaleza para calendarios y libros corporativos. Nombre: "Patagonia Luz".

Dame el brief en este formato para que pueda dárselo a un diseñador o usarlo en Midjourney/DALL-E:

1. CONCEPTO CENTRAL: la idea visual en 1 frase
2. PALETA: 3 colores exactos con código HEX y por qué cada uno
3. TIPOGRAFÍA: estilo de fuente (no nombre específico) y por qué
4. QUÉ DEBE TRANSMITIR: 3 adjetivos que el logo debe evocar en quien lo ve
5. QUÉ EVITAR: 3 clichés del sector que hay que esquivar
6. PROMPT PARA MIDJOURNEY: el prompt listo para usar en esa herramienta`,
        por_que: 'El brief + el prompt para Midjourney listo para usar conecta el razonamiento de Claude con las herramientas de generación visual.'
      },
      {
        id: 'M2L13', num: 13, titulo: 'Negociar cualquier cosa con datos',
        gratis: false, tiempo: '8 min',
        concepto: 'Claude puede prepararte para cualquier negociación con datos reales, argumentos estructurados y respuestas para cada objeción.',
        tecnica: 'Negotiation prep completo',
        mal: 'Ayudame a negociar el alquiler.',
        bien: `Voy a negociar la renovación de mi contrato de alquiler en Palermo, Buenos Aires.

SITUACIÓN ACTUAL: Pago $280,000/mes. El propietario quiere subir a $420,000 (50% de aumento). El contrato vence en 45 días.

LEVERAGE QUE TENGO: 3 años como inquilino, siempre pagué a tiempo, hice mejoras en el departamento (instalé AC por mi cuenta).

Dame:
1. Precio objetivo realista basado en el mercado de Palermo hoy
2. Las 3 objeciones que va a poner el propietario y mi respuesta a cada una
3. El script de apertura de la conversación (primeras 2 minutos)
4. Mi punto de quiebre: ¿hasta dónde cedo y por qué?
5. La alternativa que tengo si no llegamos a acuerdo (para no negociar desde el miedo)`,
        por_que: 'El punto 5 (alternativa si no hay acuerdo) es lo que la mayoría no prepara. Sin alternativa, siempre negociás desde el miedo.'
      },
      {
        id: 'M2L14', num: 14, titulo: 'Automatizar con lenguaje natural',
        gratis: false, tiempo: '10 min',
        concepto: 'Claude puede escribir scripts de automatización en lenguaje que vos describes. Sin saber programar. Describe lo que querés y obtiene el código funcional.',
        tecnica: 'No-code automation via prompt',
        mal: 'Escribime un script para mis archivos.',
        bien: `Necesito un script en Python (sin librerías externas) que haga esto:

PROBLEMA QUE RESUELVE: Tengo una carpeta con 200 fotos de mis viajes. Los nombres son "IMG_2847.jpg" sin ningún sentido. Quiero renombrarlas automáticamente.

LÓGICA QUE QUIERO:
1. Leer la fecha de cada foto (del nombre si tiene fecha, o de los metadatos del archivo)
2. Renombrar como: YYYY-MM-DD_viaje_NNN.jpg (donde NNN es número correlativo del mismo día)
3. Si dos fotos tienen la misma fecha, ordenarlas por hora de modificación
4. Crear un archivo log.txt con los cambios realizados
5. NO borrar los originales, hacer copias en una subcarpeta "renombradas/"

Mostrá el código completo con comentarios en español en cada sección importante.`,
        por_que: 'La descripción en lenguaje natural + los 5 puntos de lógica produce código funcional que resuelve TU problema específico.'
      },
      {
        id: 'M2L15', num: 15, titulo: 'Investigar temas complejos en capas',
        gratis: false, tiempo: '9 min',
        concepto: 'Para temas complejos, la técnica de "capas" te da comprensión real en lugar de un muro de texto que no podés procesar.',
        tecnica: 'Layered learning',
        mal: 'Explicame la crisis económica argentina.',
        bien: `Quiero entender la crisis económica argentina. Soy alguien con nivel universitario pero no soy economista.

Enséñame en 3 capas:

CAPA 1 — EL HUESO: el mecanismo central en 5 líneas. Solo la causa raíz. Sin contexto histórico todavía.

CAPA 2 — EL CONTEXTO: las 3 decisiones políticas clave de los últimos 20 años que amplificaron ese mecanismo. Una frase por decisión y su consecuencia directa.

CAPA 3 — HOY: cómo se manifiesta eso en la vida cotidiana de una familia de clase media hoy. Ejemplos concretos, no abstractos.

Al final: la pregunta que debería hacerme para entender si las soluciones propuestas tienen sentido o no.`,
        por_que: 'Las 3 capas (mecanismo → contexto → cotidiano) construyen comprensión real. La pregunta final te da el criterio para evaluar lo que leas después.'
      },
      {
        id: 'M2L16', num: 16, titulo: 'Feedback sin herir (y sin mentir)',
        gratis: false, tiempo: '7 min',
        concepto: 'Claude puede ayudarte a dar feedback difícil que sea honesto, específico y que la persona pueda recibir sin ponerse a la defensiva.',
        tecnica: 'Radical candor estructurado',
        mal: '¿Cómo le digo a mi empleado que trabaja mal?',
        bien: `Tengo que dar feedback difícil a un miembro de mi equipo.

SITUACIÓN: Juan lleva 8 meses en el equipo. Su trabajo técnico es bueno pero en las últimas 4 semanas no cumplió 3 deadlines. Cuando le pregunto avances, da respuestas vagas. El equipo está afectado.

OBJETIVO: que entienda la seriedad sin destruir la relación. Que cambie el comportamiento, no que renuncie.

Dame:
1. El script de la conversación de 15 minutos (apertura, desarrollo, cierre)
2. Las 2 preguntas que debo hacer SIN hacer suposiciones sobre por qué pasa esto
3. Cómo respondo si dice "no sabía que era tan importante" (para no quedarme sin palabras)
4. Qué hago si al final de la reunión no llegamos a acuerdos concretos`,
        por_que: 'Las 2 preguntas sin suposiciones son el núcleo: hay que entender antes de juzgar. El script completo te da seguridad para tener la conversación real.'
      },
      {
        id: 'M2L17', num: 17, titulo: 'Claude para el barrio (impacto social local)',
        gratis: false, tiempo: '8 min',
        concepto: 'Usar Claude para resolver problemas reales de tu comunidad: vecinos, organizaciones barriales, proyectos sociales pequeños.',
        tecnica: 'Social impact prompting',
        mal: 'Ayudame con mi proyecto comunitario.',
        bien: `Soy parte de una organización vecinal en un barrio de Córdoba, Argentina. Tenemos 40 familias organizadas.

PROBLEMA: la municipalidad prometió arreglar las calles hace 8 meses. Nada. Queremos presionar de forma efectiva y legal.

Dame:
1. Un plan de acción de 30 días (gratis, sin abogado) con acciones concretas por semana
2. El modelo de nota formal para presentar en la municipalidad con el reclamo (con base legal)
3. Cómo documentar el problema para que sea irrefutable (fotos, registros, testimonios)
4. 3 tácticas de visibilidad en redes sociales que han funcionado en casos similares en Argentina
5. A qué organismo acudir si la municipalidad no responde en 30 días`,
        por_que: 'Plan + nota legal + documentación + redes + escalada. Claude organiza en 5 minutos lo que a un vecindario le tomaría semanas descubrir solo.'
      },
      {
        id: 'M2L18', num: 18, titulo: 'Generar negocios de 0 con restricciones reales',
        gratis: false, tiempo: '9 min',
        concepto: 'La creatividad real trabaja con restricciones, no sin ellas. Las mejores ideas de negocio nacen de limitaciones específicas.',
        tecnica: 'Constraint-based ideation',
        mal: 'Dame ideas de negocio.',
        bien: `Necesito ideas de negocio que pueda arrancar este mes.

MIS RESTRICCIONES REALES (todas deben respetarse):
- Capital máximo: $500 USD
- Tiempo disponible: 10 horas semanales (trabajo en relación de dependencia)
- Habilidades: soy diseñador gráfico, manejo bien las redes sociales
- No quiero: atención al público presencial, inventario físico
- Quiero: ingresos en los primeros 30 días, no en 6 meses

Dame 5 ideas. Para cada una:
- Nombre descriptivo
- Cómo genera dinero en las primeras 4 semanas (específico)
- Primer cliente posible: cómo lo consigo sin publicidad paga
- Cuál es el mayor riesgo específico para MI perfil`,
        por_que: '"Primer cliente sin publicidad paga" es la pregunta que separa ideas reales de teoría. Las restricciones específicas eliminan las ideas genéricas que no sirven para vos.'
      },
      {
        id: 'M2L19', num: 19, titulo: 'Aprender a aprender con Claude',
        gratis: false, tiempo: '10 min',
        concepto: 'La meta-habilidad: usar Claude para diseñar tu propio sistema de aprendizaje, no solo para aprender un tema.',
        tecnica: 'Learning system design',
        mal: 'Quiero aprender inglés.',
        bien: `Quiero aprender inglés de cero de forma autónoma. No quiero cursos presenciales ni apps de gamificación.

MI SITUACIÓN: 28 años, tiempo disponible 45 minutos/día (mañana antes del trabajo), nivel actual: entiendo algo escrito pero no hablo nada.
META: en 6 meses poder tener una conversación de trabajo básica.

Diseñame un sistema de aprendizaje personalizado:
1. LOS 3 RECURSOS GRATUITOS más efectivos para mi perfil (específicos, no genéricos)
2. LA RUTINA DIARIA de 45 minutos (dividida en bloques con minutos exactos)
3. EL HITO de las primeras 4 semanas: qué debería poder hacer que hoy no puedo
4. EL ERROR que comete el 90% de autodidactas de inglés en los primeros 2 meses
5. CÓMO USAR CLAUDE durante el proceso (dame prompts específicos que puedo usar cada semana)`,
        por_que: 'El punto 5 es recursivo: Claude te enseña cómo usarse a sí mismo para aprender. Eso es aprender a aprender.'
      },
      {
        id: 'M2L20', num: 20, titulo: 'El prompt que desbloqueó todo',
        gratis: false, tiempo: '10 min',
        concepto: 'Síntesis del módulo: un prompt que combina las 3 herramientas (Contexto + Rol + Formato) con abstracción creativa. El prompt que demuestra que no necesitás más.',
        tecnica: 'Master prompt intermedio',
        mal: '[cualquier prompt de 1 línea sin estructura]',
        bien: `<contexto>
Soy docente de primaria en una escuela pública de zona rural. 25 alumnos, 8-10 años, sin acceso a internet en clase. Presupuesto para materiales: $0.
</contexto>

<rol>
Pedagogo especializado en educación sin recursos tecnológicos y en aprendizaje activo.
</rol>

<tarea>
Diseñá una unidad didáctica de 2 semanas sobre el cambio climático que los niños puedan entender y que los movilice a tomar una acción concreta en su comunidad.
</tarea>

<restricciones>
- Sin tecnología, sin imágenes impresas costosas
- Que los chicos sean protagonistas, no receptores
- La acción final debe ser algo que puedan hacer ellos solos, sin depender de adultos
- Adaptado a zona rural (los ejemplos deben resonar con su vida diaria)
</restricciones>

<formato>
Semana 1 y 2 por separado. Cada día: objetivo del día, actividad principal (15-20 min), material necesario (solo lo que hay en cualquier escuela rural), pregunta de cierre.
</formato>`,
        por_que: 'Este prompt con $0 de presupuesto y sin internet produce una unidad didáctica que un consultor pedagógico cobraría $5,000. Las tres herramientas lo hicieron posible.'
      }
    ]
  },

  // ══════════════════════════════════════════
  // MÓDULO 3 — AVANZADO (40 lecciones)
  // ══════════════════════════════════════════
  modulo3: {
    id: 'M3',
    titulo: 'Dejar algo operativo en la red',
    subtitulo: '40 lecciones para construir infraestructura real',
    descripcion: 'De usar Claude a desplegar sistemas que existen aunque vos no estés. APIs, monitoreo, alertas, radio de emergencia, automatizaciones reales.',
    nivel: 'avanzado',
    emoji: '🛰️',
    color: '#ff6a9b',
    gratis: false,
    gratis_preview: 3,
    lecciones: [
      {
        id: 'M3L1', num: 1, titulo: 'El salto mental: de usuario a constructor',
        gratis: true, tiempo: '10 min',
        concepto: 'La diferencia entre usar Claude y desplegar con Claude. Un sistema que creás hoy puede estar funcionando en internet en 2 horas, y seguirá ahí cuando vos duermas.',
        tecnica: 'Mentalidad de infraestructura',
        mal: 'Haceme un resumen de las noticias de hoy.',
        bien: `Quiero construir un bot que haga esto automáticamente todos los días a las 7am:

1. Scrapee los titulares de 3 fuentes (Infobae, La Nación, Clarín)
2. Use la API de Claude para generar un resumen de 5 líneas sin sesgos
3. Envíe ese resumen a mi email
4. Guarde el resumen en un archivo .txt con fecha como nombre

Dame el código Python completo para deployarlo en un VPS o en GitHub Actions (gratuito).
Incluí: el código, el cron job, las dependencias (requirements.txt), y cómo configurar el secreto de la API.`,
        por_que: 'Este prompt no te da el resumen de hoy. Te da el sistema que genera el resumen de hoy, mañana y siempre. Esa es la diferencia de mentalidad.'
      },
      {
        id: 'M3L2', num: 2, titulo: 'Tu primera API en 15 minutos',
        gratis: true, tiempo: '12 min',
        concepto: 'Una API es solo un punto de acceso a tu lógica. Con Claude podés construir una que responda en internet en 15 minutos, sin cursos previos.',
        tecnica: 'API mínima viable',
        mal: 'Explicame qué es una API.',
        bien: `Quiero crear mi primera API REST que pueda acceder desde cualquier lugar.

FUNCIÓN: recibe un texto en español y devuelve el análisis de sentimiento (positivo/negativo/neutro) y las 3 palabras clave.

Dame el código completo en Python con FastAPI:
- El endpoint POST /analizar
- El modelo de respuesta JSON
- Cómo probarlo localmente con curl
- Cómo deployarlo gratis en Railway.app o Render.com
- El comando exacto para que quede corriendo 24/7

Comentá el código en español. Asumí que sé Python básico pero nunca hice una API.`,
        por_que: 'En 15 minutos tenés algo en la red que responde a consultas. El paso de "aprender qué es una API" a "tener una API funcionando" es el mayor salto mental de este módulo.'
      },
      {
        id: 'M3L3', num: 3, titulo: 'Monitor de incendios con datos reales',
        gratis: true, tiempo: '15 min',
        concepto: 'Sistema real: monitoreo de riesgo de incendios forestales usando datos abiertos de NASA y alertas automáticas. Algo que puede salvar vidas y que podés desplegar hoy.',
        tecnica: 'Sistema de alerta con datos abiertos',
        mal: 'Dame información sobre incendios forestales.',
        bien: `Quiero construir un sistema de monitoreo de incendios forestales para la región de Córdoba, Argentina.

FUENTES DE DATOS GRATUITAS A USAR:
- NASA FIRMS API (Fire Information for Resource Management System) — gratis y abierta
- OpenWeatherMap API (nivel gratuito: temperatura, humedad, viento)

SISTEMA QUE QUIERO:
1. Script Python que corra cada 6 horas
2. Descarga puntos de calor activos en un radio de 200km de Córdoba capital
3. Cruza con condiciones meteorológicas actuales (viento > 40km/h + humedad < 30% = alerta roja)
4. Genera un reporte JSON con: coordenadas, nivel de riesgo, condiciones climáticas
5. Si hay alerta roja: envía email a una lista de contactos y publica en un endpoint web

Dame: el código completo, las instrucciones de registro en ambas APIs (gratuitas), y cómo deployarlo en GitHub Actions con cron cada 6 horas.`,
        por_que: 'Este sistema puede estar operativo hoy y monitorear incendios reales. No es un ejercicio: es infraestructura con impacto real en comunidades vulnerables.'
      },
      {
        id: 'M3L4', num: 4, titulo: 'Dashboard de datos en tiempo real',
        gratis: false, tiempo: '12 min',
        concepto: 'Un dashboard web que se actualiza solo, muestra datos en tiempo real y es accesible desde cualquier dispositivo. Sin pagar hosting.',
        tecnica: 'Real-time dashboard gratuito',
        mal: 'Cómo hago un gráfico con mis datos.',
        bien: `Quiero un dashboard web en tiempo real para monitorear métricas de mi pequeño negocio.

MÉTRICAS A MOSTRAR:
- Ventas del día (número y monto)
- Ventas de la semana vs semana anterior
- Producto más vendido hoy
- Alerta si ventas bajan más de 30% vs el mismo día la semana pasada

DATOS: tengo una hoja de Google Sheets donde cargo las ventas manualmente cada día.

Dame:
- Dashboard HTML/JS que lea los datos de Google Sheets via API pública
- Se actualice sin que yo haga nada (polling cada 30 minutos)
- Funcione en el celular (responsive)
- Deployable en GitHub Pages (gratis)
- El script de Google Sheets que necesito para exponer los datos`,
        por_que: 'Google Sheets como base de datos + GitHub Pages como hosting = dashboard profesional con $0 de costo. Claude conecta herramientas gratuitas que la mayoría no sabe que existen juntas.'
      },
      {
        id: 'M3L5', num: 5, titulo: 'Bot de Telegram para tu comunidad',
        gratis: false, tiempo: '13 min',
        concepto: 'Un bot de Telegram que responde consultas, difunde alertas y conecta a tu comunidad. Gratis, siempre activo, sin servidor propio.',
        tecnica: 'Community bot deployment',
        mal: 'Cómo hago un bot de Telegram.',
        bien: `Quiero un bot de Telegram para nuestra organización vecinal de 200 personas.

FUNCIONES DEL BOT:
1. /alerta [mensaje] — Solo admins pueden usarlo. Reenvía el mensaje a todos los suscriptores.
2. /suscribir — Cualquier vecino se suscribe a las alertas
3. /estado — Muestra el estado actual de los servicios del barrio (luz, agua, gas) que actualizo yo manualmente
4. /reclamo [descripción] — Guarda el reclamo en una hoja de Google Sheets con fecha y usuario

TÉCNICO:
- Python con python-telegram-bot
- Deploy en Railway.app (gratis)
- Base de datos: Google Sheets (sin pagar base de datos)
- Lista de admins configurable en variable de entorno

Código completo + instrucciones de setup del bot en @BotFather + deploy.`,
        por_que: 'Infraestructura comunitaria real. 200 vecinos conectados, alertas instantáneas, reclamos registrados. Todo gratuito y deployado en 1 hora.'
      },
      {
        id: 'M3L6', num: 6, titulo: 'Sistema de radio de emergencia con síntesis de voz',
        gratis: false, tiempo: '15 min',
        concepto: 'En zonas aisladas sin internet fija, un sistema de texto-a-voz puede transmitir alertas de emergencia por radio FM local. Claude diseña el sistema completo.',
        tecnica: 'Emergency broadcast system',
        mal: 'Cómo funciona una radio de emergencia.',
        bien: `Quiero diseñar un sistema de transmisión de emergencias para zonas rurales aisladas de la Patagonia sin internet fija.

ARQUITECTURA QUE NECESITO:
- Raspberry Pi como servidor local (sin internet, solo red local o satélite)
- Recibe mensajes de alerta via SMS (usando módulo GSM SIM800L)
- Convierte el texto a audio con síntesis de voz (offline, en español)
- Transmite el audio por FM local via PiFM o similar
- Guarda log de todas las transmisiones con timestamp

CASOS DE USO: alerta de incendio, corte de ruta, emergencia médica, caída de comunicaciones fijas.

Dame:
1. Lista de componentes con precio estimado en Argentina
2. Código Python completo del sistema
3. Instalación en Raspberry Pi OS
4. Cómo configurar el módulo GSM para recibir SMS
5. Consideraciones legales de transmisión FM en Argentina`,
        por_que: 'Esto es infraestructura crítica real. Un sistema que funciona cuando todo lo demás falla: sin internet, sin celular, solo FM y texto. Claude diseña algo que puede salvar vidas en zonas aisladas.'
      },
      {
        id: 'M3L7', num: 7, titulo: 'Web scraper ético para investigación social',
        gratis: false, tiempo: '12 min',
        concepto: 'Recopilar datos públicos de forma sistemática para investigación, periodismo o análisis social. Código funcional con consideraciones éticas.',
        tecnica: 'Ethical data collection',
        mal: 'Cómo scrapeo datos de internet.',
        bien: `Necesito recopilar datos públicos para un proyecto de investigación sobre precios de alquileres en Buenos Aires.

FUENTE: Mercado Libre Inmuebles (datos públicos, sin login)
DATOS A EXTRAER: precio, barrio, m2, ambientes, fecha de publicación

REQUERIMIENTOS ÉTICOS Y TÉCNICOS:
- Respetar robots.txt de la fuente
- Delays aleatorios entre requests (2-5 segundos)
- No más de 100 requests por hora
- Headers que identifiquen el bot como investigación académica
- Guardar en CSV con timestamp

ANÁLISIS AUTOMÁTICO:
- Precio promedio por barrio
- Evolución semanal (si corro el script varias semanas)
- Alerta si algún barrio sube/baja más de 15% en una semana

Dame el código Python completo + análisis automático + dashboard básico en HTML para ver los datos.`,
        por_que: 'Los delays éticos y la identificación del bot no son opcionales: son lo que diferencia investigación de abuso. Claude incorpora la ética como parte del código, no como un anexo.'
      },
      {
        id: 'M3L8', num: 8, titulo: 'Automatización de reportes con IA',
        gratis: false, tiempo: '13 min',
        concepto: 'Un sistema que genera reportes profesionales automáticamente, los envía a los stakeholders y archiva todo. Sin intervención humana.',
        tecnica: 'AI-powered automated reporting',
        mal: 'Ayudame a hacer un reporte.',
        bien: `Quiero automatizar los reportes semanales de mi proyecto de impacto social.

PROYECTO: distribución de comida a 150 familias en Rosario. Cargo datos manualmente en Google Sheets cada semana.

SISTEMA DE REPORTES AUTOMÁTICOS:
1. Cada lunes a las 8am: lee los datos de la semana pasada de Google Sheets
2. Usa Claude API para generar un reporte narrativo (no solo números)
3. El reporte incluye: familias atendidas, comparación con semana anterior, logros destacados, obstáculos
4. Genera versión PDF del reporte
5. Envía el PDF por email a: equipo interno (detallado) y donantes (versión resumida de 1 página)
6. Publica versión pública en una URL fija que siempre muestra el último reporte

Dame el código Python completo con: integración Google Sheets, llamada a API de Claude, generación PDF, envío email, y deploy en GitHub Actions.`,
        por_que: 'Dos versiones del mismo reporte (detallado para el equipo, resumido para donantes) generadas automáticamente con IA. Esto toma 4 horas manuales. El sistema lo hace en 2 minutos.'
      },
      {
        id: 'M3L9', num: 9, titulo: 'Chatbot de atención con memoria',
        gratis: false, tiempo: '14 min',
        concepto: 'Un chatbot que recuerda el historial de cada usuario, aprende de las interacciones y mejora sus respuestas con el tiempo.',
        tecnica: 'Stateful chatbot deployment',
        mal: 'Cómo hago un chatbot.',
        bien: `Quiero un chatbot para mi organización de salud comunitaria.

FUNCIÓN: responder preguntas frecuentes sobre turnos, vacunas y servicios. Derivar a humano cuando no puede responder.

REQUERIMIENTOS:
- Memoria por usuario: recuerda si ya sacó turno, qué vacunas tiene registradas
- Base de conocimiento: un archivo FAQ.md que yo actualizo sin tocar el código
- Escalamiento humano: si el usuario escribe "quiero hablar con alguien", deriva a Telegram del coordinador
- Idiomas: español, y detecta si el usuario escribe en guaraní (responde que hay atención en ese idioma disponible)
- Deploy: Telegram bot + página web embebible

STACK: Python + Claude API + SQLite para memoria + Railway.app
Dame código completo, estructura del FAQ.md, y cómo agregar nuevas preguntas sin programar.`,
        por_que: 'El FAQ.md editable sin tocar código es la clave: el equipo de salud puede actualizar la información sin depender de programadores. Autonomía real para organizaciones con pocos recursos.'
      },
      {
        id: 'M3L10', num: 10, titulo: 'Sistema de alertas sísmicas locales',
        gratis: false, tiempo: '15 min',
        concepto: 'Monitoreo en tiempo real de actividad sísmica con alertas personalizadas para tu región. Usando datos abiertos del INPRES y USGS.',
        tecnica: 'Seismic monitoring system',
        mal: 'Dame información sobre sismos en Argentina.',
        bien: `Quiero un sistema de monitoreo sísmico para San Juan, Argentina (zona de alta actividad).

FUENTES DE DATOS:
- USGS Earthquake API (gratis, tiempo real)
- INPRES (datos nacionales)

SISTEMA:
1. Polling cada 5 minutos a la API de USGS
2. Filtra sismos en radio de 300km de San Juan
3. Clasifica por magnitud: info (< 3.0), alerta (3.0-4.5), emergencia (> 4.5)
4. Para emergencia: envía SMS via Twilio (plan gratis: 100 SMS/mes) + Telegram + email
5. Dashboard web en tiempo real con mapa (usando Leaflet.js, gratuito)
6. Historial de últimos 30 días en SQLite

Dame el sistema completo: código Python, dashboard HTML con mapa, instrucciones de deploy en VPS $5/mes (DigitalOcean o Linode), y configuración de alertas.`,
        por_que: 'Infraestructura de emergencia real para una zona sísmica activa. El VPS de $5/mes es el único costo. El sistema que construís podría alertar a toda tu comunidad antes de sentir el temblor.'
      },
      {
        id: 'M3L11', num: 11, titulo: 'Red mesh de comunicaciones offline',
        gratis: false, tiempo: '16 min',
        concepto: 'En situaciones de desastre donde la red celular cae, una red mesh con dispositivos de bajo costo permite comunicación entre vecinos sin internet.',
        tecnica: 'Offline mesh network design',
        mal: 'Cómo me comunico sin internet.',
        bien: `Quiero diseñar una red de comunicaciones de emergencia para 50 hogares en zona rural sin cobertura celular confiable.

TECNOLOGÍA BASE: LoRa (Long Range) con módulos Heltec ESP32 (~$15 USD por unidad)

SISTEMA QUE NECESITO:
1. Cada nodo puede enviar mensajes de texto cortos (140 caracteres) a cualquier otro nodo
2. Los mensajes saltan de nodo en nodo hasta llegar al destino (mesh routing)
3. Un nodo central (con batería solar) actúa como repetidor y logger
4. Mensajes de emergencia tienen prioridad y se transmiten por todos los canales disponibles
5. Interface simple: pantalla OLED + 2 botones (scroll y enviar)

Dame:
- Lista de componentes con precio en Argentina
- Código Arduino/MicroPython para los nodos
- Protocolo de mensajes propuesto (eficiente para LoRa)
- Instrucciones de instalación para personas sin conocimiento técnico
- Cómo integrar con el sistema de radio FM de la lección anterior`,
        por_que: 'LoRa puede transmitir hasta 15km en zonas rurales con $15 de hardware. Una red de 10 nodos cubre un radio enorme y funciona cuando todo lo demás falla.'
      },
      {
        id: 'M3L12', num: 12, titulo: 'Análisis de agua con sensores y Claude',
        gratis: false, tiempo: '14 min',
        concepto: 'Sistema de monitoreo de calidad del agua para comunidades sin acceso a laboratorios. Sensores de bajo costo + análisis con IA.',
        tecnica: 'Environmental IoT monitoring',
        mal: 'Cómo analizo la calidad del agua.',
        bien: `Quiero un sistema de monitoreo de agua para una comunidad rural que toma agua de pozo en Chaco, Argentina.

SENSORES DE BAJO COSTO A USAR:
- pH sensor (~$5 USD)
- Turbidez (TSS) sensor (~$8 USD)  
- Temperatura DS18B20 (~$3 USD)
- Arduino Uno como controlador (~$10 USD)

SISTEMA:
1. Lectura de sensores cada hora
2. Almacenamiento local en tarjeta SD (sin internet necesario)
3. Cuando hay conexión (1 vez/día via celular): sube datos a Google Sheets
4. Claude API analiza las lecturas y genera reporte: "el agua hoy es segura para consumo / hay anomalía en pH"
5. Si hay anomalía: SMS de alerta a referente comunitario

Dame: código Arduino completo, código Python para el análisis con Claude, y explicación de los umbrales de seguridad según OMS para agua de consumo.`,
        por_que: '$26 USD de hardware + datos abiertos de OMS + Claude = sistema de monitoreo de agua que antes requería un laboratorio. Tecnología accesible para comunidades vulnerables.'
      },
      {
        id: 'M3L13', num: 13, titulo: 'Generador de currículas educativas con IA',
        gratis: false, tiempo: '12 min',
        concepto: 'Sistema que genera planes de estudio adaptados a contextos específicos: sin recursos, con diferentes edades, en distintos idiomas.',
        tecnica: 'AI curriculum generation',
        mal: 'Ayudame con el plan de clases.',
        bien: `Quiero un sistema web que docentes rurales puedan usar para generar currículas adaptadas.

INPUTS DEL DOCENTE (via formulario):
- Tema a enseñar
- Rango etario (6-8 / 9-11 / 12-14 años)
- Duración (1 semana / 1 mes / trimestre)
- Recursos disponibles (selección: "solo pizarrón", "pizarrón + fotocopias", "computadora sin internet")
- Idioma local (español / guaraní / quechua)
- Contexto (rural / urbano / indígena)

OUTPUT AUTOMÁTICO (via Claude API):
- Plan de clases día por día
- Actividades adaptadas a los recursos disponibles
- Criterios de evaluación sin calificaciones numéricas
- Versión imprimible en PDF

Dame: formulario HTML, backend Python con Flask, integración Claude API, generación PDF, y deploy en Heroku o Render (gratuito).`,
        por_que: 'Adaptar automáticamente al contexto (rural, sin recursos, idioma local) es lo que hace a este sistema útil donde más se necesita. No es un generador genérico: es una herramienta de equidad educativa.'
      },
      {
        id: 'M3L14', num: 14, titulo: 'Sistema de votación comunitaria transparente',
        gratis: false, tiempo: '13 min',
        concepto: 'Una plataforma de votación simple, transparente y verificable para organizaciones comunitarias. Sin blockchain, sin complejidad innecesaria.',
        tecnica: 'Transparent community voting',
        mal: 'Cómo hacemos votaciones en mi organización.',
        bien: `Quiero una plataforma de votación para nuestra cooperativa de 80 socios.

REQUERIMIENTOS:
- Cada socio vota con su DNI (verificado contra lista maestra en CSV)
- Cada persona vota solo una vez (pero sin guardar quién votó qué)
- Resultados en tiempo real, visibles para todos
- Auditoría: cualquier socio puede verificar que su voto fue contado (sin revelar cómo votó)
- Funciona en celular, sin app
- El admin puede crear nuevas votaciones desde un panel simple

TECNOLOGÍA:
- Python/Flask backend
- HTML/CSS simple (funciona en celulares viejos)
- SQLite para datos
- Hash del DNI + fecha para anonimizar
- Deploy en Railway.app (gratis)

Dame: sistema completo, explicación del mecanismo de anonimización, y guía de uso para el admin.`,
        por_que: 'El hash del DNI + fecha es el núcleo: anonimiza sin perder la verificabilidad. Democracia comunitaria real con tecnología simple y gratuita.'
      },
      {
        id: 'M3L15', num: 15, titulo: 'Asistente de salud mental para zonas rurales',
        gratis: false, tiempo: '15 min',
        concepto: 'En zonas sin acceso a profesionales de salud mental, un sistema de primeros auxilios psicológicos con derivación y seguimiento.',
        tecnica: 'Mental health first response system',
        mal: 'Cómo ayudo a alguien con problemas emocionales.',
        bien: `Quiero diseñar un sistema de primeros auxilios en salud mental para una ONG que trabaja en zonas rurales de Tucumán sin psicólogos disponibles.

DISEÑO DEL SISTEMA:
- Chat anónimo disponible 24/7 (vía WhatsApp Business API o Telegram)
- Protocolo de primera escucha basado en técnicas validadas (no terapia, sino contención)
- Detección de crisis: si hay palabras de riesgo, deriva inmediatamente a línea de crisis nacional (135)
- Seguimiento: agenda recordatorio para check-in a las 24 y 72 horas
- Derivación: cuando hay disponibilidad de profesional voluntario, el bot coordina el turno

LÍMITES ÉTICOS CLAROS:
- El bot siempre aclara que NO es terapeuta
- No almacena contenido sensible de la conversación
- El profesional supervisor puede ver estadísticas agregadas (no conversaciones)

Dame: arquitectura del sistema, los flujos de conversación clave, el protocolo de crisis, y consideraciones éticas para implementarlo de forma responsable.`,
        por_que: 'Los límites éticos integrados en el diseño (no almacenar contenido sensible, siempre aclarar que no es terapeuta) son lo que hace a este sistema seguro. La tecnología al servicio del cuidado, con sus límites claros.'
      },
      {
        id: 'M3L16', num: 16, titulo: 'Pipeline de datos para investigación climática',
        gratis: false, tiempo: '14 min',
        concepto: 'Sistema automatizado que recopila, procesa y analiza datos climáticos de fuentes abiertas para investigación local.',
        tecnica: 'Climate data pipeline',
        mal: 'Dame datos del clima.',
        bien: `Quiero un pipeline de datos climáticos para investigar el impacto del cambio climático en los Valles Calchaquíes, Salta.

FUENTES DE DATOS ABIERTAS:
- Open-Meteo API (datos históricos y en tiempo real, 100% gratis)
- NASA POWER (datos de radiación solar y precipitaciones históricas)
- CONAE datos abiertos (imágenes satelitales)

PIPELINE:
1. Descarga automática semanal de: temperatura, precipitaciones, radiación UV, velocidad del viento
2. Comparación con datos históricos de los últimos 30 años
3. Detección de anomalías: si algún parámetro está >2 desviaciones estándar del promedio histórico
4. Generación de reporte mensual automático con análisis de tendencias
5. Visualización: gráficos de tendencia en página web pública

Dame: código Python completo del pipeline, visualizaciones con matplotlib/plotly, y deploy automatizado con GitHub Actions (gratis).`,
        por_que: 'Datos climáticos locales + análisis de anomalías = evidencia objetiva para comunidades que viven el cambio climático pero no tienen datos propios para demostrarlo.'
      },
      {
        id: 'M3L17', num: 17, titulo: 'Traductor de documentos oficiales',
        gratis: false, tiempo: '11 min',
        concepto: 'Sistema que traduce documentos oficiales al lenguaje cotidiano, eliminando la barrera entre la burocracia y las personas.',
        tecnica: 'Plain language translation',
        mal: 'Traducime este documento.',
        bien: `Quiero un servicio web que traduzca documentos oficiales al lenguaje cotidiano.

CASOS DE USO:
- Resoluciones municipales
- Contratos de alquiler
- Documentos de ANSES/AFIP
- Reglamentos de consorcios

SISTEMA:
1. Upload de PDF o pegado de texto
2. Claude analiza y genera: resumen en lenguaje simple, los puntos que ME afectan directamente, las fechas y acciones que debo tomar, las palabras clave con su significado real
3. Versión para imprimir (una página)
4. Opción de hacer preguntas sobre el documento

IMPORTANTE: siempre aclarar que la traducción es orientativa y no reemplaza asesoramiento legal.

Dame: app web completa con FastAPI + HTML simple + integración Claude API + deploy en Render.com (gratuito).`,
        por_que: 'La burocracia excluye a quienes no tienen vocabulario técnico. Este sistema democratiza el acceso a información que ya es pública pero está escrita para alejar, no para incluir.'
      },
      {
        id: 'M3L18', num: 18, titulo: 'Sistema de inventario para pymes con IA',
        gratis: false, tiempo: '13 min',
        concepto: 'Gestión de inventario con predicción de demanda usando IA. Para pequeños comercios que no pueden pagar software empresarial.',
        tecnica: 'AI inventory management',
        mal: 'Cómo controlo mi inventario.',
        bien: `Quiero un sistema de inventario para mi almacén familiar (200 productos, facturación manual).

SISTEMA:
1. Carga de ventas diarias vía formulario web simple (funciona en celular)
2. Stock actualizado automáticamente
3. Alertas de reposición: cuando un producto baja del mínimo configurado
4. Predicción de demanda: "este producto se termina en X días a este ritmo de ventas"
5. Sugerencia de pedido: "basado en los últimos 3 meses, cuánto pedir de cada producto"
6. Reporte semanal automático: qué vendí, qué me faltó, cuánto gané

ANÁLISIS CON CLAUDE:
- Detecta patrones estacionales ("los miércoles se vende más fideos")
- Alerta si hay caída inusual en ventas de un producto
- Sugiere qué productos discontinuar basándose en rotación

STACK: Python/Flask + SQLite + Claude API + Google Sheets como backup + Railway.app gratuito`,
        por_que: 'La predicción de demanda + detección de patrones estacionales es lo que diferencia a un almacén que trabaja con intuición de uno que trabaja con datos. Accesible para cualquier comercio pequeño.'
      },
      {
        id: 'M3L19', num: 19, titulo: 'Archivo digital de memoria comunitaria',
        gratis: false, tiempo: '12 min',
        concepto: 'Sistema para preservar y hacer accesible la historia oral, fotografías y documentos de comunidades que no tienen archivo físico.',
        tecnica: 'Community memory archive',
        mal: 'Cómo guardo la historia de mi comunidad.',
        bien: `Quiero crear un archivo digital de la historia de mi pueblo (San Carlos, Salta, 3000 habitantes).

CONTENIDO A PRESERVAR:
- Audios de testimonios de ancianos (hasta 30 min cada uno)
- Fotografías históricas de familias
- Documentos escaneados (actas, cartas, periódicos)
- Videos cortos

SISTEMA:
1. Formulario de carga simple (cualquier persona puede contribuir desde el celular)
2. Transcripción automática de audios con Whisper (gratis, local)
3. Claude genera: resumen del testimonio, etiquetas temáticas, personas y lugares mencionados
4. Búsqueda: "mostrame todo lo relacionado con la inundación de 1987"
5. Timeline visual de la historia del pueblo
6. Acceso público con mapa interactivo

PRESERVACIÓN: backup automático a Internet Archive (gratis y permanente)

Dame la arquitectura completa, código de las partes principales, y cómo garantizar que el archivo esté disponible para siempre sin depender de ninguna empresa.`,
        por_que: 'Internet Archive garantiza permanencia gratuita. La transcripción automática hace búsquable lo que antes era inaccesible. Una comunidad que preserva su historia no puede ser borrada.'
      },
      {
        id: 'M3L20', num: 20, titulo: 'Red de sensores para agricultura familiar',
        gratis: false, tiempo: '15 min',
        concepto: 'Sistema de monitoreo de cultivos con sensores de bajo costo, análisis con IA y recomendaciones específicas para pequeños productores.',
        tecnica: 'Precision agriculture IoT',
        mal: 'Cómo mejoro mi cosecha.',
        bien: `Soy pequeño productor de tomates en Mendoza. Quiero monitorear mis 2 hectáreas con tecnología de bajo costo.

SENSORES ($50 USD TOTAL POR HECTÁREA):
- Humedad del suelo (capacitivo, $3 c/u, pongo 4 por hectárea)
- Temperatura ambiente y del suelo (DS18B20, $3 c/u)
- Humedad relativa del aire (DHT22, $4 c/u)
- Pluviometría (casero con sensor de lluvia, $5)
- Arduino Mega como nodo central ($20)

ANÁLISIS CON CLAUDE:
- Recomendación de riego: "regar zona norte mañana temprano, humedad en 45%"
- Alerta de helada: cuando temperatura baja de 4°C durante la noche
- Detección de estrés hídrico por patrones de temperatura/humedad
- Comparación con datos meteorológicos regionales (Open-Meteo)
- Reporte semanal: rendimiento proyectado vs histórico

Dame: código Arduino para los nodos, código Python para análisis, integración Claude API, y visualización en tablet/celular sin internet (solo red local).`,
        por_que: '$50 por hectárea para monitoreo de precisión. El pequeño productor accede a la misma inteligencia que una empresa agrícola industrial, sin los costos de licencias.'
      },
      {
        id: 'M3L21', num: 21, titulo: 'Generador de contratos legales simples',
        gratis: false, tiempo: '11 min',
        concepto: 'Sistema que genera contratos básicos adaptados a la legislación argentina para situaciones comunes: alquiler, servicios, préstamos entre particulares.',
        tecnica: 'Legal document generation',
        mal: 'Escribime un contrato.',
        bien: `Quiero un generador de contratos simples adaptados a legislación argentina.

TIPOS DE CONTRATO:
1. Locación de servicios (freelance / contratista)
2. Comodato de bienes (préstamo gratuito)
3. Mutuo (préstamo de dinero entre particulares)
4. Contrato de trabajo informal (con los derechos reales del trabajador)

SISTEMA WEB:
- Formulario con los datos de cada parte
- Selección del tipo de contrato
- Preguntas específicas según el tipo
- Claude genera el contrato con base legal (Código Civil y Comercial argentino)
- Descarga en PDF y Word
- Siempre incluye: "Este contrato es orientativo. Para situaciones complejas, consulte un abogado."

IMPORTANTE: incluir cláusulas de protección para la parte más vulnerable en cada tipo de contrato.

Dame: app completa en Python/Flask + integración Claude API + generación PDF/DOCX + deploy gratuito.`,
        por_que: 'Las cláusulas de protección para la parte más vulnerable (el trabajador, el inquilino) no son un agregado: son el corazón del diseño. Tecnología legal con perspectiva de justicia.'
      },
      {
        id: 'M3L22', num: 22, titulo: 'Sistema de tutoría con IA para secundaria',
        gratis: false, tiempo: '13 min',
        concepto: 'Tutor adaptativo que detecta los errores conceptuales de cada estudiante y genera ejercicios personalizados para superar esas dificultades específicas.',
        tecnica: 'Adaptive learning system',
        mal: 'Haceme ejercicios de matemáticas.',
        bien: `Quiero un sistema de tutoría para estudiantes de secundaria de zonas sin acceso a clases particulares.

MATERIAS INICIALES: matemáticas (álgebra y geometría), física básica

SISTEMA ADAPTATIVO:
1. Diagnóstico inicial: 10 preguntas para detectar nivel y puntos débiles específicos
2. Plan personalizado: basado en el diagnóstico, define la secuencia de temas
3. Ejercicios: genera ejercicios del nivel exacto que necesita (ni muy fáciles ni imposibles)
4. Análisis de error: cuando el alumno falla, Claude analiza QUÉ error conceptual cometió
5. Explicación específica del error (no la resolución completa, sino el concepto que falla)
6. Seguimiento: mide progreso real vs tiempo de práctica

IMPORTANTE:
- Funciona en celulares con internet lento (HTML liviano, sin imágenes pesadas)
- Sin registro obligatorio para empezar
- Los ejercicios usan ejemplos de contextos reales (campo, ciudad, trabajo)

Dame el sistema completo con backend Python, integración Claude, y deploy optimizado para conexiones lentas.`,
        por_que: 'Analizar QUÉ error conceptual cometió (no solo si la respuesta es incorrecta) es lo que diferencia a un buen tutor de un corregidor. La IA hace eso escala sin límite.'
      },
      {
        id: 'M3L23', num: 23, titulo: 'Monitoreo de calidad del aire con sensores',
        gratis: false, tiempo: '14 min',
        concepto: 'Red de sensores de bajo costo para monitorear calidad del aire en zonas industriales o de alta contaminación. Datos públicos y accesibles.',
        tecnica: 'Air quality monitoring network',
        mal: 'Cómo sé si el aire de mi barrio es sano.',
        bien: `Quiero desplegar una red de monitoreo de calidad del aire en Villa Constitución, Santa Fe (zona industrial con petroquímicas).

SENSORES POR NODO ($35 USD):
- MQ-135 (gases en general, CO2, NH3)
- MQ-7 (monóxido de carbono)
- PMS5003 (partículas PM2.5 y PM10)
- DHT22 (temperatura y humedad)
- ESP8266 WiFi para transmisión

ARQUITECTURA:
- 10 nodos distribuidos en el barrio (casas de vecinos)
- Servidor central en Raspberry Pi
- Todos los datos son públicos en tiempo real
- Alerta cuando algún parámetro supera límites de la OMS
- Histórico descargable en CSV (para que las familias tengan evidencia)
- Integración con datos de viento para trazar dispersión de contaminantes

IMPACTO LEGAL: el sistema está diseñado para generar evidencia objetiva que pueda usarse en reclamos ambientales.

Dame: código completo Arduino y Python, mapa en tiempo real con Leaflet.js, y guía para que vecinos instalen los nodos sin conocimiento técnico.`,
        por_que: '"Diseñado para generar evidencia objetiva para reclamos ambientales" define el propósito político del sistema. Los datos no son neutrales: aquí son un instrumento de justicia ambiental.'
      },
      {
        id: 'M3L24', num: 24, titulo: 'Asistente de escritura para no escritores',
        gratis: false, tiempo: '10 min',
        concepto: 'Sistema que ayuda a personas que nunca escribieron a producir textos complejos: informes, propuestas, cartas formales, sin perder su voz.',
        tecnica: 'Voice-preserving writing assistance',
        mal: 'Escribime un informe.',
        bien: `Quiero un asistente que ayude a personas sin habilidad de escritura a producir textos formales, SIN reemplazar su voz.

EL PROBLEMA: los generadores de texto producen textos genéricos que no suenan a la persona. Quiero lo opuesto.

SISTEMA EN 3 PASOS:
PASO 1 — ENTREVISTA: El sistema hace preguntas específicas en lenguaje coloquial ("¿Qué pasó? ¿Quién estaba? ¿Qué querés conseguir con esto?")
PASO 2 — BORRADOR: Claude genera un primer borrador manteniendo las palabras y expresiones que usó la persona en la entrevista
PASO 3 — REVISIÓN: Le muestra el borrador y pregunta "¿Esto suena como vos? ¿Qué cambiarías?" — ajusta hasta que la persona reconozca su voz

CASOS DE USO:
- Denuncia policial
- Nota al colegio de los hijos
- Carta a la obra social
- Reclamo al banco

Dame: el flujo completo de conversación para cada caso, la integración con Claude API, y cómo desplegar como bot de Telegram.`,
        por_que: 'Preservar la voz de quien no sabe escribir es el desafío real. El paso 3 (¿esto suena como vos?) es el que la mayoría de los asistentes de escritura nunca hacen.'
      },
      {
        id: 'M3L25', num: 25, titulo: 'Red de vigilancia forestal ciudadana',
        gratis: false, tiempo: '15 min',
        concepto: 'Plataforma donde ciudadanos reportan alertas de deforestación o incendios en tiempo real, con verificación automática y derivación a autoridades.',
        tecnica: 'Citizen science environmental monitoring',
        mal: 'Cómo reporto un incendio.',
        bien: `Quiero crear una red ciudadana de vigilancia forestal para la provincia de Misiones.

SISTEMA DE REPORTE CIUDADANO:
1. App web PWA (sin descarga): cualquier persona reporta foto + ubicación + descripción
2. Verificación automática: Claude analiza la foto y confirma si parece humo/fuego/deforestación
3. Triangulación: si 3+ reportes en el mismo área en 30 minutos → alerta confirmada
4. Derivación automática: email + WhatsApp al guardabosques de la zona + bomberos locales + Ministerio de Ecología
5. Dashboard público: mapa en tiempo real con reportes verificados
6. Historial: zona de Misiones con más reportes históricos, patrones temporales

INCENTIVOS CIUDADANOS:
- Contador público de reportes de cada usuario (gamificación mínima)
- "Reporte verificado" badge cuando la alerta fue confirmada

Dame: sistema completo, modelo de análisis de imágenes con Claude Vision, sistema de alertas, y cómo escalar sin costo cuando hay más usuarios.`,
        por_que: 'La triangulación de 3 reportes antes de enviar la alerta reduce los falsos positivos. El sistema combina ciudadanos como sensores con IA como verificador. Vigilancia distribuida e inteligente.'
      },
      {
        id: 'M3L26', num: 26, titulo: 'Compilador de jurisprudencia local',
        gratis: false, tiempo: '12 min',
        concepto: 'Sistema que recopila, organiza y hace buscable la jurisprudencia de juzgados provinciales que no tienen digitalización oficial.',
        tecnica: 'Legal knowledge base',
        mal: 'Cómo busco jurisprudencia.',
        bien: `Quiero crear una base de jurisprudencia local para abogados y estudiantes de Jujuy, Argentina.

PROBLEMA: Las sentencias del Superior Tribunal de Justicia de Jujuy existen en PDF en el sitio web pero no son buscables ni están organizadas por tema.

SISTEMA:
1. Spider que descarga todos los PDFs disponibles públicamente
2. OCR para los escaneados (muchos son fotos de papel)
3. Claude extrae: partes, hechos, cuestión jurídica, holding, fecha, tribunal, magistrados
4. Indexación semántica: búsqueda por "locación de servicios + incumplimiento" devuelve los casos relevantes aunque no usen esas palabras exactas
5. Actualización automática semanal
6. Acceso público gratuito + API para que otros sistemas consulten

IMPORTANTE: respeta la naturaleza pública de los documentos judiciales.

Dame: pipeline completo de scraping + OCR + extracción con Claude + búsqueda semántica (usando embeddings) + deploy.`,
        por_que: 'La búsqueda semántica (no solo por palabras exactas) es lo que hace útil a este sistema para abogados reales. Acceso a justicia mediante acceso a información.'
      },
      {
        id: 'M3L27', num: 27, titulo: 'Sistema de microcréditos con análisis crediticio alternativo',
        gratis: false, tiempo: '13 min',
        concepto: 'Plataforma para organizaciones de microfinanzas que analiza solicitudes de crédito usando datos alternativos (no historial bancario).',
        tecnica: 'Alternative credit scoring',
        mal: 'Cómo analizo si alguien puede pagar un préstamo.',
        bien: `Quiero un sistema de análisis crediticio para nuestra organización de microfinanzas que trabaja con personas sin acceso bancario en Formosa.

EL PROBLEMA: nuestros solicitantes no tienen historial bancario. El análisis tradicional los excluye automáticamente.

VARIABLES ALTERNATIVAS QUE TENEMOS:
- Historial de pagos de servicios (luz, agua, gas)
- Tiempo en el mismo domicilio
- Red social (si otras personas del grupo también participan)
- Tipo y estabilidad del ingreso (aunque sea informal)
- Historial de pagos dentro de nuestra organización

SISTEMA:
1. Formulario de solicitud (completable en papel o celular)
2. Claude analiza la solicitud y asigna un score con explicación
3. Banderas automáticas para revisión humana (el crédito nunca lo decide solo la IA)
4. El analista humano ve el score + la justificación y toma la decisión final
5. Seguimiento: alertas cuando un crédito activo muestra señales de dificultad de pago

IMPORTANTE: el sistema ayuda al analista humano, no lo reemplaza. Y es transparente: el solicitante puede ver por qué se aprobó o rechazó.

Dame la arquitectura, el prompt de análisis para Claude, el sistema de flags, y cómo evitar sesgos discriminatorios en el modelo.`,
        por_que: 'La IA como asistente del analista humano (no como reemplazante) y la transparencia hacia el solicitante son los principios éticos que hacen a este sistema responsable. Inclusión financiera con integridad.'
      },
      {
        id: 'M3L28', num: 28, titulo: 'Podcast generado por IA sobre tu comunidad',
        gratis: false, tiempo: '11 min',
        concepto: 'Sistema automatizado que genera un podcast semanal de noticias locales usando fuentes públicas y síntesis de voz.',
        tecnica: 'AI media production',
        mal: 'Cómo hago un podcast.',
        bien: `Quiero crear un podcast semanal automático sobre noticias de mi municipio (Gualeguaychú, Entre Ríos).

PIPELINE DE PRODUCCIÓN:
1. Recopila noticias de: sitio web del municipio, diario local (El Día), redes del intendente
2. Claude selecciona las 5 más relevantes para vecinos y genera el guión del episodio
3. Síntesis de voz con Coqui TTS (open source, en español, gratis) o Edge TTS (Microsoft, gratis)
4. Intro y outro musical (usando música libre de derechos)
5. Mezcla automática del audio
6. Publicación automática en: Spotify (via RSS), Apple Podcasts, y como descarga directa

EL GUIÓN TIENE ESTA ESTRUCTURA:
- Intro (30 seg): qué hay en el episodio
- 5 noticias (2-3 min cada una): dato + contexto + qué significa para vecinos
- Cierre (30 seg): recordatorio de trámites o fechas importantes de la semana

Dame el pipeline completo, el prompt para Claude que genera el guión, y cómo configurar el RSS para Spotify.`,
        por_que: 'El paso de "qué significa para vecinos" en cada noticia es lo que diferencia información de periodismo. El sistema convierte datos municipales en contenido que las personas pueden usar.'
      },
      {
        id: 'M3L29', num: 29, titulo: 'Clasificador de residuos con visión',
        gratis: false, tiempo: '13 min',
        concepto: 'Kiosco de clasificación de residuos con cámara que analiza qué tirás y te dice en qué contenedor va. Para municipios con reciclaje.',
        tecnica: 'Computer vision waste classification',
        mal: 'Cómo separo la basura.',
        bien: `Quiero un sistema de clasificación de residuos para instalar en puntos verdes municipales.

HARDWARE ($80 USD por kiosco):
- Raspberry Pi 4 ($45)
- Cámara Pi Camera ($15)
- Pantalla táctil 7" ($15)
- Caja impresa en 3D ($5)

SISTEMA:
1. El usuario muestra el residuo a la cámara
2. Claude Vision analiza la imagen y clasifica en: plástico / papel / vidrio / metal / orgánico / electrónico / peligroso
3. La pantalla muestra: qué es, en qué contenedor va (con color del contenedor de ESE municipio), y por qué es importante separarlo
4. Si no está seguro: pide al usuario que rote el objeto o lo describa con texto
5. Estadísticas del kiosco: qué residuos se clasifican más, en qué momento del día, para el municipio

GAMIFICACIÓN: contador de "residuos bien clasificados hoy" en la pantalla

Dame: código Python completo para Raspberry Pi, integración Claude Vision API, UI en tkinter o HTML para la pantalla táctil, y cómo configurarlo para distintos municipios con diferentes contenedores.`,
        por_que: 'La variabilidad por municipio (distintos colores y normas de contenedores) es lo que hace a este sistema realmente desplegable. Un sistema que funciona en Tandil también funciona en San Luis con un cambio de configuración.'
      },
      {
        id: 'M3L30', num: 30, titulo: 'Plataforma de microvoluntariado',
        gratis: false, tiempo: '12 min',
        concepto: 'Conecta personas que tienen 1 hora libre con organizaciones que necesitan ayuda específica ahora. Matching inteligente por habilidades y ubicación.',
        tecnica: 'Intelligent community matching',
        mal: 'Cómo consigo voluntarios para mi organización.',
        bien: `Quiero una plataforma que conecte voluntarios con ONGs en tiempo real en Córdoba capital.

EL PROBLEMA: Las ONGs tienen necesidades urgentes ("necesito alguien que maneje hoy a las 3pm") y hay personas con tiempo libre que no saben cómo ayudar.

SISTEMA:
1. ONGs publican micro-tareas: descripción, habilidades requeridas, cuándo, duración, ubicación
2. Voluntarios completan perfil: habilidades, disponibilidad habitual, zona
3. Claude hace el matching: analiza qué voluntarios encajan con cada tarea y por qué
4. Notificación al voluntario: "Hay una tarea que encaja con vos a 2km, ¿podés hoy a las 3?"
5. Confirmación con 1 toque
6. Sistema de feedback bidireccional post-tarea

MATCHING INTELIGENTE CONSIDERA:
- Habilidades (no solo coincidencia exacta, sino relevancia)
- Distancia real (no punto a punto)
- Historial de confirmación/cancelación del voluntario
- Urgencia de la tarea

Dame: backend Python/FastAPI, app web PWA, algoritmo de matching con Claude, sistema de notificaciones push (gratis con web push), y deploy escalable.`,
        por_que: 'El matching por relevancia (no coincidencia exacta) es lo que hace al sistema inteligente. "Tengo habilidades de diseño gráfico" es relevante para "necesito alguien que haga carteles para una marcha hoy".'
      },
      {
        id: 'M3L31', num: 31, titulo: 'Verificador de noticias para WhatsApp',
        gratis: false, tiempo: '13 min',
        concepto: 'Bot de WhatsApp donde enviás un texto o imagen y recibís el análisis de veracidad con fuentes verificables. Para combatir desinformación en grupos familiares.',
        tecnica: 'Fact-checking bot',
        mal: '¿Esto es verdad?',
        bien: `Quiero un bot de WhatsApp para verificación de noticias, especialmente para comunidades donde la desinformación circula por grupos familiares.

FUNCIONES:
1. Recibe texto: analiza las afirmaciones principales y busca fuentes que confirmen o refuten
2. Recibe imagen con texto: OCR + mismo análisis
3. Recibe URL: analiza el artículo y evalúa confiabilidad de la fuente
4. Responde en lenguaje simple con: veredicto (verdadero/falso/parcialmente cierto/no verificable), las fuentes que encontró, qué parte es correcta y qué parte no

DISEÑO ÉTICO:
- Siempre muestra las fuentes, nunca solo el veredicto
- Si no puede verificar con certeza, lo dice claramente
- No procesa imágenes de personas individuales (privacidad)
- No guarda el contenido de las consultas

TÉCNICO: WhatsApp Business API (gratuita hasta 1000 conversaciones/mes) + Claude API + búsqueda web

Dame: integración completa WhatsApp + Claude, el prompt de análisis de veracidad, y cómo manejar los casos de "no verificable" sin generar falsa confianza.`,
        por_que: '"No verificable" es el veredicto más honesto y más subutilizado. La mayoría de los checkers dicen verdadero/falso. Admitir la incertidumbre es lo que hace confiable a un sistema de verificación.'
      },
      {
        id: 'M3L32', num: 32, titulo: 'Asistente legal de migrantes',
        gratis: false, tiempo: '14 min',
        concepto: 'Sistema que orienta a migrantes sobre sus derechos y el proceso de regularización en Argentina, en múltiples idiomas.',
        tecnica: 'Multilingual legal assistance',
        mal: 'Cómo ayudo a migrantes con sus trámites.',
        bien: `Quiero un asistente para migrantes que llegaron recientemente a Argentina (principalmente Venezuela, Bolivia, Paraguay, Haití).

EL PROBLEMA: no saben sus derechos, el proceso migratorio es complejo, y los consultorios jurídicos están saturados.

SISTEMA EN MÚLTIPLES IDIOMAS (español, portugués, francés criollo haitiano):
1. Diagnóstico de situación: hace preguntas simples sobre la situación migratoria actual
2. Informa derechos: qué puede hacer AHORA aunque no tenga documento (acceso a salud, educación de hijos)
3. Guía de trámite: paso a paso según su situación específica, con los formularios que necesita
4. Alertas de plazos: si hay fechas límite en su proceso
5. Mapa de recursos: organizaciones en su ciudad que pueden ayudarlo presencialmente

LÍMITES CLAROS:
- No da asesoramiento legal (deriva a organizaciones especializadas)
- Siempre menciona la Dirección Nacional de Migraciones como fuente oficial
- Aclara si la información puede haber cambiado

Dame: bot de Telegram multilenguaje, flujos de conversación para los casos más comunes, integración Claude API con system prompt ético, y cómo actualizar la información cuando cambian los procedimientos.`,
        por_que: 'El derecho a saber tus derechos antes de tener documento es el núcleo. El sistema informa sobre acceso a salud y educación para hijos aunque la situación migratoria esté en proceso. Derechos primero, trámites después.'
      },
      {
        id: 'M3L33', num: 33, titulo: 'Generador de propuestas de financiamiento',
        gratis: false, tiempo: '12 min',
        concepto: 'Sistema que ayuda a organizaciones sociales sin capacidad técnica a escribir propuestas para fondos y convocatorias.',
        tecnica: 'Grant writing assistance',
        mal: 'Ayudame a escribir una propuesta.',
        bien: `Quiero un sistema que ayude a pequeñas organizaciones sociales a escribir propuestas de financiamiento para convocatorias nacionales e internacionales.

EL PROBLEMA: las convocatorias tienen formatos rígidos y vocabulario técnico que excluye a organizaciones con impacto real pero sin capacidad de escritura de proyectos.

SISTEMA EN 2 FASES:

FASE 1 — ENTREVISTA (la organización responde en su lenguaje):
- ¿Qué problema resuelven? ¿A quiénes afecta?
- ¿Qué hacen concretamente? ¿Cuántas personas atendieron?
- ¿Por qué son los más indicados para hacerlo?
- ¿Qué necesitan el dinero para hacer?

FASE 2 — ADAPTACIÓN A LA CONVOCATORIA:
- La organización pega los requisitos de la convocatoria
- Claude adapta las respuestas de la Fase 1 al formato exacto requerido
- Genera: resumen ejecutivo, objetivos SMART, presupuesto básico, indicadores de impacto
- Versiones en español e inglés

IMPORTANTE: preservar la voz de la organización, no producir texto corporativo.

Dame el sistema completo con la lógica de entrevista, el módulo de adaptación a convocatorias, y cómo organizaciones sin internet estable pueden usarlo (versión de bajo ancho de banda).`,
        por_que: 'La Fase 1 en lenguaje propio + Fase 2 adaptada al formato es lo que permite que una abuela que cuida a nietos de migrantes compita en una convocatoria internacional. Las barreras de forma no deben ser barreras de acceso.'
      },
      {
        id: 'M3L34', num: 34, titulo: 'Mapa de vulnerabilidad social en tiempo real',
        gratis: false, tiempo: '15 min',
        concepto: 'Sistema que integra datos abiertos de múltiples fuentes para generar un mapa actualizado de vulnerabilidad social para toma de decisiones de organizaciones comunitarias.',
        tecnica: 'Social vulnerability mapping',
        mal: 'Dónde hay más necesidad en mi ciudad.',
        bien: `Quiero un mapa de vulnerabilidad social para orientar las intervenciones de nuestra organización en Gran Rosario.

FUENTES DE DATOS ABIERTOS:
- INDEC (censo 2022, NBI, hacinamiento)
- Ministerio de Desarrollo Social (comedores, merenderos)
- OpenStreetMap (infraestructura, hospitales, escuelas)
- Datos de cortes de luz por zona (distribuidoras eléctricas, datos abiertos)
- Reportes ciudadanos de nuestra app (acumulados)

ÍNDICE DE VULNERABILIDAD (que Claude calcula por radio censal):
- NBI + hacinamiento (censo)
- Distancia a servicios de salud y educación
- Frecuencia de cortes de servicios
- Densidad de comedores comunitarios activos

MAPA INTERACTIVO:
- Capas activables/desactivables por variable
- Zoom a nivel de manzana
- Click en zona: resumen de indicadores + organizaciones activas + necesidades reportadas
- Exportable en PDF para presentaciones

Dame: pipeline de datos con actualización automática, algoritmo de índice de vulnerabilidad, mapa con Leaflet.js, y cómo la organización puede alimentar datos propios sin programar.`,
        por_que: 'La combinación de datos censales + infraestructura + reportes ciudadanos produce inteligencia territorial que ninguna fuente sola puede dar. Intervención basada en evidencia, no en intuición.'
      },
      {
        id: 'M3L35', num: 35, titulo: 'Red de bibliotecas digitales offline',
        gratis: false, tiempo: '14 min',
        concepto: 'Sistema que replica una biblioteca digital en zonas sin internet, usando memorias USB y sincronización periódica.',
        tecnica: 'Offline digital library network',
        mal: 'Cómo doy acceso a libros sin internet.',
        bien: `Quiero crear una red de bibliotecas digitales para escuelas rurales sin internet en Santiago del Estero.

MODELO: biblioteca en USB que se actualiza cuando hay conexión (ciudad, oficina municipal, etc.)

SISTEMA:
1. Servidor central (en la ciudad con internet): repositorio de libros digitales (libros libres de derechos o CC)
2. Script de sincronización: cuando conectas la USB al servidor, descarga las novedades automáticamente
3. La USB contiene: servidor web local (Python simple) que arranca automáticamente al conectar al sistema escolar
4. Desde cualquier PC/celular de la escuela: acceden a la biblioteca vía WiFi local sin internet
5. Catálogo inteligente con Claude (offline con modelo pequeño): búsqueda por tema, edad, idioma, materia
6. Sistema de préstamo: registro de qué libros se leen más para priorizar descargas en la próxima sincronización

CATÁLOGO INICIAL:
- Biblioteca del Congreso (dominio público)
- Wikilibros en español
- OpenLibrary Internet Archive

Dame: sistema completo, script de sincronización, servidor web liviano para la USB, catálogo con búsqueda, y cómo escalar a 50 escuelas.`,
        por_que: 'La USB como servidor es la solución de infraestructura más elegante para zonas sin conectividad. No necesitás internet permanente: necesitás acceso periódico para sincronizar. El conocimiento viaja en el bolsillo.'
      },
      {
        id: 'M3L36', num: 36, titulo: 'Sistema de alerta temprana de violencia de género',
        gratis: false, tiempo: '15 min',
        concepto: 'Plataforma diseñada con especialistas para detectar escaladas de riesgo y activar la red de contención antes de que ocurra la crisis.',
        tecnica: 'Early warning safety system',
        mal: 'Cómo ayudo a mujeres en situación de riesgo.',
        bien: `Quiero un sistema de alerta temprana de riesgo de violencia de género, diseñado CON especialistas, para organizaciones que acompañan a mujeres en situación de violencia.

DISEÑO ÉTICO PRIMERO (lo define el sistema, no el usuario):
- Nunca pide a la mujer que "evalúe su riesgo" sola
- No almacena datos identificatorios
- El sistema no decide: informa a la red de acompañamiento
- Modo discreto: el ícono de la app parece una calculadora

FUNCIONALIDADES:
1. Check-in de seguridad: la mujer registra su estado diariamente (OK / necesito hablar / emergencia) con 1 toque
2. Si no registra en 48hs: alerta automática a su referente de confianza configurada
3. Indicadores de escalada: la trabajadora social registra señales observadas, el sistema identifica patrones de escalada
4. Red de activación: cuando hay alerta, notifica simultáneamente a todos los miembros de la red de contención
5. Botón de pánico discreto: envía ubicación a 3 contactos y llama al 144

IMPORTANTE: este sistema se construye con el acompañamiento de organizaciones expertas. Dame la arquitectura técnica y los principios de diseño, NO la implementación final (que requiere validación con expertas).`,
        por_que: 'La advertencia final (requiere validación con expertas) es la más importante de todo el sistema. La tecnología para situaciones de violencia de género debe ser co-diseñada, nunca impuesta. Este prompt enseña eso.'
      },
      {
        id: 'M3L37', num: 37, titulo: 'Plataforma de economía circular local',
        gratis: false, tiempo: '12 min',
        concepto: 'Sistema de intercambio de bienes y servicios entre vecinos, con matching inteligente que maximiza los intercambios posibles en la comunidad.',
        tecnica: 'Community circular economy platform',
        mal: 'Cómo organizamos trueque en el barrio.',
        bien: `Quiero una plataforma de economía circular para un barrio de 500 familias en La Matanza.

MÁS QUE TRUEQUE — 3 modalidades:
1. PRÉSTAMO: tenés algo que no usás (taladro, carpa, escalera) y lo prestás por tiempo limitado
2. INTERCAMBIO: das algo, pedís otra cosa de valor similar
3. SERVICIO: ofrecés tiempo/habilidad (pintar, reparar, cuidar niños) y pedís lo mismo

MATCHING INTELIGENTE:
- Claude analiza las ofertas y necesidades y detecta intercambios posibles que las personas no verían
- "Juan tiene taladro disponible, María necesita taladro y ofrece clases de inglés, Carlos necesita clases de inglés y tiene herramientas"
- Cadenas de intercambio de más de 2 personas

GAMIFICACIÓN COMUNITARIA:
- Puntos de reciprocidad (no monetarios)
- "Vecino del mes" por mayor cantidad de intercambios
- Mapa de la red de intercambios del barrio (anónimo)

Dame: sistema web PWA, algoritmo de matching con Claude, sistema de puntos, y cómo escalar de 50 a 500 familias sin perder el sentido comunitario.`,
        por_que: 'Las cadenas de intercambio de 3+ personas son lo que un tablón de anuncios nunca puede detectar. El matching inteligente crea valor que la comunidad no podría crear sola.'
      },
      {
        id: 'M3L38', num: 38, titulo: 'Monitor de presupuesto público participativo',
        gratis: false, tiempo: '13 min',
        concepto: 'Sistema de seguimiento ciudadano de la ejecución del presupuesto municipal con alertas automáticas de desvíos y herramientas de reclamo.',
        tecnica: 'Participatory budget monitoring',
        mal: 'Cómo controlo en qué gasta el municipio.',
        bien: `Quiero un sistema de monitoreo ciudadano del presupuesto municipal de Morón, Buenos Aires.

FUENTES DE DATOS:
- Boletín oficial municipal (PDF, publicado mensualmente)
- Declaraciones juradas de funcionarios (datos abiertos)
- Licitaciones publicadas (sitio web municipal)

SISTEMA:
1. Scraper mensual que descarga y procesa todos los documentos públicos
2. Claude extrae: montos aprobados vs ejecutados por área, licitaciones adjudicadas con beneficiario y monto, variaciones respecto al presupuesto votado
3. Dashboard ciudadano: "de los $X millones aprobados para arreglo de calles, se gastaron $Y (Z%)"
4. Alertas automáticas cuando: una partida se sobreejecutó >20%, una licitación se adjudicó sin concurso, hay rubros sin ejecución con plazo vencido
5. Sistema de reclamo integrado: desde el dashboard, los ciudadanos pueden firmar una nota formal pidiendo explicaciones

Dame: pipeline completo, dashboard, sistema de alertas, y cómo hacer que los datos sean verificables por cualquier ciudadano (no solo en nuestra plataforma).`,
        por_que: 'Los datos deben ser verificables fuera de la plataforma. Esa decisión de diseño es lo que diferencia una herramienta de transparencia de una que crea dependencia. El ciudadano puede llegar a la fuente original.'
      },
      {
        id: 'M3L39', num: 39, titulo: 'Sistema de triage médico rural',
        gratis: false, tiempo: '15 min',
        concepto: 'Asistente de triage para puestos sanitarios rurales con personal no médico, que ayuda a priorizar casos y determinar cuándo derivar urgentemente.',
        tecnica: 'Medical triage assistance',
        mal: 'Ayudame con triaje médico.',
        bien: `Quiero un sistema de apoyo al triage para puestos sanitarios rurales de Chaco donde trabajan agentes sanitarios sin formación médica completa.

DISEÑO CRÍTICO — LÍMITES ABSOLUTOS:
- El sistema APOYA al agente sanitario, nunca reemplaza el criterio médico
- Siempre hay un médico de guardia accesible por radio/teléfono
- Para cualquier duda: el sistema dice "consultá con el médico antes de actuar"
- No diagnostica. Clasifica urgencia y sugiere primeros pasos de contención.

SISTEMA:
1. El agente responde preguntas estructuradas sobre el paciente (signos vitales simples, síntomas principales)
2. El sistema clasifica: verde (puede esperar), amarillo (atención en 2hs), rojo (derivación inmediata)
3. Para cada clasificación: qué hacer MIENTRAS se consigue atención médica
4. Rojo: activa protocolo de derivación automática (llama a ambulancia, alerta al médico de guardia, prepara historia resumida para el traslado)
5. Registro de todos los casos para revisión médica posterior

VALIDACIÓN: este sistema requiere revisión y validación por profesionales médicos antes de usarse. Dame la arquitectura técnica y el diseño del protocolo de triage básico, entendiendo que la implementación real necesita supervisión médica.`,
        por_que: 'El sistema de triage más importante no está en el código: está en los límites que el código se niega a cruzar. Tecnología médica responsable significa saber exactamente qué NO debe hacer.'
      },
      {
        id: 'M3L40', num: 40, titulo: 'El sistema que dejás operativo para siempre',
        gratis: false, tiempo: '20 min',
        concepto: 'Integración final: un sistema completo que combina todo lo aprendido. Monitoreo + alertas + comunidad + datos + IA. Deployado, documentado, y transferible.',
        tecnica: 'Full-stack community infrastructure',
        mal: '[no existe versión mala de esta lección]',
        bien: `PROYECTO FINAL — Sistema Integral de Gestión Comunitaria

Quiero construir el sistema que deje operativo para mi organización, documentado para que cualquier persona pueda mantenerlo cuando yo no esté.

COMPONENTES A INTEGRAR (elegí los que aplican a tu contexto):

MÓDULO 1 — ALERTAS: monitoreo de incendios / sismos / calidad del aire + notificaciones a la comunidad
MÓDULO 2 — COMUNICACIÓN: bot de Telegram + radio de emergencia FM offline
MÓDULO 3 — DATOS: dashboard de indicadores comunitarios + mapas de vulnerabilidad
MÓDULO 4 — SERVICIOS: chatbot de atención + generador de documentos + verificador de noticias
MÓDULO 5 — PARTICIPACIÓN: votaciones + presupuesto participativo + economía circular

DOCUMENTACIÓN REQUERIDA (tan importante como el código):
- README para personas sin conocimiento técnico
- Manual de mantenimiento mensual (qué revisar, qué actualizar)
- Plan de contingencia: qué hacer si el sistema falla
- Guía de transferencia: cómo entregarlo a otra persona
- Costo mensual real de mantenimiento (debe ser < $20 USD/mes)

PRINCIPIO FINAL: un sistema que solo funciona mientras vos lo supervisás, no es infraestructura. Es dependencia.

Dame la arquitectura completa del sistema integrado para MI contexto específico: [describí tu comunidad, problema principal y recursos disponibles].`,
        por_que: 'La documentación para cuando vos no estés es tan importante como el código. Un sistema que solo funciona mientras vos lo cuidás no empodera a la comunidad: la hace dependiente de vos. Infraestructura real es la que sobrevive a sus creadores.'
      }
    ]
  }
};

// Export
if (typeof module !== 'undefined') module.exports = ACADEMY_DATA;
