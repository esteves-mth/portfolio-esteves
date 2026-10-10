
const URL_ICONES_TECNOLOGIAS = 'https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons/';

const skills = [
    { name: 'Java SE', abbr: 'Jv', group: 'backend', icon: 'java/java-original.svg', accent: '#AF143C',
      projetos: ['estoque-crud-java', 'java-do-basico-ao-oop'],
      desc: 'A base de tudo que construo.',
      pillars: [['POO', 'Classes, interfaces e encapsulamento.'], ['Collections', 'Listas, mapas e conjuntos.'], ['Arquitetura em camadas', 'Responsabilidades bem definidas.']] },
    { name: 'MySQL / JDBC', abbr: 'SQL', group: 'backend', icon: 'mysql/mysql-original.svg', accent: '#669BBC',
      projetos: ['estoque-crud-java'],
      desc: 'Dados com estrutura e propósito.',
      pillars: [['Modelagem relacional', 'Tabelas, relações e integridade.'], ['SQL', 'Consultas e operações de dados.'], ['JDBC', 'Conexões e persistência em Java.']] },
    { name: 'HTML5', abbr: 'H5', group: 'web', icon: 'html5/html5-original.svg', accent: '#ef652a',
      projetos: ['landing-page-sfizio', 'sfizio-massas'],
      desc: 'Semântica antes de estética.',
      pillars: [['Semântica', 'Uma estrutura com significado.'], ['Formulários', 'Entradas e organização de dados.'], ['Acessibilidade', 'Interfaces pensadas para pessoas.']] },
    { name: 'CSS3', abbr: 'C3', group: 'web', icon: 'css3/css3-original.svg', accent: '#669BBC',
      projetos: ['landing-page-sfizio', 'sfizio-massas'],
      desc: 'Precisão em cada interface.',
      pillars: [['Layout', 'Flexbox e Grid para organizar.'], ['Responsividade', 'Interfaces em diferentes telas.'], ['Animação', 'Transições e estados visuais.']] },
    { name: 'JavaScript', abbr: 'JS', group: 'web', icon: 'javascript/javascript-original.svg', accent: '#eab308',
      projetos: ['landing-page-sfizio', 'sfizio-massas'],
      desc: 'Interação que faz sentido.',
      pillars: [['Fundamentos', 'Funções e estruturas de dados.'], ['DOM', 'Interfaces que respondem.'], ['Eventos', 'Interações e comportamento.']] },
    { name: 'C#', abbr: 'C#', group: 'backend', icon: 'csharp/csharp-original.svg', accent: '#a855f7',
      projetos: [],
      desc: 'Novas perspectivas, mesma lógica.',
      pillars: [['Sintaxe', 'Tipos e estruturas de controle.'], ['Orientação a objetos', 'Classes e organização do código.'], ['Algoritmos', 'Resolução estruturada de problemas.']] },
    { name: 'Linux / Shell', abbr: '>_', group: 'tools', icon: 'linux/linux-original.svg', accent: '#94a3b8',
      projetos: [],
      desc: 'O terminal como ferramenta.',
      pillars: [['Terminal', 'Navegação e comandos.'], ['Arquivos e permissões', 'Organização do ambiente.'], ['Shell', 'Rotinas e automação.']] },
    { name: 'Windows 11', abbr: 'W11', group: 'tools', icon: 'windows11/windows11-original.svg', accent: '#669BBC',
      projetos: [],
      desc: 'Meu ambiente de trabalho.',
      pillars: [['Configuração', 'Instalação e ajuste do sistema.'], ['Terminal', 'Comandos no PowerShell e CMD.'], ['Ambiente de dev', 'Ferramentas para programar.']] },
    { name: 'Git / GitHub', abbr: 'Git', group: 'tools', icon: 'git/git-original.svg', accent: '#f97316',
      projetos: [],
      desc: 'Cada evolução, um commit.',
      pillars: [['Versionamento', 'Histórico e evolução do código.'], ['Branches', 'Trabalho em fluxos separados.'], ['Repositórios', 'Organização e colaboração.']] }
];

const gradeHabilidades = document.getElementById('skills-grid');
const pad = (n) => String(n).padStart(3, '0');

function cardHTML(s, i) {
    const projetosRelacionados = s.projetos && s.projetos.length
        ? s.projetos.map(n => `<button class="proj-link" data-proj="${n}" title="Ver projeto ${n}">${n} ↗</button>`).join('')
        : '<p class="back-proj-vazio">// em breve</p>';
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

function flipCard(card) {
    const flipped = card.classList.toggle('flipped');
    card.querySelector('.front').inert = flipped;
    card.querySelector('.back').inert = !flipped;
    const alvo = flipped ? card.querySelector('[data-voltar]') : card.querySelector('.face-btn');
    alvo.focus({ preventScroll: true });
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

const projetos = [
    { name: 'estoque-crud-java', sub: 'Backend Java', status: 'Destaque', images: [], site: '', repo: 'https://github.com/esteves-mth/estoque-crud-java/',
      desc: 'CRUD para organizar produtos e categorias. A camada Java concentra as regras de negócio e o DAO acessa o MySQL com consultas parametrizadas.',
      habilidades: ['Java', 'JDBC', 'MySQL'],
      praticado: ['Organização do domínio e das operações de cadastro.', 'Integração entre a aplicação Java e o banco de dados.', 'Criação, leitura, atualização e exclusão de registros (CRUD).'] },
    { name: 'java-do-basico-ao-oop', sub: 'Evolução em Java', status: 'Em evolução', images: [], site: '', repo: '',
      desc: 'Percurso de aprendizado em Java: dos primeiros algoritmos à orientação a objetos, com interfaces, records e polimorfismo.',
      habilidades: ['Java', 'POO', 'Algoritmos'],
      praticado: ['Lógica, estruturas de controle e algoritmos.', 'Classes, objetos e encapsulamento.', 'Herança, interfaces e polimorfismo.'] },
    { name: 'landing-page-sfizio', sub: 'Branding e front-end', status: 'Concluído', images: [], site: '', repo: '',
      desc: 'Landing page para a Sfizio, focada em apresentação de marca, com estrutura semântica, layout responsivo e interações leves.',
      habilidades: ['HTML', 'CSS', 'JavaScript'],
      praticado: ['Estrutura semântica e acessível em HTML.', 'Layout responsivo com Flexbox e Grid.', 'Interações leves com eventos em JavaScript.'] },
    { name: 'sfizio-massas', sub: 'E-commerce visual', status: 'Concluído', images: [], site: '', repo: '',
      desc: 'Conceito visual de e-commerce para massas artesanais, com foco na apresentação do catálogo e na navegação.',
      habilidades: ['HTML', 'CSS', 'JavaScript'],
      praticado: ['Apresentação de catálogo de produtos.', 'Navegação e experiência do visitante.', 'Componentes e comportamento em JavaScript.'] }
];

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

listaPastas.innerHTML = projetos.map((p, i) => `
    <button class="pasta" data-i="${i}" aria-expanded="false" aria-controls="janela-wrap">
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
            <span class="pasta-base">${iconePasta}<span class="pasta-acao">ABRIR ↘</span></span>
        </span>
    </button>`).join('');

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
    const prev = box.querySelector('.g-prev'), next = box.querySelector('.g-next');
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
    trilho.addEventListener('scroll', atualizar, { passive: true });
    prev.addEventListener('click', () => trilho.scrollBy({ left: -trilho.clientWidth, behavior: comportamento() }));
    next.addEventListener('click', () => trilho.scrollBy({ left: trilho.clientWidth, behavior: comportamento() }));
    pontos.forEach(d => d.addEventListener('click', () => trilho.scrollTo({ left: Number(d.dataset.ponto) * trilho.clientWidth, behavior: comportamento() })));
    trilho.addEventListener('keydown', e => {
        if (e.key === 'ArrowRight') { e.preventDefault(); next.click(); }
        if (e.key === 'ArrowLeft') { e.preventDefault(); prev.click(); }
    });
    atualizar();
}

function janelaHTML(p) {
    const praticado = p.praticado && p.praticado.length
        ? `<ul class="janela-pratica">${p.praticado.map((t) => `<li>${t}</li>`).join('')}</ul>`
        : '<p class="janela-vazio">// em breve</p>';
    const habilidades = p.habilidades && p.habilidades.length
        ? `<ul class="janela-tags">${p.habilidades.map((t) => `<li>${t}</li>`).join('')}</ul>`
        : '<p class="janela-vazio">// em breve</p>';
    return `
    <div class="janela-barra">
        <span class="janela-pontos" aria-hidden="true"><i></i><i></i><i></i></span>
        <span class="janela-caminho">matheus / projetos / ${p.name}</span>
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
}

function abrirPasta(i) {
    const p = projetos[i];
    pastaAberta = i;
    janelaProjeto.innerHTML = janelaHTML(p);
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
    if (i !== null) listaPastas.querySelector(`[data-i="${i}"]`).focus({ preventScroll: true });
}

listaPastas.addEventListener('click', (e) => {
    const b = e.target.closest('.pasta');
    if (!b) return;
    const i = Number(b.dataset.i);
    if (pastaAberta === i) fecharPasta();
    else {
        abrirPasta(i);
        b.scrollIntoView({ inline: 'nearest', block: 'nearest', behavior: prefereMovimentoReduzido() ? 'auto' : 'smooth' });
    }
});
janelaProjeto.addEventListener('click', (e) => {
    if (e.target.closest('[data-fechar]')) fecharPasta();
});
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && pastaAberta !== null && containerJanelaProjeto.contains(document.activeElement)) fecharPasta();
});

function passoCarrossel() {
    const card = listaPastas.querySelector('.pasta');
    const gap = parseFloat(getComputedStyle(listaPastas).columnGap) || 0;
    return card.offsetWidth + gap;
}
function irPara(direcao) {
    listaPastas.scrollBy({ left: direcao * passoCarrossel(), behavior: prefereMovimentoReduzido() ? 'auto' : 'smooth' });
}
botaoProjetoAnterior.addEventListener('click', () => irPara(-1));
botaoProximoProjeto.addEventListener('click', () => irPara(1));

function atualizarCarrossel() {
    const max = listaPastas.scrollWidth - listaPastas.clientWidth;
    const temRolagem = max > 2;
    navegacaoProjetos.hidden = !temRolagem;
    prog.hidden = !temRolagem;
    if (!temRolagem) return;

    botaoProjetoAnterior.disabled = listaPastas.scrollLeft <= 2;
    botaoProximoProjeto.disabled = listaPastas.scrollLeft >= max - 2;

    const esq = listaPastas.scrollLeft, dir = esq + listaPastas.clientWidth;
    const visiveis = [...listaPastas.children]
        .map((c, i) => ({ i, ok: c.offsetLeft >= esq - 8 && c.offsetLeft + c.offsetWidth <= dir + 8 }))
        .filter((c) => c.ok).map((c) => c.i + 1);
    const pad = (n) => String(n).padStart(2, '0');
    const total = pad(projetos.length);
    const a = visiveis[0] || 1, b = visiveis[visiveis.length - 1] || a;
    document.getElementById('contador').textContent = a === b ? `${pad(a)} / ${total}` : `${pad(a)}–${pad(b)} / ${total}`;

    indicadorProgresso.style.width = `${(listaPastas.clientWidth / listaPastas.scrollWidth) * 100}%`;
    indicadorProgresso.style.left = `${(listaPastas.scrollLeft / listaPastas.scrollWidth) * 100}%`;
}
listaPastas.addEventListener('scroll', atualizarCarrossel, { passive: true });
addEventListener('resize', atualizarCarrossel);

function irParaProjeto(nome) {
    const i = projetos.findIndex(p => p.name === nome);
    if (i < 0) return;
    abrirPasta(i);
    const comportamento = prefereMovimentoReduzido() ? 'auto' : 'smooth';
    document.querySelector('.pastas-nav').scrollIntoView({ behavior: comportamento, block: 'start' });
    const pasta = listaPastas.querySelector(`[data-i="${i}"]`);
    listaPastas.scrollTo({ left: Math.max(0, pasta.offsetLeft - 4), behavior: comportamento });
    pasta.classList.remove('pulso');
    void pasta.offsetWidth;
    pasta.classList.add('pulso');
    setTimeout(() => pasta.classList.remove('pulso'), 2800);
    pasta.focus({ preventScroll: true });
}

abrirPasta(0);
atualizarCarrossel();

const botaoCopiarEmail = document.getElementById('copiar-email');
const statusCopiaEmail = document.getElementById('copiar-status');
let temporizadorCopiaEmail;

function avisoCopia(texto) {
    statusCopiaEmail.textContent = texto;
    clearTimeout(temporizadorCopiaEmail);
    temporizadorCopiaEmail = setTimeout(() => { statusCopiaEmail.textContent = ''; }, 2500);
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

const ENDPOINT_FORMULARIO = '';
const EMAIL_CONTATO = 'matheus.estevesdearaujo@gmail.com';

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
    const nome = formularioContato.nome, email = formularioContato.email, msg = formularioContato.mensagem;
    let primeiroErro = null;

    [nome, email, msg].forEach(limparErro);
    if (!nome.value.trim()) { mostrarErro(nome, '// informe seu nome'); primeiroErro = primeiroErro || nome; }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim())) { mostrarErro(email, '// informe um e-mail válido'); primeiroErro = primeiroErro || email; }
    if (msg.value.trim().length < 10) { mostrarErro(msg, '// escreva uma mensagem (mínimo 10 caracteres)'); primeiroErro = primeiroErro || msg; }
    if (primeiroErro) { primeiroErro.focus(); statusForm('', ''); return; }

    if (formularioContato.site.value) { statusForm('// mensagem enviada', 'ok'); formularioContato.reset(); return; }

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
        const resp = await fetch(ENDPOINT_FORMULARIO, {
            method: 'POST',
            headers: { 'Accept': 'application/json' },
            body: new FormData(formularioContato)
        });
        if (!resp.ok) throw new Error(resp.status);
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
        ['.textosm', 0], ['.imgsobre', 150],
        ['#hskills', 0], ['.skills-intro', 80], ['.skills-bar', 160],
        ['.projetos #hprojetos', 0], ['.projetos-intro', 80], ['.pastas-nav', 160], ['.pastas', 220], ['.pastas-prog', 220],
        ['#hcontato', 0], ['.contato-intro', 80], ['.contato-form', 160],
        ['.contato-ou', 0], ['.contato-acoes', 80], ['.contato-endereco', 140], ['.contato-tel', 200], ['.contato-rodape', 0]
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
    const observadorVisibilidade = new IntersectionObserver((entradas) => {
        entradas.forEach((e) => {
            if (!e.isIntersecting) return;
            e.target.classList.add('visivel');

            if (e.target.matches('.textosm')) document.querySelectorAll('.imgsobre').forEach((img) => img.classList.add('visivel'));
            observadorVisibilidade.unobserve(e.target);
        });
    }, { threshold: 0.05, rootMargin: '0px 0px -4% 0px' });
    alvos.filter((el) => !el.matches('.imgsobre')).forEach((el) => observadorVisibilidade.observe(el));
})();

(() => {
 const elementoRaiz=document.documentElement;
 const botaoIdioma=document.getElementById('idioma');
 const botaoTema=document.getElementById('tema');
 const iconeTema=document.getElementById('tema-icone');
 const traducoes={"Prazer, eu sou": "Hi, I'm", "Desenvolvedor Java": "Java Developer", "Ver projetos": "View projects", "Currículo": "Résumé", "Sobre mim": "About me", "Projetos": "Projects", "Contato": "Contact", "Minhas tecnologias, uma carta de cada vez.": "My technologies, one card at a time.", "Todas": "All", "Clique na carta para ver os detalhes": "Click a card to see the details", "Da teoria ao código. Abra uma pasta.": "From theory to code. Open a folder.", "PROJETOS": "PROJECTS", "Nome": "Name", "Seu e-mail": "Your email", "Mensagem": "Message", "Enviar mensagem": "Send message", "ou escreva direto": "or write directly", "Enviar e-mail": "Send email", "Copiar endereço": "Copy address", "ou chame no WhatsApp": "or reach out on WhatsApp", "Chamar no WhatsApp": "Message on WhatsApp", "Estou em busca da minha primeira oportunidade. Se quiser conversar sobre uma vaga, estágio ou projeto, me escreve.": "I'm looking for my first opportunity. If you want to discuss a job, internship or project, send me a message.", "Busco minha primeira oportunidade para aprender na prática, contribuir com a equipe e continuar evoluindo como desenvolvedor.": "I'm looking for my first opportunity to gain hands-on experience, contribute to a team and keep growing as a developer.", "Me chamo Matheus Esteves, tenho 16 anos e sou de Belo Horizonte, MG. Curso o segundo ano do Técnico em Informática no COTEMIG. Meu foco é": "My name is Matheus Esteves, I'm 16 and I'm from Belo Horizonte, Brazil. I'm in my second year of the IT technical program at COTEMIG. My focus is", ". Estudo": ". I study", "com": "with", "e": "and", ". Sou curioso e autodidata: além do curso, sigo estudando por conta própria, corro atrás do que ainda não sei e pratico o que aprendo em projetos pessoais. Quando um problema me incomoda, fico até entender e resolver. Gosto de escrever código e busco sempre melhorar a solução até ela ficar bem estruturada.": ". I'm curious and self-taught: beyond school, I keep learning independently and apply what I learn in personal projects. When a problem challenges me, I work until I understand and solve it. I enjoy writing code and refining solutions until they are well structured.", "HABILIDADES UTILIZADAS": "TECHNOLOGIES USED", "O QUE FOI PRATICADO": "WHAT I PRACTICED", "Ver site ↗": "View website ↗", "ABERTA ↙": "OPEN ↙", "ABRIR ↘": "OPEN ↘", "// em breve": "// coming soon", "// endereço copiado": "// address copied", "// selecione e copie (Ctrl+C)": "// select and copy (Ctrl+C)", "// informe seu nome": "// enter your name", "// informe um e-mail válido": "// enter a valid email", "// escreva uma mensagem (mínimo 10 caracteres)": "// write a message (at least 10 characters)", "// mensagem enviada": "// message sent", "// enviando...": "// sending...", "// mensagem enviada, obrigado!": "// message sent, thank you!", "// abrindo o Gmail em uma nova aba... é só apertar enviar lá": "// opening Gmail in a new tab... click send there", "// não consegui enviar. Tente o e-mail direto abaixo.": "// unable to send. Try the email link below."};
 const textosOriginais=new WeakMap();
 const normalizarTexto=texto=>texto.replace(/\s+/g,' ').trim();
 let idiomaAtual='pt';
 try {
  idiomaAtual=localStorage.getItem('portfolio-language')==='en'?'en':'pt';
  elementoRaiz.dataset.theme=localStorage.getItem('portfolio-theme')==='light'?'light':'dark';
 } catch (erroArmazenamento) { elementoRaiz.dataset.theme='dark'; }
 function traduzirTexto(noTexto) {
  if(!noTexto.parentElement || noTexto.parentElement.closest('script,style,#idioma,.marca,#matheus,textarea')) return;
  let versoes= textosOriginais.get(noTexto);
  if(!versoes || (noTexto.nodeValue!==versoes.portugues && noTexto.nodeValue!==versoes.ingles)) {
   const textoOriginal=noTexto.nodeValue;
   const textoNormalizado=normalizarTexto(textoOriginal);
   const traducao=traducoes[textoNormalizado];
   if(!traducao) return;
   const espacoInicial=textoOriginal.match(/^\s*/)[0];
   const espacoFinal=textoOriginal.match(/\s*$/)[0];
   versoes={portugues:textoOriginal,ingles:espacoInicial+traducao+espacoFinal};
   textosOriginais.set(noTexto,versoes);
  }
  const textoTraduzido=idiomaAtual==='en'?versoes.ingles:versoes.portugues;
  if(noTexto.nodeValue!==textoTraduzido) noTexto.nodeValue=textoTraduzido;
 }
 function traduzirConteudo(elemento) {
  const percursoTexto=document.createTreeWalker(elemento,NodeFilter.SHOW_TEXT);
  let noTexto;
  while(noTexto=percursoTexto.nextNode()) traduzirTexto(noTexto);
 }
 function atualizarControleTema() {
  const modoClaroAtivo=elementoRaiz.dataset.theme==='light';
  iconeTema.src=modoClaroAtivo?'moon.png':'sun.png';
  botaoTema.setAttribute('aria-pressed',String(modoClaroAtivo));
  botaoTema.setAttribute('aria-label',idiomaAtual==='en'?(modoClaroAtivo?'Switch to dark mode':'Switch to light mode'):(modoClaroAtivo?'Ativar modo escuro':'Ativar modo claro'));
 }
 function atualizarIdioma() {
  elementoRaiz.lang=idiomaAtual==='en'?'en':'pt-BR';
  botaoIdioma.textContent=idiomaAtual==='en'?'EN / PT':'PT / EN';
  botaoIdioma.setAttribute('aria-label',idiomaAtual==='en'?'Mudar para português':'Switch to English');
  const linkCurriculo=document.querySelector('.curriculo');
  linkCurriculo.setAttribute('aria-label',idiomaAtual==='en'?'Résumé':'Currículo');
  traduzirConteudo(document.body);
  atualizarControleTema();
 }
 botaoIdioma.addEventListener('click',()=>{
  idiomaAtual=idiomaAtual==='pt'?'en':'pt';
  try {localStorage.setItem('portfolio-language',idiomaAtual);} catch(erroArmazenamento) {}
  atualizarIdioma();
 });
 botaoTema.addEventListener('click',()=>{
  elementoRaiz.dataset.theme=elementoRaiz.dataset.theme==='light'?'dark':'light';
  try {localStorage.setItem('portfolio-theme',elementoRaiz.dataset.theme);} catch(erroArmazenamento) {}
  atualizarControleTema();
 });
 const observadorTraducoes=new MutationObserver(alteracoes=>{
  for(const alteracao of alteracoes) {
   if(alteracao.type==='characterData') traduzirTexto(alteracao.target);
   else for(const noAdicionado of alteracao.addedNodes) {
    if(noAdicionado.nodeType===Node.TEXT_NODE) traduzirTexto(noAdicionado);
    else if(noAdicionado.nodeType===Node.ELEMENT_NODE) traduzirConteudo(noAdicionado);
   }
  }
 });
 observadorTraducoes.observe(document.body,{childList:true,subtree:true,characterData:true});
 atualizarIdioma();
})();