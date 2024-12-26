console.log("JavaScript подключён!");

document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("modal");
    const openModalButton = document.querySelector(".button-i-os .label");
    const closeModalButton = document.getElementById("close-modal");
  
    // Проверяем, что кнопка открытия найдена
    console.log("Кнопка открытия:", openModalButton);
  
    // Открытие модального окна
    openModalButton.addEventListener("click", () => {
      console.log("Кнопка открытия нажата!");
      modal.classList.add("visible");
      console.log("Добавлен класс 'visible':", modal.classList);
    });
  
    // Закрытие модального окна
    closeModalButton.addEventListener("click", () => {
      console.log("Кнопка закрытия нажата!");
      modal.classList.remove("visible");
      console.log("Класс 'visible' удалён:", modal.classList);
    });
  });