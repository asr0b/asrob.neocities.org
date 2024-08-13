/*
=== H3's janky autoplay enable ==
It definetly works!!1! (TM)

https://h3.neocities.org/

Use where you want, as long as you keep this comment intact.
*/

function _ae_start_playback(ae) {
  let _ae_promise = ae.play();

  console.log("[H3AE] Starting playback of " + ae.tagName + " " + ae.id);

  //check if successful. if not, try again
  _ae_promise.then(function() {
      console.log("[H3AE] Started " + ae.tagName + " " + ae.id);
    })
    .catch(e => {
      _ae_audio_was_enabled = false;
      console.warn("[H3AE] Autoplay failed for an " + ae.tagName + " element.\nTrying again on next event.");
    });
}

var _ae_audio_was_enabled = false;

function _ae_autoplay(e) {
  if (_ae_audio_was_enabled) return; //if this already triggered, do nothing
  _ae_audio_was_enabled = true; //stop further plays

  //seek for audio elements with autoplay attribute
  let _ae_elements = document.getElementsByTagName('audio');
  console.log("[H3AE] Found " + _ae_elements.length + " audio elements.");
  Array.prototype.forEach.call(_ae_elements, _ae_start_playback);
  //same for videos
  _ae_elements = document.getElementsByTagName('video');
  console.log("[H3AE] Found " + _ae_elements.length + " video elements.");
  Array.prototype.forEach.call(_ae_elements, _ae_start_playback);

  //console.log("[H3AE] Autoplay should be started now.");
}

//add triggers to function
let _ae_interaction_events = ['auxclick', 'click', 'contextmenu', 'dblclick', 'keydown', 'keyup', 'mousedown', 'mouseup', 'touchend'];
_ae_interaction_events.forEach(eventName => {
  window.addEventListener(eventName, _ae_autoplay, {
    capture: true,
    passive: true
  });
});