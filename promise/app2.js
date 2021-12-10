async function showAvatar() {

    const xhr = new XMLHttpRequest()

    xhr.open('GET', 'https://learn.javascript.ru/article/promise-chaining/user.json');
    
    xhr.onreadystatechange = () => {
        
        console.log(xhr.responseText);
    }

    xhr.send();
}

showAvatar();