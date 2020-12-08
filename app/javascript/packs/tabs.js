const tabs = () => {
  const tabbies = document.querySelectorAll('.tabs')
  tabbies.forEach((tab) => {
    tab.addEventListener('click', e => {
      tab.classList.toggle('active')
    })
  });

};
export { tabs };

