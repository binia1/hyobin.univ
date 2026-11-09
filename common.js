// ================= [완전판] 실제 보유 파일 + SPA 해시(#) 1:1 완벽 양방향 매핑 테이블 =================
const OLD_URLS = {
    // 1. 대학소개 / 총장실 관련
    "총장인사말": "hbnu_about.html#president",
    "총장프로필": "hbnu_about.html#president",
    "서한문": "hbnu_about.html#president",
    "연설문": "hbnu_about.html#president",
    "현장스케치": "hbnu_about.html#president",
    "역대총장": "hbnu_history.html",
    "만남신청": "hbnu_member_service.html",
    "만남 신청": "hbnu_member_service.html",
    "VISION 2030 플러스": "hbnu_about.html#vision",
    "VISION2030": "hbnu_about.html#vision",
    "글로컬대학30": "hbnu_about.html#vision",
    "대학연혁": "hbnu_history.html",
    "헌장": "hbnu_about.html#charter",
    "상징": "hbnu_about.html#symbol",
    "UI": "hbnu_about.html#symbol",
    "학교현황": "hbnu_about.html#stats",
    "통계연보": "hbnu_about.html#stats",
    "대학정보공시": "hbnu_info_disclosure.html",
    "조직도": "hbnu_about.html#org",
    "대학본부": "hbnu_about.html#hq",
    "교육시설": "hbnu_campus.html",
    "지원시설": "hbnu_campus.html",
    "부속시설": "hbnu_campus.html",
    "법인 기타": "hbnu_about.html#corp",
    "법인기타": "hbnu_about.html#corp",
    "캠퍼스안내": "hbnu_campus.html",
    "캠퍼스 지도": "hbnu_campus.html",
    "캠퍼스지도": "hbnu_campus.html",
    "캠퍼스 투어": "hbnu_campus.html",
    "오시는길": "hbnu_location.html",

    // 2. 입학정보
    "입학홈페이지": "hbnu_admissions.html",
    "수시모집": "hbnu_admission_guide.html",
    "정시모집": "hbnu_admission_guide.html",
    "재외국민": "hbnu_admission_guide.html",
    "편입학": "hbnu_transfer.html",
    "대학원입학": "hbnu_grad.html",
    "시간제 등록생": "hbnu_admissions.html",
    "시간제등록생": "hbnu_admissions.html",
    "고교대학 연계": "hbnu_admissions.html",
    "고교대학연계": "hbnu_admissions.html",
    "외국인전형": "hbnu_global.html",
    "GKSProgram": "hbnu_global.html",
    "GKS Program": "hbnu_global.html",
    "ExchangeStudents": "hbnu_global.html",
    "Exchange Students": "hbnu_global.html",
    "StudentSupport": "hbnu_global.html",
    "Student Support": "hbnu_global.html",

    // 3. 연구 / 산학
    "연구뉴스": "hbnu_research.html",
    "연구뉴스/성과": "hbnu_research.html",
    "연구성과": "hbnu_research.html",
    "연구처": "hbnu_research.html",
    "연구소 현황": "hbnu_research.html",
    "연구소현황": "hbnu_research.html",
    "산학협력단": "hbnu_research.html",
    "현장실습지원센터": "hbnu_research.html",
    "기술비즈니스센터": "hbnu_research.html",
    "창업교육센터": "hbnu_research.html",
    "사업단 현황": "hbnu_research.html",
    "학술DB": "hbnu_library.html",
    "공동실험실습관": "hbnu_research.html",
    "연구자 정보": "hbnu_research.html",

    // 4. 학사안내
    "교양과목": "Hbnu_general_edu.html",
    "전공과목": "Hbnu_general_edu.html",
    "교양/전공과목": "Hbnu_general_edu.html",
    "융합 연계전공": "Hbnu_general_edu.html",
    "복수전공": "Hbnu_general_edu.html",
    "복수/연계전공": "Hbnu_general_edu.html",
    "교직과정": "Hbnu_general_edu.html",
    "수강신청": "hbnu_sugang.html",
    "시험성적": "hbnu_grade_check.html",
    "시험/성적": "hbnu_grade_check.html",
    "강의평가": "hbnu_grade_check.html",
    "졸업학점관리": "hbnu_grade_check.html",
    "졸업/논문심사": "hbnu_grade_check.html",
    "조기졸업": "hbnu_grade_check.html",
    "논문심사": "hbnu_grade_check.html",
    "학사일정안내": "hbnu_calendar.html#calendar",
    "타대학교류": "hbnu_calendar.html#exchange",
    "휴학 복학": "hbnu_calendar.html#status",
    "휴학복학": "hbnu_calendar.html#status",
    "휴학/복학": "hbnu_calendar.html#status",
    "자퇴 제적": "hbnu_calendar.html#status",
    "자퇴제적": "hbnu_calendar.html#status",
    "자퇴/제적": "hbnu_calendar.html#status",
    "전학 전과": "hbnu_calendar.html#transfer",
    "전학전과": "hbnu_calendar.html#transfer",
    "전학/전과": "hbnu_calendar.html#transfer",
    "등록금": "hbnu_scholarship.html",
    "교내장학금": "hbnu_scholarship.html",
    "교외장학금": "hbnu_scholarship.html",
    "교내/외 장학금": "hbnu_scholarship.html",
    "학자금대출": "hbnu_scholarship.html",

    // 5. 대학생활 및 복지
    "식단안내": "hbnu_welfare.html",
    "천원의아침(식단)": "hbnu_welfare.html",
    "기숙형대학": "hbnu_dorm.html",
    "생활관": "hbnu_dorm.html",
    "생활관(기숙사)": "hbnu_dorm.html",
    "학생생활관(기숙사)": "hbnu_dorm.html",
    "병무행정": "hbnu_military.html",
    "직장예비군": "hbnu_military.html",
    "신입생 안내": "hbnu_life.html",
    "학생증발급": "hbnu_cert.html",
    "중앙도서관": "hbnu_library.html",
    "중앙·방도도서관": "hbnu_library.html",
    "방도도서관": "hbnu_library.html",
    "보건진료소": "hbnu_welfare.html",
    "인권센터": "hbnu_welfare.html",
    "생활협동조합": "hbnu_welfare.html",
    "캠퍼스타운": "hbnu_campus.html",
    "교내교통시스템": "교내교통시스템.html",
    "교내철도(HBNU Rail)": "교내교통시스템.html",
    "셔틀/교통안내": "hbnu_traffic.html",
    "차량등록": "차량등록.html",
    "차량등록/셔틀": "차량등록.html",
    "통학버스": "hbnu_traffic.html",
    "교내 애니문화": "hbnu_clubs.html",
    "서브컬처 동아리": "hbnu_clubs.html",
    "서브컬처동아리": "hbnu_clubs.html",
    "HAF 축제 안내": "HAF축제안내.html",
    "자랑스러운 동문": "hbnu_alumni.html",
    "선배들의 이야기": "hbnu_alumni.html",
    "총동문회": "hbnu_alumni.html",
    "발전기금": "hbnu_fund.html",

    // 6. 대학소식 및 커뮤니티
    "공지사항": "hbnu_community.html",
    "자유게시판": "hbnu_board_free.html",
    "벼룩시장": "hbnu_market.html",
    "분실물센터": "hbnu_community.html",
    "교직원게시판": "hbnu_community.html",
    "전자대자보": "hbnu_board_free.html",
    "효빈뉴스": "hbnu_news_list.html",
    "HBNU News": "hbnu_news_list.html",
    "특강 세미나": "hbnu_news_list.html",
    "교육정책": "hbnu_news_list.html",
    "정보공개": "hbnu_info_disclosure.html",
    "홈페이지운영지침": "hbnu_info_disclosure.html",
    "개인정보처리방침": "개인정보처리방침.html",
    "개인정보방침": "개인정보처리방침.html",
    "이메일무단수집거부": "이메일무단수집거부.html",
    "국민신문고": "hbnu_qna.html",
    "전화번호안내": "hbnu_directory.html",
    "사이트맵": "hbnu_sitemap.html",
    "전체메뉴": "hbnu_sitemap.html",
    "웹메일": "hbnu_webmail.html",
    "HBNU 포털": "hbnu_portal.html",
    "종합정보시스템": "hbnu_portal.html",

    // 7. SNS 및 HBNU anis (위키)
    "인스타그램": "hbnu_community.html",
    "유튜브": "hbnu_community.html",
    "페이스북": "hbnu_community.html",
    "네이버블로그": "hbnu_community.html",
    "엑스": "hbnu_community.html",
    "HBNU anis": "HBNUanis.html",
    "HBNU anis 홈": "HBNUanis.html",
    "개요": "HBNUanis.html",
    "캠퍼스 특징": "HBNUanis.html",
    "주요 학과 (S등급)": "HBNUanis.html",
    "학부 대학원": "hbnu_colleges.html",
    "부속 시설": "hbnu_campus.html",
    "학내 문화": "HBNUanis.html",
    "사건 및 사고": "HBNUanis.html",
    "여담": "HBNUanis.html",
    "도시철도 마스코트": "교내교통시스템.html"
};

const COLLEGE_NAMES = [
    "언어문학대학", "인문대학", "사회복지학대학", "사회과학대학", "상과대학",
    "농업대학", "생명대학", "생활과학대학", "자연과학대학", "해양대학", "환경산업대학",
    "의과대학", "의과대학(통합)", "약학대학", "간호대학", "보건대학",
    "기계공업대학", "전기공업대학", "토목공업대학", "화학공업대학", "응용과학대학", "교통대학",
    "응용예술대학", "미술대학", "디자인대학", "음악대학", "예술대학", "무용대학", "사범대학", "융합학부",
    "일반대학원", "법학전문대학원", "의학전문대학원", "치의학전문대학원", "사회복지대학원",
    "경영대학원", "해양대학원", "행정대학원", "교육대학원", "보건대학원"
];

function getMenuUrl(label) {
    if (!label) return "hbnu_main.html";
    const clean = label.trim().replace(/\.html$/i, '');
    if (OLD_URLS[clean]) return OLD_URLS[clean];
    const noSpace = clean.replace(/\s+/g, '');
    if (OLD_URLS[noSpace]) return OLD_URLS[noSpace];

    const normalizedCol = clean === "의과대학(통합)" ? "의과대학" : clean;
    if (COLLEGE_NAMES.includes(normalizedCol) || normalizedCol.endsWith("대학") || normalizedCol.endsWith("학부") || normalizedCol.endsWith("대학원")) {
        return `단과대.html?col=${encodeURIComponent(normalizedCol)}`;
    }
    return clean.replace(/\//g, '_').replace(/\s+/g, '') + ".html";
}

const MEGA_MENU = [
    { title: "대학소개", url: "hbnu_about.html", groups: [
        { name: "총장실", items: ["총장인사말", "총장프로필", "서한문", "연설문", "현장스케치", "역대총장", "만남신청"] },
        { name: "대학소개", items: ["VISION 2030 플러스", "글로컬대학30", "대학연혁", "헌장", "상징", "UI", "학교현황", "통계연보", "대학정보공시"] },
        { name: "대학조직", items: ["조직도", "대학본부", "교육시설", "지원시설", "부속시설", "법인 기타"] },
        { name: "캠퍼스안내", items: ["캠퍼스안내", "캠퍼스 지도", "캠퍼스 투어", "오시는길"] }
    ]},
    { title: "입학정보", url: "hbnu_admissions.html", groups: [
        { name: "학부/대학원", items: ["입학홈페이지", "수시모집", "정시모집", "재외국민", "편입학", "대학원입학", "시간제 등록생", "고교대학 연계"] },
        { name: "International", items: ["외국인전형", "GKSProgram", "ExchangeStudents", "StudentSupport"] }
    ]},
    { title: "대학/대학원", url: "hbnu_colleges.html", groups: [
        { name: "대학 (인문·사회)", items: ["언어문학대학", "인문대학", "사회복지학대학", "사회과학대학", "상과대학"] },
        { name: "대학 (이학·의학)", items: ["농업대학", "생명대학", "생활과학대학", "자연과학대학", "해양대학", "환경산업대학", "의과대학", "약학대학", "간호대학", "보건대학"] },
        { name: "대학 (공학·교통)", items: ["기계공업대학", "전기공업대학", "토목공업대학", "화학공업대학", "응용과학대학", "교통대학"] },
        { name: "대학 (예체능·사범·융합)", items: ["응용예술대학", "미술대학", "디자인대학", "음악대학", "예술대학", "무용대학", "사범대학", "융합학부"] },
        { name: "대학원", items: ["일반대학원", "법학전문대학원", "의학전문대학원", "치의학전문대학원", "사회복지대학원", "경영대학원", "해양대학원", "행정대학원", "교육대학원", "보건대학원"] }
    ]},
    { title: "연구/산학", url: "hbnu_research.html", groups: [
        { name: "연구", items: ["연구뉴스", "연구성과", "연구처", "연구소 현황"] },
        { name: "산학", items: ["산학협력단", "현장실습지원센터", "기술비즈니스센터", "창업교육센터", "사업단 현황"] },
        { name: "연구검색", items: ["학술DB", "공동실험실습관", "연구자 정보"] }
    ]},
    { title: "학사안내", url: "hbnu_calendar.html", groups: [
        { name: "교육과정", items: ["학사일정안내", "교양과목", "전공과목", "융합 연계전공", "복수전공", "교직과정"] },
        { name: "수업/졸업", items: ["수강신청", "시험성적", "강의평가", "타대학교류", "졸업학점관리", "조기졸업", "논문심사"] },
        { name: "학적/장학", items: ["휴학 복학", "자퇴 제적", "전학 전과", "등록금", "교내장학금", "교외장학금", "학자금대출"] }
    ]},
    { title: "대학생활", url: "hbnu_life.html", groups: [
        { name: "캠퍼스생활", items: ["식단안내", "기숙형대학", "병무행정", "직장예비군", "신입생 안내", "학생증발급"] },
        { name: "캠퍼스시설", items: ["중앙도서관", "생활관", "보건진료소", "인권센터", "생활협동조합", "캠퍼스타운"] },
        { name: "교통/인프라", items: ["교내교통시스템", "차량등록", "통학버스"] },
        { name: "문화/애니메이션", items: ["교내 애니문화", "HAF 축제 안내", "서브컬처 동아리"] },
        { name: "동문네트워크", items: ["자랑스러운 동문", "선배들의 이야기", "총동문회"] }
    ]},
    { title: "대학소식", url: "hbnu_community.html", groups: [
        { name: "효빈광장", items: ["공지사항", "자유게시판", "벼룩시장", "분실물센터", "교직원게시판", "전자대자보"] },
        { name: "뉴스광장", items: ["효빈뉴스", "HBNU News", "특강 세미나", "교육정책"] },
        { name: "이용안내", items: ["정보공개", "홈페이지운영지침", "개인정보처리방침", "이메일무단수집거부", "국민신문고"] }
    ]},
    { title: "SNS", url: "hbnu_community.html", groups: [
        { name: "공식 미디어", items: ["인스타그램", "유튜브", "페이스북", "네이버블로그", "엑스"] }
    ]},
    { title: "HBNU anis", url: "HBNUanis.html", groups: [
        { name: "효빈위키 (Wiki)", items: ["개요", "캠퍼스 특징", "주요 학과 (S등급)", "학부 대학원", "부속 시설", "학내 문화", "사건 및 사고", "여담"] }
    ]}
];

const TEXT_CONTENT = {
    KOR: {
        universityName: "효빈대학교", universitySub: "Hyobin National University", slogan: "불굴(不屈)의 역사, 혁신(革新)으로 미래를 열다",
        utility: { staff: "교직원", student: "학생", alumni: "동문", fund: "발전기금", portal: "HBNU 포털", mail: "웹메일", admission: "입학처" },
        menu: MEGA_MENU,
        quickLinks: [
            { text: "종합정보시스템", url: "hbnu_portal.html", type: "PORTAL" },
            { text: "중앙·방도도서관", url: "hbnu_library.html", type: "LIBRARY" },
            { text: "학사일정안내", url: "hbnu_calendar.html", type: "CALENDAR" },
            { text: "교내철도(HBNU Rail)", url: "교내교통시스템.html", type: "BUS" },
            { text: "학생생활관(기숙사)", url: "hbnu_dorm.html", type: "DORM" },
            { text: "천원의아침(식단)", url: "hbnu_welfare.html", type: "PHONE" }
        ],
        footer: {
            rights: "COPYRIGHT © 1925-2026 HYOBIN NATIONAL UNIVERSITY. ALL RIGHTS RESERVED."
        }
    },
    ENG: {
        universityName: "Hyobin University", universitySub: "Hyobin National University", slogan: "Unbending History, Opening the Future with Innovation",
        utility: { staff: "Staff", student: "Student", alumni: "Alumni", fund: "Giving", portal: "HBNU Portal", mail: "Webmail", admission: "Admissions" },
        menu: MEGA_MENU,
        quickLinks: [
            { text: "HBNU Portal", url: "hbnu_portal.html", type: "PORTAL" },
            { text: "Central/Bangdo Lib", url: "hbnu_library.html", type: "LIBRARY" },
            { text: "Academic Calendar", url: "hbnu_calendar.html", type: "CALENDAR" },
            { text: "HBNU Rail CTC", url: "교내교통시스템.html", type: "BUS" },
            { text: "Dormitory", url: "hbnu_dorm.html", type: "DORM" },
            { text: "Emma's Table", url: "hbnu_welfare.html", type: "PHONE" }
        ],
        footer: {
            rights: "COPYRIGHT © 1925-2026 HYOBIN NATIONAL UNIVERSITY. ALL RIGHTS RESERVED."
        }
    }
};

const globalState = { language: localStorage.getItem('hbnu_lang') || 'KOR', scrolled: false, isMenuOpen: false };

function navigateTo(url) {
    if (!url) return;
    const target = (url.includes('.html') && !url.startsWith('hbnu_') && !url.includes('?') && !url.includes('#'))
        ? getMenuUrl(url.replace(/\.html$/i, ''))
        : url;
    try {
        window.location.href = target;
        // 동일 페이지 내 해시(#) 전환 시 즉시 SPA 뷰 갱신 트리거
        if (target.includes('#') && typeof window.handleAboutHashChange === 'function') {
            setTimeout(() => window.handleAboutHashChange(), 10);
        }
    } catch (e) { console.warn('Navigation:', e); }
}

function getIcon(type) {
    const icons = { 'PORTAL': 'monitor', 'LIBRARY': 'book-open', 'CALENDAR': 'calendar', 'BUS': 'tram-front', 'DORM': 'building-2', 'PHONE': 'utensils' };
    return icons[type] || 'monitor';
}

function toggleMenu() {
    globalState.isMenuOpen = !globalState.isMenuOpen;
    renderHeader();
    if (typeof lucide !== 'undefined') lucide.createIcons();
}

function changeLang(l) {
    globalState.language = l;
    localStorage.setItem('hbnu_lang', l);
    if (document.getElementById('header-area')) renderHeader();
    if (document.getElementById('footer-area')) renderFooter();
    if (typeof renderMain === 'function') renderMain();
    if (typeof renderSitemap === 'function') renderSitemap();
    if (typeof lucide !== 'undefined') lucide.createIcons();
}

function closeModal() {
    const overlay = document.getElementById('modal-overlay');
    if (overlay) overlay.classList.add('hidden');
}

function renderHeader() {
    const T = TEXT_CONTENT[globalState.language] || TEXT_CONTENT['KOR'];
    const root = document.getElementById('header-area');
    if (!root) return;
    
    root.innerHTML = `
        <div class="bg-gray-100 border-b text-xs py-1.5 px-4 hidden md:block">
            <div class="max-w-7xl mx-auto flex justify-between items-center text-gray-600">
                <div class="flex space-x-4 items-center">
                    <span class="font-extrabold text-[#3344aa]">국가거점국립대학교</span>
                    <span class="text-gray-300">|</span>
                    <button onclick="navigateTo('hbnu_portal.html')" class="hover:text-[#3344aa]">${T.utility.staff}</button>
                    <button onclick="navigateTo('hbnu_portal.html')" class="hover:text-[#3344aa]">${T.utility.student}</button>
                    <button onclick="navigateTo('hbnu_alumni.html')" class="hover:text-[#3344aa]">${T.utility.alumni}</button>
                    <button onclick="navigateTo('hbnu_fund.html')" class="hover:text-[#3344aa] font-bold text-emerald-700">${T.utility.fund}</button>
                </div>
                <div class="flex space-x-3 items-center">
                    <button onclick="navigateTo('hbnu_portal.html')" class="hover:bg-[#3344aa] hover:text-white font-black text-[#3344aa] border border-[#3344aa] px-2.5 py-0.5 rounded transition-colors">${T.utility.portal}</button>
                    <span class="text-gray-300">|</span>
                    <button onclick="navigateTo('웹메일.html')" class="hover:text-[#3344aa]">${T.utility.mail}</button>
                    <span class="text-gray-300">|</span>
                    <button onclick="navigateTo('hbnu_admissions.html')" class="hover:text-[#3344aa] font-bold">${T.utility.admission}</button>
                    <span class="text-gray-300">|</span>
                    <button onclick="navigateTo('hbnu_sitemap.html')" class="hover:text-[#3344aa] font-bold">사이트맵</button>
                    <div class="flex items-center ml-2 space-x-1 bg-white px-2 py-0.5 rounded border border-gray-200">
                        <i data-lucide="globe" width="13" class="text-[#3344aa]"></i>
                        <select onchange="changeLang(this.value)" class="bg-transparent text-xs font-bold text-gray-700 outline-none cursor-pointer">
                            <option value="KOR" ${globalState.language==='KOR'?'selected':''}>KOR</option>
                            <option value="ENG" ${globalState.language==='ENG'?'selected':''}>ENG</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
        <header class="bg-white border-b shadow-sm relative z-50">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="flex justify-between items-center h-16">
                    <div class="flex-shrink-0 flex items-center cursor-pointer group" onclick="navigateTo('hbnu_main.html')">
                        <img src="이미지/효빈대_로고.webp" alt="HBNU 로고" class="w-10 h-10 mr-3 object-contain shrink-0" style="max-height:40px; width:auto;" onerror="this.style.display='none'">
                        <div class="flex flex-col">
                            <span class="font-black text-2xl tracking-tight leading-none text-[#3344aa] group-hover:text-[#1e2a78] transition-colors">${T.universityName}</span>
                            <span class="text-[10px] text-gray-500 tracking-widest uppercase font-bold mt-0.5">${T.universitySub}</span>
                        </div>
                    </div>
                    <nav class="hidden lg:flex space-x-2 xl:space-x-5 items-center">
                        ${T.menu.map((item) => `
                            <div class="group relative">
                                <button onclick="navigateTo('${item.url}')" class="text-gray-800 font-bold hover:text-[#3344aa] py-2 px-1 text-[14px] xl:text-[15px] transition-colors whitespace-nowrap">${item.title}</button>
                                <div class="absolute left-1/2 transform -translate-x-1/2 mt-0 w-max max-w-[92vw] bg-white shadow-2xl rounded-xl overflow-hidden hidden group-hover:flex border-t-4 border-[#3344aa] z-[100] p-6 gap-7">
                                    ${item.groups.map(g => `
                                        <div class="flex flex-col min-w-[130px]">
                                            <h4 class="font-extrabold text-[#3344aa] border-b border-gray-200 pb-2 mb-3 text-sm flex items-center"><i data-lucide="chevron-right" width="14" class="mr-1"></i>${g.name}</h4>
                                            <ul class="${g.items.length > 8 ? 'grid grid-cols-2 gap-x-6 gap-y-1.5' : 'space-y-1.5'}">
                                                ${g.items.map(sub => `<li><button onclick="navigateTo('${getMenuUrl(sub)}')" class="text-[13px] text-gray-600 hover:text-[#3344aa] hover:font-bold hover:translate-x-1 transition-all text-left w-full whitespace-nowrap">${sub}</button></li>`).join('')}
                                            </ul>
                                        </div>
                                    `).join('')}
                                </div>
                            </div>
                        `).join('')}
                    </nav>
                    <div class="flex lg:hidden"><button onclick="toggleMenu()" class="text-gray-800 p-2"><i data-lucide="${globalState.isMenuOpen ? 'x' : 'menu'}" width="28"></i></button></div>
                </div>
            </div>
            ${globalState.isMenuOpen ? `<div class="lg:hidden bg-white border-t absolute w-full shadow-2xl z-[100] max-h-[80vh] overflow-y-auto pb-12"><div class="px-4 pt-3 pb-6 space-y-3">
                ${T.menu.map((item) => `
                    <div class="border-b border-gray-200 pb-3">
                        <button onclick="navigateTo('${item.url}')" class="block w-full text-left px-3 py-2 text-base font-black text-[#3344aa] bg-blue-50 rounded-lg">${item.title}</button>
                        <div class="pl-3 space-y-3 mt-3">
                            ${item.groups.map(g => `
                                <div class="mb-2">
                                    <h5 class="text-[13px] font-bold text-gray-800 mb-1.5 border-l-2 border-[#3344aa] pl-2">${g.name}</h5>
                                    <div class="grid grid-cols-2 gap-1">
                                        ${g.items.map(sub => `<button onclick="navigateTo('${getMenuUrl(sub)}')" class="text-left px-2 py-1 text-[12px] text-gray-600 hover:text-[#3344aa] hover:bg-gray-50 rounded">${sub}</button>`).join('')}
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                `).join('')}
            </div></div>` : ''}
        </header>
    `;
}

function renderFooter() { 
    const T = TEXT_CONTENT[globalState.language] || TEXT_CONTENT['KOR'];
    const root = document.getElementById('footer-area');
    if (!root) return;

    root.innerHTML = `
        <div class="max-w-7xl mx-auto px-4">
            <div class="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8 border-b border-gray-700 pb-8">
                <div class="col-span-1">
                    <div class="text-white font-bold text-xl mb-3 flex items-center cursor-pointer" onclick="navigateTo('hbnu_main.html')">
                        <img src="이미지/효빈대_로고.webp" class="w-9 h-9 mr-2.5 bg-white rounded-lg p-1 object-contain" style="max-height:36px; width:auto;" onerror="this.style.display='none'" />
                        <div>
                            <div>${T.universityName}</div>
                            <div class="text-[10px] text-[#99dd88] font-normal tracking-wider">SINCE 1925 · 101ST ANNIVERSARY</div>
                        </div>
                    </div>
                    <p class="text-gray-400 text-xs leading-relaxed mb-3">
                        교시: 불굴(不屈) · 혁신(革新) · 개천(改天)<br>
                        슬로건: 어려움에 굴하지 않는 불굴의 효빈대<br>
                        제26대 총장 민부선 (Evergreen & Shiny)
                    </p>
                </div>
                <div class="col-span-3 grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        <h4 class="text-white font-bold mb-3 text-sm">5대 캠퍼스 안내 및 연락처</h4>
                        <ul class="text-[11.5px] text-gray-400 space-y-3 leading-tight">
                            <li><b class="text-gray-200 text-xs">당선(본):</b> 효빈광역시 서구 대학로 1 <span class="text-[#99dd88] ml-1">TEL: 079-649-2312</span></li>
                            <li><b class="text-gray-200 text-xs">이자:</b> 효빈광역시 안천구 원세로 22 <span class="text-[#99dd88] ml-1">TEL: 079-938-4811</span></li>
                            <li><b class="text-gray-200 text-xs">천주:</b> 덕빈북도 천주시 궁하구 세동로 13 <span class="text-[#99dd88] ml-1">TEL: 078-238-3812</span></li>
                            <li><b class="text-gray-200 text-xs">낭원:</b> 덕빈북도 낭원군 전포읍 도경로 213 <span class="text-[#99dd88] ml-1">TEL: 078-211-3821</span></li>
                            <li><b class="text-gray-200 text-xs">강주:</b> 덕빈북도 강주시 서류로 11 <span class="text-[#99dd88] ml-1">TEL: 078-574-9391</span></li>
                        </ul>
                    </div>
                    <div class="grid grid-cols-2 gap-4">
                        <div>
                            <h4 class="text-white font-bold mb-3 text-sm">대학 행정 · 법규 공시</h4>
                            <ul class="text-xs text-gray-400 space-y-2">
                                <li><button onclick="navigateTo('개인정보처리방침.html')" class="text-[#99dd88] font-bold hover:underline">개인정보처리방침</button></li>
                                <li><button onclick="navigateTo('hbnu_info_disclosure.html')" class="hover:text-white">대학정보공시 (등록금 5년 동결)</button></li>
                                <li><button onclick="navigateTo('이메일무단수집거부.html')" class="hover:text-white">이메일무단수집거부</button></li>
                                <li><button onclick="navigateTo('교내교통시스템.html')" class="hover:text-white">HBNU Rail 관제실(CTC)</button></li>
                            </ul>
                        </div>
                        <div>
                            <h4 class="text-white font-bold mb-3 text-sm">빠른 메뉴</h4>
                            <ul class="text-xs text-gray-400 space-y-2">
                                <li><button onclick="navigateTo('hbnu_sitemap.html')" class="text-white font-bold hover:underline">전체 사이트맵</button></li>
                                <li><button onclick="navigateTo('hbnu_calendar.html')" class="hover:text-white">학사일정안내</button></li>
                                <li><button onclick="navigateTo('hbnu_directory.html')" class="hover:text-white">교내 전화번호안내</button></li>
                                <li><button onclick="navigateTo('hbnu_portal.html')" class="hover:text-white text-[#a0fff9] font-bold">HBNU 종합정보(포털)</button></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div class="text-center text-gray-500 text-[11px] tracking-widest">${T.footer.rights}</div>
        </div>
    `; 
}

document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('header-area')) renderHeader();
    if (document.getElementById('footer-area')) renderFooter();
    if (typeof lucide !== 'undefined') lucide.createIcons();
});