(function () {
  'use strict';

  var storageKey = 'homepage-language';
  var buttons = document.querySelectorAll('[data-language]');
  var panels = document.querySelectorAll('[data-language-panel]');
  var intros = document.querySelectorAll('[data-language-intro]');
  var localizedText = document.querySelectorAll('[data-language-text]');

  function setLanguage(language) {
    var selected = language === 'zh' ? 'zh' : 'en';

    Array.prototype.forEach.call(panels, function (panel) {
      panel.hidden = panel.getAttribute('data-language-panel') !== selected;
    });

    Array.prototype.forEach.call(buttons, function (button) {
      var active = button.getAttribute('data-language') === selected;
      button.classList.toggle('is-active', active);
      button.setAttribute('aria-pressed', active ? 'true' : 'false');
    });

    Array.prototype.forEach.call(intros, function (intro) {
      intro.hidden = intro.getAttribute('data-language-intro') !== selected;
    });

    Array.prototype.forEach.call(localizedText, function (text) {
      text.hidden = text.getAttribute('data-language-text') !== selected;
    });

    document.documentElement.lang = selected === 'zh' ? 'zh-CN' : 'en';
    try {
      window.localStorage.setItem(storageKey, selected);
    } catch (error) {
      // Local storage can be unavailable in private browsing modes.
    }
  }

  Array.prototype.forEach.call(buttons, function (button) {
    button.addEventListener('click', function () {
      setLanguage(button.getAttribute('data-language'));
    });
  });

  var savedLanguage = null;
  try {
    savedLanguage = window.localStorage.getItem(storageKey);
  } catch (error) {
    savedLanguage = null;
  }
  setLanguage(savedLanguage || 'en');
}());
