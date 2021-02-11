

/*
    FUNCTION TO SHOW DATA FROM BACKEND
*/

function view_Image(u, c, s, div, id)
{
    var l1 = document.createElement("label");
        var l2 = document.createElement("label");
        var img = new Image(450, 300);

        img.src = s;
        l1.innerHTML = "user: " + u + "<br>";
        l2.innerHTML = "caption: " + c + "<br>";
        l1.style.fontSize = 20;

        var br = document.createElement('label');
        br.innerHTML = "<br>" + "<br>" + "<br>" + "\n";
        
        
        div.style.marginLeft=70;

        var tdiv = document.createElement("div");
        div.appendChild(l1);
        div.appendChild(l2);
        div.appendChild(img);
        div.append(br);
    return div;
}





/* 
    FUNCTION TO RETRIVE DATA FROM BACKEND 
*/
async function getfromBackend(){

    api_url = "http://127.0.0.1:8000/api/mydatabase/view-data/memes/?format=json"

    lst = []

    await fetch(api_url).then(function(response){
        response.json()
        .then(function(data)
        {
            var div = document.getElementById("divimage");
            for(var i in data)
            {
                id = data[i]['id'];
                user = data[i]['username'];
                cap = data[i]['caption'];
                src = data[i]['src'];
                a = [];
                a.push(user);
                a.push(cap);
                a.push(src);
                lst.push(a);
                // document.getElementById('show_username').innerHTML = user;
                div = view_Image(user, cap, src, div, id);

            }
        })
    }).catch(function(error){
        console.log('Fetch error: ', error);
    });

    return lst;
}

/*
    CALL BACK FUNCTION TO HTML INDEX.HTML FILE
*/

function getInput()
{
    var username = document.getElementById("username").value;
    var caption = document.getElementById("caption").value;
    var meme_url = document.getElementById("meme_url").value;

    alert(username + " <> "+caption+" <> "+meme_url);

    /*
    CODE TO SEND DATA FROM FRONTEND TO BACKEND
    */
    sendDataToServer(username, caption, meme_url);

    
    var div = document.getElementById("divimage");
    div.innerHTML = "";
    
    document.getElementById('myForm').reset();
    
    getfromBackend();
    location.reload();

    // editData();
}

window.onload = function(){
    getfromBackend();
}


function sendDataToServer(username, caption, meme_url){

   let data = {
    'username':username,
    'caption':caption,
    'src':meme_url
    }
    url = 'http://127.0.0.1:8000/api/mydatabase/create-data/memes/'
    var req =  new Request(url);
    fetch(url, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {"Content-type": "application/json; charset=UTF-8"}
    })
    .then(response => response.json()) 
    .then(json => console.log(json))
    .catch(err => console.log(err));


} // end of sendDataTOServer function

async function editData(id)
{
    to_save_url = 'http://127.0.0.1:8000/api/mydatabase/create-data/memes/'
    to_find_url = 'http://127.0.0.1:8000/api/mydatabase/view-data/memes/'+id+"/";

    document.getElementById('show_username').innerHTML = id;


    /*await fetch(to_find_url).then(function(response){
        response.json()
        .then(function(data)
        {
            // var div = document.getElementById("divimage");
            username = data['username'];
            caption = data['caption'];
            src = data['src'];


        })
    }).catch(function(error){
        console.log('Fetch error: ', error);
    });*/


}


