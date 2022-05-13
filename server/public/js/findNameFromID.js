 function findNameFromID(e) {
    
    // prevent reload browser while submiting 
    e.preventDefault();

    // get the id from client
    var form = e.target
    var id = form[0].value 

    // set loading mode 
    document.querySelector(`#likee-root`).innerHTML = `
    <div>
        <p>Please Wait ... </p>
    </div>
    `;
 

    // create ajax request to call `/likeeid` API 
    var xhr = new XMLHttpRequest();
    xhr.open('GET', `http://localhost:3000/likeeid?id=${id}`) 
    
    xhr.onreadystatechange = function() {

        var data = JSON.parse(this.response) 

        //
        if (data.message) {
            
            // response: fetch error 
            document.querySelector(`#likee-root`).innerHTML = `
            <div>
                <p>${data.message}</p>
            </div>
            `;

        } else {
            
            // response: fetch success
            document.querySelector(`#likee-root`).innerHTML = `
            <div>
                <img width="50px" src="${data.avatarURL}" alt="">
                <p>${data.name}</p>
            </div>
            `;

        }

    }

    xhr.send()

}