// Contenu partagé par les 3 maquettes (source : cahier des charges SATINA AGRO-SERVICE).
// Pour ajouter un produit, une actualité ou un service, il suffit de compléter les listes ci-dessous.
(() => {
  const S = window.SATINA = {
    nom: "SATINA AGRO-SERVICE",
    raison: "ÉTABLISSEMENTS SATINA AGRO-SERVICE",
    slogan: "Cultivons l'avenir ensemble.",
    accroche: "Votre partenaire en importation, distribution et approvisionnement alimentaire.",
    sousTitre: ["Produits agricoles", "Produits alimentaires", "Importation", "Distribution"],
    pdg: "M. Talibé Diallo",
    tel: "+224 627 42 78 21",
    email: "satinaagroservice8316@gmail.com",
    adresse: "Madina École, en face du Centre Commercial Yansané, Commune de Matam, Conakry, Guinée",
    ville: "Conakry — République de Guinée",
    rccm: "GN.TCC.2025.A.02074",
    nif: "989442306",
    horaires: "Horaires à confirmer",
    carte: "https://www.google.com/maps?q=Centre+Commercial+Yansan%C3%A9,+Matam,+Conakry,+Guin%C3%A9e&output=embed",
    messageWhatsApp: "Bonjour SATINA AGRO-SERVICE, je souhaite obtenir des informations sur vos produits et services.",

    presentation: [
      "SATINA AGRO-SERVICE est une entreprise guinéenne basée à Conakry, dans la commune de Matam. Elle évolue dans le commerce, l'importation, la distribution et l'approvisionnement en produits agricoles et alimentaires.",
      "Notre ambition : développer des relations commerciales durables avec nos clients, fournisseurs, producteurs, exportateurs et partenaires, en Guinée, en Afrique de l'Ouest et à l'international.",
    ],
    engagements: ["Qualité des produits", "Disponibilité des marchandises", "Fiabilité de l'approvisionnement", "Professionnalisme", "Respect des engagements", "Relations commerciales durables"],
    motPdg: "Chez SATINA AGRO-SERVICE, nous avons une conviction : le commerce se construit sur la confiance. Notre mission est d'assurer au marché guinéen un approvisionnement régulier en produits agricoles et alimentaires de qualité, et de bâtir avec nos fournisseurs internationaux des partenariats durables et gagnant-gagnant.",
    vision: "Devenir progressivement un acteur reconnu dans l'importation, l'approvisionnement et la distribution de produits agricoles et alimentaires en Guinée et en Afrique de l'Ouest, en construisant un réseau fiable de fournisseurs et de clients.",

    valeurs: [
      { t: "Qualité", d: "Sélectionner des produits répondant aux attentes des clients." },
      { t: "Fiabilité", d: "Respecter les engagements commerciaux." },
      { t: "Professionnalisme", d: "Une organisation commerciale sérieuse." },
      { t: "Disponibilité", d: "Favoriser un approvisionnement régulier." },
      { t: "Traçabilité", d: "Un suivi clair des marchandises et des opérations." },
      { t: "Partenariat", d: "Construire des relations gagnant-gagnant." },
      { t: "Développement", d: "Participer à l'essor du commerce agricole en Guinée et en Afrique de l'Ouest." },
    ],

    // Formats indicatifs, à confirmer par la direction.
    produits: [
      { id: "oignons", nom: "Oignons", desc: "Notre activité phare : importation et distribution d'oignons pour le marché guinéen et ouest-africain.", format: "Sacs filets 25 / 50 kg", vedette: true },
      { id: "ail", nom: "Ail", desc: "Ail sec sélectionné pour grossistes et détaillants.", format: "Cartons / sacs" },
      { id: "tomates", nom: "Tomates", desc: "Tomates pour le commerce de gros et la distribution.", format: "Caisses / cartons" },
      { id: "pates", nom: "Pâtes alimentaires", desc: "Spaghetti, macaroni et autres formats courants.", format: "Cartons" },
      { id: "huile", nom: "Huile végétale", desc: "Huile de cuisine pour ménages et professionnels.", format: "Bidons / cartons" },
      { id: "cubes", nom: "Cubes d'assaisonnement", desc: "Bouillons et assaisonnements très demandés sur le marché.", format: "Cartons" },
      { id: "haricots", nom: "Haricots blancs", desc: "Haricots blancs importés, notamment d'Égypte.", format: "Sacs 25 kg" },
      { id: "autres", nom: "Autres produits", desc: "Une gamme élargie progressivement selon les besoins du marché.", format: "Sur demande" },
    ],

    // Page « Importation d'oignons » — critères indicatifs, à valider.
    oignons: [
      { t: "Variétés recherchées", items: ["Oignon rouge", "Oignon jaune", "Oignon blanc"] },
      { t: "Calibres", items: ["40 – 60 mm", "60 – 80 mm", "80 mm et plus"] },
      { t: "Conditionnements", items: ["Sacs filets de 25 kg", "Sacs filets de 50 kg", "Autres formats sur proposition"] },
      { t: "Quantités", items: ["Conteneurs complets", "Commandes régulières", "Contrats saisonniers"] },
      { t: "Origines possibles", items: ["Pays-Bas", "Égypte", "Maroc", "Niger", "Inde", "Chine"] },
      { t: "Exigences de qualité", items: ["Bulbes secs, fermes et calibrés", "Sans germination ni pourriture", "Certificat phytosanitaire et d'origine"] },
    ],

    services: [
      { t: "Importation", d: "Approvisionnement en produits agricoles et alimentaires depuis les marchés internationaux.", i: "navire" },
      { t: "Distribution", d: "Distribution des marchandises auprès des commerçants, grossistes, détaillants et professionnels.", i: "camion" },
      { t: "Commerce de gros", d: "Vente de produits agricoles et alimentaires en quantité.", i: "palette" },
      { t: "Approvisionnement", d: "Recherche et mise à disposition de marchandises selon les besoins du marché.", i: "globe" },
      { t: "Partenariats", d: "Relations durables avec producteurs, exportateurs, fournisseurs et distributeurs.", i: "liens" },
    ],

    chaine: [
      { t: "Producteurs", d: "Exploitations agricoles" },
      { t: "Exportateurs", d: "Fournisseurs internationaux" },
      { t: "Transport", d: "Fret maritime et logistique" },
      { t: "Importation", d: "Dédouanement et réception" },
      { t: "Distribution", d: "Stockage et livraison" },
      { t: "Clients", d: "Grossistes, commerçants, entreprises" },
    ],

    // Montants, conditions de paiement et nom du fournisseur volontairement omis (§9 et §31 du cahier des charges).
    operation: {
      t: "Importation de haricots blancs d'Égypte",
      details: [["Produit", "Haricots blancs égyptiens"], ["Quantité", "50 tonnes métriques"], ["Conditionnement", "Sacs de 25 kg"], ["Incoterm", "CFR Port de Dakar"], ["Expédition", "Août 2026"]],
    },

    typesPartenaires: ["Producteurs agricoles", "Exportateurs", "Grossistes", "Entreprises agroalimentaires", "Fournisseurs internationaux", "Distributeurs", "Sociétés d'import-export"],
    clients: ["Grossistes", "Détaillants", "Commerçants", "Revendeurs", "Distributeurs", "Magasins alimentaires", "Restaurants", "Entreprises", "Acteurs des marchés"],

    // Exemples d'actualités, à remplacer.
    actualites: [
      { date: "Octobre 2026", cat: "Partenariats", t: "SATINA AGRO-SERVICE recherche des exportateurs d'oignons", d: "Nous développons notre réseau de fournisseurs d'oignons et étudions toutes les propositions sérieuses." },
      { date: "Août 2026", cat: "Importations", t: "50 tonnes de haricots blancs d'Égypte", d: "Une opération en sacs de 25 kg, livrée CFR au port de Dakar." },
      { date: "2026", cat: "Entreprise", t: "Lancement de notre site internet", d: "Découvrez nos produits, demandez un devis ou proposez vos offres en ligne." },
    ],

    formulaires: {
      fournisseur: {
        bouton: "Envoyer mon offre",
        champs: [
          { n: "entreprise", l: "Nom de l'entreprise", req: 1 },
          { n: "pays", l: "Pays", req: 1 },
          { n: "contact", l: "Nom du contact", req: 1 },
          { n: "tel", l: "Téléphone", type: "tel", req: 1 },
          { n: "whatsapp", l: "WhatsApp", type: "tel" },
          { n: "email", l: "E-mail", type: "email", req: 1 },
          { n: "produit", l: "Produit proposé", type: "produits", req: 1 },
          { n: "origine", l: "Origine" },
          { n: "quantite", l: "Quantité disponible", ph: "ex. 500 t / mois" },
          { n: "conditionnement", l: "Conditionnement", ph: "ex. sacs filets 25 kg" },
          { n: "prix", l: "Prix indicatif", ph: "ex. USD / tonne, Incoterm" },
          { n: "port", l: "Port de départ" },
          { n: "capacite", l: "Capacité d'approvisionnement" },
          { n: "paiement", l: "Conditions de paiement" },
          { n: "certificats", l: "Certificats disponibles", ph: "phytosanitaire, origine, ISO…" },
          { n: "catalogue", l: "Catalogue (PDF)", type: "file" },
          { n: "message", l: "Message", type: "textarea", full: 1 },
        ],
      },
      devis: {
        bouton: "Demander un devis",
        champs: [
          { n: "nom", l: "Nom", req: 1 },
          { n: "entreprise", l: "Entreprise" },
          { n: "tel", l: "Téléphone", type: "tel", req: 1 },
          { n: "whatsapp", l: "WhatsApp", type: "tel" },
          { n: "email", l: "E-mail", type: "email" },
          { n: "produit", l: "Produit recherché", type: "produits", req: 1 },
          { n: "quantite", l: "Quantité", req: 1, ph: "ex. 10 tonnes, 200 sacs…" },
          { n: "ville", l: "Ville" },
          { n: "pays", l: "Pays", val: "Guinée" },
          { n: "document", l: "Document éventuel", type: "file" },
          { n: "message", l: "Message", type: "textarea", full: 1 },
        ],
      },
      // Versions courtes, pour les maquettes épurées (4 et 5).
      fournisseurCourt: {
        bouton: "Envoyer mon offre",
        champs: [
          { n: "entreprise", l: "Entreprise", req: 1 },
          { n: "pays", l: "Pays", req: 1 },
          { n: "contact", l: "Téléphone / WhatsApp", type: "tel", req: 1 },
          { n: "email", l: "E-mail", type: "email", req: 1 },
          { n: "produit", l: "Produit proposé", type: "produits", req: 1 },
          { n: "quantite", l: "Quantité disponible" },
          { n: "message", l: "Votre offre (origine, prix, port…)", type: "textarea", full: 1 },
        ],
      },
      devisCourt: {
        bouton: "Demander un devis",
        champs: [
          { n: "nom", l: "Nom", req: 1 },
          { n: "tel", l: "Téléphone / WhatsApp", type: "tel", req: 1 },
          { n: "produit", l: "Produit", type: "produits", req: 1 },
          { n: "quantite", l: "Quantité", req: 1 },
        ],
      },
      contact: {
        bouton: "Envoyer",
        champs: [
          { n: "nom", l: "Nom", req: 1 },
          { n: "tel", l: "Téléphone / WhatsApp", type: "tel", req: 1 },
          { n: "email", l: "E-mail", type: "email", full: 1 },
          { n: "message", l: "Message", type: "textarea", full: 1, req: 1 },
        ],
      },
    },
  };

  S.whatsapp = "https://wa.me/224627427821?text=" + encodeURIComponent(S.messageWhatsApp);

  // Icônes au trait (24×24), héritent de la couleur du texte.
  const I = {
    oignons: '<path d="M12 3c-.8 1.5-.8 2.7 0 3.6C8.2 7.6 5.5 10.5 5.5 14.2a6.5 6.5 0 0 0 13 0c0-3.7-2.7-6.6-6.5-7.6"/><path d="M12 7c-2 2-2.8 4.6-2.8 7.2S10 19 12 20.7M12 7c2 2 2.8 4.6 2.8 7.2S14 19 12 20.7"/>',
    ail: '<path d="M12 3v3"/><path d="M12 6c-4 1.5-6.5 4.6-6.5 8a6.5 6.5 0 0 0 13 0c0-3.4-2.5-6.5-6.5-8z"/><path d="M12 6c-1.8 2.2-2.6 5-2.6 8s.8 5.3 2.6 6.5M12 6c1.8 2.2 2.6 5 2.6 8s-.8 5.3-2.6 6.5"/>',
    tomates: '<circle cx="12" cy="13.5" r="7"/><path d="M12 6.5V3.5M8.5 7.5 12 9l3.5-1.5M9.5 5.5 12 6.5l2.5-1"/>',
    pates: '<rect x="5" y="3" width="14" height="18" rx="2"/><path d="M8 7h8M8.5 11c1.2 1 2.3 1 3.5 0s2.3-1 3.5 0M8.5 15c1.2 1 2.3 1 3.5 0s2.3-1 3.5 0"/>',
    huile: '<path d="M10 2h4v3h-4z"/><path d="M10 5 7 9v11a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9l-3-4"/><path d="M7 13h10"/>',
    cubes: '<path d="M3 10l6-3 6 3-6 3z"/><path d="M3 10v6l6 3v-6M15 10v6l-6 3"/><path d="M13 6l4-2 4 2-4 2"/><path d="M21 6v5l-4 2"/>',
    haricots: '<path d="M8 4c3 0 4 2 4 4s-2 3-2 5 1 3 1 4.5S9.5 21 7.5 21 4 18 4 13s1-9 4-9z"/><path d="M16 5c2.5 0 4 2.5 4 7s-1.5 8-4 8-3-2-3-3.5 1-2.5 1-4-1-2.5-1-4S14 5 16 5z"/>',
    autres: '<path d="M7 5h10l-1.5 3h-7z"/><path d="M8.5 8C5 10 4 14 5 18c.5 2 2.5 3 7 3s6.5-1 7-3c1-4 0-8-3.5-10"/><path d="M9 14h6"/>',
    navire: '<path d="M3 17l2 4h14l2-4-9-3z"/><path d="M6 14.5V9h12v5.5M9 9V6h6v3M12 3v3"/>',
    camion: '<path d="M2 6h11v10H2zM13 9h4l4 4v3h-8z"/><circle cx="6" cy="17.5" r="2"/><circle cx="17" cy="17.5" r="2"/>',
    palette: '<rect x="3" y="11" width="8" height="7" rx="1"/><rect x="13" y="11" width="8" height="7" rx="1"/><rect x="8" y="4" width="8" height="7" rx="1"/><path d="M2 21h20"/>',
    globe: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.5 2.5 3.8 5.5 3.8 9S14.5 18.5 12 21c-2.5-2.5-3.8-5.5-3.8-9S9.5 5.5 12 3z"/>',
    liens: '<circle cx="9" cy="12" r="5"/><circle cx="15" cy="12" r="5"/>',
    tel: '<path d="M5 3h4l2 5-2.5 1.5a11 11 0 0 0 6 6L16 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 5a2 2 0 0 1 2-2z"/>',
    email: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/>',
    lieu: '<path d="M12 21s7-6.2 7-12a7 7 0 0 0-14 0c0 5.8 7 12 7 12z"/><circle cx="12" cy="9" r="2.5"/>',
    horloge: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
    personne: '<circle cx="12" cy="8" r="4"/><path d="M4 21c0-4.4 3.6-7 8-7s8 2.6 8 7"/>',
    check: '<path d="m5 12 5 5 9-10"/>',
    fleche: '<path d="M5 12h14M13 6l6 6-6 6"/>',
    photo: '<rect x="3" y="5" width="18" height="14" rx="2"/><circle cx="9" cy="10" r="2"/><path d="m21 16-5-5-8 8"/>',
  };
  const WA = '<path fill="currentColor" stroke="none" d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm5.3 14.1c-.2.6-1.3 1.2-1.8 1.2-.5.1-1 .2-3.3-.7-2.8-1.1-4.5-4-4.7-4.2-.1-.2-1.1-1.5-1.1-2.9s.7-2 1-2.3c.2-.3.5-.3.7-.3h.5c.2 0 .4 0 .6.5l.8 2c.1.2.1.4 0 .5l-.4.6c-.1.2-.3.3-.1.6.2.3.8 1.3 1.7 2.1 1.2 1 2.1 1.3 2.4 1.5.3.1.5.1.6-.1l.9-1c.2-.3.4-.2.6-.1l1.9.9c.3.1.5.2.5.3.1.2.1.7-.1 1.3z"/>';
  S.ico = (n, cls = "ico") => `<svg class="${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${n === "whatsapp" ? WA : I[n] || ""}</svg>`;

  // Génère les champs d'un formulaire dans <form data-form="fournisseur|devis|contact">.
  S.formulaire = (form, btnClass = "btn") => {
    const f = S.formulaires[form.dataset.form];
    const id = (n) => `${form.dataset.form}-${n}`;
    const options = S.produits.map(p => `<option>${p.nom}</option>`).join("");
    form.innerHTML = f.champs.map(c => {
      const attrs = `id="${id(c.n)}" name="${c.n}"${c.req ? " required" : ""}${c.ph ? ` placeholder="${c.ph}"` : ""}`;
      const input =
        c.type === "textarea" ? `<textarea ${attrs}></textarea>` :
        c.type === "produits" ? `<select ${attrs}><option value="">Choisir…</option>${options}</select>` :
        c.type === "file" ? `<input type="file" ${attrs} accept=".pdf,.jpg,.jpeg,.png,.doc,.docx">` :
        `<input type="${c.type || "text"}" ${attrs}${c.val ? ` value="${c.val}"` : ""}>`;
      return `<div class="champ${c.full ? " full" : ""}"><label for="${id(c.n)}">${c.l}${c.req ? " *" : ""}</label>${input}</div>`;
    }).join("") + `<div class="champ full"><button class="${btnClass}" type="submit">${f.bouton}</button><p class="form-msg" role="status"></p></div>`;
    form.addEventListener("submit", e => {
      e.preventDefault();
      form.querySelector(".form-msg").textContent = "Merci ! (Démonstration : ce formulaire sera relié à l'adresse e-mail de l'entreprise dans le site final.)";
      form.reset();
    });
  };

  S.init = () => {
    document.querySelectorAll("[data-s]").forEach(el => { el.textContent = S[el.dataset.s]; });
    document.querySelectorAll('[data-lien="tel"]').forEach(a => a.href = "tel:" + S.tel.replace(/\s/g, ""));
    document.querySelectorAll('[data-lien="email"]').forEach(a => a.href = "mailto:" + S.email);
    document.querySelectorAll('[data-lien="whatsapp"]').forEach(a => { a.href = S.whatsapp; a.target = "_blank"; a.rel = "noopener"; });
    document.querySelectorAll("[data-ico]").forEach(el => el.insertAdjacentHTML("afterbegin", S.ico(el.dataset.ico)));
    document.querySelectorAll("iframe[data-carte]").forEach(f => f.src = S.carte);
    document.querySelectorAll("[data-annee]").forEach(el => el.textContent = new Date().getFullYear());

    // Menu mobile
    const menu = document.querySelector("[data-menu]");
    document.querySelector("[data-menu-btn]")?.addEventListener("click", () => menu.classList.toggle("open"));
    menu?.querySelectorAll("a").forEach(a => a.addEventListener("click", () => menu.classList.remove("open")));

    // Sélecteur de langue (l'anglais sera traduit dans le site final)
    document.querySelectorAll("[data-lang]").forEach(b => b.addEventListener("click", () => {
      if (b.dataset.lang === "en") alert("English version: planned for the final website (for suppliers and international partners).");
    }));

    // Données structurées pour Google
    const ld = document.createElement("script");
    ld.type = "application/ld+json";
    ld.textContent = JSON.stringify({
      "@context": "https://schema.org", "@type": "Organization", name: S.nom, legalName: S.raison,
      telephone: S.tel, email: S.email, slogan: S.slogan, founder: { "@type": "Person", name: "Talibé Diallo" },
      address: { "@type": "PostalAddress", streetAddress: "Madina École, en face du Centre Commercial Yansané", addressLocality: "Conakry", addressRegion: "Matam", addressCountry: "GN" },
      areaServed: ["Guinée", "Afrique de l'Ouest"],
    });
    document.head.appendChild(ld);
  };
})();
