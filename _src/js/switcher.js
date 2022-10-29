document.addEventListener("DOMContentLoaded", () => {

  const themeToggle = document.querySelectorAll("#theme-toggle");
  const fontToggle = document.querySelectorAll("#font-toggle");
  const fsToggle = document.querySelectorAll("#fs-toggle");

  themeToggle.forEach(element => {
    element.addEventListener("click", function() {
      if ( sessionStorage.getItem("baselayerTheme") === "dark" ) {
        themeLight();
      } else {
        themeDark();
      }
    });
  });

  fontToggle.forEach(element => {
    element.addEventListener("click", function() {
      if ( sessionStorage.getItem("baselayerFont") === "prose" ) {
        fontBase();
      } else {
        fontProse();
      }
    });
  });

  fsToggle.forEach(element => {
    element.addEventListener("click", function() {
      if ( sessionStorage.getItem("baselayerFS") === "normal" ) {
        fsLongRead();
      } else {
        fsNormal();
      }
    });
  });

  function themeDark() {
    sessionStorage.setItem("baselayerTheme", "dark");
    document.body.classList.remove("theme-light");
    document.body.classList.add("theme-dark");
  }

  function themeLight() {
    sessionStorage.setItem("baselayerTheme", "light");
    document.body.classList.remove("theme-dark");
    document.body.classList.add("theme-light");
  }

  function fontProse() {
    sessionStorage.setItem("baselayerFont", "prose");
    document.body.classList.remove("main-base");
    document.body.classList.add("main-prose");
  }

  function fontBase() {
    sessionStorage.setItem("baselayerFont", "base");
    document.body.classList.remove("main-prose");
    document.body.classList.add("main-base");
  }

  function fsLongRead() {
    sessionStorage.setItem("baselayerFS", "longread");
    document.body.classList.remove("main-normal");
    document.body.classList.add("main-longread");
  }

  function fsNormal() {
    sessionStorage.setItem("baselayerFS", "normal");
    document.body.classList.remove("main-longread");
    document.body.classList.add("main-normal");
  }

  function themeInit() {
    if ( sessionStorage.getItem("baselayerTheme") === "dark" ) {
      themeDark();
    } else {
      themeLight();
    }
    if ( sessionStorage.getItem("baselayerFont") === "prose" ) {
      fontProse();
    } else {
      fontBase();
    }
    if ( sessionStorage.getItem("baselayerFS") === "longread" ) {
      fsLongRead();
    } else {
      fsNormal();
    }
  }

  themeInit();

});