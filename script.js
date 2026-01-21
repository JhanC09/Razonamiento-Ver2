// ===== TODAS LAS PREGUNTAS (ejemplo 5 por tema, expandir a 50) =====

const temas = [
    {
        nombre: "TEMA 1: Deforestación y Cambio Climático",
        preguntas: [
            {pregunta: "Según el artículo, ¿cuál fue la reducción porcentual de la superficie forestal entre 1900 y 1960 y cómo se compara con la pérdida de cobertura forestal entre 1990 y 2020?",
            opciones: {a: "15% entre 1900-1960 y 20% entre 1990-2020", b: "20% entre 1900-1960 y 15% entre 1990-2020", c: "10% entre 1900-1960 y 5% entre 1990-2020", d: "25% entre 1900-1960 y 10% entre 1990-2020"},
            correcta: "b",
            tiempo: 60
            },
            {pregunta: "¿Cuáles son los problemas identificados por el artículo como consecuencias de la deforestación en los Andes bolivianos?",
            opciones: {a: "Disminución de temperatura y mayor biodiversidad", b: "Incremento de lluvias y fertilidad del suelo", c: "Afecta disponibilidad de agua y requiere integración comunitaria", d: "Aumento de temperatura, sequías, menor retención de agua y más CO2"},
            correcta: "d",
            tiempo: 60
            },
            {pregunta: "En la cadena de procesos que relaciona la deforestación con el aumento de la temperatura, ¿cuál es el primer factor técnico mencionado?",
            opciones: {a: "Reducción del albedo", b: "Incremento del calor latente", c: "Aumento de la humedad del suelo", d: "Disminución de CO2"},
            correcta: "a",
            tiempo: 60
            },
            {pregunta: "Entre 1990 y 2020, ¿cuál fue la pérdida de cobertura forestal y el aumento de temperatura media en los Andes bolivianos?",
            opciones: {a: "10% y 0,3 °C", b: "20% y 1 °C", c: "15% de cobertura forestal y 0,6 °C de aumento", d: "5% y 0,1 °C"},
            correcta: "c",
            tiempo: 60
            },
            {pregunta: "¿Qué proceso técnico se ve incrementado directamente por la reducción del calor latente tras la pérdida de bosques?",
            opciones: {a: "Disminución de CO2", b: "Reducción del albedo", c: "Incremento del calor sensible (H)", d: "Incremento de evapotranspiración"},
            correcta: "c",
            tiempo: 60
            },
            {pregunta: "¿Qué conjunto de actores participa tanto en la causa histórica de la deforestación como en las respuestas actuales?",
            opciones: {a: "Pueblos originarios, gobierno y ONG", b: "Solo empresas privadas", c: "Gobierno y militares únicamente", d: "Solo colonizadores españoles"},
            correcta: "a",
            tiempo: 60
            },
            {pregunta: "¿Cómo se compara el impacto de la expansión agropecuaria durante la colonización española con la del siglo XX sobre la temperatura local?",
            opciones: {a: "Mayor incremento térmico en el siglo XX", b: "Mayor impacto en la colonización española", c: "Igual impacto en ambos periodos", d: "No hay impacto térmico en ninguno"},
            correcta: "a",
            tiempo: 60
            },
            {pregunta: "¿Cuál es la diferencia clave entre la deforestación y los sistemas agroforestales tradicionales en términos de retroalimentación climática?",
            opciones: {a: "Deforestación reduce LE y genera sombra", b: "Agroforestales mantienen LE alto y mitigan temperatura", c: "Agroforestales elevan el calor sensible (H)", d: "Deforestación aumenta transpiración vegetal"},
            correcta: "b",
            tiempo: 60
            },
            {pregunta: "¿Qué principio general se puede extraer sobre las consecuencias sociales de la deforestación?",
            opciones: {a: "Incrementa empleo y seguridad alimentaria", b: "Afecta disponibilidad de agua y requiere integración comunitaria", c: "Reduce vulnerabilidad de comunidades", d: "No tiene efectos sociales"},
            correcta: "b",
            tiempo: 60
            },
            {pregunta: "¿Qué efecto indirecto es probable del programa Biodiversidad Andina sobre los sistemas agropecuarios?",
            opciones: {a: "Disminuye la retención de agua", b: "Aumenta degradación del suelo", c: "Reduce vulnerabilidad frente a sequías", d: "Incrementa la deforestación"},
            correcta: "c",
            tiempo: 60
            },
            {pregunta: "Si la expansión agrícola y la pérdida de bosques continúa sin cambios, ¿qué se espera para la próxima década?",
            opciones: {a: "Aumento de temperatura, sequías e incendios", b: "Reducción de temperatura y mayor lluvia", c: "Mejora de fertilidad del suelo", d: "Incremento de bosques y fauna"},
            correcta: "a",
            tiempo: 60
            },
            {pregunta: "¿Cómo difieren los efectos de la disminución del flujo latente (LE) y del aumento del albedo sobre el balance energético local?",
            opciones: {a: "Reducción de LE aumenta temperatura, albedo reduce radiación neta", b: "Disminución de LE enfría, albedo calienta", c: "Ambos reducen la temperatura", d: "Ambos aumentan el calor sensible"},
            correcta: "a",
            tiempo: 60
            },
            {pregunta: "¿Cuál es la diferencia más significativa entre la deforestación en la colonización española y en la expansión agrícola del siglo XXI?",
            opciones: {a: "Siglo XXI eleva H y temperatura, colonización afecta suelo", b: "Colonización aumenta LE y temperatura, siglo XXI no", c: "Ambos generan igual aumento térmico", d: "No hay diferencia significativa"},
            correcta: "a",
            tiempo: 60
            },
            {pregunta: "¿Cuál es el objetivo principal de la iniciativa Biodiversidad Andina (2020-2024)?",
            opciones: {a: "Restaurar bosques y aportar resiliencia climática", b: "Construir represas y canales", c: "Promover monocultivos comerciales", d: "Eliminar comunidades indígenas"},
            correcta: "a",
            tiempo: 60
            },
            {pregunta: "¿Qué efecto indirecto tuvo la apertura de la carretera Cochabamba-Santa Cruz sobre los sistemas agroforestales tradicionales?",
            opciones: {a: "Mayor protección de bosques nativos", b: "Reducción del bosque disponible para sistemas tradicionales", c: "Incremento de cultivos tradicionales", d: "Disminución de la expansión agrícola"},
            correcta: "b",
            tiempo: 60
            },
            {pregunta: "¿Qué consecuencia a largo plazo se deduce de la disminución del flujo de calor latente (LE) por la deforestación?",
            opciones: {a: "Mayor biodiversidad y sombra", b: "Reducción de temperatura y sequías", c: "Incremento de H, temperatura y mayor riesgo de incendios", d: "Incremento de humedad y fertilidad"},
            correcta: "c",
            tiempo: 60
            },
            {pregunta: "¿Qué principio general se puede extraer de la relación entre deforestación y clima en los Andes bolivianos?",
            opciones: {a: "Menor LE genera H alto, temperatura y variabilidad de precipitaciones", b: "Mayor LE genera sequías y calor", c: "Deforestación no afecta clima", d: "Solo afecta fauna y no temperatura"},
            correcta: "a",
            tiempo: 60
            },
            {pregunta: "¿Cuál es la finalidad principal de combinar conocimientos agroforestales tradicionales con tecnologías de monitoreo satelital?",
            opciones: {a: "Mejorar resiliencia de restauración frente a estrés hídrico", b: "Reemplazar comunidades por máquinas", c: "Aumentar monocultivos comerciales", d: "Reducir la vegetación nativa"},
            correcta: "a",
            tiempo: 60
            },
            {pregunta: "¿Qué consecuencia social se deduce de la pérdida de bosque que reduce retención de agua y aumenta variabilidad de precipitaciones?",
            opciones: {a: "Mayor vulnerabilidad de campesinos y posibles migraciones", b: "Incremento de empleo agrícola", c: "Reducción de sequías", d: "Menor necesidad de recursos hídricos"},
            correcta: "a",
            tiempo: 60
            },
            {pregunta: "¿Qué principio general se puede extraer de las soluciones para mitigar la deforestación?",
            opciones: {a: "Integración de saberes tradicionales y monitoreo satelital", b: "Exclusivo uso de tecnologías modernas", c: "Plantación de especies exóticas", d: "Privatización total del bosque"},
            correcta: "a",
            tiempo: 60
            },
            {pregunta: "¿Qué consecuencia social relacionada con la deforestación y cambio climático no es contemplada en el artículo?",
            opciones: {a: "Desplazamiento forzado de poblaciones indígenas", b: "Mayor vulnerabilidad de campesinos", c: "Impacto en agua y agricultura", d: "Reducción de retención de agua"},
            correcta: "a",
            tiempo: 60
            },
            {pregunta: "¿Cuál es la implicación ética de promover expansión agrícola sin integrar saberes tradicionales?",
            opciones: {a: "Perpetúa desigualdades sociales y culturales", b: "Mejora la resiliencia comunitaria", c: "Aumenta diversidad de especies", d: "No tiene impacto social"},
            correcta: "a",
            tiempo: 60
            },
            {pregunta: "¿Cuáles son las principales implicaciones ambientales de la retroalimentación entre deforestación y cambio climático?",
            opciones: {a: "Menor LE, mayor H, CO2, sequías e incendios", b: "Reducción de temperatura y más lluvia", c: "Incremento de biodiversidad y fertilidad", d: "No hay impactos ambientales"},
            correcta: "a",
            tiempo: 60
            },
            {pregunta: "¿Cómo difiere la propuesta de gestión futura de una basada solo en tecnologías de monitoreo?",
            opciones: {a: "Gestiona recursos solo por sector privado", b: "Planta especies exóticas exclusivamente", c: "Combina saberes tradicionales con monitoreo satelital", d: "Solo utiliza sensores térmicos"},
            correcta: "c",
            tiempo: 60
            },
            {pregunta: "Para evaluar el balance energético regional, ¿qué factor relevante no considera el autor?",
            opciones: {a: "Expansión urbana y conversiones de suelo no forestal", b: "Pérdida de bosques", c: "Flujo de calor latente y sensible", d: "Cambio en albedo de cultivos"},
            correcta: "a",
            tiempo: 60
            },
            {pregunta: "¿Qué factor no se considera al evaluar los impactos climáticos de la deforestación en los Andes bolivianos?",
            opciones: {a: "Albedo y LE", b: "Componentes socio-económicos como demanda de soja", c: "Emisiones de CO2 por quema forestal", d: "Datos satelitales de cobertura forestal"},
            correcta: "b",
            tiempo: 60
            },
            {pregunta: "¿Qué evidencia adicional sería necesaria para reforzar que la expansión agropecuaria de la colonización española causó erosión significativa?",
            opciones: {a: "Mapas antiguos sin medición de erosión", b: "Datos de temperatura histórica", c: "Testimonios orales de colonizadores", d: "Estudios de campo midiendo pérdida de capa superficial del suelo"},
            correcta: "d",
            tiempo: 60
            },
            {pregunta: "El argumento del autor sobre la disminución del flujo de calor latente (LE) elevando H y la temperatura del aire es:",
            opciones: {a: "Válido y respaldado por el modelo de balance energético", b: "Incorrecto y sin fundamento", c: "Solo especulativo sin datos", d: "Rebatido por evidencia histórica"},
            correcta: "a",
            tiempo: 60
            },
            {pregunta: "¿Qué tan válido es el argumento sobre la efectividad de los pagos por servicios ambientales (PSA) para mitigar la deforestación?",
            opciones: {a: "No aplicable al contexto boliviano", b: "Efectivo solo en teoría", c: "Totalmente inválido", d: "Razonablemente válido, aunque sin métricas exactas"},
            correcta: "d",
            tiempo: 60
            }
        ]
    },
    {
        nombre: "TEMA 2: Educación Digital y Brecha de Conectividad",
        preguntas: [
            {pregunta: "Según el artículo, ¿cómo se define el concepto de brecha digital?",
            opciones: {a: "El acceso universal a internet en todos los hogares", b: "La diferencia entre quienes pueden acceder y usar eficazmente TIC y quienes no", c: "La disponibilidad de dispositivos electrónicos en escuelas urbanas", d: "El nivel de competencia digital de los docentes"},
            correcta: "b",
            tiempo: 60
            },
            {pregunta: "Establezca la secuencia correcta de indicadores de conectividad y acceso en Bolivia en 2023: hogares urbanos con internet, hogares rurales, estudiantes de primaria y estudiantes de secundaria con acceso a banda ancha",
            opciones: {a: "33%, 71%, 58%, 42%", b: "42%, 58%, 33%, 71%", c: "71%, 33%, 42%, 58%", d: "58%, 42%, 33%, 71%"},
            correcta: "c",
            tiempo: 60
            },
            {pregunta: "Según el artículo, los pilares que deben integrar las políticas públicas para una educación digital inclusiva son:",
            opciones: {a: "Solo infraestructura tecnológica", b: "Infraestructura, formación docente, entornos colaborativos y participación comunitaria", c: "Capacitación docente aislada", d: "Equipos electrónicos para todos los estudiantes"},
            correcta: "b",
            tiempo: 60
            },
            {pregunta: "Qué universidad implementó el Programa de Formación Docente en Tecnologías Educativas (FOTED)?",
            opciones: {a: "Universidad Autónoma Gabriel René Moreno", b: "Universidad Mayor de San Andrés (UMSA)", c: "Universidad Católica Boliviana", d: "Universidad Técnica de Oruro"},
            correcta: "b",
            tiempo: 60
            },
            {pregunta: "En qué porcentaje se redujo el costo promedio por kilómetro de fibra óptica respecto a estimaciones previas según el Programa Nacional de Conectividad Rural?",
            opciones: {a: "15%", b: "10%", c: "25%", d: "20%"},
            correcta: "a",
            tiempo: 60
            },
            {pregunta: "La barrera principal para lograr una educación digital equitativa en Bolivia es:",
            opciones: {a: "Solo la falta de computadoras en escuelas", b: "La combinación de infraestructura insuficiente, escasez de dispositivos y falta de capacitación docente", c: "La escasa participación de los padres", d: "El costo de la electricidad en zonas rurales"},
            correcta: "b",
            tiempo: 60
            },
            {pregunta: "Para cerrar la brecha de aprendizaje asociada a la falta de conectividad es necesario:",
            opciones: {a: "Solo capacitar docentes", b: "Combinación de infraestructura, dispositivos y capacitación docente", c: "Solo expandir fibra óptica", d: "Solo entregar tablets"},
            correcta: "b",
            tiempo: 60
            },
            {pregunta: "Para reducir la brecha de conectividad digital en Bolivia, la estrategia más eficaz es:",
            opciones: {a: "Solo instalación de fibra óptica", b: "Solo programas de capacitación docente", c: "Políticas integradas combinando infraestructura, dispositivos, capacitación y participación comunitaria", d: "Solo entrega de equipos electrónicos"},
            correcta: "c",
            tiempo: 60
            },
            {pregunta: "Qué afirmación refleja mejor la diferencia económica entre la expansión de fibra óptica y los programas de dispositivos compartidos?",
            opciones: {a: "Fibra óptica aumentó costos y dispositivos compartidos no afectaron la brecha", b: "Fibra óptica redujo costo por km 15%, dispositivos compartidos redujeron brecha de dispositivos 40%", c: "Ambos redujeron la brecha de dispositivos en 20%", d: "No hubo impacto económico ni social"},
            correcta: "b",
            tiempo: 60
            },
            {pregunta: "Respecto a los actores involucrados en la reducción de la brecha digital, la estrategia más eficaz combina:",
            opciones: {a: "Infraestructura, dispositivos compartidos, capacitación docente y participación comunitaria", b: "Solo infraestructura", c: "Solo capacitación docente", d: "Solo sector privado"},
            correcta: "a",
            tiempo: 60
            },
            {pregunta: "Qué efecto en la educación rural se produce por la insuficiente cobertura de fibra óptica?",
            opciones: {a: "Mayor participación de los padres", b: "Limitación del uso de plataformas digitales y mayor probabilidad de deserción escolar", c: "Reducción de la brecha de dispositivos", d: "Mejora de puntajes sin internet"},
            correcta: "b",
            tiempo: 60
            },
            {pregunta: "Con la expansión de fibra óptica y radio enlace en zonas rurales, qué se espera en el desempeño académico de los estudiantes en los próximos 3 años?",
            opciones: {a: "Incremento aproximado del 10% en resultados académicos", b: "Reducción de puntajes", c: "Caída en asistencia escolar", d: "No hay cambios relevantes"},
            correcta: "a",
            tiempo: 60
            },
            {pregunta: "Comparando fibra óptica y radio enlace de corto alcance, cuál refleja mejor la relación topografía-solución tecnológica?",
            opciones: {a: "Radio enlace en ciudades y fibra en montañas", b: "Fibra en zonas urbanas y planas, radio enlace en zonas de difícil acceso", c: "Solo se usa fibra óptica en áreas rurales", d: "Ambas soluciones se aplican igual en todo el país"},
            correcta: "b",
            tiempo: 60
            },
            {pregunta: "Para reducir la brecha de conectividad, la estrategia más eficaz consiste en:",
            opciones: {a: "Solo instalar fibra óptica", b: "Solo capacitar docentes", c: "Solo entregar tablets", d: "Expansión de infraestructura, programas de dispositivos y capacitación docente complementarios"},
            correcta: "d",
            tiempo: 60
            },
            {pregunta: "Qué efecto probable tendría la ampliación de cobertura de fibra óptica en municipios rurales sobre rendimiento académico?",
            opciones: {a: "Incremento de puntajes promedio similar al 12%", b: "Disminución de puntajes", c: "Aumento solo en áreas urbanas", d: "No hay efecto en resultados"},
            correcta: "a",
            tiempo: 60
            },
            {pregunta: "El propósito principal de combinar expansión de fibra óptica, dispositivos compartidos y capacitación docente continua es:",
            opciones: {a: "Cerrar gradualmente la brecha digital y mejorar rendimiento académico y equidad", b: "Solo capacitar docentes", c: "Reducir costos de infraestructura", d: "Solo entregar tecnología"},
            correcta: "a",
            tiempo: 60
            },
            {pregunta: "Cuál principio general se puede inferir sobre la estrategia más eficaz para reducir la brecha digital en Bolivia?",
            opciones: {a: "Entrega de equipos sin capacitación", b: "Políticas integradas que incluyan infraestructura, equipamiento, capacitación y apoyo comunitario", c: "Uso exclusivo de tecnología moderna", d: "Solo inversión privada"},
            correcta: "b",
            tiempo: 60
            },
            {pregunta: "Qué consecuencia social general se puede inferir de la implementación de soluciones integrales en zonas rurales?",
            opciones: {a: "Desigualdad educativa aumentada", b: "Mayor equidad educativa y participación activa en la sociedad del conocimiento", c: "Reducción de estudiantes en escuelas rurales", d: "Solo mejora económica"},
            correcta: "b",
            tiempo: 60
            },
            {pregunta: "Tras la capacitación docente que elevó la confianza de los profesores en un 30%, qué consecuencia se deduce en clases híbridas?",
            opciones: {a: "No hay cambios pedagógicos", b: "Reducción en asistencia", c: "Mayor incorporación de actividades interactivas", d: "Disminución del uso de plataformas"},
            correcta: "c",
            tiempo: 60
            },
            {pregunta: "Cuál enfoque muestra un impacto más inmediato en la participación de los estudiantes en actividades digitales?",
            opciones: {a: "Solo políticas gubernamentales", b: "Capacitación docente aislada", c: "Expansión de fibra óptica", d: "Programas de dispositivos compartidos y bibliotecas digitales"},
            correcta: "d",
            tiempo: 60
            },
            {pregunta: "Qué perspectiva ambiental no ha sido considerada en el análisis del autor sobre educación digital en Bolivia?",
            opciones: {a: "Cobertura de fibra óptica", b: "Efectos ecológicos como consumo energético y alteración de hábitats", c: "Disponibilidad de dispositivos", d: "Capacitación docente"},
            correcta: "b",
            tiempo: 60
            },
            {pregunta: "Qué perspectiva importante no se contempla en el análisis del autor sobre educación digital?",
            opciones: {a: "Acceso urbano a internet", b: "Inclusión de estudiantes con discapacidades", c: "Disponibilidad de tablets", d: "Costo de infraestructura"},
            correcta: "b",
            tiempo: 60
            },
            {pregunta: "Es suficiente la evidencia estadística del artículo para afirmar que la brecha digital causa bajo rendimiento académico?",
            opciones: {a: "Sí, la correlación demuestra causalidad", b: "No, los datos son correlacionales y no permiten establecer causalidad directa", c: "No, porque no se midieron puntajes", d: "Sí, hay evidencia experimental"},
            correcta: "b",
            tiempo: 60
            },
            {pregunta: "Cuáles son las principales implicaciones sociales de la brecha de conectividad según datos urbanos y rurales?",
            opciones: {a: "Mayor equidad educativa", b: "Brecha de aprendizaje que perpetúa desigualdades socioeconómicas", c: "Incremento de puntajes urbanos", d: "No existen implicaciones sociales"},
            correcta: "b",
            tiempo: 60
            },
            {pregunta: "Qué tan válido es el argumento sobre retorno económico inmediato por infraestructura y aumento de puntajes?",
            opciones: {a: "Débil, carece de evidencia de vínculo causal o ahorro financiero", b: "Muy válido, demostrado estadísticamente", c: "Moderadamente válido, pero no aplica en rural", d: "Totalmente inválido"},
            correcta: "a",
            tiempo: 60
            },
            {pregunta: "El argumento de que la expansión de fibra óptica es la solución más eficaz para reducir la brecha digital es:",
            opciones: {a: "Especulativo sin datos", b: "Incorrecto, solo la fibra resuelve el problema", c: "Válido dentro de un enfoque integral que combina fibra óptica y radio enlace", d: "Rebatido por evidencia histórica"},
            correcta: "c",
            tiempo: 60
            },
            {pregunta: "Cuál perspectiva futura refleja mejor la combinación de acciones necesarias para reducir la brecha digital?",
            opciones: {a: "Solo instalar infraestructura tecnológica", b: "Enfoque sistémico que combine infraestructura, capacitación docente, entornos colaborativos y participación comunitaria", c: "Solo entregar dispositivos", d: "Solo capacitar docentes"},
            correcta: "b",
            tiempo: 60
            },
            {pregunta: "Cómo se podría adaptar la estrategia de bibliotecas digitales a un contexto urbano de alta densidad?",
            opciones: {a: "Solo capacitar docentes", b: "Replicar la integración de infraestructura, dispositivos, capacitación docente y participación comunitaria", c: "Solo entregar tablets", d: "Solo instalar fibra óptica"},
            correcta: "b",
            tiempo: 60
            },
            {pregunta: "Cuáles son las principales implicaciones éticas y sociales para actores al implementar soluciones de educación digital?",
            opciones: {a: "Solo invertir en tecnología", b: "Evitar concentración de infraestructura, capacitar docentes, participación comunitaria y protección de datos", c: "Solo capacitar docentes", d: "No considerar ética ni comunidad"},
            correcta: "b",
            tiempo: 60
            }
        ]
    },
    {
        nombre: "TEMA 3: Historia y evolución del Internet",
        preguntas:[
           {pregunta: "A partir de lo expuesto en el artículo, ¿cómo define el concepto de acceso dial up?",
            opciones: {a: "Conexión a internet mediante fibra óptica", b: "Uso de línea telefónica convencional para conectarse a 56 kbps", c: "Acceso inalámbrico de alta velocidad", d: "Conexión satelital exclusiva para universidades"},
            correcta: "b",
            tiempo: 60
            },
            {pregunta: "Considerando lo mencionado en el texto, ¿cuáles son los sectores beneficiados por la expansión de Internet en Bolivia?",
            opciones: {a: "Educación, comercio electrónico y salud", b: "Solo educación y transporte", c: "Solo salud y seguridad", d: "Agricultura y minería exclusivamente"},
            correcta: "a",
            tiempo: 60
            },
            {pregunta: "¿Cuáles son las implicaciones económicas de la expansión de banda ancha y fibra óptica entre 2006 y 2015?",
            opciones: {a: "Aumento de precios de planes a 50 dólares mensuales", b: "Inversión de 350 millones de dólares y reducción de planes a 15 dólares", c: "Solo creación de empleos en telecomunicaciones", d: "Desaparición del comercio electrónico"},
            correcta: "b",
            tiempo: 60
            },
            {pregunta: "Basándose en la información proporcionada, ¿cuál es la tercera etapa de la conectividad en Bolivia?",
            opciones: {a: "Era dial up", b: "Expansión de banda ancha y fibra óptica", c: "Convergencia móvil, 4G y llegada de 5G", d: "Acceso a internet satelital en universidades"},
            correcta: "c",
            tiempo: 60
            },
            {pregunta: "El orden cronológico de los principales actores que lideraron cada fase de conectividad es:",
            opciones: {a: "Viva, Entel, Gobierno, UMSA", b: "UMSA, Gobierno, Entel, Viva", c: "Entel, UMSA, Gobierno, Viva", d: "Gobierno, Viva, Entel, UMSA"},
            correcta: "b",
            tiempo: 60
            },
            {pregunta: "¿Qué porcentaje de la población boliviana se espera tenga acceso a redes 5G para finales de 2024?",
            opciones: {a: "15%", b: "20%", c: "25%", d: "30%"},
            correcta: "b",
            tiempo: 60
            },
            {pregunta: "El principio general sobre el rol de la infraestructura tecnológica en la inclusión digital es:",
            opciones: {a: "Solo instalar fibra óptica garantiza equidad", b: "Infraestructura es necesaria pero no suficiente; se requieren subsidios y políticas complementarias", c: "La tecnología por sí sola elimina la brecha digital", d: "Solo la capacitación docente importa"},
            correcta: "b",
            tiempo: 60
            },
            {pregunta: "La diferencia porcentual en la penetración de Internet entre hogares urbanos y rurales de 2003 a 2015:",
            opciones: {a: "Disminuyó de 4 a 2 puntos porcentuales", b: "Se mantuvo igual", c: "Aumentó de 4 a 26 puntos, mostrando mayor brecha", d: "Se eliminó totalmente"},
            correcta: "c",
            tiempo: 60
            },
            {pregunta: "Efecto de la implementación del proyecto “Red de Información Boliviana” sobre la penetración de Internet urbano:",
            opciones: {a: "Disminuyó el acceso urbano", b: "No hubo cambios", c: "Aumentó de 5% a 38% en 2015", d: "Solo benefició a zonas rurales"},
            correcta: "c",
            tiempo: 60
            },
            {pregunta: "Mensaje principal implícito respecto a soluciones para cerrar la brecha digital:",
            opciones: {a: "Solo invertir en infraestructura tecnológica", b: "Combinación de subsidios, capacitación y fondos nacionales bajo cooperación multisectorial", c: "Solo entregar tablets a escuelas", d: "Ignorar el sector privado"},
            correcta: "b",
            tiempo: 60
            },
            {pregunta: "Principio general de las soluciones propuestas para cerrar la brecha digital en Bolivia:",
            opciones: {a: "Política integral combinando subsidios, inversión privada y colaboración entre actores", b: "Solo inversión privada", c: "Solo inversión pública sin coordinación", d: "Solo capacitación docente aislada"},
            correcta: "a",
            tiempo: 60
            },
            {pregunta: "Idea principal sobre la evolución del Internet en Bolivia:",
            opciones: {a: "Se eliminó la brecha digital por completo", b: "Aumentó la brecha pese a avances tecnológicos; se requiere política integrada", c: "No hubo avances significativos", d: "Solo mejoró el comercio electrónico"},
            correcta: "b",
            tiempo: 60
            },
            {pregunta: "Propuesta central para reducir la brecha digital entre zonas urbanas y rurales:",
            opciones: {a: "Subsidios, capacitación digital y fondo nacional para zonas rurales", b: "Solo fibra óptica", c: "Solo redes 5G", d: "Solo entrega de computadoras"},
            correcta: "a",
            tiempo: 60
            },
            {pregunta: "Pronóstico de cobertura de internet en áreas rurales en los próximos cinco años:",
            opciones: {a: "Incremento limitado, priorizando zonas estratégicas con políticas de subsidios e inversión", b: "Cobertura total sin intervención", c: "Disminución de cobertura rural", d: "Cobertura igual que urbana automáticamente"},
            correcta: "a",
            tiempo: 60
            },
            {pregunta: "Consecuencia más probable de la instalación de fibra óptica en corredores urbanos (2006-2015):",
            opciones: {a: "Disminuyó penetración urbana", b: "Aumento de penetración de 5% a 38% y reducción de precios a 15 USD", c: "Solo impacto en zonas rurales", d: "No tuvo efecto en planes comerciales"},
            correcta: "b",
            tiempo: 60
            },
            {pregunta: "Estrategia de expansión de Entel con red 4G LTE:",
            opciones: {a: "No impactó en conectividad móvil", b: "Facilitó implementación futura de 5G usando infraestructura 4G previa", c: "Solo se implementó en áreas rurales", d: "Solo cobertura satelital"},
            correcta: "b",
            tiempo: 60
            },
            {pregunta: "Mensaje implícito principal sobre desarrollo de conectividad en Bolivia:",
            opciones: {a: "La brecha digital ya fue eliminada", b: "Aún persisten desigualdades; se requiere inversión y políticas para inclusión universal", c: "Solo interesa cobertura urbana", d: "No se necesita cooperación multisectorial"},
            correcta: "b",
            tiempo: 60
            },
            {pregunta: "Conclusión sobre expansión de fibra óptica y redes 4G/5G:",
            opciones: {a: "Se cerró la brecha digital rural", b: "Brecha digital persiste: 68% hogares rurales sin acceso fijo en 2023", c: "Solo mejora educativa urbana", d: "No hay diferencias rurales/urbanas"},
            correcta: "b",
            tiempo: 60
            },
            {pregunta: "Idea principal implícita respecto a resultados de la evolución de Internet en Bolivia:",
            opciones: {a: "Solo beneficios tecnológicos, sin desigualdades", b: "Avances positivos pero persiste la brecha; se requieren políticas integradas", c: "No hubo avance tecnológico", d: "Solo afectó la salud"},
            correcta: "b",
            tiempo: 60
            },
            {pregunta: "Impacto de expansión de red 5G en Puerto Suárez:",
            opciones: {a: "Solo mejora urbana", b: "Facilita telemedicina y monitoreo en tiempo real en zonas antes aisladas", c: "No hay efecto en educación ni salud", d: "Reduce cobertura rural"},
            correcta: "b",
            tiempo: 60
            },
            {pregunta: "Principio general sobre papel de actores en expansión de conectividad:",
            opciones: {a: "Solo el gobierno debe actuar", b: "Cooperación entre universidad, gobierno y sector privado es clave", c: "Empresas privadas sin regulación son suficientes", d: "Solo actores internacionales importan"},
            correcta: "b",
            tiempo: 60
            },
            {pregunta: "Valoración crítica de la meta de 20% de población con 5G para 2024:",
            opciones: {a: "Meta insuficiente pero plausible por enfoque en zonas estratégicas y brecha rural persistente", b: "Meta irrelevante, cobertura total inmediata", c: "Meta imposible, no hay infraestructura", d: "Meta igual que estándar global 50%"},
            correcta: "a",
            tiempo: 60
            },
            {pregunta: "Posible sesgo al interpretar que el 68% de hogares rurales carecen de Internet:",
            opciones: {a: "No hay sesgo, dato exacto", b: "Ignorar conexiones móviles existentes genera sesgo de interpretación", c: "Sobreestima el acceso urbano", d: "Subestima planes 5G urbanos"},
            correcta: "b",
            tiempo: 60
            },
            {pregunta: "Relevancia de prueba piloto de 5G en Puerto Suárez para políticas públicas:",
            opciones: {a: "Solo sirve para zonas urbanas", b: "Demuestra que 5G puede ofrecer servicios críticos en zonas de difícil acceso", c: "No impacta políticas educativas", d: "Solo beneficia empresas privadas"},
            correcta: "b",
            tiempo: 60
            },
            {pregunta: "Validez de afirmación de que 5G eliminará la brecha digital:",
            opciones: {a: "Totalmente válida", b: "No es válida; 5G alcanza solo al 20% y retos estructurales persisten", c: "Parcialmente válida en zonas rurales", d: "Ignora datos urbanos"},
            correcta: "b",
            tiempo: 60
            },
            {pregunta: "Aspecto importante obviado por el autor sobre diferencias de acceso a Internet:",
            opciones: {a: "Distribución urbana-rural", b: "Diferencias de género y acceso entre hombres y mujeres", c: "Avances tecnológicos", d: "Costo de planes comerciales"},
            correcta: "b",
            tiempo: 60
            },
            {pregunta: "Viabilidad de meta de 20% de población con 5G considerando brecha digital:",
            opciones: {a: "Inviable por falta de infraestructura urbana", b: "Plausible enfocándose en áreas urbanas estratégicas pese a brecha rural", c: "Meta demasiado alta, imposible", d: "Igual que cobertura global 50%"},
            correcta: "b",
            tiempo: 60
            },
            {pregunta: "Perspectiva futura no considerada por el autor al proponer políticas para cerrar brecha digital:",
            opciones: {a: "Subsidios y fondos nacionales", b: "Visión de pueblos indígenas y aspectos culturales", c: "Capacitación digital", d: "Inversión privada"},
            correcta: "b",
            tiempo: 60
            },
            {pregunta: "Combinación de medidas más adecuada para reducir brecha digital en próximos cinco años:",
            opciones: {a: "Solo instalar fibra óptica", b: "Subsidios, capacitación digital y fondo nacional para zonas rurales", c: "Solo redes 5G urbanas", d: "Solo entrega de computadoras a estudiantes"}, 
            correcta: "b",
            tiempo: 60
            },
            {pregunta: "Valoración de meta 20% de población con 5G frente a estándar global 50%:",
            opciones: {a: "Meta alcanzable por enfoque en zonas estratégicas, aunque brecha rural persiste", b: "Meta igual a estándar global automáticamente", c: "Meta imposible, falta inversión", d: "Meta no necesaria"},
            correcta: "a",
            tiempo: 60
            }
        ]
    },
    {
        nombre:"TEMA 4: Impacto digitalización y redes sociales",
        preguntas:[
            {
                pregunta: "¿Cuál es la consecuencia social inmediata de la campaña del hashtag #ReformaEducativa2022?",
                opciones: {
                a: "Una protesta virtual",
                b: "Una marcha presencial con más de 5000 participantes",
                c: "Un aumento en las interacciones online",
                d: "Un debate político en redes sociales"
                },
                correcta: "a",
                tiempo: 60
            },
            {
                pregunta: "¿Cuál es la diferencia porcentual entre los jóvenes de La Paz que se sienten capaces de distinguir noticias reales y los de Potosí?",
                opciones: {
                a: "20 puntos",
                b: "22 puntos",
                c: "24 puntos",
                d: "30 puntos"
                },
                correcta: "b",
                tiempo: 60
            },
            {
                pregunta: "¿Qué mecanismo menciona la teoría del ‘Efecto de Red’ para explicar cómo las redes sociales favorecen la organización de protestas?",
                opciones: {
                a: "La influencia de los líderes de opinión",
                b: "La retroalimentación instantánea (likes, retweets)",
                c: "La globalización del mensaje",
                d: "La viralización de contenido político"
                },
                correcta: "c",
                tiempo: 60
            },
            {
                pregunta: "¿Cuál es la diferencia porcentual entre el porcentaje de jóvenes con smartphone y los que en Potosí se sienten capaces de distinguir noticias reales?",
                opciones: {
                a: "33%",
                b: "35%",
                c: "41%",
                d: "30%"
                },
                correcta: "d",
                tiempo: 60
            },
            {
                pregunta: "¿Cómo define el artículo la participación simbólica?",
                opciones: {
                a: "Acción colectiva en redes sociales",
                b: "Expresión de opiniones y valores sin traducción en acción concreta",
                c: "Interacción política en línea",
                d: "Movilización física a través de plataformas digitales"
                },
                correcta: "c",
                tiempo: 60
            },
            {
                pregunta: "¿Cómo se define el concepto de alfabetización digital según el artículo?",
                opciones: {
                a: "Capacidad para navegar en internet",
                b: "Capacidad de buscar, evaluar y usar información digital de forma responsable",
                c: "Conocimiento básico de programación",
                d: "Habilidad para compartir contenidos digitales"
                },
                correcta: "b",
                tiempo: 60
            },
            {
                pregunta: "¿Qué depende principalmente de la alfabetización digital para la efectividad de la participación política de los jóvenes?",
                opciones: {
                a: "La posesión de smartphones",
                b: "El acceso a plataformas sociales",
                c: "La capacidad de distinguir información verdadera de falsa",
                d: "La conectividad a internet"
                },
                correcta: "d",
                tiempo: 60
            },
            {
                pregunta: "¿Cuál es la diferencia principal entre el uso de medios digitales en ‘Voces del Chaco’ y la campaña #ReformaEducativa2022?",
                opciones: {
                a: "‘Voces del Chaco’ se enfoca en el debate sobre políticas educativas",
                b: "‘Voces del Chaco’ es una forma de participación simbólica, mientras que #ReformaEducativa2022 fue una movilización digital con acción presencial",
                c: "Ambos usaron plataformas de video, pero en diferentes países",
                d: "‘Voces del Chaco’ no tuvo impacto en la política"
                },
                correcta: "a",
                tiempo: 60
            },
            {
                pregunta: "¿Qué caracteriza principalmente a la iniciativa ‘Voces del Chaco’ en comparación con la movilización física de #ReformaEducativa2022?",
                opciones: {
                a: "Es una forma de participación simbólica con debates en línea",
                b: "Generó una marcha presencial con más de 5000 personas",
                c: "Está centrada en una protesta política",
                d: "Es una campaña de votación digital"
                },
                correcta: "b",
                tiempo: 60
            },
            {
                pregunta: "¿Qué es probable que ocurra debido al bajo costo de la participación digital en la movilización #ReformaEducativa2022?",
                opciones: {
                a: "Aumento de la desinformación",
                b: "Mayor presión para que el Estado invierta en infraestructura digital",
                c: "Reducción en la participación política",
                d: "Crecimiento de la fragmentación social"
                },
                correcta: "b",
                tiempo: 60
            },
            {
                pregunta: "¿Qué diferencia se presenta entre la movilización digital en la UMSA y la región del Beni?",
                opciones: {
                a: "En la UMSA, las plataformas favorecen la polarización, mientras que en el Beni hay consenso",
                b: "En la UMSA hubo una movilización digital masiva y en el Beni, mensajes polarizadores",
                c: "En la UMSA, los grupos rivales usan WhatsApp, mientras que en el Beni se usan solo memes",
                d: "En la UMSA no hubo interacción en redes sociales"
                },
                correcta: "c",
                tiempo: 60
            },
            {
                pregunta: "¿Cuál es la consecuencia social más distintiva entre la movilización digital y la expresión simbólica en redes sociales?",
                opciones: {
                a: "La movilización digital genera una protesta física, mientras que la simbólica solo crea conciencia",
                b: "Ambas resultan en protestas físicas",
                c: "La expresión simbólica lleva a una acción política más efectiva",
                d: "Solo la expresión simbólica contribuye a cambios concretos"
                },
                correcta: "a",
                tiempo: 60
            },
            {
                pregunta: "¿Qué conclusión se puede inferir sobre el efecto histórico de la expansión digital en la participación política de los jóvenes bolivianos entre 2013 y 2022?",
                opciones: {
                a: "La expansión digital ha asegurado una mejora generalizada de la participación",
                b: "La expansión digital ha aumentado el acceso a la información, pero no garantiza una mayor participación política",
                c: "El aumento en la conectividad ha reducido la participación política",
                d: "La participación política ha aumentado en todas las regiones del país"
                },
                correcta: "b",
                tiempo: 60
            },
            {
                pregunta: "¿Qué perspectiva futura se sugiere para potenciar la participación política de los jóvenes bolivianos?",
                opciones: {
                a: "Aumentar la cantidad de dispositivos móviles",
                b: "Fomentar la alfabetización digital, políticas de transparencia y apoyo a contenidos juveniles",
                c: "Implementar más plataformas de votación online",
                d: "Restringir el acceso a internet en zonas rurales"
                },
                correcta: "c",
                tiempo: 60
            },
            {
                pregunta: "¿Qué ocurriría si se intensifica la producción y difusión de contenidos juveniles sobre temas ambientales, como ‘Voces del Chaco’?",
                opciones: {
                a: "Se generaría una mayor apatía por el medio ambiente",
                b: "Se reforzaría la perspectiva juvenil en la agenda pública, presionando para políticas de conservación",
                c: "No tendría impacto en las políticas públicas",
                d: "Solo se generarían debates sin consecuencias políticas"
                },
                correcta: "b",
                tiempo: 60
            },
            {
                pregunta: "¿Qué diferencia económica se puede inferir entre la movilización digital de los jóvenes mediante hashtags y la exposición a noticias falsas?",
                opciones: {
                a: "Ambas afectan igualmente la participación electoral",
                b: "La movilización digital puede aumentar la influencia económica, mientras que la exposición a fake news reduce la participación",
                c: "La exposición a fake news genera mayor impacto económico",
                d: "La movilización digital reduce la influencia política, pero aumenta la económica"
                },
                correcta: "b",
                tiempo: 60
            },
            {
                pregunta: "¿Qué limitación no está contemplada en las soluciones propuestas por los autores?",
                opciones: {
                a: "La falta de medidas para ampliar la infraestructura en zonas rurales",
                b: "La desigualdad en el acceso a smartphones",
                c: "La insuficiencia de políticas de participación en redes sociales",
                d: "La brecha en la alfabetización digital en las zonas urbanas"
                },
                correcta: "a",
                tiempo: 60
            },
            {
                pregunta: "¿Qué tipo de evidencia sería más pertinente para reforzar la afirmación de que los programas de alfabetización digital aumentan la intención de voto entre los jóvenes bolivianos?",
                opciones: {
                a: "Estudios correlacionales de diferentes regiones",
                b: "Evidencia experimental que controle variables y mida cambios",
                c: "Encuestas sobre la posesión de smartphones",
                d: "Datos sobre el uso de internet"
                },
                correcta: "b",
                tiempo: 60
            },
            {
                pregunta: "¿Por qué es relevante implementar programas de alfabetización digital en las escuelas bolivianas para mejorar la participación política de los jóvenes?",
                opciones: {
                a: "Porque el 89% de los jóvenes tiene acceso a smartphones",
                b: "Porque la alfabetización digital sigue siendo desigual y debe ser equiparada entre las zonas urbanas y rurales",
                c: "Porque los jóvenes están desinformados debido a la falta de uso de internet",
                d: "Porque los programas de formación política son insuficientes"
                },
                correcta: "b",
                tiempo: 60
            },
            {
                pregunta: "¿Qué aspecto del concepto ‘Efecto de Red’ es clave para las protestas online en Bolivia?",
                opciones: {
                a: "El uso exclusivo de Twitter",
                b: "La capacidad de compartir información rápidamente entre grupos",
                c: "El número de seguidores en las redes sociales",
                d: "La cantidad de memes compartidos"
                },
                correcta: "b",
                tiempo: 60
            },
            {
                pregunta: "¿Qué plataforma tiene más influencia para organizar protestas, según el estudio?",
                opciones: {
                a: "Twitter",
                b: "Facebook",
                c: "Instagram",
                d: "WhatsApp"
                },
                correcta: "a",
                tiempo: 60
            },
            {
                pregunta: "¿Cuál es uno de los principales riesgos de la expansión de los movimientos de protesta en línea?",
                opciones: {
                a: "Mayor control gubernamental sobre las redes sociales",
                b: "Desinformación y noticias falsas",
                c: "Una polarización aún mayor en la sociedad",
                d: "Reducción de la participación política"
                },
                correcta: "b",
                tiempo: 60
            },
            {
                pregunta: "¿Qué factor puede ayudar a mejorar la participación política en línea de los jóvenes?",
                opciones: {
                a: "La creación de hashtags populares",
                b: "La creación de contenido visual atractivo",
                c: "La educación en alfabetización digital",
                d: "El uso exclusivo de plataformas digitales"
                },
                correcta: "c",
                tiempo: 60
            },
            {
                pregunta: "¿Por qué la alfabetización digital es un factor clave para el futuro político de los jóvenes?",
                opciones: {
                a: "Porque los jóvenes necesitan saber cómo compartir memes",
                b: "Porque pueden participar más activamente en discusiones políticas",
                c: "Porque son los primeros en consumir contenido en video",
                d: "Porque facilita el acceso a internet de alta velocidad"
                },
                correcta: "b",
                tiempo: 60
            }
            
        ]
    },
    {
        nombre:"TEMA 5: Inteligencia Artificial en educación",
        preguntas:[
            {
                pregunta: "Según el artículo, ¿qué actor es mencionado primero como iniciador de la implementación de herramientas de IA en la educación boliviana?",
                opciones: {a: "Ministerio de Educación", b: "Universidad Católica Boliviana", c: "Organización de Naciones Unidas", d: "Universidad Mayor de San Andrés"},
                correcta: "a",
                tiempo: 60
            },
            {
                pregunta: "De acuerdo con el texto, ¿qué organismo proporciona la cifra del 38% de hogares rurales bolivianos con conexión a Internet de banda ancha?",
                opciones: {a: "Ministerio de Educación", b: "INE (2023)", c: "UNESCO", d: "UMSA"},
                correcta: "b",
                tiempo: 60
            },
            {
                pregunta: "Basándose en la información proporcionada, ¿cuál es la segunda consecuencia social que se menciona respecto a la adopción de la IA en la educación boliviana?",
                opciones: {a: "Ampliación de la desigualdad educativa", b: "Dependencia excesiva del algoritmo", c: "Mejora en la formación docente", d: "Reducción de la deserción escolar"},
                correcta: "b",
                tiempo: 60
            },
            {
                pregunta: "El artículo señala que los conceptos neurocientíficos clave para la personalización del aprendizaje son:",
                opciones: {a: "Neuroplasticidad y memoria de trabajo", b: "Plasticidad sináptica y carga cognitiva", c: "Neurociencia cognitiva y aprendizaje automático", d: "Inteligencia emocional y aprendizaje profundo"},
                correcta: "b",
                tiempo: 60
            },
            {
                pregunta: "De acuerdo con el texto, ¿cuáles son los principales desafíos que se identifican para la integración de la IA en la educación boliviana?",
                opciones: {a: "Falta de inversión en tecnología", b: "Infraestructura y conectividad, capacitación docente, privacidad y sesgo algorítmico", c: "Alta tasa de deserción escolar", d: "Poca formación en programación en las escuelas"},
                correcta: "b",
                tiempo: 60
            },
            {
                pregunta: "Según el artículo, ¿qué porcentaje de hogares rurales en Bolivia dispone de conexión a Internet de banda ancha?",
                opciones: {a: "71%", b: "38%", c: "50%", d: "22%"},
                correcta: "b",
                tiempo: 60
            },
            {
                pregunta: "El artículo señala que solo el 38% de los hogares rurales tiene conexión de banda ancha, mientras que el 71% de los urbanos sí la posee. ¿Qué consecuencia se puede deducir si esta diferencia de conectividad no se corrige al introducir herramientas de IA en la educación?",
                opciones: {a: "La deserción escolar disminuirá", b: "La brecha digital entre áreas rurales y urbanas se ampliará", c: "La conectividad mejorará en áreas rurales", d: "Los docentes tendrán mejor capacitación"},
                correcta: "b",
                tiempo: 60
            },
            {
                pregunta: "Según el artículo, ¿cuál es la principal fortaleza del enfoque de tutores virtuales basados en IA en la educación secundaria boliviana?",
                opciones: {a: "Aumento de la tasa de deserción", b: "Reducción de la deserción escolar y mejora de calificaciones", c: "Menor carga cognitiva en los estudiantes", d: "Optimización del uso de tecnología en las aulas"},
                correcta: "b",
                tiempo: 60
            },
            {
                pregunta: "Considerando lo mencionado en el texto, ¿qué tan válido es el argumento de que la inteligencia artificial reducirá automáticamente las brechas sociales en la educación boliviana?",
                opciones: {a: "Totalmente válido", b: "Parcialmente válido, pero depende de factores como conectividad y formación docente", c: "No válido, no tiene impacto", d: "Totalmente incorrecto"},
                correcta: "b",
                tiempo: 60
            },
            {
                pregunta: "Del análisis presentado se desprende que, respecto a los resultados del estudio piloto con tutor virtual basado en IA, la evidencia es:",
                opciones: {a: "Suficiente para generalizar", b: "Suficiente para asegurar mejoras nacionales", c: "Válida como indicio preliminar, pero no suficiente para generalizar", d: "No válida para evaluar efectividad"},
                correcta: "c",
                tiempo: 60
            },
            {
                pregunta: "De acuerdo con el texto, ¿cuál de los siguientes aspectos representa una posible limitación que podría sesgar los resultados del estudio piloto sobre tutores virtuales?",
                opciones: {a: "La muestra es representativa de todo el sistema educativo", b: "La falta de estudiantes de zonas rurales en el estudio piloto", c: "La alta tasa de deserción en las zonas urbanas", d: "La falta de personal capacitado en el uso de IA"},
                correcta: "b",
                tiempo: 60
            },
            {
                pregunta: "De acuerdo con el texto, ¿cuál es la principal implicación económica de adoptar inteligencia artificial en la educación boliviana?",
                opciones: {a: "Aumento de los costos educativos", b: "Necesidad de inversión en redes de banda ancha y formación docente", c: "Desarrollo de nuevas plataformas educativas", d: "Reducción de gastos en infraestructura escolar"},
                correcta: "b",
                tiempo: 60
            },
            {
                pregunta: "Considerando lo mencionado en el texto, ¿cuál de los siguientes sesgos potenciales no se discute explícitamente en el artículo?",
                opciones: {a: "Sesgo algorítmico ligado a datos urbanos", b: "Sesgo de género", c: "Sesgo por nivel socioeconómico", d: "Sesgo debido a la falta de datos en zonas rurales"},
                correcta: "b",
                tiempo: 60
            },
            {
                pregunta: "El artículo señala que la IA puede modular la carga cognitiva y la plasticidad sináptica para optimizar el aprendizaje. Según una valoración crítica simple, ¿cuál de los siguientes enunciados representa la mayor fortaleza de este enfoque científico?",
                opciones: {a: "Maximiza la retención a largo plazo sin sobrecargar la memoria", b: "Elimina la necesidad de intervenciones docentes", c: "Mejora la memoria a corto plazo de los estudiantes", d: "No hay efectos negativos en el aprendizaje"},
                correcta: "a",
                tiempo: 60
            },
            {
                pregunta: "Según el artículo, ¿cuál de los siguientes actores es el más determinante para garantizar una integración responsable de la IA en la educación boliviana?",
                opciones: {a: "Ministerio de Educación", b: "Universidades privadas", c: "ONG internacionales", d: "El gobierno local"},
                correcta: "a",
                tiempo: 60
            },
            {
                pregunta: "La lectura del texto permite identificar que, para que la IA contribuya de forma efectiva a la educación en Bolivia, es necesario que las soluciones propuestas se orienten principalmente a:",
                opciones: {a: "Reducir el uso de la tecnología en las aulas", b: "Invertir en conectividad, formación docente y políticas de protección de datos", c: "Mejorar la infraestructura física de las escuelas", d: "Aumentar la cantidad de plataformas educativas disponibles"},
                correcta: "b",
                tiempo: 60
            },
            {
                pregunta: "De acuerdo con el texto, ¿qué consecuencia se puede deducir si se invierte en redes de banda ancha en zonas rurales?",
                opciones: {a: "La desigualdad educativa se mantendrá", b: "La integración de la IA será más equitativa", c: "La deserción escolar aumentará", d: "Los tutores virtuales no serán efectivos"},
                correcta: "b",
                tiempo: 60
            },
            {
                pregunta: "Basándose en la información proporcionada, ¿cuál es el propósito económico principal de mejorar la conectividad de banda ancha en zonas rurales de Bolivia?",
                opciones: {a: "Ampliar la cobertura de internet para todos los ciudadanos", b: "Aumentar el acceso a servicios de streaming", c: "Evitar la ampliación de la desigualdad educativa", d: "Desarrollar nuevos modelos de enseñanza a distancia"},
                correcta: "c",
                tiempo: 60
            },
            {
                pregunta: "De acuerdo con el texto, ¿qué efecto probable tendría la falta de capacitación docente en inteligencia artificial sobre el uso de los sistemas de IA en las aulas?",
                opciones: {a: "Los docentes serían más dependientes de los algoritmos", b: "Los sistemas de IA serían menos efectivos en áreas rurales", c: "La tasa de deserción escolar disminuiría", d: "La calidad del aprendizaje aumentaría sin problemas"},
                correcta: "a",
                tiempo: 60
            },
            {
                pregunta: "De acuerdo con el texto, ¿cuál es el mensaje principal implícito que el autor comunica respecto a los datos estadísticos proporcionados?",
                opciones: {a: "La conectividad en zonas rurales no es relevante para la adopción de IA", b: "La brecha digital limita la implementación uniforme de IA", c: "Los datos muestran un avance rápido en conectividad rural", d: "La tecnología ya está suficientemente distribuida en las zonas rurales"},
                correcta: "b",
                tiempo: 60
            },
            {
                pregunta: "De acuerdo con el texto, ¿qué conclusión lógica se puede extraer sobre los procesos técnicos de IA que personalizan el aprendizaje?",
                opciones: {a: "El algoritmo puede adaptar la complejidad de los ejercicios al nivel del estudiante", b: "La IA no tiene impacto en el desempeño académico", c: "El sistema de IA siempre ofrece las mismas actividades", d: "No se pueden personalizar los ejercicios en función del estudiante"},
                correcta: "a",
                tiempo: 60
            },
            {
                pregunta: "Según el artículo, ¿qué se puede concluir acerca del impacto de la personalización basada en IA en el desempeño académico de los estudiantes bolivianos?",
                opciones: {a: "La personalización mejora el rendimiento académico y reduce la deserción", b: "No tiene ningún impacto en el desempeño académico", c: "La personalización mejora las calificaciones solo en asignaturas no técnicas", d: "La personalización no tiene un efecto significativo en el rendimiento"},
                correcta: "a",
                tiempo: 60
            },
            {
                pregunta: "La lectura del texto permite identificar que la principal diferencia entre los tutores virtuales y la analítica de aprendizaje es que:",
                opciones: {a: "Los tutores virtuales ajustan las tareas a cada estudiante, mientras que la analítica predice riesgos", b: "La analítica predice el rendimiento, pero no personaliza", c: "Los tutores virtuales no utilizan datos", d: "No existe diferencia significativa entre ambos"},
                correcta: "a",
                tiempo: 60
            },
            {
                pregunta: "La lectura del texto permite identificar que la perspectiva futura del autor para la integración responsable de la IA en la educación boliviana es que:",
                opciones: {a: "La tecnología debe implementarse sin modificaciones", b: "El uso de IA dependerá solo de la infraestructura", c: "La IA será la solución a todos los problemas educativos", d: "La IA debe integrarse de manera responsable, invirtiendo en infraestructura y formación docente"},
                correcta: "d",
                tiempo: 60
            },
            {
                pregunta: "Del análisis presentado, se desprende que todas las metodologías basadas en IA descritas comparten como objetivo principal…",
                opciones: {a: "Aumentar la complejidad de las tareas", b: "Personalizar el aprendizaje según el estudiante", c: "Eliminar a los docentes", d: "Reducir el número de plataformas utilizadas"},
                correcta: "b",
                tiempo: 60
            },
            {
                pregunta: "La lectura del texto permite identificar que, si se amplía el uso de la analítica de aprendizaje basada en IA en los colegios bolivianos, ¿qué es probable que ocurra?",
                opciones: {a: "Aumentará la tasa de deserción escolar", b: "Disminuirá la tasa de deserción escolar", c: "No habrá impacto en la deserción", d: "Habrá más dificultades para implementar la IA"},
                correcta: "b",
                tiempo: 60
            },
            {
                pregunta: "De acuerdo con el texto, ¿qué conclusión puede extraerse sobre el papel de la pandemia de COVID-19 en la incorporación de la inteligencia artificial en la educación boliviana?",
                opciones: {a: "La pandemia ralentizó la integración de la IA", b: "La pandemia aceleró la digitalización de la educación", c: "La pandemia no tuvo ningún impacto en la educación digital", d: "La pandemia dificultó la integración de la IA en el país"},
                correcta: "b",
                tiempo: 60
            },
            {
                pregunta: "Según el artículo, ¿qué es probable que ocurra si el gobierno de Bolivia implementa programas de capacitación docente en alfabetización digital avanzada y, al mismo tiempo, amplía la conectividad de banda ancha en áreas rurales?",
                opciones: {a: "La brecha educativa se ampliará", b: "La deserción escolar aumentará", c: "Mejorará la equidad educativa", d: "No habrá ningún impacto significativo"},
                correcta: "c",
                tiempo: 60
            },
            {
                pregunta: "A partir de lo expuesto en el artículo, ¿cuál sería la consecuencia probable si un sistema de IA no ajusta la complejidad de los ejercicios al nivel de desarrollo próximo del estudiante?",
                opciones: {a: "El rendimiento de los estudiantes mejorará", b: "La carga cognitiva aumentará, reduciendo el rendimiento", c: "La complejidad no afecta al aprendizaje", d: "Los estudiantes aprenderán más rápido"},
                correcta: "b",
                tiempo: 60
            },
            {
                pregunta: "A partir de lo expuesto en el artículo, ¿qué tipo de evidencia adicional sería necesaria para reforzar la afirmación de que la IA reducirá las brechas sociales en la educación boliviana?",
                opciones: {a: "Estudios longitudinales que midan el desempeño y deserción en zonas rurales y urbanas", b: "Más estudios piloto en escuelas urbanas", c: "Pruebas de eficiencia de plataformas educativas", d: "Mayor inversión en tecnología de hardware"},
                correcta: "a",
                tiempo: 60
            }
            
        ]
    },
    {
        nombre:"TEMA 6: Salud y sostenibilidad",
        preguntas:[
            {
                pregunta: "¿Cómo define el artículo el concepto de 'vector'?",
                opciones: {a: "Son organismos que transmiten patógenos a los humanos", b: "Son elementos que ayudan al diagnóstico", c: "Son agentes que atacan el clima", d: "Son técnicas de control de enfermedades"},
                correcta: "a",
                tiempo: 60
            },
            {
                pregunta: "Según el artículo, ¿cuáles son los problemas climáticos que favorecen el aumento de enfermedades transmitidas por vectores en Bolivia?",
                opciones: {a: "Sequías extremas, aumento de la temperatura y desertificación", b: "Aumento de la temperatura, variabilidad de precipitaciones e inundaciones", c: "Bajas temperaturas y reducción de lluvias", d: "Desgaste del ozono y aumento de radiación solar"},
                correcta: "b",
                tiempo: 60
            },
            {
                pregunta: "¿Qué medida adoptada en Santa Cruz redujo en un 30% la densidad de larvas de Aedes en barrios piloto?",
                opciones: {a: "Uso de fumos preventivos", b: "Incorporación de techos verdes y superficies permeables", c: "Construcción de presas para controlar el agua", d: "Instalación de repelentes automáticos"},
                correcta: "b",
                tiempo: 60
            },
            {
                pregunta: "¿Cuáles son las enfermedades transmitidas por vectores que han aumentado en Bolivia según el artículo?",
                opciones: {a: "Dengue, malaria y fiebre amarilla", b: "Dengue, malaria y enfermedad de Chagas", c: "Chagas, tuberculosis y cólera", d: "Fiebre tifoidea, malaria y dengue"},
                correcta: "b",
                tiempo: 60
            },
            {
                pregunta: "¿Qué implicaciones económicas se mencionan al implementar estrategias sostenibles de mitigación y adaptación en Bolivia?",
                opciones: {a: "Aumento de los gastos en salud pública", b: "Reducción de gastos en atención sanitaria, mejora en seguridad energética y ahorro en servicios ecosistémicos", c: "Desempleo en el sector agrícola", d: "Ningún impacto económico relevante"},
                correcta: "b",
                tiempo: 60
            },
            {
                pregunta: "¿Qué conclusión se puede extraer sobre el papel de los diferentes actores (gobierno, organizaciones internacionales y comunidad local) en la mitigación de enfermedades transmitidas por vectores en Bolivia?",
                opciones: {a: "Solo el gobierno es responsable de las soluciones", b: "Los actores deben trabajar de manera independiente", c: "Es necesaria la colaboración entre gobierno, organismos internacionales y comunidades locales", d: "Las ONGs no tienen un papel relevante"},
                correcta: "c",
                tiempo: 60
            },
            {
                pregunta: "¿Qué es probable que ocurra en los próximos cinco años en las ciudades de los valles de Bolivia si no se implementan medidas de gestión integral del agua?",
                opciones: {a: "El dengue se reducirá", b: "El dengue aumentará notablemente", c: "Malaria disminuirá", d: "No habrá impacto significativo"},
                correcta: "b",
                tiempo: 60
            },
            {
                pregunta: "¿Qué efecto es más probable que ocurra si se amplía la iniciativa 'Ciudades Verdes' a otras áreas urbanas de Bolivia?",
                opciones: {a: "Aumento de la densidad larval", b: "Reducción en la transmisión de dengue", c: "Desaparición de criaderos de mosquitos", d: "Aumento de la contaminación urbana"},
                correcta: "b",
                tiempo: 60
            },
            {
                pregunta: "¿Qué consecuencia se puede deducir del aumento de la temperatura media y de la mayor variabilidad de precipitaciones sobre la malaria en Bolivia?",
                opciones: {a: "La malaria desaparecerá", b: "La malaria aumentará, especialmente en áreas previamente libres", c: "La malaria se mantendrá estable", d: "La malaria disminuirá debido a la sequía"},
                correcta: "b",
                tiempo: 60
            },
            {
                pregunta: "¿Qué efecto tiene el uso de herramientas de modelado climático y ecológico en la expansión de vectores?",
                opciones: {a: "Permite predecir áreas de alto riesgo y planificar respuestas más tempranas", b: "Hace que los vectores desaparezcan", c: "Solo se enfoca en áreas urbanas", d: "No tiene ningún impacto en el control de vectores"},
                correcta: "a",
                tiempo: 60
            },
            {
                pregunta: "¿Qué conclusión se puede extraer respecto al papel de los diferentes actores en la mitigación de enfermedades transmitidas por vectores en Bolivia?",
                opciones: {a: "Solo el gobierno debe tomar decisiones", b: "La gestión integral del agua debe ser liderada por las ONGs", c: "La coordinación entre el gobierno, organismos internacionales y comunidades locales es esencial", d: "Las políticas públicas no son necesarias en la mitigación"},
                correcta: "c",
                tiempo: 60
            },
            {
                pregunta: "¿Qué implicación tiene la intensificación de la planificación urbana resiliente en la reducción del riesgo de dengue?",
                opciones: {a: "No tiene impacto en la reducción de dengue", b: "Disminuye la densidad de larvas de Aedes, lo que reduce la transmisión del dengue", c: "Aumenta la proliferación de criaderos", d: "Elimina la necesidad de gestión de agua"},
                correcta: "b",
                tiempo: 60
            },
            {
                pregunta: "¿Cuál es la conclusión lógica sobre el papel de las políticas de energía renovable en la reducción de la vulnerabilidad de Bolivia a enfermedades transmitidas por vectores?",
                opciones: {a: "Las políticas de energía renovable no afectan la vulnerabilidad", b: "La transición a energías renovables mejora la seguridad energética y reduce la vulnerabilidad a enfermedades", c: "Las energías renovables solo son importantes para el desarrollo económico", d: "La transición a energías renovables aumenta la temperatura global"},
                correcta: "b",
                tiempo: 60
            },
            {
                pregunta: "¿Qué mensaje central implícito respecto a los actores involucrados se menciona en el artículo para mitigar las enfermedades transmitidas por vectores?",
                opciones: {a: "Solo las autoridades sanitarias deben involucrarse", b: "Los actores internacionales no son necesarios", c: "Se requiere un enfoque interdisciplinario que combine salud, medio ambiente y desarrollo socioeconómico", d: "La solución debe provenir únicamente de la comunidad local"},
                correcta: "c",
                tiempo: 60
            },
            {
                pregunta: "¿Qué relación existe entre el cambio climático y la propagación de enfermedades transmitidas por vectores en Bolivia?",
                opciones: {a: "El cambio climático reduce la propagación de enfermedades", b: "El cambio climático aumenta las condiciones propicias para los vectores", c: "No hay relación significativa", d: "El cambio climático tiene un impacto negativo solo en las zonas urbanas"},
                correcta: "b",
                tiempo: 60
            },
            {
                pregunta: "¿Qué consecuencia social se deriva del vínculo entre el cambio climático y las enfermedades transmitidas por vectores en Bolivia?",
                opciones: {a: "Reducción de la vulnerabilidad en las comunidades rurales", b: "Aumento de las desigualdades en salud, afectando a las comunidades vulnerables", c: "Mejoras en la infraestructura sanitaria", d: "Disminución de los casos de malaria y dengue"},
                correcta: "b",
                tiempo: 60
            },
            {
                pregunta: "¿Cómo afecta el aumento de la temperatura media a los ciclos de transmisión del dengue y la malaria en Bolivia?",
                opciones: {a: "Hace que el ciclo del dengue sea más lento y extiende la temporada de malaria", b: "Acelera el ciclo de transmisión del dengue y extiende la temporada de malaria", c: "No tiene impacto en los ciclos de transmisión", d: "Hace que ambos ciclos se detengan"},
                correcta: "b",
                tiempo: 60
            },
            {
                pregunta: "¿Qué estrategia se considera más efectiva para reducir el riesgo de enfermedades transmitidas por vectores en Bolivia?",
                opciones: {a: "La gestión integral del agua", b: "La educación comunitaria", c: "La planificación urbana resiliente", d: "Una combinación de gestión del agua, planificación urbana, educación comunitaria y modelado predictivo"},
                correcta: "d",
                tiempo: 60
            },
            {
                pregunta: "¿Cuál es la implicación económica más probable de la adopción generalizada de energías renovables para el control de enfermedades transmitidas por vectores en Bolivia?",
                opciones: {a: "Aumento de los gastos en salud pública", b: "Reducción de la incidencia de enfermedades y menores costos en salud pública", c: "No tiene impacto en los costos de salud", d: "Mayor dependencia de recursos energéticos importados"},
                correcta: "b",
                tiempo: 60
            },
            {
                pregunta: "¿Qué efecto tendría la implementación de sistemas de captación de agua de lluvia con cubiertas selladas en zonas urbanas de la Amazonía boliviana?",
                opciones: {a: "Aumentaría la proliferación de criaderos de mosquitos", b: "Disminuiría la proliferación de criaderos de mosquitos y reduciría el riesgo de enfermedades", c: "No tendría ningún efecto en los vectores", d: "Generaría más inundaciones en la ciudad"},
                correcta: "b",
                tiempo: 60
            },
            {
                pregunta: "¿Cómo se describe el rol de las comunidades locales en el control de vectores?",
                opciones: {a: "Son pasivas y dependen del gobierno", b: "Son activas, contribuyendo con medidas preventivas y el seguimiento de las condiciones del entorno", c: "No tienen un rol relevante en la gestión de vectores", d: "Solo se encargan de la vigilancia sanitaria"},
                correcta: "b",
                tiempo: 60
            },
            {
                pregunta: "¿Qué técnica se utiliza para monitorear las condiciones de salud pública relacionadas con vectores en áreas urbanas?",
                opciones: {a: "Simulaciones de modelos climáticos", b: "Técnicas de control biológico de vectores", c: "Redes de monitoreo de densidad de mosquitos y larvas", d: "Estudios de percepción comunitaria"},
                correcta: "c",
                tiempo: 60
            },
            {
                pregunta: "¿Cómo contribuye la planificación urbana sostenible a la reducción de enfermedades transmitidas por vectores?",
                opciones: {a: "Al aumentar la superficie impermeable", b: "Al integrar medidas que limitan la acumulación de aguas estancadas y mejoran el drenaje urbano", c: "Al reducir la cantidad de áreas verdes", d: "Al construir más edificios de gran altura"},
                correcta: "b",
                tiempo: 60
            },
            {
                pregunta: "¿Qué factor ambiental es clave para el control de vectores en áreas urbanas de Bolivia?",
                opciones: {a: "La temperatura constante", b: "La humedad y el agua estancada", c: "La reducción de árboles y vegetación", d: "La contaminación del aire"},
                correcta: "b",
                tiempo: 60
            },
            {
                pregunta: "¿Qué rol tienen las políticas de salud pública en el control de enfermedades transmitidas por vectores en Bolivia?",
                opciones: {a: "Ningún rol, ya que las enfermedades no se relacionan con vectores", b: "Son fundamentales para desarrollar estrategias de prevención y control", c: "Solo están orientadas a mejorar la infraestructura sanitaria", d: "Su función es secundaria frente al cambio climático"},
                correcta: "b",
                tiempo: 60
            },
            {
                pregunta: "¿Qué resultado se espera a largo plazo con la implementación de medidas para reducir el riesgo de enfermedades transmitidas por vectores en Bolivia?",
                opciones: {a: "Desaparición de todas las enfermedades transmitidas por vectores", b: "Disminución sustancial de los casos de dengue, malaria y Chagas", c: "Aumento de la prevalencia de enfermedades", d: "Mayor dependencia de la ayuda internacional"},
                correcta: "b",
                tiempo: 60
            }
        ]
    },
    {
        nombre:"TEMA 7: Economía circular y gestión de residuos",
        preguntas:[
            {
                pregunta: "¿Cómo define el texto los instrumentos financieros recomendados para estimular la economía circular en Bolivia?",
                opciones: {a: "Fondos de garantía, líneas de crédito verde y microcréditos", b: "Subsidios directos, micro bonos y esquemas de pago por servicios ambientales", c: "Fondos de garantía, líneas de crédito verde y esquemas de pago por servicios ambientales", d: "Incentivos fiscales y micro bonos"},
                correcta: "c",
                tiempo: 60
            },
            {
                pregunta: "¿Cómo define la economía circular y qué consecuencias sociales se asocian a su adopción en Bolivia?",
                opciones: {a: "Una economía que se basa en la producción masiva y desechos controlados", b: "Un modelo que cierra los ciclos de materiales y genera oportunidades económicas para microempresas y jóvenes", c: "Una economía centrada en la extracción de recursos y la eliminación de desechos", d: "Un paradigma para reducir el consumo sin considerar el reciclaje"},
                correcta: "b",
                tiempo: 60
            },
            {
                pregunta: "¿Qué metodología de reciclaje de plásticos se describe como la alternativa más viable a nivel local en Bolivia?",
                opciones: {a: "Reciclaje químico", b: "Reciclaje mecánico", c: "Valorización energética", d: "Digestión anaeróbica"},
                correcta: "b",
                tiempo: 60
            },
            {
                pregunta: "¿Cuál es la implicación económica directa que se menciona respecto a la empresa ReciclArte en La Paz?",
                opciones: {a: "Generó ingresos de 15000 USD en 2022", b: "Generó ingresos de 22000 USD en 2022", c: "Aumentó su producción en un 8%", d: "Redujo sus costos operativos en un 12%"},
                correcta: "b",
                tiempo: 60
            },
            {
                pregunta: "El artículo señala que el proyecto piloto de digestores anaeróbicos en Cochabamba generó, por cada kilogramo de residuos orgánicos, ¿cuántos metros cúbicos de metano?",
                opciones: {a: "0,35 m³", b: "0,45 m³", c: "0,55 m³", d: "1 m³"},
                correcta: "b",
                tiempo: 60
            },
            {
                pregunta: "¿Qué característica diferencia la tasa de reciclaje de PET en Santa Cruz de la tasa de recolección formal de residuos sólidos en Bolivia?",
                opciones: {a: "La tasa de reciclaje de PET en Santa Cruz es mayor que la tasa de recolección formal nacional", b: "La tasa de reciclaje de PET en Santa Cruz es inferior a la tasa de recolección formal nacional", c: "Ambas tasas son iguales", d: "La tasa de reciclaje de PET en Santa Cruz es el doble de la tasa nacional"},
                correcta: "b",
                tiempo: 60
            },
            {
                pregunta: "¿Cuál es el objetivo principal de los micro bonos ofrecidos por ONG como EcoBol al incentivar la separación de papel y cartón en los Yungas?",
                opciones: {a: "Aumentar la tasa de reciclaje de plásticos", b: "Fomentar la participación ciudadana en la separación de residuos", c: "Impulsar la creación de grandes empresas recicladoras", d: "Reducir el costo de los servicios municipales"},
                correcta: "b",
                tiempo: 60
            },
            {
                pregunta: "¿Qué consecuencia se puede deducir si el Estado fortalece la aplicación de la Ley 164 mediante la creación de fondos de garantía para micro empresas de reciclaje?",
                opciones: {a: "Aumento de la informalidad en el reciclaje", b: "Mayor recolección de PET y aumento en la tasa de reciclaje", c: "Reducción de la producción de residuos en vertederos", d: "Mejoras en la infraestructura urbana"},
                correcta: "b",
                tiempo: 60
            },
            {
                pregunta: "¿Qué efecto indirecto es probable que genere la expansión de los proyectos piloto de digestores anaeróbicos en zonas rurales sobre la dinámica de la economía circular en Bolivia?",
                opciones: {a: "Mejora la eficiencia de la recolección de residuos", b: "Generación de biogás, lo que fomenta la autosuficiencia energética y mejora la eficiencia de reciclaje", c: "Aumento de la contaminación del aire", d: "Disminución de residuos orgánicos enviados a vertederos sin ningún beneficio energético"},
                correcta: "b",
                tiempo: 60
            },
            {
                pregunta: "¿Qué conclusión general puede inferirse sobre la relación entre la proporción de recolección formal de residuos y la eficiencia de reciclaje en Bolivia?",
                opciones: {a: "Una mayor cobertura de recolección formal no tiene impacto en la eficiencia del reciclaje", b: "Una mayor recolección formal facilita la segregación y mejora la eficiencia del reciclaje", c: "La recolección informal es más eficiente que la formal", d: "La eficiencia del reciclaje depende solo de la tecnología utilizada"},
                correcta: "b",
                tiempo: 60
            },
            {
                pregunta: "¿Qué efecto probable tendría en la eficiencia del reciclaje (R) la ampliación de programas de educación ambiental liderados por ONG en comunidades rurales?",
                opciones: {a: "Reducción de la tasa de reciclaje", b: "Mejora de la segregación de residuos y aumento de la eficiencia de reciclaje", c: "Aumento de residuos no reciclables", d: "Reducción de la participación comunitaria en la gestión de residuos"},
                correcta: "b",
                tiempo: 60
            },
            {
                pregunta: "¿Cuál es la idea central que el autor comunica respecto al papel de la economía circular en la gestión de residuos en Bolivia?",
                opciones: {a: "Es un modelo que no requiere de la participación del gobierno", b: "Depende de la integración de políticas públicas, tecnología e involucramiento comunitario", c: "Es un proceso que solo debe ser llevado a cabo por grandes empresas", d: "La economía circular solo puede aplicarse en sectores urbanos"},
                correcta: "b",
                tiempo: 60
            },
            {
                pregunta: "¿Qué diferencia esencial se puede establecer entre la contribución del Estado y la de las ONG al impulso de la economía circular en Bolivia?",
                opciones: {a: "El Estado se enfoca en la educación, mientras que las ONG proporcionan marcos legales", b: "El Estado establece la infraestructura normativa, mientras que las ONG trabajan en la sensibilización y educación comunitaria", c: "El Estado actúa a nivel local, mientras que las ONG actúan a nivel nacional", d: "El Estado provee subsidios, mientras que las ONG financian microempresas"},
                correcta: "b",
                tiempo: 60
            },
            {
                pregunta: "¿Qué es indispensable para que Bolivia logre una transición efectiva hacia la economía circular?",
                opciones: {a: "Mejorar las tecnologías de reciclaje exclusivamente", b: "Establecer políticas públicas claras, incorporar tecnologías apropiadas y promover la participación comunitaria", c: "Invertir solo en infraestructura de reciclaje", d: "Reducir la participación del sector privado"},
                correcta: "b",
                tiempo: 60
            },
            {
                pregunta: "¿Qué diferencia existe entre la reciclación mecánica de PET y la valorización energética mediante digestores anaeróbicos en cuanto a complejidad de inversión y contexto de aplicación?",
                opciones: {a: "La reciclación mecánica es más costosa que la valorización energética", b: "La reciclación mecánica requiere inversiones moderadas y es adecuada para pequeñas empresas, mientras que los digestores son más adecuados para zonas rurales", c: "Ambos procesos requieren inversiones altas y son adecuados para grandes empresas", d: "Ambos procesos son igualmente viables en zonas rurales y urbanas"},
                correcta: "b",
                tiempo: 60
            },
            {
                pregunta: "¿Cuál es la tendencia dominante en la gestión de residuos en Bolivia?",
                opciones: {a: "El enfoque solo en la recolección de residuos sin procesarlos", b: "Una transición hacia la economía circular mediante políticas públicas, tecnología adecuada y participación social", c: "La implementación exclusiva de políticas normativas sin involucrar a la comunidad", d: "El aumento de la producción de residuos sin medidas de reciclaje"},
                correcta: "b",
                tiempo: 60
            },
            {
                pregunta: "¿Qué consecuencia puede inferirse si la tasa de segregación de residuos orgánicos en origen se incrementa significativamente en comunidades rurales?",
                opciones: {a: "Aumento de la contaminación en vertederos", b: "Generación de más metano mediante digestores anaeróbicos, mejorando la autosuficiencia energética de los hogares", c: "Reducción en la cantidad de residuos reciclados", d: "Disminución de residuos orgánicos en la economía circular"},
                correcta: "b",
                tiempo: 60
            },
            {
                pregunta: "¿Qué mensaje implícito transmite el autor respecto a las soluciones para la gestión de residuos en Bolivia?",
                opciones: {a: "Solo las políticas públicas son necesarias para mejorar la gestión de residuos", b: "La economía circular requiere un enfoque integrado de políticas públicas, tecnologías adecuadas y participación comunitaria", c: "El reciclaje no es una solución viable en Bolivia", d: "Las ONG son la única solución para la gestión de residuos"},
                correcta: "b",
                tiempo: 60
            },
            {
                pregunta: "¿Qué efecto tendría la ampliación de los programas de educación ambiental orientados a la separación en origen en las comunidades rurales?",
                opciones: {a: "Aumento de la contaminación en los vertederos", b: "Mejor separación de residuos y aumento en la eficiencia del reciclaje", c: "Reducción de la participación en los proyectos de reciclaje", d: "Disminución de la efectividad de los proyectos pilotos de reciclaje"},
                correcta: "b",
                tiempo: 60
            },
            {
                pregunta: "¿Qué comparaciones entre dos propuestas de futuro reflejan mejor el efecto inmediato sobre la eficiencia del reciclaje?",
                opciones: {a: "Fortalecer la legislación con sanciones es más efectivo que los instrumentos financieros", b: "Los instrumentos financieros permiten mejorar rápidamente la eficiencia del reciclaje, mientras que las sanciones requieren más tiempo", c: "Los incentivos fiscales son más eficaces que los fondos de garantía", d: "El fortalecimiento de la infraestructura es más efectivo que la financiación directa"},
                correcta: "b",
                tiempo: 60
            },
            {
                pregunta: "¿Por qué la información sobre la generación de biogás a partir de residuos orgánicos resulta más relevante para las microempresas en zonas rurales que los datos de reciclaje de PET en Santa Cruz?",
                opciones: {a: "Porque el biogás puede usarse para generar electricidad en comunidades rurales, mientras que el reciclaje de PET se centra en problemas urbanos", b: "Porque el reciclaje de PET es más sencillo y rápido que generar biogás", c: "Porque el PET puede ser reciclado fácilmente en cualquier lugar, mientras que los digestores anaeróbicos requieren inversiones altas", d: "Porque el PET se usa solo en Santa Cruz, mientras que los digestores anaeróbicos son nacionales"},
                correcta: "a",
                tiempo: 60
            },
            {
                pregunta: "¿Cuál es la limitación no abordada por el autor al proponer incentivos financieros y modelos de negocio para la economía circular en Bolivia?",
                opciones: {a: "El impacto ambiental de los incentivos", b: "La dimensión de género y cómo la desigualdad de género podría limitar el acceso de las mujeres", c: "La falta de infraestructura en áreas rurales", d: "El problema de la informalidad en el reciclaje"},
                correcta: "b",
                tiempo: 60
            },
            {
                pregunta: "¿Por qué la eficiencia del reciclaje (R) es relevante para diseñar una política de incentivos financieros dirigida a micro empresas de reciclaje en Bolivia?",
                opciones: {a: "Porque permite evaluar el grado de cumplimiento de la normativa", b: "Porque permite medir cuán cerrados están los ciclos de materiales, ayudando a estructurar incentivos financieros", c: "Porque mide la cantidad de residuos generados", d: "Porque determina la rentabilidad de las microempresas de reciclaje"},
                correcta: "b",
                tiempo: 60
            },
            {
                pregunta: "¿Qué sesgo ambiental limita la representatividad de los resultados presentados sobre la eficiencia de la economía circular en Bolivia?",
                opciones: {a: "El artículo no considera el impacto de la recolección y el transporte en las emisiones de CO2", b: "El artículo sobrestima la efectividad de las políticas públicas", c: "El artículo no compara las ciudades grandes con las zonas rurales", d: "El artículo no incluye datos de reciclaje de PET fuera de Santa Cruz"},
                correcta: "a",
                tiempo: 60
            },
            {
                pregunta: "¿Qué valida el argumento del autor sobre la importancia de los indicadores de desempeño, como la tasa de reciclaje (R), para mejorar la eficiencia del reciclaje en Bolivia?",
                opciones: {a: "Los datos de PET y el caso de ReciclArte, que muestran mejoras tangibles en la recuperación de materiales y resultados económicos", b: "La implementación exclusiva de programas educativos en escuelas", c: "El uso de sanciones como estrategia principal", d: "El enfoque en la reducción de residuos sin considerar el reciclaje"},
                correcta: "a",
                tiempo: 60
            },
            {
                pregunta: "¿Por qué es relevante la incorporación de indicadores de desempeño de reciclaje (R) para la formulación de políticas públicas en los municipios de Bolivia?",
                opciones: {a: "Porque permiten evaluar la eficacia de los programas y orientar la asignación de fondos", b: "Porque sirven solo para sancionar a las empresas que no reciclan", c: "Porque generan incentivos solo para las grandes empresas", d: "Porque no influyen en la eficiencia del reciclaje"},
                correcta: "a",
                tiempo: 60
            },
            {
                pregunta: "¿Qué sesgo limita la representatividad de los resultados sobre la eficiencia de la economía circular en Bolivia?",
                opciones: {a: "El artículo no aborda la implementación de la economía circular en áreas rurales", b: "El artículo no incluye datos de reciclaje de PET fuera de Santa Cruz", c: "El artículo no menciona la necesidad de cooperación internacional", d: "El artículo no discute el impacto del cambio climático en el reciclaje"},
                correcta: "b",
                tiempo: 60
            }
        ]
    },
    {
        nombre:"TEMA 8: Resistencia a antibióticos",
        preguntas:[
           {
                pregunta: "¿Cuáles son las cuatro áreas de acción emergentes propuestas para enfrentar la resistencia a los antibióticos en Bolivia?",
                opciones: {a: "Fortalecimiento de la política sanitaria, Programas de educación comunitaria, Innovación biotecnológica, Enfoque One Health", b: "Aumento de los diagnósticos rápidos, Fortalecimiento de la infraestructura, Campañas de concientización, Uso de antibióticos restrictivos", c: "Uso responsable de antibióticos, Diagnósticos más rápidos, Concientización comunitaria, Nuevas terapias antivirales", d: "Monitoreo ambiental, Uso de antibióticos restringidos, Formación de médicos, Mejoramiento de hospitales"},
                correcta: "a",
                tiempo: 60
            },
            {
                pregunta: "¿Cuál es el primer paso descrito en la iniciativa ambiental de One Health para controlar la resistencia a los antibióticos en Bolivia?",
                opciones: {a: "Implementar medidas educativas en comunidades rurales", b: "Lanzar proyectos de vigilancia de resistencia en fuentes de agua y en granjas avícolas", c: "Desarrollar terapias con bacteriófagos", d: "Crear un registro nacional de resistencia bacteriana"},
                correcta: "b",
                tiempo: 60
            },
            {
                pregunta: "¿Cuál es el orden cronológico correcto de las acciones realizadas para enfrentar la resistencia a los antibióticos en Bolivia?",
                opciones: {a: "Gobierno aprueba la ley, ONG realizan campañas, Hospital introduce diagnósticos rápidos, Instituto Nacional de Salud realiza ensayos clínicos", b: "Hospital introduce diagnósticos rápidos, Gobierno aprueba la ley, ONG realizan campañas, Instituto Nacional de Salud realiza ensayos clínicos", c: "ONG realizan campañas, Gobierno aprueba la ley, Instituto Nacional de Salud realiza ensayos clínicos, Hospital introduce diagnósticos rápidos", d: "Gobierno aprueba la ley, Instituto Nacional de Salud realiza ensayos clínicos, ONG realizan campañas, Hospital introduce diagnósticos rápidos"},
                correcta: "a",
                tiempo: 60
            },
            {
                pregunta: "¿Cuál fue la característica principal de los antibióticos desde su introducción en la década de 1940?",
                opciones: {a: "Causaron una gran mortalidad", b: "Revolucionaron el tratamiento de infecciones, reduciendo drásticamente la mortalidad infantil", c: "Se usaron solo en tratamientos experimentales", d: "No tuvieron impacto en la salud mundial"},
                correcta: "b",
                tiempo: 60
            },
            {
                pregunta: "¿Cuáles de las siguientes medidas forman parte de la Ley de Uso Responsable de Antibióticos aprobada en 2022 en Bolivia?",
                opciones: {a: "Obliga a los farmacéuticos a exigir receta médica, limita su uso en agropecuaria, y crea un registro nacional de resistencia bacteriana", b: "Prohíbe el uso de antibióticos en la agricultura, obliga a las farmacias a dar antibióticos solo con receta", c: "Introduce diagnósticos rápidos en hospitales y crea campañas educativas", d: "Prohíbe la automedicación y establece sanciones para las empresas de antibióticos"},
                correcta: "a",
                tiempo: 60
            },
            {
                pregunta: "¿A qué se refiere el 28% de los ingresos hospitalarios por infecciones respiratorias agudas asociados a bacterias resistentes a al menos un antibiótico de primera línea?",
                opciones: {a: "A la cantidad de antibióticos vendidos sin receta", b: "A la proporción de pacientes hospitalizados por infecciones respiratorias que tienen bacterias resistentes", c: "A la reducción de infecciones respiratorias en el país", d: "A la proporción de enfermedades tratadas con antibióticos de segunda línea"},
                correcta: "b",
                tiempo: 60
            },
            {
                pregunta: "¿Cómo define el artículo la resistencia a los antibióticos?",
                opciones: {a: "La resistencia es cuando una bacteria se vuelve más débil frente a un antibiótico", b: "La resistencia surge cuando una bacteria adquiere la habilidad de sobrevivir a antibióticos que antes la mataban", c: "La resistencia se refiere a la desaparición de las bacterias resistentes", d: "La resistencia ocurre cuando un antibiótico ya no tiene efectos secundarios"},
                correcta: "b",
                tiempo: 60
            },
            {
                pregunta: "¿Cuál fue el objetivo principal de la Ley de Uso Responsable de Antibióticos aprobada en 2022?",
                opciones: {a: "Fomentar el uso de antibióticos en la agricultura", b: "Reforzar el control sobre la prescripción y uso de antibióticos para evitar la resistencia", c: "Aumentar el consumo de antibióticos en la población", d: "Establecer una campaña de concientización en hospitales"},
                correcta: "b",
                tiempo: 60
            },
            {
                pregunta: "¿Qué característica comparten los diagnósticos rápidos basados en PCR y la terapia con bacteriófagos en la lucha contra la resistencia a los antibióticos?",
                opciones: {a: "Ambos tratamientos son muy costosos", b: "Ambos permiten tratamientos más dirigidos y específicos, reduciendo el uso de antibióticos de amplio espectro", c: "Ambos tienen efectos secundarios graves", d: "Ambos requieren un largo período de espera para resultados"},
                correcta: "b",
                tiempo: 60
            },
            {
                pregunta: "¿Qué efecto se puede inferir que tendrá la expansión nacional de los diagnósticos rápidos basados en PCR sobre la propagación de bacterias resistentes?",
                opciones: {a: "Aumentará el uso de antibióticos", b: "Disminuirá la presión selectiva sobre las bacterias, reduciendo la propagación de la resistencia", c: "No tendrá ningún efecto en la resistencia", d: "Causará un aumento de la resistencia debido al uso erróneo de antibióticos"},
                correcta: "b",
                tiempo: 60
            },
            {
                pregunta: "¿Qué consecuencia se puede deducir de la introducción masiva de antibióticos en la década de 1940 sobre la situación actual de resistencia en Bolivia?",
                opciones: {a: "No tiene impacto en la resistencia actual", b: "La introducción aumentó la presión selectiva para bacterias resistentes", c: "La resistencia a los antibióticos desapareció debido a las nuevas terapias", d: "La resistencia a los antibióticos ha disminuido significativamente desde entonces"},
                correcta: "b",
                tiempo: 60
            },
            {
                pregunta: "¿Cuál es la conclusión más lógica respecto al enfoque más prometedor para contener la resistencia a los antibióticos en Bolivia?",
                opciones: {a: "Solo las campañas educativas son suficientes", b: "Una combinación de la Ley de Uso Responsable, programas educativos y tecnologías emergentes es la más prometedora", c: "La implementación de diagnósticos rápidos será la única solución", d: "El uso de antibióticos restringidos será suficiente"},
                correcta: "b",
                tiempo: 60
            },
            {
                pregunta: "¿Cómo se complementan las contribuciones del Gobierno boliviano y las organizaciones no gubernamentales en la lucha contra la resistencia a los antibióticos?",
                opciones: {a: "Ambos enfoques se solapan y no aportan nada nuevo", b: "El Gobierno establece normas y el control de la resistencia, mientras que las ONG realizan campañas educativas", c: "El Gobierno solo realiza campañas educativas y las ONG implementan la legislación", d: "Ambos actores hacen lo mismo, por lo que no hay diferencias en sus contribuciones"},
                correcta: "b",
                tiempo: 60
            },
            {
                pregunta: "¿Qué consecuencia se puede deducir si se amplía el uso de diagnósticos rápidos basados en PCR en los hospitales bolivianos?",
                opciones: {a: "Aumentará el uso de antibióticos de amplio espectro", b: "Se reducirá la prescripción empírica y disminuirá la propagación de cepas resistentes", c: "No tendrá ningún impacto en la resistencia", d: "Causará un incremento de infecciones resistentes debido a un uso incorrecto"},
                correcta: "b",
                tiempo: 60
            },
            {
                pregunta: "¿Cuál es la principal limitación de la terapia con bacteriófagos en Bolivia?",
                opciones: {a: "No tiene efectos secundarios", b: "Está en fase experimental y no disponible a nivel nacional", c: "Es más costosa que los antibióticos convencionales", d: "Es fácilmente accesible en todas las clínicas"},
                correcta: "b",
                tiempo: 60
            },
            {
                pregunta: "¿Qué conclusión se puede deducir respecto al papel del monitoreo ambiental en la lucha contra la resistencia a los antibióticos?",
                opciones: {a: "No es necesario monitorear los residuos de antibióticos en el agua", b: "Es una medida preventiva esencial para prevenir la propagación de genes de resistencia en la cadena alimentaria", c: "Solo se necesita monitorear las granjas avícolas", d: "El monitoreo ambiental es innecesario si ya se controla el uso en hospitales"},
                correcta: "b",
                tiempo: 60
            },
            {
                pregunta: "¿Cuál es el principio general que subyace a las soluciones emergentes contra la resistencia a los antibióticos en Bolivia?",
                opciones: {a: "Uso exclusivo de antibióticos de amplio espectro", b: "Una combinación de regulación, educación y tecnologías emergentes", c: "Reemplazo de antibióticos por otros tratamientos no farmacológicos", d: "El uso irrestricto de antibióticos en la agropecuaria"},
                correcta: "b",
                tiempo: 60
            },
            {
                pregunta: "¿Qué tan válido es el argumento de que la Ley de Uso Responsable de Antibióticos reducirá a la mitad los ingresos hospitalarios por infecciones respiratorias asociadas a bacterias resistentes?",
                opciones: {a: "Es válido, ya que la ley tiene un impacto inmediato", b: "Es inválido, ya que no se mencionan datos que respalden esa afirmación en el texto", c: "Es válido, ya que se mencionan estadísticas claras que respaldan la reducción", d: "Es inválido, ya que no se espera ningún impacto significativo"},
                correcta: "b",
                tiempo: 60
            },
            {
                pregunta: "¿Qué implicación social sobre la resistencia a los antibióticos en Bolivia surge de la combinación de la automedicación y la falta de diagnóstico rápido?",
                opciones: {a: "Aumenta la eficiencia del sistema de salud", b: "Favorece la propagación de infecciones resistentes y aumenta la desigualdad en salud", c: "Mejora la accesibilidad a los antibióticos", d: "No tiene impacto significativo en la población"},
                correcta: "b",
                tiempo: 60
            },
            {
                pregunta: "¿Por qué la afirmación de que los programas de educación comunitaria son suficientes para resolver el problema de la resistencia carece de validez?",
                opciones: {a: "Porque la educación no tiene impacto en la compra de antibióticos", b: "Porque la resistencia es un problema multifactorial que requiere una combinación de soluciones", c: "Porque la educación es innecesaria cuando ya hay leyes sobre el uso de antibióticos", d: "Porque las campañas educativas nunca son efectivas en la reducción de infecciones resistentes"},
                correcta: "b",
                tiempo: 60
            },
            {
                pregunta: "¿Qué tan válido es el argumento de que las campañas de educación sanitaria en escuelas son suficientes para resolver el problema de la resistencia a los antibióticos?",
                opciones: {a: "Es completamente válido, ya que las campañas educativas siempre son efectivas", b: "Es débil, ya que se necesita un enfoque integral que incluya políticas, tecnología y educación", c: "Es completamente inválido, ya que las campañas no son efectivas", d: "Es válido, pero solo en áreas rurales"},
                correcta: "b",
                tiempo: 60
            },
            {
                pregunta: "¿Qué tan válido es el argumento de que la terapia basada en bacteriófagos es una solución definitiva para la resistencia a los antibióticos en Bolivia?",
                opciones: {a: "Es completamente válido, ya que los resultados son definitivos", b: "Es válido, pero los resultados aún son preliminares y se necesita más investigación", c: "Es inválido, ya que la terapia nunca ha demostrado eficacia", d: "Es completamente inválido porque la tecnología no existe"},
                correcta: "b",
                tiempo: 60
            }
        ]
    },
    {    nombre: "TEMA 9: Retroceso de glaciares en el Altiplano boliviano",
        preguntas: [
            {
                pregunta: "¿Cuál es el orden correcto de los actores involucrados, desde la fase de monitoreo de los glaciares hasta la de reforestación de zonas altoandinas?",
                opciones: {a: "Monitoreo de glaciares, Programa de Gestión de Cuencas, Reforestación", b: "Reforestación, Monitoreo de glaciares, Programa de Gestión de Cuencas", c: "Programa de Gestión de Cuencas, Reforestación, Monitoreo de glaciares", d: "Monitoreo de glaciares, Reforestación, Programa de Gestión de Cuencas"},
                correcta: "a",
                tiempo: 60
            },
            {
                pregunta: "¿En qué orden se describen las acciones que contribuyen a mitigar las implicaciones económicas del retroceso glaciar en la cuenca del Río Desaguadero?",
                opciones: {a: "Planificación integrada de cuencas, Reforestación, Mitigación del cambio climático", b: "Reforestación, Planificación integrada de cuencas, Mitigación del cambio climático", c: "Planificación integrada de cuencas, Mitigación del cambio climático, Reforestación", d: "Mitigación del cambio climático, Reforestación, Planificación integrada de cuencas"},
                correcta: "a",
                tiempo: 60
            },
            {
                pregunta: "¿Cuáles son los dos factores principales que han intensificado la fusión glaciar en el Altiplano boliviano?",
                opciones: {a: "Disminución de la humedad atmosférica y aumento de la temperatura", b: "Aumento de la temperatura del aire y disminución de la nevada", c: "Cambios sísmicos y aumento de la actividad minera", d: "Aumento de las lluvias y reducción del consumo de agua"},
                correcta: "b",
                tiempo: 60
            },
            {
                pregunta: "¿Qué usuarios del agua busca coordinar la Planificación Integrada de Cuencas (PIC)?",
                opciones: {a: "Agricultores, gobiernos locales, compañías mineras y la sociedad civil", b: "Gobiernos locales, sociedades mineras y ONGs internacionales", c: "Sociedades civiles, industrias agrícolas y grupos de turistas", d: "Industrias mineras, gobiernos nacionales y agricultores locales"},
                correcta: "a",
                tiempo: 60
            },
            {
                pregunta: "¿Cuáles son los sectores económicos afectados directamente por la reducción del aporte glaciar en la cuenca del Río Desaguadero?",
                opciones: {a: "La industria del petróleo y la minería de litio", b: "La agricultura de riego, la extracción de sal y el consumo doméstico", c: "El turismo y las energías renovables", d: "La agricultura de subsistencia y la exportación de gas"},
                correcta: "b",
                tiempo: 60
            },
            {
                pregunta: "¿Cómo define el artículo la Planificación Integrada de Cuencas (PIC)?",
                opciones: {a: "Una estrategia para aumentar la oferta hídrica", b: "Una herramienta para coordinar los usuarios del agua y equilibrar oferta y demanda", c: "Un enfoque centrado en el uso eficiente de aguas subterráneas", d: "Una medida para priorizar el uso industrial del agua en la cuenca"},
                correcta: "b",
                tiempo: 60
            },
            {
                pregunta: "¿Qué consecuencia se puede deducir de la disminución del aporte glaciar al caudal del Río Desaguadero?",
                opciones: {a: "Aumento de la capacidad de almacenamiento de agua subterránea", b: "Disminución de la disponibilidad de agua para la agricultura y consumo, intensificación de conflictos", c: "Recuperación de caudales gracias a la reforestación", d: "Reducción de la actividad agrícola en las zonas altas"},
                correcta: "b",
                tiempo: 60
            },
            {
                pregunta: "Si la reducción de la superficie glaciar del Altiplano continúa, ¿qué es probable que ocurra con la disponibilidad de agua para la agricultura en la cuenca del Río Desaguadero?",
                opciones: {a: "Aumentará la superficie cultivable", b: "La disponibilidad de agua para riego disminuirá, reduciendo la superficie agrícola", c: "Habrá una mayor dependencia de los glaciares como fuente de agua", d: "No habrá impacto en la agricultura a largo plazo"},
                correcta: "b",
                tiempo: 60
            },
            {
                pregunta: "¿Cuál es la reducción porcentual de la superficie glaciar entre 1970 y 2020?",
                opciones: {a: "10%", b: "40%", c: "25%", d: "15%"},
                correcta: "b",
                tiempo: 60
            },
            {
                pregunta: "¿Qué principio general se debe aplicar respecto a los actores involucrados en el retroceso glaciar y sus impactos hídricos?",
                opciones: {a: "La coordinación entre el Ministerio de Medio Ambiente, la universidad y la sociedad civil", b: "La cooperación interinstitucional, y la planificación integrada de cuencas como herramienta", c: "Solo la participación de las empresas mineras", d: "La participación exclusiva del gobierno y sus agencias"},
                correcta: "b",
                tiempo: 60
            },
            {
                pregunta: "¿Qué estrategia se debe seguir para mitigar la escasez hídrica debido al retroceso glaciar en la cuenca del Río Desaguadero?",
                opciones: {a: "Aumentar la extracción de agua subterránea", b: "Implementar la planificación integrada de cuencas y el riego eficiente", c: "Limitar el uso agrícola del agua", d: "Fomentar el turismo para financiar proyectos de reforestación"},
                correcta: "b",
                tiempo: 60
            },
            {
                pregunta: "¿Cuál es el mayor efecto porcentual estimado para mitigar la escasez hídrica en la cuenca del Río Desaguadero?",
                opciones: {a: "Aumento de la recarga de acuíferos por reforestación (12%)", b: "Reducción del consumo de agua en un 30% por riego tecnificado", c: "Construcción de presas y embalses", d: "Creación de más fuentes de agua subterránea"},
                correcta: "b",
                tiempo: 60
            },
            {
                pregunta: "¿Cómo se contrasta la idea común de que la pérdida de glaciares afecta principalmente al turismo con la realidad socioeconómica del Altiplano boliviano?",
                opciones: {a: "La pérdida glaciar afecta principalmente la producción de energía renovable", b: "El impacto es más fuerte sobre la agricultura, extracción de sal y consumo urbano", c: "El impacto se limita a las zonas turísticas", d: "La minería se ve menos afectada que la agricultura"},
                correcta: "b",
                tiempo: 60
            },
            {
                pregunta: "¿Qué perspectiva ética surge al considerar tanto la reducción de consumo hídrico mediante riego tecnificado como el aumento de recarga de acuíferos mediante reforestación?",
                opciones: {a: "Solo una de estas medidas debe ser implementada por su mayor efectividad", b: "Ambas acciones deben coordinarse dentro de un enfoque integral de gestión hídrica", c: "El riego tecnificado es más urgente y debería priorizarse", d: "La reforestación no es necesaria si se implementa el riego tecnificado"},
                correcta: "b",
                tiempo: 60
            },
            {
                pregunta: "¿Cuál es la diferencia esencial entre la intervención de riego tecnificado y la de reforestación en la gestión sostenible del agua en la cuenca del Río Desaguadero?",
                opciones: {a: "El riego actúa sobre la oferta de agua, y la reforestación sobre la demanda", b: "El riego reduce el consumo de agua, mientras que la reforestación mejora la recarga de acuíferos", c: "La reforestación afecta solo la agricultura, y el riego impacta las industrias", d: "Ambos métodos son intercambiables en términos de eficacia"},
                correcta: "b",
                tiempo: 60
            },
            {
                pregunta: "¿Qué es probable que ocurra si la tendencia de retroceso glaciar observada en los últimos cincuenta años continúa sin que se amplíen las medidas de gestión sostenible?",
                opciones: {a: "Los glaciares dejarán de retroceder y se estabilizará el caudal", b: "La contribución glaciar al caudal disminuirá aún más, aumentando la vulnerabilidad hídrica", c: "La agricultura será reemplazada por nuevas tecnologías de obtención de agua", d: "Habrá una recuperación de la superficie glaciar debido al aumento de las lluvias"},
                correcta: "b",
                tiempo: 60
            },
            {
                pregunta: "¿Qué medida sería más adecuada en el contexto histórico de la cuenca del río Santa en Perú, basándose en los principios expuestos en el artículo?",
                opciones: {a: "Riego por inundación y construcción de presas", b: "Reforestación de especies nativas y captación de agua de lluvia", c: "Uso intensivo de especies exóticas para mejorar la eficiencia hídrica", d: "Desarrollo de minería a gran escala sin reforestación"},
                correcta: "b",
                tiempo: 60
            },
            {
                pregunta: "¿Qué tipo de evidencia adicional sería necesaria para reforzar la afirmación de que la reforestación incrementa la recarga de acuíferos en la cuenca del Río Desaguadero?",
                opciones: {a: "Estudios meteorológicos que confirmen el aumento de las lluvias", b: "Series de datos hidrológicos de agua subterránea en zonas reforestadas y no reforestadas", c: "Monitoreo de los niveles de CO2 en el aire", d: "Análisis de los patrones de evapotranspiración en zonas reforestadas"},
                correcta: "b",
                tiempo: 60
            }
        ]    
        
    },
    {   nombre: "Tema 10: Inteligencia Artificial Generativa y su Impacto en la Sociedad Boliviana",
        preguntas: [
            {
                pregunta: "¿Qué beneficio principal ofrece el uso de servicios en la nube para estudiantes y pequeñas empresas en Bolivia?",
                opciones: {a: "Acceso a potencia computacional sin hardware especializado", b: "Mayor control sobre servidores locales", c: "Evitar la conexión a internet", d: "Generar electricidad a partir de la nube"},
                correcta: "a",
                tiempo: 60
            },
            {
                pregunta: "¿Cuál es el tercer paso del proceso de generación y retroalimentación de ejercicios de química en educación secundaria, según el artículo?",
                opciones: {a: "El algoritmo genera ejercicios aleatorios", b: "El algoritmo evalúa la respuesta, indica errores y sugiere conceptos revisados", c: "El docente revisa manualmente los ejercicios", d: "Los estudiantes completan una encuesta sobre los ejercicios"},
                correcta: "b",
                tiempo: 60
            },
            {
                pregunta: "¿Cuál es la expresión matemática exacta del mecanismo de atención utilizado en los transformadores?",
                opciones: {a: "Attention(Q, K, V) = softmax((QK^{})/) V", b: "Attention(Q, K, V) = QK + V", c: "Attention(Q, K, V) = Q * K * V", d: "Attention(Q, K, V) = Q + K + V"},
                correcta: "a",
                tiempo: 60
            },
            {
                pregunta: "¿Cuál es la característica principal de los problemas éticos y regulatorios que plantea la IAG en Bolivia?",
                opciones: {a: "La falta de legislación sobre IA en general", b: "La generación de información falsa (deepfakes) y los sesgos en los datos de entrenamiento", c: "El exceso de datos disponibles para IA", d: "El acceso universal a la IA sin necesidad de regulaciones"},
                correcta: "b",
                tiempo: 60
            },
            {
                pregunta: "¿Cuál es la consecuencia social descrita de la brecha digital entre zonas urbanas y rurales en Bolivia?",
                opciones: {a: "Se mejora el acceso a la IAG en todas las zonas", b: "La brecha digital limita la participación en la economía digital emergente", c: "Aumenta el acceso a la educación a distancia en áreas rurales", d: "No tiene consecuencias significativas en la economía local"},
                correcta: "b",
                tiempo: 60
            },
            {
                pregunta: "¿Cuál de las siguientes medidas se propone para mitigar los riesgos de la IAG en Bolivia?",
                opciones: {a: "Transparencia en la generación de contenido IA", b: "Prohibición total de la IA en el sector educativo", c: "Fomentar el uso exclusivo de IA en el sector privado", d: "Desarrollo de IA sin necesidad de regulación gubernamental"},
                correcta: "a",
                tiempo: 60
            },
            {
                pregunta: "¿Qué principio general se puede extraer de los problemas identificados en la adopción de la IAG en Bolivia?",
                opciones: {a: "La falta de legislación específica y la brecha de acceso a internet son riesgos que deben mitigarse", b: "Es necesario centrarse únicamente en la infraestructura tecnológica", c: "La IAG debe ser adoptada sin regulación para promover la innovación", d: "El acceso a IA debe ser restringido a las zonas urbanas para evitar la saturación de redes"},
                correcta: "a",
                tiempo: 60
            },
            {
                pregunta: "¿Qué consecuencia se puede deducir de una mayor incorporación de herramientas generativas de IA en la industria creativa boliviana?",
                opciones: {a: "Reducción de la velocidad de producción en la industria", b: "Aumento de la velocidad de lanzamiento de productos y expansión a nuevos mercados", c: "Estancamiento en la creación de diseños debido a la dependencia tecnológica", d: "Disminución de la calidad de los diseños debido a la automatización"},
                correcta: "b",
                tiempo: 60
            },
            {
                pregunta: "¿Qué factor se espera que tenga una mayor influencia en la expansión futura de la IAG en Bolivia?",
                opciones: {a: "La mejora de la infraestructura de internet en zonas rurales", b: "El aumento de la capacidad computacional en zonas urbanas", c: "La reducción de la inversión en servicios de nube", d: "El uso exclusivo de IA en ciudades capitales"},
                correcta: "a",
                tiempo: 60
            },
            {
                pregunta: "¿Cuál es la diferencia principal entre cómo la IAG beneficia al sector educativo y al sector creativo en Bolivia?",
                opciones: {a: "En la educación, la IAG mejora la tasa de aprobación, mientras que en la industria creativa acelera la producción de diseños", b: "En la educación, la IAG crea material didáctico para aumentar los costos", c: "En el sector creativo, la IAG es utilizada solo en publicidad", d: "Ambos sectores se benefician igualmente sin diferencias claras"},
                correcta: "a",
                tiempo: 60
            },
            {
                pregunta: "¿Qué es probable que ocurra con la huella ambiental de la industria textil boliviana si la generación de diseños mediante IAG se adopta de manera generalizada?",
                opciones: {a: "Aumento de la huella ambiental por mayor uso de materiales", b: "Reducción de la huella ambiental al disminuir el uso de materiales y prototipos físicos", c: "No tendrá ningún efecto sobre la huella ambiental", d: "La huella ambiental se duplicará debido al aumento de la producción"},
                correcta: "b",
                tiempo: 60
            },
            {
                pregunta: "¿Cuál de las siguientes afirmaciones se puede inferir sobre la estrategia necesaria para maximizar el potencial de la IAG en Bolivia?",
                opciones: {a: "Inversión en infraestructura rural, regulación ética y adopción educativa", b: "Solo se requiere mayor conectividad en zonas urbanas", c: "El marco regulatorio debe centrarse únicamente en el sector privado", d: "No es necesario un enfoque integral, basta con mejorar la conectividad en las ciudades"},
                correcta: "a",
                tiempo: 60
            },
            {
                pregunta: "¿Cuál es el propósito principal de proponer un marco regulatorio que incluya transparencia, responsabilidad y acceso equitativo para la IAG en Bolivia?",
                opciones: {a: "Mitigar los riesgos asociados al uso de IA y evitar la profundización de la brecha digital", b: "Promover el uso exclusivo de IA en la educación", c: "Facilitar la implementación de IA sin ninguna limitación", d: "Reforzar las políticas gubernamentales sobre la privacidad de datos personales"},
                correcta: "a",
                tiempo: 60
            },
            {
                pregunta: "¿Qué principio general subyace a las soluciones propuestas para mitigar los riesgos de la inteligencia artificial generativa en Bolivia?",
                opciones: {a: "Transparencia, responsabilidad y acceso equitativo", b: "Reemplazo de la educación tradicional por IA", c: "Desarrollo de IA sin ningún control gubernamental", d: "Reducción de los costos de infraestructura sin importar los riesgos"},
                correcta: "a",
                tiempo: 60
            },
            {
                pregunta: "¿Cuál es la relevancia de la información presentada en el artículo para los desafíos ambientales en Bolivia?",
                opciones: {a: "El artículo no aborda directamente los desafíos ambientales", b: "La IAG se utiliza para la gestión de recursos naturales", c: "El artículo propone soluciones ambientales con el uso de IA", d: "El impacto ambiental de la IAG es un tema central del artículo"},
                correcta: "a",
                tiempo: 60
            },
            {
                pregunta: "¿Cuál es la medida más adecuada para aplicar los principios de transparencia y responsabilidad al uso de asistentes de IA en la evaluación académica de universidades bolivianas?",
                opciones: {a: "Indicar que la salida es generada por IA y capacitar a los docentes para verificar contenido", b: "Exigir el uso exclusivo de IA para la evaluación académica", c: "Implementar una prohibición total del uso de IA en universidades", d: "Dejar que los estudiantes generen sus propios exámenes sin revisión externa"},
                correcta: "a",
                tiempo: 60
            },
            {
                pregunta: "¿Cuál es la principal medida ética recomendada para mitigar los riesgos asociados al uso de la IAG en Bolivia?",
                opciones: {a: "Transparencia en la generación de contenido IA", b: "Fomento de IA sin necesidad de regulación", c: "Adopción obligatoria de IA por parte del sector educativo", d: "Limitación de IA solo a sectores privados"},
                correcta: "a",
                tiempo: 60
            },
            {
                pregunta: "¿Qué tan válido es el argumento del autor de que la ausencia de legislación específica sobre contenido generado por IA ha favorecido la polarización política en Bolivia?",
                opciones: {a: "Es válido, pero no se presentan datos cuantitativos suficientes para validarlo completamente", b: "Es completamente válido y está demostrado con datos sólidos", c: "No es válido, ya que no hay evidencia de polarización", d: "Es inválido porque la legislación no afecta a la polarización política"},
                correcta: "a",
                tiempo: 60
            },
            {
                pregunta: "¿Qué limitación del enfoque del autor respecto a los procesos técnicos de la IAG podría pasar desapercibida?",
                opciones: {a: "La dependencia de la nube no garantiza acceso universal debido a la falta de conectividad en algunas zonas rurales", b: "El uso de servicios en la nube resolverá todos los problemas técnicos de IAG", c: "Los procesos de IAG no requieren de datos para entrenarse", d: "La infraestructura rural es suficiente para acceder a los servicios en la nube"},
                correcta: "a",
                tiempo: 60
            },
            {
                pregunta: "¿Qué sesgo o limitación del enfoque del autor podría conducir a una valoración incompleta del impacto de la IAG en la población rural boliviana?",
                opciones: {a: "La falta de un estudio de caso rural y la mayor parte de los datos provienen de contextos urbanos", b: "El enfoque está completamente centrado en la población rural", c: "Los ejemplos del artículo son representativos de todas las zonas rurales de Bolivia", d: "No se menciona ningún tipo de limitación en el enfoque del autor"},
                correcta: "a",
                tiempo: 60
            },
            {
                pregunta: "¿Qué estrategia combinaría de forma más eficaz la mitigación de la brecha digital y el aprovechamiento de la IA generativa para capacitar a agricultores en zonas rurales de Bolivia?",
                opciones: {a: "Mejora de la conectividad con centros comunitarios y programas de capacitación", b: "Restricción del uso de IA solo en zonas urbanas", c: "Imposición de medidas regulatorias sin considerar el acceso a internet", d: "Fomentar el uso exclusivo de IA en el sector privado"},
                correcta: "a",
                tiempo: 60
            },
            {
                pregunta: "¿Cómo se compara la metodología de atención de los modelos transformer con los enfoques tradicionales basados en reglas en cuanto a su capacidad para adaptar la generación de contenido a contextos locales bolivianos?",
                opciones: {a: "Los modelos transformer pueden adaptar el contenido a contextos locales, mientras que los enfoques basados en reglas no pueden", b: "Ambos enfoques adaptan el contenido igualmente", c: "Los enfoques basados en reglas son mejores para adaptar el contenido", d: "Los modelos transformer solo funcionan en contextos globales, no locales"},
                correcta: "a",
                tiempo: 60
            },
            {
                pregunta: "¿Qué tipo de evidencia adicional sería más apropiado para validar la afirmación de que la IA generativa mejora significativamente el rendimiento académico de los estudiantes en distintas regiones de Bolivia?",
                opciones: {a: "Un estudio experimental controlado con muestras de diversas regiones y mediciones pre y post intervención", b: "Un análisis cualitativo de los testimonios de los estudiantes", c: "Datos sobre el número de estudiantes que usan IA generativa", d: "Evaluaciones únicamente en zonas urbanas sin considerar la brecha digital"},
                correcta: "a",
                tiempo: 60
            }
                
        ]
    }
];

// ===== VARIABLES GLOBALES =====
let temaActual = 0;
let indicePregunta = 0;
let respuestasUsuario = [];
let temporizadorInterval;
let tiempoRestante;

// ===== FUNCIONES =====
function iniciarPrueba() {
    const nombre = document.getElementById('nombre').value.trim();
    if(!nombre) { alert("Ingrese su nombre"); return; }
    temaActual = parseInt(document.getElementById('selectorTema').value);
    indicePregunta = 0;
    respuestasUsuario = [];
    document.getElementById('inicio').classList.add('oculto');
    document.getElementById('prueba').classList.remove('oculto');
    mostrarPregunta();
}

function mostrarPregunta() {
    clearInterval(temporizadorInterval);
    tiempoRestante = temas[temaActual].preguntas[indicePregunta].tiempo;
    document.getElementById('tituloPregunta').innerText = temas[temaActual].preguntas[indicePregunta].pregunta;
    document.getElementById('temporizador').innerText = `Tiempo: ${tiempoRestante}`;
    const opcionesDiv = document.getElementById('opciones');
    opcionesDiv.innerHTML = '';
    const opciones = temas[temaActual].preguntas[indicePregunta].opciones;
    for(let key in opciones){
        const btn = document.createElement('button');
        btn.className = 'opcion';
        btn.innerText = `${key}) ${opciones[key]}`;
        btn.onclick = ()=> seleccionarRespuesta(key);
        opcionesDiv.appendChild(btn);
    }
    temporizadorInterval = setInterval(() => {
        tiempoRestante--;
        document.getElementById('temporizador').innerText = `Tiempo: ${tiempoRestante}`;
        if(tiempoRestante <= 0){ siguiente(); }
    },1000);
}

function seleccionarRespuesta(key){
    respuestasUsuario[indicePregunta] = key;
    siguiente();
}

function siguiente(){
    clearInterval(temporizadorInterval);
    if(indicePregunta < temas[temaActual].preguntas.length -1){
        indicePregunta++;
        mostrarPregunta();
    } else {
        mostrarResultado();
    }
}

function anterior(){
    clearInterval(temporizadorInterval);
    if(indicePregunta > 0){
        indicePregunta--;
        mostrarPregunta();
    }
}

function mostrarResultado(){
    document.getElementById('prueba').classList.add('oculto');
    document.getElementById('resultado').classList.remove('oculto');
    let puntaje = 0;
    let detalle = '';
    temas[temaActual].preguntas.forEach((preg, i)=>{
        if(respuestasUsuario[i] === preg.correcta) puntaje++;
        else detalle += `<p>${i+1}) ${preg.pregunta}<br>Respuesta correcta: ${preg.correcta}) ${preg.opciones[preg.correcta]}</p>`;
    });
    document.getElementById('puntaje').innerText = `Puntaje: ${puntaje} / ${temas[temaActual].preguntas.length}`;
    document.getElementById('detalleErrores').innerHTML = detalle;
}