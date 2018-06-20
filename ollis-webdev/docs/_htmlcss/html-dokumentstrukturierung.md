---
layout: techdoc
title: Dokumentstrukturierung
order: 1300
examples: false
exercises: false
solutions: false
---
* TOC
{:toc}

Genau wie sich mit h1-h6, p, ul, ol und andere Elementen Texte semantisch strukturieren lassen, gibt es seit HTML5 auch Elemente, um ganzen Seitenbereiche eine semantische Bedeutung zu geben.
* `<header>`: Oft ein breiter Balken am oberen Seitenrand. Hier befinden sich Informationen über die Seite selbst, wie zB der Seitentitel und ein Logo. Verändert sich normalerweise nicht. Ein Article oder eine Section kann ebenfalls einen eigenen Header haben.
* `<nav>`: Die Hauptnavigation der Website. Verändert sich normalerweise nicht. Oft Teil des Headers.
* `<main>`: Der eigentliche Inhalt der Seite. Dieser Teil ist auf jeder Unterseite anders.
* `<aside>`: Nebensächliche Informationen wie Links, Zitate, Author-Info, Werbung. Oft Teil von Main. Auch ein Article kann eine Aside haben. Kann eine Sidebar enthalten, ist aber nicht gleichzusetzen mit einer Sidebar.
* `<section>`: Eine thematisch zusammengehörende Gruppe von Inhalten, die normalerweise eine Überschrift hat. Wird oft verwendet, um einer Seite eine Struktur oder Hierarchie zu geben.
* `<article>`: Ein Block mit unabhängigem, in sich geschossenem Inhalt. Einen Article kann unabhängig vom Kontext, in dem er benutzt wird, verwendet werden. Beispiele für Articles sind Blogposts oder Zeitungsartikel.
* `<footer>`: Wie header, nur am Ende der Seite. Hier befindet sich oft das Kleingedruckte wie Impressum, Copyright, Kontaktinformationen. Enthält zu SEO Zwecken oft auch Links zu beliebten Inhalten. Auch Sections und Articles können Footer haben.
