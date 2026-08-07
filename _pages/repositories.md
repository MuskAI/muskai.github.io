---
layout: page
permalink: /repositories/
title: repositories
description: Selected open-source projects and research resources.
nav: true
nav_order: 5
---

My public code, research resources, and earlier software projects are available on GitHub.

<a class="btn btn-sm btn-outline-primary mb-4" href="https://github.com/MuskAI">
  <i class="fa-brands fa-github"></i>
  View GitHub profile
</a>

## Selected repositories

<div class="row row-cols-1 row-cols-md-2 g-4">
  {% for repository in site.data.repositories.github_repos %}
    {% assign project = repository %}
    {% include projects.liquid %}
  {% endfor %}
</div>
