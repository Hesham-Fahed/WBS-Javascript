---
layout: techdoc
title: Vordefinierte Variablen
order: 600
examples: true
exercises: true
---
* TOC
{:toc}

## Vordefinierte Variablen
[Liste aller vordefinierten Variablen](http://php.net/manual/en/reserved.variables.php).

PHP stellt uns einige Superglobale zur Verfügung. Diese stehen in allen Scopes zur Verfügung und müssen in Funktionen nicht erst mit `global` angegeben werden. Die für uns interessanten Superglobalen fangen alle mit `$_` an und sind assoziative Arrays.

### $_GET
Beinhaltet alle Key-Value Paare, die dem Skript per URL-Parameter übergeben wurden.
```php?start_inline=true
// http://example.com/?name=Hannes&age=42
echo 'Hello ' . htmlspecialchars($_GET["name"]);  // Hello Hannes
echo ', age ' . intval($_GET["age"]) . '!';       // , age 42!
```

### $_POST
Enthält alle Key-Value Paare, die dem Skript mit der HTTP POST Methode übergeben wurden. Der HTTP Content-Type des Requests muss hierbei _application/x-www-form-urlencoded_ oder _multipart/form-data_ sein.
```php?start_inline=true
echo htmlspecialchars($_POST["selection"]) ?? 'no selection was made';
```

### $_SERVER
`$_SERVER` enthält Informationen zu Headern, Pfaden und Skripten. Diese Informationen stellt uns der Webserver zur Verfügung. Deshalb kann das Array, je nach verwendetem Webserver, kleine Unterschiede aufweisen.

In `$_SERVER['REQUEST_METHOD']` steht, welche HTTP-Request Methode verwendet wurde: 'GET', 'HEAD', 'POST', 'PUT' oder 'DELETE'.

Es gibt mehrere Möglichkteiten, den Pfad des aktuellen Scriptes herauszufinden.

```php
// http://example.com/test.php/foo/bar?winnie=poo
echo $_SERVER['SCRIPT_NAME'];     //=>  /projects/wbs/webdev/php/sandbox.php
echo $_SERVER['PHP_SELF'];        //=>  /projects/wbs/webdev/php/sandbox.php/foo/bar
echo $_SERVER['REQUEST_URI'];     //=>  /projects/wbs/webdev/php/sandbox.php/foo/bar?winnie=poo
```
`$_SERVER['PHP_SELF']` und `$_SERVER['REQUEST_URI']` sind potenzielle Angriffspunkte für XSS (Cross-Site Scripting) und müssen deshalb immer mit htmlspecialchars() bereinigt werden, bevor sie ins HTML ausgegeben werden.

[$_Server Dokumentation](http://php.net/manual/en/reserved.variables.server.php).


### $_COOKIE
Hier finden sich alle Cookies, die zuvor mit [setcookie()](http://php.net/manual/de/function.setcookie.php) gesetzt wurden.
```php?start_inline=true
setcookie('language', 'de', time() + (86400 * 30), "/");      // 86400 = 1 day

if(isset($_COOKIE['language'])) {
    echo "Cookie 'language' has value $_COOKIE['language']";
}
```

### $_SESSION
Beinhaltet alle Session-Variablen des aktuellen Skripts. Eine Liste der Funktionen zum Arbeiten mit Session-Variablen findet sich [hier](http://php.net/manual/en/ref.session.php).
```php?start_inline=true
session_start();               // Startet eine Session (wer hätte es gedacht?)

$_SESSION['james'] = 'bond';   // Legt das Key-Value-Paar _James => Bond_ in der Session an
echo $_SESSION['james'];       //=> bond

unset($_SESSION['james']);     // Löscht das Key-Value-Paar aus der Session
echo $_SESSION['james'];       //=> Notice: Undefined index: james

$_SESSION['Dr.'] = 'No';
echo $_SESSION['Dr.'];         //=> No

session_unset();               // Löscht alle Session Variablen
echo $_SESSION['Dr.'];         //=> Notice: Undefined index: Dr.
```

### $_FILES
Enthält Dateien, die mit der HTTP-Methode POST hochgeladen wurden, und Informationen über diese.

Beispiele [hier](http://php.net/manual/en/features.file-upload.post-method.php).

## Mehr Vordefiniertes
PHP stellt uns außerdem eine Reihe vordefinierter [Klassen und Interfaces](http://php.net/manual/en/reserved.interfaces.php), [Exceptions](http://php.net/manual/en/reserved.exceptions.php), [Kontextoptionen und -parameter](http://php.net/manual/en/context.php) sowie [Protokolle und Wrapper](http://php.net/manual/en/wrappers.php) zur verfügung. Auf diese näher einzugehen würde jedoch den Rahmen dieses Kurses sprengen. Deshalb sei hier nur ihre Existenz erwähnt.