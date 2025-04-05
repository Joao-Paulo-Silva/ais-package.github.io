---
id: abr
title: ABR
sidebar_label: ABR - Artificial Recognition Ball
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

## ABR (Artificial Recognition Ball)

Individual from the set of recognizing cells (ABR), inherits characteristics from a B-cell, adding resource consumption


:::info

**``ABR``** extends the **[``_Cell`` class](Cell)**, inheriting its base functionality.

:::

## Constructor _Cell:

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

A member of the ABR set inherits characteristics from a `_Cell` with the addition of resource consumption.

**Attributes:**

* ***size*** (``Optional[int]``): The number of features in the vector. If `vector` is `None`, a random vector is generated. Defaults to None.
* ***vector*** (``Optional[npt.NDArray]``): A vector of cell features. Defaults to None.
* ***stimulation*** (``Optional[float]``): The rate at which the cell stimulates antigens. Defaults to None.
* ***algorithm*** (``Literal["continuous-features", "binary-features"]``): The type of algorithm for continuous or binary samples. Defaults to "continuous-features".

---

## Function set_resource(...)

```python
def set_resource(self, resource: float, amplified: float = 1) -> float:
```

Updates the amount of resources available for an ABR after consumption. 

This function consumes the resources and returns the remaining amount of resources after consumption.

**The input parameter is:**

- ***resource*** (``float``): Initial amount of resources.
- ***amplified*** (``float``): Amplifier for the resource consumption by the cell. It is multiplied by the cell's stimulus. The default value is 1.

**Returns:** 
- (``float``): The remaining amount of resources after consumption.