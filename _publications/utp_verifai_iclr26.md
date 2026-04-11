---
layout: publications
type: workshop

title: "Unified Operational Formalism for LLM-based Theorem-proving Systems"
authors: "Avaljot Singh*, <span class=author-font>Shaurya Gomber*</span>, Yasmin Sarita, José Meseguer, Gagandeep Singh"
date: 2026-03-01
venue:
  - name: "VerifAI @ ICLR 2026"
    url: "https://verifai-workshop.github.io/"

abstract: >
    LLM-based theorem provers differ widely in how they organise interaction between language models and interactive theorem provers, ranging from whole-proof generation to tactic-level and multi-stage pipelines. We propose a unified operational framework that makes this interaction structure explicit by modelling proof search as transitions over a joint formal and informal state and by introducing orchestration as a first-class abstraction that controls how tools such as language models, retrieval components, and provers are scheduled and coordinated. Within this framework, existing systems such as Baldur, COPRA, DSP, POETRY, etc, can be expressed uniformly as different orchestration strategies, enabling principled comparison of interaction patterns, rapid prototyping of new strategies, and backend-agnostic evaluation and reuse across provers, libraries, and models.

links:
  - name: "Paper"
    url: "Theorem_Proving_VerifAI_2026.pdf"

bibtex: >
  @inproceedings{singh2026unified,
                title={Unified Operational Formalism for LLM-based Theorem-proving Systems},
                author={Singh, Avaljot and Gomber, Shaurya and Sarita, Yasmin and Meseguer, Jos{\'e} and Singh, Gagandeep},
                booktitle={ICLR 2026 Workshop: VerifAI-2: The Second Workshop on AI Verification in the Wild},
                year={2026},
                url={https://openreview.net/forum?id=OCmzbtoeUx}
  }
---