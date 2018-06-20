---
layout: techdoc
title: Datenbanken
order: 800
examples: true
exercises: false
solutions: false
---
* TOC
{:toc}

## Grundlagen
PHP stellt verschiedene [APIs](https://de.wikipedia.org/wiki/Programmierschnittstelle) zur Verfügung, um eine Verbindung zu einem MySQL/MariaDB Datenbankserver herzustellen und Anfragen an diesen zu senden.

Diese APIs können prozedural oder objektorientiert sein. Um eine Aufgabe zu erledigen, werden bei einer prozeduralen API Funktionen aufgerufen, während man bei einer objektorientierten API Klassen instanziiert um dann über die erzeugten Objekte Methoden aufzurufen. Im Allgemeinen wird das objektorientierte Interface bevorzugt.

In der PHP Dokumentation und auch hier wird oft zwischen beiden Stilen gewechselt. So kann die selbe Funktion prozedural als `mysqli_query` oder objektorientiert als `mysqli::query` bzw `$myDbConnection->query()` geschrieben werden.

Im Allgemeinen sollten in SQL Anfragen die Namen von Tabellenspalten immer in Backticks (`) gesetzt werden. Zur Verbesserung der Lesbarkeit lasse ich dies in der Dokumentation größtenteils weg.

### Connector / Driver / Extension
#### Was ist ein Connector?
Ein _Connector_ ist eine Software, mit der eine Anwendung sich zu einer MySQL/MariaDB Datenbank verbinden kann. MySQL besitzt "Konnektoren" für eine Vielzahl von Sprachen, wie zB PHP.

#### Was ist ein Driver?
Ein _Driver_ ist ebenfalls eine Software, die dazu dient, mit einem bestimmten Typ von Datenbankserver zu kommunizieren. Dieser Driver benutzt oft selbst eine Bibliothek, wie zB die _MySQL Client Library_ oder den _MySQL Native Driver_. Diese Bibliotheken implementieren das "low-level protocol", also die Kommunikation auf unterster Ebene, um mit dem MySQL Server Daten auszutauschen.

So kann, zum Beipsiel, die PHP Data Objects (PDO) Abstraktionsschicht (abstraction layer) verschiedene Datenbankspezifische Treiber benutzen. Einer dieser ist der _PDO MYSQL_ Treiber, der weiß, wie man mit einem MySQL Server kommuniziert. 

#### Was ist eine Extension?
Der Code der PHP Programmiersprache besteht aus dem Core (Kern) und _Extension_s (Erweiterungen), die in diesen Core geladen werden können, um dessen Funktionalität zu erweitern. Also eine Art Plugin. So ist zB die _mysqli extension_ mit Hilfe des _PHP extension framework_s implementiert.

Normalerweise stellt eine Extension dem Programmierer eine API zur Verfügung, damit er programmatisch auf deren Funktionen zugreifen kann. Dies ist aber nicht immer der Fall. Die _PDO MySQL driver extension_ stellt dem Programmierer zB keine API zur Verfügung, sondern ist lediglich ein Interface für den darüber liegenden PDO Layer.

In PHP gibt es grundsätzlich drei Optionen, wie man auf einem MySQL Datenbankserver zugreifen kann:
* MySQL Extension - veraltet und unsicher - nicht verwenden!
* [mysqli Extension](http://php.net/manual/en/book.mysqli.php)
* [Data Objects (PDO)](http://php.net/manual/en/book.pdo.php)


#### Was ist die mysqli Extension?
Die mysqli (improved) extension gibt es seit PHP version 5. Sie bietet gegenüber der älteren mysql extension einige Vorteile, wie zB:
* ein Objektorientiertes Interface
* Prepared Statements
* Multiple Statements
* Transactions
* Embedded server support


#### Was ist PDO?
PHP Data Objects, oder PDO, ist eine Datenbankabstraktionsschicht (database abstraction layer) für PHP Applikationen. Ihr Ziel ist es, dem Programmierer eine einheitliche API zur verfügung zu stellen, unabhängig vom verwendeten Datenbankserver. Theoretisch werden mit der PDO API nur wenige Codeanpassungen benötigt, um den Datenbankserver zu wechseln (zB von (Firebird zu MySQL).

PDO hat zwar ein saubere, einfache und [portable](https://en.wikipedia.org/wiki/Software_portability) API, unterstützt aber nicht alle erweiterten Features der neuesten MySQL Version.



## mysqli
Die mysqli Extension kann über ein prozedurales oder ein objektorientiertes Interface verwendet werden. Damit der Code klar und einheitlich bleibt, sollte jedoch nicht zwischen beiden Stilen gewechselt werden.

Objekte von Typ `mysqli` stellen dabei die Verbindung zwischen PHP und der MySQL Datenbank dar, der Typ `mysqli_stmt` repräsentiert ein Prepared Statement und die `mysqli_result` Klasse ist das Result Set, das man nach einer Query an die Datenbank erhält.

```php?start_inline=true
// Procedural (pcd)
$mysqli = mysqli_connect("example.com", "user", "password", "database");
if (mysqli_connect_errno($mysqli)) {
    echo "Failed to connect to MySQL: " . mysqli_connect_error();
}

$res = mysqli_query($mysqli, "SELECT 'A world full of ' AS _msg FROM DUAL");
$row = mysqli_fetch_assoc($res);
echo $row['_msg'];

// Object oriented (oop)
$mysqli = new mysqli("example.com", "user", "password", "database");
if ($mysqli->connect_errno) {
    echo "Failed to connect to MySQL: " . $mysqli->connect_error;
}

$res = $mysqli->query("SELECT 'choices to please everybody.' AS _msg FROM DUAL");
$row = $res->fetch_assoc();
echo $row['_msg'];
?>
```


<!-- TODO ### Connections
The MySQL server supports the use of different transport layers for connections. Connections use TCP/IP, Unix domain sockets or Windows named pipes.

By default, every database connection opened by a script is either explicitly closed by the user during runtime or released automatically at the end of the script.

The hostname localhost has a special meaning. It is bound to the use of Unix domain sockets. It is not possible to open a TCP/IP connection using the hostname localhost you must use 127.0.0.1 instead.

Example #1 Special meaning of localhost

```php
<?php
$mysqli = new mysqli("localhost", "user", "password", "database");
if ($mysqli->connect_errno) {
    echo "Failed to connect to MySQL: (" . $mysqli->connect_errno . ") " . $mysqli->connect_error;
}
echo $mysqli->host_info . "\n";

$mysqli = new mysqli("127.0.0.1", "user", "password", "database", 3306);
if ($mysqli->connect_errno) {
    echo "Failed to connect to MySQL: (" . $mysqli->connect_errno . ") " . $mysqli->connect_error;
}

echo $mysqli->host_info . "\n";
?>
```
The above example will output:

Localhost via UNIX socket
127.0.0.1 via TCP/IP


Depending on the connection function used, assorted parameters can be omitted. If a parameter is not provided, then the extension attempts to use the default values that are set in the PHP configuration file.

If the host value is unset or empty, then the client library will default to a Unix socket connection on localhost. If socket is unset or empty, and a Unix socket connection is requested, then a connection to the default socket on /tmp/mysql.sock is attempted.

Example #2 Setting defaults

mysqli.default_host=192.168.2.27
mysqli.default_user=root
mysqli.default_pw=""
mysqli.default_port=3306
mysqli.default_socket=/tmp/mysql.sock -->


### Connection Options
Mit Connection Options (Berbindungsoptionen) können zum Beispiel _init_ Befehle festgelegt werden, die beim Herstellen der Verbindung ausgeführt werden, oder es kann ein bestimmtes _Character Encoding_ verlangt werden. Diese optionen müssen gesetzt werden, bevor die Verbindung hergestellt wird.

Die Reihenfolge ist also:
1. mysqli_init() - Erstellen eines Connection Handles
1. mysqli_options() - Setzen der gewünschten Optionen
1. mysqli_real_connect() - Herstellen der Netzwerkverbindung


<!-- TODO Persistant Connections http://php.net/manual/en/mysqli.quickstart.connections.php -->


### Statements abschicken
Ein SQL Statement kann mit den Funktionen `mysqli_query()`, `mysqli_real_query()` und `mysqli_multi_query()` ausgeführt werden. Am häufigsten wird `mysqli_query()` verwendet. Sie führt ein Statement aus und holt sich über einen "buffered fetch" das "result set". Ein Aufruf von `mysqli_query()` ist identisch mit einem Aufruf von `mysqli_real_query()` gefolgt von einem Aufruf von `mysqli_store_result()`.
```php?start_inline=true
// Verbindung zur Datenbank herstellen (oop)
$mysqli = new mysqli("example.com", "user", "password", "database");
if ($mysqli->connect_errno) {
    echo "Failed to connect to MySQL: (" . $mysqli->connect_errno . ") " . $mysqli->connect_error;
}

// Drei Queries absetzen (oop)
if (!$mysqli->query("DROP TABLE IF EXISTS test") ||
    !$mysqli->query("CREATE TABLE test(id INT)") ||
    !$mysqli->query("INSERT INTO test(id) VALUES (1)")) {
    echo "Table creation failed: (" . $mysqli->errno . ") " . $mysqli->error;
}
```

#### Result Sets
Nachdem ein Statement ausgeführt wurde, kann das Ergebnis entweder sofort und vollständig abgerufen werden, um es auf dem Client zu [buffern](https://de.wikipedia.org/wiki/Puffer_(Informatik)), oder der Client kann es Zeile für Zeile vom Server auslesen (unbuffered).


##### Buffered Result Sets
Bei einem gebufferten Result Set werden die gesamten Daten auf ein Mal zum Client übertragen und dort gespeichert. Deshalb kann man frei im Result Set navigieren. Dies kann bei großen Result Sets jedoch viel Speicherplatz einnehmen.

Der Vorteil ist, dass die Resourcen, die auf dem Server zum Vorhalten des Ergebnisses verwendet werden, früher wieder freigegeben werden können. Grundsätzlich empfiehlt es sich, gebufferte Result Sets zu verwenden. Außerdem ist es oft leichter, auf dem Client zu skalieren, als auf dem Server.

`mysqli_query()` kombiniert die Ausführung eines Statements und die Bufferung des Result Sets. Das Result Set liegt anschließend im Speicher des Clients, was den Zugriff und die Navigation beschleunigt.
```php?start_inline=true
// Fortführung des letzten Beispiels: (oop)
$res = $mysqli->query("SELECT id FROM test ORDER BY id ASC");

echo "Reverse order: ";
for ($row_no = $res->num_rows - 1; $row_no >= 0; $row_no--) {
    $res->data_seek($row_no);
    $row = $res->fetch_assoc();
    echo " id = " . $row['id'] . ", ";
}
//=> Reverse order: id = 3, id = 2, id = 1, 

echo "Result set order: ";
$res->data_seek(0);
while ($row = $res->fetch_assoc()) {
    echo " id = " . $row['id'] . ", ";
}
//=> Result set order: id = 1, id = 2, id = 3, 
```

##### Ungebufferte Result Sets
Wenn der Client nur wenig Speicher besitzt und es nicht nötig ist, die Serverlast niedrig zu halten, können auch ungebufferte Result Sets verwendet werden. Durch ein ungebuffertes Result Set kann man jedoch erst navigieren, nachdem alle Zeilen gelesen wurden.

Mit der Funktion `mysqli::real_query` kann ein Query-Statement ausgeführt werden. Mit `mysqli::use_result` gibt ein ungebuffertes _result object_ zurück.
```php?start_inline=true
// Navigation durch ein unbuffered result set (oop)
$mysqli->real_query("SELECT id FROM test ORDER BY id ASC");
$res = $mysqli->use_result();

echo "Result set order...\n";
while ($row = $res->fetch_assoc()) {
    echo " id = " . $row['id'] . "\n";
}
```

<!-- TODO!!! fetch_object, free -->
<!-- TODO Result set values data types -->
<!-- 
The mysqli_query(), mysqli_real_query() and mysqli_multi_query() functions are used to execute non-prepared statements. At the level of the MySQL Client Server Protocol, the command COM_QUERY and the text protocol are used for statement execution. With the text protocol, the MySQL server converts all data of a result sets into strings before sending. This conversion is done regardless of the SQL result set column data type. The mysql client libraries receive all column values as strings. No further client-side casting is done to convert columns back to their native types. Instead, all values are provided as PHP strings.

Example #4 Text protocol returns strings by default

<?php
$mysqli = new mysqli("example.com", "user", "password", "database");
if ($mysqli->connect_errno) {
    echo "Failed to connect to MySQL: (" . $mysqli->connect_errno . ") " . $mysqli->connect_error;
}

if (!$mysqli->query("DROP TABLE IF EXISTS test") ||
    !$mysqli->query("CREATE TABLE test(id INT, label CHAR(1))") ||
    !$mysqli->query("INSERT INTO test(id, label) VALUES (1, 'a')")) {
    echo "Table creation failed: (" . $mysqli->errno . ") " . $mysqli->error;
}

$res = $mysqli->query("SELECT id, label FROM test WHERE id = 1");
$row = $res->fetch_assoc();

printf("id = %s (%s)\n", $row['id'], gettype($row['id']));
printf("label = %s (%s)\n", $row['label'], gettype($row['label']));
?>
The above example will output:

id = 1 (string)
label = a (string)
It is possible to convert integer and float columns back to PHP numbers by setting the MYSQLI_OPT_INT_AND_FLOAT_NATIVE connection option -->


### Prepared Statements
MySQL und MariaDB unterstützen "[Prepared Statements](https://de.wikipedia.org/wiki/Prepared_Statement)", sozusagen eine "vorbereitete Anweisung". Diese werden verwendet, um effizient das gleiche Statement wiederholt auszuführen.

#### Vorgehensweise
Ein Prepared Statement wird in zwei Schritten ausgeführt:
1. Prepare (Vorbereitung)
1. Execute (Ausführung)

Bei der *Vorbereitung* wird ein Statement Templates zum Server geschickt. Dieser führt einen Syntax Check durch und initialisiert die nötigen Resourcen für die spätere Verwendung.

Zur Übergabe von Parametern wird in MySQL das `?` als Platzhalter verwendet.

Bei der *Ausführung* bindet der Client die Werte der Parameter an die Platzhalter im Template und schickt sie dann zum Server. Der Server erzeugt aus dem Template und den gebundenen Werten ein Statement und führt es unter Verwendung der zuvor erzeugten Resourcen aus.
```php?start_inline=true
$mysqli = new mysqli("example.com", "user", "password", "database");
[...]

// Non-prepared statement
if (!$mysqli->query("DROP TABLE IF EXISTS test") ||
    !$mysqli->query("CREATE TABLE test(id INT)")) {
    echo "Table creation failed: (" . $mysqli->errno . ") " . $mysqli->error;
}

// Prepared statement: prepare
if (!($stmt = $mysqli->prepare("INSERT INTO test(id) VALUES (?)"))) {
    echo "Prepare failed: (" . $mysqli->errno . ") " . $mysqli->error;
}

// Prepared statement: bind and execute
$id = 1;
if (!$stmt->bind_param("i", $id)) {
    echo "Binding parameters failed: (" . $stmt->errno . ") " . $stmt->error;
}

if (!$stmt->execute()) {
    echo "Execute failed: (" . $stmt->errno . ") " . $stmt->error;
}
```

Ein Prepared Statement kann wiederholt ausgeführt werden. Bei jeder Wiederholung wird der Wert der gebundenen Variable neu ausgewertet und zum Server geschickt. Das Statement selbst wird nicht erneut zum Server geschickt und auch nicht noch einmal geparst.
```php?start_inline=true
// INSERT: einmal prepared, mehrfach executed (oop)
$mysqli = new mysqli("example.com", "user", "password", "database");
[...]

// prepare
if (!($stmt = $mysqli->prepare("INSERT INTO test(id) VALUES (?)"))) {
     echo "Prepare failed: (" . $mysqli->errno . ") " . $mysqli->error;
}

// bind
$id = 1;
if (!$stmt->bind_param("i", $id)) {
    echo "Binding parameters failed: (" . $stmt->errno . ") " . $stmt->error;
}

// repeated execution
for ($id = 2; $id < 5; $id++) {
    if (!$stmt->execute()) {
        echo "Execute failed: (" . $stmt->errno . ") " . $stmt->error;
    }
}

//=> Ausgabe:
// array(4) {
//     [0]=> array(1) { [0]=> string(1) "1" }
//     [1]=> array(1) { [0]=> string(1) "2" }
//     [2]=> array(1) { [0]=> string(1) "3" }
//     [3]=> array(1) { [0]=> string(1) "4" }
// }

// Explizites Schließen der Verbindung - sollte man tun.
$stmt->close();
```

Jeder Prepared Statement belegt Serverressourcen. Deshalb sollten diese Statements immer explizit mit `mysqli_stmt::close()` geschlossen werden. Andernfalls wird das Statement erst geschlossen, wenn PHP den Statement-Handle freigibt.

Ein Prepared Statement ist nicht immer die effizienteste Möglichkeit, ein Statement auszuführen. Soll ein Prepared Statement zum Beispiel nur ein einziges Mal ausgeführt werden, dann hätte dies mehr "[Round Trips](https://en.wikipedia.org/wiki/Round-trip_delay_time)" zur Folge, als wenn kein Prepared Statement verwendet worden wäre.

Auch mit der _MySQL multi-INSERT syntax_ kann die Anzahl der Round Trips reduziert werden:
```php?start_inline=true
// multi-INSERT SQL (oop)
if (!$mysqli->query("INSERT INTO test(id) VALUES (1), (2), (3), (4)")) {
    echo "Multi-INSERT failed: (" . $mysqli->errno . ") " . $mysqli->error;
}
```

### Datentypen von Result Sets
Das _MySQL Client Server Protocol_ definiert für Prepared Statements und non-Prepared-Statements unterschiedliche Datenübertragungsprotokolle.

Prepared Statements verwenden das sogenannte _binary protocol_ (Binärprotokoll). Die Daten werden im Binärformat übertragen. Die Ergebnisse werden vor dem Versenden nicht zu Strings serialisiert. Die Clientbibliothek empfängt also Binärdaten und versucht diese in entprechende PHP Datentypen zu konvertieren. Der Wert einer _SQL INT_ Spalte steht zB als PHP Integer bereit.
```php?start_inline=true
// Native datatypes
$mysqli = new mysqli("example.com", "user", "password", "database");
[...]

$stmt = $mysqli->prepare("SELECT id, label FROM test WHERE id = 1");
$stmt->execute();
$res = $stmt->get_result();
$row = $res->fetch_assoc();

printf("id = %s (%s)\n", $row['id'], gettype($row['id']));
//=> id = 1 (integer)

printf("label = %s (%s)\n", $row['label'], gettype($row['label']));
//=> label = a (string)
```

Im Gegensatz dazu liefern non-Prepared Statements standardmäßig alle Werte als Strings. Die kann über die _connection option_ `MYSQLI_OPT_INT_AND_FLOAT_NATIVE` eingestellt werden.


### Ergebnisse mit Bound Variables
Die Ergebnisse eines Prepared Statements können über ein `mysqli_result` Objekt abgerufen werden, oder über gebundene Variablen, also bound output variables. Diese müssen gebunden werden, nachdem das Statement ausgeführt wurde. Pro Spalte des Result Sets muss eine Variable gebunden werden.
```php?start_inline=true
// Output variable binding
$mysqli = new mysqli("example.com", "user", "password", "database");
[...]

$stmt = $mysqli->prepare("SELECT id, label FROM test")
$stmt->execute();

$out_id    = NULL;
$out_label = NULL;
if (!$stmt->bind_result($out_id, $out_label)) {
    echo "Binding output parameters failed: (" . $stmt->errno . ") " . $stmt->error;
}

while ($stmt->fetch()) {
    printf("id = %s (%s), label = %s (%s)\n", $out_id, gettype($out_id), $out_label, gettype($out_label));
}
//=> id = 1 (integer), label = a (string)
```

Prepared Statements geben standardmäßig ungebufferte Result Sets zurück. Die Ergebnisse des Statements werden also nicht implizit vom Server zum Client übertragen. Das Result Set belegt deshalb Ressourcen auf dem Server, bis alle Ergebniise abgerufen wurden. Deshalb sollte dies zügig geschehen.

Ruft ein Client nicht alle Ergebnisse ab, oder schließt er das Statement, bevor er alle Ergebnisse abgerufen hat, müssen die Daten explizit über mysqli abgerufen werden.

Mit `mysqli::store_result` können die Ergebnisse eines Prepared Statements gebuffert werden.


### Ergebnisse mit dem mysqli_result Interface
Statt gebundener Ergebnisse können diese auch über das `mysqli_result` Interface abgefragt werden. `mysqli_stmt::get_result()` gibt ein gebuffertes Result Set zurück.

Außerdem hat das _mysqli_result_ Interface den Vorteil, dass das Result Set auf dem Client frei navigiert werden kann.
```php?start_inline=true
// Ergebnisse über mysqli_result (oop)
$mysqli = new mysqli("example.com", "user", "password", "database");
[...]

$stmt = $mysqli->prepare("SELECT id, label FROM test ORDER BY id ASC")
$stmt->execute();
$res = $stmt->get_result();

var_dump($res->fetch_all());
//=> array(1) { [0]=> array(2) { [0]=> int(1) [1]=> string(1) "a" } }

// Navigation im gebufferten Result Set
$stmt = $mysqli->prepare("SELECT id, label FROM test")
$stmt->execute();
$res = $stmt->get_result();

for ($row_no = ($res->num_rows - 1); $row_no >= 0; $row_no--) {
    $res->data_seek($row_no);
    var_dump($res->fetch_assoc());
}
$res->close();
//=> array(2) { ["id"]=> int(3) ["label"]=> string(1) "c" }
//=> array(2) { ["id"]=> int(2) ["label"]=> string(1) "b" }
```

### Escapen und SQL Injection
<!-- TODO: Move this to Security??? -->
Gebundene Variablen werden getrennt vom Query Statement zum Server geschickt. Deshalb können sie dieses nicht manipulieren. Nachdem der Server die Query geparst hat, verwendet er diese Werte direkt. Deshalb müssen die Parameter von Prepared Statements nicht escapet werden. Sie werden nie direkt in den Query-String eingefügt.

Der Server muss wissen, um welchen Datentyp es sich bei gebundenen Variablen handelt, damit er die entsprechenden Konvertierungen durchführen kann. Dieser wird im ersten Argument der `mysqli_stmt::bind_param()` Funktion angegeben.

Der selbe grad an Sicherheit kann auch mit non-Prepared Statements erzieht werden, wenn man dafür sorgt, dass alle Werte korrekt formatiert sind.

*Achtung:* Die korrekte Formatierung eines Wertes ist nicht das selbe wie das Escapen eines Wertes. Beim Escapen werden nur bestimmte Zeichen durch Escape-Sequenzen ersetzt. Die Überprüfung der korrekten Formatierung ist komplexer und sorgt dafür, dass der Wert in genau dem vorgesehenen Format gespeichert wird.


Einen Vergleich von Prepared und non-Prepared Statements bietet die folgende [Tabelle](http://php.net/manual/en/mysqli.quickstart.prepared-statements.php)
<table class="doctable table">
    <thead>
     <tr>
      <th class="empty">&nbsp;</th>
      <th>Prepared Statement</th>
      <th>Non-prepared statement</th>
    </tr>
    </thead>
    <tbody class="tbody">
     <tr>
      <td>Client-server round trips, SELECT, single execution</td>
      <td>2</td>
      <td>1</td>
     </tr>
     <tr>
      <td>Statement string transferred from client to server</td>
      <td>1</td>
      <td>1</td>
     </tr>
     <tr>
      <td>Client-server round trips, SELECT, repeated (n) execution</td>
      <td>1 + n</td>
      <td>n</td>
     </tr>
     <tr>
      <td>Statement string transferred from client to server</td>
      <td>1 template, n times bound parameter, if any</td>
      <td>n times together with parameter, if any</td>
     </tr>
     <tr>
      <td>Input parameter binding API</td>
      <td>Yes, automatic input escaping</td>
      <td>No, manual input escaping</td>
     </tr>
     <tr>
      <td>Output variable binding API</td>
      <td>Yes</td>
      <td>No</td>
     </tr>
     <tr>
      <td>Supports use of mysqli_result API</td>
      <td>Yes, use <span class="function"><a href="mysqli-stmt.get-result.php" class="function">mysqli_stmt_get_result()</a></span></td>
      <td>Yes</td>
     </tr>
     <tr>
      <td>Buffered result sets</td>
      <td>
       Yes, use <span class="function"><a href="mysqli-stmt.get-result.php" class="function">mysqli_stmt_get_result()</a></span> or
       binding with <span class="function"><a href="mysqli-stmt.store-result.php" class="function">mysqli_stmt_store_result()</a></span>
      </td>
      <td>Yes, default of <span class="function"><a href="mysqli.query.php" class="function">mysqli_query()</a></span></td>
     </tr>
     <tr>
      <td>Unbuffered result sets</td>
      <td>Yes, use output binding API</td>
      <td>
       Yes, use <span class="function"><a href="mysqli.real-query.php" class="function">mysqli_real_query()</a></span> with
       <span class="function"><a href="mysqli.use-result.php" class="function">mysqli_use_result()</a></span>
      </td>
     </tr>
     <tr>
      <td>MySQL Client Server protocol data transfer flavor</td>
      <td>Binary protocol</td>
      <td>Text protocol</td>
     </tr>
     <tr>
      <td>Result set values SQL data types</td>
      <td>Preserved when fetching</td>
      <td>Converted to string or preserved when fetching</td>
     </tr>
     <tr>
      <td>Supports all SQL statements</td>
      <td>Recent MySQL versions support most but not all</td>
      <td>Yes</td>
     </tr>
    </tbody>
</table>


<!-- TODO ### Stored Procedures

The MySQL database supports stored procedures. A stored procedure is a subroutine stored in the database catalog. Applications can call and execute the stored procedure. The CALL SQL statement is used to execute a stored procedure.

Parameter

Stored procedures can have IN, INOUT and OUT parameters, depending on the MySQL version. The mysqli interface has no special notion for the different kinds of parameters.

IN parameter

Input parameters are provided with the CALL statement. Please, make sure values are escaped correctly.

Example #1 Calling a stored procedure

<?php
$mysqli = new mysqli("example.com", "user", "password", "database");
if ($mysqli->connect_errno) {
    echo "Failed to connect to MySQL: (" . $mysqli->connect_errno . ") " . $mysqli->connect_error;
}

if (!$mysqli->query("DROP TABLE IF EXISTS test") || !$mysqli->query("CREATE TABLE test(id INT)")) {
    echo "Table creation failed: (" . $mysqli->errno . ") " . $mysqli->error;
}

if (!$mysqli->query("DROP PROCEDURE IF EXISTS p") ||
    !$mysqli->query("CREATE PROCEDURE p(IN id_val INT) BEGIN INSERT INTO test(id) VALUES(id_val); END;")) {
    echo "Stored procedure creation failed: (" . $mysqli->errno . ") " . $mysqli->error;
}

if (!$mysqli->query("CALL p(1)")) {
    echo "CALL failed: (" . $mysqli->errno . ") " . $mysqli->error;
}

if (!($res = $mysqli->query("SELECT id FROM test"))) {
    echo "SELECT failed: (" . $mysqli->errno . ") " . $mysqli->error;
}

var_dump($res->fetch_assoc());
?>
The above example will output:

array(1) {
  ["id"]=>
  string(1) "1"
}
INOUT/OUT parameter

The values of INOUT/OUT parameters are accessed using session variables.

Example #2 Using session variables

<?php
$mysqli = new mysqli("example.com", "user", "password", "database");
if ($mysqli->connect_errno) {
    echo "Failed to connect to MySQL: (" . $mysqli->connect_errno . ") " . $mysqli->connect_error;
}

if (!$mysqli->query("DROP PROCEDURE IF EXISTS p") ||
    !$mysqli->query('CREATE PROCEDURE p(OUT msg VARCHAR(50)) BEGIN SELECT "Hi!" INTO msg; END;')) {
    echo "Stored procedure creation failed: (" . $mysqli->errno . ") " . $mysqli->error;
}


if (!$mysqli->query("SET @msg = ''") || !$mysqli->query("CALL p(@msg)")) {
    echo "CALL failed: (" . $mysqli->errno . ") " . $mysqli->error;
}

if (!($res = $mysqli->query("SELECT @msg as _p_out"))) {
    echo "Fetch failed: (" . $mysqli->errno . ") " . $mysqli->error;
}

$row = $res->fetch_assoc();
echo $row['_p_out'];
?>
The above example will output:

Hi!
Application and framework developers may be able to provide a more convenient API using a mix of session variables and databased catalog inspection. However, please note the possible performance impact of a custom solution based on catalog inspection.

Handling result sets

Stored procedures can return result sets. Result sets returned from a stored procedure cannot be fetched correctly using mysqli_query(). The mysqli_query() function combines statement execution and fetching the first result set into a buffered result set, if any. However, there are additional stored procedure result sets hidden from the user which cause mysqli_query() to fail returning the user expected result sets.

Result sets returned from a stored procedure are fetched using mysqli_real_query() or mysqli_multi_query(). Both functions allow fetching any number of result sets returned by a statement, such as CALL. Failing to fetch all result sets returned by a stored procedure causes an error.

Example #3 Fetching results from stored procedures

<?php
$mysqli = new mysqli("example.com", "user", "password", "database");
if ($mysqli->connect_errno) {
    echo "Failed to connect to MySQL: (" . $mysqli->connect_errno . ") " . $mysqli->connect_error;
}

if (!$mysqli->query("DROP TABLE IF EXISTS test") ||
    !$mysqli->query("CREATE TABLE test(id INT)") ||
    !$mysqli->query("INSERT INTO test(id) VALUES (1), (2), (3)")) {
    echo "Table creation failed: (" . $mysqli->errno . ") " . $mysqli->error;
}

if (!$mysqli->query("DROP PROCEDURE IF EXISTS p") ||
    !$mysqli->query('CREATE PROCEDURE p() READS SQL DATA BEGIN SELECT id FROM test; SELECT id + 1 FROM test; END;')) {
    echo "Stored procedure creation failed: (" . $mysqli->errno . ") " . $mysqli->error;
}

if (!$mysqli->multi_query("CALL p()")) {
    echo "CALL failed: (" . $mysqli->errno . ") " . $mysqli->error;
}

do {
    if ($res = $mysqli->store_result()) {
        printf("---\n");
        var_dump($res->fetch_all());
        $res->free();
    } else {
        if ($mysqli->errno) {
            echo "Store failed: (" . $mysqli->errno . ") " . $mysqli->error;
        }
    }
} while ($mysqli->more_results() && $mysqli->next_result());
?>
The above example will output:

---
array(3) {
  [0]=>
  array(1) {
    [0]=>
    string(1) "1"
  }
  [1]=>
  array(1) {
    [0]=>
    string(1) "2"
  }
  [2]=>
  array(1) {
    [0]=>
    string(1) "3"
  }
}
---
array(3) {
  [0]=>
  array(1) {
    [0]=>
    string(1) "2"
  }
  [1]=>
  array(1) {
    [0]=>
    string(1) "3"
  }
  [2]=>
  array(1) {
    [0]=>
    string(1) "4"
  }
}
Use of prepared statements

No special handling is required when using the prepared statement interface for fetching results from the same stored procedure as above. The prepared statement and non-prepared statement interfaces are similar. Please note, that not every MYSQL server version may support preparing the CALL SQL statement.

Example #4 Stored Procedures and Prepared Statements

<?php
$mysqli = new mysqli("example.com", "user", "password", "database");
if ($mysqli->connect_errno) {
    echo "Failed to connect to MySQL: (" . $mysqli->connect_errno . ") " . $mysqli->connect_error;
}

if (!$mysqli->query("DROP TABLE IF EXISTS test") ||
    !$mysqli->query("CREATE TABLE test(id INT)") ||
    !$mysqli->query("INSERT INTO test(id) VALUES (1), (2), (3)")) {
    echo "Table creation failed: (" . $mysqli->errno . ") " . $mysqli->error;
}

if (!$mysqli->query("DROP PROCEDURE IF EXISTS p") ||
    !$mysqli->query('CREATE PROCEDURE p() READS SQL DATA BEGIN SELECT id FROM test; SELECT id + 1 FROM test; END;')) {
    echo "Stored procedure creation failed: (" . $mysqli->errno . ") " . $mysqli->error;
}

if (!($stmt = $mysqli->prepare("CALL p()"))) {
    echo "Prepare failed: (" . $mysqli->errno . ") " . $mysqli->error;
}

if (!$stmt->execute()) {
    echo "Execute failed: (" . $stmt->errno . ") " . $stmt->error;
}

do {
    if ($res = $stmt->get_result()) {
        printf("---\n");
        var_dump(mysqli_fetch_all($res));
        mysqli_free_result($res);
    } else {
        if ($stmt->errno) {
            echo "Store failed: (" . $stmt->errno . ") " . $stmt->error;
        }
    }
} while ($stmt->more_results() && $stmt->next_result());
?>
Of course, use of the bind API for fetching is supported as well.

Example #5 Stored Procedures and Prepared Statements using bind API

<?php
if (!($stmt = $mysqli->prepare("CALL p()"))) {
    echo "Prepare failed: (" . $mysqli->errno . ") " . $mysqli->error;
}

if (!$stmt->execute()) {
    echo "Execute failed: (" . $stmt->errno . ") " . $stmt->error;
}

do {

    $id_out = NULL;
    if (!$stmt->bind_result($id_out)) {
        echo "Bind failed: (" . $stmt->errno . ") " . $stmt->error;
    }
 
    while ($stmt->fetch()) {
        echo "id = $id_out\n";
    }
} while ($stmt->more_results() && $stmt->next_result());
?> -->


### Multiple Statements
MySQL erlaubt es auch, mehrere Statements in einem Statementstring zu übergeben. Auf diese Art kann die Anzahl der Client-Server Round Trips verringert werden.

Solche _Multiple Statements_ oder _Multi Queries_ müssen mit der Funktion `mysqli_multi_query()` ausgeführt werden. Die einzelnen Statements werden durch ein Semikolon getrennt. Anschließend müssen alle Result Sets abgegriffen werden.

Es können auch Statements, die Ein Result Set zurückgeben und solche, die keines zurückgeben, gemischt werden.
```php?start_inline=true
$mysqli = new mysqli("example.com", "user", "password", "database");
[...]

$sql = "SELECT COUNT(*) AS _num FROM test; ";
$sql.= "INSERT INTO test(id) VALUES (1); ";
$sql.= "SELECT COUNT(*) AS _num FROM test; ";

if (!$mysqli->multi_query($sql)) {
    echo "Multi query failed: (" . $mysqli->errno . ") " . $mysqli->error;
}

do {
    if ($res = $mysqli->store_result()) {
        var_dump($res->fetch_all(MYSQLI_ASSOC));
        $res->free();
    }
} while ($mysqli->more_results() && $mysqli->next_result());
//=> array(1) { [0]=> array(1) { ["_num"]=> string(1) "0"  } }
//=> array(1) { [0]=> array(1) { ["_num"]=> string(1) "1"  } }
```

Multiple Statements können nicht gleichzeitig mit Prepared Statements verwendet werden.

#### Sicherheit

`mysqli_query()` und `mysqli_real_query()` setzen am Server nicht das Flag (den Schalter) für Multiple Statements, um SQL Injection Angriffen vorzubeugen. Ein Statement wie `; DROP DATABASE mysql` oder `; SELECT SLEEP(999)` kann so nicht gefährlich werden. Selbst wenn der Angreifer es schafft, SQL in den Statement-String zu injecten, wird dieses nur ausgeführt, wenn man `mysqli_multi_query` verwendet.
```php?start_inline=true
$mysqli = new mysqli("example.com", "user", "password", "database");
$res    = $mysqli->query("SELECT 1; DROP TABLE mysql.user");
if (!$res) {
    echo "Error executing query: (" . $mysqli->errno . ") " . $mysqli->error;
}
//=> Error executing query: (1064) You have an error in your SQL syntax;
//=> check the manual that corresponds to your MySQL server version for the right syntax 
//=> to use near 'DROP TABLE mysql.user' at line 1
```


### Transaktionen / Transactions
Je nach verwendeter _Storage Enginge_ unterstützt der MySQL Server Transaktionen. Die Standard-Storage Engine ist seit MySQL 5.5 InnoDB. Diese unterstützt ACID transactions.

Transaktionen können entweder über SQL Statements oder API Funktionsaufruffe gesteuert werden. Um den "Auto Commit Mode" zu de-/aktivieren und um Transaktionen zu "committen" bzw "zurückzurollen (roll back)" empfiehlt es sich, wird API zu verwenden.
```php?start_inline=true
$mysqli = new mysqli("example.com", "user", "password", "database");
[...]

// Empfohlen: API
$mysqli->autocommit(false);

// SQL: Dies wird nicht vom Replikations- und Load Balancing Plugin erkannt
if (!$mysqli->query('SET AUTOCOMMIT = 0')) {
    echo "Query failed: (" . $mysqli->errno . ") " . $mysqli->error;
}

// Commit und rollback
$mysqli = new mysqli("example.com", "user", "password", "database");
$mysqli->autocommit(false);

$mysqli->query("INSERT INTO test(id) VALUES (1)");
$mysqli->rollback();

$mysqli->query("INSERT INTO test(id) VALUES (2)");
$mysqli->commit();
```

*Achtung:* Nicht alle Statements können zurückgerollt werden. Manche werden automatisch sofort committed.


### Metadata
MySQL Result Sets speichern immer einige Metadaten. Diese beschreiben die Spalten des Result Sets. Diese können über das mysqli_result Interface abgefragt werden.
```php?start_inline=true
$mysqli = new mysqli("example.com", "user", "password", "database");
[...]

$res = $mysqli->query("SELECT 1 AS _one, 'Hello' AS _two FROM DUAL");
var_dump($res->fetch_fields());
//=> array(2) { [0]=> object(stdClass)#3 (13) {
//=>    ["name"]=> string(4) "_one" ["orgname"]=> string(0) "" ["table"]=> string(0) ""
...
```

Bei Prepared Statements können die Metadaten über den mysqli_result-handle abgefragt werden, der von `mysqli_stmt_result_metadata()` zurückgegeben wird.
```php?start_inline=true
$stmt = $mysqli->prepare("SELECT 1 AS _one, 'Hello' AS _two FROM DUAL");
$stmt->execute();
$res = $stmt->result_metadata();
var_dump($res->fetch_fields());
```


<!-- TODO PDO http://php.net/manual/en/book.pdo.php -->