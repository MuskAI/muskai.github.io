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
- **2025-08**: One paper accepted on EMNLP 2025 Main (Oral)! 🎉
- **2025-03**: One paper accepted on CVPR 2025! 🎉
- **2024-09**: One paper accepted on EMNLP 2024 Main! 🎉

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
- **2026**: Volunteer for EMNLP 2026 as an Oral Room Monitor and Poster Assistant

### Teaching Assistant Activities
- **2024**: Teaching Assistant for "Fundamentals and Applications of Artificial Intelligence" course
- **2024**: Teaching Assistant for "Decrypting DeepSeek: From Basics to Creative Practice" course

---

<script type='text/javascript' id='mapmyvisitors' src='https://mapmyvisitors.com/map.js?cl=ffffff&w=a&t=tt&d=AoMJtob2wKXNCKClN-BciKh0wc-2t7ga6-CpqzUwhH8&co=2d78ad&ct=ffffff&cmo=3acc3a&cmn=ff5353'></script>
