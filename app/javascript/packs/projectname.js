const projectName = () => {
  const projectTab = document.getElementById("project-tab");
  projectTab.addEventListener("click", (event) => {
    window.addEventListener("load", (event) => {
      console.log(projectTab.textContent);
      projectTab.textContent = "Sean OReilly";
    });
  });
};

export { projectName };
