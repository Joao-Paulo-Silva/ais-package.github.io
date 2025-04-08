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

# Cell - Célula-B de memoria

Representa uma célula-B de memoria.

## Construtor _Cell:

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

* ***size*** (``Optional[int]``): O número de características do vetor. Se `vector` for `None`, um vetor aleatório é gerado. Defaults to None.
* ***vector*** (``Optional[npt.NDArray]``): Um vetor de características da célula. Defaults to None.
* ***algorithm*** (``Literal["continuous-features", "binary-features"]``): O tipo de algoritmo para amostras contínuas ou binárias. Defaults to "continuous-features".

---

## Função hyper_clonal_mutate(...)

Realiza a clonagem de N características a partir das características de uma célula, gerando um conjunto de vetores mutados.

```python
def hyper_clonal_mutate(self, n: int) -> npt.NDArray
```

**Os parâmetros de entrada são:**

* **n** (``int``):Número de clones a serem gerados a partir de mutações na célula original.

**Returns:** 
- ``npt.NDArray``: Um array contendo N vetores mutados da célula original.