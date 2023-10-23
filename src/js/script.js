document.addEventListener("DOMContentLoaded", function () {

    // if (document.location.href.includes("/index.html")) {
    //     history.pushState({}, "", "/");
    // }

    document.title = "Bio <3"
    const profileDiv = document.createElement("div");
    profileDiv.className = "profile";

    const img = document.createElement("img");
    img.src = "src/img/img.jpg";
    img.alt = "profile";

    const h2 = document.createElement("h2");
    h2.textContent = "cazqev";

    const p = document.createElement("p");
    p.className = "description";
    p.innerHTML = "Python developer. From Ukraine.<br><br><code id='description__second' onmouseover='onMouseOver()' onmouseout='onMouseOut()' onclick='onClick()'>Logica a puncto A ad punctum B te auferre potest, et imaginatio alicub</code>";


    const buttonsGroup = document.createElement("div");
    buttonsGroup.className = "buttons__group"


    const telegramButton = document.createElement("a");
    telegramButton.href = "tg://resolve?domain=cazqev";
    telegramButton.className = "telegram-button";
    telegramButton.textContent = "Telegram";

    const githubButton = document.createElement("a");
    githubButton.href = "https://github.com/frymex"
    githubButton.className = 'github-button'
    githubButton.textContent = "Github"


    profileDiv.appendChild(img);
    profileDiv.appendChild(h2);
    profileDiv.appendChild(p);

    buttonsGroup.appendChild(telegramButton)
    buttonsGroup.appendChild(githubButton)

    profileDiv.appendChild(buttonsGroup);

    document.body.appendChild(profileDiv);
});

const texts = {
    ru_text: "Логика может привести вас из точки А в точку Б, а воображение — куда угодно.",
    lat_text: "Logica a puncto A ad punctum B te auferre potest, et imaginatio alicub"
}

function onClick() {
    const codeElement = document.getElementById('description__second');

    if (codeElement.innerText === texts.lat_text) {
        codeElement.innerText = texts.ru_text;
    } else {
        codeElement.innerText = texts.lat_text;
    }
}

function onMouseOver() {
    const codeElement = document.getElementById('description__second');
    codeElement.innerText = texts.ru_text;
}

function onMouseOut() {
    const codeElement = document.getElementById('description__second');
    codeElement.innerText = texts.lat_text;
}

