document.getElementById("createBtn").onclick = () => {
    const name = document.getElementById("planName").value;
    const amount = document.getElementById("amount").value;
    const goal = document.getElementById("goal").value;
    const periodSelect = document.getElementById("period");
    const save = document.getElementById("save").value;

    if (!name || !period || !amount) {
        alert("すべて入力してください");
        return;
    }

    const plan = {
        name,
        amount: Number(amount),
        goal,
        period: periodSelect.options[periodSelect.selectedIndex].text,
        save
    };

    // プラン取得
    const plans = JSON.parse(localStorage.getItem("plans")) || [];

    // 追加
    plans.push(plan);

    // 保存
    localStorage.setItem("plans", JSON.stringify(plans));

    // 一覧ページ
    location.href = "plan_add.html";
};
