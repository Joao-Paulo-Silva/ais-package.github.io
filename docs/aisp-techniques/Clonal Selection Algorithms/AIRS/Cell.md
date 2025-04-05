---
id: cell
title: Cell
sidebar_label: Cell - Memory B-cell
sidebar_position: 2
pagination_next: null
keywords:
  - Binary
  - classifying
  - affinity threshold
  - Real-Valued
  - classifying
  - anomalies
  - K-Nearest Neighbors
lastUpdatedAt: 2025/04/05
author: João Paulo
---

# Cell - Memory B-cell

Represents a memory B-cell.

## Constructor _Cell:

```python
class _Cell(
    self,
    size: Optional[int] = None,
    vector: Optional[npt.NDArray] = None,
    algorithm: Literal[
        "continuous-features", "binary-features"
    ] = "continuous-features",
) -> None
```

**Attributes:**

* ***size*** (``Optional[int]``): The number of features in the vector. If `vector` is `None`, a random vector is generated. Defaults to None.
* ***vector*** (``Optional[npt.NDArray]``): A vector of cell features. Defaults to None.
* ***algorithm*** (``Literal["continuous-features", "binary-features"]``): The type of algorithm for continuous or binary samples. Defaults to "continuous-features".

---

## Function hyper_clonal_mutate(...)

```python
def hyper_clonal_mutate(self, n: int) -> npt.NDArray
```

Clones N features from a cell's features, generating a set of mutated vectors.

**The input parameter is:**

* **n** (``int``): Number of clones to be generated from mutations of the original cell.

**Returns:** 
- ``npt.NDArray``: An array containing N mutated vectors from the original cell.