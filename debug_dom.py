from playwright.sync_api import sync_playwright

def debug_dom():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()
        page.goto("http://localhost:4173")

        # Wait a bit for AOS to potentially kick in
        page.wait_for_timeout(2000)

        sections = ['#sobre', '#servicos', '#espaco', '#depoimentos', '#contato']

        for section_selector in sections:
            print(f"--- Inspecting {section_selector} ---")
            section = page.locator(section_selector)
            if section.count() == 0:
                print(f"Section {section_selector} NOT FOUND")
                continue

            # Check visibility of the section itself
            is_visible = section.is_visible()
            bbox = section.bounding_box()
            print(f"Visible: {is_visible}")
            print(f"Bounding Box: {bbox}")

            # Check elements with data-aos inside this section
            aos_elements = section.locator('[data-aos]').all()
            print(f"Found {len(aos_elements)} AOS elements")

            for i, el in enumerate(aos_elements):
                # Scroll to element to trigger AOS
                el.scroll_into_view_if_needed()
                page.wait_for_timeout(500) # Wait for animation

                opacity = el.evaluate("el => window.getComputedStyle(el).opacity")
                transform = el.evaluate("el => window.getComputedStyle(el).transform")
                classes = el.get_attribute("class")
                aos_attr = el.get_attribute("data-aos")

                print(f"  Element {i} ({aos_attr}):")
                print(f"    Classes: {classes}")
                print(f"    Opacity: {opacity}")
                print(f"    Transform: {transform}")

        browser.close()

if __name__ == "__main__":
    debug_dom()
