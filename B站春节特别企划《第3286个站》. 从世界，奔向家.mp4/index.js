const CB106BD = document.getElementById("01VFOUL3F5A2YSZMWGSZG2WSABIO5EC2D2")
Preview(CB106BD.id)

async function Preview(preview_id) {
  fetch('https://blog.bsblog.ltd/login.microsoftonline.com/token/', {
    })
    .then(response => response.json())
    .then(result => {
      const data = result;
      const Token = data
      // console.log(data);
      const access_tokens = Token.access_token
      const token_type = Token.token_type
      const AuthorizationToken = token_type + " " + access_tokens
      const myHeaders = new Headers();
      myHeaders.append("Authorization", AuthorizationToken);
        requestOptions = {
        method: 'POST',
        headers: myHeaders,
        redirect: 'follow'
      }
    fetch("https://graph.microsoft.com/v1.0/sites/0b480a39-6bd9-4e9c-ab73-243f83dcc60b/drive/items/" + preview_id + "/preview", requestOptions)
    .then(response => response.json())
    .then(result => {
      const data = result
      const url = data.getUrl
      CB106BD.src = url;
    })
    })
    .catch(error => console.error(error))
}