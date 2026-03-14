import { createClient } from '@sanity/client';
import * as crypto from 'crypto';

const client = createClient({
  projectId: 'aobs8clt',
  dataset: 'production',
  apiVersion: '2024-01-01',
  token: process.env.SANITY_TOKEN,
  useCdn: false,
});

function makeKey() {
  return crypto.randomUUID().slice(0, 8);
}

function toPortableText(text: string) {
  return text.split('\n\n').map((paragraph) => ({
    _type: 'block' as const,
    _key: makeKey(),
    children: [{ _type: 'span' as const, _key: makeKey(), text: paragraph, marks: [] as string[] }],
    markDefs: [],
    style: 'normal' as const,
  }));
}

function slugify(text: string) {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

// ---------------------------------------------------------------------------
// Data
// ---------------------------------------------------------------------------

const siteSettings = {
  _id: 'siteSettings',
  _type: 'siteSettings',
  title: 'ONEC - Organización Nacional de Empresas Comerciales',
  description:
    'Desde 1997, representamos y fortalecemos el sector comercial organizado de la República Dominicana.',
  phone: '(809) 683-7229',
  email: 'info@onec.org.do',
  address:
    'Torre Biltmore I, Suite 401, Av. Abraham Lincoln 1003, Piantini, Santo Domingo, D.N.',
};

const categories = [
  { _id: 'category-institucional', title: 'Institucional', slug: 'institucional' },
  { _id: 'category-eventos', title: 'Eventos', slug: 'eventos' },
  { _id: 'category-sector-comercial', title: 'Sector Comercial', slug: 'sector-comercial' },
  { _id: 'category-legislacion', title: 'Legislación', slug: 'legislacion' },
];

const articles = [
  {
    slug: 'onec-mesa-dialogo-reforma-fiscal',
    title: 'ONEC participa en mesa de diálogo sobre reforma fiscal',
    date: '2026-03-01',
    categoryId: 'category-institucional',
    featured: true,
    excerpt:
      'Representantes de ONEC participaron en la mesa de diálogo convocada por el Ministerio de Hacienda para discutir la propuesta de reforma fiscal.',
    body: 'Representantes de ONEC participaron en la mesa de diálogo convocada por el Ministerio de Hacienda para discutir la propuesta de reforma fiscal. Durante la sesión, se presentaron las preocupaciones del sector comercial sobre el impacto de las medidas propuestas en los costos operativos de las empresas.\n\nLa delegación de ONEC, encabezada por su director ejecutivo, presentó propuestas alternativas que buscan equilibrar la necesidad de recaudación con la competitividad del sector comercial dominicano.\n\nEntre los puntos discutidos se encuentran la revisión de los impuestos al consumo, la simplificación de los procesos tributarios y la creación de incentivos para la formalización de pequeños comercios.',
  },
  {
    slug: 'jornada-vinculacion-ter-2026',
    title: 'Exitosa jornada de vinculación comercial TER 2026',
    date: '2026-02-15',
    categoryId: 'category-eventos',
    featured: true,
    excerpt:
      'Más de 50 empresas participaron en la jornada de vinculación comercial TER 2026, generando nuevas oportunidades de negocio entre proveedores y comercios.',
    body: 'Más de 50 empresas participaron en la jornada de vinculación comercial TER 2026, generando nuevas oportunidades de negocio entre proveedores y comercios.\n\nEl evento, organizado por ONEC en colaboración con las principales cámaras de comercio del país, reunió a representantes de diversos sectores del comercio dominicano.\n\nDurante la jornada se realizaron más de 200 reuniones de negocios, fortaleciendo las relaciones comerciales entre los participantes.',
  },
  {
    slug: 'regulaciones-comercio-electronico-rd',
    title: 'Nuevas regulaciones para el comercio electrónico en RD',
    date: '2026-02-01',
    categoryId: 'category-legislacion',
    featured: false,
    excerpt:
      'El gobierno dominicano aprobó nuevas regulaciones para el comercio electrónico que impactarán a las empresas del sector retail.',
    body: 'El gobierno dominicano aprobó nuevas regulaciones para el comercio electrónico que impactarán a las empresas del sector retail.\n\nLas nuevas disposiciones establecen requisitos de transparencia en precios, políticas de devolución y protección de datos del consumidor para las plataformas de venta en línea.\n\nONEC ha participado activamente en la revisión de estas regulaciones, asegurando que los intereses del comercio organizado sean tomados en cuenta.',
  },
  {
    slug: 'programa-capacitacion-2026',
    title: 'Programa de capacitación en gestión empresarial 2026',
    date: '2026-01-20',
    categoryId: 'category-institucional',
    featured: false,
    excerpt:
      'ONEC anuncia su programa de capacitación para el primer semestre de 2026, con talleres en finanzas, marketing digital y recursos humanos.',
    body: 'ONEC anuncia su programa de capacitación para el primer semestre de 2026, con talleres en finanzas, marketing digital y recursos humanos.\n\nEl programa está diseñado para fortalecer las competencias de los equipos directivos y operativos de las empresas miembro.\n\nLos talleres serán impartidos por expertos nacionales e internacionales, con un enfoque práctico orientado a las necesidades del comercio dominicano.',
  },
  {
    slug: 'impacto-inflacion-sector-comercial',
    title: 'Análisis del impacto de la inflación en el sector comercial',
    date: '2026-01-10',
    categoryId: 'category-sector-comercial',
    featured: false,
    excerpt:
      'Nuestro equipo de expertos analiza el impacto de la inflación en los costos operativos del comercio dominicano y propone estrategias de mitigación.',
    body: 'Nuestro equipo de expertos analiza el impacto de la inflación en los costos operativos del comercio dominicano y propone estrategias de mitigación.\n\nEl estudio revela que los costos de operación han aumentado significativamente en el último año, afectando especialmente a las pequeñas y medianas empresas del sector.\n\nONEC recomienda una serie de medidas que incluyen la optimización de cadenas de suministro, la negociación colectiva con proveedores y la adopción de tecnologías que reduzcan costos.',
  },
  {
    slug: 'acuerdo-infotep-capacitacion',
    title: 'ONEC firma acuerdo con INFOTEP para capacitación técnica',
    date: '2025-12-15',
    categoryId: 'category-institucional',
    featured: false,
    excerpt:
      'Nuevo convenio permitirá a los empleados de empresas miembro acceder a programas de formación técnica y profesional.',
    body: 'Nuevo convenio permitirá a los empleados de empresas miembro acceder a programas de formación técnica y profesional.\n\nEl acuerdo entre ONEC e INFOTEP establece un marco de colaboración para el desarrollo de programas de capacitación adaptados a las necesidades del sector comercial.\n\nLos programas incluirán formación en áreas como servicio al cliente, gestión de inventarios, comercio digital y habilidades gerenciales.',
  },
];

const services = [
  {
    title: 'Representación Gremial',
    description:
      'Defendemos los intereses del comercio organizado ante el gobierno, congreso y organismos reguladores. Participamos activamente en la formulación de políticas públicas que impactan al sector.',
    icon: 'landmark',
    order: 1,
  },
  {
    title: 'Asesoría Legal',
    description:
      'Equipo de abogados especializados en legislación comercial, laboral y tributaria dominicana. Orientación permanente para el cumplimiento normativo de tu empresa.',
    icon: 'scale',
    order: 2,
  },
  {
    title: 'Asesoría Fiscal',
    description:
      'Expertos en materia impositiva que te ayudan a optimizar la carga tributaria de tu empresa dentro del marco legal vigente.',
    icon: 'bar-chart-3',
    order: 3,
  },
  {
    title: 'Capacitación Empresarial',
    description:
      'Programas de formación, talleres y seminarios diseñados para fortalecer las competencias de tu equipo y mejorar la gestión empresarial.',
    icon: 'graduation-cap',
    order: 4,
  },
  {
    title: 'Vinculación Comercial',
    description:
      'A través de nuestra plataforma TER, conectamos empresas con proveedores certificados, generando más de 556 vinculaciones exitosas.',
    icon: 'handshake',
    order: 5,
  },
  {
    title: 'Formalización de Suplidores',
    description:
      'Programa de acompañamiento para la formalización y certificación de proveedores del sector comercial dominicano.',
    icon: 'badge-check',
    order: 6,
  },
];

const initiatives = [
  {
    title: 'Plataforma de Talento en el Retail (TER)',
    description:
      'En 2023, fue creada la Plataforma de Talento en el Retail (TER): un espacio especializado dirigido a los actores de Gestión Humana del sector detallista formal. Se realizan seminarios, congresos, talleres, encuentros y ferias para captación de talentos.',
    startYear: 2023,
    impactStats: [{ _key: makeKey(), label: 'Colaboradores impactados', value: '80+' }],
  },
  {
    title: 'Formalización de Empresas Proveedoras',
    description:
      'Junto con el Ministerio de Industria, Comercio y MiPymes (MICM) hemos desarrollado desde 2021 programas de vinculación comercial mediante los cuales empresas MiPymes y artesanos se capacitan para tener relaciones comerciales exitosas con las empresas asociadas a nuestro gremio.',
    startYear: 2021,
    impactStats: [
      { _key: makeKey(), label: 'Vinculaciones comerciales', value: '556+' },
      { _key: makeKey(), label: 'Desde', value: '2021' },
    ],
  },
  {
    title: 'Código QR para Bomberos',
    description:
      'ONEC junto con CARDNET desarrolló en octubre de 2021 un código QR que permite al Cuerpo de Bomberos del Distrito Nacional recibir donaciones de manera rápida, sencilla y segura.',
    startYear: 2021,
    impactStats: [],
  },
  {
    title: 'Devolución de Gastos Educativos',
    description:
      'ONEC junto al Centro Juan XXIII presentó un programa que benefició a las familias dominicanas y fomentó la formalización de colegios. Nuestra contribución clave fue la promulgación de la Ley 179-09 sobre deducción de gastos de educación.',
    impactStats: [],
  },
  {
    title: 'Acuerdos Interinstitucionales',
    description:
      'ONEC ha formalizado acuerdos estratégicos con INFOTEP, ABA, MICM, NUVI y ECORED para generar valor para sus afiliados mediante formación, comercio digital, empleo, reciclaje y sostenibilidad.',
    impactStats: [{ _key: makeKey(), label: 'Acuerdos firmados', value: '5+' }],
  },
  {
    title: 'Ley 179-09',
    description:
      'Participación activa en la implementación y seguimiento de la Ley 179-09 sobre deducción de gastos educativos, una conquista del sector comercial dominicano.',
    impactStats: [],
  },
];

const experts = [
  {
    name: 'Alexis Hernández',
    role: 'CEO de Platinum Consulting',
    expertiseArea: 'Comunicación y Liderazgo',
    bio: 'Apasionado de la comunicación y el entrenamiento... de la integración de equipos, el liderazgo, la gestión integral, la mejora continua, la calidad de servicio y experiencia del cliente. Con una trayectoria como docente, consultor y conferencista, combinado con posiciones en niveles directivos, que le han permitido "Enseñar desde el Hacer".',
    order: 1,
  },
  {
    name: 'Darnetty Lugo Calderón',
    role: 'Socia, Cofundadora de IUS Mega Service',
    expertiseArea: 'Derecho Laboral y Comercial',
    bio: 'Lic. en Derecho de UNAPAEC, Magister en Derecho de Trabajo y Administrativo, UTESA, posee un especialidad en Marketing Jurídico, de la Universidad Europea de Atlántico España. Ha participado en diversos congresos de Derecho de trabajo, diplomados en Gestión de Pymes, Derecho Civil y en materia inmobiliaria.',
    order: 2,
  },
  {
    name: 'Francisco E. Figueroa Nigaglioni',
    role: 'Partner de Zendesk y Director General de PuntoShop',
    expertiseArea: 'Tecnología y Soluciones Empresariales',
    bio: 'Matemático y cuenta con una maestría en el área de informática médica de Northwestern University, Evanston Chicago. Cuenta con más de 20 años de experiencia en el diseño, desarrollo e implementación de soluciones empresariales utilizando plataformas como PeopleSoft, Oracle, SAP, Microsoft, Salesforce y Zendesk.',
    order: 3,
  },
  {
    name: 'Marian Pujals',
    role: 'Socia Gerente de la firma Dominguez Pujals',
    expertiseArea: 'Derecho Procesal Civil',
    bio: 'Abogada egresada como Licenciada en Derecho (Magna Cum Laude) de la Pontificia Universidad Católica Madre y Maestra (PUCMM). Estudió posgrado en la maestría de Práctica Legal en PUCMM. Ha fungido como docente en la Universidad Iberoamericana (UNIBE) y PUCMM, Recinto Santo Tomas de Aquino (RSTA), en la materia de Derecho Procesal Civil.',
    order: 4,
  },
  {
    name: 'Meiny González',
    role: 'Directora Comercial de Telecomunicaciones ONEMAX',
    expertiseArea: 'Telecomunicaciones y Tecnología',
    bio: 'Es Ingeniera Electrónica y de Telecomunicaciones, con especializaciones en Gestión de Proyectos, Gerencia de Mercadeo y Gestión de Calidad. Actualmente concluyendo su Executive MBA en Barna Management School. Más de 15 años de ejercicio profesional desempeñando diversos roles en empresas de Telecomunicaciones y Tecnología en la República Dominicana.',
    order: 5,
  },
];

const committees = [
  {
    name: 'Comité Académico y de Eventos',
    description:
      'Organiza y coordina actividades académicas, foros, seminarios y eventos que fortalecen las competencias del sector comercial dominicano.',
  },
  {
    name: 'Comité Económico y Fiscal',
    description:
      'Analiza y da seguimiento a las políticas económicas y fiscales que impactan al sector comercial, proponiendo posiciones institucionales ante los organismos correspondientes.',
  },
  {
    name: 'Comité Legal y Laboral',
    description:
      'Monitorea y analiza las legislaciones y regulaciones laborales y comerciales, asesorando a los miembros en cumplimiento normativo y mejores prácticas.',
  },
  {
    name: 'Comité de Logística',
    description:
      'Trabaja en la optimización de la cadena de suministro y logística del sector comercial, promoviendo eficiencia y reducción de costos operativos.',
  },
  {
    name: 'Subcomité de Permisología',
    description:
      'Se enfoca en los procesos de permisos y licencias que afectan a las empresas comerciales, buscando la simplificación y agilización de trámites.',
  },
  {
    name: 'Comité de Tecnología y Ciberseguridad',
    description:
      'Impulsa la transformación digital y la adopción de tecnología en el comercio dominicano, con énfasis en ciberseguridad y protección de datos.',
  },
];

// ---------------------------------------------------------------------------
// Seed
// ---------------------------------------------------------------------------

async function deleteAll() {
  console.log('Deleting existing documents...');
  const types = [
    'article',
    'category',
    'service',
    'initiative',
    'teamMember',
    'committee',
    'siteSettings',
  ];
  for (const type of types) {
    const docs = await client.fetch<{ _id: string }[]>(`*[_type == "${type}"]{ _id }`);
    if (docs.length > 0) {
      const tx = client.transaction();
      for (const doc of docs) {
        tx.delete(doc._id);
      }
      await tx.commit();
      console.log(`  Deleted ${docs.length} ${type} document(s)`);
    }
  }
}

async function seed() {
  console.log('Seeding Sanity...');

  if (process.argv.includes('--delete-first')) {
    await deleteAll();
  }

  // 1. Site Settings (singleton)
  console.log('Creating site settings...');
  await client.createOrReplace(siteSettings);

  // 2. Categories
  console.log('Creating categories...');
  for (const cat of categories) {
    await client.createOrReplace({
      _id: cat._id,
      _type: 'category',
      title: cat.title,
      slug: { _type: 'slug', current: cat.slug },
    });
  }

  // 3. Articles
  console.log('Creating articles...');
  for (const article of articles) {
    await client.createOrReplace({
      _id: `article-${article.slug}`,
      _type: 'article',
      title: article.title,
      slug: { _type: 'slug', current: article.slug },
      excerpt: article.excerpt,
      body: toPortableText(article.body),
      publishedAt: `${article.date}T12:00:00.000Z`,
      featured: article.featured,
      category: {
        _type: 'reference',
        _ref: article.categoryId,
      },
    });
  }

  // 4. Services
  console.log('Creating services...');
  for (const svc of services) {
    const id = `service-${slugify(svc.title)}`;
    await client.createOrReplace({
      _id: id,
      _type: 'service',
      title: svc.title,
      slug: { _type: 'slug', current: slugify(svc.title) },
      description: svc.description,
      icon: svc.icon,
      order: svc.order,
    });
  }

  // 5. Initiatives
  console.log('Creating initiatives...');
  for (const init of initiatives) {
    const id = `initiative-${slugify(init.title)}`;
    await client.createOrReplace({
      _id: id,
      _type: 'initiative',
      title: init.title,
      slug: { _type: 'slug', current: slugify(init.title) },
      description: init.description,
      ...(init.startYear ? { startYear: init.startYear } : {}),
      impactStats: init.impactStats,
    });
  }

  // 6. Team Members (Experts)
  console.log('Creating team members (experts)...');
  for (const expert of experts) {
    const id = `expert-${slugify(expert.name)}`;
    await client.createOrReplace({
      _id: id,
      _type: 'teamMember',
      name: expert.name,
      role: expert.role,
      bio: expert.bio,
      isExpert: true,
      expertiseArea: expert.expertiseArea,
      order: expert.order,
    });
  }

  // 7. Committees
  console.log('Creating committees...');
  for (const comm of committees) {
    const id = `committee-${slugify(comm.name)}`;
    await client.createOrReplace({
      _id: id,
      _type: 'committee',
      name: comm.name,
      slug: { _type: 'slug', current: slugify(comm.name) },
      description: comm.description,
    });
  }

  console.log('Done! Seeded:');
  console.log(`  - 1 site settings`);
  console.log(`  - ${categories.length} categories`);
  console.log(`  - ${articles.length} articles`);
  console.log(`  - ${services.length} services`);
  console.log(`  - ${initiatives.length} initiatives`);
  console.log(`  - ${experts.length} team members (experts)`);
  console.log(`  - ${committees.length} committees`);
}

seed().catch(console.error);
