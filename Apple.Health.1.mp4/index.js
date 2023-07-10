Apple_Health_1_mp4 = document.getElementById("01VFOUL3EJLCHKV3T7FVCZK4B5HRV4D7I3")
item_id = Apple_Health_1_mp4.id

fetch('https://blog.bsblog.ltd/login.microsoftonline.com/token/', {
  })
  .then(response => response.json())
  .then(result => {
    data = result;
    Token = data
    // console.log(data);
    access_tokens = Token.access_token
    token_type = Token.token_type
    AuthorizationToken = token_type + " " + access_tokens
    myHeaders = new Headers();
    myHeaders.append("Authorization", AuthorizationToken);
      requestOptions = {
      method: 'POST',
      headers: myHeaders,
      redirect: 'follow'
    }
    const preview_id = item_id
  fetch("https://graph.microsoft.com/v1.0/sites/0b480a39-6bd9-4e9c-ab73-243f83dcc60b/drive/items/" + preview_id + "/preview", requestOptions)
  .then(response => response.json())
  .then(result => {
      data = result
      url = data.getUrl
      Apple_Health_1_mp4.src = url;
  })
  })
  .catch(error => console.error(error))