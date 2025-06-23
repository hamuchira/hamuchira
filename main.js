const colors = [
  { name: "ノーマル", genes: "BBMMYYWW" },
  { name: "パールホワイト", genes: "bbMMyyWW" },
  { name: "プディング", genes: "BBMMYYww" },
  { name: "ブルーサファイア", genes: "bbmmYYWW" },
  { name: "クリーミーライン", genes: "BBMMYyWw" },
  { name: "モカブラウン", genes: "BbMmYyww" },
  { name: "サファイアパール", genes: "bbmmYyWw" } // スノーホワイト → サファイアパールへ変更済
];

function showTab(id) {
  document.querySelectorAll('.tab').forEach(tab => tab.classList.remove('active'));
  document.getElementById(id + 'Tab').classList.add('active');
}

function renderList() {
  const list = document.getElementById("colorList");
  list.innerHTML = "";
  colors.forEach(c => {
    const li = document.createElement("li");
    li.textContent = `${c.name}（遺伝子型: ${c.genes}）`;
    list.appendChild(li);
  });
}

function populateSelects() {
  const selects = [document.getElementById("parent1"), document.getElementById("parent2")];
  selects.forEach(select => {
    select.innerHTML = "";
    colors.forEach(c => {
      const option = document.createElement("option");
      option.value = c.genes;
      option.textContent = c.name;
      select.appendChild(option);
    });
  });
}

function searchCombinations() {
  const g1 = document.getElementById("parent1").value;
  const g2 = document.getElementById("parent2").value;
  const results = document.getElementById("results");
  results.innerHTML = `<p>選択された遺伝子: ${g1} × ${g2}</p><p>※ 判定ロジックは近日実装予定です。</p>`;
}

renderList();
populateSelects();