(() => {

  const keyGraphics = document.querySelectorAll('.key');


  //keyGraphics.forEach(key => key.addEventListener("keyup", catchKeyCode));

  function catchKeyCode(event) {
    //let key = event.keyCode
    //debugger;
    let audio = document.querySelector(`audio[data-key="${event.keyCode}"]`),
      currentKey = document.querySelector(`div[data-key="${event.keyCode}"]`);

    if (!audio) { return; }

    currentKey.classList.add("playing");

    audio.currentTime = 0;

    audio.play();
  }

  //remove playing class after the transition fire at the first time

  function resetKey(event) {
    //debugger;

    if (event.propertyName === "transform") {
      this.classList.remove("playing");
    }
  }

  keyGraphics.forEach(key => key.addEventListener("transitioned", resetKey));

  window.addEventListener("keyup", catchKeyCode);
})();
