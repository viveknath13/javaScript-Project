const myForm = document.querySelector("form");

myForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const height = parseInt(document.querySelector("#height").value);

  const weight = parseInt(document.querySelector("#weight").value);

  const results = document.querySelector("#result");
  if (height === "" || height < 0 || isNaN(height)) {
    results.innerHTML = ` Please Provide a valid height ${height} `;
  } else if (weight === "" || weight < 0 || isNaN(weight)) {
    results.innerHTML = ` Please Provide a valid weight ${weight} `;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    //show the result

    results.innerHTML = `<span>${bmi}</span>`;
  
  if (bmi < 18.6 || bmi < 0) {
    results.innerHTML = `${bmi} Under Weight`;
  }
  if (bmi ===18.6 || bmi > 18.6 || bmi ===24.9 || bmi <24.9) {
    results.innerHTML = `${bmi} Normal Range`;
  }
  if (bmi > 24.9) {
    results.innerHTML = `${bmi} OverWeight`;
  }
}
});
