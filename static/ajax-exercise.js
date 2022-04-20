'use strict';

// PART 1: SHOW A FORTUNE

function showFortune() {
  // TODO: get the fortune and show it in the #fortune-text div
  // we fetch a json file from server.py as a res, we show it as an HTML el on index.html
  const url = '/fortune';
  fetch(url)
  .then(response => response.text())
  .then(response => {
    document.querySelector("#fortune-text").innerHTML = response;
  });
}

document.querySelector('#get-fortune-button').addEventListener('click', showFortune);

// PART 2: SHOW WEATHER

function showWeather(evt) {
  evt.preventDefault();

  const zipcode = document.querySelector('#zipcode-field').value;
  const url = `/weather.json?zipcode=${zipcode}`;
  

  // TODO: request weather with that URL and show the forecast in #weather-info
  //dynamic zipcode as queryString
  //GET or POST?
  //extract data from response to update HTML, access response.forecast attribute

  fetch(url)
    // method : 'POST',
    // body: JSON.stringify(zipcode)
    .then(response => response.json())
    .then(response => {
      document.querySelector('#weather-info').innerHTML = response.forecast;
    })
  //   fetch('/new-order', {
  //     method: 'POST',
  //     body: JSON.stringify(formInputs),
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //   })
  //     .then(response => response.json())
  //     .then(responseJson => {
  //       alert(responseJson.status);
  //     });
  // });

}

document.querySelector('#weather-form').addEventListener('submit', showWeather);

// PART 3: ORDER MELONS

function orderMelons(evt) {
  evt.preventDefault();

  // TODO: show the result message after your form
  // TODO: if the result code is ERROR, make it show up in red (see our CSS!)
  
    //   fetch('/new-order', {
  //     method: 'POST',
  //     body: JSON.stringify(formInputs),
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //   })
  //     .then(response => response.json())
  //     .then(responseJson => {
  //       alert(responseJson.status);
  //     });
  const formData = {
    quantity: document.querySelector('#qty-field').value,
    type: document.querySelector('#melon-type-field').value,
  };
  // const queryString = new URLSearchParams(formData).toString();
  const url = `order-melons.json?quantity=${formData.quantity}&&type=${formData.type}`;
  ///order-melons.json?quantity={formData.quantity}&type={formData.type}
  fetch(url, {
    method: 'POST',
    // body : JSON.stringify(formData)
  })
  .then(response => response.text())
  .then(responseJson => {alert(`chosen melon is: ${formData.type} and qty is ${formData.quantity}`);
  })



}
document.querySelector('#order-form').addEventListener('submit', orderMelons);
