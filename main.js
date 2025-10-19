const SHEET_URL = "https://docs.google.com/spreadsheets/d/1rDIGPG9BvJh42Yp1COEJBKQzukYxGmo5p_9NpsPlryk/edit?usp=sharing";

async function fetchKeys() {
  const res = await fetch(SHEET_URL);
  const text = await res.text();
  return text.split('\n').slice(1).map(line => line.trim()).filter(Boolean);
}

document.getElementById("loginBtn").addEventListener("click", async () => {
  const inputKey = document.getElementById("keyInput").value.trim();
  const msg = document.getElementById("loginMsg");

  msg.textContent = "Đang kiểm tra...";
  const keys = await fetchKeys();

  if (keys.includes(inputKey)) {
    msg.textContent = "✅ Đăng nhập thành công!";
    document.querySelector(".container").style.display = "none";
    document.getElementById("menu").style.display = "block";
  } else {
    msg.textContent = "❌ Key không hợp lệ!";
  }
});
