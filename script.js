/** DONNÉES DU CABINET **/

const SERVICES = [
    { title: "Prothèses Fixes & Bridges", desc: "Retrouvez le confort d'une dentition complète et fonctionnelle. Nos bridges céramo-métalliques permettent de remplacer une ou plusieurs dents manquantes en s'appuyant sur les dents voisines.", icon: "fa-tooth" },
    { title: "Stomatologie", desc: "Pathologies de la bouche et des mâchoires, expertise médicale complète.", icon: "fa-stethoscope" },
    { title: "Chirurgie Dentaire", desc: "Interventions chirurgicales complexes et extractions sécurisées.", icon: "fa-syringe" },
    { title: "Travaux de Prothèse", desc: "Conception de prothèses fixes (couronnes) et mobiles sur-mesure.", icon: "fa-teeth-open" },
    { title: "Soins Conservateurs", desc: "Traitement des caries et préservation de vos dents naturelles.", icon: "fa-shield-heart" },
    { title: "Esthétique Dentaire", desc: "Blanchiment professionnel et facettes pour un sourire parfait.", icon: "fa-wand-magic-sparkles" }
];

const GALLERY_ITEMS = [
    { type: 'image', src: 'GAL1.jpg' },
    { type: 'image', src: 'GAL2.jpg' },
    { type: 'image', src: 'GAL3.jpg' },
    { type: 'image', src: 'GAL4.jpg' },
    { type: 'image', src: 'GAL5.jpg' },
    { type: 'image', src: 'GAL6.jpg' },
    { type: 'image', src: 'GAL7.jpg' },
    { type: 'image', src: 'GAL8.jpg' },
    { type: 'image', src: 'GAL10.jpg' },
    { type: 'image', src: 'GAL11.jpg' },
    { type: 'image', src: 'GAL13.jpg' },
    { type: 'image', src: 'GAL14.jpg' }
];

const BEFORE_AFTER = [
    { title: 'Cas Clinique #1', img: 'AVAP1.jpg' },
    { title: 'Cas Clinique #2', img: 'AVAP2.jpg' },
    { title: 'Cas Clinique #3', img: 'AV AP3.jpg' },
    { title: 'Cas Clinique #4', img: 'AV AP4.jpg' },
    { title: 'Cas Clinique #5', img: 'AVAP3.jpg' },
    { title: 'Cas Clinique #6', img: 'AVAP6.jpg' },
    { title: 'Cas Clinique #7', img: 'AVAP7.jpg' }
];

// Articles de secours (Fallback si le CMS n'a pas encore publié d'articles)
const BLOG_POSTS = [
    {
        tag: 'Conseil',
        title: 'Brossage : les 5 erreurs que tout le monde fait',
        desc: 'Durée trop courte, mauvaise technique... Le Dr Fouenang décrypte les erreurs les plus fréquentes.',
        img: './blog brossage.jpeg',
        content: `
            <p>Le brossage des dents est un geste quotidien que nous faisons tous, mais très peu le font correctement. Voici les 5 erreurs les plus fréquentes observées au cabinet par le Dr Patrick Fouenang.</p>
            <h4 class="font-bold text-slate-800 text-base mt-4">1. Se brosser les dents trop vite</h4>
            <p>Un brossage efficace dure minimum <strong>2 minutes</strong>. La majorité des patients s'arrêtent à 30 secondes. Utilisez un minuteur ou une brosse électrique avec timer intégré.</p>
            <h4 class="font-bold text-slate-800 text-base mt-4">2. Appuyer trop fort</h4>
            <p>Brosser fort n'enlève pas plus de plaque. Au contraire, cela abîme l'émail et fait reculer les gencives. Le mouvement doit être <strong>doux et circulaire</strong>.</p>
            <h4 class="font-bold text-slate-800 text-base mt-4">3. Oublier la langue et les gencives</h4>
            <p>80% des mauvaises odeurs buccales viennent de la langue. Brossez-la délicatement à chaque séance. Les gencives aussi doivent être effleurées.</p>
            <h4 class="font-bold text-slate-800 text-base mt-4">4. Garder sa brosse trop longtemps</h4>
            <p>Une brosse à dents se change <strong>tous les 3 mois</strong> maximum, ou dès que les poils s'écartent. Une brosse usée ne nettoie plus correctement.</p>
            <h4 class="font-bold text-slate-800 text-base mt-4">5. Ne se brosser qu'une fois par jour</h4>
            <p>Il faut se brosser les dents <strong>matin et soir</strong>, idéalement après chaque repas. Le brossage du soir est le plus important car la salive diminue la nuit, laissant les bactéries agir librement.</p>
            <p class="mt-4 font-semibold text-sky-700">Vous avez des questions ? Prenez rendez-vous au cabinet de Douala Akwa pour un bilan bucco-dentaire complet.</p>
        `
    },
    {
        tag: 'Prévention',
        title: 'Pourquoi le détartrage est indispensable ?',
        desc: 'Le tartre est invisible au quotidien mais ravage vos gencives en silence.',
        img: './detartrage.jpeg',
        content: `
            <p>Beaucoup de patients pensent que le détartrage est une simple formalité esthétique. En réalité, c'est un acte médical essentiel pour préserver votre santé bucco-dentaire sur le long terme.</p>
            <h4 class="font-bold text-slate-800 text-base mt-4">Qu'est-ce que le tartre ?</h4>
            <p>Le tartre est de la plaque dentaire qui s'est <strong>minéralisée et durcie</strong> sur vos dents. Contrairement à la plaque molle, il ne peut pas être éliminé par le brossage seul. Seul un professionnel peut le retirer.</p>
            <h4 class="font-bold text-slate-800 text-base mt-4">Les conséquences d'un tartre non traité</h4>
            <p>Laissé en place, le tartre provoque :</p>
            <ul class="list-disc pl-5 space-y-1 mt-2">
                <li>Des <strong>gingivites</strong> (gencives rouges, gonflées, qui saignent)</li>
                <li>Des <strong>parodontites</strong> — destruction progressive de l'os autour des dents</li>
                <li>La <strong>perte des dents</strong> à terme</li>
                <li>Une <strong>mauvaise haleine</strong> persistent</li>
            </ul>
            <h4 class="font-bold text-slate-800 text-base mt-4">À quelle fréquence se faire détartrer ?</h4>
            <p>Le Dr Fouenang recommande un détartrage <strong>une à deux fois par an</strong> selon votre profil. Certains patients (fumeurs, diabétiques) peuvent nécessiter des séances plus fréquentes.</p>
            <h4 class="font-bold text-slate-800 text-base mt-4">Est-ce douloureux ?</h4>
            <p>Non. Le détartrage par ultrasons est rapide et indolore dans la grande majorité des cas. Une légère sensibilité peut apparaître les jours suivants, mais elle disparaît rapidement.</p>
            <p class="mt-4 font-semibold text-sky-700">Réservez votre séance de détartrage dès aujourd'hui au cabinet Fouenang, Akwa — Douala.</p>
        `
    }
];

/** ============================================
    INITIALISATION — tout démarre ici
    ============================================ **/

document.addEventListener('DOMContentLoaded', () => {

    /* --- SERVICES --- */
    const sGrid = document.getElementById('services-grid');
    if (sGrid) {
        SERVICES.forEach(s => {
            sGrid.innerHTML += `
                <div class="service-card bg-white p-10 rounded-[2rem] text-center">
                    <div class="w-16 h-16 bg-sky-50 text-sky-600 rounded-2xl flex items-center justify-center text-2xl mx-auto mb-6">
                        <i class="fas ${s.icon}"></i>
                    </div>
                    <h3 class="font-bold text-xl mb-4">${s.title}</h3>
                    <p class="text-slate-500 text-sm leading-relaxed">${s.desc}</p>
                </div>`;
        });
    }

    /* --- GALERIE --- */
    const gSlider = document.getElementById('gallery-slider');
    if (gSlider) {
        GALLERY_ITEMS.forEach(item => {
            gSlider.innerHTML += `
                <div class="shrink-0 w-full aspect-video md:aspect-[21/9]">
                    <img src="${item.src}" class="w-full h-full object-cover">
                </div>`;
        });
    }

    /* --- CAS CLINIQUES --- */
    const baSlider = document.getElementById('before-after-slider');
    if (baSlider) {
        BEFORE_AFTER.forEach(cas => {
            baSlider.innerHTML += `
                <div class="shrink-0 w-full p-8 text-center" style="flex: 0 0 100%">
                    <div class="aspect-video bg-slate-100 rounded-2xl overflow-hidden mb-6">
                        <img src="${cas.img}" class="w-full h-full object-cover" alt="${cas.title}">
                    </div>
                    <h4 class="font-bold text-xl uppercase tracking-widest">${cas.title}</h4>
                </div>`;
        });
    }

    /* --- BLOG (Lecture directe des fichiers JSON du CMS) --- */
    const bGrid = document.getElementById('blog-grid');
    if (bGrid) {
        // Liste des fichiers d'articles gérés par le CMS (à mettre à jour ou charger dynamiquement)
        // Pour l'instant, on tente de charger les posts CMS, sinon on prend le fallback statique
        loadCMSPosts(bGrid);
    }

    /* --- AUTO-DÉFILEMENT GALERIE --- */
    setInterval(() => slideGallery(1), 3000);

    /* --- AUTO-DÉFILEMENT CAS CLINIQUES --- */
    setInterval(() => slideBA(1), 4000);

    /* --- FORMULAIRE WHATSAPP --- */
    const waForm = document.getElementById('whatsapp-form');
    if (waForm) {
        waForm.onsubmit = (e) => {
            e.preventDefault();
            const name = document.getElementById('p-name').value;
            const motif = document.getElementById('p-motif').value;
            const text = `Bonjour Dr Patrick FOUENANG, je souhaite prendre RDV.\nNom: ${name}\nMotif: ${motif}`;
            window.open(`https://wa.me/237699485207?text=${encodeURIComponent(text)}`, '_blank');
        };
    }
});

/** Fonction de chargement automatique via GitHub API **/
async function loadCMSPosts(container) {
    try {
        // Remplace par tes vrais identifiants GitHub
        const owner = "camelDOUMTSOP";
        const repo = "le-site-de-Dr-fouenang-propre-sans-CMS";
        const path = "content/blog";

        // 1. On interroge l'API GitHub pour lister tous les fichiers du dossier blog
        const url = `https://api.github.com/repos/${owner}/${repo}/contents/${path}`;
        const response = await fetch(url);
        
        if (!response.ok) {
            throw new Error("Dossier CMS non encore créé ou vide");
        }

        const files = await response.json();
        
        // On ne garde que les fichiers .json
        const jsonFiles = files.filter(file => file.name.endsWith('.json'));

        if (jsonFiles.length === 0) {
            window._allPosts = BLOG_POSTS;
            displayPosts(container, window._allPosts);
            return;
        }

        // 2. On télécharge le contenu de chaque fichier JSON trouvé
        const fetchPromises = jsonFiles.map(file => 
            fetch(file.download_url).then(res => res.json())
        );

        const cmsPosts = await Promise.all(fetchPromises);
        
        // 3. On affiche (les articles du CMS d'abord, puis les fallbacks)
        window._allPosts = [...cmsPosts, ...BLOG_POSTS];
        displayPosts(container, window._allPosts);

    } catch (error) {
        console.warn("Récupération CMS impossible, affichage des articles par défaut :", error);
        window._allPosts = BLOG_POSTS;
        displayPosts(container, window._allPosts);
    }
}
function displayPosts(container, posts) {
    container.innerHTML = '';
    posts.forEach((post, index) => {
        container.innerHTML += `
            <div class="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition cursor-pointer group">
                <div class="h-52 bg-slate-200 relative overflow-hidden">
                    <img src="${post.img}" class="w-full h-full object-cover group-hover:scale-105 transition duration-500" onerror="this.src='https://images.unsplash.com/photo-1588776814546-1ffbb172ef3a?w=800&auto=format&fit=crop'">
                    <span class="absolute top-4 left-4 bg-sky-600 text-white text-[10px] px-3 py-1 rounded-full font-bold uppercase">${post.tag}</span>
                </div>
                <div class="p-8">
                    <h4 class="font-bold text-xl mb-3">${post.title}</h4>
                    <p class="text-slate-500 text-sm mb-6">${post.desc}</p>
                    <button onclick="openBlog(${index})" class="text-sky-600 font-bold text-sm flex items-center gap-2 hover:gap-3 transition-all">
                        Découvrir l'article <i class="fas fa-arrow-right text-xs"></i>
                    </button>
                </div>
            </div>`;
    });
}

/** NAVIGATION SLIDERS **/
let gIdx = 0;
function slideGallery(dir) {
    const track = document.getElementById('gallery-slider');
    if(!track) return;
    gIdx = (gIdx + dir + GALLERY_ITEMS.length) % GALLERY_ITEMS.length;
    track.style.transform = `translateX(-${gIdx * 100}%)`;
}

let baIdx = 0;
function slideBA(dir) {
    const track = document.getElementById('before-after-slider');
    if(!track) return;
    baIdx = (baIdx + dir + BEFORE_AFTER.length) % BEFORE_AFTER.length;
    track.style.transform = `translateX(-${baIdx * 100}%)`;
}

/** MODALS **/
function openModal() { document.getElementById('modal-rdv')?.classList.replace('hidden', 'flex'); }
function closeModal() { document.getElementById('modal-rdv')?.classList.replace('flex', 'hidden'); }

function openBlog(index) {
    const post = (window._allPosts || BLOG_POSTS)[index];
    
    // Si le contenu vient du CMS, on nettoie et formate le texte proprement
    let formattedContent = post.content || post.body || '';
    
    // Si c'est du texte brut/markdown, on convertit les **gras** et les sauts de ligne
    if (formattedContent && !formattedContent.includes('<p>')) {
        formattedContent = formattedContent
            // Convertit les **texte** en <strong>texte</strong>
            .replace(/\*\*(.*?)\*\*/g, '<strong class="text-slate-800 font-bold">$1</strong>')
            // Convertit les sauts de ligne doubles en paragraphes
            .split('\n\n').map(para => `<p class="mb-4 text-slate-600 leading-relaxed">${para}</p>`).join('');
    }

    document.getElementById('blog-modal-img').src = post.img;
    document.getElementById('blog-modal-tag').textContent = post.tag;
    document.getElementById('blog-modal-title').textContent = post.title;
    document.getElementById('blog-modal-content').innerHTML = formattedContent;
    
    document.getElementById('modal-blog').classList.replace('hidden', 'flex');
    document.body.style.overflow = 'hidden';
}

function closeBlog() {
    document.getElementById('modal-blog').classList.replace('flex', 'hidden');
    document.body.style.overflow = '';
}

function openUrgence() {
    document.getElementById('modal-urgence').classList.replace('hidden', 'flex');
    document.body.style.overflow = 'hidden';
}

function closeUrgence() {
    document.getElementById('modal-urgence').classList.replace('flex', 'hidden');
    document.body.style.overflow = '';
}

function envoyerUrgence() {
    const name = document.getElementById('u-name').value.trim() || 'Patient';
    const type = document.getElementById('u-type').value;
    const text = `🚨 *URGENCE DENTAIRE*\n\nBonjour Dr Patrick FOUENANG,\n\nJe suis *${name}* et j'ai besoin d'une consultation urgente.\n\n*Motif :* ${type}\n\nMerci de me rappeler dès que possible.`;
    window.open(`https://wa.me/237699485207?text=${encodeURIComponent(text)}`, '_blank');
    closeUrgence();
}