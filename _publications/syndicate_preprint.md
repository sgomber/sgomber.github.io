---
layout: publications
type: preprint

title: "Efficient Ranking Function-Based Termination Analysis with Bi-Directional Feedback"
authors: "Yasmin Chandini Sarita, Avaljot Singh, <span class=author-font>Shaurya Gomber</span>, Gagandeep Singh, Mahesh Viswanathan"
date: 2023-11-19
venue: 

abstract: >
    Several techniques have been developed to prove the termination of programs. Finding ranking functions is one of the common approaches to do so. A ranking function must be bounded and must reduce at every iteration for all the reachable program states. Since the set of reachable states is often unknown, invariants serve as an over-approximation. Further, in the case of nested loops, the initial set of program states for the nested loop can be determined by the invariant of the outer loop. So, invariants play an important role in proving the validity of a ranking function in the absence of the exact reachable states. However, in the existing techniques, either the invariants are synthesized independently, or combined with ranking function synthesis into a single query, both of which are inefficient. We observe that a guided search for invariants and ranking functions can have benefits in terms of the number of programs that can be proved to terminate and the time needed to identify a proof of termination. So, in this work, we develop Syndicate, a novel framework that synergistically guides the search for both the ranking function and an invariant that together constitute a proof of termination. Owing to our synergistic approach, Syndicate can not only prove the termination of more benchmarks but also achieves a reduction ranging from 17% to 70% in the average runtime as compared to existing state-of-the-art termination analysis tools. We also prove that Syndicate is relatively complete, i.e., if there exists a ranking function and an invariant in their respective templates that can be used to prove the termination of a program, then Syndicate will always find it if there exist complete procedures for the template-specific functions in our framework.

links:
  - name: "Arxiv"
    url: "https://arxiv.org/abs/2404.05951"

bibtex: >
    @misc{syndicate_arxiv,
        title={Efficient Ranking Function-Based Termination Analysis with Bi-Directional Feedback}, 
        author={Yasmin Sarita and Avaljot Singh and Shaurya Gomber and Gagandeep Singh and Mahesh Vishwanathan},
        year={2024},
        eprint={2404.05951},
        archivePrefix={arXiv},
        primaryClass={cs.LO},
        url={https://arxiv.org/abs/2404.05951}, 
    }
---