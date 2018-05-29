---
layout: techdoc
title: Netzwerke
order: 1000
examples: false
exercises: false
solutions: false
---
* TOC
{:toc}

## Grundlagen
Formal sind Netzwerke Systeme, deren zugrundeliegende Struktur sich mathematisch als Graph modellieren lässt und die über Mechanismen zu ihrer Organisation verfügen. Anders ausgedrückt sind Netzwerke Gebilde, in denen verschiedene Dinge nach gewissen Regeln miteinander verbunden sind.

Ein Rechnernetz ist ein Zusammenschluss verschiedener elektronischer Systeme (also zB Computer, aber auch Sensoren, Elektromotoren oder Computerprogramme). Dieser Zusammenschluss ermöglicht die Kommunikation der einzelnen Systeme untereinander. Ziel ist hierbei zB. die gemeinsame Nutzung von Ressourcen wie Netzwerkdruckern, Servern, Mediendateien und Datenbanken.

Bekannte Typen von Rechnernetzen sind das [Local Area Network (LAN)](https://de.wikipedia.org/wiki/Local_Area_Network), das [Wireless Local Area Network (WLAN)](https://de.wikipedia.org/wiki/Wireless_Local_Area_Network) oder auch das [Virtual Private Network (VPN)](https://de.wikipedia.org/wiki/Virtual_Private_Network).

Die Kommunikation innheralb dieser Netze erfolgt über verschiedene Protokolle, die mit dem ISO/OSI-Modell (s.u.) strukturiert werden können.


## Client-Server-Modell
Das Client-Server-Modell beschreibt eine Möglichkeit, Aufgaben und Dienstleistungen innerhalb eines Netzwerkes zu verteilen. Ein Client kann dann auf Wunsch einen Dienst vom Server anfordern. Der Server beantwortet dann die Anforderung des Clients. Diesen Vorgang nennt man auch den [Request Cycle](https://de.wikipedia.org/wiki/Request_Cycle). Client und Server müssen sich dabei nicht norwendigerweise auf verschiedenen Rechnern im Netzwerk befinden.

![Client-Server-Modell](../assets/img/client_server_model.png 'Client-Server-Modell')

Server (Bediener)
: Ein Server (Bediener) ist ein Programm (Prozess), das mit einem anderen Programm (Prozess), dem Client (Kunde), kommuniziert, um ihm Zugang zu einem Service (Dienst) zu verschaffen. Auf einem Rechner können verschiede Programme (Prozesse) ausgeführt werden, die alle Server sind.

Client (Kunde)
: Ein Client kann einen Dienst bei dem Server anfordern, welcher diesen Dienst bereitstellt. Der Client ist oft, aber nicht immer, der Browser. Dabei ist es egal, ob der Client auf welchem Gerät der Client ausgeführt wird. Wenn wir von PHP aus eine Anfrage an unseren Datenbankserver stellen, ist, zum Beispiel, unser PHP Programm der Client. Wenn wir eine Android-App benutzen, um unsere Mails zu checken, ist die Android-App der Client.

Service (Dienst)
: Vereinbarung einer festgelegten Aufgabe, die der Server anbietet und der Client nutzen kann. Der Service ist die Gesamtheit aus dem Programm (Prozess), das ausgeführt wird, und dem vereinbarten Interface (Schnittstelle), also dem Vertrag darüber, wie kommuniziert wird.

![Request-Response](../assets/img/request_response.png 'Request-Response')

Request (Anfrage)
: Ein Request ist die anforderung eines Clients an den Server, dessen Dienst er benötigt.

Response (Antwort)
: Die Response ist die Antwort eines Servers auf den Request eines Clients.


## HTTP
Das Hypertext Transfer Protocol (HTTP) ist ein [zustandsloses](https://de.wikipedia.org/wiki/Zustandslosigkeit) (stateless) [Protokoll](https://de.wikipedia.org/wiki/Netzwerkprotokoll) zur Übertragung von Daten auf der Anwendungsschicht über ein Rechnernetz.

Es wird hauptsächlich eingesetzt, um Webseiten aus dem Internet in einen Webbrowser zu laden. Es ist jedoch nicht prinzipiell darauf beschränkt und auch als allgemeines Dateiübertragungsprotokoll sehr verbreitet.

### Request & Response
![HTTP Request and Response](../assets/img/request_response_http.png 'HTTP Request and Response')
Das HTTP Protokoll ermöglicht es, Nachrichten zwischen einem Client und einem Server auszutauschen. Dabei gibt es zwei Arten von Nachrichten:
1. Requests (Anfragen) vom Client an den Server.
1. Responses (Antworten) vom Server zum Client als Reaktion auf einen Request.

Jede Nachricht besteht aus zwei Teilen:
1. Der [(HTTP-)Header](https://de.wikipedia.org/wiki/Liste_der_HTTP-Headerfelder) (Nachrichtenkopf) enthält Informationen über den Nachrichtenrumpf wie, zum Beispiel, das verwendete Character Encoding (Kodierung, zB ISO 8859-1 oder UTF-8) oder den Content Type (Inhaltstyp, zB "text/plain" oder "multipart/form-data" oder "application/json").
1. Der Body (Nachrichtenrumpf) enthält die eigentlichen Daten, die übertragen werden sollen.

### HTTP Requests
Ein HTTP Request besteht aus vier Teilen:
1. Die [Method (HTTP-Anfragemethode)](https://de.wikipedia.org/wiki/Hypertext_Transfer_Protocol#HTTP-Anfragemethoden), im Zusammenhang mit [REST](https://de.wikipedia.org/wiki/Representational_State_Transfer) oft HTTP Verb genannt, gibt an, was der Server machen soll.
1. Der Path (Pfad) ist der Teil der URL, der hinter dem Domainnamen steht, und gibt an, wo die gesuchte Ressource zu finden ist.
1. Das Protokoll gibt an, welche Version von HTTP die Anfrage verwendet.
1. Der HTTP Request Header.

#### Request Header
![HTTP Request Header](../assets/img/http_request_header.png 'HTTP Request Header')

### HTTP Response
Eine HTTP Response besteht aus drei Teilen:
1. Das Protokoll gibt an, welche Version von HTTP die Antwort verwendet.
1. Der [Status Code (HTTP-Statuscode)](https://de.wikipedia.org/wiki/HTTP-Statuscode) gibt an, ob die Anfrage erfolgreich bearbeitet wurde. Im Fehlerfall gibt der Statuscode Auskunft darüber, wo oder wie die der Client gewünschten Informationen erhalten kann.
1. Der HTTP Response Header.

#### Response Header
![HTTP Response Header](../assets/img/http_response_header.png 'HTTP Response Header')


## OSI-Modell
Das OSI-Modell (Open Systems Interconnection Model) ist ein Referenzmodell für Netzwerkprotokolle als Schichtenarchitektur. Sein Zweck ist es, die Kommunikation über unterschiedlichste technische Systeme hinweg zu ermöglichen.

Indem verschieden Aufgaben verschiedenen Schichten mit klar definierten Schnittstellen zugewiesen werden, bleiben die Protokolle einer Schicht leicht untereinander austauschbar. So wird im Internet auf der Transportschicht überwiegend das TCP- oder UDP-Protokoll eingesetzt, je nachdem, ob die integrität der Daten wichtiger (zB bei der Übertragung von Dokumenten oder Programmen) ist oder ein beständiger Datenfluss (zB beim Streaming von Musik oder Videos).

<table class="">
<thead>
    <tr>
        <th colspan="2">OSI</th>
        <th>PDU</th>
        <th>Protokolle</th>
        <th>Link</th>
    </tr>
</thead>
<tbody>
    <tr>
        <td>7</td>
        <td>Application<br>(Anwendungen)</td>
        <td rowspan="3">Data<br>(Daten)</td>
        <td rowspan="3">HTTP/HTTPS<br>SMTP<br>FTP</td>
        <td rowspan="4">Gateway<br>Proxy</td>
    </tr>
    <tr>
        <td>6</td>
        <td>Presentation<br>(Darstellung)</td>
    </tr>
    <tr>
        <td>5</td>
        <td>Session<br>(Sitzung)</td>
    </tr>
    <tr class="sep-top">
        <td>4</td>
        <td>Transport</td>
        <td>Segments (TCP)<br>Datagrams (UDP)</td>
        <td>TCP<br>UDP<br>SCTP</td>
    </tr>
    <tr class="sep-bot sep-top">
        <td>3</td>
        <td>Network<br>(Paket)</td>
        <td>Pakets<br>(Pakete)</td>
        <td>IP<br>ICMP<br>IPsec</td>
        <td>Router</td>
    </tr>
    <tr>
        <td>2</td>
        <td>Data Link<br>(Sicherung)</td>
        <td>Frames<br>(Rahmen)</td>
        <td rowspan="2">Ethernet<br>Token Ring</td>
        <td>Bridge</td>
    </tr>
    <tr>
        <td>1</td>
        <td>Physical (Bitübertragung)</td>
        <td>Bits</td>
        <td>Netzwerkkabel, Hub</td>
    </tr>
</tbody>
</table>

Beachte, dass das OSI Modell nur eine Richtlinie, eine Empfehlung ist.

## Internet Protokolle
### TCP
Das [Transmission Control Protocol](https://de.wikipedia.org/wiki/Transmission_Control_Protocol) (TCP, Übertragungssteuerungsprotokoll) definiert, auf welche Art und Weise Daten zwischen Netzwerkkomponenten ausgetauscht werden sollen. Das Protokoll ist ein [zuverlässiges](https://de.wikipedia.org/wiki/Zuverl%C3%A4ssigkeit_(Telekommunikation)), [verbindungsorientiertes](https://de.wikipedia.org/wiki/Nachrichtenverbindung), [paketvermitteltes](https://de.wikipedia.org/wiki/Paketvermittlung) Transportprotokoll in Computernetzwerken.

TCP sorgt also dafür, dass alle Daten korrekt übertragen werden.

Das bedeutet, es baut zuerst eine Verbindung auf, übermittelt dann die Daten und baut schließlich die Verbindung wieder ab. Dabei sorgt es dafür, dass alle gesendeten Daten in der richtigen Reihenfolge und fehlerfrei an die nächste Schicht weiter gereicht werden. Um dies zu erreichen, teilt es die zu versendenden Daten in kleine Pakete auf, welche es dann einzeln verschickt und beim Empfänger wieder zusammenfügt.

Um die versendeten Daten einem bestimmten Dienst zuordnen zu können, wird im Header des TCP Protokolls der Quell- und Zielport des Hosts gespeichert. [Ports](https://de.wikipedia.org/wiki/Port_(Protokoll)) dienen dazu, zwischen verschiedenen Diensten, die auf dem selben Host laufen, zu unterscheiden.

Man sagt, dass ein Dienst auf einem bestimmten Port hört, bzw. dass man zu einem bestimmten Port verbindet. Der Standardport für HTTP ist zum Beispiel 80, bei HTTPS ist es 443, SMTP verwendet Port 25, FTP port 21, SSH port 22. Wenn ich mich also mit einem Client wie Telnet auf Port 22 meines Rechners, weiß ich, dass mir der SSH Server antworten wird.

#### TCP Header
![TCP Header](../assets/img/tcp_header.png 'TCP Header')

### UDP
Das [User Datagram Protocol (UDP)](https://de.wikipedia.org/wiki/User_Datagram_Protocol) ist ein minimales, verbindungsloses Netzwerkprotokoll, das zur Transportschicht der Internetprotokollfamilie gehört. UDP ermöglicht Anwendungen den Versand von Datagrammen in IP-basierten Rechnernetzen, jedoch ohne einen Großteil des Verwaltungsaufwandes von TCP. Ziel ist es, einen beständigen Fluss von Daten zu senden, selbst wenn zwischendurch Daten unvollständig oder nicht korrekt übertragen werden.

UDP sorgt also dafür, dass die Daten ohne merkliche Latenzzeiten übertragen werden.

#### UDP Header
![UDP Header](../assets/img/udp_header.png 'UDP Header')

### IP
Das [Internet Protocol (IP)](https://de.wikipedia.org/wiki/Internet_Protocol) stellt die Grundlage des Internets dar. Es ist eine Implementierung des Network Layers des OSI-Modells. Als solches ermöglicht es, Daten zwischen verschiedenen Netzwerken auszutauschen.

IP sorgt also dafür, dass die Daten auch netzwerkübergreifend vom Sender zum Empfänger gelangen. Sein Header beinhaltet Felder für die IP Adresse des Senders und Empfängers. Anhand dieser Adresse erkennt das Protokoll, wohin ein Paket geschickt werden muss, damit es letztendlich beim Empfänger ankommt.

IP ist ein verbindungsloses Protokoll, d. h. bei den Kommunikationspartnern wird kein Zustand etabliert.

#### IP Header
![IP Header](../assets/img/ip_header.png 'IP Header')
