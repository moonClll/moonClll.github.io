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

<div class="language-panel language-panel--en" data-language-panel="en" lang="en" markdown="1">

# About Me

I am a student at Nankai University, Tianjin, China. My research interests include computer vision, generative AI, multimodal large language models (MLLMs), and affective computing.

My current research focuses on three directions: unsupervised anomaly detection under complex illumination conditions, agent-based affective image generation and editing, and psychology-informed continuous visual emotion analysis. I am interested in developing intelligent systems that combine visual understanding, generative models, and structured reasoning.

# Research Interests

- **Computer Vision:** Unsupervised Anomaly Detection, Visual Representation Learning
- **Generative AI:** Diffusion Models, Affective Image Generation and Editing
- **Multimodal AI:** Multimodal Large Language Models, Agentic Systems
- **Affective Computing:** Continuous Visual Emotion Analysis, Emotion-Aware Reasoning
- **Psychology-Informed AI:** Structured Psychological Knowledge and Multimodal Reasoning

<span class='anchor' id='selected-research-en'></span>

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

*IEEE CASE 2026 · Third author · September 2025 – March 2026*

Unsupervised industrial anomaly detection under changing illumination and geometry, combining appearance and geometric information for anomaly localization.

**Key result:** **87.0% I-AUROC** and **92.6% AUPRO** on M2AD, improving upon Dinomaly by **4.0** and **6.7** percentage points.

[View research details]({{ '/research/sagr/' | relative_url }})

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

*Research project · March 2026 – July 2026*

Agent-based affective image generation and editing, focusing on prompt complexity, diffusion encoder configurations, and emotion-oriented reward strategies.

**Preliminary result:** The NDCG-based strategy reached **0.72** emotion classification accuracy and **30** FID.

[View research details]({{ '/research/affective-agent/' | relative_url }})

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

*CVPR 2027 submission · July 2026 – Present*

Psychology-informed reasoning skills for multimodal large language models, designed to improve continuous visual emotion analysis.

**Scope:** Experiments across **nine continuous visual emotion analysis datasets**.

[View research details]({{ '/research/psychology-skill/' | relative_url }})

</div>
</div>

<span class='anchor' id='selected-projects-en'></span>

# Selected Projects

## Intelligent Learning Assistance System Development

*SinoSoft International internship*

**Project overview:** Developed an intelligent learning assistance system for textbook study, integrating textbook PDF parsing, structured note generation, knowledge-base construction, and intelligent question answering through large language models and multi-agent collaboration.

**Core design:** Built an **Electron + React + FastAPI** application and used **LangChain / LangGraph** to orchestrate multi-agent workflows. Designed an LLM Wiki persistent knowledge-management mechanism with layered storage, incremental updates, concept deduplication, and bidirectional links for continuous cross-chapter knowledge accumulation, organization, and retrieval.

## MediaPipe-Based Sign Language Recognition and Assisted Learning System

**Project background:** Developed the mobile accessibility assistant **Silent Voice** for the daily communication and sign-language learning needs of people with hearing loss. Explored lightweight computer-vision-based sign-language recognition and interaction, supporting basic sign-vocabulary recognition and assisted learning.

**Core design:** Used a collaborative **Flutter + Android native** architecture. Extracted 21 hand keypoints with **CameraX and MediaPipe**, combined hand-shape features, spatial relationships, and motion trajectories for gesture recognition, and applied multi-frame voting to improve recognition stability and provide real-time interaction feedback with integrated learning features.

## Multi-Channel Video Playback and Monitoring System with Qt and GStreamer

**Project overview:** Developed a modular video playback system with **C++, Qt 6, and GStreamer**, supporting local video playback, RTSP live-stream access, and dynamic multi-channel split-screen display with unified playback controls and video management.

**Core design:** Used a modular architecture that decouples **Qt and GStreamer**. Managed media streams from different sources through GStreamer Pipelines for video access, decoding, and rendering. Used Qt signals and slots with dynamic layout management to organize multiple video windows, synchronize playback states, and support interactive control.

<span class='anchor' id='selected-competitions-en'></span>

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

<span class='anchor' id='education-en'></span>

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

<span class='anchor' id='contact-en'></span>

# Contact

**Email:** [yuhan.zhang@mail.nankai.edu.cn](mailto:yuhan.zhang@mail.nankai.edu.cn)
</div>

<div class="language-panel language-panel--zh" data-language-panel="zh" lang="zh-CN" markdown="1">

# 关于我

我目前就读于中国天津的南开大学，研究兴趣包括计算机视觉、生成式人工智能、多模态大语言模型（MLLM）和情感计算。

目前的研究主要聚焦于三个方向：复杂光照条件下的无监督异常检测、基于智能体的情感图像生成与编辑，以及心理学知识驱动的连续视觉情绪分析。我希望构建融合视觉理解、生成模型和结构化推理的智能系统。

# 研究兴趣

- **计算机视觉：** 无监督异常检测、视觉表征学习
- **生成式人工智能：** 扩散模型、情感图像生成与编辑
- **多模态人工智能：** 多模态大语言模型、智能体系统
- **情感计算：** 连续视觉情绪分析、情感感知推理
- **心理学知识驱动的人工智能：** 结构化心理学知识与多模态推理

<span class='anchor' id='selected-research-zh'></span>

# 研究经历

<div class='paper-box'>
<div class='paper-box-image'>
<div>
<div class="badge">IEEE CASE 2026</div>
<img src='images/sagr-overview.png' alt='多光照异常检测的外观与几何协同重建' width='100%'>
</div>
</div>
<div class='paper-box-text' markdown="1">

### 面向多光照异常检测的外观–几何协同重建

*IEEE CASE 2026 · 第三作者 · 2025 年 9 月 – 2026 年 3 月*

面向光照和几何条件变化的无监督工业异常检测，结合外观信息与几何信息进行异常定位。

**关键结果：** 在 M2AD 上取得 **87.0% I-AUROC** 和 **92.6% AUPRO**，相较 Dinomaly 分别提升 **4.0** 和 **6.7 个百分点**。

[查看研究详情]({{ '/research/sagr/' | relative_url }})

</div>
</div>

<div class='paper-box'>
<div class='paper-box-image'>
<div>
<div class="badge">情感人工智能</div>
<img src='images/affective-agent.png' alt='基于智能体的情感图像生成与编辑' width='100%'>
</div>
</div>
<div class='paper-box-text' markdown="1">

### 通用型情感图像生成与编辑智能体

*研究项目 · 2026 年 3 月 – 2026 年 7 月*

探索基于智能体的情感图像生成与编辑，重点关注提示词复杂度、扩散编码器配置和面向情绪的奖励策略。

**初步结果：** 基于 NDCG 的策略取得 **0.72** 的情绪分类准确率和 **30** 的 FID。

[查看研究详情]({{ '/research/affective-agent/' | relative_url }})

</div>
</div>

<div class='paper-box'>
<div class='paper-box-image'>
<div>
<div class="badge">CVPR 2027</div>
<img src='images/psychology-skill.png' alt='心理学技能驱动的连续视觉情绪分析' width='100%'>
</div>
</div>
<div class='paper-box-text' markdown="1">

### 心理学技能驱动的连续视觉情绪分析

*CVPR 2027 投稿 · 2026 年 7 月 – 至今*

为多模态大语言模型设计心理学知识驱动的推理技能，提升连续视觉情绪分析能力。

**实验范围：** 覆盖 **9 个连续视觉情绪分析数据集**。

[查看研究详情]({{ '/research/psychology-skill/' | relative_url }})

</div>
</div>

<span class='anchor' id='selected-projects-zh'></span>

# 项目经历

## 智能辅学系统开发

*中软国际实习*

**项目概述：** 面向教材学习场景，开发基于大模型与多 Agent 协作的智能辅学系统，实现教材 PDF 解析、结构化笔记生成、知识库构建及智能问答的一体化流程。

**核心设计：** 采用 **Electron + React + FastAPI** 架构，基于 **LangChain / LangGraph** 构建多 Agent 工作流；设计 LLM Wiki 持久化知识管理机制，通过分层存储、增量更新、概念去重与双向关联，实现跨章节知识的持续积累、组织与智能检索。

## 基于 MediaPipe 的手语识别与辅助学习系统

**项目背景：** 面向听障人士的日常交流与手语学习需求，开发移动端无障碍辅助系统 **Silent Voice**，探索基于计算机视觉的轻量化手语识别与交互方式，支持基础手语词汇识别及辅助学习。

**核心设计：** 采用 **Flutter 与 Android 原生协同架构**，基于 **CameraX 和 MediaPipe** 提取手部 21 个关键点，结合手形特征、空间关系与运动轨迹进行手势识别，并通过多帧投票机制提升识别稳定性，实现实时交互反馈与学习功能集成。

## 基于 Qt 与 GStreamer 的多路视频播放与监控系统

**项目概述：** 基于 **C++、Qt 6 与 GStreamer** 开发模块化视频播放系统，支持本地视频回放、RTSP 实时视频流接入及多路视频动态分屏展示，提供统一的播放控制与视频管理能力。

**核心设计：** 采用 **Qt 与 GStreamer 解耦的模块化架构**，通过 GStreamer Pipeline 统一管理不同来源的媒体流，实现视频接入、解码与渲染；基于 Qt 信号槽机制与动态布局管理，实现多路视频窗口组织、播放状态同步及交互控制。

<span class='anchor' id='selected-competitions-zh'></span>

# 竞赛经历

## 数据库管理系统设计

*2026 年｜全国大学生计算机技能竞赛——数据库设计*

**奖项：** 全国三等奖

设计并实现数据库管理系统的核心组件，覆盖存储、查询执行、索引、事务管理、并发控制和恢复。

- 实现磁盘管理器、页面、缓冲池管理器和记录管理模块，使用 LRU 策略进行页面替换和缓存管理。
- 开发 SQL DDL、DML 和 DQL 执行流程，支持投影、连接、子查询和聚合查询。
- 使用 B+ 树实现唯一索引和索引维护。
- 实现事务提交与回滚、表级共享锁与排他锁、wait-die 并发控制，以及基于 WAL 的 REDO/UNDO 恢复。
- 优化 `COUNT(*)` 查询、锁管理和索引更新，并排查事务、索引节点和日志对象相关的内存泄漏。

## 从对抗到共生：基于农业生态系统模型的新型人地关系分析

*数学建模竞赛 / 美国大学生数学建模竞赛（MCM/ICM）｜年份待补充*

**奖项：** Meritorious Winner（M 奖）

构建农业生态系统建模框架，研究物种相互作用、生态系统稳定性和不同农业实践的生态效益。

- 使用 Logistic 模型构建食物网，并通过四阶 Runge–Kutta 方法求解种群动力学微分方程。
- 构建 Logistic–Gaussian 竞争模型，分析本土物种重新引入后的种群变化与种间竞争。
- 使用 XGBoost 二分类研究生态因素对系统稳定性的影响，并通过网络分析评估不同物种的生态贡献。
- 使用层次分析法（AHP）构建农业生态效益评价模型，对比有机农业和传统农业系统。

<span class='anchor' id='education-zh'></span>

# 教育经历

## 南开大学

*2024 年 9 月 – 2028 年 7 月（预计）*

中国，天津

# 荣誉与奖项

- **全国三等奖**——全国大学生计算机技能竞赛，数据库设计，2026 年。
- **Meritorious Winner（M 奖）**——数学建模竞赛 / 美国大学生数学建模竞赛（MCM/ICM），年份待补充。

# 技术能力

- **编程语言：** Python、C++、C、Java、SQL。
- **人工智能与后端开发：** FastAPI、LangChain。
- **前端与桌面开发：** React、TypeScript、Vite、Electron、Redux。
- **数据可视化与渲染：** Apache ECharts、KaTeX、Shiki、Mermaid。
- **研究方向：** 计算机视觉、异常检测、扩散模型、多模态大语言模型、情感计算。

# 语言能力

- **中文：** 母语。
- **英文：** 熟练程度待更新。

<span class='anchor' id='contact-zh'></span>

# 联系方式

**邮箱：** [yuhan.zhang@mail.nankai.edu.cn](mailto:yuhan.zhang@mail.nankai.edu.cn)

</div>
