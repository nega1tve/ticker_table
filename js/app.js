$(document).ready(function () {
  $("#table").DataTable();
});

// const select = document.querySelector("select");
// const input = document.querySelector("input");
// const sellBtn = document.getElementById("SELL");
// const buyBtn = document.getElementById("BUY");

// Создаем контейнер
const container = document.createElement("div");
container.classList.add("container");

// Создаем тикер
const ticker = document.createElement("div");
ticker.classList.add("ticker");

// Создаем выбор торгового инструмента
const tradingAsset = document.createElement("div");
tradingAsset.classList.add("ticker--trading-asset");

const select = document.createElement("select");

const option1 = document.createElement("option");
option1.value = "CNH/RUB";
option1.text = "CNH/RUB";

const option2 = document.createElement("option");
option2.value = "EUR/RUB";
option2.text = "EUR/RUB";

const option3 = document.createElement("option");
option3.value = "EUR/USD";
option3.text = "EUR/USD";

const option4 = document.createElement("option");
option4.value = "USD/RUB";
option4.text = "USD/RUB";

const option5 = document.createElement("option");
option5.value = "TRY/RUB";
option5.text = "TRY/RUB";

select.appendChild(option1);
select.appendChild(option2);
select.appendChild(option3);
select.appendChild(option4);
select.appendChild(option5);

tradingAsset.appendChild(select);

// Создаем ввод объема торгов
const volume = document.createElement("div");
volume.classList.add("ticker--volume");

const input = document.createElement("input");
input.type = "text";
input.value = "100 000";

volume.appendChild(input);

// Создаем кнопки покупки/продажи
const options = document.createElement("div");
options.classList.add("ticker--options");

const optionItem1 = document.createElement("div");
optionItem1.classList.add("option-item");

const p1 = document.createElement("p");
p1.textContent = "50";

const button1 = document.createElement("button");
button1.id = "SELL";
button1.textContent = "SELL";

optionItem1.appendChild(p1);
optionItem1.appendChild(button1);

const optionItem2 = document.createElement("div");
optionItem2.classList.add("option-item");

const p2 = document.createElement("p");
p2.textContent = "60";

const button2 = document.createElement("button");
button2.id = "BUY";
button2.textContent = "BUY";

optionItem2.appendChild(p2);
optionItem2.appendChild(button2);

options.appendChild(optionItem1);
options.appendChild(optionItem2);

ticker.appendChild(tradingAsset);
ticker.appendChild(volume);
ticker.appendChild(options);

container.appendChild(ticker);

// Добавляем контейнер на страницу
document.body.appendChild(container);

const tableContainer = document.createElement("div");
tableContainer.classList.add("table");

const table = document.createElement("table");
table.id = "table";

// Создаем заголовки столбцов
const thead = document.createElement("thead");
const headerRow = document.createElement("tr");

const headers = [
  "ID",
  "Creation time",
  "Status",
  "Side",
  "Price",
  "Amount",
  "Instrument",
];

for (const header of headers) {
  const th = document.createElement("th");
  th.textContent = header;
  headerRow.appendChild(th);
}

thead.appendChild(headerRow);

// Создаем содержимое таблицы
const tbody = document.createElement("tbody");

const row = document.createElement("tr");

const data1 = document.createElement("td");
data1.textContent = "1";

const data2 = document.createElement("td");
data2.textContent = "2023-02-28 10:00:00";

const data3 = document.createElement("td");
data3.textContent = "Active";

const data4 = document.createElement("td");
data4.textContent = "Buy";

const data5 = document.createElement("td");
data5.textContent = "100";

const data6 = document.createElement("td");
data6.textContent = "10";

const data7 = document.createElement("td");
data7.textContent = "CNH/RUB";

row.appendChild(data1);
row.appendChild(data2);
row.appendChild(data3);
row.appendChild(data4);
row.appendChild(data5);
row.appendChild(data6);
row.appendChild(data7);

tbody.appendChild(row);

table.appendChild(thead);
table.appendChild(tbody);

tableContainer.appendChild(table);

// Добавляем таблицу в контейнер
container.appendChild(tableContainer);

// Создаем первую строку
const row2 = document.createElement("tr");

const data8 = document.createElement("td");
data8.textContent = "2";

const data9 = document.createElement("td");
data9.textContent = "2023-02-28 11:30:00";

const data10 = document.createElement("td");
data10.textContent = "Filled";

const data11 = document.createElement("td");
data11.textContent = "Sell";

const data12 = document.createElement("td");
data12.textContent = "150";

const data13 = document.createElement("td");
data13.textContent = "5";

const data14 = document.createElement("td");
data14.textContent = "CNH/RUB";

row2.appendChild(data8);
row2.appendChild(data9);
row2.appendChild(data10);
row2.appendChild(data11);
row2.appendChild(data12);
row2.appendChild(data13);
row2.appendChild(data14);

// Добавляем первую строку в таблицу
tbody.appendChild(row2);

// Создаем вторую строку
const row3 = document.createElement("tr");

const data15 = document.createElement("td");
data15.textContent = "3";

const data16 = document.createElement("td");
data16.textContent = "2023-02-28 12:15:00";

const data17 = document.createElement("td");
data17.textContent = "Cancelled";

const data18 = document.createElement("td");
data18.textContent = "Buy";

const data19 = document.createElement("td");
data19.textContent = "200";

const data20 = document.createElement("td");
data20.textContent = "3";

const data21 = document.createElement("td");
data21.textContent = "USD/RUB";

row3.appendChild(data15);
row3.appendChild(data16);
row3.appendChild(data17);
row3.appendChild(data18);
row3.appendChild(data19);
row3.appendChild(data20);
row3.appendChild(data21);

// Добавляем вторую строку в таблицу
tbody.appendChild(row3);

select.addEventListener("change", function () {
  if (select.value === "CNH/RUB") {
    p1.textContent = "8.570";
    p2.textContent = "8.559";
  } else if (select.value === "EUR/RUB") {
    p1.textContent = "79.9";
    p2.textContent = "80.7";
  } else if (select.value === "EUR/USD") {
    p1.textContent = "0.94";
    p2.textContent = "1.06";
  } else if (select.value === "USD/RUB") {
    p1.textContent = "73.59";
    p2.textContent = "74.89";
  } else if (select.value === "TRY/RUB") {
    p1.textContent = "2.92";
    p2.textContent = "3.97";
  }
});
