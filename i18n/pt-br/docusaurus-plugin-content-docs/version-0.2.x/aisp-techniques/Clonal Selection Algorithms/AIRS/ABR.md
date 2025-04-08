---
id: abr
title: ABR
sidebar_label: ABR - Bolha de reconhecimento artificial
sidebar_position: 1
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

## ABR (Bolha de reconhecimento artificial)

Individuo do conjunto de células reconhecedoras (ABR), herda características de uma célula-B, adicionando o consumo de recursos


:::info

**``ABR``** estende a classe **[``_Cell``](Cell)**, herdando sua funcionalidade base.

:::

## Construtor _Cell:

```python
class _Cell(
    self,
    size: Optional[int] = None,
    vector: Optional[npt.NDArray] = None,
    stimulation: Optional[float] = None,
    algorithm: Literal[
        "continuous-features", "binary-features"
    ] = "continuous-features",
) -> None
```

Um membro do conjunto de ABR, herda características de uma `_Cell` com adição do consumo de recursos.

**Attributes:**

* ***size*** (``Optional[int]``): O número de características do vetor. Se `vector` for `None`, um vetor aleatório é gerado. Defaults to None.
* ***vector*** (``Optional[npt.NDArray]``): Um vetor de características da célula. Defaults to None.
* ***stimulation*** (``Optional[float]``): A taxa de estímulo da célula antígenos. Defaults to None.
* ***algorithm*** (``Literal["continuous-features", "binary-features"]``): O tipo de algoritmo para amostras contínuas ou binárias. Defaults to "continuous-features".

---

## Função set_resource(...)

Atualiza a quantidade de recursos disponíveis para uma ABR após o consumo.

```python
def set_resource(self, resource: float, amplified: float = 1) -> float:
```

Esta função consome os recursos e retorna a quantidade de recursos restantes após o consumo.


**The input parameter is:**

* ***resource*** (``float``): Quantidade inicial de recursos.
* ***amplified*** (``float``): Amplificador para o consumo de recursos pela célula. É multiplicado pelo estímulo da célula. O valor padrão é 1.

**Returns:** 
- (``float``): Quantidade de recursos restantes após o consumo.