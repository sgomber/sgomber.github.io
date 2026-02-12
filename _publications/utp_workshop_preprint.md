---
layout: publications
type: preprint

title: "Unified Operational Formalism for LLM-based Theorem-proving Systems"
authors: "Avaljot Singh*, <span class=author-font>Shaurya Gomber*</span>, Yasmin Sarita, José Meseguer, Gagandeep Singh"
date: 2026-02-16
venue: 

abstract: >
    LLM-based theorem provers differ widely in how they organise interaction between language models and interactive theorem provers, ranging from whole-proof generation to tactic-level and multi-stage pipelines. We propose a unified operational framework that makes this interaction structure explicit by modelling proof search as transitions over a joint formal and informal state and by introducing orchestration as a first-class abstraction that controls how tools such as language models, retrieval components, and provers are scheduled and coordinated. Within this framework, existing systems such as Baldur, COPRA, DSP, POETRY, etc, can be expressed uniformly as different orchestration strategies, enabling principled comparison of interaction patterns, rapid prototyping of new strategies, and backend-agnostic evaluation and reuse across provers, libraries, and models.

links:
  - name: "Paper"
    url: "Unified_Theorem_Proving.pdf"

bibtex: 
---