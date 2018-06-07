---
layout: techdoc
title: Formulare
order: 1600
examples: false
exercises: false
solutions: false
---
* TOC
{:toc}

Formulare sind eine der Haupt-Interaktionsarten zwischen einem Benutzer und einer Webseite oder -anwendung. Sie dienen Dazu, Daten vom Benutzer aufzunehmen und an einen Server zu senden oder im Client zu verwerten.

Alle HTML-Forms bestehen aus einem oder mehreren Widgets wie Textfeldern, Buttons oder Checkboxen. Meist hat jedes dieser Widgets auch ein beschreibendes Label. Sollen die Daten an einen Server geschickt werden, muss jedes Widget seinen Daten über das "name" Attribut einen Namen geben.

Formulare dürfen nicht ineinander verschachtelt werden. Also kein Form im Form.

# \<form>
Umschließt jedes Formular, sozusagen der Container.
- `action="URL"`: URL, an die die Daten des Formulars beim Abschicken gesendet werden sollen.
- `method="METHOD"`: HTTP Methode, mit der das Formular verschickt werden soll: `get` oder `post`.

# \<fieldset>
Dient dazu, Widgets logisch (zum Stylen oder wegen der Semantik) zusammenzufassen.
* Ein Fieldset kann mit einer Legende beschrieben werden.

# \<legend>
Gibt einem Fieldset einen Namen.
* Wird optisch oft als Überschrift über einer Gruppe von Widgets dargestellt.
* Wird von Screen Readern vor jedem Widget-Label vorgelesen, weshalb der Name kurz und beschreibend sein sollte.
* Radiobuttons sollten sich immer in einem Fieldset befinden.

# \<input>
Das meistbenutzte Form-Widget. Ein leeres HTML-Element. Es gibt etliche Varianten:
- `type="TYPE"`: Der Typ des Form-Widgets. Mögliche Werte sind:
  - `text`: Ein einfaches, einzeiliges Feld zur Texteingabe (default).
    - `readonly`: Attribut, das festlegt, ob der Benutzer das Widget editieren kann.
    - `list`: der Name der _datalist_ mit den Auto-Vervollständigen-Werten. Siehe unter _datalist_ weiter unten.
  - `email`: Wie _text_, die Eingabe muss jedoch eine E-Mail-Adresse sein, also ein `@` beinhalten.
    - `multiple`: Attribut, dass zulässt, mehrere kommaseparierte E-Mail Adressen einzugeben.
  - `password`: Wie _text_, der eingegebene Wert ist jedoch nicht sichtbar.
  - `search`: Wie _text_, aber etwas anderes Styling. Außerdem können die Werte des Feldes für spätere Auto-Vervollständigung im Browser gespeichert werden.
  - `tel`: Wie _text_, jedoch mit anderer Semantik. Mobile Geräte zeigen oft eine andere Tastatur an (das Zahlenpad).
  - `url`: Wie _text_, akzeptiert aber nur eine valide URL.
  - ``: TODO
  - ``: TODO
  - `submit`: Schickt das Formular ab. Kann jedoch nur Text im "value" Attribut beinhalten. Ein _\<button>_ ist bedeutend flexibler, da er beliebiges HTML beinhalten kann und leichte gestylet werden kann.
- `id="ID"`: Verknüpft das `input`-Element mit einem `label`-Element, dessen "for"-Attribut den selben Wert haben muss.
- `name="NAME"`: Der Name, unter dem der Inhalt, die Daten des Widgets an den Server gesendet wird. In PHP ist dies zB der Key im assoziativen Array.
- `value="VALUE"`: Hat verschiedene Funktionen, je nachdem, wecher `type` gesetzt ist:
  - Für `button`, `reset` und `submit` ist es der Text des Buttons.
  - Für `text`, `password` und `hidden` gibt es den Anfangswert (default value) des Eingabefeldes an.
  - Für `checkbox`, `radio` und `image` ist es der Wert, der mit dem Eingabefeld assoziert ist und der beim Absenden des Formulars geschickt wird.
- `autofocus`: Gibt dem Element den Fokus, direkt nachdem die Seite geladen wurde. Nur ein Element pro Seite kann dieses Attribut haben (default: false).
- `disabled`: Legt fest, ob der Benutzer mit dem Widget interagieren kann und ob der Wert des Widgets zum Server geschickt wird (default: false). Wird vom Elternelement (zB fieldset) geerbt.

# \<label>
Das Label, also eine Art Übschrift, eines Form-Widgets.
- Wichtig für Screen Reader. Dies ist nicht das gleiche wie ein Placeholder-Text, der von vielen Screen Readern ignoriert oder anders interpretiert wird.
- Labels sind klickbar und aktivieren das zugehörige Form-Element.
- `for`: Verknüpft das Label mit der "id" des dazugehörigen Form-Widgets. Beide namen müssen gleich sein.

# \<textarea>
Ein mehrzeiliges Feld zur Texteingabe.
- Der Inhalt steht hier nicht im "value"-Attribut, sondern zwischen öffnendem und schließendem Tag.
- Eine Textarea kann nur Text-Kindelemente enthalten, also keine HTML Elemente.
- `cols` und `width`: Gibt die Höhe und Breite der Textarea an.
- `wrap`: Kann zwei Werte annehmen:
  - `soft` (default) heißt, dass der Inhalt der Textarea nicht "gewrappt" wird. Autmoatische Zeilenumbrüche werden also nicht mitgesendet, sondern nur manuelle.
  - `hard` bewirkt, dass alle automatischen Zeilenumbrüche der Textarea beim Absenden des Formulars erhalten bleiben.

# \<select>
Eine Selectbox, also eine Art Dropdown Menü.
- `multiple `: Aktiviert die Möglichkeit, mehrere Werte aus einer Selectbox auszuwählen. Die options werden dann nicht mehr als Dropdown sondern als Liste angezeigt.

# \<option>
- `selected`: Dient dazu, (eine) bestimmte Option(en) der Selectbox vorauszuwählen.

# \<optgroup>
Visuelle Gruppierung von Options innerhalb einer Selectbox.
- `label`: Label der optgroup.

# \<button>
Ein Button.
- Der Vorteil des Button-Elements gegenüber einem Input-Element mit Typ _button_ ist, dass es viel einfacher CSS zu stylen ist.
- `type="TYPE"`: Mögliche Werte sind:
  - `submit`: Schickt das Formular ab mit allen Daten ab.
  - `reset`: Setzt den Inhalt aller Widgets auf ihren Anfangswert zurück.
  - `button`: Hat keine Funktion. Klingt blöd, ist aber praktisch, um einen Button von JavaScript aus anzusprechen und mit beliebigen Funktionen zu belegen.
- `value`: Der Anfangswert des Buttons. Dies ist der Wert, der beim Absenden des Formulars mitgesendet wird. Auf diese Art können verschiedene Buttons vom Server unterschieden werden.

# \<datalist>
Bla



- ``: 
- ``: 

Formulare lassen sich nur sehr schlecht stylen. Dies ist im gesonderten Kapitel [Formulare mit CSS Stylen](css-style-formulare.html) beschrieben.

Alle Form-Widgets können auch 

# Fomulardaten versenden
Ein Formular het wenig Sinn, wenn die eingetragenen Daten nicht verschickt werden können.

- Das `action`-Attribut gibt an, wohin die Daten geschickt werden sollen, während das `method`-Attribut angibt, mit welcher HTTP-Methode sie verschickt werden. Derzeit (2018) stehen nur _POST_ und _GET_ zur Verfügung.
- Damit man Serverseitig die verschickten Daten zuordnen kann, muss man jedem Datum (gemeint ist der Singular von Daten, nicht der Kalendertag) einen Namen geben.
  - Das `name="NAME"`-Attribut verknüpft ein eingetragenes Datum mit einem Namen.

```html
<form action="/form-handling-page.php" method="post"> 
  <input type="text" id="username" name="username" />
  <input type="password" id="password" name="password" />
  <button type="submit" name="login-form">Log In</button>
</form>3
```

Obiges Formular sendet die Formulardaten in einem _POST_-Request an die URL "/form-handling-page.php".

In PHP kämen die Formulardaten als assoziatives Array an, das so aussähe:
```php?start_inline=true
$_POST = [
  'username' => 'mariopizza',
  'password' => 'smackmyjetchup',
  'submit'   => 'login-form'
];
```


<!-- TODO: https://developer.mozilla.org/en-US/docs/Learn/HTML/Forms/The_native_form_widgets#autocomplete_box -->
<!-- TODO: https://developer.mozilla.org/en-US/docs/Learn/HTML/Forms/Sending_and_retrieving_form_data -->
<!-- TODO: https://developer.mozilla.org/en-US/docs/Learn/HTML/Forms/Form_validation -->
<!-- TODO: https://developer.mozilla.org/en-US/docs/Learn/HTML/Forms/Styling_HTML_forms -->
<!-- TODO: https://developer.mozilla.org/en-US/docs/Learn/HTML/Forms/Advanced_styling_for_HTML_forms -->
<!-- TODO: https://developer.mozilla.org/en-US/docs/Learn/HTML/Forms/Property_compatibility_table_for_form_widgets -->
<!-- TODO: https://developer.mozilla.org/en-US/docs/Learn/HTML/Forms/How_to_build_custom_form_widgets -->
<!-- TODO: https://developer.mozilla.org/en-US/docs/Learn/HTML/Forms/Sending_forms_through_JavaScript -->
TODO: 


```html
<form action="/form-handling-page" method="post">

  <section>
    <h2>User Data</h2>

    <div>
      <label for="username">Name:
        <abbr title="required">*</abbr>
      </label>
      <input id="username" type="text" name="username">
    </div>
  </section>

  <section>
    <h2>Dinner Options</h2>

    <fieldset>
      <legend>Beer size</legend>

      <div>
        <label for="size_1">Small</label>
        <input type="radio" name="size" id="size_1" value="small">
      </div>
      <div>
        <label for="size_2">Medium</label>
        <input type="radio" name="size" id="size_2" value="medium">
      </div>
      <div>
        <label for="size_3">Large</label>        
        <input type="radio" name="size" id="size_3" value="large">
      </div>
    </fieldset>

    <div>
      <label for="toppings">
        <span>Cheese type:</span>
      </label>
      <select multiple id="toppings" name="toppings">
        <optgroup label="Cheese">
          <option value="edam">Edam</option>
          <option value="gouda" selected>Gouda</option>
          <option value="mozzarella">Mozzarella</option>
        </optgroup>
        <optgroup label="Condiments">
          <option value="chili">Chili</option>
          <option value="tabasco" selected>Tabasco</option>
        </optgroup>
      </select>
    </div>
  </section>

  <button type="submit">Get your cheesy Dinner</button>

</form>
```
