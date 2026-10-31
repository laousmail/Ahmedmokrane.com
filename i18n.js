/* Ahmed Mokrane: EN / FR locale dictionary and switcher */
(function () {
  const I18N = {
    en: {
      docTitle: "Ahmed Mokrane · Director & Cinematographer · Montréal",
      docDesc:
        "Ahmed Mokrane is a Montréal director and cinematographer. Narrative shorts, music videos, concerts and live experiences shaped by emotion, movement and intention.",
      navReel: "Reel",
      navWork: "Work",
      navFilms: "Films",
      navLive: "Live",
      navOffer: "Offer",
      navApproach: "Approach",
      navAbout: "About",
      navBrief: "Start a brief",
      navMenu: "Menu",
      navClose: "Close",
      navLang: "Language",
      soundMute: "Mute ambiance",
      soundUnmute: "Unmute ambiance",
      heroRole: "Director & Cinematographer · Montréal",
      heroLine: 'Where every frame holds a <em>soul</em>.',
      heroLede:
        "Films, music videos and live experiences shaped by emotion, movement and intention.",
      heroCtaWork: "Explore selected work",
      heroCtaProject: "Start a project",
      heroScroll: "Scroll",
      reelLabel: "Opening reel",
      creditsLbl: "Selected collaborators",
      proofKicker: "In the room",
      proofTitle: 'Worked with artists the room already <em>knows</em>.',
      proofLede:
        "Named collaborators and venues from the slate. Festival recognition only where verified.",
      proof1:
        "<strong>Soolking</strong>, an artist. Two nights at L'Olympia de Montréal. Director, audiovisual production.",
      proof2:
        "<strong>Amine Radi</strong>, a comedian. Montréal tour, 2026. Director / Filmmaker.",
      proof3:
        "<strong>Paul Mirabel</strong>, a stand-up comedian. Arena dates at Place Bell and Centre Vidéotron. Filmmaker.",
      proof4:
        "<strong>Sonrié</strong>, directed by Ahmed. Top 2 at Mix Film Festival Laval.",
      proof5:
        "<strong>Music videos</strong> for Yacine Yafsah, Said Saidj and Inder Khedewala. More than one million views across projects.",
      workKicker: "Selected work",
      workTitle: 'Frames that carry a <em>feeling</em>',
      workLede:
        "Fiction, music videos, concerts, live comedy, documentary and post. Open a title for the story, the role and the footage.",
      workCount: "10 projects",
      filterAll: "All",
      filterFiction: "Fiction",
      filterMusic: "Music videos",
      filterLive: "Concerts",
      filterComedy: "Live comedy",
      filterDoc: "Documentary",
      filterPost: "Post",
      filmsKicker: "Signature films",
      filmsTitle: 'Two short <em>films</em>',
      filmsLede:
        "Written and directed by Ahmed. Sonrié placed Top 2 at Mix Film Festival Laval. Stories about belonging, passion and the space between what we show and what we feel.",
      filmsSound:
        'Sound design and score by Smail Laouchedi · <a href="https://eclipsetone.com" target="_blank" rel="noopener">Eclipse Tone</a>',
      creditSound: "Sound design & score",
      creditSoundBy:
        'Smail Laouchedi · <a href="https://eclipsetone.com" target="_blank" rel="noopener">Eclipse Tone</a>',
      edmMeta: "Short film · Fiction · Montréal",
      edmCredit: "Written and directed by Ahmed Mokrane",
      edmP1: "An immigrant student in Montréal, building a new life while still tied to the one he left.",
      edmP2:
        "The film treats immigration as an emotional journey as much as a geographic one: the feeling of living between two realities at once. Identity, belonging and the quiet weight of distance.",
      role: "Role",
      shotIn: "Shot in",
      watchFilm: "Watch the film",
      watchTeaser: "Watch the teaser",
      sonMeta: "Short film · Fiction · Dominican Republic",
      sonFestHero: "Top 2 · Mix Film Festival Laval",
      sonFest: "Top 2 · Mix Film Festival Laval",
      sonFestNote: "Festival recognition for a short film written and directed by Ahmed.",
      sonStill1: "Mix Film Festival Laval · red carpet",
      sonStill2: "Mix Film Festival Laval · official backdrop",
      sonP1:
        "A clown who has lost the passion that once gave his work meaning. His job is to make people smile; he can no longer find his own.",
      sonP2:
        "Shot in the Dominican Republic, it is a film about loneliness, lost purpose and the search for meaning, and a turning point in Ahmed's work as a narrative director. Official selection and Top 2 at Mix Film Festival Laval.",
      laurelSmall: "Official selection",
      liveKicker: "Live productions",
      liveTitle: 'The room is part of the <em>story</em>',
      liveLede:
        "Concerts and comedy where the camera anticipates the moment before it happens: stage, crowd, backstage and the reactions in between. Worked with artists the audience already came to see.",
      soolkingMeta: "Concert · Multi-cam",
      soolkingWorked: "Worked with Soolking, an artist",
      soolkingBody: "Two nights at L'Olympia de Montréal. Director, audiovisual production.",
      amineMeta: "Live comedy · 2026",
      amineWorked: "Worked with Amine Radi, a comedian",
      amineBody: "Montréal tour. Director / Filmmaker.",
      mirabelMeta: "Stand-up · Arena",
      mirabelWorked: "Worked with Paul Mirabel, a stand-up comedian",
      mirabelBody: "Arena dates at Place Bell, Laval and Centre Vidéotron, Québec. Filmmaker.",
      raifestMeta: "Festival",
      raifestBody: "Montréal festival coverage. Director / Filmmaker.",
      meriemMeta: "Live comedy · 2026",
      meriemBody: "Montréal. Filmmaker.",
      camilleMeta: "Live comedy · 2025",
      camilleBody: "Montréal. Filmmaker.",
      desiletsMeta: "Concert",
      desiletsBody: "Concert series. Director / Filmmaker.",
      mvKicker: "Music videos",
      mvTitle: 'Give the song a <em>face</em>',
      mvLede:
        "Concept, filming and final cut for artists including Yacine Yafsah, Said Saidj and Inder Khedewala. A visual world built around each track.",
      mvViews: "views across music video projects",
      mvRole: "Creative direction · Cinematography · Post",
      mvBody1: "Full creative direction and production, from concept to final cut.",
      mvBody3: "The project that started his work directing official music videos.",
      watchHere: "Watch here",
      leadKicker: "Next step",
      leadTitle: 'Have a date, a song, or a <em>stage</em>?',
      leadLede: "Send a short brief. Ahmed replies with availability and a clear next step.",
      offerKicker: "Offer",
      offerTitle: 'Four disciplines. One <em>eye</em>.',
      offerLede: "Creative direction from intention to final grade. Choose the path that fits, then start a brief.",
      offerBooking: "Now booking",
      d1Title: "Short films",
      d1Body:
        "Narrative direction from treatment through picture lock. Fiction with intention in every frame: story, performance and atmosphere held as one.",
      d1Expect: "You get a filmmaker who shapes the film, not only operates the camera.",
      d2Title: "Music videos",
      d2Body: "A visual identity for the song. Concept, shoot and cut that build a world around the artist, A to Z.",
      d2Expect: "Creative involvement from first reference to delivery.",
      d3Title: "Concerts & live",
      d3Body:
        "Multi-cam coverage that captures the stage, the room and the moments between. Arenas to intimate rooms.",
      d3Expect: "Direction that makes the audience feel they were there.",
      d4Title: "Brand & commercial",
      d4Body:
        "Campaign films and brand stories with the same cinematic care as narrative work. Clarity without losing soul.",
      d4Expect: "A clear creative path from brief to finished film.",
      startBrief: "Start this brief",
      approachKicker: "Approach",
      approachTitle: 'The camera is a <em>language</em>.',
      approachLede: "No two projects should look the same. Every story, artist and brief gets its own visual grammar.",
      gLight: "Light",
      gComp: "Composition",
      gMove: "Movement",
      gEdit: "Editing",
      gCreates: "creates",
      gEmotion: "emotion",
      gIntention: "intention",
      gEnergy: "energy",
      gRhythm: "rhythm",
      centralQ: "What should the audience feel when they see this?",
      howMoves: "How a project moves",
      s1: "Understand",
      s1b: "The story, the message, the audience and the identity behind the project.",
      s2: "Imagine",
      s2b: "A visual direction built from references, light, composition, movement and atmosphere.",
      s3: "Create",
      s3b: "Preparation on set, with room left for the moments nobody planned.",
      s4: "Shape",
      s4b: "Edit and grade, every frame kept faithful to the original intention.",
      s5: "Make it feel",
      s5b: "Technical quality is never the goal. The audience should feel something.",
      aboutKicker: "About",
      aboutTitle: 'A life behind the lens. It started when he was <em>three</em>.',
      ch1Meta: "01 · Origins · Algeria",
      ch1Title: "Photography first",
      ch1Body:
        "Growing up in Algeria, photography was his first way of seeing: people, emotion, and the chance to keep a moment alive beyond its time. Photography taught him to observe. Filmmaking taught him to feel, move and tell stories.",
      ch2Meta: "02 · Turning point · Canada",
      ch2Title: "Starting over",
      ch2Body:
        "Moving to Canada meant risk, sacrifice and building from the ground up. Through the doubt, the camera stayed constant. One project led to the next, and a passion became a profession.",
      ch3Meta: "03 · Today · Montréal",
      ch3Title: "Director & Cinematographer",
      ch3Body:
        "Visual stories across film, live events, music and brands, with one rule: every frame needs intention, emotion and a reason to exist.",
      kitKicker: "Camera report",
      kitTitle: 'The package behind the <em>frame</em>',
      kitCam: "Cameras",
      kitLens: "Lenses",
      kitOptics: "Production-specific optics",
      kitAudio: "Audio",
      kitWireless: "Wireless systems",
      kitZoom: "Zoom recorders",
      kitLight: "Lighting",
      kitLed: "Professional LED",
      kitProj: "Projectors",
      kitMulti: "Multi-light setups",
      kitAerial: "Aerial",
      kitDrone: "Drone cinematography",
      kitPost: "Post-production",
      roleWriterDir: "Writer, Director",
      roleDirector: "Director",
      locDR: "Dominican Republic",
      azarKicker: "Production",
      azarBody: "The production entity behind cinematic projects. Creative vision stays with the directing and the camera.",
      contactKicker: "Contact",
      contactTitle: 'Let\'s make something people <em>feel</em>.',
      contactLead:
        "Tell Ahmed about your project, the story behind it and what you want your audience to experience.",
      vp1: "One filmmaker from concept through grade",
      vp2: "Clear reply with availability and next steps",
      vp3: "Based in Montréal, open to travel",
      labelEmail: "Email",
      labelPhone: "Phone",
      labelIg: "Instagram",
      labelBased: "Based in",
      copyBtn: "Copy",
      fName: "Name",
      fCo: "Company / Agency",
      fCoPh: "Optional",
      fMail: "Email",
      fType: "Project type",
      fDate: "Shoot date",
      fDatePh: "e.g. March 2027",
      fBudget: "Budget range",
      fBudget0: "Let's discuss",
      fBudget1: "Under $2,500",
      fBudget2: "$2,500 to $7,500",
      fBudget3: "$7,500 to $20,000",
      fBudget4: "$20,000+",
      fMsg: "Project description",
      fMsgPh: "The story, the artist, the venue, the mood.",
      fFeel: "What should the audience feel?",
      fFeelPh: "The emotion or experience you want them to leave with.",
      fSubmit: "Write my brief",
      briefReady: "Your brief · send to ahmedmkrne@gmail.com",
      copyBrief: "Copy brief",
      openEmail: "Open in email",
      typeShort: "Short film",
      typeMusic: "Music video",
      typeLive: "Concert / live",
      typeDoc: "Documentary",
      typeBrand: "Brand content",
      typeOther: "Other",
      errName: "Add your name so Ahmed knows who to reply to.",
      errMail: "Add an email address Ahmed can reply to, like you@studio.com.",
      errMsg: "Describe the project in a sentence or two.",
      errFeel: "Share what you want the audience to feel.",
      toastCopied: "Copied",
      toastBrief: "Brief ready",
      toastSelect: "Selected. Press copy",
      footerRole: "Director & Cinematographer · Montréal",
      footerLine: 'Let\'s make something people <em>feel</em>.',
      footerConnect: "Connect",
      footerOnSite: "On this site",
      footerWork: "Work",
      footerFilms: "Films",
      footerOffer: "Offer",
      footerContact: "Contact",
      footerCopy: "© 2026 Ahmed Mokrane · Montréal",
      playerWatch: "Watch",
      playerClose: "Close",
      playerHint: "Playing on this page. Press Esc to close.",
      caseClose: "Close",
      caseNext: "Next project",
      caseWhere: "Where",
      caseRecognition: "Recognition",
      take0l: "Frame 01",
      take0t: "Mark the frame.",
      take0s: "The image finds its ratio.",
      take1l: "Frame 02 · Live",
      take1t: "The room is rolling.",
      take1s: "Stage, crowd and the space between.",
      take2l: "Frame 03 · Fiction",
      take2t: "Entre Deux Mondes.",
      take2s: "Between two realities at once.",
      take3l: "Frame 04 · Sonrié",
      take3t: "A smile, lost then found.",
      take3s: "Top 2 · Mix Film Festival Laval.",
      take4l: "Frame 05 · Music",
      take4t: "Give the song a face.",
      take4s: "A visual world for the track.",
      take5l: "Frame 06",
      take5t: "Continue below.",
      take5s: "Selected work, films and the brief.",
    },
    fr: {
      docTitle: "Ahmed Mokrane · Réalisateur et directeur photo · Montréal",
      docDesc:
        "Ahmed Mokrane est réalisateur et directeur de la photographie à Montréal. Courts métrages, clips, concerts et expériences live portés par l'émotion, le mouvement et l'intention.",
      navReel: "Reel",
      navWork: "Travail",
      navFilms: "Films",
      navLive: "Live",
      navOffer: "Offre",
      navApproach: "Approche",
      navAbout: "À propos",
      navBrief: "Démarrer un brief",
      navMenu: "Menu",
      navClose: "Fermer",
      navLang: "Langue",
      soundMute: "Couper l'ambiance",
      soundUnmute: "Activer l'ambiance",
      heroRole: "Réalisateur et directeur photo · Montréal",
      heroLine: 'Là où chaque plan porte une <em>âme</em>.',
      heroLede:
        "Films, clips et expériences live façonnés par l'émotion, le mouvement et l'intention.",
      heroCtaWork: "Explorer le travail",
      heroCtaProject: "Démarrer un projet",
      heroScroll: "Défiler",
      reelLabel: "Reel d'ouverture",
      creditsLbl: "Collaborations choisies",
      proofKicker: "Dans la salle",
      proofTitle: 'A travaillé avec des artistes que la salle <em>connaît</em> déjà.',
      proofLede:
        "Collaborateurs et lieux nommés d'après la slate. Reconnaissance festivalière seulement là où elle est vérifiée.",
      proof1:
        "<strong>Soolking</strong>, un artiste. Deux soirées à L'Olympia de Montréal. Réalisation, production audiovisuelle.",
      proof2:
        "<strong>Amine Radi</strong>, un humoriste. Tournée montréalaise, 2026. Réalisateur / Filmmaker.",
      proof3:
        "<strong>Paul Mirabel</strong>, un humoriste de stand-up. Dates en aréna à Place Bell et au Centre Vidéotron. Filmmaker.",
      proof4:
        "<strong>Sonrié</strong>, réalisé par Ahmed. Top 2 au Mix Film Festival Laval.",
      proof5:
        "<strong>Clips</strong> pour Yacine Yafsah, Said Saidj et Inder Khedewala. Plus d'un million de vues au total.",
      workKicker: "Travail sélectionné",
      workTitle: 'Des images qui portent un <em>sentiment</em>',
      workLede:
        "Fiction, clips, concerts, humour live, documentaire et postproduction. Ouvrez un titre pour l'histoire, le rôle et les images.",
      workCount: "10 projets",
      filterAll: "Tout",
      filterFiction: "Fiction",
      filterMusic: "Clips",
      filterLive: "Concerts",
      filterComedy: "Humour live",
      filterDoc: "Documentaire",
      filterPost: "Post",
      filmsKicker: "Films signatures",
      filmsTitle: 'Deux courts <em>métrages</em>',
      filmsLede:
        "Écrits et réalisés par Ahmed. Sonrié s'est classé Top 2 au Mix Film Festival Laval. Des récits sur l'appartenance, la passion et l'espace entre ce que l'on montre et ce que l'on ressent.",
      filmsSound:
        'Design sonore et musique de Smail Laouchedi · <a href="https://eclipsetone.com" target="_blank" rel="noopener">Eclipse Tone</a>',
      creditSound: "Design sonore et musique",
      creditSoundBy:
        'Smail Laouchedi · <a href="https://eclipsetone.com" target="_blank" rel="noopener">Eclipse Tone</a>',
      edmMeta: "Court métrage · Fiction · Montréal",
      edmCredit: "Écrit et réalisé par Ahmed Mokrane",
      edmP1:
        "Un étudiant immigrant à Montréal, qui construit une nouvelle vie tout en restant lié à celle qu'il a quittée.",
      edmP2:
        "Le film traite l'immigration comme un parcours émotionnel autant que géographique: le sentiment de vivre entre deux réalités à la fois. Identité, appartenance et le poids discret de la distance.",
      role: "Rôle",
      shotIn: "Tournage",
      watchFilm: "Voir le film",
      watchTeaser: "Voir le teaser",
      sonMeta: "Court métrage · Fiction · République dominicaine",
      sonFestHero: "Top 2 · Mix Film Festival Laval",
      sonFest: "Top 2 · Mix Film Festival Laval",
      sonFestNote: "Reconnaissance festivalière pour un court métrage écrit et réalisé par Ahmed.",
      sonStill1: "Mix Film Festival Laval · tapis rouge",
      sonStill2: "Mix Film Festival Laval · toile officielle",
      sonP1:
        "Un clown qui a perdu la passion qui donnait un sens à son travail. Son métier est de faire sourire les autres; il ne retrouve plus le sien.",
      sonP2:
        "Tourné en République dominicaine, c'est un film sur la solitude, la perte de sens et la quête de sens, et un tournant dans le travail narratif d'Ahmed. Sélection officielle et Top 2 au Mix Film Festival Laval.",
      laurelSmall: "Sélection officielle",
      liveKicker: "Productions live",
      liveTitle: 'La salle fait partie de l\'<em>histoire</em>',
      liveLede:
        "Concerts et humour où la caméra anticipe l'instant avant qu'il n'arrive: la scène, la foule, les coulisses et les réactions entre les deux. Avec des artistes que le public est déjà venu voir.",
      soolkingMeta: "Concert · Multi-cam",
      soolkingWorked: "A travaillé avec Soolking, un artiste",
      soolkingBody: "Deux soirées à L'Olympia de Montréal. Réalisation, production audiovisuelle.",
      amineMeta: "Humour live · 2026",
      amineWorked: "A travaillé avec Amine Radi, un humoriste",
      amineBody: "Tournée montréalaise. Réalisateur / Filmmaker.",
      mirabelMeta: "Stand-up · Aréna",
      mirabelWorked: "A travaillé avec Paul Mirabel, un humoriste de stand-up",
      mirabelBody: "Dates en aréna à Place Bell, Laval et au Centre Vidéotron, Québec. Filmmaker.",
      raifestMeta: "Festival",
      raifestBody: "Couverture festivalière à Montréal. Réalisateur / Filmmaker.",
      meriemMeta: "Humour live · 2026",
      meriemBody: "Montréal. Filmmaker.",
      camilleMeta: "Humour live · 2025",
      camilleBody: "Montréal. Filmmaker.",
      desiletsMeta: "Concert",
      desiletsBody: "Série de concerts. Réalisateur / Filmmaker.",
      mvKicker: "Clips",
      mvTitle: 'Donner un <em>visage</em> à la chanson',
      mvLede:
        "Concept, tournage et montage final pour des artistes comme Yacine Yafsah, Said Saidj et Inder Khedewala. Un monde visuel autour de chaque titre.",
      mvViews: "vues sur les projets de clips",
      mvRole: "Direction créative · Image · Postproduction",
      mvBody1: "Direction créative et production complètes, du concept au montage final.",
      mvBody3: "Le projet qui a lancé son travail de réalisation de clips officiels.",
      watchHere: "Regarder ici",
      leadKicker: "Prochaine étape",
      leadTitle: 'Une date, une chanson, ou une <em>scène</em>?',
      leadLede: "Envoyez un court brief. Ahmed répond avec sa disponibilité et la suite claire.",
      offerKicker: "Offre",
      offerTitle: 'Quatre disciplines. Un seul <em>regard</em>.',
      offerLede:
        "Direction créative de l'intention jusqu'à l'étalonnage. Choisissez la voie qui convient, puis démarrez un brief.",
      offerBooking: "Réservations ouvertes",
      d1Title: "Courts métrages",
      d1Body:
        "Réalisation narrative du traitement jusqu'au picture lock. Une fiction où chaque plan a une intention: récit, jeu et atmosphère tenus ensemble.",
      d1Expect: "Vous travaillez avec un cinéaste qui façonne le film, pas seulement qui opère la caméra.",
      d2Title: "Clips",
      d2Body: "Une identité visuelle pour la chanson. Concept, tournage et coupe qui bâtissent un monde autour de l'artiste, de A à Z.",
      d2Expect: "Implication créative de la première référence à la livraison.",
      d3Title: "Concerts et live",
      d3Body:
        "Couverture multi-caméras qui capture la scène, la salle et les moments entre les deux. Des arénas aux salles intimistes.",
      d3Expect: "Une réalisation qui fait sentir qu'on y était.",
      d4Title: "Marque et commercial",
      d4Body:
        "Films de campagne et récits de marque avec le même soin cinématographique que le narratif. De la clarté, sans perdre l'âme.",
      d4Expect: "Un chemin créatif clair, du brief au film terminé.",
      startBrief: "Démarrer ce brief",
      approachKicker: "Approche",
      approachTitle: 'La caméra est un <em>langage</em>.',
      approachLede:
        "Deux projets ne devraient jamais se ressembler. Chaque histoire, artiste et brief trouve sa propre grammaire visuelle.",
      gLight: "La lumière",
      gComp: "La composition",
      gMove: "Le mouvement",
      gEdit: "Le montage",
      gCreates: "crée",
      gEmotion: "l'émotion",
      gIntention: "l'intention",
      gEnergy: "l'énergie",
      gRhythm: "le rythme",
      centralQ: "Que doit ressentir le public en voyant ceci?",
      howMoves: "Comment avance un projet",
      s1: "Comprendre",
      s1b: "L'histoire, le message, le public et l'identité derrière le projet.",
      s2: "Imaginer",
      s2b: "Une direction visuelle bâtie de références, de lumière, de composition, de mouvement et d'atmosphère.",
      s3: "Créer",
      s3b: "La préparation sur le plateau, avec de la place pour les moments que personne n'avait prévus.",
      s4: "Façonner",
      s4b: "Monter et étalonner, chaque plan fidèle à l'intention d'origine.",
      s5: "Faire ressentir",
      s5b: "La qualité technique n'est jamais le but. Le public doit ressentir quelque chose.",
      aboutKicker: "À propos",
      aboutTitle: 'Une vie derrière l\'objectif. Tout a commencé à <em>trois</em> ans.',
      ch1Meta: "01 · Origines · Algérie",
      ch1Title: "D'abord la photographie",
      ch1Body:
        "En grandissant en Algérie, la photographie a été sa première façon de voir: les gens, l'émotion, et la chance de garder un instant vivant au-delà de son temps. La photo lui a appris à observer. Le cinéma lui a appris à sentir, bouger et raconter.",
      ch2Meta: "02 · Tournant · Canada",
      ch2Title: "Recommencer",
      ch2Body:
        "Venir au Canada a voulu dire le risque, le sacrifice et reconstruire depuis zéro. Dans le doute, la caméra est restée constante. Un projet a mené au suivant, et une passion est devenue un métier.",
      ch3Meta: "03 · Aujourd'hui · Montréal",
      ch3Title: "Réalisateur et directeur photo",
      ch3Body:
        "Des récits visuels entre film, événements live, musique et marques, avec une règle: chaque plan a besoin d'intention, d'émotion et d'une raison d'exister.",
      kitKicker: "Rapport caméra",
      kitTitle: 'Le matériel derrière le <em>cadre</em>',
      kitCam: "Caméras",
      kitLens: "Objectifs",
      kitOptics: "Optiques selon le projet",
      kitAudio: "Audio",
      kitWireless: "Systèmes sans fil",
      kitZoom: "Enregistreurs Zoom",
      kitLight: "Éclairage",
      kitLed: "LED professionnel",
      kitProj: "Projecteurs",
      kitMulti: "Setups multi-sources",
      kitAerial: "Aérien",
      kitDrone: "Cinématographie par drone",
      kitPost: "Postproduction",
      roleWriterDir: "Scénariste, réalisateur",
      roleDirector: "Réalisateur",
      locDR: "République dominicaine",
      azarKicker: "Production",
      azarBody:
        "L'entité de production derrière les projets cinématographiques. La vision créative reste du côté de la réalisation et de la caméra.",
      contactKicker: "Contact",
      contactTitle: 'Faisons quelque chose que les gens <em>ressentent</em>.',
      contactLead:
        "Parlez à Ahmed de votre projet, de l'histoire derrière et de ce que vous voulez faire vivre à votre public.",
      vp1: "Un seul cinéaste, du concept à l'étalonnage",
      vp2: "Une réponse claire avec disponibilité et prochaines étapes",
      vp3: "Basé à Montréal, ouvert aux déplacements",
      labelEmail: "Courriel",
      labelPhone: "Téléphone",
      labelIg: "Instagram",
      labelBased: "Basé à",
      copyBtn: "Copier",
      fName: "Nom",
      fCo: "Entreprise / Agence",
      fCoPh: "Facultatif",
      fMail: "Courriel",
      fType: "Type de projet",
      fDate: "Date de tournage",
      fDatePh: "ex. mars 2027",
      fBudget: "Budget",
      fBudget0: "À discuter",
      fBudget1: "Moins de 2 500 $",
      fBudget2: "2 500 $ à 7 500 $",
      fBudget3: "7 500 $ à 20 000 $",
      fBudget4: "20 000 $+",
      fMsg: "Description du projet",
      fMsgPh: "L'histoire, l'artiste, le lieu, l'ambiance.",
      fFeel: "Que doit ressentir le public?",
      fFeelPh: "L'émotion ou l'expérience que vous voulez leur laisser.",
      fSubmit: "Rédiger mon brief",
      briefReady: "Votre brief · envoyer à ahmedmkrne@gmail.com",
      copyBrief: "Copier le brief",
      openEmail: "Ouvrir dans le courriel",
      typeShort: "Court métrage",
      typeMusic: "Clip",
      typeLive: "Concert / live",
      typeDoc: "Documentaire",
      typeBrand: "Contenu de marque",
      typeOther: "Autre",
      errName: "Ajoutez votre nom pour qu'Ahmed sache à qui répondre.",
      errMail: "Ajoutez un courriel auquel Ahmed peut répondre, comme vous@studio.com.",
      errMsg: "Décrivez le projet en une phrase ou deux.",
      errFeel: "Dites ce que vous voulez faire ressentir au public.",
      toastCopied: "Copié",
      toastBrief: "Brief prêt",
      toastSelect: "Sélectionné. Appuyez sur copier",
      footerRole: "Réalisateur et directeur photo · Montréal",
      footerLine: 'Faisons quelque chose que les gens <em>ressentent</em>.',
      footerConnect: "Liens",
      footerOnSite: "Sur ce site",
      footerWork: "Travail",
      footerFilms: "Films",
      footerOffer: "Offre",
      footerContact: "Contact",
      footerCopy: "© 2026 Ahmed Mokrane · Montréal",
      playerWatch: "Lecture",
      playerClose: "Fermer",
      playerHint: "Lecture sur cette page. Esc pour fermer.",
      caseClose: "Fermer",
      caseNext: "Projet suivant",
      caseWhere: "Lieu",
      caseRecognition: "Reconnaissance",
      take0l: "Plan 01",
      take0t: "Marquer le cadre.",
      take0s: "L'image trouve son ratio.",
      take1l: "Plan 02 · Live",
      take1t: "La salle tourne.",
      take1s: "La scène, la foule et l'espace entre les deux.",
      take2l: "Plan 03 · Fiction",
      take2t: "Entre Deux Mondes.",
      take2s: "Entre deux réalités à la fois.",
      take3l: "Plan 04 · Sonrié",
      take3t: "Un sourire perdu, puis retrouvé.",
      take3s: "Top 2 · Mix Film Festival Laval.",
      take4l: "Plan 05 · Musique",
      take4t: "Donner un visage à la chanson.",
      take4s: "Un monde visuel pour le titre.",
      take5l: "Plan 06",
      take5t: "Continuer plus bas.",
      take5s: "Travail choisi, films et le brief.",
    },
  };

  const META = {
    en: {},
    fr: {
      "entre-deux-mondes": { c: "Court métrage · Fiction", r: "Scénariste, réalisateur" },
      sonrie: { c: "Court métrage · Fiction", r: "Réalisateur", loc: "République dominicaine" },
      humanite: { c: "Long métrage · Fiction", r: "Monteur, étalonneur", loc: "Réalisé par Rida Amrani" },
      "music-videos": {
        t: "Clips",
        c: "Visuels d'artistes",
        r: "Direction créative, image, postproduction",
      },
      concerts: { c: "Concert · Production live", r: "Réalisateur, filmmaker" },
      "amine-radi": { c: "Tournée Montréal 2026 · Humour live", r: "Réalisateur, filmmaker" },
      "paul-mirabel": { c: "Stand-up · Aréna", r: "Filmmaker" },
      "dominican-republic": {
        t: "République dominicaine",
        c: "Documentaire · Voyage",
        r: "Réalisateur, filmmaker",
        loc: "République dominicaine",
      },
      directing: { t: "Réalisation", c: "Multi-caméras · Direction créative", r: "Réalisateur" },
      "post-production": { t: "Postproduction", c: "Montage · Couleur · Finishing", r: "Monteur, étalonneur" },
    },
  };

  const STORIES = {
    en: {},
    fr: {
      "entre-deux-mondes": [
        "Un étudiant immigrant à Montréal, qui construit une nouvelle vie tout en restant émotionnellement lié à celle qu'il a quittée.",
        "Par une approche intime et cinématographique, le film regarde l'immigration comme une expérience humaine et émotionnelle, pas seulement un changement d'adresse.",
      ],
      sonrie: [
        "Un clown a perdu la passion qui donnait un sens à son travail. Derrière un personnage bâti pour faire sourire les autres, quelqu'un cherche à retrouver le sien.",
        "Un film sur la solitude, la passion perdue et la quête de sens, et une étape importante dans le parcours narratif d'Ahmed. Sélection officielle et Top 2 au Mix Film Festival Laval.",
      ],
      humanite: [
        "Un long métrage réalisé par Rida Amrani. Ahmed l'a monté et étalonné, façonnant le ton visuel du film, de la salle de montage à l'image finale.",
      ],
      "music-videos": [
        "Les clips ont façonné le langage visuel d'Ahmed. Il combine direction créative, récit, image et postproduction pour bâtir un monde autour de chaque artiste.",
        "Travail pour Yacine Yafsah, Said Saidj et Inder Khedewala, avec des collaborations sur la scène nord-africaine et internationale. Plus d'un million de vues au total.",
      ],
      concerts: [
        "A travaillé avec Soolking, un artiste, sur deux soirées à L'Olympia de Montréal, plus le travail festivalier à RaÏFest. Le but n'est jamais seulement de filmer l'artiste, mais l'énergie entre la scène et la salle.",
        "Artistes, public, coulisses, réactions et moments spontanés, montés en une histoire qui fait sentir qu'on y était.",
      ],
      "amine-radi": [
        "A travaillé avec Amine Radi, un humoriste, sur la tournée montréalaise 2026: capturer l'énergie, la personnalité et le timing sur plusieurs spectacles.",
        "L'humour live demande des décisions rapides et une oreille pour le rythme, pour que le montage garde la spontanéité qui fait rire la salle.",
      ],
      "paul-mirabel": [
        "A travaillé avec Paul Mirabel, un humoriste de stand-up, sur des dates en aréna à Place Bell et au Centre Vidéotron: saisir la personnalité d'un interprète tout en gardant l'énergie de milliers de personnes vivant le même moment.",
        "D'autres projets d'humour live incluent Meriem Benoua (Montréal, 2026) et Camille Lorente (Montréal, 2025).",
      ],
      "dominican-republic": [
        "Une approche documentaire du film de voyage. Au lieu de cartes postales, l'accent est sur les gens, les lieux, la culture et les émotions rencontrées en chemin.",
        "Raconter un endroit à travers les personnes qui y vivent.",
      ],
      directing: [
        "De la fiction intime aux arénas multi-caméras, réaliser veut dire comprendre l'émotion et l'identité d'un projet et les traduire en images.",
      ],
      "post-production": [
        "Montage, correction couleur, étalonnage et finishing, le tout en interne. Une seule direction créative du premier plan à la livraison finale.",
      ],
    },
  };

  function currentLang() {
    const q = new URLSearchParams(location.search).get("lang");
    if (q === "fr" || q === "en") return q;
    const stored = localStorage.getItem("am-lang");
    if (stored === "fr" || stored === "en") return stored;
    return "en";
  }

  function t(key, lang) {
    const L = lang || currentLang();
    return (I18N[L] && I18N[L][key]) || (I18N.en && I18N.en[key]) || key;
  }

  function apply(lang) {
    const dict = I18N[lang] || I18N.en;
    document.documentElement.lang = lang === "fr" ? "fr" : "en";
    document.title = dict.docTitle;
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", dict.docDesc);
    const ogL = document.querySelector('meta[property="og:locale"]');
    if (ogL) ogL.setAttribute("content", lang === "fr" ? "fr_CA" : "en_CA");

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (dict[key] != null) el.textContent = dict[key];
    });
    document.querySelectorAll("[data-i18n-html]").forEach((el) => {
      const key = el.getAttribute("data-i18n-html");
      if (dict[key] != null) el.innerHTML = dict[key];
    });
    document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
      const key = el.getAttribute("data-i18n-placeholder");
      if (dict[key] != null) el.setAttribute("placeholder", dict[key]);
    });
    document.querySelectorAll("[data-i18n-aria]").forEach((el) => {
      const key = el.getAttribute("data-i18n-aria");
      if (dict[key] != null) el.setAttribute("aria-label", dict[key]);
    });

    document.querySelectorAll("[data-lang]").forEach((btn) => {
      btn.setAttribute("aria-pressed", btn.getAttribute("data-lang") === lang ? "true" : "false");
    });

    localStorage.setItem("am-lang", lang);
    document.dispatchEvent(new CustomEvent("am:lang", { detail: { lang } }));
  }

  function setLang(lang, { push = true } = {}) {
    const next = lang === "fr" ? "fr" : "en";
    apply(next);
    if (push) {
      const url = new URL(location.href);
      url.searchParams.set("lang", next);
      history.replaceState({}, "", url.pathname + url.search + url.hash);
    }
  }

  function bind() {
    document.querySelectorAll("[data-lang]").forEach((btn) => {
      btn.addEventListener("click", () => setLang(btn.getAttribute("data-lang")));
    });
    setLang(currentLang(), { push: true });
  }

  window.AM = {
    I18N,
    STORIES,
    META,
    t,
    currentLang,
    setLang,
    apply,
    bind,
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", bind);
  } else {
    bind();
  }
})();
