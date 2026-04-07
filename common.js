// ================= 실제 보유 파일 기준 완벽 링크 매핑 로직 =================
const OLD_URLS = {
    // 대학소개 (허브 및 주요 독립 페이지 매핑)
    "대학연혁": "hbnu_history.html", "캠퍼스안내": "hbnu_campus.html", "오시는길": "hbnu_location.html", "대학정보공시": "hbnu_info_disclosure.html",
    
    // 입학정보
    "입학홈페이지": "hbnu_admissions.html", "수시모집": "hbnu_admission_guide.html", "정시모집": "hbnu_admission_guide.html", "편입학": "hbnu_transfer.html", "외국인전형": "hbnu_global.html",
    
    // (대학/대학원 세부 항목들은 아래 getMenuUrl 함수에서 동적 라우팅으로 완벽 자동 처리됩니다)
    "대학(단과대)": "hbnu_colleges.html", // 전체 단과대 일람 페이지
    
    // 연구/산학
    "연구처": "hbnu_research.html",
    
    // 학사안내
    "학사일정안내": "hbnu_calendar.html", "교양과목": "Hbnu_general_edu.html", "수강신청": "hbnu_sugang.html", "시험성적": "hbnu_grade_check.html", "등록금": "hbnu_scholarship.html", "교내장학금": "hbnu_scholarship.html", "학자금대출": "hbnu_scholarship.html",
    
    // 대학생활 (차량등록, 통학버스 등은 하드코딩 삭제 -> 각자 독립된 '이름.html'로 직행)
    "기숙형대학": "hbnu_dorm.html", "생활관": "hbnu_dorm.html", "병무행정": "hbnu_military.html", "학생증발급": "hbnu_cert.html", "중앙도서관": "hbnu_library.html", "보건진료소": "hbnu_welfare.html", "식단안내": "hbnu_welfare.html",
    "교내교통시스템": "교내교통시스템.html",
    "서브컬처 동아리": "hbnu_clubs.html", "자랑스러운 동문": "hbnu_alumni.html", "총동문회": "hbnu_alumni.html",
    
    // 대학소식 및 기타
    "공지사항": "hbnu_community.html", "자유게시판": "hbnu_board_free.html", "벼룩시장": "hbnu_market.html", "효빈뉴스": "hbnu_news_list.html",
    "정보공개": "hbnu_info_disclosure.html", "개인정보처리방침": "개인정보처리방침.html", "이메일무단수집거부": "이메일무단수집거부.html", "국민신문고": "hbnu_qna.html"
};

function getMenuUrl(label) {
    // 1. 하드코딩된 예외 URL이 있으면 최우선으로 연결
    if (OLD_URLS[label]) return OLD_URLS[label];

    // 2. 단과대 및 대학원 자동 동적 라우팅 (핵심!)
    // 메뉴 이름이 '대학', '학부', '대학원'으로 끝나면 모두 단과대.html 로 파라미터를 물고 직행합니다.
    if (label.endsWith("대학") || label.endsWith("학부") || label.endsWith("대학원")) {
        return `단과대.html?col=${encodeURIComponent(label)}`;
    }

    // 3. 그 외 나머지는 공백과 특수문자 제거 후 자동으로 이름.html 로 연결 (차량등록.html 등)
    return label.replace(/\//g, '_').replace(/ /g, '') + ".html";
}

// ================= 전북대 스타일 메가 메뉴 적용 마스터 데이터 =================
const MEGA_MENU = [
    { title: "대학소개", url: "hbnu_about.html", groups: [
        { name: "총장실", items: ["총장인사말", "총장프로필", "서한문", "연설문", "현장스케치", "역대총장", "만남 신청"] },
        { name: "대학소개", items: ["VISION 2030 플러스", "글로컬대학30", "대학연혁", "헌장", "상징", "UI", "학교현황", "통계연보", "대학정보공시"] },
        { name: "대학조직", items: ["조직도", "대학본부", "교육시설", "지원시설", "부속시설", "법인 기타"] },
        { name: "캠퍼스안내", items: ["캠퍼스안내", "캠퍼스 지도", "캠퍼스 투어", "오시는길"] }
    ]},
    { title: "입학정보", url: "hbnu_admissions.html", groups: [
        { name: "학부/대학원", items: ["입학홈페이지", "수시모집", "정시모집", "재외국민", "편입학", "대학원입학", "시간제 등록생", "고교대학 연계"] },
        { name: "International", items: ["외국인전형", "GKS Program", "Exchange Students", "Student Support"] }
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
        universityName: "효빈대학교", universitySub: "Hyobin National University", slogan: "불굴(不屈)의 역사, 혁신(革 신)으로 미래를 열다",
        slider2Title: "Global Campus", slider2Desc: "세계를 향한 큰 울림, 효빈에서 시작됩니다", slider3Title: "Innovative Research", slider3Desc: "개천(改天)의 의지로 세상을 변화시키는 연구",
        menu: MEGA_MENU,
        utility: { staff: "교직원", student: "학생", alumni: "동문", fund: "발전기금", portal: "HBNU 포털", mail: "웹메일", admission: "입학처" },
        quickLinks: [ { text: "종합정보시스템", url: "hbnu_portal.html", type: "PORTAL" }, { text: "중앙도서관", url: "hbnu_library.html", type: "LIBRARY" }, { text: "학사일정", url: "hbnu_calendar.html", type: "CALENDAR" }, { text: "셔틀/교통안내", url: "hbnu_traffic.html", type: "BUS" }, { text: "생활관", url: "hbnu_dorm.html", type: "DORM" }, { text: "전화번호안내", url: "hbnu_directory.html", type: "PHONE" } ],
        tabs: { notice: "일반공지", academic: "학사공지", recruit: "채용공지" },
        footer: { addresses: { main: "효빈광역시 서구 대학로 1 (당선동 1-1)" }, rights: "COPYRIGHT © 2026 HYOBIN NATIONAL UNIVERSITY. ALL RIGHTS RESERVED." },
        notices: { notice: [ { id: 1001, title: "[교통] 효빈 트램(7호선) 효빈대입구역 운행 시간표", date: "2026.04.06", new: true }, { id: 1002, title: "[행사] 개교 101주년 기념 '효빈 타임캡슐' 개봉식", date: "2026.04.05", new: true } ], academic: [ { id: 2001, title: "[수강] 2026-1학기 수강신청 취소 기간 안내", date: "2026.04.02", new: true } ], recruit: [ { id: 3001, title: "[교원] 2026학년도 하반기 전임교원 초빙 공고", date: "2026.04.06", new: true } ] },
        news: [ { id: 1, title: "박효빈 시장, 효빈대 특강서 '지방분권과 대학의 역할' 강조", date: "2026.04.03", dept: "대외협력팀", img: "뉴스_특강.png" }, { id: 2, title: "[학술] 인공지능학과 연구팀, 글로벌 AI 해커톤 대상 수상", date: "2026.03.20", dept: "산학협력단", img: "뉴스_학술.png" } ]
    },
    ENG: {
        universityName: "Hyobin University", universitySub: "Hyobin National University", slogan: "Unbending History, Opening the Future with Innovation",
        slider2Title: "Global Campus", slider2Desc: "A grand resonance to the world begins at Hyobin", slider3Title: "Innovative Research", slider3Desc: "Research that changes the world with the will of innovation",
        menu: MEGA_MENU, 
        utility: { staff: "Staff", student: "Student", alumni: "Alumni", fund: "Fund", portal: "HBNU Portal", mail: "Webmail", admission: "Admissions" },
        quickLinks: [ { text: "Portal", url: "hbnu_portal.html", type: "PORTAL" }, { text: "Library", url: "hbnu_library.html", type: "LIBRARY" }, { text: "Calendar", url: "hbnu_calendar.html", type: "CALENDAR" }, { text: "Shuttle", url: "hbnu_traffic.html", type: "BUS" }, { text: "Dormitory", url: "hbnu_dorm.html", type: "DORM" }, { text: "Directory", url: "hbnu_directory.html", type: "PHONE" } ],
        tabs: { notice: "General", academic: "Academic", recruit: "Recruit" },
        footer: { addresses: { main: "1 Daehak-ro, Seo-gu, Hyobin Metropolitan City (Dangseon-dong 1-1)" }, rights: "COPYRIGHT © 2026 HYOBIN NATIONAL UNIVERSITY. ALL RIGHTS RESERVED." },
        notices: { notice: [ { id: 1001, title: "[Traffic] HBNU Tram (Line 7) Timetable", date: "2026.04.06", new: true }, { id: 1002, title: "[Event] 101st Anniversary 'Time Capsule' Opening", date: "2026.04.05", new: true } ], academic: [ { id: 2001, title: "[Course] 2026-1 Course Cancellation Period", date: "2026.04.02", new: true } ], recruit: [ { id: 3001, title: "[Faculty] Fall 2026 Full-time Faculty Openings", date: "2026.04.06", new: true } ] },
        news: [ { id: 1, title: "Mayor Park emphasizes 'Decentralization and the Role of Universities' at HBNU", date: "2026.04.03", dept: "External Affairs", img: "뉴스_특강.png" }, { id: 2, title: "[Academic] AI Dept Research Team wins Grand Prize at Global AI Hackathon", date: "2026.03.20", dept: "Industry-Academic Coop", img: "뉴스_학술.png" } ]
    }
};

// ================= 전역 상태 관리 =================
const globalState = { language: 'KOR', scrolled: false, isMenuOpen: false };

function navigateTo(url) {
    if (!url) return;
    try { window.location.href = url; } catch (error) { console.warn('Navigation blocked:', error); }
}

function getIcon(type) {
    const icons = { 'PORTAL': 'monitor', 'LIBRARY': 'book-open', 'CALENDAR': 'calendar', 'BUS': 'bus', 'DORM': 'building-2', 'PHONE': 'phone' };
    return icons[type] || 'monitor';
}

function closeModal() {
    const overlay = document.getElementById('modal-overlay');
    if(overlay) overlay.classList.add('hidden');
}

function toggleMenu() {
    globalState.isMenuOpen = !globalState.isMenuOpen;
    renderHeader();
    if (typeof lucide !== 'undefined') lucide.createIcons();
}

function changeLang(l) {
    globalState.language = l;
    if (document.getElementById('header-area')) renderHeader();
    if (document.getElementById('footer-area')) renderFooter();
    // 메인 페이지 전용 렌더링 함수가 있다면 호출
    if (typeof renderMain === 'function') renderMain();
    if (typeof lucide !== 'undefined') lucide.createIcons();
}

// ================= 공통 헤더 렌더링 =================
function renderHeader() {
    const T = TEXT_CONTENT[globalState.language] || TEXT_CONTENT['KOR'];
    const root = document.getElementById('header-area');
    if (!root) return;
    
    root.innerHTML = `
        <div class="bg-gray-100 border-b text-xs py-2 px-4 hidden md:block">
            <div class="max-w-7xl mx-auto flex justify-between items-center text-gray-600">
                <div class="flex space-x-4">
                    <button class="hover:text-[#3344aa]">${T.utility.staff}</button>
                    <button class="hover:text-[#3344aa]">${T.utility.student}</button>
                    <button onclick="navigateTo('hbnu_alumni.html')" class="hover:text-[#3344aa]">${T.utility.alumni}</button>
                    <button onclick="navigateTo('hbnu_fund.html')" class="hover:text-[#3344aa] font-bold">${T.utility.fund}</button>
                </div>
                <div class="flex space-x-4 items-center">
                    <button onclick="navigateTo('hbnu_portal.html')" class="hover:text-[#3344aa] font-black text-[#3344aa] border border-[#3344aa] px-2 py-0.5 rounded">${T.utility.portal}</button>
                    <span class="text-gray-300">|</span>
                    <button onclick="navigateTo('웹메일.html')" class="hover:text-[#3344aa]">${T.utility.mail}</button>
                    <span class="text-gray-300">|</span>
                    <button onclick="navigateTo('hbnu_admissions.html')" class="hover:text-[#3344aa] font-bold">${T.utility.admission}</button>
                    <div class="flex items-center ml-2 space-x-2 bg-white px-2 py-0.5 rounded border border-gray-200">
                        <i data-lucide="globe" width="14" class="text-[#3344aa]"></i>
                        <select onchange="changeLang(this.value)" class="bg-transparent text-xs font-bold text-gray-700 outline-none cursor-pointer">
                            <option value="KOR" ${globalState.language==='KOR'?'selected':''}>KOR</option>
                            <option value="ENG" ${globalState.language==='ENG'?'selected':''}>ENG</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
        <header class="sticky top-0 z-50 transition-all duration-300 bg-white ${globalState.scrolled ? 'shadow-md py-2' : 'py-4 border-b'}">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="flex justify-between items-center h-16">
                    <div class="flex-shrink-0 flex items-center cursor-pointer" onclick="navigateTo('hbnu_main.html')">
                        <img src="효빈대학교_로고.png" onerror="this.src='https://via.placeholder.com/32?text=H'" class="w-10 h-10 mr-3 rounded-md">
                        <div class="flex flex-col">
                            <span class="font-bold text-2xl tracking-tight leading-none text-[#3344aa]">${T.universityName}</span>
                            <span class="text-[10px] text-gray-500 tracking-widest uppercase font-bold">${T.universitySub}</span>
                        </div>
                    </div>
                    <nav class="hidden lg:flex space-x-3 xl:space-x-6">
                        ${T.menu.map((item) => `
                            <div class="group relative">
                                <button onclick="navigateTo('${item.url}')" class="text-gray-800 font-bold hover:text-[#3344aa] py-2 text-[14px] xl:text-[15px] transition-colors whitespace-nowrap">${item.title}</button>
                                <div class="absolute left-1/2 transform -translate-x-1/2 mt-2 w-max max-w-[90vw] bg-white shadow-2xl rounded-lg overflow-hidden hidden group-hover:flex border-t-4 border-[#3344aa] z-[100] p-6 gap-8">
                                    ${item.groups.map(g => `
                                        <div class="flex flex-col min-w-[120px]">
                                            <h4 class="font-bold text-[#3344aa] border-b border-gray-200 pb-2 mb-3 text-sm flex items-center"><i data-lucide="chevron-right" width="14" class="mr-1"></i>${g.name}</h4>
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
            ${globalState.isMenuOpen ? `<div class="lg:hidden bg-white border-t absolute w-full shadow-2xl z-[100] h-screen overflow-y-auto pb-32"><div class="px-2 pt-2 pb-3 space-y-2 sm:px-3">
                ${T.menu.map((item) => `
                    <div class="border-b border-gray-200 pb-3">
                        <button onclick="navigateTo('${item.url}')" class="block w-full text-left px-3 py-2 text-lg font-black text-[#3344aa] bg-blue-50 rounded">${item.title}</button>
                        <div class="pl-4 space-y-3 mt-3">
                            ${item.groups.map(g => `
                                <div class="mb-2">
                                    <h5 class="text-[13px] font-bold text-gray-800 mb-1 px-2 border-l-2 border-[#3344aa] pl-2">${g.name}</h5>
                                    <div class="grid grid-cols-2 gap-1">
                                        ${g.items.map(sub => `<button onclick="navigateTo('${getMenuUrl(sub)}')" class="text-left px-2 py-1 text-[13px] text-gray-600 hover:text-[#3344aa] hover:bg-gray-50 rounded">${sub}</button>`).join('')}
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

// ================= 공통 푸터 렌더링 =================
function renderFooter() { 
    const T = TEXT_CONTENT[globalState.language] || TEXT_CONTENT['KOR'];
    const root = document.getElementById('footer-area');
    if (!root) return;

    root.innerHTML = `
        <div class="max-w-7xl mx-auto px-4">
            <div class="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8 border-b border-gray-700 pb-8">
                <div class="col-span-1">
                    <div class="text-white font-bold text-xl mb-4 flex items-center cursor-pointer" onclick="navigateTo('hbnu_main.html')">
                        <img src="효빈대학교_로고.png" class="w-8 h-8 mr-2 bg-white rounded-md p-0.5" />
                        ${T.universityName}
                    </div>
                    <p class="text-gray-500 text-xs leading-relaxed">
                        1925-2025 (100th Anniversary)<br>
                        ${T.slogan}
                    </p>
                </div>
                <div class="col-span-3 grid grid-cols-1 sm:grid-cols-3 gap-8">
                    <div>
                        <h4 class="text-white font-bold mb-4 text-sm">캠퍼스 안내</h4>
                        <ul class="text-xs text-gray-400 space-y-2">
                            <li><b>본(당선)캠퍼스:</b> ${T.footer.addresses.main}</li>
                            <li><button onclick="navigateTo('hbnu_location.html')" class="text-[#99dd88] hover:underline flex items-center"><i data-lucide="map-pin" class="w-3 h-3 mr-1"></i> 오시는 길 상세보기</button></li>
                        </ul>
                    </div>
                    <div>
                        <h4 class="text-white font-bold mb-4 text-sm">정보 보러가기</h4>
                        <ul class="text-xs text-gray-400 space-y-2">
                            <li><button onclick="navigateTo('개인정보처리방침.html')" class="hover:text-white">개인정보처리방침</button></li>
                            <li><button onclick="navigateTo('이메일무단수집거부.html')" class="hover:text-white">이메일무단수집거부</button></li>
                            <li><button onclick="navigateTo('hbnu_info_disclosure.html')" class="hover:text-white">대학정보공개</button></li>
                        </ul>
                    </div>
                    <div>
                        <h4 class="text-white font-bold mb-4 text-sm">빠른 메뉴</h4>
                        <ul class="text-xs text-gray-400 space-y-2">
                            <li><button onclick="navigateTo('hbnu_sitemap.html')" class="hover:text-white">사이트맵</button></li>
                            <li><button onclick="navigateTo('hbnu_calendar.html')" class="hover:text-white">학사일정</button></li>
                            <li><button onclick="navigateTo('hbnu_directory.html')" class="hover:text-white">전화번호안내</button></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="text-center text-gray-500 text-[10px] tracking-widest">${T.footer.rights}</div>
        </div>
    `; 
}

// ================= 페이지 공통 초기화 로직 =================
document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('header-area')) renderHeader();
    if (document.getElementById('footer-area')) renderFooter();
    if (typeof lucide !== 'undefined') lucide.createIcons();
    
    // 스크롤 이벤트 감지하여 헤더 모양 변경
    window.addEventListener('scroll', () => {
        const isScrolled = window.scrollY > 50;
        if (globalState.scrolled !== isScrolled) {
            globalState.scrolled = isScrolled;
            if (document.getElementById('header-area')) renderHeader();
            if (typeof lucide !== 'undefined') lucide.createIcons();
        }
    });
});