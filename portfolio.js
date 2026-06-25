const Home = document.querySelector(".home");
const aboutSoham = document.querySelector(".aboutme");
function openInsta() {
    window.open("https://www.instagram.com/ishhhdiaries_/?hl=en", "_blank");
}
function openLinkedin() {
    window.open("https://www.linkedin.com/in/ishika-raut-2329ab284/");
}
function openTwitter() {
    window.open("https://x.com/home");
}
function openGitHub() {
    window.open("https://github.com/Soham05102006");
}
const aboutBox = document.querySelector(".about_soham");
aboutSoham.addEventListener('click', () => {
    aboutBox.classList.add('active-popup');
});
