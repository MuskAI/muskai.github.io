---
permalink: /analytics/
title: "Website Analytics"
author_profile: true
---

{% assign umami_share_url = site.analytics.umami.share_url %}

<div class="analytics-dashboard">
  <header class="analytics-dashboard__header">
    <span>Public research-site telemetry</span>
    <h2>Website Analytics</h2>
    <p>A privacy-friendly view of readership, traffic trends, and global reach.</p>
  </header>

  {% if umami_share_url and umami_share_url != "" %}
  <div class="analytics-dashboard__frame">
    <iframe src="{{ umami_share_url }}"
            title="Live Umami analytics dashboard for muskai.github.io"
            loading="lazy"></iframe>
  </div>
  {% else %}
  <div class="analytics-dashboard__pending" role="status">
    <div class="analytics-dashboard__orbit" aria-hidden="true">
      <span></span>
    </div>
    <div>
      <span class="analytics-dashboard__state">Umami connected · collecting now</span>
      <h3>The observatory is warming up.</h3>
      <p>Traffic collection is live. The public dashboard will appear here after its read-only share view is enabled.</p>
    </div>
  </div>
  {% endif %}

  <p class="analytics-dashboard__note">Umami records aggregate usage without advertising cookies or cross-site tracking.</p>
</div>
