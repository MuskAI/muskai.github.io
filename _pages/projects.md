---
layout: page
title: projects
permalink: /projects/
description: Selected research and applied AI projects in multimodal learning and digital content forensics.
nav: true
nav_order: 4
horizontal: false
---

<div class="projects">
  {% assign sorted_projects = site.projects | sort: "importance" %}
  <div class="row row-cols-1 row-cols-md-2">
    {% for project in sorted_projects %}
      {% include projects.liquid %}
    {% endfor %}
  </div>
</div>
