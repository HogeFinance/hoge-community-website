export const getData = (path) =>
  fetch(`${path}/data.json`
    ,{
      headers : {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    }
  )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      return data
    })