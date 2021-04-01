export async function GetApi(url,object) {
      console.log('PostApiToken1= ',url,object);
      return await fetch(url)
      .then((response) => {
        const statusCode = response.status;
        const data = response.json();
        console.log("statusCode", statusCode);
        return Promise.all([statusCode, data]);
    })
    .then(([statusCode, data]) => {
        const responseObj = {
            data: data,
            status: statusCode
        }
        return responseObj;
    })
        .catch((error) => {
            console.log(error);
        });

}