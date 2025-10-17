import { forage, shopify, starbucks, tesla , socialsummer1 } from "../assets/images";
import {
    avalanche,
    Harvest,
    ReactChat,
    student,
    ecoom,
    postit,
    endurify,
    spamdetection,
    car,
    contact,
    css,
    estate,
    tensorflow,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript,
    django,
    numpy,
    azure,
    AWS,
    VS_code,
    jupyter,
    pycharm,
    apachespark,
    huggingFace,
    Opencv,
    StackOverflow,
    GoogleCloud,
} from "../assets/icons";

export const getSkills = (t) => [
    {
        imageUrl: StackOverflow,
        name: t('skills.names.stackoverflow'),
        type: t('skills.categories.tool'),
    },
    {
        imageUrl: Opencv,
        name: t('skills.names.opencv'),
        type: t('skills.categories.tool'),
    },
    {
        imageUrl: pycharm,
        name: t('skills.names.pycharm'),
        type: t('skills.categories.tool'),
    },
    {
        imageUrl: jupyter,
        name: t('skills.names.jupyter'),
        type: t('skills.categories.tool'),
    },
    {
        imageUrl: VS_code,
        name: t('skills.names.vs_code'),
        type: t('skills.categories.tool'),
    },
    {
        imageUrl: numpy,
        name: t('skills.names.numpy'),
        type: t('skills.categories.backend'),
    },
    {
        imageUrl: css,
        name: t('skills.names.css'),
        type: t('skills.categories.frontend'),
    },
    {
        imageUrl: tensorflow,
        name: t('skills.names.tensorflow'),
        type: t('skills.categories.backend'),
    },
    {
        imageUrl: git,
        name: t('skills.names.git'),
        type: t('skills.categories.versionControl'),
    },
    {
        imageUrl: github,
        name: t('skills.names.github'),
        type: t('skills.categories.versionControl'),
    },
    {
        imageUrl: html,
        name: t('skills.names.html'),
        type: t('skills.categories.frontend'),
    },
    {
        imageUrl: javascript,
        name: t('skills.names.javascript'),
        type: t('skills.categories.frontend'),
    },
    {
        imageUrl: mui,
        name: t('skills.names.mui'),
        type: t('skills.categories.frontend'),
    },
    {
        imageUrl: nodejs,
        name: t('skills.names.nodejs'),
        type: t('skills.categories.backend'),
    },
    {
        imageUrl: react,
        name: t('skills.names.react'),
        type: t('skills.categories.frontend'),
    },
    {
        imageUrl: redux,
        name: t('skills.names.redux'),
        type: t('skills.categories.stateManagement'),
    },
    {
        imageUrl: sass,
        name: t('skills.names.sass'),
        type: t('skills.categories.frontend'),
    },
    {
        imageUrl: tailwindcss,
        name: t('skills.names.tailwindcss'),
        type: t('skills.categories.frontend'),
    },
];

export const getExperiences = (t) => [
    {
        title: t('experiences.wordpress.title'),
        company_name: t('experiences.wordpress.company'),
        icon: socialsummer1,
        iconBg: "#fbc3bc",
        date: "Janvier 2025 - Mai 2025",
        points: t('experiences.wordpress.points', { returnObjects: true }),
    },
    {
        title: t('experiences.fullstack.title'),
        company_name: t('experiences.fullstack.company'),
        icon: starbucks,
        iconBg: "#accbe1",
        date: "Octobre 2024 - Janvier 2025",
        points: t('experiences.fullstack.points', { returnObjects: true }),
    },
    {
        title: t('experiences.python.title'),
        company_name: t('experiences.python.company'),
        icon: forage,
        iconBg: "#b7e4c7",
        date: "Continue",
        points: t('experiences.python.points', { returnObjects: true }),
    },
];

export const socialLinks = [
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/Thierry2282',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/thierry-juliot/',
    }
];

export const getProjects = (t) => [
    {
        iconUrl: spamdetection,
        theme: 'btn-back-blue',
        name: t('projects.miasa.name'),
        description: t('projects.miasa.description', { returnObjects: true }),
        github: 'https://github.com/Thierry2282/offre-emploi', 
    },
    {
        iconUrl: endurify,
        theme: 'btn-back-red',
        name: t('projects.marketing.name'),
        description: t('projects.marketing.description', { returnObjects: true }),
        github: 'https://github.com/Thierry2282/marketing-analysis', 
    },
    {
        iconUrl: postit,
        theme: 'btn-back-green',
        name: t('projects.riskvision.name'),
        description: t('projects.riskvision.description', { returnObjects: true }),
        github: 'https://github.com/Thierry2282/riskvision.git', 
    },
    {
        iconUrl: endurify,
        theme: 'btn-back-blue',
        name: t('projects.portfolio.name'),
        description: t('projects.portfolio.description', { returnObjects: true }),
        github: 'https://github.com/Thierry2282/portfolio', 
    },
    {
        iconUrl: endurify,
        theme: 'btn-back-red',
        name: t('projects.miam.name'),
        description: t('projects.miam.description', { returnObjects: true }),
        github: 'https://github.com/Thierry2282/miam', 
    },
];