import os
from playwright.sync_api import sync_playwright

def run_analysis():
    with sync_playwright() as p:
        # Launch browser
        browser = p.chromium.launch(headless=True)
        context = browser.new_context()
        page = context.new_page()

        # Track console logs
        logs = []
        page.on("console", lambda msg: logs.append(f"[{msg.type}] {msg.text}"))
        page.on("pageerror", lambda err: logs.append(f"[ERROR] {err.message}"))

        # Navigate to the app
        print("Navigating to http://localhost:5173...")
        try:
            page.goto("http://localhost:5173", wait_until="networkidle")
        except Exception as e:
            print(f"Failed to navigate: {e}")
            browser.close()
            return

        # Create output directory for screenshots
        os.makedirs("temp_audit/screenshots", exist_ok=True)

        # Audit viewports
        viewports = [
            {"name": "desktop", "width": 1920, "height": 1080},
            {"name": "tablet", "width": 768, "height": 1024},
            {"name": "mobile", "width": 375, "height": 667}
        ]

        for vp in viewports:
            print(f"Capturing {vp['name']} screenshot...")
            page.set_viewport_size({"width": vp["width"], "height": vp["height"]})
            # Wait a bit for animations/resize to settle
            page.wait_for_timeout(1000)
            page.screenshot(path=f"temp_audit/screenshots/{vp['name']}.png", full_page=True)

        # Save logs
        with open("temp_audit/audit_logs.txt", "w", encoding="utf-8") as f:
            f.write("\n".join(logs))

        # Check for specific elements (optional but good for a "pro" audit)
        print("Performing element audit...")
        all_images = page.locator("img").all()
        missing_alt = []
        for img in all_images:
            alt = img.get_attribute("alt")
            if not alt or alt.strip() == "":
                missing_alt.append(img.get_attribute("src") or "unknown source")
        
        with open("temp_audit/element_audit.txt", "w", encoding="utf-8") as f:
            f.write(f"Images missing alt text: {len(missing_alt)}\n")
            for src in missing_alt:
                f.write(f"- {src}\n")

        print("Analysis complete.")
        browser.close()

if __name__ == "__main__":
    run_analysis()
