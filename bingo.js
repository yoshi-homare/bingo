"use strict";

{
  // 1-15,16-30,31-45,46-60,61-75の数字を取得。
  // 1行に1-15を5列にランダムに配置。
  function createColumn(col) {
    const source = [];
    for (let i = 0; i < 15; i++) {
      source[i] = i + 1 + 15 * col;
    }
    const column = [];
    for (let i = 0; i < 5; i++) {
      column[i] = source.splice(
        Math.floor(Math.random() * source.length), 1)[0];
    }
    return column;
  };

  // 上のランダムに配置した行をそれぞれの数字5行分配置し真ん中にFREEを挿入。
  function createColumns() {
    const columns = [];
    for (let i = 0; i < 5; i++) {
      columns[i] = createColumn(i);
    }
    columns[2][2] = "FREE";
    return columns;
  };

  // 各行にtrタグを作成し各行にtdタグを作成し中に上のランダムの数字を行と列を入れ替えて挿入しtrタグにtdタグを挿入しhtmlのtbodyタグを取得しそこにtrタグを挿入。
  function renderBingo(columns) {
    for (let row = 0; row < 5; row++) {
      const tr = document.createElement("tr");
      for (let col = 0; col < 5; col++) {
        const td = document.createElement("td");
        td.textContent = columns[col][row];
        tr.appendChild(td);
      }
      document.querySelector("tbody").appendChild(tr);
    }
  };

  const columns = createColumns();
  renderBingo(columns);
}
