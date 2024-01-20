// 2. Воспользуемся открытым API — [JSONplaceholder](https://jsonplaceholder.typicode.com/). От этого API можно получить тестовые данные: строки, данные пользователя, набор постов. И все они будут лишены смысла — это идеально для тренировки.
//     Нужно получить с сервера список постов и отобразить его на странице. 
//     Создайте функции:
//     - получает на вход объект поста и возвращает строку HTML-разметки;
//     - добавляет полученную разметку в полученный контейнер;
//     - делает GET запрос по адресу `https://jsonplaceholder.typicode.com/posts` и добавит их на страницу (для этого примените метод `forEach` и функции созданные ранее).

function showText() {
	fetch('https://jsonplaceholder.typicode.com/posts/', {
		method: 'GET'
	})
	.then(response => response.json())
	.then((data) => {
        const container = document.querySelector(".container");
        data.forEach(element => {
            container.innerHTML += `
                <h2>Title: ${element.title}</h2>
                <p>Text: ${element.body}</p>
                `
        });
    })
	.catch(error => console.log(error));

}
showText();