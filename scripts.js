document.getElementById("year").textContent = new Date().getFullYear();

const THEME_KEY = "theme";

function getSavedTheme() {
  try {
    return localStorage.getItem(THEME_KEY);
  } catch (e) {
    return null;
  }
}

function applyTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  toggleBtn.textContent = theme === "dark" ? "☀️" : "🌙";
  toggleBtn.setAttribute(
    "aria-label",
    theme === "dark" ? "라이트 모드로 전환" : "다크 모드로 전환"
  );
}

const toggleBtn = document.createElement("button");
toggleBtn.type = "button";
toggleBtn.className = "theme-toggle";
document.body.appendChild(toggleBtn);

applyTheme(
  getSavedTheme() ||
    (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light")
);

toggleBtn.addEventListener("click", () => {
  const next =
    document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
  applyTheme(next);
  try {
    localStorage.setItem(THEME_KEY, next);
  } catch (e) {}
});

console.log("안녕하세요, 홍길동의 자기소개 페이지입니다!");
