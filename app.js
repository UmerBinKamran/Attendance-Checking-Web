let students = [
  { name: "Ali Khan", roll: "01", class: "10th" },
  { name: "Sara Ahmed", roll: "02", class: "10th" },
  { name: "Bilal Raza", roll: "03", class: "10th" },
  { name: "Hassan Shah", roll: "04", class: "10th" },
  { name: "Ayesha Noor", roll: "05", class: "10th" },
  { name: "Usman Ali", roll: "06", class: "10th" },
  { name: "Maria Siddiqui", roll: "07", class: "10th" },
  { name: "Hamza Iqbal", roll: "08", class: "10th" },
  { name: "Zainab Fatima", roll: "09", class: "10th" },
  { name: "Farhan Sheikh", roll: "10", class: "10th" },
  { name: "Nimra Javed", roll: "11", class: "10th" },
  { name: "Saad Rehman", roll: "12", class: "10th" },
  { name: "Khadija Aslam", roll: "13", class: "10th" },
  { name: "Rayan Malik", roll: "14", class: "10th" },
  { name: "Hiba Tariq", roll: "15", class: "10th" },
  { name: "Daniyal Sultan", roll: "16", class: "10th" },
  { name: "Amina Rafiq", roll: "17", class: "10th" },
  { name: "Shahzaib Khan", roll: "18", class: "10th" },
  { name: "Laiba Shah", roll: "19", class: "10th" },
  { name: "Kashan Ahmed", roll: "20", class: "10th" },
];

localStorage.setItem("students", JSON.stringify(students));
document.getElementById("totalStudents").innerText = students.length;

let currentStudent = null;

function searchStudent() {
  let input = document.getElementById("searchInput").value.toLowerCase();
  let data = null;
  for (let i = 0; i < students.length; i++) {
    let s = students[i];

    if (s.roll === input || s.name.toLowerCase().includes(input)) {
      data = s;
      break;
    }
  }
  if (data) {
    currentStudent = data;
    document.getElementById("studentBox").style.display = "block";
    document.getElementById("sName").innerText = data.name;
    document.getElementById("sRoll").innerText = data.roll;
    document.getElementById("sClass").innerText = data.class;
  } else {
    alert("Student not found!");
  }
}
function markAttendance(status) {
  if (!currentStudent) return;

  let today = new Date().toLocaleDateString();

  let attendance = JSON.parse(localStorage.getItem("attendance")) || {};

  if (!attendance[today]) attendance[today] = [];

  attendance[today].push({
    roll: currentStudent.roll,
    status: status,
  });

  localStorage.setItem("attendance", JSON.stringify(attendance));

  updateCounts();
  alert("Attendance Saved!");
}
function updateCounts() {
  let today = new Date().toLocaleDateString();
  let data = JSON.parse(localStorage.getItem("attendance")) || {};

  let todayData = data[today] || [];

  let present = todayData.filter((s) => s.status === "present").length;
  let absent = todayData.filter((s) => s.status === "absent").length;

  document.getElementById("presentCount").innerText = present;
  document.getElementById("absentCount").innerText = absent;
}

updateCounts();
function logout() {
  window.location.href = "index.html";
}
