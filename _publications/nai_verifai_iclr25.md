---
layout: publications
type: workshop

title: "Neural Abstract Interpretation"
authors: "<span class=author-font>Shaurya Gomber</span>, Gagandeep Singh"
date: 2024-06-26
venue: ["VerifAI @ ICLR 2025", "SRC @ PLDI 2024"]

abstract: >
  Abstract interpretation is a widely used method for the formal analysis and verification of programs and neural networks. However, designing efficient abstract transformers for expressive relational domains such as Octagon and Polyhedra is challenging as one needs to carefully balance the fundamental trade-off between the cost, soundness, and precision of the transformer for downstream tasks. Further, scalable implementations involve intricate performance optimizations like Octagon and Polyhedra decomposition. Given the inherent complexity of abstract transformers and the proven capability of neural networks to effectively approximate complex functions, we envision and propose the concept of Neural Abstract Transformers: neural networks that serve as abstract transformers. The proposed Neural Abstract Interpretation (NAI) framework provides supervised and unsupervised methods to learn efficient neural transformers automatically, which reduces development costs. We instantiate the NAI framework for two widely used numerical domains: Interval and Octagon. Evaluations on these domains demonstrate the effectiveness of the NAI framework to learn sound and precise neural transformers. An added advantage of our technique is that neural transformers are differentiable, unlike hand-crafted alternatives. As an example, we showcase how this differentiability allows framing invariant generation as a learning problem, enabling neural transformers to generate valid octagonal invariants for a program.

links:
  - name: "Paper"
    url: "VerifAI_ICLR_25_NAI.pdf"
  - name: "Poster"
    url: "NAI_SRC_Poster.pdf"

bibtex: >
    @inproceedings{
        gomber2025neural,
        title={Neural Abstract Interpretation},
        author={Shaurya Gomber and Gagandeep Singh},
        booktitle={ICLR 2025 Workshop: VerifAI: AI Verification in the Wild},
        year={2025},
        url={https://openreview.net/forum?id=WTyyhWhp4m}
    }
---