(async () => {
    
    await fetch("http://localhost:8080/products", {
        method: 'GET', // *GET, POST, PUT, DELETE, etc.
        //mode: 'cors', // no-cors, *cors, same-origin
        //cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        
        //credentials: 'same-origin', // include, *same-origin, omit
        headers: {
          'Content-Type': 'application/json',
        "Access-Control-Allow-Origin": "http://127.0.0.1:5500",
          // 'Content-Type': 'application/x-www-form-urlencoded',
        }}).then((response) => {

      console.log(response);
    });
  })();