/* ==========================================================================
   Courseverse Static Course Page Controller (course.js)
   ========================================================================== */

// Global state variables
let courseId = "";
let lessonId = "";
let courseData = null;
let lessonData = null;

let quizQuestions = [];
let quizIndex = 0;
let quizScoreVal = 0;
let selectedOptIdx = null;

document.addEventListener("DOMContentLoaded", () => {
    loadCoursePlayer();
});

/**
 * Parses query params and renders full page contents.
 */
function loadCoursePlayer() {
    const params = new URLSearchParams(window.location.search);
    courseId = params.get("course");
    lessonId = params.get("lesson");

    // Fallbacks if params are missing
    if (!courseId || !COURSES_DB[courseId]) {
        window.location.href = "courses.html";
        return;
    }

    courseData = COURSES_DB[courseId];
    
    // Check premium access lock
    const isPremium = localStorage.getItem("is_premium") === "true";
    if (courseData.is_premium && !isPremium) {
        window.location.href = `subscription.html?required_course=${courseId}`;
        return;
    }

    // Auto-enroll
    let enrolled = JSON.parse(localStorage.getItem("enrolled_courses") || "{}");
    if (!enrolled[courseId]) {
        enrolled[courseId] = [];
        localStorage.setItem("enrolled_courses", JSON.stringify(enrolled));
    }

    // Validate lesson
    const lessons = courseData.lessons;
    lessonData = lessons.find(l => l.id === lessonId);
    if (!lessonId || !lessonData) {
        // Fallback to first lesson
        window.location.href = `course_detail.html?course=${courseId}&lesson=${lessons[0].id}`;
        return;
    }

    // Render DOM Content
    document.getElementById("player-course-title").innerText = courseData.title;
    document.getElementById("player-video-title").innerText = `Lecture Video: ${lessonData.title}`;
    document.getElementById("player-lesson-category").innerText = courseData.category;
    document.getElementById("player-lesson-title").innerText = lessonData.title;
    document.getElementById("player-lesson-content").innerText = lessonData.content;

    // Render Code blocks if present
    const codeContainer = document.getElementById("player-code-container");
    if (lessonData.code_example) {
        document.getElementById("player-code-block").innerText = lessonData.code_example;
        codeContainer.style.display = "block";
    } else {
        codeContainer.style.display = "none";
    }

    // Navigation Buttons Statuses
    const currIdx = lessons.findIndex(l => l.id === lessonId);
    const prevBtn = document.getElementById("player-prev-btn");
    const nextBtn = document.getElementById("player-next-btn");

    if (currIdx > 0) {
        prevBtn.disabled = false;
        prevBtn.onclick = () => navigateLessonIndex(currIdx - 1);
    } else {
        prevBtn.disabled = true;
    }

    if (currIdx < lessons.length - 1) {
        nextBtn.disabled = false;
        nextBtn.onclick = () => navigateLessonIndex(currIdx + 1);
    } else {
        nextBtn.disabled = true;
    }

    renderOutlineSidebar();
    renderCompleteButtonUI();
    initializeAIChatUI();
}

/**
 * Navigates lessons by index.
 */
function navigateLessonIndex(idx) {
    const nextLesson = courseData.lessons[idx];
    window.location.href = `course_detail.html?course=${courseId}&lesson=${nextLesson.id}`;
}

/**
 * Sidebar list builder.
 */
function renderOutlineSidebar() {
    const list = document.getElementById("player-outline-list");
    list.innerHTML = "";

    const enrolled = JSON.parse(localStorage.getItem("enrolled_courses") || "{}");
    const completedList = enrolled[courseId] || [];

    courseData.lessons.forEach(l => {
        const li = document.createElement("li");
        li.className = "outline-item";

        const isCompleted = completedList.includes(l.id);
        const isActive = l.id === lessonId;

        const a = document.createElement("a");
        a.href = `course_detail.html?course=${courseId}&lesson=${l.id}`;
        a.className = `outline-link ${isActive ? 'active' : ''} ${isCompleted ? 'completed' : ''}`;
        a.innerHTML = `
            <span class="outline-checkbox"></span>
            <span>${l.title}</span>
        `;
        li.appendChild(a);
        list.appendChild(li);
    });

    // Update Stats message
    const total = courseData.lessons.length;
    const completed = completedList.length;
    document.getElementById("completion-stats").innerText = `${completed} of ${total} completed`;
}

/**
 * Completion check toggler for complete buttons.
 */
function renderCompleteButtonUI() {
    const btn = document.getElementById("complete-btn");
    const icon = document.getElementById("complete-btn-icon");
    const txt = document.getElementById("complete-btn-text");

    const enrolled = JSON.parse(localStorage.getItem("enrolled_courses") || "{}");
    const completedList = enrolled[courseId] || [];
    const isCompleted = completedList.includes(lessonId);

    if (isCompleted) {
        btn.className = "btn btn-secondary";
        icon.className = "fa-solid fa-circle-check";
        icon.style.color = "var(--success)";
        txt.innerText = "Completed";
    } else {
        btn.className = "btn btn-primary";
        icon.className = "fa-solid fa-circle";
        icon.style.color = "";
        txt.innerText = "Mark Complete";
    }
}

function toggleLessonCompletionStatic() {
    let enrolled = JSON.parse(localStorage.getItem("enrolled_courses") || "{}");
    let completedList = enrolled[courseId] || [];
    const idx = completedList.indexOf(lessonId);
    
    let isCompleted = false;

    if (idx > -1) {
        // Remove completion
        completedList.splice(idx, 1);
    } else {
        // Add completion
        completedList.push(lessonId);
        isCompleted = true;
    }

    enrolled[courseId] = completedList;
    localStorage.setItem("enrolled_courses", JSON.stringify(enrolled));

    renderOutlineSidebar();
    renderCompleteButtonUI();

    if (isCompleted && completedList.length === courseData.lessons.length) {
        alert("🎉 Congratulations! You have fully completed all course modules. A verified graduation certificate has been issued to your profile dashboard!");
    }
}

/* ==========================================================================
   AI Tutor Chat Section
   ========================================================================== */

function initializeAIChatUI() {
    const isPremium = localStorage.getItem("is_premium") === "true";
    const container = document.getElementById("ai-chat-input-container");

    if (isPremium) {
        container.innerHTML = `
            <input type="text" id="chat-input" placeholder="Ask AI Tutor a question..." onkeydown="handleChatKeyStatic(event)">
            <button onclick="sendUserMessageStatic()" class="ai-send-btn"><i class="fa-solid fa-paper-plane"></i></button>
        `;
    } else {
        container.innerHTML = `
            <input type="text" disabled placeholder="🔒 Unlock Premium to Chat with AI Tutor" style="cursor: not-allowed; opacity: 0.65;">
            <button onclick="openUpgradeModal()" class="ai-send-btn" style="background: var(--accent-premium); color: #0b0f19;"><i class="fa-solid fa-crown"></i></button>
        `;
    }

    // Set welcome message
    const history = document.getElementById("chat-history");
    history.innerHTML = `
        <div class="chat-bubble chat-bubble-ai">
            🤖 <strong>AI Study Companion:</strong><br>
            Hello! I am your AI Study Companion for **${courseData.title}**.<br><br>
            I can summarize this lesson, explain code structures, define vocabulary, or generate an interactive quiz for you.<br><br>
            What would you like to start with?
        </div>
    `;
}

function handleChatKeyStatic(e) {
    if (e.key === "Enter") {
        sendUserMessageStatic();
    }
}

function sendQuickPromptStatic(promptText) {
    const isPremium = localStorage.getItem("is_premium") === "true";
    if (!isPremium) {
        openUpgradeModal();
        return;
    }

    const input = document.getElementById("chat-input");
    if (input) {
        input.value = promptText;
        sendUserMessageStatic();
    }
}

function sendUserMessageStatic() {
    const input = document.getElementById("chat-input");
    if (!input) return;

    const message = input.value.trim();
    if (!message) return;

    appendChatBubbleStatic("user", message);
    input.value = "";

    // Show Loader
    const loader = document.getElementById("ai-typing-indicator");
    loader.style.display = "block";
    scrollChatBottomStatic();

    setTimeout(() => {
        loader.style.display = "none";
        const reply = getTutorResponse(courseId, lessonId, message);
        appendChatBubbleStatic("ai", reply);
        scrollChatBottomStatic();
    }, 700);
}

function appendChatBubbleStatic(sender, text) {
    const pane = document.getElementById("chat-history");
    const bubble = document.createElement("div");
    bubble.className = `chat-bubble chat-bubble-${sender}`;
    
    if (sender === "ai") {
        bubble.innerHTML = parseMarkdownToHTMLStatic(text);
    } else {
        bubble.innerText = text;
    }
    pane.appendChild(bubble);
}

function scrollChatBottomStatic() {
    const pane = document.getElementById("chat-history");
    pane.scrollTop = pane.scrollHeight;
}

function parseMarkdownToHTMLStatic(mdText) {
    let html = mdText;

    html = html
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;");

    // 1. Code blocks: ```python\n[code]\n```
    html = html.replace(/```(python|javascript|css|html)?\n([\s\S]*?)\n```/g, (match, lang, code) => {
        return `<pre><code>${code}</code></pre>`;
    });

    // 2. Inline Code: `code`
    html = html.replace(/`([^`]+)`/g, "<code>$1</code>");

    // 3. Headers: ### Title
    html = html.replace(/^### (.*$)/gim, "<h4>$1</h4>");
    html = html.replace(/^## (.*$)/gim, "<h3>$1</h3>");
    html = html.replace(/^# (.*$)/gim, "<h2>$1</h2>");

    // 4. Bold: **bold**
    html = html.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");

    // 5. Bullet: - point or * point
    html = html.replace(/^\s*[-*]\s+(.*$)/gim, "<li>$1</li>");
    if (html.includes("<li>")) {
        html = html.replace(/(<li>.*<\/li>)/s, "<ul>$1</ul>");
    }

    html = html.replace(/\n/g, "<br>");

    return html;
}

/* ==========================================================================
   AI Smart Quiz Section
   ========================================================================== */

function triggerQuizGenerationStatic() {
    const isPremium = localStorage.getItem("is_premium") === "true";
    if (!isPremium) {
        openUpgradeModal();
        return;
    }

    const modal = document.getElementById("quiz-modal");
    if (!modal) return;

    modal.classList.add("active");

    document.getElementById("quiz-loading-view").style.display = "block";
    document.getElementById("quiz-content-view").style.display = "none";
    document.getElementById("quiz-result-view").style.display = "none";

    setTimeout(() => {
        quizQuestions = getQuizQuestions(courseId, lessonId);
        if (quizQuestions.length > 0) {
            quizIndex = 0;
            quizScoreVal = 0;

            document.getElementById("quiz-loading-view").style.display = "none";
            document.getElementById("quiz-content-view").style.display = "block";
            loadQuestionStatic(0);
        } else {
            alert("No quiz questions available for this module.");
            closeQuizModal();
        }
    }, 800);
}

function loadQuestionStatic(idx) {
    selectedOptIdx = null;
    const qData = quizQuestions[idx];

    document.getElementById("quiz-current-num").innerText = idx + 1;
    document.getElementById("quiz-total-num").innerText = quizQuestions.length;

    // Progress Bar
    const percent = (idx / quizQuestions.length) * 100;
    document.getElementById("quiz-progress-bar").style.width = `${percent}%`;

    document.getElementById("quiz-question").innerText = qData.question;

    // Options
    const optContainer = document.getElementById("quiz-options");
    optContainer.innerHTML = "";

    qData.options.forEach((opt, oIdx) => {
        const btn = document.createElement("button");
        btn.className = "quiz-option";
        btn.innerHTML = `<span style="font-weight: 600; color: var(--accent-cyan); margin-right: 10px;">${String.fromCharCode(65 + oIdx)}.</span> ${opt}`;
        btn.onclick = () => selectOptionStatic(oIdx, btn);
        optContainer.appendChild(btn);
    });

    document.getElementById("quiz-explanation").style.display = "none";
    
    const actionBtn = document.getElementById("quiz-action-btn");
    actionBtn.innerText = "Submit Answer";
    actionBtn.disabled = true;
    actionBtn.onclick = submitAnswerStatic;
}

function selectOptionStatic(oIdx, element) {
    const opts = document.querySelectorAll(".quiz-option");
    opts.forEach(btn => btn.classList.remove("selected"));
    
    element.classList.add("selected");
    selectedOptIdx = oIdx;

    document.getElementById("quiz-action-btn").disabled = false;
}

function submitAnswerStatic() {
    const qData = quizQuestions[quizIndex];
    const correct = qData.correct;
    const isCorrect = selectedOptIdx === correct;

    if (isCorrect) quizScoreVal++;

    const opts = document.querySelectorAll(".quiz-option");
    opts.forEach((btn, oIdx) => {
        btn.onclick = null; // Disable clicking
        if (oIdx === correct) {
            btn.className = "quiz-option correct";
        } else if (oIdx === selectedOptIdx) {
            btn.className = "quiz-option incorrect";
        } else {
            btn.className = "quiz-option";
            btn.style.opacity = "0.5";
        }
    });

    // Explanation
    document.getElementById("quiz-explanation-text").innerText = qData.explanation;
    document.getElementById("quiz-explanation").style.display = "block";

    // Action button adjustment
    const actionBtn = document.getElementById("quiz-action-btn");
    if (quizIndex < quizQuestions.length - 1) {
        actionBtn.innerText = "Next Question";
        actionBtn.onclick = nextQuestionStatic;
    } else {
        actionBtn.innerText = "Compile Results";
        actionBtn.onclick = compileResultsStatic;
    }
}

function nextQuestionStatic() {
    quizIndex++;
    loadQuestionStatic(quizIndex);
}

function compileResultsStatic() {
    document.getElementById("quiz-content-view").style.display = "none";
    
    document.getElementById("quiz-score-val").innerText = quizScoreVal;
    document.getElementById("quiz-score-total").innerText = quizQuestions.length;

    let remark = "";
    const ratio = quizScoreVal / quizQuestions.length;
    if (ratio === 1) {
        remark = "🏆 Flawless performance! You have fully mastered the concepts covered in this module.";
    } else if (ratio >= 0.6) {
        remark = "💡 Strong understanding! Review the lesson details slightly to correct the remaining gaps.";
    } else {
        remark = "📚 Take some time to re-read the course slides. Ask the AI Tutor specific questions to clarify variables!";
    }

    document.getElementById("quiz-result-feedback").innerText = remark;
    document.getElementById("quiz-result-view").style.display = "block";

    // Save score to local storage
    const quizKey = `${courseId}_${lessonId}`;
    let completedQuizzes = JSON.parse(localStorage.getItem("completed_quizzes") || "{}");
    completedQuizzes[quizKey] = quizScoreVal;
    localStorage.setItem("completed_quizzes", JSON.stringify(completedQuizzes));
}

function closeQuizModal() {
    document.getElementById("quiz-modal").classList.remove("active");
    // Reload dashboard indicators if any
}
