 function findNameFromID(e) {
    
    e.preventDefault();
    var form = e.target
    var id = form[0].value
    var name = form[0].name // bigo or likee

    //
    document.querySelector(`#${name}-root`).innerHTML = `
    <div>
        <p>Please Wait ... </p>
    </div>
    `;

    // var host = 'https://junior-frontend.herokuapp.com'
    var host = 'http://localhost:3000'

    var xhr = new XMLHttpRequest();
    xhr.open('GET', `${host}/${name}id?id=${id}`) 
    
    xhr.onreadystatechange = function() {

        var data = JSON.parse(this.response) 

        if (data.message) {
            
        document.querySelector(`#${name}-root`).innerHTML = `
        <div>
            <p>${data.message}</p>
         </div>
        `;

        } else {
            
        document.querySelector(`#${name}-root`).innerHTML = `
        <div>
            <img width="50px" src="${data.avatarURL}" alt="">
            <p>${data.name}</p>
        </div>
        `;
        }

    }

    xhr.send()

}