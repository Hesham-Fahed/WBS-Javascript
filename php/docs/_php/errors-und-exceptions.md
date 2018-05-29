---
layout: techdoc
title: Errors und Exceptions
order: 1100
examples: false
exercises: false
---
* TOC
{:toc}

Im Folgenden unterscheide ich strikt zwischen Errors und Exceptions. Error bezieht sich immer auf die klassische PHP Fehlerbehandlung (PHP5 und älter). Eine Exception ist ein Konzept der OOP und steht erst seit PHP7 zur Verfügung.

## Errors - Fehler
Jeder von PHP generierte Fehler hat einen Typ. Eine List dieser Typen findet sich [hier](http://php.net/manual/en/errorfunc.constants.php).

Wird eine Fehler nicht von einem Handler abgefangen, dann verhält sich PHP so, wie es seine Konfiguration vorgibt. Welche Fehler berichtet werden, welche geloggt werden und welche ingoriert werden, bestimmt die `error_reporting` Direktive in der _php.ini_ Konfigurationsdatei. Während der Laufzeit kann das Verhalten über die Funktion [error_reporting()](http://php.net/manual/de/errorfunc.configuration.php#ini.error-reporting) gesteuert werden.

Da Fehler bereits auftreten können, bevor das eigentliche Skript ausgeführt wird, empfielt es sich, den Wert bereits in _php.ini_ zu setzen.

In einer Entwicklungsumgebung sollte error_reporting aus offensichtlichen Gründen immer auf `E_ALL` gesetzt sein. In der Produktion will man meist nicht jeden kleinen Fehler anzeigen, so dass error_reporting hier oft auf `E_ALL & ~E_NOTICE & ~E_STRICT & ~E_DEPRECATED` gesetzt wird. (error_reporting wird über eine Bitmaske gesteuert)

Was PHP mit Fehlern macht, hängt von zwei weiteren php.ini Direktiven ab:
* display_errors legt fest, ob das Skript Fehlermeldungen (meist an den Browser) ausgibt. Da dies auch sensible Daten wie Passwörter enthalten kann, sollte es in einer Produktionsumgebung immer deaktiviert werden.
* log_errors gibt an, ob Fehler in die mit error_log angegebene Datei geloggt werden sollen. Dies kann in Produktionsumgebungen helfen, Fehler zu finden, ohne dem Benutzer diese anzuzeigen.

## Fehler in PHP7
Seit PHP7 werden viele Fehler nicht mehr über den oben beschriebenen Mechanismus ausgegeben, sondern es wird stattdessen eine Exception geworfen.

Genau wie alle [Exceptions](https://github.com/radwild/webdev/wiki/Fehler-und-Exceptions-PHP#exceptions) _bubbeln_ (wie Blasen im Wasser) auch diese Error-Exceptions nach oben, bis sie auf einen passenden _catch_ Block treffen. Finden sie keinen passenden Block, wird ein Standard-Fehler-Handler (default exception handler) aufgerufen, welcher zuvor mit set_exception_handler() registriert wurde. Gibt es auch einen solchen nicht, wird die Exception in einen "fatal error" (einen "fatalen/tödlichen Fehler") umgewandelt und wie ein normaler PHP Fehler behandelt (oben beschrieben).

Da Fehler die klassische Error-Hierarchie *nicht* von Exception erben, können diese auch nicht durch einen `catch (Exception $e) { ... }` Block aufgefangen werden. Es muss entweder ein `catch (Error $e) { ... }` Block verwendet werden, oder mit set_exception_handler() ein Handler registriert werden.

### Error-Hierarchie
* Throwable
  * Error
    * ArithmeticError
      * DivisionByZeroError
    * AssertionError
    * ParseError
    * TypeError
  * Exception
    * ...

## Exceptions - Ausnahmen
### Extending Exceptions
Das Exception-Modell von PHP ist ähnlich wie das anderer Programmiersprachen. Exceptions können geworfen (throw) und gefangen (catch) werden. Im Code verwendet man einen sogenannten _try_-Block, innerhalb dessen Exceptions geworfen werden können. Diese können dann in einem _catch_-Block gefangen werden. Jedem _try_-Block muss wenigstens einen catch oder finally Block folgen.

Das geworferne Objekt muss eine Instanz der _Exception_-Klasse oder eine Kind-Klasse dieser sein. Andere Objekte zu werfen verursacht einen _PHP Fatal Error_.

Es können mehrere _catch_-Blöcke verwendet werden, um verschiedene Klassen von Exceptions zu fangen. Innerhalb eines _catch_-Blocks können ebenfalls Exceptions (weiter)geworfen werden.

Wird eine Exception geworfen, so wird der Code nach diesem Statement nicht mehr ausgeführt. Wird eine Exception nirgendwo gefangen, verursacht dies einen _PHP Fatal Error_, es sei denn, es wurde mit set_exception_handler() ein Handler registiert.

Seit PHP5.5 gibt es einen _finally_-Block. Der Code innerhalb dieses Blocks wird immer ausgeführt, und zwar nach allen _catch_-Blocks.

_Anmerkung:_ Generell kann man sagen, dass klassische, nicht OOP, PHP-Funktionen (meist erkennbar daran, dass sie nicht an einer Objekt-Instanz aufgerufen werden) das zuerst beschriebene PHP Error Reporting verwenden, während moderne, OOP Erweiterungen (die meist mit _include_ geladen werden müssen XXXXX?????) mit Exceptions verwenden. Errors lassen sich mit der [ErrorException](http://php.net/manual/class.errorexception.php) Klasse jedoch leicht in Exceptions umwandeln.

Die Standard PHP Bibliothek (Standard PHP Library, SPL) stellt bereits viele [vordefinierte Exceptions](http://php.net/manual/de/spl.exceptions.php) zur Verfügung.


## Erweitern von Exceptions (extend)
Eigene Exception-Klassen können definiert werden, indem man von der eingebaute Exception-Klasse erbt. Wenn man in der eigenen Klasse einen Konstruktor definiert, sollte dieser auf jeden Fall mit `parent::__construct()` den Konstruktor der Eltern-Klasse (Exception) aufrufen.
```php?start_inline=true
class MyException extends Exception {
    public function __construct($message, $code = 0, Exception $previous = null) {
        // initialize everything, then
        parent::__construct($message, $code, $previous);
    }
    public function __toString() {
        return __CLASS__ . ": [{$this->code}]: {$this->message}\n";
    }
}
```

Ein ausführliches Beispiel zu Exceptions findet sich [hier](http://php.net/manual/en/language.exceptions.extending.php#example-279).