document.getElementById("akanForm").addEventListener("submit", function (e) {
  e.preventDefault();

  // Retrieve user input
  const day = parseInt(document.getElementById("day").value);
  const month = parseInt(document.getElementById("month").value);
  const year = parseInt(document.getElementById("year").value);
  const gender = document.querySelector('input[name="gender"]:checked');

  // Validate input
  if (!day || day < 1 || day > 31) {
    alert("Please enter a valid day (1–31).");
    return;
  }
  if (!month || month < 1 || month > 12) {
    alert("Please enter a valid month (1–12).");
    return;
  }
  if (!year || year < 1900) {
    alert("Please enter a valid year (from 1900).");
    return;
  }
  if (!gender) {
    alert("Please select a gender.");
    return;
  }

  // Validate the date
  const date = new Date(year, month - 1, day);
  if (date.getDate() !== day || date.getMonth() + 1 !== month || date.getFullYear() !== year) {
    alert("Please enter a valid date.");
    return;
  }

  // Calculate the day of the week
  const actualDay = date.getDay(); 

  // Akan names
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
  const femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

  // Determine the Akan name
  const name = gender.value === "male" ? maleNames[actualDay] : femaleNames[actualDay];

  // Display the result
  document.getElementById("result").innerText =
    `You were born on a ${days[actualDay]}. Your Akan name is ${name}.`;
});