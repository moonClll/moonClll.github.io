---
permalink: /
title: ""
excerpt: ""
author_profile: true
redirect_from:
  - /about/
  - /about.html
---

{% if site.google_scholar_stats_use_cdn %}
{% assign gsDataBaseUrl = "https://cdn.jsdelivr.net/gh/" | append: site.repository | append: "@" %}
{% else %}
{% assign gsDataBaseUrl = "https://raw.githubusercontent.com/" | append: site.repository | append: "/" %}
{% endif %}
{% assign url = gsDataBaseUrl | append: "google-scholar-stats/gs_data_shieldsio.json" %}

<span class='anchor' id='about-me'></span>

# About Me

I am a student at Nankai University, Tianjin, China. My research interests include computer vision, generative AI, multimodal large language models (MLLMs), and affective computing.

My current research focuses on three directions: unsupervised anomaly detection under complex illumination conditions, agent-based affective image generation and editing, and psychology-informed continuous visual emotion analysis. I am interested in developing intelligent systems that combine visual understanding, generative models, and structured reasoning.

# Research Interests

- **Computer Vision:** Unsupervised Anomaly Detection, Visual Representation Learning
- **Generative AI:** Diffusion Models, Affective Image Generation and Editing
- **Multimodal AI:** Multimodal Large Language Models, Agentic Systems
- **Affective Computing:** Continuous Visual Emotion Analysis, Emotion-Aware Reasoning
- **Psychology-Informed AI:** Structured Psychological Knowledge and Multimodal Reasoning

# Selected Research

<div class='paper-box'>
<div class='paper-box-image'>
<div>
<div class="badge">IEEE CASE 2026</div>
<img src='images/sagr-overview.png' alt='Synergistic appearance and geometry reconstruction for multi-illumination anomaly detection' width='100%'>
</div>
</div>
<div class='paper-box-text' markdown="1">

### Synergistic Appearance–Geometry Reconstruction for Multi-Illumination Anomaly Detection

*September 2025 – March 2026*

**State Key Laboratory of Intelligent Manufacturing Equipment and Technology, Huazhong University of Science and Technology**  
Wuhan, China

Investigated unsupervised industrial anomaly detection under varying illumination and geometric conditions, focusing on the complementary roles of appearance and geometry in anomaly localization.

**Research Contributions**
- Reviewed research on unsupervised anomaly detection, multi-illumination modeling, photometric stereo, and cross-modal anomaly detection.
- Reproduced and evaluated CDO, RD++, MSFlow, Dinomaly, and INP-Former under a unified experimental protocol on the M2AD benchmark.
- Participated in training-parameter tuning, experimental design, comparative evaluation, and experimental result analysis.
- Created visualizations of quantitative results and anomaly localization maps for the research paper.

**Key Results:** SAGR achieved **87.0% I-AUROC** and **92.6% AUPRO** on M2AD, improving upon Dinomaly by **4.0 and 6.7 percentage points**, respectively.

**Publication**

Yuxin Zhang, Yuqi Cheng, **Yuhan Zhang**, Yunkang Cao, and Weiming Shen. “Synergistic Appearance–Geometry Reconstruction for Multi-Illumination Anomaly Detection.” *2026 IEEE 22nd International Conference on Automation Science and Engineering (IEEE CASE)*, 2026.

*Third author.*

</div>
</div>

<div class='paper-box'>
<div class='paper-box-image'>
<div>
<div class="badge">Affective AI</div>
<img src='images/affective-agent.png' alt='Agent-based affective image generation and editing' width='100%'>
</div>
</div>
<div class='paper-box-text' markdown="1">

### A General-Purpose Agent for Affective Image Generation and Editing

*March 2026 – July 2026*

**Media Computing Laboratory, Nankai University**  
Tianjin, China

Explored agent-based approaches to affective image generation and editing, with an emphasis on prompt complexity, diffusion encoder configurations, and emotion-oriented reward strategies.

**Research Contributions**
- Organized experimental datasets by aligning text prompts, target emotion labels, and generated images.
- Analyzed preliminary results under different prompt complexities and diffusion encoder configurations using emotion classification accuracy and Fréchet Inception Distance (FID).
- Evaluated reward strategies based on softmax emotion-classification scores and Normalized Discounted Cumulative Gain (NDCG) for emotion ranking.
- Compared the two reward strategies to investigate their effects on emotional alignment and generation quality.

**Preliminary Results:** The NDCG-based strategy achieved an emotion classification accuracy of **0.72** and an FID of **30**, compared with **0.68** and **34**, respectively, for the softmax-based strategy.

</div>
</div>

<div class='paper-box'>
<div class='paper-box-image'>
<div>
<div class="badge">CVPR 2027</div>
<img src='images/psychology-skill.png' alt='Psychology-skill-driven continuous visual emotion analysis' width='100%'>
</div>
</div>
<div class='paper-box-text' markdown="1">

### Psychology-Skill-Driven Continuous Visual Emotion Analysis

*July 2026 – Present*

**Media Computing Laboratory, Nankai University**  
Tianjin, China

Investigating whether structured psychological knowledge can improve continuous visual emotion analysis by equipping multimodal large language models with reusable, psychology-informed reasoning skills.

**Research Contributions**
- Designed and implemented psychology-based skills grounded in established psychological theories, translating different theoretical perspectives into structured reasoning capabilities callable by multimodal large language models.
- Organized datasets and prepared experimental inputs, standardizing data formats, labels, and evaluation inputs.
- Designed and conducted preliminary experiments to assess different psychological skills, model configurations, and reasoning strategies.
- Participated in main experiments across **nine continuous visual emotion analysis datasets**, comparing different MLLMs with and without psychology-based skills.
- Analyzed experimental results to evaluate the effects of psychological skill integration on continuous emotion prediction.

**Research Status:** CVPR 2027 submission.

</div>
</div>

# Selected Projects

## EZLearn: An Intelligent Learning Assistant

*July 2026 – August 2026*

**On-Campus Internship, Nankai University**  
Tianjin, China

Contributed to the development of a local-first intelligent learning assistant for textbooks and course materials, integrating document processing, knowledge organization, agent-based question answering, and interactive visualization.

**Engineering Contributions**
- Developed an integrated application workflow using **FastAPI, LangChain, React, and Electron**, connecting textbook processing, knowledge organization, and agent-based question answering.
- Customized a local Markdown reading and editing module based on MarkText and Electron, retaining file watching, tab management, directory navigation, search and replace, state restoration, and IPC communication.
- Implemented an interactive knowledge graph using React, TypeScript, Vite, and Apache ECharts, supporting node expansion, dragging, zooming, search, position caching, and context menus.
- Integrated the knowledge graph with the FastAPI backend, Redux state management, and local tree-structure caching to support chapter recognition, note generation, graph editing, page-number management, and knowledge-base question answering.
- Integrated streaming Markdown rendering for agent conversations, with support for mathematical equations, syntax-highlighted code, tables, and diagrams through KaTeX, Shiki, and Mermaid.

# Selected Competitions

## Database Management System Design

*2026 | National College Student Computer Skills Competition — Database Design*

**Award:** Third Prize (National Level)

Designed and implemented core components of a database management system, covering storage, query execution, indexing, transaction management, concurrency control, and recovery.

- Implemented the Disk Manager, Page, Buffer Pool Manager, and record management modules, using an LRU policy for page replacement and cache management.
- Developed SQL DDL, DML, and DQL execution workflows, supporting projection, joins, subqueries, and aggregate queries.
- Implemented unique indexes and index maintenance using B+ trees.
- Implemented transaction commit and rollback, table-level shared and exclusive locks, wait-die concurrency control, and WAL-based REDO/UNDO recovery.
- Optimized `COUNT(*)` queries, lock management, and index updates, and investigated memory leaks involving transaction, index-node, and logging objects.

## From Confrontation to Symbiosis: An Analysis of the New Human–Land Relationship Based on the Agricultural Ecosystem Model

*Mathematical Contest in Modeling / Interdisciplinary Contest in Modeling (MCM/ICM) | Year to be added*

**Award:** Meritorious Winner (M Award)

Developed an agricultural ecosystem modeling framework to study species interactions, ecosystem stability, and the ecological benefits of different agricultural practices.

- Constructed a food web using a logistic model and solved population-dynamics differential equations using the fourth-order Runge–Kutta method.
- Developed a Logistic–Gaussian competition model to analyze population changes and interspecies competition following the reintroduction of native species.
- Applied XGBoost binary classification to investigate the effects of ecological factors on system stability and used network analysis to evaluate the ecological contributions of different species.
- Built an agricultural ecological-benefit evaluation model using the Analytic Hierarchy Process (AHP) to compare organic and conventional farming systems.

# Education

## Nankai University

*September 2024 – July 2028 (Expected)*

Tianjin, China

# Honors and Awards

- **Third Prize (National Level)** — National College Student Computer Skills Competition, Database Design, 2026.
- **Meritorious Winner (M Award)** — Mathematical Contest in Modeling / Interdisciplinary Contest in Modeling (MCM/ICM), year to be added.

# Technical Skills

- **Programming Languages:** Python, C++, C, Java, SQL.
- **AI and Backend Development:** FastAPI, LangChain.
- **Frontend and Desktop Development:** React, TypeScript, Vite, Electron, Redux.
- **Data Visualization and Rendering:** Apache ECharts, KaTeX, Shiki, Mermaid.
- **Research Areas:** Computer Vision, Anomaly Detection, Diffusion Models, Multimodal Large Language Models, Affective Computing.

# Languages

- **Chinese:** Native.
- **English:** Proficiency level to be updated.

# Contact

**Email:** [yuhan.zhang@mail.nankai.edu.cn](mailto:yuhan.zhang@mail.nankai.edu.cn)
