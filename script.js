const URL_ICONES_TECNOLOGIAS = 'https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons/';


const skills = [{
        name: 'Java SE',
        abbr: 'Jv',
        group: 'backend',
        icon: 'java/java-original.svg',
        accent: '#af1e14',
        projetos: ['generic-data-engine', 'estoque-crud-java', 'biblioteca-java', 'java-do-basico-ao-oop'],
        desc: 'Desenvolvimento Backend e aplicações Java.',
        pillars: [
            ['POO', 'Classes, objetos, construtores, encapsulamento, herança, polimorfismo e interfaces.'],
            ['Generics', 'Tipos genéricos e criação de estruturas reutilizáveis.'],
            ['Collections & Stream API', 'List, Map, manipulação de coleções, filtros e buscas com Streams.'],
            ['Arquitetura', 'Separação de responsabilidades, organização em camadas e Repository Pattern.'],
            ['Exceções', 'Exceções nativas, tratamento de erros e criação de exceções personalizadas.']
        ]
    },
    {
        name: 'MySQL',
        abbr: 'SQL',
        group: 'backend',
        icon: 'mysql/mysql-original.svg',
        accent: '#669BBC',
        projetos: ['estoque-crud-java'],
        desc: 'Bancos de dados relacionais e persistência de dados.',
        pillars: [
            ['Modelagem Relacional', 'Criação de tabelas, chaves primárias, chaves estrangeiras e relacionamentos.'],
            ['SQL', 'Consultas, operações CRUD, filtros, JOINs e manipulação de dados.'],
            ['Integridade de Dados', 'Restrições, relacionamentos e consistência das informações no banco.'],
            ['JDBC', 'Conexões, PreparedStatement e execução de operações no banco.']
        ]
    },
    {
        name: 'HTML5',
        abbr: 'H5',
        group: 'web',
        icon: 'html5/html5-original.svg',
        accent: '#ef652a',
        projetos: ['landing-page-sfizio', 'sfizio-massas'],
        desc: 'Estruturação e semântica de páginas web.',
        pillars: [
            ['Semântica', 'Estruturação de páginas com elementos semânticos.'],
            ['Formulários', 'Criação de formulários, campos e validações básicas.'],
            ['Elementos e Navegação', 'Links, imagens, listas, tabelas e navegação entre páginas.'],
            ['Acessibilidade', 'Uso de atributos e estruturas que facilitam a navegação e compreensão do conteúdo.']
        ]
    },
    {
        name: 'CSS3',
        abbr: 'C3',
        group: 'web',
        icon: 'css3/css3-original.svg',
        accent: '#668bbc',
        projetos: ['landing-page-sfizio', 'sfizio-massas'],
        desc: 'Estilização e construção de interfaces.',
        pillars: [
            ['Layout', 'Flexbox, Grid e posicionamento de elementos.'],
            ['Estilização', 'Cores, tipografia, espaçamentos e efeitos visuais.'],
            ['Responsividade', 'Media Queries e adaptação de layouts para diferentes telas (em desenvolvimento).'],
            ['Animação', 'Transições, transformações e animações com CSS (em desenvolvimento).']
        ]
    },
    {
        name: 'JavaScript',
        abbr: 'JS',
        group: 'web',
        icon: 'javascript/javascript-original.svg',
        accent: '#eab308',
        projetos: ['landing-page-sfizio', 'portfolio-esteves'],
        desc: 'Fundamentos da linguagem e interatividade web.',
        pillars: [
            ['Fundamentos', 'Variáveis, tipos de dados, operadores, condicionais e loops.'],
            ['Funções e Estruturas', 'Funções, arrays e objetos.'],
            ['DOM e Eventos', 'Noções de seleção e manipulação de elementos HTML e tratamento de eventos.'],
            ['Interatividade', 'Implementação de funcionalidades dinâmicas com apoio de referências e código externo.']
        ]
    },
    {
        name: 'C#',
        abbr: 'C#',
        group: 'backend',
        icon: 'csharp/csharp-original.svg',
        accent: '#a855f7',
        projetos: [],
        desc: 'Fundamentos de desenvolvimento com C#.',
        pillars: [
            ['Fundamentos', 'Sintaxe, variáveis, tipos de dados e estruturas de controle.'],
            ['POO', 'Classes, objetos, métodos e construtores.'],
            ['Banco de Dados', 'Integração de aplicações C# com bancos de dados relacionais em atividades práticas.']
        ]
    },
    {
        name: 'Linux',
        abbr: '>_',
        group: 'tools',
        icon: 'linux/linux-original.svg',
        accent: '#94a3b8',
        projetos: [],
        desc: 'Utilização de terminal e administração básica de sistemas Linux.',
        pillars: [
            ['Terminal', 'Navegação por diretórios e execução de comandos.'],
            ['Gerenciamento de Arquivos', 'Criação, cópia, movimentação e remoção de arquivos e diretórios.'],
            ['Permissões e Usuários', 'Gerenciamento de permissões, usuários e privilégios administrativos.'],
            ['Serviços e Servidores', 'Contato prático com Apache HTTP Server e serviços FTP.']
        ]
    },
    {
        name: 'Git & GitHub',
        abbr: 'Git',
        group: 'tools',
        icon: 'git/git-original.svg',
        accent: '#f97316',
        projetos: [],
        desc: 'Controle de versão e colaboração em projetos.',
        pillars: [
            ['Repositórios', 'Criação, organização e gerenciamento de repositórios.'],
            ['Controle de Versão', 'Commits, histórico de alterações, push e pull.'],
            ['Branches', 'Criação, gerenciamento e alternância entre branches.'],
            ['Colaboração', 'Organização do fluxo de desenvolvimento e compartilhamento de projetos.']
        ]
    },
    {
        name: 'Maven',
        abbr: 'Mvn',
        group: 'tools',
        icon: 'maven/maven-original.svg',
        accent: '#f9164f',
        projetos: ['generic-data-engine'],
        desc: 'Build e gerenciamento de dependências.',
        pillars: [
            ['Gerenciamento de Dependências', 'Adição e configuração de bibliotecas pelo pom.xml.'],
            ['Estrutura de Projetos', 'Organização de projetos Java e configuração do pom.xml.'],
            ['Build', 'Conhecimento básico dos comandos Maven e do processo de construção de projetos.']
        ]
    }
];


const gradeHabilidades = document.getElementById('skills-grid');
const pad = (n) => String(n).padStart(3, '0');

function cardHTML(s, i) {
    const projetosRelacionados = s.projetos && s.projetos.length ?
        s.projetos.map(n => `<button class="proj-link" data-proj="${n}" title="Ver projeto ${n}">${n} ↗</button>`).join('') :
        '<p class="back-proj-vazio">// em breve</p>';
    return `
    <div class="tilt"><div class="flipper">
        <div class="face front">
            <button class="face-btn" aria-label="${s.name}: virar carta e ver detalhes"></button>
            <div class="card-num">#${pad(i + 1)}</div>
            <div class="card-art"><img class="tech-icon" src="${URL_ICONES_TECNOLOGIAS}${s.icon}" alt="" draggable="false"></div>
            <div class="card-bottom"><h3>${s.name}</h3><p>${s.desc}</p></div>
        </div>
        <div class="face back" inert>
            <div class="back-head">
                <h3 class="back-title">${s.name}</h3>
                <button class="voltar" data-voltar aria-label="Voltar para a frente da carta">↺</button>
            </div>
            <ul class="pillars">${s.pillars.map(p => `<li><strong>${p[0]}</strong>${p[1]}</li>`).join('')}</ul>
            <div class="back-proj"><div class="back-proj-label">PROJETOS</div>${projetosRelacionados}</div>
        </div>
    </div></div>`;
}

function setTilt(card, x, y, max) {
    x = Math.max(0, Math.min(1, x));
    y = Math.max(0, Math.min(1, y));
    card.style.setProperty('--rotacao-x', `${(0.5 - y) * max * 2}deg`);
    card.style.setProperty('--rotacao-y', `${(x - 0.5) * max * 2}deg`);
}

const animacoesSlots = new WeakMap();

function animarReorganizacao(mudar) {
    const slots = [...document.querySelectorAll('.skill-slot:not([hidden])')];
    const antes = new Map(slots.map((s) => [s, s.getBoundingClientRect()]));
    slots.forEach((s) => {
        const a = animacoesSlots.get(s);
        if (a) a.cancel();
    });
    mudar();
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    slots.forEach((s) => {
        const a = antes.get(s);
        const d = s.getBoundingClientRect();
        const dx = a.left - d.left;
        const dy = a.top - d.top;
        const sx = a.width / d.width;
        const sy = a.height / d.height;
        if (Math.abs(dx) < 1 && Math.abs(dy) < 1 && Math.abs(sx - 1) < 0.01 && Math.abs(sy - 1) < 0.01) return;
        s.style.transformOrigin = '0 0';
        const anim = s.animate([{
            translate: `${dx}px ${dy}px`,
            scale: `${sx} ${sy}`
        }, {
            translate: '0px 0px',
            scale: '1 1'
        }], {
            duration: 550,
            easing: 'cubic-bezier(0.22, 0.7, 0.22, 1)'
        });
        animacoesSlots.set(s, anim);
    });
}

function flipCard(card) {
    const flipped = card.classList.toggle('flipped');
    const slot = card.parentElement;
    animarReorganizacao(() => slot.classList.toggle('expandido', flipped));
    if (flipped) {
        const reduzir = matchMedia('(prefers-reduced-motion: reduce)').matches;
        setTimeout(() => slot.scrollIntoView({
            block: 'nearest',
            behavior: reduzir ? 'auto' : 'smooth'
        }), 620);
    }
    card.querySelector('.front').inert = flipped;
    card.querySelector('.back').inert = !flipped;
    const alvo = flipped ? card.querySelector('[data-voltar]') : card.querySelector('.face-btn');
    alvo.focus({
        preventScroll: true
    });
}

skills.forEach((s, i) => {
    const slot = document.createElement('div');
    slot.className = 'skill-slot';
    slot.dataset.group = s.group;

    const card = document.createElement('div');
    card.className = 'skill-card';
    card.style.setProperty('--cor-destaque-carta', s.accent);
    card.innerHTML = cardHTML(s, i);

    card.querySelector('img').addEventListener('error', (e) => {
        const el = document.createElement('span');
        el.className = 'tech-fallback';
        el.textContent = s.abbr;
        e.target.replaceWith(el);
    });

    card.addEventListener('pointermove', (e) => {
        if (e.pointerType !== 'mouse') return;
        const r = card.getBoundingClientRect();
        setTilt(card, (e.clientX - r.left) / r.width, (e.clientY - r.top) / r.height, 6);
    });
    card.addEventListener('pointerleave', () => setTilt(card, 0.5, 0.5, 0));
    card.addEventListener('click', (e) => {
        const link = e.target.closest('[data-proj]');
        if (link) {
            irParaProjeto(link.dataset.proj);
            return;
        }
        flipCard(card);
    });

    slot.append(card);
    gradeHabilidades.append(slot);
});

document.querySelectorAll('.skills-tab').forEach((tab) => {
    tab.addEventListener('click', () => {
        document.querySelectorAll('.skills-tab').forEach((t) => {
            t.classList.toggle('active', t === tab);
            t.setAttribute('aria-pressed', String(t === tab));
        });
        document.querySelectorAll('.skill-slot').forEach((slot) => {
            slot.hidden = tab.dataset.filter !== 'all' && slot.dataset.group !== tab.dataset.filter;
        });
    });
});



const projetos = [{
        name: 'estoque-crud-java',
        sub: 'Backend Java',
        status: 'Destaque',
        images: [
            'img/estoque-crud-java/img-ec1.png',
            'img/estoque-crud-java/img-ec2.png'
        ],
        site: '',
        repo: 'https://github.com/esteves-mth/estoque-crud-java/',
        desc: 'Aplicação de gerenciamento de estoque desenvolvida em Java, com persistência em MySQL por meio de JDBC.',
        habilidades: ['Java', 'JDBC', 'MySQL'],
        praticado: [
            'Organização de classes e operações de gerenciamento de produtos.',
            'Integração entre aplicação Java e banco de dados MySQL.',
            'Implementação de operações CRUD com consultas parametrizadas.'
        ]
    },
    {
        name: 'generic-data-engine',
        sub: 'Generics e Repository Pattern',
        status: 'Destaque',
        images: [
            'img/generic-data-engine/img-gde1.png',
            'img/generic-data-engine/img-gde2.png'
        ],
        site: '',
        repo: 'https://github.com/esteves-mth/generic-data-engine',
        desc: 'Repositório genérico em memória para entidades identificáveis, utilizando Generics, interfaces e Repository Pattern.',
        habilidades: ['Java', 'Generics', 'Repository Pattern', 'JUnit', 'Maven'],
        praticado: [
            'Criação de interfaces genéricas reutilizáveis.',
            'Implementação de repositório em memória com HashMap.',
            'Validação de dados e tratamento de exceções personalizadas.',
            'Testes de validação de entidades com JUnit 5.',
            'Organização do projeto e gerenciamento de dependências com Maven.'
        ]
    },
    {
        name: 'biblioteca-java',
        sub: 'Collections e Stream API',
        status: 'Concluído',
        images: [
            'img/biblioteca-java/img-bj1.png'
        ],
        site: '',
        repo: 'https://github.com/esteves-mth/biblioteca-java',
        desc: 'Sistema de gerenciamento de biblioteca em Java puro, sem banco de dados, com cadastro de livros, empréstimos, devoluções e histórico.',
        habilidades: ['Java', 'Collections', 'Stream API', 'POO'],
        praticado: [
            'Utilização de List, Map e ArrayList para armazenar dados.',
            'Aplicação de Stream API em filtros e buscas.',
            'Criação e tratamento de exceções personalizadas.',
            'Controle de empréstimos, devoluções e histórico.',
            'Organização do código com orientação a objetos.'
        ]
    },
    {
        name: 'java-do-basico-ao-oop',
        sub: 'Evolução em Java',
        status: 'Em evolução',
        images: [
            'img/java-do-basico-ao-oop/img-jb1.png'
        ],
        site: '',
        repo: 'https://github.com/esteves-mth/java-do-basico-ao-oop',
        desc: 'Repositório de estudos em Java, reunindo exercícios de lógica de programação e conceitos de orientação a objetos.',
        habilidades: ['Java', 'POO', 'Algoritmos'],
        praticado: [
            'Lógica de programação e estruturas de controle.',
            'Classes, objetos e encapsulamento.',
            'Herança, interfaces e polimorfismo.'
        ]
    },
    {
        name: 'portfolio-esteves',
        sub: 'Portfólio pessoal',
        status: 'Em evolução',
        images: [
            'img/portfolio-esteves/img-pe1.png',
            'img/portfolio-esteves/img-pe2.png'
        ],
        site: 'https://esteves-mth.github.io/portfolio-esteves/',
        repo: 'https://github.com/esteves-mth/portfolio-esteves',
        desc: 'Portfólio pessoal desenvolvido com HTML, CSS e JavaScript, reunindo apresentação, habilidades, projetos e contato em uma interface com temas claro e escuro e suporte a português e inglês.',
        habilidades: ['HTML', 'CSS', 'JavaScript'],
        praticado: [
            'Estruturação de páginas e navegação entre seções.',
            'Personalização visual com CSS e componentes interativos.',
            'Utilização de localStorage para persistência de preferências.',
            'Implementação de recursos de tema e idioma.',
            'Implementação de visualizador de imagens com zoom, navegação e suporte a gestos.'
        ]
    },
    {
        name: 'landing-page-sfizio',
        sub: 'Branding e front-end',
        status: 'Concluído',
        images: [
            'img/landing-page-sfizio/img-lp1.png',
            'img/landing-page-sfizio/img-lp2.png'
        ],
        site: 'https://esteves-mth.github.io/landing-page-sfizio/',
        repo: 'https://github.com/esteves-mth/landing-page-sfizio',
        desc: 'Landing page para a marca Sfizio, com foco na apresentação da identidade visual, estrutura semântica e organização do conteúdo.',
        habilidades: ['HTML', 'CSS', 'JavaScript'],
        praticado: [
            'Estruturação de páginas com HTML semântico.',
            'Construção de layouts com Flexbox e Grid.',
            'Implementação de interações básicas com JavaScript.'
        ]
    },
    {
        name: 'sfizio-massas',
        sub: 'E-commerce visual',
        status: 'Concluído',
        images: [
            'img/sfizio-massas/img-sm1.png',
            'img/sfizio-massas/img-sm2.png',
            'img/sfizio-massas/img-sm3.png'
        ],
        site: 'https://esteves-mth.github.io/sfizio-massas/',
        repo: 'https://github.com/esteves-mth/sfizio-massas',
        desc: 'Protótipo visual de e-commerce para uma marca de massas artesanais, com catálogo de produtos e navegação entre páginas. Não possui backend ou persistência de dados.',
        habilidades: ['HTML', 'CSS'],
        praticado: [
            'Organização e apresentação visual de um catálogo de produtos.',
            'Construção da navegação e experiência do visitante.',
            'Estruturação de páginas com HTML e CSS.'
        ]
    }
];

const traducoesDados = {
    'A base de tudo que construo.': 'The foundation of everything I build.',
    'POO': 'OOP',
    'Classes, interfaces e encapsulamento.': 'Classes, interfaces and encapsulation.',
    'Listas, mapas e conjuntos.': 'Lists, maps and sets.',
    'Arquitetura em camadas': 'Layered architecture',
    'Responsabilidades bem definidas.': 'Well-defined responsibilities.',
    'Dados com estrutura e propósito.': 'Data with structure and purpose.',
    'Modelagem relacional': 'Relational modeling',
    'Tabelas, relações e integridade.': 'Tables, relationships and integrity.',
    'Consultas e operações de dados.': 'Queries and data operations.',
    'Conexões e persistência em Java.': 'Connections and persistence in Java.',
    'Semântica antes de estética.': 'Semantics before aesthetics.',
    'Semântica': 'Semantics',
    'Uma estrutura com significado.': 'A structure with meaning.',
    'Formulários': 'Forms',
    'Entradas e organização de dados.': 'Inputs and data organization.',
    'Acessibilidade': 'Accessibility',
    'Interfaces pensadas para pessoas.': 'Interfaces designed for people.',
    'Precisão em cada interface.': 'Precision in every interface.',
    'Flexbox e Grid para organizar.': 'Flexbox and Grid to organize.',
    'Responsividade': 'Responsiveness',
    'Interfaces em diferentes telas.': 'Interfaces across different screens.',
    'Animação': 'Animation',
    'Transições e estados visuais.': 'Transitions and visual states.',
    'Interação que faz sentido.': 'Interaction that makes sense.',
    'Fundamentos': 'Fundamentals',
    'Funções e estruturas de dados.': 'Functions and data structures.',
    'Interfaces que respondem.': 'Interfaces that respond.',
    'Eventos': 'Events',
    'Interações e comportamento.': 'Interactions and behavior.',
    'Novas perspectivas, mesma lógica.': 'New perspectives, same logic.',
    'Sintaxe': 'Syntax',
    'Tipos e estruturas de controle.': 'Types and control structures.',
    'Orientação a objetos': 'Object orientation',
    'Classes e organização do código.': 'Classes and code organization.',
    'Algoritmos': 'Algorithms',
    'Resolução estruturada de problemas.': 'Structured problem solving.',
    'O terminal como ferramenta.': 'The terminal as a tool.',
    'Navegação e comandos.': 'Navigation and commands.',
    'Arquivos e permissões': 'Files and permissions',
    'Organização do ambiente.': 'Environment organization.',
    'Rotinas e automação.': 'Routines and automation.',
    'Meu ambiente de trabalho.': 'My work environment.',
    'Configuração': 'Configuration',
    'Instalação e ajuste do sistema.': 'System installation and tuning.',
    'Comandos no PowerShell e CMD.': 'PowerShell and CMD commands.',
    'Ambiente de dev': 'Dev environment',
    'Ferramentas para programar.': 'Tools for programming.',
    'Cada evolução, um commit.': 'Every step forward, a commit.',
    'Versionamento': 'Version control',
    'Histórico e evolução do código.': 'Code history and evolution.',
    'Trabalho em fluxos separados.': 'Working in separate streams.',
    'Repositórios': 'Repositories',
    'Organização e colaboração.': 'Organization and collaboration.',
    'Arquitetura': 'Architecture',
    'Exceções': 'Exceptions',
    'Todos': 'All',
    'Screenshot do projeto': 'Project screenshot',
    'Destaque': 'Featured',
    'Em evolução': 'In progress',
    'Concluído': 'Completed',
    'Desenvolvimento Backend e aplicações Java.': 'Java backend development and applications.',
    'Tipos genéricos e criação de estruturas reutilizáveis.': 'Generic types and reusable structures.',
    'List, Map, manipulação de coleções, filtros e buscas com Streams.': 'List, Map, collection manipulation, filtering and searches with Streams.',
    'Separação de responsabilidades, organização em camadas e Repository Pattern.': 'Separation of responsibilities, layered architecture and Repository Pattern.',
    'Exceções nativas, tratamento de erros e criação de exceções personalizadas.': 'Built-in exceptions, error handling and custom exception creation.',

    'Bancos de dados relacionais e persistência de dados.': 'Relational databases and data persistence.',
    'Modelagem Relacional': 'Relational Modeling',
    'Criação de tabelas, chaves primárias, chaves estrangeiras e relacionamentos.': 'Creating tables, primary keys, foreign keys and relationships.',
    'Consultas, operações CRUD, filtros, JOINs e manipulação de dados.': 'Queries, CRUD operations, filters, JOINs and data manipulation.',
    'Integridade de Dados': 'Data Integrity',
    'Restrições, relacionamentos e consistência das informações no banco.': 'Constraints, relationships and database consistency.',
    'Conexões, PreparedStatement e execução de operações no banco.': 'Connections, PreparedStatement and database operations.',

    'Estruturação e semântica de páginas web.': 'Structure and semantics of web pages.',
    'Elementos e Navegação': 'Elements and Navigation',
    'Links, imagens, listas, tabelas e navegação entre páginas.': 'Links, images, lists, tables and navigation between pages.',
    'Uso de atributos e estruturas que facilitam a navegação e compreensão do conteúdo.': 'Attributes and structures that improve navigation and content understanding.',
    'Criação de formulários, campos e validações básicas.': 'Creating forms, fields and basic validations.',

    'Estilização e construção de interfaces.': 'Interface styling and development.',
    'Layout': 'Layout',
    'Flexbox, Grid e posicionamento de elementos.': 'Flexbox, Grid and element positioning.',
    'Estilização': 'Styling',
    'Cores, tipografia, espaçamentos e efeitos visuais.': 'Colors, typography, spacing and visual effects.',
    'Media Queries e adaptação de layouts para diferentes telas (em desenvolvimento).': 'Media Queries and layout adaptation for different screens (in progress).',
    'Transições, transformações e animações com CSS (em desenvolvimento).': 'Transitions, transformations and CSS animations (in progress).',
    'Implementação de visualizador de imagens com zoom, navegação e suporte a gestos.': 'Implementation of an image viewer with zoom, navigation and gesture support.',
    'Fundamentos da linguagem e interatividade web.': 'Language fundamentals and web interactivity.',
    'Variáveis, tipos de dados, operadores, condicionais e loops.': 'Variables, data types, operators, conditionals and loops.',
    'Funções e Estruturas': 'Functions and Structures',
    'Funções, arrays e objetos.': 'Functions, arrays and objects.',
    'DOM e Eventos': 'DOM and Events',
    'Noções de seleção e manipulação de elementos HTML e tratamento de eventos.': 'Basic knowledge of selecting and manipulating HTML elements and handling events.',
    'Implementação de funcionalidades dinâmicas com apoio de referências e código externo.': 'Implementing dynamic features with the help of references and external code.',

    'Fundamentos de desenvolvimento com C#.': 'C# development fundamentals.',
    'Sintaxe, variáveis, tipos de dados e estruturas de controle.': 'Syntax, variables, data types and control structures.',
    'Classes, objetos, métodos e construtores.': 'Classes, objects, methods and constructors.',
    'Banco de Dados': 'Database',
    'Integração de aplicações C# com bancos de dados relacionais em atividades práticas.': 'Integration of C# applications with relational databases in practical exercises.',

    'Utilização de terminal e administração básica de sistemas Linux.': 'Terminal usage and basic Linux system administration.',
    'Terminal': 'Terminal',
    'Navegação por diretórios e execução de comandos.': 'Directory navigation and command execution.',
    'Gerenciamento de Arquivos': 'File Management',
    'Criação, cópia, movimentação e remoção de arquivos e diretórios.': 'Creating, copying, moving and deleting files and directories.',
    'Permissões e Usuários': 'Permissions and Users',
    'Gerenciamento de permissões, usuários e privilégios administrativos.': 'Managing permissions, users and administrative privileges.',
    'Serviços e Servidores': 'Services and Servers',
    'Contato prático com Apache HTTP Server e serviços FTP.': 'Hands-on experience with Apache HTTP Server and FTP services.',

    'Controle de versão e colaboração em projetos.': 'Version control and project collaboration.',
    'Criação, organização e gerenciamento de repositórios.': 'Creating, organizing and managing repositories.',
    'Controle de Versão': 'Version Control',
    'Commits, histórico de alterações, push e pull.': 'Commits, change history, push and pull.',
    'Branches': 'Branches',
    'Criação, gerenciamento e alternância entre branches.': 'Creating, managing and switching between branches.',
    'Colaboração': 'Collaboration',
    'Organização do fluxo de desenvolvimento e compartilhamento de projetos.': 'Organizing development workflows and sharing projects.',

    'Build e gerenciamento de dependências.': 'Build and dependency management.',
    'Gerenciamento de Dependências': 'Dependency Management',
    'Adição e configuração de bibliotecas pelo pom.xml.': 'Adding and configuring libraries through pom.xml.',
    'Estrutura de Projetos': 'Project Structure',
    'Organização de projetos Java e configuração do pom.xml.': 'Organizing Java projects and configuring pom.xml.',
    'Conhecimento básico dos comandos Maven e do processo de construção de projetos.': 'Basic knowledge of Maven commands and the project build process.',

    'Backend Java': 'Java backend',
    'Generics e Repository Pattern': 'Generics and Repository Pattern',
    'Collections e Stream API': 'Collections and Stream API',
    'Evolução em Java': 'Growth in Java',
    'Portfólio pessoal': 'Personal portfolio',
    'Branding e front-end': 'Branding and front-end',
    'E-commerce visual': 'Visual e-commerce',
    'Classes, objetos, construtores, encapsulamento, herança, polimorfismo e interfaces.': 'Classes, objects, constructors, encapsulation, inheritance, polymorphism and interfaces.',
    'Collections & Stream API': 'Collections & Stream API',
    'Estruturação de páginas com elementos semânticos.': 'Structuring pages with semantic elements.',
    'Interatividade': 'Interactivity',
    'Aplicação de gerenciamento de estoque desenvolvida em Java, com persistência em MySQL por meio de JDBC.': 'Inventory management application developed in Java, with MySQL persistence through JDBC.',
    'Organização de classes e operações de gerenciamento de produtos.': 'Organization of classes and product management operations.',
    'Integração entre aplicação Java e banco de dados MySQL.': 'Integration between a Java application and a MySQL database.',
    'Implementação de operações CRUD com consultas parametrizadas.': 'Implementation of CRUD operations with parameterized queries.',

    'Repositório genérico em memória para entidades identificáveis, utilizando Generics, interfaces e Repository Pattern.': 'In-memory generic repository for identifiable entities, using Generics, interfaces and the Repository Pattern.',
    'Criação de interfaces genéricas reutilizáveis.': 'Creation of reusable generic interfaces.',
    'Implementação de repositório em memória com HashMap.': 'Implementation of an in-memory repository with HashMap.',
    'Validação de dados e tratamento de exceções personalizadas.': 'Data validation and custom exception handling.',
    'Testes de validação de entidades com JUnit 5.': 'Entity validation tests with JUnit 5.',
    'Organização do projeto e gerenciamento de dependências com Maven.': 'Project organization and dependency management with Maven.',

    'Sistema de gerenciamento de biblioteca em Java puro, sem banco de dados, com cadastro de livros, empréstimos, devoluções e histórico.': 'Library management system built with pure Java, without a database, featuring book registration, loans, returns and history.',
    'Utilização de List, Map e ArrayList para armazenar dados.': 'Using List, Map and ArrayList to store data.',
    'Aplicação de Stream API em filtros e buscas.': 'Applying the Stream API to filtering and searches.',
    'Criação e tratamento de exceções personalizadas.': 'Creating and handling custom exceptions.',
    'Controle de empréstimos, devoluções e histórico.': 'Managing loans, returns and history.',
    'Organização do código com orientação a objetos.': 'Object-oriented code organization.',

    'Repositório de estudos em Java, reunindo exercícios de lógica de programação e conceitos de orientação a objetos.': 'Java study repository featuring programming logic exercises and object-oriented programming concepts.',
    'Lógica de programação e estruturas de controle.': 'Programming logic and control structures.',
    'Classes, objetos e encapsulamento.': 'Classes, objects and encapsulation.',
    'Herança, interfaces e polimorfismo.': 'Inheritance, interfaces and polymorphism.',

    'Portfólio pessoal desenvolvido com HTML, CSS e JavaScript, reunindo apresentação, habilidades, projetos e contato em uma interface com temas claro e escuro e suporte a português e inglês.': 'Personal portfolio built with HTML, CSS and JavaScript, featuring an introduction, skills, projects and contact section, with light and dark themes and Portuguese and English support.',
    'Estruturação de páginas e navegação entre seções.': 'Page structure and navigation between sections.',
    'Personalização visual com CSS e componentes interativos.': 'Visual customization with CSS and interactive components.',
    'Utilização de localStorage para persistência de preferências.': 'Using localStorage to persist preferences.',
    'Implementação de recursos de tema e idioma.': 'Implementation of theme and language features.',

    'Landing page para a marca Sfizio, com foco na apresentação da identidade visual, estrutura semântica e organização do conteúdo.': 'Landing page for the Sfizio brand, focused on visual identity, semantic structure and content organization.',
    'Estruturação de páginas com HTML semântico.': 'Structuring pages with semantic HTML.',
    'Construção de layouts com Flexbox e Grid.': 'Building layouts with Flexbox and Grid.',
    'Implementação de interações básicas com JavaScript.': 'Implementing basic interactions with JavaScript.',

    'Protótipo visual de e-commerce para uma marca de massas artesanais, com catálogo de produtos e navegação entre páginas. Não possui backend ou persistência de dados.': 'Visual e-commerce prototype for an artisanal pasta brand, featuring a product catalog and navigation between pages. It does not include a backend or data persistence.',
    'Organização e apresentação visual de um catálogo de produtos.': 'Organization and visual presentation of a product catalog.',
    'Construção da navegação e experiência do visitante.': 'Building navigation and visitor experience.',
    'Estruturação de páginas com HTML e CSS.': 'Structuring pages with HTML and CSS.'
};

projetos.forEach((p) => {
    traducoesDados[`matheus / projetos / ${p.name}`] = `matheus / projects / ${p.name}`;
});
traducoesDados[`PROJETOS / ${String(projetos.length).padStart(2, '0')}`] = `PROJECTS / ${String(projetos.length).padStart(2, '0')}`;

const listaPastas = document.getElementById('pastas');
const containerJanelaProjeto = document.getElementById('janela-wrap');
const janelaProjeto = document.getElementById('janela');
const navegacaoProjetos = document.getElementById('nav-dir');
const prog = document.getElementById('prog');
const indicadorProgresso = document.getElementById('prog-thumb');
const botaoProjetoAnterior = document.getElementById('prev');
const botaoProximoProjeto = document.getElementById('next');
const prefereMovimentoReduzido = () => matchMedia('(prefers-reduced-motion: reduce)').matches;
let pastaAberta = null;

document.getElementById('pastas-label').textContent = `PROJETOS / ${String(projetos.length).padStart(2, '0')}`;

const iconePasta = `<svg class="pasta-ico" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path class="ico-fechada" d="M3 7V5h7l3 3h8v12H3V7Z" stroke="currentColor" stroke-width="1.4"/>
    <path class="ico-aberta" d="M3 10V5h7l3 3h8v3M3 20h17l3-9H6l-3 9Z" stroke="currentColor" stroke-width="1.4"/>
</svg>`;

const areaPastas = document.getElementById('pastas-area');
const pontosProj = document.getElementById('pontos-proj');

const ICONES_TECH = {
    'Java': 'java/java-original.svg',
    'MySQL': 'mysql/mysql-original.svg',
    'HTML': 'html5/html5-original.svg',
    'CSS': 'css3/css3-original.svg',
    'JavaScript': 'javascript/javascript-original.svg',
    'Maven': 'maven/maven-original.svg',
    'JUnit': 'junit/junit-original.svg'
};

const ICONES_SVG = {
    'JDBC': '<path d="M4 7c0-1.7 3.6-3 8-3s8 1.3 8 3-3.6 3-8 3-8-1.3-8-3Zm0 0v10c0 1.7 3.6 3 8 3s8-1.3 8-3V7M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3"/>',
    'Generics': '<path d="M8 6 3 12l5 6M16 6l5 6-5 6M13.5 5l-3 14"/>',
    'Repository Pattern': '<path d="m12 3 9 4.5-9 4.5L3 7.5 12 3ZM3 12l9 4.5 9-4.5M3 16.5 12 21l9-4.5"/>',
    'Collections': '<path d="M9 6h12M9 12h12M9 18h12M4 6h.01M4 12h.01M4 18h.01"/>',
    'Stream API': '<path d="M3 7c3 0 3-3 6-3s3 3 6 3 3-3 6-3M3 14c3 0 3-3 6-3s3 3 6 3 3-3 6-3M3 21c3 0 3-3 6-3s3 3 6 3 3-3 6-3"/>',
    'POO': '<path d="m12 3 8 4.5v9L12 21l-8-4.5v-9L12 3ZM12 12l8-4.5M12 12v9M12 12 4 7.5"/>',
    'Algoritmos': '<circle cx="6" cy="5" r="2"/><circle cx="6" cy="19" r="2"/><circle cx="18" cy="9" r="2"/><path d="M6 7v10M18 11c0 4-6 3-12 6"/>',
    'padrao': '<path d="M4 4h8l8 8-8 8-8-8V4ZM8 8h.01"/>'
};

const SKILL_DA_TAG = {
    'Java': 'Java SE',
    'POO': 'Java SE',
    'Generics': 'Java SE',
    'Collections': 'Java SE',
    'Stream API': 'Java SE',
    'Repository Pattern': 'Java SE',
    'Algoritmos': 'Java SE',
    'JDBC': 'MySQL',
    'MySQL': 'MySQL',
    'HTML': 'HTML5',
    'CSS': 'CSS3',
    'JavaScript': 'JavaScript',
    'Maven': 'Maven'
};

function svgTech(nome) {
    return `<svg class="tech-ic" viewBox="0 0 24 24" aria-hidden="true">${ICONES_SVG[nome] || ICONES_SVG.padrao}</svg>`;
}

function iconeTech(nome) {
    const arquivo = ICONES_TECH[nome];
    if (!arquivo) return svgTech(nome);
    return `<img class="tech-ic" data-tech="${nome}" src="${URL_ICONES_TECNOLOGIAS}${arquivo}" alt="" draggable="false">`;
}

function ativarFallbackIcones(raiz) {
    raiz.querySelectorAll('img[data-tech]').forEach((img) => {
        const trocar = () => {
            const molde = document.createElement('template');
            molde.innerHTML = svgTech(img.dataset.tech);
            img.replaceWith(molde.content.firstChild);
        };
        img.addEventListener('error', trocar, {
            once: true
        });
        if (img.complete && img.naturalWidth === 0) trocar();
    });
}

function grupoDe(p) {
    const h = p.habilidades || [];
    if (h.includes('Java')) return 'java';
    if (h.some((t) => ['HTML', 'CSS', 'JavaScript'].includes(t))) return 'web';
    return 'outros';
}

function tagHTML(t) {
    const skill = SKILL_DA_TAG[t];
    const icone = iconeTech(t);
    return skill ?
        `<button type="button" class="tag" data-skill="${skill}" title="Ver na seção Skills: ${skill}">${icone}${t}</button>` :
        `<span class="tag">${icone}${t}</span>`;
}

function pastasVisiveis() {
    return [...listaPastas.querySelectorAll('.pasta:not([hidden])')].map((b) => Number(b.dataset.i));
}

listaPastas.innerHTML = projetos.map((p, i) => `
    <button class="pasta" data-i="${i}" data-grupo="${grupoDe(p)}" aria-expanded="false" aria-controls="janela-wrap">
        <span class="pasta-orelha"></span>
        <span class="pasta-corpo">
            <span class="pasta-topo">
                <span>#${String(i + 1).padStart(2, '0')}</span>
                <span class="status ${p.status === 'Destaque' ? 'destaque' : ''}">${p.status}</span>
            </span>
            <span>
                <span class="pasta-nome">${p.name}</span>
                <span class="pasta-sub">${p.sub}</span>
            </span>
            <span class="pasta-base"><span class="pasta-grupo">${iconePasta}<span class="pasta-techs">${(p.habilidades || []).slice(0, 3).map(iconeTech).join('')}</span></span><span class="pasta-acao">ABRIR ↘</span></span>
        </span>
    </button>`).join('');
ativarFallbackIcones(listaPastas);

function semImagemHTML(p) {
    return `<div class="img-vazia"><b>Screenshot do projeto</b><span>img/${p.name}.png</span></div>`;
}

function galeriaHTML(p) {
    const imagensProjeto = p.images && p.images.length ? p.images : (p.image ? [p.image] : []);
    if (!imagensProjeto.length) return semImagemHTML(p);
    const slides = imagensProjeto.map((src, n) => `<div class="slide"><img src="${src}" alt="Screenshot ${n + 1} de ${imagensProjeto.length} do projeto ${p.name}"></div>`).join('');
    if (imagensProjeto.length === 1) return `<div class="galeria-trilho">${slides}</div>`;
    return `<div class="galeria-trilho" tabindex="0" role="group" aria-label="Screenshots do projeto ${p.name}">${slides}</div>
        <button class="g-seta g-prev" aria-label="Screenshot anterior">←</button>
        <button class="g-seta g-next" aria-label="Próxima screenshot">→</button>
        <span class="g-contador" aria-hidden="true"></span>
        <div class="g-pontos">${imagensProjeto.map((_, n) => `<button class="g-ponto" data-ponto="${n}" aria-label="Ir para a screenshot ${n + 1}"></button>`).join('')}</div>`;
}

function iniciarGaleria(p) {
    const box = janelaProjeto.querySelector('.janela-img');
    box.querySelectorAll('.slide img').forEach(img => img.addEventListener('error', () => {
        img.parentElement.innerHTML = semImagemHTML(p);
    }));
    const trilho = box.querySelector('.galeria-trilho');
    const pontos = box.querySelectorAll('.g-ponto');
    if (!trilho || !pontos.length) return;
    const total = pontos.length;
    const prev = box.querySelector('.g-prev'),
        next = box.querySelector('.g-next');
    const contador = box.querySelector('.g-contador');
    const comportamento = () => prefereMovimentoReduzido() ? 'auto' : 'smooth';
    const atual = () => Math.round(trilho.scrollLeft / (trilho.clientWidth || 1));

    function atualizar() {
        const i = atual();
        contador.textContent = `${i + 1} / ${total}`;
        pontos.forEach((d, n) => d.classList.toggle('ativo', n === i));
        prev.disabled = i === 0;
        next.disabled = i === total - 1;
    }
    trilho.addEventListener('scroll', atualizar, {
        passive: true
    });
    prev.addEventListener('click', () => trilho.scrollBy({
        left: -trilho.clientWidth,
        behavior: comportamento()
    }));
    next.addEventListener('click', () => trilho.scrollBy({
        left: trilho.clientWidth,
        behavior: comportamento()
    }));
    pontos.forEach(d => d.addEventListener('click', () => trilho.scrollTo({
        left: Number(d.dataset.ponto) * trilho.clientWidth,
        behavior: comportamento()
    })));
    trilho.addEventListener('keydown', e => {
        if (e.key === 'ArrowRight') {
            e.preventDefault();
            next.click();
        }
        if (e.key === 'ArrowLeft') {
            e.preventDefault();
            prev.click();
        }
    });
    atualizar();
}

function navegacaoJanelaHTML(p) {
    const vis = pastasVisiveis();
    const pos = vis.indexOf(projetos.indexOf(p));
    if (vis.length < 2 || pos < 0) return '';
    const dois = (n) => String(n).padStart(2, '0');
    return `<span class="janela-nav">
            <button type="button" data-nav-proj="-1" aria-label="Projeto anterior"${pos === 0 ? ' disabled' : ''}>‹</button>
            <span class="janela-pos">${dois(pos + 1)} / ${dois(vis.length)}</span>
            <button type="button" data-nav-proj="1" aria-label="Próximo projeto"${pos === vis.length - 1 ? ' disabled' : ''}>›</button>
        </span>`;
}

function janelaHTML(p) {
    const praticado = p.praticado && p.praticado.length ?
        `<ul class="janela-pratica">${p.praticado.map((t) => `<li>${t}</li>`).join('')}</ul>` :
        '<p class="janela-vazio">// em breve</p>';
    const habilidades = p.habilidades && p.habilidades.length ?
        `<ul class="janela-tags">${p.habilidades.map((t) => `<li>${tagHTML(t)}</li>`).join('')}</ul>` :
        '<p class="janela-vazio">// em breve</p>';
    return `
    <div class="janela-barra">
        <span class="janela-pontos" aria-hidden="true"><i></i><i></i><i></i></span>
        <span class="janela-caminho">matheus / projetos / ${p.name}</span>
        ${navegacaoJanelaHTML(p)}
        <button class="janela-fechar" data-fechar aria-label="Fechar pasta">×</button>
    </div>
    <div class="janela-corpo">
        <div class="janela-img">${galeriaHTML(p)}</div>
        <div class="janela-info">
            <h3>${p.name}</h3>
            <p>${p.desc}</p>
            <div class="janela-label">HABILIDADES UTILIZADAS</div>
            ${habilidades}
            <div class="janela-label">O QUE FOI PRATICADO</div>
            ${praticado}
            <div class="janela-links">
                ${p.site ? `<a class="site" href="${p.site}" target="_blank" rel="noopener noreferrer">Ver site ↗</a>` : ''}
                ${p.repo ? `<a href="${p.repo}" target="_blank" rel="noopener noreferrer">GitHub ↗</a>` : ''}
            </div>
        </div>
    </div>`;
}

function syncPastas() {
    listaPastas.querySelectorAll('.pasta').forEach((b) => {
        const ativa = Number(b.dataset.i) === pastaAberta;
        b.setAttribute('aria-expanded', String(ativa));
        b.querySelector('.pasta-acao').textContent = ativa ? 'ABERTA ↙' : 'ABRIR ↘';
    });
    atualizarIndicador();
}

function abrirPasta(i) {
    const p = projetos[i];
    pastaAberta = i;
    janelaProjeto.innerHTML = janelaHTML(p);
    ativarFallbackIcones(janelaProjeto);
    iniciarGaleria(p);
    containerJanelaProjeto.inert = false;
    containerJanelaProjeto.classList.add('aberta');
    syncPastas();
}

function fecharPasta() {
    const i = pastaAberta;
    pastaAberta = null;
    containerJanelaProjeto.classList.remove('aberta');
    containerJanelaProjeto.inert = true;
    syncPastas();
    if (i !== null) listaPastas.querySelector(`[data-i="${i}"]`).focus({
        preventScroll: true
    });
}

listaPastas.addEventListener('click', (e) => {
    const b = e.target.closest('.pasta');
    if (!b) return;
    const i = Number(b.dataset.i);
    if (pastaAberta === i) fecharPasta();
    else {
        abrirPasta(i);
        b.scrollIntoView({
            inline: 'nearest',
            block: 'nearest',
            behavior: prefereMovimentoReduzido() ? 'auto' : 'smooth'
        });
    }
});
janelaProjeto.addEventListener('click', (e) => {
    if (e.target.closest('[data-fechar]')) {
        fecharPasta();
        return;
    }
    const nav = e.target.closest('[data-nav-proj]');
    if (nav) {
        navegarProjeto(Number(nav.dataset.navProj));
        return;
    }
    const tag = e.target.closest('[data-skill]');
    if (tag) irParaSkill(tag.dataset.skill);
});
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && pastaAberta !== null && containerJanelaProjeto.contains(document.activeElement)) fecharPasta();
});

function passoCarrossel() {
    const card = listaPastas.querySelector('.pasta:not([hidden])');
    const gap = parseFloat(getComputedStyle(listaPastas).columnGap) || 0;
    return card.offsetWidth + gap;
}

function irPara(direcao) {
    listaPastas.scrollBy({
        left: direcao * passoCarrossel(),
        behavior: prefereMovimentoReduzido() ? 'auto' : 'smooth'
    });
}
botaoProjetoAnterior.addEventListener('click', () => irPara(-1));
botaoProximoProjeto.addEventListener('click', () => irPara(1));

function atualizarIndicador() {
    const filhos = [...listaPastas.children].filter((c) => !c.hidden);
    const chave = filhos.map((c) => c.dataset.i).join(',');
    if (pontosProj.dataset.chave !== chave) {
        pontosProj.dataset.chave = chave;
        pontosProj.innerHTML = filhos.map((c) => `<button type="button" class="ponto-proj" data-ir="${c.dataset.i}" aria-label="Abrir ${projetos[c.dataset.i].name}"></button>`).join('');
    }
    const esq = listaPastas.scrollLeft,
        dir = esq + listaPastas.clientWidth;
    pontosProj.querySelectorAll('.ponto-proj').forEach((d, k) => {
        const c = filhos[k];
        d.classList.toggle('na-tela', c.offsetLeft >= esq - 8 && c.offsetLeft + c.offsetWidth <= dir + 8);
        d.classList.toggle('ativo', Number(c.dataset.i) === pastaAberta);
    });
    const pos = filhos.findIndex((c) => Number(c.dataset.i) === pastaAberta);
    const dois = (n) => String(n).padStart(2, '0');
    const de = document.documentElement.lang === 'en' ? 'of' : 'de';
    document.getElementById('contador').textContent = pos < 0 ? '' : `#${dois(pos + 1)} ${de} ${dois(filhos.length)}`;
}

function atualizarCarrossel() {
    const max = listaPastas.scrollWidth - listaPastas.clientWidth;
    const temRolagem = max > 2;
    navegacaoProjetos.hidden = !temRolagem;
    prog.hidden = !temRolagem;
    botaoProjetoAnterior.hidden = !temRolagem;
    botaoProximoProjeto.hidden = !temRolagem;
    areaPastas.classList.toggle('tem-esq', temRolagem && listaPastas.scrollLeft > 2);
    areaPastas.classList.toggle('tem-dir', temRolagem && listaPastas.scrollLeft < max - 2);
    if (!temRolagem) return;
    const filhos = [...listaPastas.children].filter((c) => !c.hidden);

    botaoProjetoAnterior.disabled = listaPastas.scrollLeft <= 2;
    botaoProximoProjeto.disabled = listaPastas.scrollLeft >= max - 2;

    atualizarIndicador();

    indicadorProgresso.style.width = `${(listaPastas.clientWidth / listaPastas.scrollWidth) * 100}%`;
    indicadorProgresso.style.left = `${(listaPastas.scrollLeft / listaPastas.scrollWidth) * 100}%`;
}
listaPastas.addEventListener('scroll', atualizarCarrossel, {
    passive: true
});
addEventListener('resize', atualizarCarrossel);

function irParaProjeto(nome) {
    const i = projetos.findIndex(p => p.name === nome);
    if (i < 0) return;
    if (listaPastas.querySelector(`[data-i="${i}"]`).hidden) document.querySelector('.projetos-tab[data-filter="all"]').click();
    abrirPasta(i);
    const comportamento = prefereMovimentoReduzido() ? 'auto' : 'smooth';
    document.querySelector('.pastas-nav').scrollIntoView({
        behavior: comportamento,
        block: 'start'
    });
    const pasta = listaPastas.querySelector(`[data-i="${i}"]`);
    listaPastas.scrollTo({
        left: Math.max(0, pasta.offsetLeft - 4),
        behavior: comportamento
    });
    pasta.classList.remove('pulso');
    void pasta.offsetWidth;
    pasta.classList.add('pulso');
    setTimeout(() => pasta.classList.remove('pulso'), 2800);
    pasta.focus({
        preventScroll: true
    });
}

abrirPasta(0);
atualizarCarrossel();

pontosProj.addEventListener('click', (e) => {
    const ponto = e.target.closest('[data-ir]');
    if (!ponto) return;
    abrirPasta(Number(ponto.dataset.ir));
    listaPastas.querySelector(`[data-i="${ponto.dataset.ir}"]`).scrollIntoView({
        inline: 'nearest',
        block: 'nearest',
        behavior: prefereMovimentoReduzido() ? 'auto' : 'smooth'
    });
});
new MutationObserver(atualizarIndicador).observe(document.documentElement, {
    attributes: true,
    attributeFilter: ['lang']
});

function navegarProjeto(direcao) {
    const vis = pastasVisiveis();
    const pos = vis.indexOf(pastaAberta);
    const alvo = vis[pos + direcao];
    if (pos < 0 || alvo === undefined) return;
    abrirPasta(alvo);
    const pasta = listaPastas.querySelector(`[data-i="${alvo}"]`);
    pasta.scrollIntoView({
        inline: 'nearest',
        block: 'nearest',
        behavior: prefereMovimentoReduzido() ? 'auto' : 'smooth'
    });
    const seguinte = janelaProjeto.querySelector(`[data-nav-proj="${direcao}"]:not(:disabled)`) || janelaProjeto.querySelector('[data-nav-proj]:not(:disabled)');
    if (seguinte) seguinte.focus({
        preventScroll: true
    });
}

document.addEventListener('keydown', (e) => {
    if (e.key !== 'ArrowLeft' && e.key !== 'ArrowRight') return;
    if (pastaAberta === null || !containerJanelaProjeto.contains(document.activeElement)) return;
    if (document.activeElement.closest('.galeria-trilho')) return;
    e.preventDefault();
    navegarProjeto(e.key === 'ArrowRight' ? 1 : -1);
});

function irParaSkill(nome) {
    const i = skills.findIndex((s) => s.name === nome);
    const slot = document.querySelectorAll('.skill-slot')[i];
    if (i < 0 || !slot) return;
    if (slot.hidden) document.querySelector('.skills-tab[data-filter="all"]').click();
    const reduzir = prefereMovimentoReduzido();
    slot.scrollIntoView({
        behavior: reduzir ? 'auto' : 'smooth',
        block: 'center'
    });
    const card = slot.querySelector('.skill-card');
    setTimeout(() => {
        if (!card.classList.contains('flipped')) flipCard(card);
    }, reduzir ? 0 : 650);
}

document.querySelectorAll('.projetos-tab').forEach((tab) => {
    tab.addEventListener('click', () => {
        document.querySelectorAll('.projetos-tab').forEach((t) => {
            t.classList.toggle('active', t === tab);
            t.setAttribute('aria-pressed', String(t === tab));
        });
        let n = 0;
        listaPastas.querySelectorAll('.pasta').forEach((b) => {
            b.hidden = tab.dataset.filter !== 'all' && b.dataset.grupo !== tab.dataset.filter;
            b.classList.remove('entra');
            if (!b.hidden && !prefereMovimentoReduzido()) {
                b.style.setProperty('--n', n++);
                void b.offsetWidth;
                b.classList.add('entra');
                b.addEventListener('animationend', () => b.classList.remove('entra'), {
                    once: true
                });
            }
        });
        listaPastas.scrollTo({
            left: 0,
            behavior: 'auto'
        });
        const vis = pastasVisiveis();
        if (vis.length && !vis.includes(pastaAberta)) abrirPasta(vis[0]);
        else if (pastaAberta !== null) abrirPasta(pastaAberta);
        atualizarCarrossel();
    });
});

let arrasto = null;
let bloquearCliqueArrasto = false;
listaPastas.addEventListener('pointerdown', (e) => {
    if (e.pointerType !== 'mouse' || e.button !== 0) return;
    arrasto = {
        x: e.clientX,
        inicio: listaPastas.scrollLeft,
        moveu: false
    };
});
addEventListener('pointermove', (e) => {
    if (!arrasto) return;
    const dx = e.clientX - arrasto.x;
    if (!arrasto.moveu && Math.abs(dx) > 6) {
        arrasto.moveu = true;
        listaPastas.classList.add('arrastando');
    }
    if (arrasto.moveu) listaPastas.scrollLeft = arrasto.inicio - dx;
});
['pointerup', 'pointercancel'].forEach((tipo) => addEventListener(tipo, () => {
    if (!arrasto) return;
    const moveu = arrasto.moveu;
    arrasto = null;
    if (!moveu) return;
    listaPastas.classList.remove('arrastando');
    const passo = passoCarrossel();
    listaPastas.scrollTo({
        left: Math.round(listaPastas.scrollLeft / passo) * passo,
        behavior: prefereMovimentoReduzido() ? 'auto' : 'smooth'
    });
    bloquearCliqueArrasto = true;
    setTimeout(() => {
        bloquearCliqueArrasto = false;
    }, 0);
}));
listaPastas.addEventListener('click', (e) => {
    if (bloquearCliqueArrasto) e.stopImmediatePropagation();
}, true);

listaPastas.addEventListener('keydown', (e) => {
    if (e.key !== 'ArrowLeft' && e.key !== 'ArrowRight') return;
    const atual = e.target.closest('.pasta');
    if (!atual) return;
    const lista = [...listaPastas.querySelectorAll('.pasta:not([hidden])')];
    const alvo = lista[lista.indexOf(atual) + (e.key === 'ArrowRight' ? 1 : -1)];
    if (!alvo) return;
    e.preventDefault();
    alvo.focus({
        preventScroll: true
    });
    alvo.scrollIntoView({
        inline: 'nearest',
        block: 'nearest',
        behavior: prefereMovimentoReduzido() ? 'auto' : 'smooth'
    });
});

const botaoCopiarEmail = document.getElementById('copiar-email');
const statusCopiaEmail = document.getElementById('copiar-status');
let temporizadorCopiaEmail;

function avisoCopia(texto) {
    statusCopiaEmail.textContent = texto;
    clearTimeout(temporizadorCopiaEmail);
    temporizadorCopiaEmail = setTimeout(() => {
        statusCopiaEmail.textContent = '';
    }, 2500);
}

botaoCopiarEmail.addEventListener('click', async () => {
    const email = botaoCopiarEmail.dataset.email;
    try {
        await navigator.clipboard.writeText(email);
        avisoCopia('// endereço copiado');
    } catch (err) {

        const alvo = document.querySelector('.contato-endereco');
        const faixa = document.createRange();
        faixa.selectNodeContents(alvo);
        const sel = getSelection();
        sel.removeAllRanges();
        sel.addRange(faixa);
        avisoCopia('// selecione e copie (Ctrl+C)');
    }
});

const EMAIL_CONTATO = 'matheus.estevesdearaujo@gmail.com';


const ENDPOINT_FORMULARIO = `https://formsubmit.co/ajax/${EMAIL_CONTATO}`;

const formularioContato = document.getElementById('contato-form');
const statusFormulario = document.getElementById('form-status');
const botaoEnviarMensagem = document.getElementById('cf-enviar');

function mostrarErro(campo, msg) {
    const box = campo.closest('.campo');
    box.classList.add('invalido');
    campo.setAttribute('aria-invalid', 'true');
    let p = box.querySelector('.erro');
    if (!p) {
        p = document.createElement('p');
        p.className = 'erro';
        p.id = campo.id + '-erro';
        box.append(p);
        campo.setAttribute('aria-describedby', p.id);
    }
    p.textContent = msg;
}

function limparErro(campo) {
    const box = campo.closest('.campo');
    box.classList.remove('invalido');
    campo.removeAttribute('aria-invalid');
    const p = box.querySelector('.erro');
    if (p) p.remove();
}

function statusForm(texto, tipo) {
    statusFormulario.textContent = texto;
    statusFormulario.className = 'form-status' + (tipo ? ' ' + tipo : '');
}

formularioContato.querySelectorAll('input, textarea').forEach((c) => c.addEventListener('input', () => limparErro(c)));

formularioContato.addEventListener('submit', async (e) => {
    e.preventDefault();
    const nome = formularioContato.nome,
        email = formularioContato.email,
        msg = formularioContato.mensagem;
    let primeiroErro = null;

    [nome, email, msg].forEach(limparErro);
    if (!nome.value.trim()) {
        mostrarErro(nome, '// informe seu nome');
        primeiroErro = primeiroErro || nome;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim())) {
        mostrarErro(email, '// informe um e-mail válido');
        primeiroErro = primeiroErro || email;
    }
    if (msg.value.trim().length < 10) {
        mostrarErro(msg, '// escreva uma mensagem (mínimo 10 caracteres)');
        primeiroErro = primeiroErro || msg;
    }
    if (primeiroErro) {
        primeiroErro.focus();
        statusForm('', '');
        return;
    }

    if (formularioContato.site.value) {
        statusForm('// mensagem enviada', 'ok');
        formularioContato.reset();
        return;
    }

    if (!ENDPOINT_FORMULARIO) {
        const assunto = `Contato pelo portfólio - ${nome.value.trim()}`;
        const corpo = `Nome: ${nome.value.trim()}\nE-mail para resposta: ${email.value.trim()}\n\n${msg.value.trim()}`;
        const url = `https://mail.google.com/mail/?view=cm&fs=1&to=${EMAIL_CONTATO}&su=${encodeURIComponent(assunto)}&body=${encodeURIComponent(corpo)}`;
        window.open(url, '_blank', 'noopener');
        statusForm('// abrindo o Gmail em uma nova aba... é só apertar enviar lá', '');
        return;
    }

    botaoEnviarMensagem.disabled = true;
    statusForm('// enviando...', '');
    try {
        const dados = new FormData(formularioContato);
        dados.delete('site');
        dados.append('_subject', `Contato pelo portfólio - ${nome.value.trim()}`);
        dados.append('_template', 'table');
        dados.append('_captcha', 'false');
        const resp = await fetch(ENDPOINT_FORMULARIO, {
            method: 'POST',
            headers: {
                'Accept': 'application/json'
            },
            body: dados
        });
        const resultado = await resp.json().catch(() => ({}));
        if (!resp.ok || String(resultado.success) === 'false') throw new Error(resultado.message || resp.status);
        statusForm('// mensagem enviada, obrigado!', 'ok');
        formularioContato.reset();
    } catch (err) {
        statusForm('// não consegui enviar. Tente o e-mail direto abaixo.', 'falha');
    } finally {
        botaoEnviarMensagem.disabled = false;
    }
});

(function () {

    const grupos = [
        ['.textomn', 0],
        ['.textosm', 0],
        ['.imgsobre', 150],
        ['#hskills', 0],
        ['.skills-intro', 80],
        ['.skills-bar', 160],
        ['.projetos #hprojetos', 0],
        ['.projetos-intro', 80],
        ['.pastas-nav', 160],
        ['.pastas', 220],
        ['.pastas-prog', 220],
        ['#hcontato', 0],
        ['.contato-intro', 80],
        ['.contato-form', 160],
        ['.contato-ou', 0],
        ['.contato-acoes', 80],
        ['.contato-endereco', 140],
        ['.contato-tel', 200],
        ['.contato-rodape', 0]
    ];
    const alvos = [];
    grupos.forEach(([sel, atraso]) => document.querySelectorAll(sel).forEach((el) => {
        el.style.setProperty('--atraso-animacao', atraso + 'ms');
        alvos.push(el);
    }));

    document.querySelectorAll('.skill-slot').forEach((el, i) => {
        el.style.setProperty('--atraso-animacao', (i % 5) * 70 + 'ms');
        alvos.push(el);
    });

    if (!('IntersectionObserver' in window) || matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    alvos.forEach((el) => el.classList.add('reveal'));




    function definirVisivel(el, visivel, acima) {
        el.classList.toggle('visivel', visivel);
        el.classList.toggle('acima', !visivel && acima);
    }
    const observadorVisibilidade = new IntersectionObserver((entradas) => {
        entradas.forEach((e) => {
            const metade = (e.rootBounds ? e.rootBounds.height : innerHeight) / 2;
            const acima = e.boundingClientRect.top < metade;
            definirVisivel(e.target, e.isIntersecting, acima);

            if (e.target.matches('.textosm')) document.querySelectorAll('.imgsobre').forEach((img) => definirVisivel(img, e.isIntersecting, acima));
        });
    }, {
        threshold: 0.05,
        rootMargin: '0px 0px -4% 0px'
    });

    let observando = false;

    function observar() {
        if (observando) return;
        observando = true;
        alvos.filter((el) => !el.matches('.imgsobre')).forEach((el) => observadorVisibilidade.observe(el));
    }


    if (document.documentElement.classList.contains('boot-ativo')) {
        addEventListener('boot-fim', observar, {
            once: true
        });
        setTimeout(observar, 12000);
    } else {
        observar();
    }
})();

(() => {
    const elementoRaiz = document.documentElement;
    const botaoIdioma = document.getElementById('idioma');
    const botaoTema = document.getElementById('tema');
    const iconeTema = document.getElementById('tema-icone');
    const traducoes = Object.assign({}, traducoesDados, {
        "Prazer, eu sou": "Hi, I'm",
        "Desenvolvedor Java": "Java Developer",
        "Ver projetos": "View projects",
        "Currículo": "Résumé",
        "Sobre mim": "About me",
        "Projetos": "Projects",
        "Contato": "Contact",
        "Minhas tecnologias, uma carta de cada vez.": "My technologies, one card at a time.",
        "Todas": "All",
        "Clique na carta para ver os detalhes": "Click a card to see the details",
        "Da teoria ao código. Abra uma pasta.": "From theory to code. Open a folder.",
        "PROJETOS": "PROJECTS",
        "Nome": "Name",
        "Seu e-mail": "Your email",
        "Mensagem": "Message",
        "Enviar mensagem": "Send message",
        "ou escreva direto": "or write directly",
        "Enviar e-mail": "Send email",
        "Copiar endereço": "Copy address",
        "ou chame no WhatsApp": "or reach out on WhatsApp",
        "Chamar no WhatsApp": "Message on WhatsApp",
        "Estou em busca da minha primeira oportunidade. Se quiser conversar sobre uma vaga, estágio ou projeto, me escreve.": "I'm looking for my first opportunity. If you want to discuss a job, internship or project, send me a message.",
        "Busco minha primeira oportunidade para aprender na prática, contribuir com a equipe e continuar evoluindo como desenvolvedor.": "I'm looking for my first opportunity to gain hands-on experience, contribute to a team and keep growing as a developer.",
        "Me chamo Matheus Esteves, tenho 16 anos e sou de Belo Horizonte, MG. Curso o segundo ano do Técnico em Informática no COTEMIG. Meu foco é": "My name is Matheus Esteves, I'm 16 and I'm from Belo Horizonte, Brazil. I'm in my second year of the IT technical program at COTEMIG. My focus is",
        ". Estudo": ". I study",
        "com": "with",
        "e": "and",
        ". Sou curioso e autodidata: além do curso, sigo estudando por conta própria, corro atrás do que ainda não sei e pratico o que aprendo em projetos pessoais. Quando um problema me incomoda, fico até entender e resolver. Gosto de escrever código e busco sempre melhorar a solução até ela ficar bem estruturada.": ". I'm curious and self-taught: beyond school, I keep learning independently and apply what I learn in personal projects. When a problem challenges me, I work until I understand and solve it. I enjoy writing code and refining solutions until they are well structured.",
        "HABILIDADES UTILIZADAS": "TECHNOLOGIES USED",
        "O QUE FOI PRATICADO": "WHAT I PRACTICED",
        "Ver site ↗": "View website ↗",
        "ABERTA ↙": "OPEN ↙",
        "ABRIR ↘": "OPEN ↘",
        "// em breve": "// coming soon",
        "// endereço copiado": "// address copied",
        "// selecione e copie (Ctrl+C)": "// select and copy (Ctrl+C)",
        "// informe seu nome": "// enter your name",
        "// informe um e-mail válido": "// enter a valid email",
        "// escreva uma mensagem (mínimo 10 caracteres)": "// write a message (at least 10 characters)",
        "// mensagem enviada": "// message sent",
        "// enviando...": "// sending...",
        "// mensagem enviada, obrigado!": "// message sent, thank you!",
        "// abrindo o Gmail em uma nova aba... é só apertar enviar lá": "// opening Gmail in a new tab... click send there",
        "// não consegui enviar. Tente o e-mail direto abaixo.": "// unable to send. Try the email link below."
    });
    const textosOriginais = new WeakMap();
    const normalizarTexto = texto => texto.replace(/\s+/g, ' ').trim();
    let idiomaAtual = 'pt';
    try {
        idiomaAtual = localStorage.getItem('portfolio-language') === 'en' ? 'en' : 'pt';
        elementoRaiz.dataset.theme = localStorage.getItem('portfolio-theme') === 'light' ? 'light' : 'dark';
    } catch (erroArmazenamento) {
        elementoRaiz.dataset.theme = 'dark';
    }

    function traduzirTexto(noTexto) {
        if (!noTexto.parentElement || noTexto.parentElement.closest('script,style,#idioma,.marca,#matheus,textarea,#boot')) return;
        let versoes = textosOriginais.get(noTexto);
        if (!versoes || (noTexto.nodeValue !== versoes.portugues && noTexto.nodeValue !== versoes.ingles)) {
            const textoOriginal = noTexto.nodeValue;
            const textoNormalizado = normalizarTexto(textoOriginal);
            const traducao = traducoes[textoNormalizado];
            if (!traducao) return;
            const espacoInicial = textoOriginal.match(/^\s*/)[0];
            const espacoFinal = textoOriginal.match(/\s*$/)[0];
            versoes = {
                portugues: textoOriginal,
                ingles: espacoInicial + traducao + espacoFinal
            };
            textosOriginais.set(noTexto, versoes);
        }
        const textoTraduzido = idiomaAtual === 'en' ? versoes.ingles : versoes.portugues;
        if (noTexto.nodeValue !== textoTraduzido) noTexto.nodeValue = textoTraduzido;
    }

    function traduzirConteudo(elemento) {
        const percursoTexto = document.createTreeWalker(elemento, NodeFilter.SHOW_TEXT);
        let noTexto;
        while (noTexto = percursoTexto.nextNode()) traduzirTexto(noTexto);
    }

    function atualizarControleTema() {
        const modoClaroAtivo = elementoRaiz.dataset.theme === 'light';
        iconeTema.src = modoClaroAtivo ? 'moon.png' : 'sun.png';
        botaoTema.setAttribute('aria-pressed', String(modoClaroAtivo));
        botaoTema.setAttribute('aria-label', idiomaAtual === 'en' ? (modoClaroAtivo ? 'Switch to dark mode' : 'Switch to light mode') : (modoClaroAtivo ? 'Ativar modo escuro' : 'Ativar modo claro'));
    }

    function atualizarIdioma() {
        elementoRaiz.lang = idiomaAtual === 'en' ? 'en' : 'pt-BR';
        botaoIdioma.textContent = idiomaAtual === 'en' ? 'EN / PT' : 'PT / EN';
        botaoIdioma.setAttribute('aria-label', idiomaAtual === 'en' ? 'Mudar para português' : 'Switch to English');
        const linkCurriculo = document.querySelector('.curriculo');
        linkCurriculo.setAttribute('aria-label', idiomaAtual === 'en' ? 'Résumé' : 'Currículo');
        traduzirConteudo(document.body);
        atualizarControleTema();
    }
    botaoIdioma.addEventListener('click', () => {
        idiomaAtual = idiomaAtual === 'pt' ? 'en' : 'pt';
        try {
            localStorage.setItem('portfolio-language', idiomaAtual);
        } catch (erroArmazenamento) {}
        atualizarIdioma();
    });
    botaoTema.addEventListener('click', () => {
        elementoRaiz.dataset.theme = elementoRaiz.dataset.theme === 'light' ? 'dark' : 'light';
        try {
            localStorage.setItem('portfolio-theme', elementoRaiz.dataset.theme);
        } catch (erroArmazenamento) {}
        atualizarControleTema();
    });
    const observadorTraducoes = new MutationObserver(alteracoes => {
        for (const alteracao of alteracoes) {
            if (alteracao.type === 'characterData') traduzirTexto(alteracao.target);
            else
                for (const noAdicionado of alteracao.addedNodes) {
                    if (noAdicionado.nodeType === Node.TEXT_NODE) traduzirTexto(noAdicionado);
                    else if (noAdicionado.nodeType === Node.ELEMENT_NODE) traduzirConteudo(noAdicionado);
                }
        }
    });
    observadorTraducoes.observe(document.body, {
        childList: true,
        subtree: true,
        characterData: true
    });
    atualizarIdioma();
})();

(() => {
    const raiz = document.documentElement;
    const boot = document.getElementById('boot');
    if (!boot || !raiz.classList.contains('boot-ativo')) return;

    const tela = document.getElementById('boot-tela');
    const botaoPular = document.getElementById('boot-pular');
    let ingles = false;
    try {
        ingles = localStorage.getItem('portfolio-language') === 'en';
    } catch (erro) {}

    boot.setAttribute('aria-label', ingles ? 'Loading portfolio' : 'Carregando portfólio');
    botaoPular.textContent = ingles ? 'Skip ↵' : 'Pular ↵';

    const roteiro = ingles ? [
        ['INFO', 'Starting application...'],
        ['INFO', 'Loading identity...'],
        ['INFO', 'Loading projects...'],
        ['INFO', 'Loading skills...'],
        ['OK', 'ALL ready.'],
        [null, 'Opening portfolio...']
    ] : [
        ['INFO', 'Iniciando aplicação...'],
        ['INFO', 'Carregando identidade...'],
        ['INFO', 'Carregando projetos...'],
        ['INFO', 'Carregando habilidades...'],
        ['OK', 'TUDO pronto.'],
        [null, 'Abrindo portfólio...']
    ];

    const espera = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
    const resto = [...document.body.children].filter((el) => el !== boot && el.tagName !== 'SCRIPT');
    resto.forEach((el) => {
        el.inert = true;
    });
    let encerrado = false;

    function encerrar() {
        if (encerrado) return;
        encerrado = true;
        try {
            sessionStorage.setItem('boot-visto', '1');
        } catch (erro) {}
        resto.forEach((el) => {
            el.inert = false;
        });
        boot.classList.add('saindo');
        dispatchEvent(new Event('boot-fim'));
        setTimeout(() => {
            raiz.classList.remove('boot-ativo');
            boot.remove();
        }, 600);
    }

    async function rodar() {
        const cursor = document.createElement('span');
        cursor.className = 'boot-cursor';
        await espera(250);
        for (let i = 0; i < roteiro.length; i++) {
            const [tag, texto] = roteiro[i];
            if (encerrado) return;
            const linha = document.createElement('div');
            linha.className = 'boot-linha';
            if (tag) {
                const selo = document.createElement('span');
                selo.className = tag === 'OK' ? 'boot-ok' : 'boot-info';
                selo.textContent = `[${tag}] `;
                linha.append(selo);
            }
            const digitado = document.createElement('span');
            linha.append(digitado, cursor);
            tela.append(linha);
            for (const letra of texto) {
                if (encerrado) return;
                digitado.textContent += letra;
                await espera(14 + Math.random() * 14);
            }
            if (i < roteiro.length - 1) {
                cursor.remove();
                await espera(i === roteiro.length - 2 ? 320 : 150);
            }
        }
        await espera(700);
        encerrar();
    }

    boot.addEventListener('click', encerrar);
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' || e.key === 'Enter') encerrar();
    });
    botaoPular.focus({
        preventScroll: true
    });
    setTimeout(encerrar, 9000);
    rodar().catch(encerrar);
})();

(() => {
    const marca = document.querySelector('#cima .marca');
    if (!marca) return;
    let n = 0;
    marca.querySelectorAll('.marca-matheus, .marca-esteves').forEach((el) => {
        const texto = el.textContent;
        el.textContent = '';
        [...texto].forEach((ch) => {
            const s = document.createElement('span');
            s.className = 'letra';
            s.style.setProperty('--i', n++);
            s.setAttribute('aria-hidden', 'true');
            s.textContent = ch;
            el.append(s);
        });
    });
    const ponto = marca.querySelector('.marca-ponto');
    if (ponto) ponto.style.setProperty('--i', n);

    const raiz = document.documentElement;

    function iniciar() {
        raiz.classList.add('marca-anima');
        setTimeout(() => {
            raiz.classList.remove('marca-anima');
            raiz.classList.add('marca-pronta');
        }, n * 55 + 150 + 700);
    }
    if (raiz.classList.contains('boot-ativo')) addEventListener('boot-fim', iniciar, {
        once: true
    });
    else iniciar();
})();
(() => {
    const raiz = document.documentElement;
    const fab = document.getElementById('menu-flutuante');
    const lateral = document.getElementById('lateral');
    const fundo = document.getElementById('lateral-fundo');
    if (!fab || !lateral || !fundo) return;
    const celular = matchMedia('(max-width: 768px)');
    const fundoDaPagina = () => [document.querySelector('#cima'), document.querySelector('.pagina')].filter(Boolean);

    function rotular() {
        const aberto = raiz.classList.contains('menu-aberto');
        const en = raiz.lang === 'en';
        fab.setAttribute('aria-label', en ? (aberto ? 'Close menu' : 'Open menu') : (aberto ? 'Fechar menu' : 'Abrir menu'));
        fab.setAttribute('aria-expanded', String(aberto));
    }

    function definir(abrir, devolverFoco) {
        raiz.classList.toggle('menu-aberto', abrir);

        fundoDaPagina().forEach((el) => {
            el.inert = abrir;
        });
        rotular();
        if (abrir) lateral.querySelector('a').focus({
            preventScroll: true
        });
        else if (devolverFoco) fab.focus({
            preventScroll: true
        });
    }
    fab.addEventListener('click', () => definir(!raiz.classList.contains('menu-aberto'), true));
    fundo.addEventListener('click', () => definir(false, true));
    lateral.addEventListener('click', (e) => {
        if (e.target.closest('a')) definir(false, false);
    });
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && raiz.classList.contains('menu-aberto')) definir(false, true);
    });
    celular.addEventListener('change', () => {
        if (!celular.matches) definir(false, false);
    });
    new MutationObserver(rotular).observe(raiz, {
        attributes: true,
        attributeFilter: ['lang']
    });
    rotular();
})();




(() => {
    const foto = document.querySelector('.imgsobre');
    if (!foto) return;
    foto.addEventListener('pointerdown', () => foto.classList.add('segurando'));
    ['pointerup', 'pointercancel', 'pointerleave'].forEach((tipo) => foto.addEventListener(tipo, () => foto.classList.remove('segurando')));

    foto.addEventListener('pointermove', (e) => {
        if (e.pointerType !== 'mouse') return;
        const r = foto.getBoundingClientRect();
        foto.style.setProperty('--px', (((e.clientX - r.left) / r.width) - 0.5) * 2);
    });
    foto.addEventListener('pointerleave', () => foto.style.setProperty('--px', 0));
})();




(() => {
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const alvos = '.skills-tab, .projetos-tab, .contato-enviar, .contato-email, .contato-copiar, .contato-zap, .janela-links a, .skills .proj-link, main #btnproj, main #btngith, #cima .curriculo, #menu-flutuante, .boot-pular';
    document.addEventListener('pointerdown', (e) => {
        const el = e.target.closest(alvos);
        if (!el || el.disabled) return;
        const r = el.getBoundingClientRect();
        const d = Math.max(r.width, r.height) * 2;
        const onda = document.createElement('span');
        onda.className = 'toque';
        onda.setAttribute('aria-hidden', 'true');
        onda.style.cssText = `width:${d}px;height:${d}px;left:${e.clientX - r.left - d / 2}px;top:${e.clientY - r.top - d / 2}px`;
        el.append(onda);
        onda.addEventListener('animationend', () => onda.remove());
        setTimeout(() => onda.remove(), 900);
    });
})();


document.addEventListener('touchstart', () => {}, {
    passive: true
});

(() => {
    const janela = document.getElementById('janela');
    if (!janela || typeof HTMLDialogElement === 'undefined') return;
    const raiz = document.documentElement;
    const reduzir = () => matchMedia('(prefers-reduced-motion: reduce)').matches;
    const T = (pt, ing) => (raiz.lang === 'en' ? ing : pt);

    const dlg = document.createElement('dialog');
    dlg.id = 'lightbox';
    dlg.innerHTML = `
        <div class="lb-barra">
            <span class="lb-info"><span class="lb-nome"></span><span class="lb-contador"></span></span>
            <span class="lb-acoes">
                <button type="button" data-lb="menos">−</button>
                <button type="button" class="lb-zoom" data-lb="reset">100%</button>
                <button type="button" data-lb="mais">+</button>
                <button type="button" data-lb="fechar">×</button>
            </span>
        </div>
        <div class="lb-palco"><img class="lb-img" alt="" draggable="false"></div>
        <button type="button" class="lb-seta lb-ant" data-lb="ant">‹</button>
        <button type="button" class="lb-seta lb-prox" data-lb="prox">›</button>
        <p class="lb-dica"></p>`;
    document.body.append(dlg);

    const palco = dlg.querySelector('.lb-palco');
    const img = dlg.querySelector('.lb-img');
    const rotZoom = dlg.querySelector('.lb-zoom');
    const MIN = 1,
        MAX = 6;
    let lista = [],
        idx = 0,
        s = 1,
        tx = 0,
        ty = 0;

    function limites() {
        return {
            x: Math.max(0, (img.offsetWidth * s - palco.clientWidth) / 2),
            y: Math.max(0, (img.offsetHeight * s - palco.clientHeight) / 2)
        };
    }

    function aplicar(suave) {
        const l = limites();
        tx = Math.max(-l.x, Math.min(l.x, tx));
        ty = Math.max(-l.y, Math.min(l.y, ty));
        img.classList.toggle('suave', Boolean(suave) && !reduzir());
        img.style.transform = `translate(${tx}px, ${ty}px) scale(${s})`;
        rotZoom.textContent = `${Math.round(s * 100)}%`;
        palco.classList.toggle('ampliada', s > 1.001);
    }

    function zoomPara(novo, cx, cy, suave) {
        novo = Math.max(MIN, Math.min(MAX, novo));
        const r = palco.getBoundingClientRect();
        const px = cx - (r.left + r.width / 2);
        const py = cy - (r.top + r.height / 2);
        const k = novo / s;
        tx = px - (px - tx) * k;
        ty = py - (py - ty) * k;
        s = novo;
        if (s <= 1.001) {
            s = 1;
            tx = 0;
            ty = 0;
        }
        aplicar(suave);
    }

    function zoomCentro(fator, suave) {
        const r = palco.getBoundingClientRect();
        zoomPara(s * fator, r.left + r.width / 2, r.top + r.height / 2, suave);
    }

    function mostrar(i) {
        if (i < 0 || i >= lista.length) return;
        idx = i;
        img.src = lista[i].src;
        img.alt = lista[i].alt;
        s = 1;
        tx = 0;
        ty = 0;
        aplicar(false);
        const varias = lista.length > 1;
        dlg.querySelector('.lb-contador').textContent = varias ? `${String(i + 1).padStart(2, '0')} / ${String(lista.length).padStart(2, '0')}` : '';
        dlg.querySelector('.lb-ant').hidden = !varias;
        dlg.querySelector('.lb-prox').hidden = !varias;
        dlg.querySelector('.lb-ant').disabled = i === 0;
        dlg.querySelector('.lb-prox').disabled = i === lista.length - 1;
    }

    function rotular() {
        dlg.setAttribute('aria-label', T('Screenshot ampliada', 'Enlarged screenshot'));
        dlg.querySelector('[data-lb="menos"]').setAttribute('aria-label', T('Diminuir zoom', 'Zoom out'));
        dlg.querySelector('[data-lb="mais"]').setAttribute('aria-label', T('Aumentar zoom', 'Zoom in'));
        dlg.querySelector('[data-lb="reset"]').setAttribute('aria-label', T('Voltar ao tamanho original', 'Reset zoom'));
        dlg.querySelector('[data-lb="fechar"]').setAttribute('aria-label', T('Fechar', 'Close'));
        dlg.querySelector('[data-lb="ant"]').setAttribute('aria-label', T('Screenshot anterior', 'Previous screenshot'));
        dlg.querySelector('[data-lb="prox"]').setAttribute('aria-label', T('Próxima screenshot', 'Next screenshot'));
        dlg.querySelector('.lb-dica').textContent = T('Role ou use + e − para o zoom · arraste para mover · toque duas vezes para alternar', 'Scroll or use + and − to zoom · drag to move · double-tap to toggle');
    }

    function abrir(slideImg) {
        const imgs = [...janela.querySelectorAll('.janela-img .slide img')];
        if (!imgs.length) return;
        lista = imgs.map((i) => ({
            src: i.currentSrc || i.src,
            alt: i.alt
        }));
        const h3 = janela.querySelector('.janela-info h3');
        dlg.querySelector('.lb-nome').textContent = h3 ? h3.textContent : '';
        rotular();
        dlg.showModal();
        raiz.classList.add('lightbox-aberto');
        mostrar(Math.max(0, imgs.indexOf(slideImg)));
    }

    dlg.addEventListener('close', () => raiz.classList.remove('lightbox-aberto'));

    function slideAtual() {
        const trilho = janela.querySelector('.galeria-trilho');
        const imgs = [...janela.querySelectorAll('.janela-img .slide img')];
        if (!trilho) return imgs[0];
        return imgs[Math.round(trilho.scrollLeft / (trilho.clientWidth || 1))] || imgs[0];
    }

    janela.addEventListener('click', (e) => {
        if (e.target.closest('[data-ampliar]')) {
            abrir(slideAtual());
            return;
        }
        const alvo = e.target.closest('.janela-img .slide img');
        if (alvo) abrir(alvo);
    });

    function injetarBotao() {
        const box = janela.querySelector('.janela-img');
        if (!box || box.querySelector('.ampliar') || !box.querySelector('.slide img')) return;
        box.insertAdjacentHTML('beforeend', `<button type="button" class="ampliar" data-ampliar aria-label="${T('Ampliar screenshot', 'Enlarge screenshot')}" title="${T('Ampliar', 'Enlarge')}"><svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="11" cy="11" r="6.5"/><path d="m16 16 5 5M11 8.5v5M8.5 11h5"/></svg></button>`);
    }
    new MutationObserver(injetarBotao).observe(janela, {
        childList: true,
        subtree: true
    });
    injetarBotao();

    dlg.addEventListener('click', (e) => {
        const b = e.target.closest('[data-lb]');
        if (!b) return;
        const acao = b.dataset.lb;
        if (acao === 'fechar') dlg.close();
        else if (acao === 'mais') zoomCentro(1.5, true);
        else if (acao === 'menos') zoomCentro(1 / 1.5, true);
        else if (acao === 'reset') zoomCentro(1 / s, true);
        else if (acao === 'ant') mostrar(idx - 1);
        else if (acao === 'prox') mostrar(idx + 1);
    });

    palco.addEventListener('wheel', (e) => {
        e.preventDefault();
        const forca = e.ctrlKey ? 0.01 : 0.002;
        zoomPara(s * Math.exp(-e.deltaY * forca), e.clientX, e.clientY, false);
    }, {
        passive: false
    });

    const toques = new Map();
    let arrasto = null,
        pinca = null,
        moveu = false,
        ultimoToque = 0,
        alvoInicial = null;

    palco.addEventListener('pointerdown', (e) => {
        alvoInicial = e.target;
        palco.setPointerCapture(e.pointerId);
        toques.set(e.pointerId, {
            x: e.clientX,
            y: e.clientY
        });
        moveu = false;
        if (toques.size === 2) {
            const [a, b] = [...toques.values()];
            pinca = {
                d: Math.hypot(a.x - b.x, a.y - b.y) || 1,
                s0: s
            };
            arrasto = null;
        } else if (toques.size === 1) {
            arrasto = {
                x: e.clientX,
                y: e.clientY,
                tx,
                ty
            };
        }
    });

    palco.addEventListener('pointermove', (e) => {
        if (!toques.has(e.pointerId)) return;
        toques.set(e.pointerId, {
            x: e.clientX,
            y: e.clientY
        });
        if (toques.size === 2 && pinca) {
            const [a, b] = [...toques.values()];
            zoomPara(pinca.s0 * Math.hypot(a.x - b.x, a.y - b.y) / pinca.d, (a.x + b.x) / 2, (a.y + b.y) / 2, false);
            moveu = true;
        } else if (arrasto && toques.size === 1) {
            const dx = e.clientX - arrasto.x;
            const dy = e.clientY - arrasto.y;
            if (Math.abs(dx) + Math.abs(dy) > 4) moveu = true;
            if (s > 1) {
                tx = arrasto.tx + dx;
                ty = arrasto.ty + dy;
                aplicar(false);
            }
        }
    });

    function soltar(e, cancelado) {
        const foiClique = !cancelado && toques.size === 1 && !moveu;
        toques.delete(e.pointerId);
        if (toques.size < 2) pinca = null;
        if (toques.size === 1) {
            const [p] = [...toques.values()];
            arrasto = {
                x: p.x,
                y: p.y,
                tx,
                ty
            };
        } else {
            arrasto = null;
        }
        if (!foiClique) return;
        if (alvoInicial === palco) {
            dlg.close();
            return;
        }
        const agora = Date.now();
        if (agora - ultimoToque < 320) {
            zoomPara(s > 1.05 ? 1 : 2.5, e.clientX, e.clientY, true);
            ultimoToque = 0;
        } else {
            ultimoToque = agora;
        }
    }
    palco.addEventListener('pointerup', (e) => soltar(e, false));
    palco.addEventListener('pointercancel', (e) => soltar(e, true));

    dlg.addEventListener('keydown', (e) => {
        const passo = 80;
        if (e.key === '+' || e.key === '=') zoomCentro(1.5, true);
        else if (e.key === '-' || e.key === '_') zoomCentro(1 / 1.5, true);
        else if (e.key === '0') zoomCentro(1 / s, true);
        else if (e.key === 'ArrowLeft') {
            if (s > 1.01) {
                tx += passo;
                aplicar(true);
            } else mostrar(idx - 1);
        } else if (e.key === 'ArrowRight') {
            if (s > 1.01) {
                tx -= passo;
                aplicar(true);
            } else mostrar(idx + 1);
        } else if (e.key === 'ArrowUp' && s > 1.01) {
            ty += passo;
            aplicar(true);
        } else if (e.key === 'ArrowDown' && s > 1.01) {
            ty -= passo;
            aplicar(true);
        } else return;
        e.preventDefault();
    });

    addEventListener('resize', () => {
        if (dlg.open) aplicar(false);
    });
})();