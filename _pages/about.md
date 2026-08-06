---
permalink: /
title: "Hi there, welcome to Haoran's GitHub page! 👋"
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

I'm currently a Master's student in Computer Science, with a primary focus on **Computer Vision (CV)**. I'm also deeply interested in **AIGC-D** and **Multimodal Large Language Models (MLLM)**, continuously exploring cutting-edge topics in these fields.

- 🔭 **Research Interests**: Computer Vision, Deep Learning, MLLMs, LLM, AIGC-D, Agent  
- 🌱 **Current Exploration**: MLLMs, AIGC-D  
- 🎯 **Goals & Plans**:
  - Bring "ai" (a Chinese pinyin meaning "love") and AI to the world  
  - Expand AI services to millions of people through commercial applications  
  - Share findings and insights from my research journey to advance practical applications  
- 💬 **Open to Discussion**:
  - Always up for knowledge sharing and potential collaborations  
- 📫 **How to Reach Me**:
  - **Email**: haoranchr@163.com  
  - **WeChat**: CHRCHN133  
  - **Google Scholar**:  <a href="https://scholar.google.com/citations?user=o6krwYkAAAAJ&hl=en" target="_blank">
      <img src="https://img.shields.io/badge/Google%20Scholar-Haoran-blue?logo=googlescholar" alt="Google Scholar">
    </a>

If you share similar interests, feel free to connect. Let's collaborate and explore new ideas in the realm of AI!

---

## News

- **2026-07**: One paper accepted to ACM MM 2026! 🎉
- **2025-08**: One paper accepted to EMNLP 2025 Main (Oral)! 🎉
- **2025-03**: One paper accepted to CVPR 2025! 🎉
- **2024-09**: One paper accepted to EMNLP 2024 Main! 🎉

---

## Publications

Most recent publications on Google Scholar.  
* indicates equal contribution

{% for post in site.publications reversed limit:5 %}
**{{ post.title }}**  
{{ post.citation | remove: '<strong>' | remove: '</strong>' | remove: '<i>' | remove: '</i>' | remove: '&quot;' | remove: '&amp;' }}  
{{ post.venue }}. [<a href="{{ post.paperurl }}" target="_blank">link</a>]{% if post.code %} [<a href="{{ post.code }}" target="_blank">code</a>]{% endif %}

{% endfor %}

---

## Service

### Conference Service
- **2026**: Reviewer for ACM CIKM 2026
- **2026**: Volunteer for EMNLP 2026 as an Oral Room Monitor and Poster Assistant

### Teaching Assistant Activities
- **2024**: Teaching Assistant for "Fundamentals and Applications of Artificial Intelligence" course
- **2024**: Teaching Assistant for "Decrypting DeepSeek: From Basics to Creative Practice" course

---

## 📊 Website Statistics

<div style="display: flex; align-items: center; gap: 1rem; flex-wrap: wrap; margin: 1rem 0; padding: 1rem 1.25rem; border: 1px solid rgba(127, 127, 127, 0.35); border-radius: 8px;">
  <div aria-hidden="true" style="font-size: 2rem; line-height: 1;">🌍</div>
  <div style="min-width: 0;">
    <strong>Live visitor counter</strong>
    <a href="https://hits.sh/muskai.github.io/" target="_blank" rel="noopener noreferrer" aria-label="View detailed website visit statistics">
      <img src="https://hits.sh/muskai.github.io.svg?view=today-total&amp;style=for-the-badge&amp;label=Website%20Visits&amp;color=2d78ad" alt="Website visits: today and total" style="display: block; max-width: 100%; height: auto; margin: 0.55rem 0 0.35rem;">
    </a>
    <small>Today's page views / total page views · Tracking since August 2026</small>
  </div>
</div>

<noscript>The visit counter is provided as an image and requires image loading to be enabled.</noscript>
