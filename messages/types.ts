export type Messages = {
  nav: {
    home: string;
    aboutAlmaty: string;
    news: string;
    symbol: string;
    brand: string;
    contact: string;
  };
  header: {
    logoHome: string;
    mainNav: string;
    mobileNav: string;
    openMenu: string;
    closeMenu: string;
  };
  footer: {
    brandWordmark: string;
    slogan: string;
    navTitle: string;
    contactTitle: string;
    socialTitle: string;
    phone: string;
    email: string;
    location: string;
    rightsReserved: string;
    socialFacebook: string;
    socialInstagram: string;
    socialYoutube: string;
    socialTiktok: string;
  };
  hero: {
    titleHighlight: string;
    titleRest: string;
    subtitle: string;
    hotlineTitle: string;
    hotlinePhone: string;
    hotlineHours: string;
    picksTitle: string;
    pickEventsCaption: string;
    pickMuseumsCaption: string;
    moreDetails: string;
    sliderNavLabel: string;
    slideButtonAria: string;
    slider: Array<{ title: string; description: string; alt: string }>;
  };
  peaks: {
    title: string;
    subtitle: string;
    seeAll: string;
    moreDetails: string;
    cards: [
      {
        imageLabel: string;
        title: string;
        description: string;
        alt: string;
      },
      {
        imageLabel: string;
        title: string;
        description: string;
        alt: string;
      },
      {
        imageLabel: string;
        title: string;
        description: string;
        alt: string;
      },
    ];
  };
  newsPreview: {
    title: string;
    subtitle: string;
    seeAll: string;
    items: [
      { date: string; headline: string; alt: string },
      { date: string; headline: string; alt: string },
      { date: string; headline: string; alt: string },
    ];
  };
  gallery: {
    title: string;
    hint: string;
    alts: [string, string, string, string];
  };
  cta: {
    title: string;
    description: string;
    button: string;
  };
  contact: {
    title: string;
    intro: string;
    responseTime: string;
    responseHint: string;
    extra: string;
    name: string;
    namePh: string;
    email: string;
    message: string;
    messagePh: string;
    submit: string;
    sent: string;
  };
  contactPage: {
    heroTitle: string;
    heroSubtitle: string;
    heroImageAlt: string;
    cardPhoneLabel: string;
    phones: string[];
    cardEmailLabel: string;
    email: string;
    cardAddressLabel: string;
    addressStreet: string;
    addressCity: string;
    addressMapUrl: string;
    cardHoursLabel: string;
    hours: string;
    socialSectionTitle: string;
    socialSectionSubtitle: string;
    socialCards: Array<{ name: string; handle: string }>;
    formTitle: string;
    formSubtitle: string;
    formNamePh: string;
    formEmailPh: string;
    formMessagePh: string;
    formSubmit: string;
    formSent: string;
    mapTitle: string;
    mapSubtitle: string;
    mapEmbedTitle: string;
    newcomerTitle: string;
    newcomerBlocks: Array<{
      title: string;
      body: string;
      slideAlts: string[];
    }>;
  };
  aboutAlmatyPage: {
    heroTitle: string;
    heroSubtitle: string;
    heroImageAlt: string;
    geography: { title: string; description: string };
    population: { title: string; description: string };
    history: { title: string; description: string };
    nature: { title: string; description: string };
    sliderPrev: string;
    sliderNext: string;
    sliderDotAria: string;
    storyBlocks: Array<{
      title: string;
      paragraphs: string[];
      slideAlts: string[];
    }>;
  };
  symbolPage: {
    heroTitle: string;
    heroSubtitle: string;
    heroImageAlt: string;
    sliderPrev: string;
    sliderNext: string;
    sliderDotAria: string;
    storyBlocks: Array<{
      title: string;
      paragraphs: string[];
      slideAlts: string[];
    }>;
    /** Блок «горный дух / снежный барс»: фото + текст */
    mountainSpiritTitle: string;
    mountainSpiritParagraphs: [string, string];
    mountainSpiritImageAlt: string;
  };
  brandPage: {
    heroTitle: string;
    heroSubtitle: string;
    heroImageAlt: string;
    identityTitle: string;
    identityBody: string;
    logoConceptTitle: string;
    logoConceptParagraphs: string[];
    logoLockupAlt: string;
    iconLabelMountains: string;
    iconLabelApple: string;
    iconLabelYurt: string;
    iconLabelAla: string;
    mascotTitle: string;
    mascotIconAlt: string;
    mascotIntro: string;
    mascotOutro: string;
    mascotImageAlts: [string, string, string, string, string, string];
    paletteTitle: string;
    colorHexLabel: string;
    colorRgbLabel: string;
    colors: Array<{
      name: string;
      hex: string;
      rgb: string;
      role: string;
    }>;
    colorPairingsTitle: string;
    colorPairings: Array<{
      title: string;
      subtitle: string;
      swatches: string[];
    }>;
    typographyOverviewTitle: string;
    typographyOverviewPrimaryBadge: string;
    typographyOverviewSecondaryBadge: string;
    typographyOverviewPrimaryDescription: string;
    typographyOverviewSecondaryDescription: string;
    typographyOverviewWeightsLabel: string;
    typographyOverviewWeights: string;
    typographyScaleTitle: string;
    typographyScaleRows: Array<{
      usage: string;
      fontName: string;
      size: string;
      sample: string;
      barColor: string;
      tone: "brand" | "body" | "caption";
      underline?: boolean;
    }>;
    iconographyTitle: string;
    iconographySubtitle: string;
    iconographyIcons: Array<{ label: string }>;
    iconGuidelinesTitle: string;
    iconGuidelines: Array<{ title: string; description: string }>;
    patternsTitle: string;
    patternsSubtitle: string;
    patternMountainLabel: string;
    patternAlaLabel: string;
    merchTitle: string;
    merchSubtitle: string;
    merchItems: Array<{ name: string; kind: string; imageSrc: string }>;
    mockupsTitle: string;
    mockupsSubtitle: string;
    mockupItems: Array<{ name: string; kind: string; imageSrc: string }>;
  };
  newsPage: {
    heroTitle: string;
    heroSubtitle: string;
    heroImageAlt: string;
    searchPlaceholder: string;
    searchAriaLabel: string;
    categoriesToolbarAria: string;
    featuredTitle: string;
    emptyFiltered: string;
    allNewsTitle: string;
    newsCountLabel: string;
    readMore: string;
    loadMore: string;
    newsletterTitle: string;
    newsletterSubtitle: string;
    newsletterPlaceholder: string;
    newsletterSubmit: string;
    newsletterEmailAria: string;
    newsletterImageAlt: string;
    categories: Array<{ id: string; label: string }>;
    articles: Array<{
      categoryId: string;
      date: string;
      dateIso: string;
      title: string;
      excerpt: string;
      imageAlt: string;
    }>;
  };
  subpages: {
    aboutAlmatyTitle: string;
    newsTitle: string;
    newsBody: string;
    symbolTitle: string;
    symbolBody: string;
    brandTitle: string;
    brandBody: string;
  };
  a11y: {
    contrastHint: string;
    contrastToggle: string;
    panelTitle: string;
    panelIntro: string;
    panelOpen: string;
    panelClose: string;
    skipToContent: string;
    fontSizeLabel: string;
    fontNormal: string;
    fontLarge: string;
    fontXLarge: string;
    spacingLabel: string;
    spacingNormal: string;
    spacingRelaxed: string;
    underlineLabel: string;
    underlineHint: string;
    enhancedFocusLabel: string;
    enhancedFocusHint: string;
    contrastLabel: string;
    resetLabel: string;
    prefsReset: string;
  };
};
