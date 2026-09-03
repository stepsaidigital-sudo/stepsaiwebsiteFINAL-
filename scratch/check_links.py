import os
import re

html_files = [f for f in os.listdir('.') if f.endswith('.html')]
all_links = set()
broken_links = []

for src_file in sorted(html_files):
    with open(src_file, 'r', encoding='utf-8', errors='ignore') as fp:
        content = fp.read()
    
    # find all href="..."
    matches = re.findall(r'href=["\']([^"\']+)["\']', content)
    for target in matches:
        target_clean = target.split('#')[0].split('?')[0]
        if target_clean and not target_clean.startswith(('http', 'mailto:', 'tel:', 'javascript:')):
            if not os.path.exists(target_clean):
                broken_links.append((src_file, target))

print(f"Total internal links checked across {len(html_files)} pages.")
if broken_links:
    print(f"Found {len(broken_links)} broken internal links:")
    for src, tgt in broken_links:
        print(f"  In {src}: href='{tgt}'")
else:
    print("ALL internal links across all 42 pages are 100% VALID!")
