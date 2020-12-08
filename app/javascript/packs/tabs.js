const tabs = () => {
  const tabs = document.querySelectorAll('.tabs')
  tabs.forEach((tab) => {
    tab.addEventListener('click', (e) => {
      tab.classList.add('active')
    })
  })
}

export { tabs }