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

  else if (problem.includes("friend") || problem.includes("people") || problem.includes("lonely")) {
    response = `
    <b>What’s happening:</b> Social stress 💬<br><br>
    <b>Your first step:</b> Write down the one conversation or situation you are avoiding.<br><br>
    <b>Why:</b> Naming the exact problem makes it easier to handle.
    `;
  }

  else if (problem.includes("lazy") || problem.includes("procrast") || problem.includes("motivation")) {
    response = `
    <b>What’s happening:</b> Starting feels difficult ⚡<br><br>
    <b>Your first step:</b> Open the task and work on it for only 5 minutes.<br><br>
    <b>Goal:</b> Build momentum, not finish everything.
    `;
  }

  else if (problem.includes("idea") || problem.includes("project") || problem.includes("start")) {
    response = `
    <b>What’s happening:</b> Idea overload 💡<br><br>
    <b>Your first step:</b> Write the goal of your idea in one sentence.<br><br>
    <b>Next:</b> Choose the smallest version you could make.
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
