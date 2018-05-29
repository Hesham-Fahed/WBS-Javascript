---
layout: default
---
<h1 id="{{ page.slug }}">{{ page.title }}</h1>

{{ content }}

{% if site.data.checklists[page.collection][page.slug] %}

    <h2 id="checklist">Checkliste</h2>
    {% include bulletlist.html topic=page.slug type="checklists" %}

{% endif %}

{% if site.data.functions[page.collection][page.slug] %}

    <h2 id="links">Funktionen, Elemente, Eigenschaften</h2>
    {% include bulletlist.html topic=page.slug type="functions" %}

{% endif %}

{% if site.data.links[page.collection][page.slug] %}

    <h2 id="links">Links</h2>
    {% include bulletlist.html topic=page.slug type="links" %}

{% endif %}