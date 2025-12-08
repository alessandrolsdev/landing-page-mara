from playwright.sync_api import sync_playwright

def debug_layout():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()
        page.goto("http://localhost:4173")

        # Wait for load
        page.wait_for_timeout(2000)

        sections = ['header', 'main > section:first-child', '#sobre', '#servicos', '#espaco', '#depoimentos', '#contato']
        section_names = ['Header', 'Hero', 'Sobre', 'Servicos', 'Espaco', 'Depoimentos', 'Contato']

        print(f"{'Section':<15} | {'Y':<10} | {'Height':<10} | {'Display':<10} | {'Position':<10}")
        print("-" * 65)

        for name, selector in zip(section_names, sections):
            loc = page.locator(selector).first
            if loc.count() == 0:
                print(f"{name:<15} | NOT FOUND")
                continue

            bbox = loc.bounding_box()
            y = round(bbox['y'], 2) if bbox else "N/A"
            h = round(bbox['height'], 2) if bbox else "N/A"

            display = loc.evaluate("el => window.getComputedStyle(el).display")
            position = loc.evaluate("el => window.getComputedStyle(el).position")

            print(f"{name:<15} | {y:<10} | {h:<10} | {display:<10} | {position:<10}")

        browser.close()

if __name__ == "__main__":
    debug_layout()
