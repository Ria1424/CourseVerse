/* ==========================================================================
   Courseverse Static Database & Client-Side AI Recommender Engine (db.js)
   ========================================================================== */

const COURSES_DB = {
    "python-101": {
        "id": "python-101",
        "title": "Introduction to Python Programming",
        "category": "Coding",
        "level": "Beginner",
        "duration": "4 Weeks",
        "is_premium": false,
        "short_desc": "Master the fundamentals of Python, the most popular programming language in the world.",
        "long_desc": "Python is a powerful, high-level, interpreted programming language. In this course, you will learn variables, control flow, functions, lists, and basic data structures. Hands-on coding exercises and AI-assisted tutoring will guide your learning process step-by-step.",
        "lessons": [
            {
                "id": "py-vars",
                "title": "1. Variables & Data Types",
                "content": "In Python, variables are created when you assign a value to them. Unlike other languages, Python has no command for declaring a variable. Common data types include Integers (e.g., `x = 5`), Floats (e.g., `y = 2.5`), Strings (e.g., `name = \"Courseverse\"`), and Booleans (e.g., `is_cool = True`). You can check a variable's type using the `type()` function.",
                "code_example": "# Variable Assignment\nx = 10\ny = \"Hello World\"\nprint(type(x)) # Outputs <class 'int'>\nprint(type(y)) # Outputs <class 'str'>",
                "keywords": ["variable", "data type", "string", "integer", "float", "boolean", "type", "declare", "assign"],
                "summary": "Variables store data. Python dynamically infers data types (int, float, str, bool). Assign values using the `=` operator and check types with the `type()` function."
            },
            {
                "id": "py-control",
                "title": "2. Control Flow & Loops",
                "content": "Control flow allows your code to make decisions. In Python, we use `if`, `elif`, and `else` statements. Indentation is crucial as it defines the scope of the code block. For repetitive tasks, we use loops: `for` loops (best for iterating over a sequence like a list or range) and `while` loops (runs as long as a condition is true). Loop controls like `break` and `continue` modify loop behavior.",
                "code_example": "# Control Flow Example\nage = 18\nif age >= 18:\n    print(\"Adult\")\nelse:\n    print(\"Minor\")\n\n# Loop Example\nfor i in range(3):\n    print(f\"Iteration {i}\")",
                "keywords": ["control flow", "loop", "if", "else", "elif", "for", "while", "indent", "indentation", "break", "continue"],
                "summary": "Control flow directs execution paths. `if-elif-else` manages decisions. `for` loops iterate over collections. `while` loops repeat based on a boolean condition. Indentation is strictly enforced."
            },
            {
                "id": "py-funcs",
                "title": "3. Functions & Scope",
                "content": "A function is a block of organized, reusable code that performs a single, related action. In Python, functions are defined using the `def` keyword, followed by the function name and parentheses. You can pass parameters into a function, and it can return values using the `return` keyword. Variables created inside a function are in the local scope, meaning they cannot be accessed outside.",
                "code_example": "# Function Definition\ndef greet(name):\n    message = f\"Hello, {name}!\"\n    return message\n\n# Calling the function\nresult = greet(\"Alex\")\nprint(result) # Outputs \"Hello, Alex!\"",
                "keywords": ["function", "def", "parameter", "return", "scope", "local", "global", "argument", "reusable"],
                "summary": "Functions group reusable code blocks. Define them with `def` and exit/return values with `return`. Local scope isolates variables inside functions from the rest of the application."
            }
        ],
        "quizzes": {
            "py-vars": [
                {
                    "question": "Which of the following is the correct way to assign a value to a variable in Python?",
                    "options": ["x := 5", "var x = 5", "x = 5", "int x = 5"],
                    "correct": 2,
                    "explanation": "Python does not require any keyword to declare variables. You simply write the variable name followed by the '=' assignment operator and the value."
                }
            ],
            "py-control": [
                {
                    "question": "What determines a block of code scope in Python control flow?",
                    "options": ["Curly brackets {}", "Parentheses ()", "Indentation", "Semicolons"],
                    "correct": 2,
                    "explanation": "Unlike languages like JavaScript or C++ that use curly brackets, Python relies entirely on indentation (whitespace at the start of a line) to define code blocks."
                }
            ],
            "py-funcs": [
                {
                    "question": "Which keyword is used to start defining a function in Python?",
                    "options": ["function", "def", "define", "func"],
                    "correct": 1,
                    "explanation": "In Python, the def keyword (short for define) is used to declare a function."
                }
            ]
        }
    },
    "ai-ml-basics": {
        "id": "ai-ml-basics",
        "title": "AI & Machine Learning Foundations",
        "category": "AI",
        "level": "Intermediate",
        "duration": "6 Weeks",
        "is_premium": true,
        "short_desc": "Dive into the core mathematical concepts and algorithms behind modern artificial intelligence.",
        "long_desc": "Artificial Intelligence is redefining industries. In this premium course, you will learn the core disciplines of Machine Learning: Supervised learning, Unsupervised learning, and Neural Networks. We will explore linear regressions, clustering, and how deep learning simulates human synapses.",
        "lessons": [
            {
                "id": "ai-intro",
                "title": "1. What is Artificial Intelligence?",
                "content": "Artificial Intelligence (AI) refers to the simulation of human intelligence in machines that are programmed to think and learn. A subset of AI is Machine Learning (ML), which enables computers to learn from data without being explicitly programmed. The field has evolved from simple rule-based expert systems to complex neural architectures capable of pattern recognition, speech processing, and creative synthesis.",
                "code_example": "# Concept: Traditional Programming vs Machine Learning\n# Traditional: Rules + Data -> Answers\n# Machine Learning: Data + Answers -> Rules (Model Training)",
                "keywords": ["ai", "artificial intelligence", "ml", "machine learning", "human intelligence", "expert systems", "subset"],
                "summary": "AI simulates human cognitive functions in software. Machine Learning is a vital subset where systems learn patterns directly from input data rather than following static, hardcoded rules."
            },
            {
                "id": "ai-supervised",
                "title": "2. Supervised vs Unsupervised Learning",
                "content": "Machine learning algorithms are generally categorized into Supervised and Unsupervised learning. In Supervised Learning, the model is trained on labeled data (input-output pairs). Example tasks include classification (predicting a category like Spam/Ham) and regression (predicting a number like house prices). In Unsupervised Learning, the model is fed unlabeled data and must discover hidden patterns and structures on its own. A common task is clustering (e.g., K-Means grouping similar customers).",
                "code_example": "# Supervised (Labeled data): \n# X_train = [[size, rooms]], y_train = [price]\n# Unsupervised (Unlabeled data):\n# X_train = [[customer_age, spending_score]] -> Output: Cluster Groups",
                "keywords": ["supervised", "unsupervised", "label", "labeled", "unlabeled", "classification", "regression", "clustering", "k-means"],
                "summary": "Supervised learning maps inputs to labeled outputs (classification, regression). Unsupervised learning uncovers structural groups in unlabeled data (clustering)."
            }
        ],
        "quizzes": {
            "ai-intro": [
                {
                    "question": "What is the relationship between AI and Machine Learning?",
                    "options": [
                        "They are completely unrelated fields",
                        "AI is a subset of Machine Learning",
                        "Machine Learning is a subset of AI",
                        "They are exactly the same thing"
                    ],
                    "correct": 2,
                    "explanation": "Machine Learning is a specialized subfield within the broader domain of Artificial Intelligence focused on algorithms that learn from data."
                }
            ],
            "ai-supervised": [
                {
                    "question": "A model is trained to predict whether an email is 'Spam' or 'Not Spam'. What type of ML task is this?",
                    "options": ["Regression", "Clustering", "Classification", "Dimensionality Reduction"],
                    "correct": 2,
                    "explanation": "Predicting a discrete category or label (like Spam/Not Spam) is a classification task, which is a subcategory of Supervised Learning."
                }
            ]
        }
    },
    "design-101": {
        "id": "design-101",
        "title": "UI/UX Design Masterclass",
        "category": "Design",
        "level": "All Levels",
        "duration": "5 Weeks",
        "is_premium": true,
        "short_desc": "Learn the principles of human-centered design to craft intuitive, beautiful digital interfaces.",
        "long_desc": "Design is not just how it looks, but how it works. In this premium course, you will study user experience (UX) and user interface (UI) principles. Learn design thinking, wireframing in Figma, accessibility compliance, typography scales, and high-fidelity mockups.",
        "lessons": [
            {
                "id": "ds-thinking",
                "title": "1. The Design Thinking Process",
                "content": "Design Thinking is a non-linear, iterative methodology used to understand users, challenge assumptions, redefine problems, and create innovative solutions. It consists of five key phases: Empathize (conduct user research), Define (identify user needs and problems), Ideate (generate creative ideas), Prototype (build simple mockups), and Test (gather feedback from actual users).",
                "code_example": "# Design Thinking Loop:\n# Empathize -> Define -> Ideate -> Prototype -> Test\n# (Note: You often jump back to previous stages based on user tests!)",
                "keywords": ["design thinking", "empathize", "define", "ideate", "prototype", "test", "human-centered", "user research"],
                "summary": "Design thinking is a five-stage human-centered approach: Empathize, Define, Ideate, Prototype, and Test. It focuses on solving real user pain points iteratively."
            }
        ],
        "quizzes": {
            "ds-thinking": [
                {
                    "question": "Which phase of the Design Thinking process focuses on gathering user research and understanding their struggles?",
                    "options": ["Define", "Ideate", "Empathize", "Prototype"],
                    "correct": 2,
                    "explanation": "The 'Empathize' phase is all about understanding the user's perspective, observing their behaviors, and conducting research to find their actual struggles."
                }
            ]
        }
    },
    "javascript-101": {
        "id": "javascript-101",
        "title": "JavaScript Basics & DOM",
        "category": "Coding",
        "level": "Beginner",
        "duration": "4 Weeks",
        "is_premium": false,
        "short_desc": "Bring web pages to life! Learn variables, operations, arrays, functions, and DOM manipulations.",
        "long_desc": "JavaScript is the programming language of the web. This course introduces you to variables, control flow, functions, event handlers, and how to dynamically edit HTML elements using the Document Object Model (DOM).",
        "lessons": [
            {
                "id": "js-dom",
                "title": "1. Document Object Model (DOM)",
                "content": "The Document Object Model (DOM) is a programming interface for web documents. It represents the page so that programs can change the document structure, style, and content. The DOM represents the document as nodes and objects. JavaScript can query objects using `document.getElementById` or `document.querySelector` and listen to user events using `addEventListener`.",
                "code_example": "// Query an element and edit its text\nconst title = document.getElementById('title');\ntitle.innerText = 'Hello Courseverse!';\n\n// Add Click Event\nconst btn = document.querySelector('button');\nbtn.addEventListener('click', () => {\n    alert('Clicked!');\n});",
                "keywords": ["dom", "queryselector", "getelementbyid", "addeventlistener", "event", "click", "node", "object"],
                "summary": "DOM represents HTML as objects in a tree. JavaScript queries nodes (getElementById, querySelector) and updates text or styles, responding to user actions (addEventListener)."
            }
        ],
        "quizzes": {
            "js-dom": [
                {
                    "question": "Which DOM method is used to target an element using its specific HTML 'id' attribute?",
                    "options": ["document.querySelector()", "document.getElementById()", "document.getElementsByTagName()", "document.queryId()"],
                    "correct": 1,
                    "explanation": "document.getElementById() retrieves a single DOM element matching the exact 'id' string passed as the parameter."
                }
            ]
        }
    },
    "data-science-python": {
        "id": "data-science-python",
        "title": "Advanced Data Science with Python",
        "category": "AI",
        "level": "Advanced",
        "duration": "8 Weeks",
        "is_premium": true,
        "short_desc": "Manipulate large datasets, perform statistical modeling, and generate data insights using Pandas and NumPy.",
        "long_desc": "Turn raw data into business intelligence. Learn data aggregation, cleaning, correlation analysis, statistics, and visualizations using Pandas, NumPy, Seaborn, and Scikit-Learn libraries.",
        "lessons": [
            {
                "id": "ds-pandas",
                "title": "1. Data Aggregation with Pandas",
                "content": "Pandas is a data analysis library that provides high-performance data structures like DataFrames (similar to tables). Standard operations include loading files (`pd.read_csv`), filtering rows, selecting columns, grouping data using `.groupby()`, and running statistical aggregations (like `.mean()`, `.sum()`, and `.count()`). Data cleaning methods handle null cells using `.fillna()` or `.dropna()`.",
                "code_example": "import pandas as pd\n\n# Load and aggregate data\ndf = pd.read_csv('sales.csv')\nmean_sales = df.groupby('category')['revenue'].mean()\nprint(mean_sales)",
                "keywords": ["pandas", "dataframe", "groupby", "read_csv", "aggregation", "mean", "dropna", "numpy"],
                "summary": "Pandas manages tabular data in DataFrames. Operations group rows (groupby), calculate summaries, and clean missing values (dropna, fillna)."
            }
        ],
        "quizzes": {
            "ds-pandas": [
                {
                    "question": "Which Pandas function is used to load data from a CSV file into a DataFrame?",
                    "options": ["pd.load_csv()", "pd.open_csv()", "pd.read_csv()", "pd.import_csv()"],
                    "correct": 2,
                    "explanation": "pd.read_csv() reads a CSV file path and converts it directly into a Pandas DataFrame table structure."
                }
            ]
        }
    },
    "figma-pro": {
        "id": "figma-pro",
        "title": "Figma Prototyping Techniques",
        "category": "Design",
        "level": "Intermediate",
        "duration": "4 Weeks",
        "is_premium": false,
        "short_desc": "Build advanced micro-interactions, smart animations, and design system variables in Figma.",
        "long_desc": "Master Figma's industrial prototyping engine. Learn smart-animate transitions, interactive components, hover states, design variables, and auto-layouts to create high-fidelity user journeys.",
        "lessons": [
            {
                "id": "figma-smart",
                "title": "1. Smart Animate & Interactions",
                "content": "Smart Animate looks for matching layers, recognizes differences, and automatically animates transitions between frames in prototypes. Design elements must maintain consistent layer naming across frames for Figma to recognize them. Micro-interactions utilize 'While Hovering' and 'While Pressing' properties to swap component states dynamically without multiplying frames.",
                "code_example": "# Figma Proto Flow:\n# Frame A (Layer: 'Button', Size: Normal) -> Smart Animate -> Frame B (Layer: 'Button', Size: Scale Up)",
                "keywords": ["figma", "smart animate", "transition", "component", "variant", "hover", "layer", "interaction"],
                "summary": "Smart Animate links frames by interpolating layers with identical names. Variants automate states (like hovering) inside single interactive components."
            }
        ],
        "quizzes": {
            "figma-smart": [
                {
                    "question": "What is required for Figma's Smart Animate to link layers and transition them correctly between two frames?",
                    "options": [
                        "Layers must have different colors",
                        "Layers must have the exact same name",
                        "Layers must be inside groups",
                        "Frames must have identical dimensions"
                    ],
                    "correct": 1,
                    "explanation": "Figma tracks layer identity across frames by matching their names exactly. If layer names differ, Smart Animate fails and defaults to a simple fade transition."
                }
            ]
        }
    },
    "business-strategy": {
        "id": "business-strategy",
        "title": "Business Strategy & Entrepreneurship",
        "category": "Business",
        "level": "Beginner",
        "duration": "5 Weeks",
        "is_premium": false,
        "short_desc": "Learn how to formulate strategic plans, validate market fit, and draft canvas models for start-ups.",
        "long_desc": "Learn the frameworks used by strategic leaders and entrepreneurs. Study SWOT analyses, Porter's Five Forces, Blue Ocean strategies, value proposition canvases, and unit economics.",
        "lessons": [
            {
                "id": "biz-canvas",
                "title": "1. The Lean Business Model Canvas",
                "content": "The Business Model Canvas is a strategic management template for developing new or documenting existing business models. It visualizes 9 key building blocks: Value Propositions, Customer Segments, Channels, Customer Relationships, Revenue Streams, Key Resources, Key Activities, Key Partners, and Cost Structure. Start-ups use it to validate product-market fit rapidly.",
                "code_example": "# Lean Canvas Structure:\n# Problem | Solution | Key Metrics | Value Prop | Unfair Advantage | Channels | Segments | Cost | Revenue",
                "keywords": ["canvas", "business model", "value proposition", "revenue stream", "customer segment", "entrepreneurship", "lean", "swot"],
                "summary": "The Business Model Canvas aggregates a start-up's 9 core blocks on a single page, focusing on validation of propositions, streams, segments, and cost structures."
            }
        ],
        "quizzes": {
            "biz-canvas": [
                {
                    "question": "How many building blocks are represented in a standard Business Model Canvas?",
                    "options": ["5 blocks", "7 blocks", "9 blocks", "12 blocks"],
                    "correct": 2,
                    "explanation": "A standard Business Model Canvas contains exactly 9 strategic building blocks mapping value, delivery infrastructure, and financial viability."
                }
            ]
        }
    },
    "digital-marketing": {
        "id": "digital-marketing",
        "title": "Digital Marketing Essentials",
        "category": "Business",
        "level": "Intermediate",
        "duration": "6 Weeks",
        "is_premium": true,
        "short_desc": "Grow your business with SEO, search engine advertising, search analytics, and brand positioning campaigns.",
        "long_desc": "Unlock modern growth tools. Learn Search Engine Optimization (SEO), pay-per-click Google Search Ads, conversion rate optimization (CRO), Google Analytics, and content strategies.",
        "lessons": [
            {
                "id": "mkt-seo",
                "title": "1. Search Engine Optimization (SEO) Foundations",
                "content": "SEO is the process of improving site visibility on organic search results. Key pillars include On-Page SEO (keyword optimization, heading structures, meta descriptions), Off-Page SEO (backlinks, domain authority), and Technical SEO (site loading speed, XML sitemaps, structured schema data). Search crawler bots crawl sites to index pages based on crawlability and domain authority scores.",
                "code_example": "<!-- On-Page SEO basics -->\n<title>Courseverse - Learn AI and Coding</title>\n<meta name='description' content='Enroll in premium coding and AI courses today.'>\n<h1>Personalized AI Learning</h1>",
                "keywords": ["seo", "backlink", "keyword", "metadata", "organic", "google analytics", "indexing", "crawlability"],
                "summary": "SEO targets organic search visibility through page relevance (keywords, metadata), authority links (backlinks), and code crawlability metrics."
            }
        ],
        "quizzes": {
            "mkt-seo": [
                {
                    "question": "Which type of SEO focuses on sitemaps, sitemaps, sitemaps, sitemaps, sitemaps, sitemaps, sitemaps, sitemaps?",
                    "options": ["On-Page SEO", "Off-Page SEO", "Technical SEO", "Content SEO"],
                    "correct": 2,
                    "explanation": "Technical SEO refers to backend optimizations (sitemaps, responsiveness, code size, index directives) that help search engines crawl and catalog your site efficiently."
                }
            ]
        }
    },
    "deep-learning": {
        "id": "deep-learning",
        "title": "Introduction to Deep Learning & NLP",
        "category": "AI",
        "level": "Advanced",
        "duration": "8 Weeks",
        "is_premium": true,
        "short_desc": "Train Convolutional Networks (CNNs) and Natural Language Transformers using PyTorch libraries.",
        "long_desc": "Take machine learning to the next level. Build deep neural architectures in PyTorch. Study image classification with CNNs, sequence modeling with RNNs, and natural language processing with Transformers.",
        "lessons": [
            {
                "id": "dl-pytorch",
                "title": "1. Building Models in PyTorch",
                "content": "PyTorch is an open-source machine learning library. It structures models using Tensors (multidimensional arrays) and supports automatic differentiation (autograd) for optimizing models. Neural networks inherit from `torch.nn.Module`. Training involves loading data, defining a forward propagation sequence, calculating loss, executing backpropagation (`loss.backward()`), and updating gradients via optimizers.",
                "code_example": "import torch\nimport torch.nn as nn\n\n# Create a simple neural network linear layer\nlinear_layer = nn.Linear(in_features=10, out_features=2)\ninput_tensor = torch.randn(1, 10)\noutput = linear_layer(input_tensor)\nprint(output.shape) # Outputs torch.Size([1, 2])",
                "keywords": ["pytorch", "tensor", "nn.module", "forward propagation", "backpropagation", "loss", "optimizer", "autograd"],
                "summary": "PyTorch wraps datasets in Tensors. Models inherit from nn.Module, running forward passes, error calculations, backprop gradients, and optimizers."
            }
        ],
        "quizzes": {
            "dl-pytorch": [
                {
                    "question": "What is the primary multidimensional data structure used in PyTorch to store model inputs and weights?",
                    "options": ["Array", "DataFrame", "Matrix", "Tensor"],
                    "correct": 3,
                    "explanation": "Tensors are PyTorch's native multidimensional arrays that support GPU acceleration and automatic gradient tracking."
                }
            ]
        }
    },
    "web-dev-basics": {
        "id": "web-dev-basics",
        "title": "Web Development with HTML & CSS",
        "category": "Coding",
        "level": "Beginner",
        "duration": "5 Weeks",
        "is_premium": false,
        "short_desc": "Build and style professional responsive landing pages using semantic HTML5 and flexbox layouts.",
        "long_desc": "The starting point for every web designer. Learn structure using semantic HTML elements, custom styles with CSS, viewport setups, CSS grid, and flexbox models to build mobile-friendly sites.",
        "lessons": [
            {
                "id": "web-html",
                "title": "1. Semantic HTML & Flexbox Layouts",
                "content": "Semantic HTML elements describe their meaning to both the browser and the developer (e.g. `<header>`, `<main>`, `<section>`, `<footer>` instead of plain divs). Styling layouts is driven by Flexbox, which aligns items along a single axis (row or column). Properties like `display: flex`, `justify-content` (distributes items horizontally), and `align-items` (aligns items vertically) govern standard grid positioning.",
                "code_example": "<!-- HTML Structure -->\n<div style='display: flex; justify-content: space-between; align-items: center;'>\n    <div>Logo</div>\n    <div>Navbar Link</div>\n</div>",
                "keywords": ["html", "css", "flexbox", "semantic", "justify-content", "align-items", "viewport", "layout"],
                "summary": "Semantic elements improve website structure and accessibility. Flexbox aligns items vertically and horizontally along axes."
            }
        ],
        "quizzes": {
            "web-html": [
                {
                    "question": "Which CSS property is used in Flexbox to distribute elements horizontally along the main row axis?",
                    "options": ["align-items", "justify-content", "flex-direction", "grid-align"],
                    "correct": 1,
                    "explanation": "justify-content specifies how Flexbox items are distributed along the main axis (horizontally for row layouts, vertically for column layouts)."
                }
            ]
        }
    }
};

/**
 * Port of the Python get_tutor_response logic to client-side JS.
 */
function getTutorResponse(courseId, lessonId, query) {
    const course = COURSES_DB[courseId];
    if (!course) {
        return "🤖 **AI Tutor:** I couldn't find details for this course. How can I help you generally?";
    }

    const lesson = course.lessons.find(l => l.id === lessonId);
    if (!lesson) {
        return `🤖 **AI Tutor:** I couldn't find the lesson details. However, I can help you with topics in **${course.title}**.`;
    }

    const queryLower = query.toLowerCase().trim();

    // Command matching
    if (["summarize", "summarize lesson", "give me a summary", "summary"].includes(queryLower)) {
        return `### 📝 AI Lesson Summary: ${lesson.title}\n\n${lesson.summary}\n\n**Key Takeaways:**\n- This lesson covers the absolute foundations of the topic.\n- Understanding this will serve as the base for our upcoming assessments.\n\n*Tip: You can click the **Generate AI Quiz** button to test your understanding!*`;
    }

    if (["explain concept", "explain", "explain code", "code example", "show code"].includes(queryLower)) {
        return `### 💡 Deep Dive & Code Example\n\nLet's look at the core concept in **${lesson.title}**:\n\n${lesson.content}\n\nHere is an illustrative code block / logic workflow:\n\`\`\`python\n${lesson.code_example}\n\`\`\`\n**Why this matters:**\nApplying this structure isolates execution logic, makes troubleshooting simpler, and keeps your codebase modular.`;
    }

    if (["key concepts", "key terms", "definitions"].includes(queryLower)) {
        const termsList = lesson.keywords.slice(0, 4).map(kw => `- **${kw.charAt(0).toUpperCase() + kw.slice(1)}**: Key term related to the current syllabus.`).join("\n");
        return `### 🔑 Core Vocabulary & Key Concepts\n\nHere are the essential concepts you must know for this unit:\n\n${termsList}\n\nDo you need a detailed explanation of any of these specific terms? Type it below!`;
    }

    // Keyword matching
    // 1. Python Variables
    if (queryLower.includes("variable") || queryLower.includes("declare") || queryLower.includes("data type")) {
        if (courseId === "python-101") {
            return `🤖 **AI Tutor:** Great question! In Python, variables are named locations used to store data in memory.\n\nUnlike other programming languages (like Java or C++), Python is **dynamically typed**, which means:\n1. You do not need to declare variable types explicitly.\n2. The type is determined automatically when you assign a value using the \`=\` sign.\n\n**Example:**\n\`\`\`python\nage = 25          # Integer\nheight = 1.75      # Float\nname = "Aria"     # String\nis_student = True # Boolean\n\`\`\`\nYou can inspect any variable's type using \`print(type(variable_name))\`.`;
        }
    }

    // 2. Control flow & loops
    if (queryLower.includes("loop") || queryLower.includes("control flow") || queryLower.includes("if statement") || queryLower.includes("indent")) {
        if (courseId === "python-101") {
            return `🤖 **AI Tutor:** In Python, control flow is managed using indentation instead of curly brackets. This is a very common point of confusion for beginners!\n\n- **If/Else:** Decisions are made using \`if\`, \`elif\`, and \`else\` blocks.\n- **Loops:**\n  - Use a \`for\` loop when you know the number of iterations beforehand (e.g. looping over a collection or range).\n  - Use a \`while\` loop when you want to repeat execution until a conditional statement turns False.\n\n**Common Gotcha:** Always ensure you indent by 4 spaces. Mixing tabs and spaces will throw an \`IndentationError\`.`;
        }
    }

    // 3. DOM / JS
    if (queryLower.includes("dom") || queryLower.includes("selector") || queryLower.includes("event") || queryLower.includes("listener")) {
        if (courseId === "javascript-101") {
            return `🤖 **AI Tutor:** The DOM (Document Object Model) is a tree-like structure representing HTML.\n\n- Use \`document.getElementById('id')\` to select a specific node.\n- Use \`element.addEventListener('click', callback)\` to listen for clicks.\nThis allows JavaScript to run dynamic visual changes inside the browser client-side!`;
        }
    }

    // 4. Pandas / Data Science
    if (queryLower.includes("pandas") || queryLower.includes("dataframe") || queryLower.includes("groupby")) {
        if (courseId === "data-science-python") {
            return `🤖 **AI Tutor:** Pandas DataFrames represent rows and columns in memory.\n\n- Grouping rows with \`.groupby('category')\` groups matching parameters.\n- Running aggregations like \`.mean()\` aggregates metrics.\nThis allows swift mathematical calculations over massive tabular CSV inputs.`;
        }
    }

    // Default Fallback
    return `🤖 **AI Tutor:** That's a great question about the topics in **${course.title}**!\n\nFor the lesson *${lesson.title}*, let me explain that **${query}** is central to modern practices.\n\nHere's a breakdown of what you need to consider:\n1. **Context:** How does this apply to your current lesson goals?\n2. **Syntax/Logic:** Always structure your implementation following standard guidelines.\n3. **Testing:** Verify edge cases locally before moving to production.\n\nCould you elaborate or ask a more specific question, like asking to *Summarize* the lesson, *Explain* the code, or *Generate a Quiz*?`;
}

/**
 * Port of the Python generate_quiz logic.
 */
function getQuizQuestions(courseId, lessonId) {
    const course = COURSES_DB[courseId];
    if (!course || !course.quizzes) return [];

    return course.quizzes[lessonId] || [
        {
            "question": `Which of the following is true about the topic of this lesson?`,
            "options": [
                "It is a core concept that supports advanced learning.",
                "It has no practical applications.",
                "It can only be used on legacy systems.",
                "It is completely optional to learn."
            ],
            "correct": 0,
            "explanation": "Understanding the core principles presented in this lesson is essential for building advanced features and solving complex problems in this field."
        }
    ];
}

/**
 * Personalized Content-Based Course Recommender System.
 * Assigns scores to other courses based on category matches with completed courses
 * and selected profile preferences. Returns top 3 suggestions.
 */
function getRecommendations(completedCourseIds, interestTags) {
    if (!completedCourseIds) completedCourseIds = [];
    if (!interestTags) interestTags = [];

    const interestTagsLower = interestTags.map(tag => tag.toLowerCase());
    const scoredList = [];

    for (const cId in COURSES_DB) {
        // Skip already enrolled / completed courses
        if (completedCourseIds.includes(cId)) {
            continue;
        }

        const course = COURSES_DB[cId];
        const category = course.category.toLowerCase();
        let score = 0;

        // 1. Match categories of completed courses (Weight: 3)
        let categoryMatch = false;
        for (const completedId of completedCourseIds) {
            const completedCourse = COURSES_DB[completedId];
            if (completedCourse && completedCourse.category.toLowerCase() === category) {
                score += 3;
                categoryMatch = true;
                break;
            }
        }

        // 2. Match profile preference interest tags (Weight: 2)
        if (interestTagsLower.includes(category)) {
            score += 2;
        }

        // 3. Level-progression modifier (Bonus: 1)
        if (completedCourseIds.length > 0 && course.level === "Intermediate" && categoryMatch) {
            score += 1;
        }

        scoredList.push({
            course: course,
            score: score
        });
    }

    // Sort by score (descending), then alphabetically by title
    scoredList.sort((a, b) => {
        if (b.score !== a.score) {
            return b.score - a.score;
        }
        return a.course.title.localeCompare(b.course.title);
    });

    // Return top 3 course objects
    return scoredList.slice(0, 3).map(item => item.course);
}
