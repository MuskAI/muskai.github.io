---
layout: single
title: "Curriculum Vitae"
permalink: /cv/
description: "Curriculum vitae of Haoran Chen, a computer science master's student working on computer vision and multimodal learning."
author_profile: true
redirect_from:
  - /resume
---

Haoran Chen is a Master's student in Computer Science at Zhejiang Gongshang University. His research focuses on computer vision, multimodal language models, and AI-generated content detection.

## Education

**Master's student in Computer Science**<br>
Zhejiang Gongshang University

## Research Interests

- Computer Vision
- Multimodal Language Models
- AI-Generated Content Detection
- Deep Learning

## Publications

{% assign cv_publications = site.publications | sort: "date" | reverse %}
{% for post in cv_publications %}
### [{{ post.title }}]({{ post.paperurl }})

{{ post.authors | replace: 'Haoran Chen', '<strong>Haoran Chen</strong>' }}<br>
**{{ post.venue }}**

{% endfor %}

<span class="small"><span aria-hidden="true">*</span> Equal contribution.</span>

## Academic Service

- **2026:** Reviewer for ACM CIKM 2026
- **2026:** Volunteer for EMNLP 2026 as an Oral Room Monitor and Poster Assistant

## Teaching

- **2024:** Teaching Assistant, Fundamentals and Applications of Artificial Intelligence
- **2024:** Teaching Assistant, Decrypting DeepSeek: From Basics to Creative Practice

## Contact

- [Email](mailto:haoranchr@163.com)
- [Google Scholar](https://scholar.google.com/citations?user=o6krwYkAAAAJ&hl=en)
- [GitHub](https://github.com/MuskAI)
