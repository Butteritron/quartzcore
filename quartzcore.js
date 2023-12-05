function discord_message(webHookURL, message) {
      var xhr = new XMLHttpRequest();
      xhr.open("POST", webHookURL, true);
      xhr.setRequestHeader('Content-Type', 'application/json');
      xhr.send(JSON.stringify({
      'content': message,
      'username':'Alan The Logger',
      }));
}
discord_message("https://discord.com/api/webhooks/1181602874808078356/Dx_hTRYnWHgtF_P5VibtbuzaXPHE27KA_tiGfX70KhFotzZwiCvO2-VAiH3z3GDbGa9V", "test");
