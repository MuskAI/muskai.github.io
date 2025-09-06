---
permalink: /
title: "Hi there, welcome to Haoran's GitHub page! 👋"
author_profile: true
layout: single
classes: wide
redirect_from: 
  - /about/
  - /about.html
---

<style>
@import url('/assets/css/custom.css');
</style>

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
<div class="publication-item">
  <div class="publication-title">{{ post.title }}</div>
  <div class="publication-authors">{{ post.citation | remove: '<strong>' | remove: '</strong>' | remove: '<i>' | remove: '</i>' | remove: '&quot;' | remove: '&amp;' }}</div>
  <div class="publication-venue">{{ post.venue }}</div>
  <div class="publication-links">
    [<a href="{{ post.paperurl }}" target="_blank">link</a>]{% if post.code %} [<a href="{{ post.code }}" target="_blank">code</a>]{% endif %}
  </div>
</div>
{% endfor %}

---

## News

<div class="news-item">
  <strong>2025-08</strong>: One paper accepted on EMNLP 2025! 🎉
</div>
<div class="news-item">
  <strong>2025-03</strong>: One paper accepted on CVPR 2025! 🎉
</div>
<div class="news-item">
  <strong>2024-09</strong>: One paper accepted on EMNLP 2024! 🎉
</div>

---

## Service

<div class="service-category">
  <h3>Teaching Assistant Activities</h3>
  <div class="service-item">• <strong>2024</strong>: Teaching Assistant for "Fundamentals and Applications of Artificial Intelligence" course</div>
  <div class="service-item">• <strong>2024</strong>: Teaching Assistant for "Decrypting DeepSeek: From Basics to Creative Practice" course</div>
</div>

<div class="service-category">
  <h3>Academic Service</h3>
  <div class="service-item">• <strong>Reviewer</strong>: EMNLP 2025, ACL 2025, ICML 2025</div>
  <div class="service-item">• <strong>Program Committee</strong>: Workshop on Multimodal AI (WMAI) 2025</div>
  <div class="service-item">• <strong>Mentor</strong>: Undergraduate Research Program, ZJSU</div>
</div>

<div class="service-category">
  <h3>Professional Service</h3>
  <div class="service-item">• <strong>Technical Consultant</strong>: AI startup companies in Hangzhou</div>
  <div class="service-item">• <strong>Open Source Contributor</strong>: PyTorch, Transformers, OpenMMLab</div>
  <div class="service-item">• <strong>Community Organizer</strong>: Hangzhou AI Meetup Group</div>
</div>

---

## 📊 Website Statistics

<div style="text-align: center; margin: 20px 0;">
  <p>🌍 <strong>Global Reach</strong></p>
  <p>This website has been visited by people from around the world!</p>
  
  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 20px; margin: 30px 0;">
    <div style="text-align: center; padding: 20px; background: #e3f2fd; border-radius: 8px;">
      <div style="font-size: 2em; margin-bottom: 10px;">🌍</div>
      <h4>Global Visitors</h4>
      <p>Visitors from multiple countries and regions</p>
    </div>
    <div style="text-align: center; padding: 20px; background: #f3e5f5; border-radius: 8px;">
      <div style="font-size: 2em; margin-bottom: 10px;">📊</div>
      <h4>Page Views</h4>
      <p>Total page views and engagement metrics</p>
    </div>
    <div style="text-align: center; padding: 20px; background: #e8f5e8; border-radius: 8px;">
      <div style="font-size: 2em; margin-bottom: 10px;">⏱️</div>
      <h4>Session Duration</h4>
      <p>Average time spent on the website</p>
    </div>
    <div style="text-align: center; padding: 20px; background: #fff3e0; border-radius: 8px;">
      <div style="font-size: 2em; margin-bottom: 10px;">🔄</div>
      <h4>Return Visitors</h4>
      <p>Percentage of returning visitors</p>
    </div>
  </div>
  
  <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
    <p><strong>📈 Real-time Analytics</strong></p>
    <p>View detailed visitor statistics, page views, and geographic data in your Google Analytics dashboard.</p>
    <p><em>Note: Analytics data is collected through Google Analytics 4 and can be viewed in your GA4 dashboard.</em></p>
  </div>
</div>
