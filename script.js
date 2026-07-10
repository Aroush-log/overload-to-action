function breakDown() {
  let problem = document.getElementById("problem").value.toLowerCase();
  let feeling = document.getElementById("feeling").value;

  let response = "";

  // School problems
  if (
    problem.includes("exam") ||
    problem.includes("test") ||
    problem.includes("study") ||
    problem.includes("homework") ||
    problem.includes("assignment")
  ) {
    response = `
    <b>What’s happening:</b> Your brain is seeing one huge problem instead of smaller tasks 📚<br><br>

    <b>Your first step:</b><br>
    1. Write the exact task you need to finish.<br>
    2. Pick the smallest possible part (example: open notes, find chapter, write title).<br>
    3. Work for 10 minutes only.<br><br>

    <b>Why this works:</b> Starting removes the biggest barrier — the first step.
    `;
  }

  // Future/career decisions
  else if (
    problem.includes("future") ||
    problem.includes("career") ||
    problem.includes("job")
  ) {
    response = `
    <b>What’s happening:</b> You’re trying to make a big decision without enough information 🌱<br><br>

    <b>Your first step:</b><br>
    Choose ONE thing you are curious about and spend 15 minutes learning about it.<br><br>

    <b>Do not:</b> Decide your entire future today.<br>
    <b>Goal:</b> Collect information first.
    `;
  }

  // Motivation problems
  else if (
    problem.includes("lazy") ||
    problem.includes("procrast") ||
    problem.includes("motivation")
  ) {
    response = `
    <b>What’s happening:</b> The task feels too big to start ⚡<br><br>

    <b>Your first step:</b><br>
    Open the task and do the first 2-minute action only.<br><br>

    Examples:<br>
    • Open the document<br>
    • Write one sentence<br>
    • Put materials on your desk<br><br>

    <b>Goal:</b> Create momentum.
    `;
  }

  // Social problems
  else if (
    problem.includes("friend") ||
    problem.includes("people") ||
    problem.includes("lonely")
  ) {
    response = `
    <b>What’s happening:</b> Social situations feel unclear 💬<br><br>

    <b>Your first step:</b><br>
    Write what happened, what you think it means, and what you actually know.<br><br>

    <b>Next:</b> Choose one small action: send a message, ask a question, or give yourself time.
    `;
  }

  // General overwhelm
  else {
    response = `
    <b>What’s happening:</b> Your brain is holding too many things at once 🌊<br><br>

    <b>Your first step:</b><br>
    Make 3 lists:<br>
    1. Things I need to do<br>
    2. Things I’m worried about<br>
    3. Things I cannot control<br><br>

    <b>Next:</b> Choose ONE thing from the first list and take the smallest action possible.
    `;
  }

  document.getElementById("result").innerHTML = response;
}
