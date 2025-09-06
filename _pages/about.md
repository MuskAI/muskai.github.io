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

## Publications

Most recent publications on Google Scholar.  
* indicates equal contribution

{% for post in site.publications reversed limit:5 %}
**{{ post.title }}**  
{{ post.citation | remove: '<strong>' | remove: '</strong>' | remove: '<i>' | remove: '</i>' | remove: '&quot;' | remove: '&amp;' }}  
{{ post.venue }}. [<a href="{{ post.paperurl }}" target="_blank">link</a>]{% if post.code %} [<a href="{{ post.code }}" target="_blank">code</a>]{% endif %}

{% endfor %}

---

## News

- **2025-01-01**: Two papers accepted at CVPR 2025 and EMNLP 2025! 🎉
- **2024-12-01**: New paper on connector selection in MLLMs published at EMNLP 2024
- **2024-11-15**: Joined the Multimodal AI Research Lab as a research assistant
- **2024-10-20**: Started Master's program in Computer Science at ZJSU
- **2024-09-01**: Launched this personal website to share research insights

---

## Service

### Academic Service
- **Reviewer**: EMNLP 2025, ACL 2025, ICML 2025
- **Program Committee**: Workshop on Multimodal AI (WMAI) 2025
- **Mentor**: Undergraduate Research Program, ZJSU

### Professional Service
- **Technical Consultant**: AI startup companies in Hangzhou
- **Open Source Contributor**: PyTorch, Transformers, OpenMMLab
- **Community Organizer**: Hangzhou AI Meetup Group

### Teaching & Mentoring
- **Teaching Assistant**: Computer Vision (Fall 2024)
- **Research Mentor**: 3 undergraduate students
- **Guest Lecturer**: "Introduction to Multimodal AI" at ZJSU

---

## 📊 Website Statistics

<div style="text-align: center; margin: 20px 0;">
  <p>🌍 <strong>Global Reach</strong></p>
  <p>This website has been visited by people from around the world!</p>
  
  <div style="display: flex; justify-content: center; gap: 20px; flex-wrap: wrap; margin: 20px 0;">
    <div style="text-align: center;">
      <div style="font-size: 24px; font-weight: bold; color: #2E8B57;">🌍</div>
      <div>Global Visitors</div>
    </div>
    <div style="text-align: center;">
      <div style="font-size: 24px; font-weight: bold; color: #4169E1;">📈</div>
      <div>Growing Community</div>
    </div>
    <div style="text-align: center;">
      <div style="font-size: 24px; font-weight: bold; color: #FF6347;">🤝</div>
      <div>Knowledge Sharing</div>
    </div>
  </div>
  
  <p><em>View detailed analytics and visitor locations in Google Analytics dashboard</em></p>
</div>
