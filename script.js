// This links the button to the "check" function
document.getElementById('check').addEventListener('click', check)

// Set everything to 0
let age = 0
let weekday = 0

// This is what checks if you can get the discount
function check () {
  age = document.getElementById('age').value
  weekday = document.getElementById('weekday').value
  if ((weekday === 'Tuesday' || weekday === 'Thursday') || (age >= 12 && age <= 21)) {
    document.getElementById('answer').innerHTML = ('You are eligible for a discount at the museum.')
  } else {
    document.getElementById('answer').innerHTML = ('Sorry, you are not eligible for a discount.')
  }
}
