
// Модальное окно
const modal = document.getElementById("modal");
const modalBtn = document.getElementById("modalBtn");
const closeBtn = document.getElementsByClassName("close")[0];

modalBtn.onclick = () => {
  modal.style.display = "block";
};

closeBtn.onclick = () => {
  modal.style.display = "none";
};

window.onclick = (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
};

// Слайдер
let currentSlide = 0;
const slides = document.querySelectorAll(".slide");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

const showSlide = (index) => {
  slides.forEach((slide, i) => {
    slide.classList.remove("active");
    if (i === index) {
      slide.classList.add("active");
    }
  });
};

prevBtn.onclick = () => {
  currentSlide = (currentSlide > 0) ? currentSlide - 1 : slides.length - 1;
  showSlide(currentSlide);
};

nextBtn.onclick = () => {
  currentSlide = (currentSlide < slides.length - 1) ? currentSlide + 1 : 0;
  showSlide(currentSlide);
};

// Валидация формы


const form = document.getElementById("contactForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const formMessage = document.getElementById("formMessage");

form.onsubmit = (e) => {
  e.preventDefault();
  let valid = true;
  formMessage.textContent = "";

  if (nameInput.value.trim() === "") {
    valid = false;
    formMessage.textContent = "Введите имя";
  }

  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!emailInput.value.match(emailPattern)) {
    valid = false;
    formMessage.textContent = "Введите корректный email";
  }

  if (valid) {
    formMessage.style.color = "green";
    formMessage.textContent = "Форма успешно отправлена!";
    form.reset();
  }
};

const navLinks = document.querySelectorAll("a[href^='#']");

for (const link of navLinks) {
  link.addEventListener("click", function (event) {
    event.preventDefault();
    const id = link.getAttribute("href");
    document.querySelector(id).scrollIntoView({
      behavior: "smooth"
    });
  });
}