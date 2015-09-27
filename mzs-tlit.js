(function()
{
  // check if we need to transliterate at all
  var lang = navigator.language.split('-')[0];
  if (['ru', 'uk', 'be', 'bg', 'mk', 'sr'].indexOf(lang) == -1) return;
  var jot = (['ru', 'uk', 'be'].indexOf(lang) == -1) ? ['j','J'] : ['й','Й'];

  var map =
  {
    'a': 'а', 'A': 'А',
    'b': 'б', 'B': 'Б',
    'c': 'ц', 'C': 'Ц',
    'č': 'ч', 'Č': 'Ч',
    'd': 'д', 'D': 'Д',
    'e': 'е', 'E': 'Е',
    'ě': 'е', 'Ě': 'Е',
    'ę': 'я', 'Ę': 'Я',
    'f': 'ф', 'F': 'Ф',
    'g': 'г', 'G': 'Г',
    'h': 'х', 'H': 'Х',
    'i': 'и', 'I': 'И',
    'j': jot[0], 'J': jot[1],
    'k': 'к', 'K': 'К',
    'l': 'л', 'L': 'Л',
    'm': 'м', 'M': 'М',
    'n': 'н', 'N': 'Н',
    'o': 'о', 'O': 'О',
    'p': 'п', 'P': 'П',
    'r': 'р', 'R': 'Р',
    's': 'с', 'S': 'С',
    'š': 'ш', 'Š': 'Ш',
    't': 'т', 'T': 'Т',
    'u': 'у', 'U': 'У',
    'ų': 'у', 'Ų': 'У',
    'v': 'в', 'V': 'В',
    'y': 'ы', 'Y': 'Ы',
    'z': 'з', 'Z': 'З',
    'ž': 'ж', 'Ž': 'Ж'
  };

  // find all elements to proceed
  var i, j, el = document.querySelectorAll('.mzs-tlit');
  for (i = 0; i < el.length; i++)
  {
    var sym = el[i].innerText.split('');

    for (j = 0; j < sym.length; j++)
    {
      if (map[sym[j]]) sym[j] = map[sym[j]];
      if (sym[j-1] == jot[0] && sym[j] == 'у') { sym[j-1] = 'ю'; sym[j] = ''; }
      if (sym[j-1] == jot[0] && sym[j] == 'е') { sym[j-1] = 'е'; sym[j] = ''; }
      if (sym[j-1] == jot[0] && sym[j] == 'а') { sym[j-1] = 'я'; sym[j] = ''; }
      if (sym[j-1] == 'ш' && sym[j] == 'ч') { sym[j-1] = 'щ'; sym[j] = ''; }
    }

    el[i].innerText = sym.join('');
  }
})();
