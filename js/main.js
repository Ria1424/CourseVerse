/* ==========================================================================
   Courseverse Static Client-Side State Synchronizer (main.js)
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {
    initializeSession();
    updateHeaderUI();
});

/**
 * Initializes localStorage keys if not present.
 */
function initializeSession() {
    if (localStorage.getItem("is_premium") === null) {
        localStorage.setItem("is_premium", "false");
    }
    if (localStorage.getItem("enrolled_courses") === null) {
        localStorage.setItem("enrolled_courses", JSON.stringify({}));
    }
    if (localStorage.getItem("completed_quizzes") === null) {
        localStorage.setItem("completed_quizzes", JSON.stringify({}));
    }
    if (localStorage.getItem("profile_interests") === null) {
        localStorage.setItem("profile_interests", JSON.stringify([]));
    }
}

/**
 * Dynamic nav header renderer based on client storage tier.
 */
function updateHeaderUI() {
    const membershipSection = document.getElementById("nav-membership-section");
    if (!membershipSection) return;

    const isPremium = localStorage.getItem("is_premium") === "true";

    if (isPremium) {
        membershipSection.innerHTML = `<span class="nav-badge-premium"><i class="fa-solid fa-crown"></i> PRO</span>`;
    } else {
        membershipSection.innerHTML = `
            <span class="nav-badge-free">Starter</span>
            <button onclick="openUpgradeModal()" class="btn btn-primary btn-sm btn-glow">Go Premium</button>
        `;
    }
}

/**
 * Checkout modal openers.
 */
function openUpgradeModal() {
    const modal = document.getElementById("checkout-modal");
    if (modal) {
        document.getElementById("checkout-modal-form").style.display = "block";
        document.getElementById("checkout-success-view").style.display = "none";
        modal.classList.add("active");
    }
}

function closeUpgradeModal() {
    const modal = document.getElementById("checkout-modal");
    if (modal) {
        modal.classList.remove("active");
    }
}

/**
 * Payment confirmation simulation.
 */
function confirmUpgrade(e) {
    if (e) e.preventDefault();

    const btn = document.querySelector("#checkout-modal-form .btn-premium");
    const originalText = btn.innerHTML;
    btn.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i> Processing...`;
    btn.disabled = true;

    // Simulate network delay
    setTimeout(() => {
        localStorage.setItem("is_premium", "true");
        document.getElementById("checkout-modal-form").style.display = "none";
        document.getElementById("checkout-success-view").style.display = "block";
        updateHeaderUI();
    }, 800);
}

function closeUpgradeSuccess() {
    closeUpgradeModal();
    window.location.reload();
}

/**
 * Downgrades account locally.
 */
function downgradeSubscription(e) {
    if (e) e.preventDefault();

    if (!confirm("Are you sure you want to cancel your Premium membership? You will lose access to all premium courses and AI utilities.")) {
        return;
    }

    localStorage.setItem("is_premium", "false");
    alert("Your membership has been downgraded to Free Starter.");
    window.location.reload();
}

/**
 * Flushes session database back to defaults.
 */
function resetSubscription(e) {
    if (e) e.preventDefault();

    if (!confirm("Reset all course progress, completed quizzes, and premium tier settings? This will wipe your localStorage cache.")) {
        return;
    }

    localStorage.clear();
    alert("Local database reset successfully. Returning to Home.");
    window.location.href = "index.html";
}
