function generatePlan() {
  const exams = document.getElementById("exams").value;
  const plan = document.getElementById("plan");

  plan.innerHTML = "";

  for (let i = 1; i <= exams; i++) {
    let li = document.createElement("li");
    li.textContent = "Tag " + i + ": Lerne Fach " + i;
    plan.appendChild(li);
  }
}