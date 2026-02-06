document.addEventListener("DOMContentLoaded", () => {
    const plans = JSON.parse(localStorage.getItem("plans")) || [];

    if (plans.length === 0) return;

    const plan = plans[plans.length - 1];

    document.getElementById("viewPlanName").textContent = plan.name;
    document.getElementById("viewAmount").textContent = plan.amount;
    document.getElementById("viewGoal").textContent = plan.goal;
    document.getElementById("viewPeriod").textContent = plan.period;
    document.getElementById("viewSave").textContent = plan.save;
});
