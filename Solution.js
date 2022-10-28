// JSON data
const peopleData = [
  { "Gender": "Male", "HeightCm": 171, "WeightKg": 96 },
  { "Gender": "Male", "HeightCm": 161, "WeightKg": 85 },
  { "Gender": "Male", "HeightCm": 180, "WeightKg": 77 },
  { "Gender": "Female", "HeightCm": 166, "WeightKg": 62 },
  { "Gender": "Female", "HeightCm": 150, "WeightKg": 70 },
  { "Gender": "Female", "HeightCm": 167, "WeightKg": 82 }
];

// count of overweight people
let count = 0

// calculating BMI and categorising and finding health risk accordingly
let data = peopleData.map(person => {
  let BMI = (person['WeightKg']) / (person['HeightCm'] * person['HeightCm'] / 10000)
  count += BMI >= 25 ? 1 : 0
  let [BMI_Category, Health_Risk] = BMI < 18.5 ? ['Underweight', 'Malnutrition risk'] :
    BMI < 24.9 ? ['Normal weight', 'Low risk'] :
      BMI < 29.9 ? ['Overweight', 'Enhanced risk'] :
        BMI < 34.9 ? ['Moderately obese', 'Medium risk'] :
          BMI < 39.9 ? ['Severely obese', 'High risk'] : ['Very severely obese', 'Very high risk']
  return { BMI, BMI_Category, Health_Risk }
})

// output 
console.table(data);
console.log(`There are ${count} overweight people`)