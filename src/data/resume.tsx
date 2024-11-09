import { Icons } from '@/components/icons';
import { HomeIcon, NotebookIcon } from 'lucide-react';

export const DATA = {
  name: 'Nestor Mamani',
  initials: 'NM',
  url: 'https://nestor.dmisfit.com',
  location: 'Lima, PE',
  locationLink: 'https://www.google.com/maps/place/Lima',
  description:
    'builder, former industrial engineer who found more enjoyment in shipping products',
  summary:
    'i started coding in 2020 while studying industrial engineering. by 2022, i launched usetreats.com, which led to a role at a YC startup. my tech journey began with a DIY 3D printer in 2019 that ended up frying the Arduino, but i had a lot of fun. later, i cloned the UI of Misfans, added NFT features, and landed my first job in product. now, i’m building in public with [usetreats (a financial chatbot)](https://usetreats.com) and a [gym-geek clothing brand.](https://www.instagram.com/misfit.pe/)',
  avatarUrl: '/me.png',
  skills: [
    'React',
    'Next.js',
    'Typescript',
    'Node.js',
    'Python',
    'Postgres',
    'Nest.js',
    'React Native',
    'Langchain',
    'AWS EC2-S3-Lambda-SES',
  ],
  navbar: [
    { href: '/', icon: HomeIcon, label: 'Home' },
    { href: '/blog', icon: NotebookIcon, label: 'Blog' },
  ],
  contact: {
    email: 'hello@example.com',
    tel: '+123456789',
    social: {
      GitHub: {
        name: 'GitHub',
        url: 'https://github.com/nestorxyz',
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: 'LinkedIn',
        url: 'https://linkedin.com/in/nestorxyz',
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: 'X',
        url: 'https://twitter.com/nestorxyz',
        icon: Icons.x,

        navbar: true,
      },
      Instagram: {
        name: 'Instagram',
        url: 'https://instagram.com/nestorxyz',
        icon: Icons.instagram,
        navbar: true,
      },
      email: {
        name: 'Send Email',
        url: '#',
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: 'Holacasa',
      href: 'https://holacasa.mx',
      badges: [],
      location: 'Remote - Mexico',
      title: 'Software Engineer',
      logoUrl: '/holacasamx.jpeg',
      start: 'Nov 2023',
      end: 'Present',
      description:
        'I developed modular WhatsApp flows to replace web-based onboarding forms, making the pre-qualification process more accessible and streamlined. Additionally, I led the creation of an AI-driven WhatsApp chatbot that guides clients through the mortgage process with clear next steps. I also redesigned the onboarding and dashboard UI/UX twice, integrating Mixpanel to track and analyze user interactions at every stage.',
    },
    {
      company: 'Firmaway',
      badges: [],
      href: 'https://firmaway.us',
      location: 'Remote - Argentina',
      title: 'Senior Web Developer',
      logoUrl: '/firmaway.jpeg',
      start: 'Apr 2023',
      end: 'Oct 2023',
      description:
        'I launched a web review MVP in 3 days, reducing costs per page from $3 to under $0.10 and cutting review time from 4 days to 1. I unified 13 company data sources into an AWS-hosted datalake and optimized Stripe webhook response time from 10.62 to 8.52 seconds. Additionally, I integrated Quickbooks with Stripe to automate tax handling, database saving, and invoice creation, streamlining processes for the customer experience team.',
    },
    {
      company: 'MisFans',
      href: 'https://mis.fans',
      badges: [],
      location: 'Remote - Mexico',
      title: 'Frontend Engineer',
      logoUrl: '/mis_fans.jpeg',
      start: 'Mar 2022',
      end: 'Jan 2023',
      description:
        'As a frontend engineer at MisFans, a 500 Latam-backed Mexican startup, I focused on ensuring the product worked seamlessly and felt intuitive. I led the development of reusable components with React.js and TailwindCSS for consistent UX across the platform. Additionally, I built web3 features like Solana NFT carousels and NFT-gated pages, improved conversion rates by 16% through signup flow refactoring, and developed a recovery system for abandoned Stripe checkouts using webhooks.',
    },
  ],
  education: [
    {
      school: 'Buildspace',
      href: 'https://buildspace.so',
      degree: 'builder on s2, s5',
      logoUrl: '/buildspace.jpg',
      start: '2021',
      end: '2024',
    },
    {
      school: 'Platzi',
      href: 'https://platzi.com',
      degree: 'web development, data science',
      logoUrl: '/platzi_inc.jpeg',
      start: '2020',
      end: 'present',
    },
    {
      school: 'National Major University of San Marcos',
      href: 'https://unmsm.edu.pe',
      degree: "Bachelor's Degree of Industrial Engineering",
      logoUrl: '/unmsm.jpeg',
      start: '2017',
      end: '2021',
    },
  ],
  projects: [
    {
      title: 'Treats',
      href: 'https://www.usetreats.com',
      dates: 'Sep 2024 - Present',
      active: true,
      description:
        'Treats is an AI-powered finance assistant on WhatsApp that helps you track expenses, income, and savings. It uses AI to categorize transactions and provide personalized insights, making budgeting and financial management easy and automated.',
      technologies: [
        'Next.js',
        'Typescript',
        'PostgreSQL',
        'Prisma',
        'TailwindCSS',
        'OpenAI',
        'Shadcn UI',
        'WhatsApp API',
      ],
      links: [
        {
          type: 'Website',
          href: 'https://www.usetreats.com',
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: 'WhatsApp Chatbot',
          href: 'http://wa.me/+51977504342',
          icon: <Icons.whatsapp className="size-3" />,
        },
      ],
      image: '',
      video:
        'https://pub-ec8befc8b1f943689bc95c09db6dac80.r2.dev/treats%20(1080p).mp4',
    },
    {
      title: 'Misfit',
      href: 'https://www.instagram.com/misfit.pe/',
      dates: 'Oct 2024 - Present',
      active: true,
      description:
        'GymGeek clothing brand that combines fitness and geek culture. We design and sell gym wear that features your favorite superheroes, anime characters, and video game icons.',
      technologies: [
        'Capcut',
        'Photoshop',
        'Illustrator',
        'Instagram',
        'TikTok',
      ],
      links: [
        {
          type: 'Instagram',
          href: 'https://www.instagram.com/misfit.pe/',
          icon: <Icons.instagram className="size-3" />,
        },
        {
          type: 'Tiktok',
          href: 'https://www.tiktok.com/@misfit.pe',
          icon: <Icons.tiktok className="size-3" />,
        },
      ],
      image: '',
      video:
        'https://pub-ec8befc8b1f943689bc95c09db6dac80.r2.dev/misfit%20(720p).mp4',
    },
    {
      title: 'Agotao',
      href: 'https://agotao-nextjs.vercel.app',
      dates: 'Dec 2022 - Feb 2023',
      active: true,
      description:
        'Agotao was a set of APIs and a payment gateway designed to be integrated in minutes. It allowed developers to accept payments in their applications with a simple API call.',
      technologies: [
        'Next.js',
        'Typescript',
        'PostgreSQL',
        'Prisma',
        'TailwindCSS',
        'Turborepo',
        'MonoRepo',
        'TRPC',
      ],
      links: [
        {
          type: 'Website',
          href: 'https://agotao-nextjs.vercel.app',
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: 'Source',
          href: 'https://github.com/nestorxyz/agotao/tree/main',
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: '',
      video:
        'https://pub-ec8befc8b1f943689bc95c09db6dac80.r2.dev/agotao%20(360p).mp4',
    },
    {
      title: 'Konto',
      href: 'https://konto.vercel.app',
      dates: 'June 2022 - Sep 2022',
      active: true,
      description:
        'Web application that facilitates group purchasing of streaming subscriptions by connecting users and automating payments.',
      technologies: [
        'Next.js',
        'Typescript',
        'PostgreSQL',
        'Prisma',
        'TailwindCSS',
        'Vercel',
        'NestorBot',
      ],
      links: [
        {
          type: 'Website',
          href: 'https://automatic.chat',
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: 'Source',
          href: 'https://github.com/nestorxyz/konto',
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: '',
      video:
        'https://pub-ec8befc8b1f943689bc95c09db6dac80.r2.dev/konto%20(360p).mp4',
    },
  ],
  hackathons: [
    {
      title: 'Hack Western 5',
      dates: 'November 23rd - 25th, 2018',
      location: 'London, Ontario',
      description:
        'Developed a mobile application which delivered bedtime stories to children using augmented reality.',
      image:
        'https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-western.png',
      mlh: 'https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg',
      links: [],
    },
    {
      title: 'Hack The North',
      dates: 'September 14th - 16th, 2018',
      location: 'Waterloo, Ontario',
      description:
        'Developed a mobile application which delivers university campus wide events in real time to all students.',
      image:
        'https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png',
      mlh: 'https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg',
      links: [],
    },
    {
      title: 'FirstNet Public Safety Hackathon',
      dates: 'March 23rd - 24th, 2018',
      location: 'San Francisco, California',
      description:
        'Developed a mobile application which communcicates a victims medical data from inside an ambulance to doctors at hospital.',
      icon: 'public',
      image:
        'https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/firstnet.png',
      links: [],
    },
    {
      title: 'DeveloperWeek Hackathon',
      dates: 'February 3rd - 4th, 2018',
      location: 'San Francisco, California',
      description:
        'Developed a web application which aggregates social media data regarding cryptocurrencies and predicts future prices.',
      image:
        'https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/developer-week.jpg',
      links: [
        {
          title: 'Github',
          icon: <Icons.github className="h-4 w-4" />,
          href: 'https://github.com/cryptotrends/cryptotrends',
        },
      ],
    },
    {
      title: 'HackDavis',
      dates: 'January 20th - 21st, 2018',
      location: 'Davis, California',
      description:
        'Developed a mobile application which allocates a daily carbon emission allowance to users to move towards a sustainable environment.',
      image:
        'https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-davis.png',
      win: 'Best Data Hack',
      mlh: 'https://s3.amazonaws.com/logged-assets/trust-badge/2018/white.svg',
      links: [
        {
          title: 'Devpost',
          icon: <Icons.globe className="h-4 w-4" />,
          href: 'https://devpost.com/software/my6footprint',
        },
        {
          title: 'ML',
          icon: <Icons.github className="h-4 w-4" />,
          href: 'https://github.com/Wallet6/my6footprint-machine-learning',
        },
        {
          title: 'iOS',
          icon: <Icons.github className="h-4 w-4" />,
          href: 'https://github.com/Wallet6/CarbonWallet',
        },
        {
          title: 'Server',
          icon: <Icons.github className="h-4 w-4" />,
          href: 'https://github.com/Wallet6/wallet6-server',
        },
      ],
    },
    {
      title: 'ETH Waterloo',
      dates: 'October 13th - 15th, 2017',
      location: 'Waterloo, Ontario',
      description:
        'Developed a blockchain application for doctors and pharmacists to perform trustless transactions and prevent overdosage in patients.',
      image:
        'https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/eth-waterloo.png',
      links: [
        {
          title: 'Organization',
          icon: <Icons.github className="h-4 w-4" />,
          href: 'https://github.com/ethdocnet',
        },
      ],
    },
    {
      title: 'Hack The North',
      dates: 'September 15th - 17th, 2017',
      location: 'Waterloo, Ontario',
      description:
        'Developed a virtual reality application allowing users to see themselves in third person.',
      image:
        'https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png',
      mlh: 'https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg',
      links: [
        {
          title: 'Streamer Source',
          icon: <Icons.github className="h-4 w-4" />,
          href: 'https://github.com/justinmichaud/htn2017',
        },
        {
          title: 'Client Source',
          icon: <Icons.github className="h-4 w-4" />,
          href: 'https://github.com/dillionverma/RTSPClient',
        },
      ],
    },
    {
      title: 'Hack The 6ix',
      dates: 'August 26th - 27th, 2017',
      location: 'Toronto, Ontario',
      description:
        'Developed an open platform for people shipping items to same place to combine shipping costs and save money.',
      image:
        'https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-6ix.jpg',
      mlh: 'https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg',
      links: [
        {
          title: 'Source',
          icon: <Icons.github className="h-4 w-4" />,
          href: 'https://github.com/ShareShip/ShareShip',
        },
        {
          title: 'Site',
          icon: <Icons.globe className="h-4 w-4" />,
          href: 'https://share-ship.herokuapp.com/',
        },
      ],
    },
    {
      title: 'Stupid Hack Toronto',
      dates: 'July 23rd, 2017',
      location: 'Toronto, Ontario',
      description:
        'Developed a chrome extension which tracks which facebook profiles you have visited and immediately texts your girlfriend if you visited another girls page.',
      image:
        'https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/stupid-hackathon.png',
      links: [
        {
          title: 'Source',
          icon: <Icons.github className="h-4 w-4" />,
          href: 'https://github.com/nsagirlfriend/nsagirlfriend',
        },
      ],
    },
    {
      title: 'Global AI Hackathon - Toronto',
      dates: 'June 23rd - 25th, 2017',
      location: 'Toronto, Ontario',
      description:
        'Developed a python library which can be imported to any python game and change difficulty of the game based on real time emotion of player. Uses OpenCV and webcam for facial recognition, and a custom Machine Learning Model trained on a [Kaggle Emotion Dataset](https://www.kaggle.com/c/challenges-in-representation-learning-facial-expression-recognition-challenge/leaderboard) using [Tensorflow](https://www.tensorflow.org/Tensorflow) and [Keras](https://keras.io/). This project recieved 1st place prize at the Global AI Hackathon - Toronto and was also invited to demo at [NextAI Canada](https://www.nextcanada.com/next-ai).',
      image:
        'https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/global-ai-hackathon.jpg',
      win: '1st Place Winner',
      links: [
        {
          title: 'Article',
          icon: <Icons.globe className="h-4 w-4" />,
          href: 'https://syncedreview.com/2017/06/26/global-ai-hackathon-in-toronto/',
        },
        {
          title: 'Source',
          icon: <Icons.github className="h-4 w-4" />,
          href: 'https://github.com/TinySamosas/',
        },
      ],
    },
    {
      title: 'McGill AI for Social Innovation Hackathon',
      dates: 'June 17th - 18th, 2017',
      location: 'Montreal, Quebec',
      description:
        'Developed realtime facial microexpression analyzer using AI',
      image:
        'https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/ai-for-social-good.jpg',
      links: [],
    },
    {
      title: 'Open Source Circular Economy Days Hackathon',
      dates: 'June 10th, 2017',
      location: 'Toronto, Ontario',
      description:
        "Developed a custom admin interface for food waste startup <a href='http://genecis.co/'>Genecis</a> to manage their data and provide analytics.",
      image:
        'https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/open-source-circular-economy-days.jpg',
      win: '1st Place Winner',
      links: [
        {
          title: 'Source',
          icon: <Icons.github className="h-4 w-4" />,
          href: 'https://github.com/dillionverma/genecis',
        },
      ],
    },
    {
      title: "Make School's Student App Competition 2017",
      dates: 'May 19th - 21st, 2017',
      location: 'International',
      description: 'Improved PocketDoc and submitted to online competition',
      image:
        'https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/make-school-hackathon.png',
      win: 'Top 10 Finalist | Honourable Mention',
      links: [
        {
          title: 'Medium Article',
          icon: <Icons.globe className="h-4 w-4" />,
          href: 'https://medium.com/make-school/the-winners-of-make-schools-student-app-competition-2017-a6b0e72f190a',
        },
        {
          title: 'Devpost',
          icon: <Icons.globe className="h-4 w-4" />,
          href: 'https://devpost.com/software/pocketdoc-react-native',
        },
        {
          title: 'YouTube',
          icon: <Icons.youtube className="h-4 w-4" />,
          href: 'https://www.youtube.com/watch?v=XwFdn5Rmx68',
        },
        {
          title: 'Source',
          icon: <Icons.github className="h-4 w-4" />,
          href: 'https://github.com/dillionverma/pocketdoc-react-native',
        },
      ],
    },
    {
      title: 'HackMining',
      dates: 'May 12th - 14th, 2017',
      location: 'Toronto, Ontario',
      description: 'Developed neural network to optimize a mining process',
      image:
        'https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-mining.png',
      links: [],
    },
    {
      title: 'Waterloo Equithon',
      dates: 'May 5th - 7th, 2017',
      location: 'Waterloo, Ontario',
      description:
        'Developed Pocketdoc, an app in which you take a picture of a physical wound, and the app returns common solutions or cures to the injuries or diseases.',
      image:
        'https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/waterloo-equithon.png',
      links: [
        {
          title: 'Devpost',
          icon: <Icons.globe className="h-4 w-4" />,
          href: 'https://devpost.com/software/pocketdoc-react-native',
        },
        {
          title: 'YouTube',
          icon: <Icons.youtube className="h-4 w-4" />,
          href: 'https://www.youtube.com/watch?v=XwFdn5Rmx68',
        },
        {
          title: 'Source',
          icon: <Icons.github className="h-4 w-4" />,
          href: 'https://github.com/dillionverma/pocketdoc-react-native',
        },
      ],
    },
    {
      title: 'SpaceApps Waterloo',
      dates: 'April 28th - 30th, 2017',
      location: 'Waterloo, Ontario',
      description:
        'Developed Earthwatch, a web application which allows users in a plane to virtually see important points of interest about the world below them. They can even choose to fly away from their route and then fly back if they choose. Special thanks to CesiumJS for providing open source world and plane models.',
      image:
        'https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/space-apps.png',
      links: [
        {
          title: 'Source',
          icon: <Icons.github className="h-4 w-4" />,
          href: 'https://github.com/dillionverma/earthwatch',
        },
      ],
    },
    {
      title: 'MHacks 9',
      dates: 'March 24th - 26th, 2017',
      location: 'Ann Arbor, Michigan',
      description:
        'Developed Super Graphic Air Traffic, a VR website made to introduce people to the world of air traffic controlling. This project was built completely using THREE.js as well as a node backend server.',
      image:
        'https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/mhacks-9.png',
      mlh: 'https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg',
      links: [
        {
          title: 'Source',
          icon: <Icons.github className="h-4 w-4" />,
          href: 'https://github.com/dillionverma/threejs-planes',
        },
      ],
    },
    {
      title: 'StartHacks I',
      dates: 'March 4th - 5th, 2017',
      location: 'Waterloo, Ontario',
      description:
        'Developed at StartHacks 2017, Recipic is a mobile app which allows you to take pictures of ingredients around your house, and it will recognize those ingredients using ClarifAI image recognition API and return possible recipes to make. Recipic recieved 1st place at the hackathon for best pitch and hack.',
      image:
        'https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/starthacks.png',
      win: '1st Place Winner',
      mlh: 'https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg',
      links: [
        {
          title: 'Source (Mobile)',
          icon: <Icons.github className="h-4 w-4" />,
          href: 'https://github.com/mattBlackDesign/recipic-ionic',
        },
        {
          title: 'Source (Server)',
          icon: <Icons.github className="h-4 w-4" />,
          href: 'https://github.com/mattBlackDesign/recipic-rails',
        },
      ],
    },
    {
      title: 'QHacks II',
      dates: 'February 3rd - 5th, 2017',
      location: 'Kingston, Ontario',
      description:
        'Developed a mobile game which enables city-wide manhunt with random lobbies',
      image:
        'https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/qhacks.png',
      mlh: 'https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg',
      links: [
        {
          title: 'Source (Mobile)',
          icon: <Icons.github className="h-4 w-4" />,
          href: 'https://github.com/dillionverma/human-huntr-react-native',
        },
        {
          title: 'Source (API)',
          icon: <Icons.github className="h-4 w-4" />,
          href: 'https://github.com/mattBlackDesign/human-huntr-rails',
        },
      ],
    },
    {
      title: 'Terrible Hacks V',
      dates: 'November 26th, 2016',
      location: 'Waterloo, Ontario',
      description:
        'Developed a mock of Windows 11 with interesting notifications and functionality',
      image:
        'https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/terrible-hacks-v.png',
      links: [
        {
          title: 'Source',
          icon: <Icons.github className="h-4 w-4" />,
          href: 'https://github.com/justinmichaud/TerribleHacks2016-Windows11',
        },
      ],
    },
    {
      title: 'Portal Hackathon',
      dates: 'October 29, 2016',
      location: 'Kingston, Ontario',
      description:
        "Developed an internal widget for uploading assignments using Waterloo's portal app",
      image:
        'https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/portal-hackathon.png',
      links: [
        {
          title: 'Source',
          icon: <Icons.github className="h-4 w-4" />,
          href: 'https://github.com/UWPortalSDK/crowmark',
        },
      ],
    },
  ],
} as const;
