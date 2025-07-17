---
layout: publications
type: preprint

title: "Universal Synthesis of Differentiably Tunable Numerical Abstract Transformers"
authors: "<span class=author-font>Shaurya Gomber</span>, Debangshu Banerjee, Gagandeep Singh"
date: 2025-07-15
venue: 

abstract: >
    Numerical abstract interpretation is a widely used framework for the static analysis of numerical programs. However, existing numerical abstract interpreters rely on hand-crafted, instruction-specific transformers tailored to each domain, with no general algorithm for handling common operations across domains. This limits extensibility, prevents precise compositional reasoning over instruction sequences, and forces all downstream tasks to use the same fixed transformer regardless of their precision, efficiency, or task-specific requirements. To address these limitations, we propose a universal transformer synthesis algorithm that constructs a parametric family of sound abstract transformers for any given polyhedral numerical domain and a concrete operator from the class of Quadratic-Bounded Guarded Operators (QGO), which includes both individual instructions and structured sequences. Each instantiation in this family is sound by construction, enabling downstream analyses to adapt the transformer to their particular needs. The space of transformers is differentiable but complex. To efficiently explore this space of transformers, we introduce the Adaptive Gradient Guidance (AGG) procedure, a gradient-guided search strategy that steers the search process based on downstream analysis objectives and runtime constraints. We implement these ideas in the USTAD framework and evaluate their effectiveness across three numerical abstract domains: Zones, Octagons, and Polyhedra. Our results demonstrate that the universal synthesis algorithm successfully constructs sound families of transformers across domains, and that USTAD achieves significant, tunable precision gains over baselines by leveraging compositional reasoning and efficient gradient-guided traversal of the transformer space.

links:
  - name: "Arxiv"
    url: "https://arxiv.org/abs/2507.11827"

bibtex: >
    @misc{ustad_arxiv,
        title={Universal Synthesis of Differentiably Tunable Numerical Abstract Transformers}, 
        author={Shaurya Gomber and Debangshu Banerjee and Gagandeep Singh},
        year={2025},
        eprint={2507.11827},
        archivePrefix={arXiv},
        primaryClass={cs.PL},
        note={\url{https://arxiv.org/abs/2507.11827}}, 
    }
---