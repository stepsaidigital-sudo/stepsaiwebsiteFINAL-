import os
import re

html_files = [f for f in os.listdir('.') if f.endswith('.html')]
print(f"Total HTML files found: {len(html_files)}")

results = []

for f in sorted(html_files):
    with open(f, 'r', encoding='utf-8', errors='ignore') as fp:
        content = fp.read()
    
    has_nav = '<nav' in content or 'class="nav' in content or 'class="site-nav' in content or '<header' in content
    has_footer = '<footer' in content
    has_nav_js = 'nav.js' in content
    has_styles_css = 'styles.css' in content
    
    # Extract footer class
    footer_match = re.search(r'<footer[^>]*class="([^"]*)"', content)
    footer_class = footer_match.group(1) if footer_match else ("Present" if has_footer else "MISSING")
    
    results.append({
        'file': f,
        'has_nav': has_nav,
        'has_footer': has_footer,
        'footer_class': footer_class,
        'has_nav_js': has_nav_js,
        'has_styles_css': has_styles_css
    })

print("\n--- AUDIT SUMMARY ---")
missing_nav = [r['file'] for r in results if not r['has_nav']]
missing_footer = [r['file'] for r in results if not r['has_footer']]
missing_nav_js = [r['file'] for r in results if not r['has_nav_js']]

print(f"Pages missing Navigation: {missing_nav}")
print(f"Pages missing Footer: {missing_footer}")
print(f"Pages missing nav.js: {missing_nav_js}")

print("\nDetailed list of all 42 pages:")
for r in results:
    status = "OK" if r['has_nav'] and r['has_footer'] and r['has_nav_js'] else "NEEDS ATTENTION"
    print(f"[{status}] {r['file']:<32} | Nav: {r['has_nav']} | Footer: {r['has_footer']} ({r['footer_class']}) | JS: {r['has_nav_js']}")
