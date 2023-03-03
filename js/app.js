$(document).ready(function () {
  $("#table").DataTable();
});

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

const inputVolume = document.createElement("input");
inputVolume.type = "text";
inputVolume.value = "100 000";

volume.appendChild(inputVolume);

// Создаем кнопки покупки/продажи
const options = document.createElement("div");
options.classList.add("ticker--options");

const optionItem1 = document.createElement("div");
optionItem1.classList.add("option-item");

const p1 = document.createElement("p");
p1.textContent = "8.570";

const buttonSell = document.createElement("button");
buttonSell.id = "SELL";
buttonSell.textContent = "SELL";

optionItem1.appendChild(p1);
optionItem1.appendChild(buttonSell);

const optionItem2 = document.createElement("div");
optionItem2.classList.add("option-item");

const p2 = document.createElement("p");
p2.textContent = "8.559";

const buttonBuy = document.createElement("button");
buttonBuy.id = "BUY";
buttonBuy.textContent = "BUY";

optionItem2.appendChild(p2);
optionItem2.appendChild(buttonBuy);

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
data4.classList.add(data4.textContent === "Buy" ? "cell--buy" : "cell--sell");

const data5 = document.createElement("td");
data5.textContent = "8.559";
data5.classList.add(data4.textContent === "Buy" ? "cell--buy" : "cell--sell");

const data6 = document.createElement("td");
data6.textContent = "10";
data6.classList.add(data4.textContent === "Buy" ? "cell--buy" : "cell--sell");

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
data11.classList.add(data11.textContent === "Buy" ? "cell--buy" : "cell--sell");

const data12 = document.createElement("td");
data12.textContent = "8.570";
data12.classList.add(data11.textContent === "Buy" ? "cell--buy" : "cell--sell");

const data13 = document.createElement("td");
data13.textContent = "5";
data13.classList.add(data11.textContent === "Buy" ? "cell--buy" : "cell--sell");

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
data18.classList.add(data18.textContent === "Buy" ? "cell--buy" : "cell--sell");

const data19 = document.createElement("td");
data19.textContent = "74.89";
data19.classList.add(data18.textContent === "Buy" ? "cell--buy" : "cell--sell");

const data20 = document.createElement("td");
data20.textContent = "3";
data20.classList.add(data18.textContent === "Buy" ? "cell--buy" : "cell--sell");

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

// Создаем четвертую строку
const row4 = document.createElement("tr");

const data22 = document.createElement("td");
data22.textContent = "4";

const data23 = document.createElement("td");
data23.textContent = "2023-03-03 11:15:00";

const data24 = document.createElement("td");
data24.textContent = "Rejected";

const data25 = document.createElement("td");
data25.textContent = "Sell";
data25.classList.add(data25.textContent === "Buy" ? "cell--buy" : "cell--sell");

const data26 = document.createElement("td");
data26.textContent = "73.59";
data26.classList.add(data25.textContent === "Buy" ? "cell--buy" : "cell--sell");

const data27 = document.createElement("td");
data27.textContent = "3";
data27.classList.add(data25.textContent === "Buy" ? "cell--buy" : "cell--sell");

const data28 = document.createElement("td");
data28.textContent = "USD/RUB";

row4.appendChild(data22);
row4.appendChild(data23);
row4.appendChild(data24);
row4.appendChild(data25);
row4.appendChild(data26);
row4.appendChild(data27);
row4.appendChild(data28);

// Добавляем четвертую строку в таблицу
tbody.appendChild(row4);

// Изменение отображаемых значений в соответсвии с валютной парой
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

// Расчет текущей цены для Покупки
buttonBuy.addEventListener("click", function () {
  let price = Number(trimmedStr()) * Number(p2.textContent);

  console.log(price);

  overlay.classList.toggle("active");
  outputPrice.textContent = `Покупка ${select.value} при объеме ${inputVolume.value} будет составлять: ${price}`;
  divOverlayP.appendChild(outputPrice);
  divOverlayConfirm.appendChild(confirm);
});

// Расчет текущей цены для Продажи
buttonSell.addEventListener("click", function () {
  let price = Number(trimmedStr()) * Number(p1.textContent);

  console.log(price);

  overlay.classList.toggle("active");
  outputPrice.textContent = `Продажа ${select.value} при объеме ${inputVolume.value} будет составлять: ${price}`;
  divOverlayP.appendChild(outputPrice);
  divOverlayConfirm.appendChild(confirm);
});

// Удаление пробелов из строки
const trimmedStr = function () {
  let str = inputVolume.value;
  let arr = str.split(" ");
  let trimmedStr = arr.join("");
  return trimmedStr;
};

// Создаём исходящую информацию о конечной стоимости сделки
const outputPrice = document.createElement("p");
outputPrice.id = "outputPrice";

// Создаем кнопку подтверждения сделки
const confirm = document.createElement("button");
confirm.id = "confirm";
confirm.textContent = "Confirm";

//Создание оверлея
const overlay = document.createElement("div");
overlay.id = "overlay";
ticker.appendChild(overlay);

// Добавления кнопки закрытия оверлея
const overlayCloseBtn = document.createElement("button");

// Создание иконки
const overlayCloseIcon = document.createElement("i");
overlayCloseIcon.classList.add("fa-light", "fa-square-xmark");

const divOverlayCloseBtn = document.createElement("div");
const divOverlayP = document.createElement("div");
const divOverlayConfirm = document.createElement("div");

divOverlayCloseBtn.classList.add("overlay--close-btn");
divOverlayP.classList.add("overlay--p");
divOverlayConfirm.classList.add("overlay--confirm");

overlay.appendChild(divOverlayCloseBtn);
overlay.appendChild(divOverlayP);
overlay.appendChild(divOverlayConfirm);

divOverlayCloseBtn.appendChild(overlayCloseBtn);

overlayCloseBtn.addEventListener("click", () => {
  overlay.classList.remove("active");
});

// Создание "Х"
var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
svg.setAttribute("width", "16");
svg.setAttribute("height", "16");
svg.setAttribute("viewBox", "0 0 16 16");

var line1 = document.createElementNS("http://www.w3.org/2000/svg", "line");
line1.setAttribute("x1", "0");
line1.setAttribute("y1", "0");
line1.setAttribute("x2", "16");
line1.setAttribute("y2", "16");
line1.setAttribute("stroke", "black");
line1.setAttribute("stroke-width", "2");

var line2 = document.createElementNS("http://www.w3.org/2000/svg", "line");
line2.setAttribute("x1", "0");
line2.setAttribute("y1", "16");
line2.setAttribute("x2", "16");
line2.setAttribute("y2", "0");
line2.setAttribute("stroke", "black");
line2.setAttribute("stroke-width", "2");
svg.appendChild(line1);
svg.appendChild(line2);

overlayCloseBtn.appendChild(svg);
