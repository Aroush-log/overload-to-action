function breakDown() {
  let problem = document.getElementById("problem").value.toLowerCase();

  let response = "";

  if (problem.includes("exam") || problem.includes("test") || problem.includes("study")) {
    response = `
    <b>What’s happening:</b> School pressure 📚<br><br>
    <b>Your first step:</b> Write down the topics you need to study. Do not study yet — just make the list.<br><br>
    <b>Time needed:</b> 2 minutes.
    `;
  } 

  else if (problem.includes("career") || problem.includes("future") || problem.includes("job")) {
    response = `
    <b>What’s happening:</b> Decision overload 🌱<br><br>
    <b>Your first step:</b> Pick one career you are curious about and spend 10 minutes learning what people actually do in it.<br><br>
    <b>Goal:</b> Explore, not decide.
    `;
  }

  else if (problem.includes("homework") || problem.includes("assignment")) {
    response = `
    <b>What’s happening:</b> Too many tasks 📝<br><br>
    <b>Your first step:</b> Write every task and deadline in one list.<br><br>
    <b>Time needed:</b> 5 minutes.
    `;
  }

  else {
    response = `
    <b>Your first step:</b> Write the smallest part of this problem you can control today.<br><br>
    Don’t solve everything. Choose one action.
    `;
  }

  document.getElementById("result").innerHTML = response;
}
