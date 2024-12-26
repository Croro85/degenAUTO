console.log("JavaScript подключён!");

document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("modal");
    const openModalButton = document.querySelector(".button-i-os"); // Кликаем по родительскому элементу
    const closeModalButton = document.getElementById("close-modal"); // Кнопка закрытия модального окна

    // Открытие модального окна
    openModalButton.addEventListener("click", () => {
        console.log("Кнопка открытия нажата!"); // Проверка
        modal.classList.add("visible"); // Показываем модальное окно
    });

    // Закрытие модального окна
    closeModalButton.addEventListener("click", () => {
        console.log("Кнопка закрытия нажата!"); // Проверка
        modal.classList.remove("visible"); // Скрываем модальное окно
    });
});
console.log(document.querySelector(".button-i-os .label"))