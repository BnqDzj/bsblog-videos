const Apple_Health_3_mp4 = document.getElementById("01VFOUL3CK7FEF5UTXUZFLFPNWRINE4SYV")
Preview(Apple_Health_3_mp4.id)

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
      Apple_Health_3_mp4.src = url;
    })
    })
    .catch(error => console.error(error))
}