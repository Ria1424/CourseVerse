import os
import unittest

class TestStaticSiteStructure(unittest.TestCase):
    def setUp(self):
        self.base_dir = os.path.dirname(os.path.abspath(__file__))

    def test_file_existence(self):
        """Verify that all core static files exist in the directory."""
        expected_files = [
            "index.html",
            "courses.html",
            "subscription.html",
            "dashboard.html",
            "course_detail.html",
            "css/style.css",
            "js/db.js",
            "js/main.js",
            "js/course.js"
        ]
        for f in expected_files:
            file_path = os.path.join(self.base_dir, f)
            self.assertTrue(os.path.exists(file_path), f"File missing: {f}")

    def test_no_flask_syntax_in_html(self):
        """Verify that no Flask Jinja template tags ({{ or {%) exist in HTML pages."""
        html_files = [
            "index.html",
            "courses.html",
            "subscription.html",
            "dashboard.html",
            "course_detail.html"
        ]
        forbidden_patterns = ["{{", "}}", "{%", "%}"]
        
        for f in html_files:
            file_path = os.path.join(self.base_dir, f)
            if not os.path.exists(file_path):
                continue
                
            with open(file_path, "r", encoding="utf-8") as file_content:
                content = file_content.read()
                for pattern in forbidden_patterns:
                    self.assertNotIn(
                        pattern, 
                        content, 
                        f"Flask pattern '{pattern}' found in static file '{f}'! GitHub Pages will render this literally and break."
                    )

if __name__ == "__main__":
    unittest.main()
