import { r as d, j as e } from "./index-BCi4c7TJ.js";
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const S = (a) => a.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
  C = (a) =>
    a.replace(/^([A-Z])|[\s-_]+(\w)/g, (t, s, o) =>
      o ? o.toUpperCase() : s.toLowerCase()
    ),
  v = (a) => {
    const t = C(a);
    return t.charAt(0).toUpperCase() + t.slice(1);
  },
  j = (...a) =>
    a
      .filter((t, s, o) => !!t && t.trim() !== "" && o.indexOf(t) === s)
      .join(" ")
      .trim(),
  M = (a) => {
    for (const t in a)
      if (t.startsWith("aria-") || t === "role" || t === "title") return !0;
  };
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var A = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const P = d.forwardRef(
  (
    {
      color: a = "currentColor",
      size: t = 24,
      strokeWidth: s = 2,
      absoluteStrokeWidth: o,
      className: c = "",
      children: n,
      iconNode: h,
      ...r
    },
    m
  ) =>
    d.createElement(
      "svg",
      {
        ref: m,
        ...A,
        width: t,
        height: t,
        stroke: a,
        strokeWidth: o ? (Number(s) * 24) / Number(t) : s,
        className: j("lucide", c),
        ...(!n && !M(r) && { "aria-hidden": "true" }),
        ...r,
      },
      [
        ...h.map(([p, u]) => d.createElement(p, u)),
        ...(Array.isArray(n) ? n : [n]),
      ]
    )
);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const l = (a, t) => {
  const s = d.forwardRef(({ className: o, ...c }, n) =>
    d.createElement(P, {
      ref: n,
      iconNode: t,
      className: j(`lucide-${S(v(a))}`, `lucide-${a}`, o),
      ...c,
    })
  );
  return (s.displayName = v(a)), s;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const _ = [
  ["path", { d: "M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16", key: "jecpp" }],
  [
    "rect",
    { width: "20", height: "14", x: "2", y: "6", rx: "2", key: "i6l2r4" },
  ],
],
  w = l("briefcase", _);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const D = [
  ["path", { d: "m7 6 5 5 5-5", key: "1lc07p" }],
  ["path", { d: "m7 13 5 5 5-5", key: "1d48rs" }],
],
  E = l("chevrons-down", D);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const L = [
  ["path", { d: "m16 18 6-6-6-6", key: "eg8j8" }],
  ["path", { d: "m8 6-6 6 6 6", key: "ppft3o" }],
],
  N = l("code", L);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const z = [
  ["path", { d: "M12 20v2", key: "1lh1kg" }],
  ["path", { d: "M12 2v2", key: "tus03m" }],
  ["path", { d: "M17 20v2", key: "1rnc9c" }],
  ["path", { d: "M17 2v2", key: "11trls" }],
  ["path", { d: "M2 12h2", key: "1t8f8n" }],
  ["path", { d: "M2 17h2", key: "7oei6x" }],
  ["path", { d: "M2 7h2", key: "asdhe0" }],
  ["path", { d: "M20 12h2", key: "1q8mjw" }],
  ["path", { d: "M20 17h2", key: "1fpfkl" }],
  ["path", { d: "M20 7h2", key: "1o8tra" }],
  ["path", { d: "M7 20v2", key: "4gnj0m" }],
  ["path", { d: "M7 2v2", key: "1i4yhu" }],
  [
    "rect",
    { x: "4", y: "4", width: "16", height: "16", rx: "2", key: "1vbyd7" },
  ],
  [
    "rect",
    { x: "8", y: "8", width: "8", height: "8", rx: "1", key: "z9xiuo" },
  ],
],
  $ = l("cpu", z);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const I = [
  ["path", { d: "M12 15V3", key: "m9g1x1" }],
  ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }],
  ["path", { d: "m7 10 5 5 5-5", key: "brsn70" }],
],
  T = l("download", I);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const H = [
  [
    "path",
    {
      d: "M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",
      key: "tonef",
    },
  ],
  ["path", { d: "M9 18c-4.51 2-5-2-7-2", key: "9comsn" }],
],
  V = l("github", H);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const q = [
  [
    "path",
    {
      d: "M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",
      key: "j76jl0",
    },
  ],
  ["path", { d: "M22 10v6", key: "1lu8f3" }],
  ["path", { d: "M6 12.5V16a6 3 0 0 0 12 0v-3.5", key: "1r8lef" }],
],
  B = l("graduation-cap", q);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const F = [
  [
    "rect",
    {
      width: "20",
      height: "20",
      x: "2",
      y: "2",
      rx: "5",
      ry: "5",
      key: "2e1cvw",
    },
  ],
  [
    "path",
    { d: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z", key: "9exkf1" },
  ],
  ["line", { x1: "17.5", x2: "17.51", y1: "6.5", y2: "6.5", key: "r4j83e" }],
],
  G = l("instagram", F);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Q = [
  [
    "path",
    {
      d: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",
      key: "c2jq9f",
    },
  ],
  ["rect", { width: "4", height: "12", x: "2", y: "9", key: "mk3on5" }],
  ["circle", { cx: "4", cy: "4", r: "2", key: "bt5ra8" }],
],
  R = l("linkedin", Q);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const U = [
  ["path", { d: "m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7", key: "132q7q" }],
  [
    "rect",
    { x: "2", y: "4", width: "20", height: "16", rx: "2", key: "izxlao" },
  ],
],
  b = l("mail", U);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const J = [
  [
    "path",
    {
      d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
      key: "1r0f0z",
    },
  ],
  ["circle", { cx: "12", cy: "10", r: "3", key: "ilqhr7" }],
],
  O = l("map-pin", J);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const W = [
  ["path", { d: "M4 12h16", key: "1lakjw" }],
  ["path", { d: "M4 18h16", key: "19g7jn" }],
  ["path", { d: "M4 6h16", key: "1o0s65" }],
],
  X = l("menu", W);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Y = [
  [
    "path",
    {
      d: "M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",
      key: "9njp5v",
    },
  ],
],
  Z = l("phone", Y);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const K = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
],
  ee = l("x", K),
  i = {
    name: "Damián Vásquez",
    title: "Ingeniero de Sistemas | Desarrollador de Software",
    location: "Tarapoto, San Martín - Perú",
    contact: {
      email: "damianvzch@gmail.com",
      phone: "+51 955 205 699",
      linkedin: "https://www.linkedin.com/in/damianvzch",
      github: "https://github.com/damianvzch",
      instagram: "https://www.instagram.com/damianvzch",
    },
    summary:
      "Ingeniero de Sistemas y desarrollador autodidacta con más de 5 años de experiencia creando soluciones de software de extremo a extremo. Disfruto enfrentando problemas complejos y transformándolos en sistemas escalables bajo principios SOLID y arquitecturas limpias. Poseo un fuerte enfoque en la empatía hacia el usuario final, la comunicación transparente y el trabajo en equipo. Con sólida experiencia integrando tecnologías modernas y automatizando flujos CI/CD, me adapto rápidamente a las nuevas metodologías, integrando herramientas de Inteligencia Artificial para optimizar el ciclo de desarrollo y resolución de problemas. Busco aportar valor a los proyectos manteniendo una actitud colaborativa y siempre dispuesto a compartir conocimientos para alcanzar los objetivos del equipo.",
    skills: [
      {
        category: "IA & Herramientas",
        technologies:
          "Uso de IA para optimización de código, Prompt Engineering, Integración de APIs de IA.",
      },
      {
        category: "Backend",
        technologies:
          "Node.js (Nest.js, Express), PHP 8.3 (Laravel 12, Flight PHP), Python (Django), .NET Core, TypeScript.",
      },
      {
        category: "Frontend",
        technologies:
          "Vue 3 (Composition API), React JS, React Native, Angular 18, Vite, Inertia.js, Tailwind CSS.",
      },
      {
        category: "Bases de Datos",
        technologies:
          "MySQL, PostgreSQL, SQL Server, MongoDB, Firebase.",
      },
      {
        category: "DevOps & Nube",
        technologies:
          "CI/CD, GitHub Actions, GitLab Pipelines, Gitflow, Docker, AWS, S3, Google Cloud, Ubuntu Server.",
      },
      {
        category: "Metodologías",
        technologies:
          "Metodologías Ágiles (Scrum), Principios SOLID, Clean Architecture, Microservicios, API REST.",
      },
    ],
    experience: [
      {
        role: "Analista Programador & Desarrollador Fullstack",
        company: "Independiente (Freelance)",
        period: "Ene. 2021 - Actualidad",
        location: "Tarapoto, Perú",
        description:
          "Gestiono el ciclo de vida completo del software, desde la toma de requerimientos con el cliente hasta el despliegue en la nube, implementando prácticas de Gitflow y flujos de CI/CD (GitHub Actions / GitLab Pipelines). Lideré el diseño y desarrollo de plataformas como PetGreat y Niba's Postres y Café, integrando WebSockets para tiempo real, y Ark con AWS S3.",
        stack: "Nest.js, TypeScript, React JS/Native, WebSockets, Python (Django), PHP, CI/CD, Gitflow, GitHub Actions, Docker, AWS S3",
        media: { type: "image", src: "/Macbook-Air-PetGreat.png" },
      },
      {
        role: "Analista Programador",
        company: "Deyfor E.I.R.L.",
        period: "Sept. 2025 - Dic. 2025",
        location: "Cajamarca, Perú",
        description:
          "Colaboré bajo el marco Scrum en el desarrollo del nuevo ERP Deytha v3 para Minería y Energía, aportando en interfaces con Vue 3 y React Native. Participé en la estructuración de un backend escalable con Laravel 12 y PHP 8.3 integrando principios SOLID.",
        stack: "Laravel 12, PHP 8.3, Vue 3, React Native, Inertia.js, MySQL, Scrum",
        media: {
          type: "image",
          src: "/deyfor.png",
        },
      },
      {
        role: "Jefe de Práctica Universitario",
        company: "Universidad César Vallejo",
        period: "Sept. 2024 - Dic. 2024",
        location: "Tarapoto, Perú",
        description:
          "Guié el aprendizaje práctico de más de 40 estudiantes en Programación Orientada a Objetos y Bases de Datos. Brindé soporte técnico en el Fab Lab, resolviendo problemas de integración de hardware (Arduino) y software, operando impresoras 3D, cortadoras y escáneres láser.",
        stack: "Comunicación efectiva, Mentoría, Arduino, Modelado e Impresión 3D, Corte Láser, Python, C++, MySQL",
        media: {
          type: "video",
          src: "https://www.youtube.com/embed/NBCBPS4URwc?start=281",
        },
      },
      {
        role: "Desarrollador de Software",
        company: "Tucuna Travel S.A.C.",
        period: "Ene. 2024 - Ago. 2024",
        location: "Sauce, Perú",
        description:
          "Desarrollé y desplegué una plataforma web integral de reservas bajo plazos ajustados mediante sprints ágiles, manteniendo siempre la calidad del código. Automaticé el motor de transacciones, reduciendo errores manuales y mejorando la satisfacción del cliente.",
        stack: "React, Laravel, JavaScript, PHP, MySQL, Scrum, Resolución de problemas",
        media: { type: "image", src: "/tucunatravel.jpg" },
      },
      {
        role: "Analista Programador",
        company: "Revelio JL S.A.C.",
        period: "Jun. 2023 - Dic. 2023",
        location: "Lima, Perú",
        description:
          "Diseñé e implementé un sistema corporativo de gestión de inventarios metalúrgicos empleando Python, Django y PostgreSQL bajo metodologías ágiles. Automaticé la generación de reportes de despacho alojados en AWS.",
        stack: "Python, Django, PostgreSQL, AWS, Scrum, Empatía con el usuario",
        media: { type: "image", src: "/Macbook-Air-metalprotec.png" },
      },
      {
        role: "Analista Programador",
        company: "Neoteck Solutions E.I.R.L.",
        period: "Jun. 2022 - May. 2023",
        location: "Trujillo, Perú",
        description:
          "Participé mediante Scrum en la construcción de microservicios financieros con .NET Core (C#) y desarrollé el frontend con Angular 18, atendiendo a más de 1,600 clientes. Optimicé consultas en SQL Server y MySQL, mejorando la eficiencia en un 30%.",
        stack:
          "Angular 18, TypeScript, .NET Core, C#, SQL Server, MySQL, Scrum",
        media: { type: "image", src: "/neoteck.jpg" },
      },
      {
        role: "Analista Programador Mobile & Web",
        company: "Citamed S.A.C.",
        period: "Dic. 2021 - May. 2022",
        location: "Tarapoto, Perú",
        description:
          "Apliqué Flutter (Dart) para desarrollar el frontend de una app de telemedicina conectada a un panel en Angular y PHP. Integré la pasarela Culqi y WebSockets para videollamadas fluidas en tiempo real.",
        stack:
          "Flutter, Dart, Angular, WebSockets, Culqi, PHP (CodeIgniter), Google Cloud, Scrum",
        media: { type: "image", src: "/citamed.jpg" },
      },
      {
        role: "Programador Junior / Analista de Sistemas",
        company: "Arq. Construcción & Serv. Generales S.A.C.",
        period: "Abr. 2021 - Nov. 2021",
        location: "Yurimaguas, Perú",
        description:
          "Centralicé los gastos operativos de obra mediante un sistema web en PHP, facilitando la transparencia de la información para la gerencia.",
        stack: "PHP, Bootstrap, MySQL",
        media: { type: "image", src: "/arqdicosg.png" },
      },
      {
        role: "Programador Junior / Analista de Sistemas",
        company: "Acupuntura China (Acucentro)",
        period: "Jul. 2019 - Dic. 2019",
        location: "Tarapoto, Perú",
        description:
          "Diseñé un sistema de agenda que redujo la inasistencia en un 25% gracias a la integración con la API de WhatsApp, enfocándome en la experiencia del paciente clínico.",
        stack: "PHP, Bootstrap, MySQL, WhatsApp API",
        media: { type: "image", src: "/acucentro.jpg" },
      },
    ],
    projects: [
      {
        title: "Niba's Postres y café",
        company: "nibaspostres.com",
        year: "2025 - 2026",
        description:
          "Sistema integral para cafetería que incluye landing page, carta digital dinámica, libro de reclamaciones y consulta de comprobantes. Implementé el ecosistema administrativo completo con facturación electrónica y almacenamiento en la nube.",
        stack: "React, Django, PostgreSQL, S3 (AWS)",
        link: "https://nibaspostres.com",
        media: {
          type: "image",
          src: "/nibas.png",
        },
      },
      {
        title: "PetGreat",
        company: "petgreat.net",
        year: "2025 - Actualidad",
        description:
          "Plataforma integral para centralizar servicios para mascotas. Desarrollé el ecosistema de gestión médica y de servicios, integrando almacenamiento escalable para expedientes digitales y una interfaz orientada a la experiencia del usuario.",
        stack: "React, Node.js (Express), PHP, MySQL, S3 (AWS), Google Cloud",
        link: "https://petgreat.net",
        media: {
          type: "image",
          src: "/Macbook-Air-PetGreat.png",
        },
      },
      {
        title: "Ark (asesorías 3d)",
        company: "arkasesorias3d.com",
        year: "2026",
        description:
          "Asesoría independiente para arquitectura en Piura, Perú. Desarrollé una landing page y panel administrativo para la gestión de cursos, integrando botones de llamado a la acción y almacenamiento en la nube para recursos digitales.",
        stack: "React, Laravel, MySQL, S3 (AWS)",
        link: "https://arkasesorias3d.com",
        media: {
          type: "image",
          src: "/ark3d.png",
        },
      },
      {
        title: "Control vehicular para el estacionamiento",
        company: "Universidad César Vallejo",
        year: "2024",
        description:
          "Desarrollé un sistema de control vehicular para el estacionamiento de la universidad, que permite registrar y gestionar los vehículos de forma eficiente. Implementé reconocimientos de placas y un sistema Web responsivo para la administración.",
        stack: "Python, Django, OpenCV, React, Tailwind CSS, MySQL",
        link: "",
        media: {
          type: "video",
          src: "https://player.vimeo.com/video/1102048927?h=4dd34792a0",
        },
      },
      {
        title: "Sistema Inteligente para Triaje Hospitalario (Tesis)",
        company: "Hospital II-E Juanjuí",
        year: "2021",
        description:
          "Diseñé y construí un sistema basado en Arduino y Python para medir signos vitales automáticamente, reduciendo el tiempo de espera en el área de triaje en un 78%. Expuse este proyecto en el XXII Congreso Internacional de Informática y Sistemas.",
        stack: "Python, Arduino, C++, Sensores, Hardware",
        link: "https://drive.google.com/file/d/1xf0GCqMX3l4Td9jdRzC6OYyOm_4pfnrf/view?usp=sharing",
        media: {
          type: "video",
          src: "https://player.vimeo.com/video/1102050361?h=4cdf7032d5",
        },
      },
    ],
    education: [
      {
        degree: "Título Profesional de Ingeniero de Sistemas",
        institution: "Universidad César Vallejo",
        period: "2017 - 2021",
      },
      {
        degree: "Movilidad Académica Internacional",
        institution: "Universidad Católica de Oriente, Colombia",
        period: "2020",
      },
    ],
  },
  g = (a) => {
    a.preventDefault();
    const s = a.currentTarget.getAttribute("href").replace(/.*#/, "");
    document.getElementById(s)?.scrollIntoView({ behavior: "smooth" });
  },
  x = ({ id: a, title: t, icon: s, children: o, className: c = "" }) =>
    e.jsx("section", {
      id: a,
      className: `py-24 md:py-32 border-t border-neutral-900 ${c}`,
      children: e.jsxs("div", {
        className: "container mx-auto px-4",
        children: [
          e.jsxs("div", {
            className: "flex flex-col items-center justify-center mb-16",
            children: [
              e.jsx("div", { className: "p-3 bg-neutral-900/50 border border-neutral-800 rounded-xl mb-6 shadow-sm", children: e.jsx(s, { className: "w-6 h-6 text-neutral-300" }) }),
              e.jsx("h2", {
                className:
                  "text-3xl md:text-4xl font-bold text-center text-white tracking-tight",
                children: t,
              })
            ]
          }),
          o,
        ],
      }),
    }),
  ae = ({
    onMenuToggle: a,
    isMenuOpen: t,
    activeSection: s,
    isScrolled: o,
  }) => {
    const c = [
      { id: "about", title: "Sobre Mí" },
      { id: "experience", title: "Experiencia" },
      { id: "projects", title: "Proyectos" },
      { id: "skills", title: "Habilidades" },
      { id: "education", title: "Educación" },
      { id: "contact", title: "Contacto" },
    ],
      n = (r) => `
    text-sm font-medium transition-colors duration-300
    ${s === r ? "text-white" : "text-neutral-400 hover:text-white"}
  `,
      h = `
    fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b
    ${o
          ? "bg-neutral-950/80 backdrop-blur-md border-neutral-800 shadow-sm"
          : "bg-transparent border-transparent"
        }
  `;
    return e.jsxs("header", {
      className: h,
      children: [
        e.jsx("div", {
          className: "container mx-auto px-4",
          children: e.jsxs("div", {
            className: "flex justify-between items-center py-4",
            children: [
              e.jsx("a", {
                href: "#home",
                onClick: g,
                className:
                  "text-2xl font-bold text-white hover:text-neutral-300 transition-colors duration-300",
                children: e.jsx(N, { size: 24 }),
              }),
              e.jsx("nav", {
                className: "hidden md:flex space-x-8",
                children: c.map((r) =>
                  e.jsx(
                    "a",
                    {
                      href: `#${r.id}`,
                      onClick: g,
                      className: n(r.id),
                      children: r.title,
                    },
                    r.id
                  )
                ),
              }),
              e.jsx("button", {
                onClick: a,
                className: "md:hidden text-white",
                children: t ? e.jsx(ee, { size: 24 }) : e.jsx(X, { size: 24 }),
              }),
            ],
          }),
        }),
        t &&
        e.jsx("div", {
          className: "md:hidden bg-neutral-950 border-b border-neutral-800",
          children: e.jsx("nav", {
            className: "flex flex-col items-center space-y-6 py-6",
            children: c.map((r) =>
              e.jsx(
                "a",
                {
                  href: `#${r.id}`,
                  onClick: (m) => {
                    g(m), a();
                  },
                  className: n(r.id),
                  children: r.title,
                },
                r.id
              )
            ),
          }),
        }),
      ],
    });
  },
  te = () =>
    e.jsxs("section", {
      id: "home",
      className:
        "min-h-screen flex flex-col items-center justify-center relative overflow-hidden bg-neutral-950",
      children: [
        e.jsxs("div", {
          className: "absolute inset-0 z-0",
          children: [
            e.jsx("div", {
              className:
                "absolute top-[-20%] left-[50%] translate-x-[-50%] w-[800px] h-[400px] bg-neutral-800/40 rounded-full blur-[120px]",
            }),
            e.jsx("div", {
              className:
                "absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] bg-neutral-900/40 rounded-full blur-[100px]",
            }),
          ],
        }),
        e.jsxs("div", {
          className:
            "text-center z-10 animate-fade-in-up flex-grow flex flex-col justify-center p-4 pt-28",
          children: [
            e.jsx("div", {
              className: "inline-block mb-6 px-4 py-1.5 border border-neutral-800 bg-neutral-900/50 rounded-full mx-auto backdrop-blur-sm",
              children: e.jsx("span", {
                 className: "text-xs font-medium text-neutral-300 tracking-wider uppercase",
                 children: "Disponible para nuevos proyectos"
              })
            }),
            e.jsx("h1", {
              className:
                "text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-white to-neutral-500 mb-6 pb-2 tracking-tight",
              children: i.name,
            }),
            e.jsx("p", {
              className: "text-xl md:text-2xl text-neutral-400 mb-8 font-light",
              children: i.title,
            }),
            e.jsxs("div", {
              className:
                "flex justify-center items-center space-x-4 text-neutral-500 mb-12",
              children: [
                e.jsx(O, { className: "w-5 h-5 text-neutral-400" }),
                e.jsx("span", { children: i.location }),
              ],
            }),
            e.jsxs("div", {
              className:
                "flex flex-col sm:flex-row items-center justify-center gap-4",
              children: [
                e.jsxs("a", {
                  href: "https://wa.me/51955205699",
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className:
                    "group inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-black font-medium rounded-md transition-all hover:bg-neutral-200 w-full sm:w-auto",
                  children: [
                    e.jsx("span", { children: "Contactar" }),
                  ],
                }),
                e.jsxs("a", {
                  href: "/CV-MIGUEL_ANGEL_DAMIAN_VASQUEZ_CHUJANDAMA.pdf",
                  download: "CV-Miguel_Vasquez.pdf",
                  className:
                    "group inline-flex items-center justify-center gap-2 px-6 py-3 bg-neutral-900 border border-neutral-700 text-white font-medium rounded-md transition-all hover:bg-neutral-800 w-full sm:w-auto",
                  children: [
                    e.jsx(T, { className: "w-4 h-4 text-neutral-400 group-hover:text-white" }),
                    e.jsx("span", { children: "Descargar CV" }),
                  ],
                }),
              ],
            }),
          ],
        }),
        e.jsx("div", {
          className: "absolute bottom-10 left-1/2 -translate-x-1/2 z-10",
          children: e.jsx("a", {
            href: "#about",
            "aria-label": "Scroll down",
            onClick: g,
            children: e.jsx(E, {
              className:
                "w-8 h-8 text-neutral-600 hover:text-white transition-colors animate-bounce",
            }),
          }),
        }),
      ],
    }),
  se = () =>
    e.jsx(x, {
      id: "about",
      title: "Sobre Mí",
      icon: w,
      className: "bg-neutral-950",
      children: e.jsx("div", {
        className: "max-w-3xl mx-auto text-center",
        children: e.jsx("p", {
          className: "text-lg md:text-xl text-neutral-400 leading-relaxed font-light",
          children: i.summary,
        }),
      }),
    }),
  oe = () =>
    e.jsx(x, {
      id: "experience",
      title: "Experiencia Profesional",
      icon: w,
      className: "bg-neutral-950",
      children: e.jsx("div", {
        className: "relative max-w-5xl mx-auto space-y-16",
        children: i.experience.map((a, t) =>
          e.jsxs(
            "div",
            {
              className: "flex flex-col md:flex-row items-start w-full gap-8 lg:gap-12",
              children: [
                e.jsx("div", {
                  className: `w-full md:w-5/12 ${t % 2 !== 0 ? "md:order-2" : ""}`,
                  children: e.jsxs("div", {
                    className:
                      "rounded-xl border border-neutral-800 overflow-hidden bg-neutral-900 aspect-[4/3] relative group",
                    children: [
                      e.jsx("div", { className: "absolute inset-0 bg-neutral-950/20 group-hover:bg-transparent transition-colors z-10 pointer-events-none" }),
                      a.media.type === "image"
                        ? e.jsx("img", {
                          src: a.media.src,
                          alt: `${a.company} project`,
                          className: "w-full h-full object-cover filter grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700",
                          onError: (s) => {
                            (s.target.onerror = null),
                              (s.target.src =
                                "https://placehold.co/600x400/111111/333333?text=Sin+Imagen");
                          },
                        })
                        : e.jsx("iframe", {
                          className: "w-full h-full grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 relative z-20",
                          src: a.media.src,
                          title: `Video for ${a.company}`,
                          frameBorder: "0",
                          allow:
                            "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
                          allowFullScreen: !0,
                        }),
                    ]
                  }),
                }),
                e.jsxs("div", {
                  className: `w-full md:w-7/12 flex flex-col justify-center h-full pt-2 ${t % 2 !== 0 ? "md:order-1" : ""}`,
                  children: [
                    e.jsx("p", {
                      className: "text-sm text-neutral-500 font-medium tracking-wide uppercase mb-2",
                      children: a.period,
                    }),
                    e.jsx("h3", {
                      className: "text-2xl font-bold text-white mb-1 tracking-tight",
                      children: a.role,
                    }),
                    e.jsxs("p", {
                      className: "text-lg text-neutral-300 mb-4",
                      children: [
                        a.company,
                        " — ",
                        e.jsx("span", {
                          className: "text-neutral-500",
                          children: a.location,
                        }),
                      ],
                    }),
                    e.jsx("p", {
                      className: "text-neutral-400 mb-6 leading-relaxed font-light",
                      children: a.description,
                    }),
                    e.jsx("div", {
                      className: "flex flex-wrap gap-2",
                      children: a.stack.split(", ").map((s) =>
                        e.jsx(
                          "span",
                          {
                            className:
                              "bg-neutral-900 border border-neutral-800 text-neutral-300 text-xs font-medium px-3 py-1 rounded-full",
                            children: s,
                          },
                          s
                        )
                      ),
                    }),
                  ],
                }),
              ],
            },
            t
          )
        ),
      }),
    }),
  re = () => {
    const a = i.projects.length === 1;
    return e.jsx(x, {
      id: "projects",
      title: "Proyectos Destacados",
      icon: N,
      className: "bg-neutral-950",
      children: e.jsx("div", {
        className: a
          ? "flex justify-center"
          : "grid md:grid-cols-2 gap-8 max-w-5xl mx-auto",
        children: i.projects.map((t, s) =>
          e.jsxs(
            "div",
            {
              className: `bg-neutral-900/40 border border-neutral-800 rounded-2xl overflow-hidden group hover:border-neutral-700 hover:bg-neutral-900/80 transition-all duration-300 flex flex-col ${a ? "max-w-3xl" : ""
                }`,
              children: [
                e.jsxs("div", {
                  className:
                    "overflow-hidden aspect-video bg-neutral-950 relative",
                  children: [
                    e.jsx("div", { className: "absolute inset-0 bg-neutral-950/20 group-hover:bg-transparent transition-colors z-10 pointer-events-none" }),
                    t.media.type === "image"
                      ? e.jsx("img", {
                        src: t.media.src,
                        alt: t.title,
                        className: "w-full h-full object-cover filter grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700",
                        onError: (o) => {
                          (o.target.onerror = null),
                            (o.target.src =
                              "https://placehold.co/600x400/111111/333333?text=Sin+Imagen");
                        },
                      })
                      : e.jsx("iframe", {
                        className: "w-full h-full grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 relative z-20",
                        src: t.media.src,
                        title: `Video for ${t.title}`,
                        frameBorder: "0",
                        allow:
                          "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
                        allowFullScreen: !0,
                      }),
                  ]
                }),
                e.jsxs("div", {
                  className: "p-8 flex-grow flex flex-col",
                  children: [
                    e.jsxs("p", {
                      className: "text-xs font-medium text-neutral-500 uppercase tracking-wider mb-3",
                      children: [t.company, " — ", t.year],
                    }),
                    e.jsx("h3", {
                      className: "text-2xl font-bold text-white mb-3 tracking-tight group-hover:text-neutral-200 transition-colors",
                      children: t.title,
                    }),
                    e.jsx("p", {
                      className: "text-neutral-400 mb-6 font-light leading-relaxed flex-grow",
                      children: t.description,
                    }),
                    e.jsx("div", {
                      className: "flex flex-wrap gap-2 mb-8 mt-auto",
                      children: t.stack.split(", ").map((o) =>
                        e.jsx(
                          "span",
                          {
                            className:
                              "bg-neutral-950 border border-neutral-800 text-neutral-400 text-xs font-medium px-3 py-1 rounded-full",
                            children: o,
                          },
                          o
                        )
                      ),
                    }),
                    t.link &&
                    t.link !== "#" &&
                    e.jsxs("a", {
                      href: t.link,
                      target: "_blank",
                      rel: "noopener noreferrer",
                      className:
                        "inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-neutral-300 transition-colors mt-auto",
                      children: [
                        "Ver proyecto ",
                        e.jsx("svg", { className: "w-4 h-4", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: e.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M14 5l7 7m0 0l-7 7m7-7H3" }) })
                      ],
                    }),
                  ],
                }),
              ],
            },
            s
          )
        ),
      }),
    });
  },
  ie = () =>
    e.jsx(x, {
      id: "skills",
      title: "Habilidades Técnicas",
      icon: $,
      className: "bg-neutral-950",
      children: e.jsx("div", {
        className: "max-w-5xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6",
        children: i.skills.map((a, t) =>
          e.jsxs(
            "div",
            {
              className:
                "bg-neutral-900/30 p-8 rounded-2xl border border-neutral-800 hover:border-neutral-700 hover:bg-neutral-900/60 transition-all duration-300 group",
              children: [
                e.jsx("h3", {
                  className: "text-lg font-bold text-white mb-4 tracking-tight group-hover:text-neutral-200 transition-colors",
                  children: a.category,
                }),
                e.jsx("p", {
                  className: "text-neutral-400 font-light leading-relaxed",
                  children: a.technologies,
                }),
              ],
            },
            t
          )
        ),
      }),
    }),
  le = () =>
    e.jsx(x, {
      id: "education",
      title: "Educación",
      icon: B,
      className: "bg-neutral-950",
      children: e.jsx("div", {
        className: "max-w-3xl mx-auto space-y-6",
        children: i.education.map((a, t) =>
          e.jsxs(
            "div",
            {
              className:
                "p-8 bg-neutral-900/30 rounded-2xl border border-neutral-800 hover:border-neutral-700 hover:bg-neutral-900/60 transition-all duration-300 flex flex-col md:flex-row md:items-center gap-4",
              children: [
                e.jsxs("div", {
                   className: "flex-grow",
                   children: [
                     e.jsx("h3", {
                       className: "text-xl font-bold text-white mb-1 tracking-tight",
                       children: a.degree,
                     }),
                     e.jsx("p", {
                       className: "text-neutral-400 font-light",
                       children: a.institution,
                     }),
                   ]
                }),
                e.jsx("div", {
                  className: "text-sm text-neutral-500 font-medium tracking-wide whitespace-nowrap bg-neutral-950 px-4 py-2 rounded-full border border-neutral-800 w-fit",
                  children: a.period,
                }),
              ],
            },
            t
          )
        ),
      }),
    }),
  ne = () =>
    e.jsx(x, {
      id: "contact",
      title: "Contacto",
      icon: b,
      className: "bg-neutral-950",
      children: e.jsxs("div", {
        className: "max-w-3xl mx-auto text-center bg-neutral-900/30 p-10 rounded-3xl border border-neutral-800",
        children: [
          e.jsx("p", {
            className: "text-xl text-neutral-400 mb-10 font-light leading-relaxed",
            children:
              "Estoy abierto a nuevas oportunidades y colaboraciones. Si tienes un proyecto en mente, ¡hablemos!",
          }),
          e.jsxs("div", {
            className:
              "flex flex-col md:flex-row justify-center items-center gap-6 mb-12",
            children: [
              e.jsxs("a", {
                href: `mailto:${i.contact.email}`,
                className:
                  "flex items-center gap-3 text-neutral-300 hover:text-white bg-neutral-950 px-6 py-4 rounded-xl border border-neutral-800 hover:border-neutral-600 transition-all w-full md:w-auto justify-center",
                children: [
                  e.jsx(b, { className: "w-5 h-5 text-neutral-500" }),
                  e.jsx("span", { className: "font-medium tracking-wide", children: i.contact.email }),
                ],
              }),
              e.jsxs("a", {
                href: "https://wa.me/51955205699",
                target: "_blank",
                rel: "noopener noreferrer",
                className: "flex items-center gap-3 text-neutral-300 hover:text-white bg-neutral-950 px-6 py-4 rounded-xl border border-neutral-800 hover:border-neutral-600 transition-all w-full md:w-auto justify-center",
                children: [
                  e.jsx(Z, { className: "w-5 h-5 text-neutral-500" }),
                  e.jsx("span", { className: "font-medium tracking-wide", children: i.contact.phone }),
                ],
              }),
            ],
          }),
          e.jsxs("div", {
            className: "flex justify-center space-x-6",
            children: [
              e.jsx("a", {
                href: i.contact.linkedin,
                target: "_blank",
                rel: "noopener noreferrer",
                className:
                  "w-12 h-12 flex items-center justify-center bg-neutral-950 rounded-full border border-neutral-800 text-neutral-400 hover:text-white hover:border-neutral-600 transition-all",
                children: e.jsx(R, { size: 20 }),
              }),
              e.jsx("a", {
                href: i.contact.github,
                target: "_blank",
                rel: "noopener noreferrer",
                className:
                  "w-12 h-12 flex items-center justify-center bg-neutral-950 rounded-full border border-neutral-800 text-neutral-400 hover:text-white hover:border-neutral-600 transition-all",
                children: e.jsx(V, { size: 20 }),
              }),
              e.jsx("a", {
                href: i.contact.instagram,
                target: "_blank",
                rel: "noopener noreferrer",
                className:
                  "w-12 h-12 flex items-center justify-center bg-neutral-950 rounded-full border border-neutral-800 text-neutral-400 hover:text-white hover:border-neutral-600 transition-all",
                children: e.jsx(G, { size: 20 }),
              }),
            ],
          }),
        ],
      }),
    }),
  ce = () =>
    e.jsx("footer", {
      className: "bg-neutral-950 text-center py-10 border-t border-neutral-900",
      children: e.jsxs("p", {
        className: "text-neutral-500 text-sm tracking-wide",
        children: [
          "© ",
          new Date().getFullYear(),
          " ",
          i.name,
          ". Todos los derechos reservados.",
        ],
      }),
    });
function me() {
  const [a, t] = d.useState(!1),
    [s, o] = d.useState("home"),
    [c, n] = d.useState(!1);
  d.useEffect(() => {
    const r = document.querySelectorAll("section[id]"),
      m = () => {
        const p = window.pageYOffset;
        n(p > 10);
        let u = "home";
        p < window.innerHeight * 0.7
          ? (u = "home")
          : r.forEach((y) => {
            const k = y.offsetHeight,
              f = y.offsetTop - 100;
            p >= f && p < f + k && (u = y.getAttribute("id"));
          }),
          o(u);
      };
    return (
      window.addEventListener("scroll", m, { passive: !0 }),
      () => window.removeEventListener("scroll", m)
    );
  }, []);
  const h = () => {
    t(!a);
  };
  return e.jsxs("div", {
    className:
      "bg-neutral-950 text-neutral-300 font-sans leading-normal tracking-tight selection:bg-white selection:text-black min-h-screen",
    children: [
      e.jsx(ae, {
        onMenuToggle: h,
        isMenuOpen: a,
        activeSection: s,
        isScrolled: c,
      }),
      e.jsxs("main", {
        children: [
          e.jsx(te, {}),
          e.jsx(se, {}),
          e.jsx(oe, {}),
          e.jsx(re, {}),
          e.jsx(ie, {}),
          e.jsx(le, {}),
          e.jsx(ne, {}),
        ],
      }),
      e.jsx(ce, {}),
    ],
  });
}
export { me as default };
