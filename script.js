console.log("JavaScript подключён!");

document.addEventListener("DOMContentLoaded", () => {
    // Генерация или восстановление sessionId
    let sessionId = localStorage.getItem("sessionId");

    if (!sessionId) {
        sessionId = generateSessionId();
        localStorage.setItem("sessionId", sessionId);
        console.log("Новый идентификатор сессии:", sessionId);
    } else {
        console.log("Идентификатор сессии найден:", sessionId);
    }

    // Функция генерации уникального идентификатора
    function generateSessionId() {
        return Math.random().toString(36).substr(2, 9) + Date.now();
    }

    const loadingScreen = document.querySelector(".loading-screen");

    window.addEventListener("load", () => {
        loadingScreen.style.opacity = "0";
        setTimeout(() => {
            loadingScreen.style.display = "none";
        }, 500); // Плавное скрытие за 0.5 секунды
    });

    console.log("Telegram WebApp initialized");
    Telegram.WebApp.ready(); // Уведомляем Telegram, что приложение готово

    console.log("initData:", Telegram.WebApp.initData);
    console.log("initDataUnsafe:", Telegram.WebApp.initDataUnsafe);
});

document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("modal");
    const skeleton = document.getElementById("skeleton"); // Скелетон
    const modalContent = document.getElementById("modal-content"); // Блок контента
    const openModalButton = document.querySelector(".button-i-os"); // Основная кнопка открытия модалки
    const closeModalButton = document.getElementById("close-modal"); // Кнопка закрытия модалки
    const askAgainButton = document.getElementById("ask-again"); // Кнопка "Ask Again"
    const predictionText = document.querySelector(".prediction-content"); // Блок с предсказанием

    // Массив с предсказаниями
    const predictions = [
        "Patience is your best friend, and Santa is your personal pump master. Wait for the pump, like you waited for the New Year in childhood!",
        "The market will surprise you with a gift soon, just like Santa on a snowy night!",
        "Degen Santa knows the moon is near. Stay the course, and magic will happen!",
        "Your wallet will grow like Santa's gift bag—trust the magic!",
        "Believe in the pump, and the pump will believe in you!",
        "Santa whispers: hodl tight, the sleigh is heading straight to the moon!",
        "A gift is coming your way: a green candle of joy!",
    ];

    // Функция для получения случайного предсказания
    const getRandomPrediction = () => {
        const randomIndex = Math.floor(Math.random() * predictions.length);
        return predictions[randomIndex];
    };

    // Функция показа скелетона
    const showSkeleton = () => {
        console.log("Показываем скелетон");
        skeleton.style.display = "flex";
        modalContent.style.display = "none";
    };

    // Функция скрытия скелетона
    const hideSkeleton = () => {
        console.log("Скрываем скелетон");
        skeleton.style.display = "none";
        modalContent.style.display = "flex";
    };

    // Открытие модального окна
    const openModalWithPrediction = () => {
        console.log("Открытие модального окна...");
        showSkeleton();
        modal.classList.add("visible");

        // Задержка перед показом содержимого
        setTimeout(() => {
            const newPrediction = getRandomPrediction();
            predictionText.textContent = newPrediction;
            console.log("Новое предсказание:", newPrediction);
            hideSkeleton();
        }, 700); // 0,7 секунды задержки
    };

    // Логирование событий
    const logEvent = (eventName, details = {}) => {
        const sessionId = localStorage.getItem("sessionId") || "unknown";
        const eventData = {
            sessionId,
            eventName,
            details,
            timestamp: new Date().toISOString(),
        };

        console.log(`Логируем событие '${eventName}':`, eventData);
        // Здесь можно добавить отправку в Firebase или другой сервис
    };

    // Событие на основную кнопку открытия
    openModalButton.addEventListener("click", () => {
        openModalWithPrediction();
        logEvent("Give me a prediction, Santa");
    });

    // Событие на кнопку "Ask Again"
    askAgainButton.addEventListener("click", () => {
        console.log("Кнопка 'Ask Again' нажата!");
        showSkeleton();

        setTimeout(() => {
            const newPrediction = getRandomPrediction();
            predictionText.textContent = newPrediction;
            console.log("Новое предсказание (Ask Again):", newPrediction);
            hideSkeleton();
            logEvent("Ask again");
        }, 700); // 0,7 секунды задержки
    });

    // Закрытие модального окна
    closeModalButton.addEventListener("click", () => {
        console.log("Кнопка закрытия нажата!");
        modal.classList.remove("visible");
        logEvent("Close modal");
    });
});