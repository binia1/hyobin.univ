import os
import re

def update_html_files(directory):
    # 1. 현재 폴더 내의 모든 html 파일 찾기 (메인 페이지 제외)
    html_files = [f for f in os.listdir(directory) if f.endswith(".html") and f != "hbnu_main.html"]
    
    if not html_files:
        print("❌ 현재 폴더에 변경할 HTML 파일이 없습니다.")
        return

    success_count = 0

    for filename in html_files:
        filepath = os.path.join(directory, filename)
        
        try:
            with open(filepath, 'r', encoding='utf-8') as file:
                content = file.read()
        except UnicodeDecodeError:
            try:
                with open(filepath, 'r', encoding='cp949') as file:
                    content = file.read()
            except Exception as e:
                print(f"⚠️ {filename} 읽기 실패: {e}")
                continue

        original_content = content

        # 1. 혹시 아직 안 바뀐 헤더/푸터가 있다면 마저 교체
        content = re.sub(r'<header[^>]*>.*?</header>', '<div id="header-area"></div>', content, flags=re.DOTALL | re.IGNORECASE)
        new_footer = '<footer id="footer-area" class="bg-[#2a2a2a] text-gray-400 py-12 text-sm mt-auto"></footer>'
        content = re.sub(r'<footer[^>]*>.*?</footer>', new_footer, content, flags=re.DOTALL | re.IGNORECASE)
        
        # 2. 쓸데없는 구형 데이터 스크립트 덩어리 제거 (있을 경우에만)
        content = re.sub(r'<script[^>]*>[\s\S]*?TEXT_CONTENT[\s\S]*?</script>', '', content, flags=re.IGNORECASE)

        # 3. ★가장 핵심★: common.js가 파일 안에 없으면 무조건 </body> 바로 위에 강제 꽂아넣기
        if '<script src="common.js"></script>' not in content:
            # </body> 태그를 찾아서 그 앞에 스크립트 한 줄을 추가함
            content = re.sub(r'</body>', '    <script src="common.js"></script>\n</body>', content, flags=re.IGNORECASE)

        # 내용이 1글자라도 바뀌었으면 저장
        if original_content != content:
            with open(filepath, 'w', encoding='utf-8') as file:
                file.write(content)
            print(f"✅ 심폐소생 완료 (스크립트 주입): {filename}")
            success_count += 1
        else:
            print(f"⏭️ 이미 완벽함: {filename}")

    print("-" * 50)
    print(f"🎉 총 {len(html_files)}개 파일 중 {success_count}개 파일에 메뉴 스크립트 주입 완료!")

if __name__ == "__main__":
    current_dir = "."
    print("🚀 누락된 스크립트 일괄 주입을 시작합니다...")
    update_html_files(current_dir)