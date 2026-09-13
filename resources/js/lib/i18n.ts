import { ref, computed } from 'vue';

export type Locale = 'id' | 'en';

export const currentLocale = ref<Locale>('en');

export const translations = {
    id: {
        nav: {
            about: 'Tentang',
            projects: 'Proyek',
            skills: 'Keahlian',
            contact: 'Kontak',
            downloadCv: 'Download CV',
            language: 'Bahasa',
        },
        hero: {
            badge: 'Full-Stack Developer',
            title1: 'Membangun sistem digital',
            title2: 'yang andal.',
            description:
                'Saya membangun aplikasi web yang andal dan merancang jaringan yang stabil. Dari frontend hingga backend sampai infrastruktur jaringan — saya menjembatani pengembangan dan networking.',
            viewWork: 'Lihat Proyek',
            downloadCv: 'Download CV',
            scroll: 'Gulir',
        },
        about: {
            sectionNum: '01',
            sectionTitle: 'Tentang',
            statement1: 'Saya menulis kode yang',
            statementWorks: 'bekerja',
            statement2: 'lalu memastikan',
            statementNetwork: 'jaringannya tetap terhubung.',
            p1: 'Saya seorang full-stack developer yang juga mendalami network engineering. Di backend saya membangun aplikasi dengan PHP dan Laravel, di frontend dengan Vue dan Tailwind — dan di sisi jaringan saya merancang topologi, routing, serta mengelola perangkat jaringan.',
            p2: 'Pekerjaan saya mencakup pengembangan full-stack, pengelolaan server, konfigurasi routing dan switching, hingga otomatisasi dengan script. Saya percaya aplikasi yang baik berjalan di atas jaringan yang terkelola dengan baik.',
            basedIn: 'Lokasi',
            location: 'Indonesia',
            languages: 'Bahasa',
            languagesList: 'ID, EN',
            education: 'Pendidikan',
            major: 'Informatika',
            availability: 'Ketersediaan',
            status: 'Siap bekerja',
        },
        projects: {
            sectionNum: '02',
            sectionTitle: 'Proyek',
            title: 'Proyek Pilihan',
            description:
                'Kumpulan proyek pilihan yang mencakup pengembangan web, infrastruktur jaringan, dan administrasi sistem.',
            visit: 'Kunjungi',
            details: 'Detail',
            preview: 'Pratinjau',
            noScreenshot: 'belum ada screenshot',
            empty: 'Belum ada proyek yang dipublikasikan.',
            modalAbout: 'Tentang Proyek',
            modalTech: 'Teknologi',
            modalClose: 'Tutup',
            modalVisit: 'Kunjungi Website',
        },
        skills: {
            sectionNum: '03',
            sectionTitle: 'Keahlian & Peralatan',
            title: 'Peralatan & Keahlian',
            description:
                'Teknologi dan perangkat yang saya gunakan untuk membangun aplikasi serta mengelola jaringan.',
            motd: 'Membangun aplikasi. Merancang jaringan.\nMenghubungkan semuanya.',
        },
        contact: {
            sectionNum: '04',
            sectionTitle: 'Kontak',
            title1: 'Mari bangun',
            title2: 'jaringan yang andal.',
            description:
                'Baik untuk aplikasi web, perancangan jaringan, atau administrasi server — saya selalu terbuka untuk mendiskusikan proyek dan ide baru.',
            cta: 'Mulai Percakapan',
            social: 'Sosial',
            secureByDefault: 'Dibuat untuk andal.',
            copyright: '© 2026 Mashudi. Dibuat dengan Laravel & Vue.',
        },
    },
    en: {
        nav: {
            about: 'About',
            projects: 'Projects',
            skills: 'Skills',
            contact: 'Contact',
            downloadCv: 'Download CV',
            language: 'Language',
        },
        hero: {
            badge: 'Full-Stack Developer',
            title1: 'Building reliable',
            title2: 'digital systems.',
            description:
                'I build reliable web applications and design stable networks. From frontend to backend, down to the network infrastructure — I bridge development and networking.',
            viewWork: 'View Work',
            downloadCv: 'Download CV',
            scroll: 'Scroll',
        },
        about: {
            sectionNum: '01',
            sectionTitle: 'About',
            statement1: 'I write code that',
            statementWorks: 'works',
            statement2: 'then I make sure',
            statementNetwork: 'the network stays connected.',
            p1: "I'm a full-stack developer with hands-on network engineering skills. I build applications with PHP and Laravel on the backend, Vue and Tailwind on the frontend — and on the network side I design topologies, routing, and manage network devices.",
            p2: 'My work spans full-stack development, server management, routing and switching configuration, and script automation. I believe a good application runs on a well-managed network.',
            basedIn: 'Based in',
            location: 'Indonesia',
            languages: 'Languages',
            languagesList: 'ID, EN',
            education: 'Education',
            major: 'Informatics',
            availability: 'Availability',
            status: 'Open to work',
        },
        projects: {
            sectionNum: '02',
            sectionTitle: 'Projects',
            title: 'Selected Work',
            description:
                'A curated set of projects spanning web development, network infrastructure, and system administration.',
            visit: 'Visit',
            details: 'Details',
            preview: 'Preview',
            noScreenshot: 'no screenshot',
            empty: 'No projects published yet. Check back soon.',
            modalAbout: 'About Project',
            modalTech: 'Technologies',
            modalClose: 'Close',
            modalVisit: 'Visit Website',
        },
        skills: {
            sectionNum: '03',
            sectionTitle: 'Skills & Arsenal',
            title: 'The Toolkit',
            description:
                'Technologies and tools I use to build applications and manage networks.',
            motd: 'Building applications. Designing networks.\nConnecting everything in between.',
        },
        contact: {
            sectionNum: '04',
            sectionTitle: 'Contact',
            title1: "Let's build",
            title2: 'something reliable.',
            description:
                "Whether it's a web app, network design, or server administration — I'm always open to discussing new projects and ideas.",
            cta: 'Start a Conversation',
            social: 'Social',
            secureByDefault: 'Built to be reliable.',
            copyright: '© 2026 Mashudi. Built with Laravel & Vue.',
        },
    },
};

export function initLocale(): Locale {
    currentLocale.value = 'en';
    return currentLocale.value;
}

export function setLocale(locale: Locale): void {
    currentLocale.value = locale;
    if (typeof window !== 'undefined') {
        localStorage.setItem('locale', locale);
    }
}

export function useI18n() {
    const t = computed(() => translations[currentLocale.value]);
    return {
        locale: currentLocale,
        t,
        setLocale,
        initLocale,
    };
}
