const menu = document.getElementById("menu");
const chevron = document.getElementById("chevron");

const toggleDropdown = () => {
  menu.classList.toggle("open");
  chevron.innerHTML = !menu.classList.contains("open") ? "⇲" : "⇱";
};

const handleMainButtonClocked = () => alert("Main button clicked!");

const handleMenuButtonClocked = () => {
  toggleDropdown();
  alert("Menu button clicked!");
};
