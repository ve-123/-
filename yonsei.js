// Yonsei Dermatology Clinic JavaScript
// This file can be used to add interactivity to the website later.

console.log("Yonsei Dermatology website script loaded.");

// Example: Smooth scrolling for navigation links
document.querySelectorAll('header nav a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// --- Image Slider --- //
let slideIndex = 1;
showSlides(slideIndex);

// 자동 슬라이드 (5초마다)
let slideInterval = setInterval(() => plusSlides(1), 5000);

// 이전/다음 버튼 클릭
function plusSlides(n) {
  clearInterval(slideInterval); // 버튼 클릭 시 자동 슬라이드 멈춤
  showSlides(slideIndex += n);
  slideInterval = setInterval(() => plusSlides(1), 5000); // 다시 자동 슬라이드 시작
}

// 점 클릭
function currentSlide(n) {
  clearInterval(slideInterval);
  showSlides(slideIndex = n);
  slideInterval = setInterval(() => plusSlides(1), 5000);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slide");
  let dots = document.getElementsByClassName("dot");
  if (!slides.length) return; // 슬라이드가 없으면 종료

  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[slideIndex - 1].style.display = "block";
  // 페이드 효과를 위해 display 변경 후 잠시 기다렸다가 클래스 추가 (선택적)
  // setTimeout(() => slides[slideIndex-1].classList.add('fade-in'), 50);
  if (dots.length > 0) {
    dots[slideIndex - 1].className += " active";
  }
}

// --- FAQ Accordion --- //
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
  const questionButton = item.querySelector('.faq-question');
  const answerDiv = item.querySelector('.faq-answer');

  if (questionButton && answerDiv) {
    questionButton.addEventListener('click', () => {
      const isActive = questionButton.classList.contains('active');

      // 모든 답변 숨기기 (선택적: 하나만 열리게 하려면)
      // faqItems.forEach(otherItem => {
      //     if (otherItem !== item) {
      //         otherItem.querySelector('.faq-question').classList.remove('active');
      //         otherItem.querySelector('.faq-answer').style.maxHeight = null;
      //         otherItem.querySelector('.faq-answer').style.padding = '0 15px';
      //     }
      // });

      questionButton.classList.toggle('active');

      if (!isActive) {
        // 답변 펼치기
        answerDiv.style.maxHeight = answerDiv.scrollHeight + "px";
        answerDiv.style.padding = '15px'; // 펼칠 때 패딩 적용
      } else {
        // 답변 접기
        answerDiv.style.maxHeight = null;
        answerDiv.style.padding = '0 15px'; // 접을 때 패딩 제거
      }
    });

    // 초기 상태에서 패딩 설정 (max-height가 0일 때)
    if (!questionButton.classList.contains('active')) {
      answerDiv.style.padding = '0 15px';
    }
  }
});

// --- Online Appointment Form --- //
const appointmentForm = document.getElementById('appointment-form');
if (appointmentForm) {
  appointmentForm.addEventListener('submit', function (e) {
    e.preventDefault(); // 실제 서버 전송 방지 (테스트용)
    alert('예약 신청이 접수되었습니다. 확인 후 연락드리겠습니다.');
    // 여기에 실제 서버로 폼 데이터를 보내는 로직 추가 (AJAX 등 사용)
    // 예: fetch('/api/appointments', { method: 'POST', body: new FormData(this) })
    //     .then(response => response.json())
    //     .then(data => console.log(data))
    //     .catch(error => console.error('Error:', error));
    appointmentForm.reset(); // 폼 초기화
  });
}

// --- Kakao Map API --- //
// 카카오맵 API 연동 코드는 HTML 파일 하단 또는 여기에 작성합니다.
// API 키 발급 및 자세한 사용법은 카카오 Developers 문서를 참고하세요.
// https://apis.map.kakao.com/

// Add more JavaScript functionality here as needed
// e.g., form validation, image sliders, dynamic content loading, etc.
