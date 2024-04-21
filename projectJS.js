
var button = document.getElementById('create_plane')
var regex = new RegExp(/^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/)

var validateEmail = document.getElementById('check_email')
validateEmail.addEventListener('click', CheckEmail)
function CheckEmail(event){
    event.preventDefault()
    var emailInput = document.getElementById('email').value  
    let regex = /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/;
    let result = regex.test(emailInput);
    if(result){
        
        //ActivateContent()
        alert("Valid email")
        
    }
    else{
        alert('Not valid email')
    }  
}

function ActivateContent(){
  var activateDiv = document.getElementById('days')
  activateDiv.style.pointerEvents = 'auto'
  activateDiv.style.opacity ='1'
}



window.addEventListener('DOMContentLoaded', function(){
  function MealGetInputValues(day){
    var breakfastEl = document.getElementById(day + 'breakfastIn')
    var breakfastValue = breakfastEl ? breakfastEl.value : ''

    var snackOneEl = document.getElementById(day + 'snack1In')
    var snackOneValue = snackOneEl ? snackOneEl.value : ''

    var lunchEl = document.getElementById(day +'lunchIn')
    var lunchValue = lunchEl ? lunchEl.value : ''
    
    var snackTwoEl = document.getElementById(day +'snack2In')
    var snackTwoValue = snackTwoEl ? snackTwoEl.value : ''
    var dinnerEl = document.getElementById(day +'dinnerIn')
    var dinnerValue = dinnerEl ? dinnerEl.value : ''

  
    var mealValues = {
      breakfast: breakfastValue,
      snack: snackOneValue,
      lunch: lunchValue,
      snack: snackTwoValue,
      dinner: dinnerValue
    }
  
    console.log(mealValues)
    return mealValues
    
  }

  document.getElementById('create_plan').addEventListener('click', function(){
    var days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday']
    
    var outputValues = ('<html>\n<head>\n<title>Build meal plan</title>\n</head>\n<body>\n')
    
    days.forEach(function(day){
      var mealInput = MealGetInputValues(day)
      outputValues += day.charAt(0).toUpperCase() + day.slice(1) + ' : ' + '<br>' 
      for (var key in mealInput){
        outputValues += key + mealInput[key] + '\n'
      }
      outputValues += '\n'
    
    outputValues += ('</body>\n</html>')
    newWindow = window.open('about:blank','myPop','width =800, height=400,left=400, top=400')
    newWindow.document.write(outputValues)
    console.log(outputValues)
  
  })
})
})




/*function displayMeal(){
    var days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday']
    var outputValues =''
    days.forEach(function(day){
      var mealInput = MealGetInputValues(day)
      outputValues += day.charAt(0).toUpperCase() + day.slice(1) + ' : ' + '<br>' 
      for (var key in mealInput){
        outputValues += key + ': ' + mealInput[key] + '<br>'
      }
  
  
    })
    console.log(outputValues)
    return outputValues
*/



 




  
    




