---
layout: project
title: Visual Layer Selection
description: Studying which visual encoder layers provide the most useful signals for multimodal language models.
img: assets/img/publication_preview/emnlp-2025-visual-layers.png
importance: 2
permalink: /projects/visual-layer-selection/
links:
  - label: Read Paper
    url: https://aclanthology.org/2025.emnlp-main.339/
    primary: true
  - label: Watch Talk
    url: https://underline.io/events/502/sessions/20780/lecture/130091-multimodal-language-models-see-better-when-they-look-shallower
  - label: View Poster
    url: https://underline.io/events/502/sessions/20780/lecture/130091-multimodal-language-models-see-better-when-they-look-shallower?tab=poster
---

## Background

Multimodal language models commonly use visual features from the final layers of a vision encoder. This convention assumes that deeper representations are always the most useful input for language models.

## Motivation

Visual encoder layers capture different kinds of information. Deeper features can be more semantic, while shallower features may retain details that later layers discard. This project studies how the choice of visual layer affects multimodal model performance.

## What We Study

- The information available at different visual encoder depths.
- How layer selection changes downstream multimodal behavior.
- Practical guidance for choosing visual features instead of defaulting to the final layer.

## Personal Notes

<div class="project-personal-note">I will use this section to record the research process, unexpected findings, and lessons that shaped this project.</div>

<!-- Replace the note above with a personal account whenever it is ready. -->
