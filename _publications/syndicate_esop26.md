---
layout: publications
type: conference

title: "Efficient Ranking Function-Based Termination Analysis via Bidirectional Decompositional Search"
authors: "Yasmin Chandini Sarita, Avaljot Singh, <span class=author-font>Shaurya Gomber</span>, Gagandeep Singh, Mahesh Viswanathan"
date: 2023-11-19
venue:
  - name: "ESOP 2026"
    url: "https://etaps.org/2026/conferences/esop/"

abstract: >
    Synthesizing ranking functions is a common technique for proving the termination of loops in programs. 
    A ranking function must be bounded and decrease by a specified amount with each iteration for all reachable program states. Since the set of reachable states is unknown, loop invariants are used to overapproximate it, requiring the joint synthesis of ranking functions and invariants to prove the ranking functions valid. Existing approaches either synthesize them independently, encode them into a single monolithic query, or connect them through ad hoc, one-way information flow, leading to inefficient exploration of large search spaces. We present Syndicate, a termination analysis framework based on the novel concept of Bidirectional Decompositional Search (BDS). BDS keeps ranking-function and invariant synthesis decomposed but ensures that they co-evolve through continuous bi-directional feedback. This mutual guidance enables efficient exploration and significantly increases the number of programs proven to terminate while reducing runtime compared to baselines without such feedback. Depending on the templates used, Syndicate is both relatively complete and efficient, outperforming existing techniques that achieve at most one of these guarantees. Despite its simplicity, Syndicate matches or surpasses state-of-the-art tools in termination proofs and runtime, demonstrating the effectiveness of bi-directional reasoning in termination analysis.

links:
  - name: "Paper"
    url: "Syndicate.pdf"
  
  - name: "DOI"
    url: "https://link.springer.com/chapter/10.1007/978-3-032-22723-2_7"

  - name : "Code"
    url : "https://github.com/uiuc-focal-lab/Syndicate"

bibtex: >
    @InProceedings{syndicate,
      author    = "Sarita, Yasmin Chandini
                  and Singh, Avaljot
                  and Gomber, Shaurya
                  and Singh, Gagandeep
                  and Vishwanathan, Mahesh",
      editor    = "Krebbers, Robbert",
      title     = "Efficient Ranking Function-Based Termination Analysis via Bidirectional Decompositional Search",
      booktitle = "Programming Languages and Systems (ESOP 2026)",
      series    = "Lecture Notes in Computer Science",
      volume    = "15715",
      year      = "2026",
      publisher = "Springer Nature Switzerland",
      address   = "Cham",
      pages     = "181--209",
      doi       = "10.1007/978-3-032-22723-2_7",
      url       = "https://doi.org/10.1007/978-3-032-22723-2_7",
      isbn      = "978-3-032-22723-2"
    }
---