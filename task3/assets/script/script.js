// Создайте программу, которая будет добавлять посты на страницу. 
//Для этого нам понадобится метод POST. 
//Чтобы понять, какой метод использовать и как, нужно посмотреть в документации к API. 
//У сервиса JSONplaceholder есть документация, даже с примерами запросов.

// // как сделать POST-запрос, чтобы создать пост
// fetch('https://jsonplaceholder.typicode.com/posts', {
//     method: 'POST',
//     body: JSON.stringify({
//       title: 'foo',
//       body: 'bar',
//       userId: 1
//     }),
//     headers: {
//       "Content-type": "application/json; charset=UTF-8"
//     }
//   })
//   .then(response => response.json())
//   .then(json => console.log(json))

// // то такой запрос вернёт
// {
//   id: 101,
//   title: 'foo',
//   body: 'bar',
//   userId: 1
// }

// Вам нужно написать функцию для создания постов, в ней должен быть вызов `fetch`, с двумя обработчиками then, который:

// - делает POST-запрос по адресу https://jsonplaceholder.typicode.com/posts ;
// - с телом — JSON с двумя свойствами `title` и `body` ;
// - со свойством `headers` с единственным заголовком: `'Content-Type': 'application/json; charset=UTF-8'` ;
// - добавляет созданный пост в DOM.

function createPost() {
    const post = {
        title: document.getElementById('inputTitle').value.replace(/ |[#^&*_+=\/<>|`~"]/g, ' '),
        body: document.getElementById('inputText').value.replace(/ |[#^&*_+=\/<>|`~"]/g, ' ')
    };

    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json; charset=UTF-8'
        },
        body: JSON.stringify(post)
    })
    .then(response => response.json())
    .then(data => {
        document.querySelector('.container').innerHTML += `
        <div class="post">
            <h2>${data.title}</h2>
            <p>${data.body}</p>
        </div>
        `;
    })
    .catch(error => {
        console.error('Error:', error);
    });

    document.getElementById('inputTitle').value = "";
    document.getElementById('inputText').value = "";
}

document.querySelector('.create').addEventListener("click", createPost);