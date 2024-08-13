// Should probably make sure that everything has been loaded.
window.addEventListener('load', () => {
  // Now then, when the user clicks anywhere on the page...
  document.addEventListener('click', () => {
    // We go through all the <audio autoplay> elements...
    for (const audio of document.querySelectorAll('[autoplay]')) {
      audio.volume = .5 // We don't kill the user... (optional)
      audio.play() // And finally bless their ears!
    }
  }, { passive: true, once: true }) // `once` for making this only fire once.
}, { passive: true }) // `passive` for some slight optimisation magic.