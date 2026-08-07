// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "publications",
          description: "Selected peer-reviewed publications by Haoran Chen on multimodal language models and visual representation.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "Curriculum vitae of Haoran Chen, a computer science master&#39;s student working on multimodal learning and computer vision.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "news-one-paper-accepted-to-emnlp-2024-main",
          title: '📄 One paper accepted to EMNLP 2024 Main.',
          description: "",
          section: "News",},{id: "news-one-paper-accepted-to-cvpr-2025",
          title: '🏆 One paper accepted to CVPR 2025.',
          description: "",
          section: "News",},{id: "news-one-paper-accepted-to-emnlp-2025-main-as-an-oral-presentation",
          title: '🎤 One paper accepted to EMNLP 2025 Main as an oral presentation.',
          description: "",
          section: "News",},{id: "news-one-paper-accepted-to-acm-mm-2026",
          title: '🎉 One paper accepted to ACM MM 2026.',
          description: "",
          section: "News",},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%68%61%6F%72%61%6E%63%68%72@%31%36%33.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/MuskAI", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=o6krwYkAAAAJ", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
