const list = [
    '02.01.2022-/-второй день',
    '01.01.2022-/-новый год',
    '03.01.2022-/-третий день',
    '31.12.2022-/-какой-то день',
    '04.04.2022-/-какой-то день',
    '25.08.2022-/-какой-то день',
    '08.10.2022-/-какой-то день',
    '07.07.2022-/-какой-то день',
    '16.07.2022-/-еще какой-то день',
    '23.11.2022-/-какой-то день',
    '17.04.2022-/-какой-то день',
    '05.04.2022-/-какой-то день',
    '19.05.2022-/-какой-то день',
    '08.08.2022-/-еще какой-то день',
];

const block = document.querySelector('.block');
list.forEach((item) => {
    const listItem = document.createElement('div');
    listItem.textContent = item;
    block.appendChild(listItem);
});

const sortButton = document.querySelector('.sort-button');
const blockSort = document.querySelector('.block-sort');
sortButton.addEventListener('click', () => {
    const sortedList = sortList(list);
    sortedList.forEach((item) => {
        const listItem = document.createElement('div');
        listItem.textContent = item;
        blockSort.appendChild(listItem);
    });
});

function sortList(list) {
    return list.sort((a, b) => {
        // Отрезаем текст описания и извлекаем значения дат
        const [dateA] = a.split('-/-');
        const [dateB] = b.split('-/-');

        // Извлекаем день и месяц
        const [dayA, monthA] = dateA.split('.').map(Number);
        const [dayB, monthB] = dateB.split('.').map(Number);

        // Сортируем по месяцу, затем по дню
        return monthA - monthB || dayA - dayB;
    });
}