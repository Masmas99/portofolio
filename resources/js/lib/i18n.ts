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
            getInTouch: 'Hubungi Saya',
            language: 'Bahasa',
        },
        hero: {
            badge: 'Full-Stack Developer',
            title1: 'Membangun sistem digital',
            title2: 'yang aman.',
            description:
                'Saya merancang aplikasi web yang andal dan memperkuat keamanannya dari berbagai ancaman. Dari server hingga kode yang bersih — saya menjembatani pengembangan dan keamanan.',
            viewWork: 'Lihat Proyek',
            getInTouch: 'Hubungi Saya',
            scroll: 'Gulir',
        },
        about: {
            sectionNum: '01',
            sectionTitle: 'Tentang',
            statement1: 'Saya menulis kode yang',
            statementWorks: 'bekerja',
            statement2: 'lalu memastikan',
            statementSecurity: 'tidak ada yang merusaknya.',
            p1: 'Saya seorang full-stack developer dengan minat mendalam di bidang keamanan siber. Saya membangun aplikasi dengan PHP dan Laravel di backend, Vue dan Tailwind di frontend — lalu menguji ketahanannya dari perspektif keamanan.',
            p2: 'Alur kerja saya mencakup perancangan skema database hingga pengerasan server Ubuntu, penulisan otomasi Bash, dan uji penetrasi (pentest). Saya percaya setiap pengembang harus berpikir seperti seorang penyerang.',
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
                'Kumpulan proyek pilihan yang mencakup pengembangan web, peralatan keamanan, dan administrasi sistem.',
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
                'Teknologi dan perangkat yang saya gunakan setiap hari untuk membangun dan mengamankan sistem digital.',
            motd: 'Membangun dengan kode. Berpikir seperti penyerang.\nMengamankan segalanya.',
        },
        contact: {
            sectionNum: '04',
            sectionTitle: 'Kontak',
            title1: 'Mari bangun',
            title2: 'sesuatu yang aman.',
            description:
                'Baik untuk aplikasi web, pengerasan server, atau audit keamanan — saya selalu terbuka untuk mendiskusikan proyek dan ide baru.',
            cta: 'Mulai Percakapan',
            social: 'Sosial',
            secureByDefault: 'Aman secara default.',
            copyright: '© 2026 Ahmad Kurniawan. Dibuat dengan Laravel & Vue.',
        },
    },
    en: {
        nav: {
            about: 'About',
            projects: 'Projects',
            skills: 'Skills',
            contact: 'Contact',
            getInTouch: 'Get in touch',
            language: 'Language',
        },
        hero: {
            badge: 'Full-Stack Developer',
            title1: 'Building secure',
            title2: 'digital systems.',
            description:
                'I craft robust web applications and harden them against threats. From server racks to clean code — I bridge development and security.',
            viewWork: 'View Work',
            getInTouch: 'Get in Touch',
            scroll: 'Scroll',
        },
        about: {
            sectionNum: '01',
            sectionTitle: 'About',
            statement1: 'I write code that',
            statementWorks: 'works',
            statement2: 'then I make sure',
            statementSecurity: 'no one breaks it.',
            p1: "I'm a full-stack developer with a deep interest in cybersecurity. I build applications with PHP and Laravel on the backend, Vue and Tailwind on the frontend — and then I stress-test them from a security perspective.",
            p2: 'My workflow spans from designing database schemas to hardening Ubuntu servers, writing Bash automation, and conducting penetration testing. I believe every developer should think like an attacker.',
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
                'A curated set of projects spanning web development, security tooling, and system administration.',
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
                'Technologies and tools I use daily to build and secure digital systems.',
            motd: 'Building with code. Thinking like an attacker.\nSecuring everything in between.',
        },
        contact: {
            sectionNum: '04',
            sectionTitle: 'Contact',
            title1: "Let's build",
            title2: 'something secure.',
            description:
                "Whether it's a web app, server hardening, or a security audit — I'm always open to discussing new projects and ideas.",
            cta: 'Start a Conversation',
            social: 'Social',
            secureByDefault: 'Secure by default.',
            copyright: '© 2026 Ahmad Kurniawan. Built with Laravel & Vue.',
        },
    },
};

export function initLocale(): Locale {
    if (typeof window === 'undefined') return 'en';
    const saved = localStorage.getItem('locale') as Locale | null;
    if (saved === 'id' || saved === 'en') {
        currentLocale.value = saved;
    } else {
        currentLocale.value = 'en';
    }
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
