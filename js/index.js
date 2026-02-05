const dialog = document.getElementById('modalDialog');
const message = document.getElementById("dialogMessage");
const okBtn = document.getElementById("okBtn");
const noBtn = document.getElementById("cancelBtn");

let mode = "";
let step = "";
let activeChallengeBtn = null;
let currentChallengeBtn = null;

// 挑戦
document.addEventListener("click", (e) => {
    const btn = e.target.closest(".challenge-btn");
    if (!btn) return;

    currentChallengeBtn = btn;

    mode = "challenge";
    step = "confirm";

    const task = btn.dataset.task;
    message.textContent = `${task}に挑戦しますか？`;

    okBtn.textContent = "する";
    noBtn.textContent = "しない";
    noBtn.style.display = "inline-block";

    if (!dialog.open) dialog.showModal();
});

// 完了
document.addEventListener("click", (e) => {
    const finishBtn = e.target.closest(".finish-btn");
    if (!finishBtn) return;

    const taskEl = finishBtn.closest(".btns");
    if (!taskEl) return;

    const challengeBtn = taskEl.querySelector(".challenge-btn");
    if (!challengeBtn) return;

    // 挑戦中じゃなければ無視
    if (!challengeBtn.classList.contains("in-progress")) return;

    mode = "finish";
    step = "confirm";
    activeChallengeBtn = challengeBtn;

    message.textContent = "完了にしますか？";

    okBtn.textContent = "する";
    noBtn.textContent = "しない";
    noBtn.style.display = "inline-block";

    if (!dialog.open) dialog.showModal();
});

// する
okBtn.onclick = () => {
  // 挑戦
    if (mode === "challenge") {
        dialog.close();

        activeChallengeBtn = currentChallengeBtn;
        activeChallengeBtn.textContent = "挑戦中";
        activeChallengeBtn.classList.add("in-progress");

        return;
    }

  // 完了
    if (mode === "finish") {
        if (step === "confirm") {
            step = "complete";
            message.textContent = "完了！";

            okBtn.textContent = "OK";
            noBtn.style.display = "none";
        } 
        else {
            dialog.close();

            activeChallengeBtn.textContent = "挑戦する";
            activeChallengeBtn.classList.remove("in-progress");
            activeChallengeBtn = null;
        }
    }
};

// しない
noBtn.onclick = () => {
    dialog.close();
};