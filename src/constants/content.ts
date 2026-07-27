export const rotatingWords = ["should feel.", "makes sense.", "builds trust.", "connects us."];

export const comingSoonPages: Record<string, string> = {
  '/download-app': 'Download App',
  '/discover': 'Discover',
  '/live-selling': 'Live Selling',
  '/trust-safety': 'Trust & Safety',
  '/careers': 'Careers',
};

export const visionContent = {
  hero: {
    title: "Not just products. People.",
    subtitle: "We're humanizing the digital marketplace by bringing back the soul of traditional commerce."
  },
  sections: [
    {
      title: "The Human Connection",
      description: "Traditional e-commerce has become a sterile, transactional experience. We're rebuilding it from the ground up to focus on the relationships between creators, curators, and customers. On Markt, you don't just buy a product; you discover the story and the person behind it.",
      image: "vision-connection" // Placeholder for logic
    },
    {
      title: "Trust through Interaction",
      description: "We believe trust isn't built through anonymous reviews, but through direct engagement. Our platform facilitates real-time conversations, live demonstrations, and transparent social feeds that allow you to verify quality and authenticity before you ever hit 'Buy'.",
      image: "vision-trust"
    },
    {
      title: "Empowering Creators",
      description: "Markt provides a stage for the next generation of entrepreneurs. Whether you're a boutique maker or a curated reseller, our tools are designed to amplify your personality, not just your inventory. We give you the control to build a brand, not just a storefront.",
      image: "vision-creators"
    }
  ],
  values: [
    {
      title: "Transparency",
      desc: "No hidden fees, no obscured interactions. Everything is out in the open."
    },
    {
      title: "Control",
      desc: "Sellers own their audience; buyers own their experience."
    },
    {
      title: "Innovation",
      desc: "Pushing the boundaries of what's possible in real-time social selling."
    }
  ]
};

export const howItWorksContent = [
  {
    num: "01",
    title: "Discover through context.",
    desc: "Scroll a dynamic feed of trusted sellers and creators. Instead of static galleries, see products in action, styled, and used by actual people in their daily lives. Follow your favorite curators to build a personalized market that evolves with your tastes.",
    features: ["Visual-first discovery", "Contextual storytelling", "Follow-based feed"]
  },
  {
    num: "02",
    title: "Connect and converse.",
    desc: "Engagement on Markt is real-time. Jump into a live selling session to see products demonstrated live, ask questions in the chat, and get instant answers. Message sellers directly to discuss details, or participate in community discussions around the trends you love.",
    features: ["Live selling sessions", "Direct seller messaging", "Real-time Q&A"]
  },
  {
    num: "03",
    title: "Buy with zero friction.",
    desc: "Our native checkout experience is designed for speed and security. With one-tap payments and integrated buyer protection, you can complete your purchase without ever leaving the conversation. Track your delivery and manage returns all within the same seamless interface.",
    features: ["Secure native checkout", "Buyer protection escrow", "Real-time tracking"]
  }
];

export const userJourneyContent = [
  {
    title: "Join the Community",
    step: "01",
    desc: "Create your profile in seconds. Tell us what you love, and we'll curate a feed of sellers, creators, and products tailored to your taste.",
    icon: "user-plus"
  },
  {
    title: "Discover through Context",
    step: "02",
    desc: "Browse a dynamic social feed where products are shown in real-world settings. Follow your favorite curators and sellers to stay updated.",
    icon: "search"
  },
  {
    title: "Engage in Real-Time",
    step: "03",
    desc: "Jump into live selling sessions, ask questions in the chat, and see products demonstrated live. Interaction is at the heart of Markt.",
    icon: "message-circle"
  },
  {
    title: "Secure One-Tap Purchase",
    step: "04",
    desc: "Buy with confidence using our integrated checkout. Your funds are held securely in escrow until you confirm delivery.",
    icon: "shopping-bag"
  },
  {
    title: "Track & Review",
    step: "05",
    desc: "Monitor your delivery in real-time. Once it arrives, share your experience with the community to help others shop with trust.",
    icon: "truck"
  }
];

export const faqCategories = [
  {
    id: "general",
    name: "General",
    items: [
      {
        question: "What makes Markt different from other marketplaces?",
        answer: "Unlike traditional platforms that focus solely on the transaction, Markt is built on social interaction. We prioritize the relationship between buyers and sellers, using live video, social feeds, and direct messaging to make online shopping feel more human and trustworthy."
      },
      {
        question: "Is Markt free to use?",
        answer: "Yes, downloading the app and browsing is completely free for everyone. We only charge a small transaction fee when a sale is successfully completed."
      },
      {
        question: "Where is Markt available?",
        answer: "Currently, we are focusing on our primary launch markets. You can check app store availability in your region or sign up for our waitlist to be notified when we expand to your area."
      }
    ]
  },
  {
    id: "buying",
    name: "For Buyers",
    items: [
      {
        question: "How do I know I can trust a seller?",
        answer: "Trust is central to Markt. You can view a seller's full history, see their interactions in live sessions, and see who else follows them. Additionally, our buyer protection ensures your funds are held securely until the item is delivered as described."
      },
      {
        question: "What payment methods do you accept?",
        answer: "We support all major credit cards, Apple Pay, and Google Pay through our secure, native checkout system."
      },
      {
        question: "Can I return an item?",
        answer: "Yes. Every seller on Markt follows our standardized return policy, though some individual storefronts may offer even more flexible terms. You can initiate a return directly through the 'Orders' section of the app."
      }
    ]
  },
  {
    id: "selling",
    name: "For Sellers",
    items: [
      {
        question: "How do I start selling on Markt?",
        answer: "Simply download the app, create a profile, and apply for a seller account. Once verified, you can start listing products and hosting live sessions immediately."
      },
      {
        question: "What is live selling and how does it work?",
        answer: "Live selling allows you to broadcast video to your followers in real-time. You can showcase products, answer questions live, and viewers can purchase items instantly through an on-screen checkout button without leaving the stream."
      },
      {
        question: "What are the selling fees?",
        answer: "We keep our fee structure simple: a flat percentage per successful transaction. There are no monthly subscription fees or listing costs to get started."
      }
    ]
  },
  {
    id: "security",
    name: "Security & Trust",
    items: [
      {
        question: "How is my data protected?",
        answer: "We use industry-standard encryption for all data and never share your personal information with third parties without your explicit consent."
      },
      {
        question: "What happens if my order doesn't arrive?",
        answer: "Our 'Markt Guarantee' covers all purchases. If an item isn't shipped or doesn't arrive, we provide a full refund through our integrated dispute resolution system."
      },
      {
        question: "How do you verify sellers?",
        answer: "All sellers undergo a verification process that includes identity checks and, for certain categories, business documentation to ensure a safe environment for all users."
      }
    ]
  }
];

// Keep the old flat structure for backward compatibility if needed, 
// but we'll transition components to use the categorized one.
export const faqItems = faqCategories.flatMap(cat => cat.items);
