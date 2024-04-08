fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => json.forEach(item => addCardData(item)))


      function addCardData(item) {
        const template = document.getElementById("card-template").content.cloneNode(true);
        template.querySelector('.card-title').innerText = item.name;
        template.querySelector('.card-text').innerText = item.username;
        document.querySelector('#card-container').appendChild(template);
    }
