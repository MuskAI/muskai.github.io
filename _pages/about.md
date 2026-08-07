---
permalink: /
title: "Haoran Chen"
description: "Computer science master's student researching computer vision, multimodal language models, and AI-generated content detection."
author_profile: true
body_class: home-page
redirect_from:
  - /about/
  - /about.html
---

<div class="home-intro">
  <p class="home-intro__lead">Master's student in Computer Science at Zhejiang Gongshang University, researching multimodal learning and AI-generated content detection.</p>
  <nav class="home-intro__links" aria-label="Profile links">
    <a class="home-link home-link--primary" href="/cv/">CV</a>
    <a class="home-link" href="https://scholar.google.com/citations?user=o6krwYkAAAAJ&hl=en" target="_blank" rel="noopener noreferrer">Google Scholar</a>
    <a class="home-link" href="mailto:haoranchr@163.com">Email</a>
  </nav>
</div>

<section class="research-throughline" aria-labelledby="research-throughline-title">
  <div class="research-throughline__intro">
    <p class="research-throughline__eyebrow">Research Throughline</p>
    <h2 id="research-throughline-title">One question, three connected studies</h2>
    <p>How can multimodal models preserve and use the right visual information?</p>
  </div>
  <ol class="research-throughline__steps">
    <li>
      <span class="research-throughline__index" aria-hidden="true">01</span>
      <span><strong>Visual Layer Selection</strong><small>Locate useful signals across the visual encoder.</small></span>
    </li>
    <li>
      <span class="research-throughline__index" aria-hidden="true">02</span>
      <span><strong>Feature Fusion</strong><small>Combine complementary information from multiple layers.</small></span>
    </li>
    <li>
      <span class="research-throughline__index" aria-hidden="true">03</span>
      <span><strong>Connector Design</strong><small>Preserve information as vision meets language.</small></span>
    </li>
  </ol>
</section>

<section class="home-section" id="research">
  <h2>Research</h2>
  <p class="home-section__intro">My work studies how multimodal systems select, combine, and use visual information.</p>
  <div class="research-focus">
    <article class="research-focus__item">
      <h3>Multimodal Language Models</h3>
      <p>Visual layer selection, multi-layer feature fusion, and connector design for more effective vision-language models.</p>
    </article>
    <article class="research-focus__item">
      <h3>AI-Generated Content Detection</h3>
      <p>Robust detection and analysis of AI-generated content, with an emphasis on practical and generalizable methods.</p>
    </article>
  </div>
</section>

<section class="home-section" id="goals">
  <h2>Goals &amp; Plans</h2>
  <div class="goals-layout">
    <div class="goals-list">
      <p>Bring <strong>"ai"</strong> (a Chinese pinyin meaning "love") and AI to the world.</p>
      <p>Expand AI services to millions of people through commercial applications.</p>
      <p>Share findings and insights from my research journey to advance practical applications.</p>
    </div>
    <aside class="collaboration-note" aria-labelledby="collaboration-title">
      <h3 id="collaboration-title">Open to Discussion</h3>
      <p>Always up for knowledge sharing and potential collaborations.</p>
      <p class="collaboration-note__invitation">If you share similar interests, feel free to connect. Let's collaborate and explore new ideas in the realm of AI!</p>
    </aside>
  </div>
</section>

<section class="home-section" id="news">
  <h2>News</h2>
  <ol class="home-news" aria-label="Recent news">
    <li><span class="home-news__emoji" aria-hidden="true">🎉</span><time datetime="2026-07">2026.07</time><span class="home-news__text">One paper accepted to ACM MM 2026.</span></li>
    <li><span class="home-news__emoji" aria-hidden="true">🎤</span><time datetime="2025-08">2025.08</time><span class="home-news__text">One paper accepted to EMNLP 2025 Main as an oral presentation.</span></li>
    <li><span class="home-news__emoji" aria-hidden="true">🏆</span><time datetime="2025-03">2025.03</time><span class="home-news__text">One paper accepted to CVPR 2025.</span></li>
    <li><span class="home-news__emoji" aria-hidden="true">📄</span><time datetime="2024-09">2024.09</time><span class="home-news__text">One paper accepted to EMNLP 2024 Main.</span></li>
  </ol>
</section>

<section class="home-section" id="publications">
  <h2>Selected Publications</h2>
  <p class="home-section__intro">Recent peer-reviewed work on multimodal language models and visual representation.</p>

  {% assign featured_publications = site.publications | sort: "date" | reverse %}
  <div class="publication-grid">
    {% for post in featured_publications limit:5 %}
      <article class="publication-item{% if forloop.first %} publication-item--featured{% endif %}">
        {% if post.teaser %}
          <a class="publication-item__media" href="{{ post.paperurl }}" target="_blank" rel="noopener noreferrer" aria-label="View paper: {{ post.title }}">
            <img src="{{ post.teaser | relative_url }}" alt="{{ post.teaser_alt }}" width="{{ post.teaser_width }}" height="{{ post.teaser_height }}" loading="lazy" decoding="async">
          </a>
        {% endif %}
        <div class="publication-item__body">
          <p class="publication-item__venue">{{ post.venue }}</p>
          <h3 class="publication-item__title"><a href="{{ post.paperurl }}" target="_blank" rel="noopener noreferrer">{{ post.title }}</a></h3>
          <p class="publication-item__authors">{{ post.authors | replace: 'Haoran Chen', '<strong>Haoran Chen</strong>' }}</p>
          <p class="publication-item__summary">{{ post.excerpt }}</p>
          <p class="publication-item__links">
            <a href="{{ post.paperurl }}" target="_blank" rel="noopener noreferrer">Paper</a>
            {% if post.code %}<a href="{{ post.code }}" target="_blank" rel="noopener noreferrer">Code</a>{% endif %}
            {% if post.videourl %}<a href="{{ post.videourl }}" target="_blank" rel="noopener noreferrer">Video</a>{% endif %}
            {% if post.posterurl %}<a href="{{ post.posterurl }}" target="_blank" rel="noopener noreferrer">Poster</a>{% endif %}
          </p>
        </div>
      </article>
    {% endfor %}
  </div>

  <p class="publication-note"><span aria-hidden="true">*</span> Equal contribution.</p>
  <p class="publication-more"><a href="https://scholar.google.com/citations?user=o6krwYkAAAAJ&hl=en" target="_blank" rel="noopener noreferrer">View the complete publication record on Google Scholar</a></p>
</section>

<section class="home-section" id="service">
  <h2>Academic Service</h2>
  <div class="service-groups">
    <section>
      <h3>Conference Service</h3>
      <ul>
        <li><strong>2026:</strong> Reviewer for ACM CIKM 2026</li>
        <li><strong>2026:</strong> EMNLP Oral Room Monitor and Poster Assistant</li>
      </ul>
    </section>
    <section>
      <h3>Teaching Assistant</h3>
      <ul>
        <li><strong>2024:</strong> Fundamentals and Applications of Artificial Intelligence</li>
        <li><strong>2024:</strong> Decrypting DeepSeek: From Basics to Creative Practice</li>
      </ul>
    </section>
  </div>
</section>
