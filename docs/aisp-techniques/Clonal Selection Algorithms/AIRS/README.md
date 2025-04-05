---
id: airs
title: AIRS
sidebar_label: AIRS - Artificial Immune Recognition System
sidebar_position: 1
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

# AIRS (Artificial Immune Recognition System)

The ``AIRS`` is a classification algorithm inspired by the clonal selection process. The version implemented in this class is inspired by its simplified version, AIRS2, described in [Brabazon, O'Neill, and McGarraghy (2015)](#1)

Related and noteworthy works:
- [Artificial Immune Recognition System V2 - AZZOUG Aghiles](https://github.com/AghilesAzzoug/Artificial-Immune-System)


:::info

**``AIRS``** extends the **[``_ABR`` class](ABR)**, inheriting its base functionality.

:::


## Constructor AIRS:

In this class, there is an adaptation for real-valued data and a secondary option for binary features.

``` python
class AIRS(
    self,
    n_resources: float = 10,
    rate_clonal: int = 10,
    n_antigens_selected: int = 5,
    rate_hypermutation: float = 0.75,
    affinity_threshold_scalar: float = 0.75,
    k: int = 10,
    max_iters: int = 100,
    resource_amplified: float = 1.0,
    metric: Literal["manhattan", "minkowski", "euclidean"] = "euclidean",
    algorithm: Literal["continuous-features", "binary-features"] = "continuous-features",
    seed: int = None, **kwargs,
)
```

**Attributes:**

* *n_resources* (``float``): Total amount of available resources. Defaults to 10.
* *rate_clonal* (``float``): Maximum number of possible clones of a class. This quantity is multiplied by (``cell stimulus * rate_hypermutation``) to define the number of clones. Defaults to 10.
* *rate_hypermutation* (``int``): The rate of mutated clones derived from rate_clonal as a scalar factor. Defaults to 0.75.
* *affinity_threshold_scalar* (``float``): Normalized affinity threshold. Defaults to 0.75.
* k (``int``): The number of K nearest neighbors that will be used to choose a label in the prediction. Defaults to 10.
* *max_iters* (``int``): Maximum number of interactions in the refinement process of the ABR set exposed to aᵢ. Defaults to 100.
* *resource_amplified* (``float``): Resource consumption amplifier is multiplied with the incentive to subtract resources. Defaults to 1.0 without amplification.
* *metric* (``Literal["manhattan", "minkowski", "euclidean"]``): Way to calculate the distance between the detector and the sample:

    * ``'Euclidean'`` ➜ The calculation of the distance is given by the expression: $$\sqrt{(X_{1} – X_{1})^2 + (Y_{2} – Y_{2})^2 + ... + (Y_{n} – Y_{n})^2}$$.

    * ``'minkowski'`` ➜ The calculation of the distance is given by the expression: $$( |X_{1} – Y_{1}|^p + |X_{2} – Y_{2}|^p + ... |X_{n} – Y_{n}|^p)^\frac{1}{p}$$.
    * ``'manhattan'`` ➜ The calculation of the distance is given by the expression: $$( |X_{1} – X_{1}| + |Y_{2} – Y_{2}| + ... + |Y_{n} – Y_{n}|)$$.

    Defaults to ``'euclidean'``.
    
* *algorithm* (``Literal["continuous-features", "binary-features"]``): [description].
        Defaults to "continuous-features".
* *seed* (``int``): Seed for the random generation of detector values. Defaults to None.

- ``**kwargs``:
    - *p* (``float``): This parameter stores the value of ``p`` used in the Minkowski distance. The default is ``2``, which represents normalized Euclidean distance. Different values of p lead to different variants of the Minkowski distance [learn more](https://docs.scipy.org/doc/scipy/reference/generated/scipy.spatial.distance.minkowski.html).

---

### Function fit(...)

The function ``fit(...)``, performs the training according to ``X`` and ``y``, using the method Artificial Immune Recognition System (``AIRS``).

``` python
 def fit(self, X: npt.NDArray, y: npt.NDArray, verbose: bool = True)
```

**The input parameters are:** 
* ``X``: array with the characteristics of the samples with **N** samples (rows) and **N** characteristics (columns). 

* ``y``: array with the output classes arranged in **N** samples that are related to ``X``.

* ``verbose``: boolean with default value ``True``, determines if the feedback from the detector generation will be printed.

*Returns the instance of the class.*

---

### Function predict(...)

Function to perform the prediction of classes based on detectors created after training.

``` python
def predict(self, X: npt.NDArray) -> Optional[npt.NDArray]
```

**The input parameter is:** 
* ``X``: array with the characteristics for the prediction, with **N** samples (Rows) and **N** columns.

**Returns:** 
* ``C``: prediction array, with the output classes for the given characteristics.
* ``None``: if there are no cells memory.

---

### Function score(...)

The function ``score(...)`` calculates the accuracy of the trained model by making predictions and computing accuracy.

```python
def score(self, X: npt.NDArray, y: list) -> float:
```

It returns the accuracy as a float type.

---

## Protected Methods

---

### Function _refinement_ABR(...)

Execute the refinement process for the ABR set until the average stimulation value exceeds the defined threshold (``affinity_threshold_scalar``).

``` python
def _refinement_ABR(self, ai: npt.NDArray, c_match: _Cell, abr_list: List[_ABR]) -> _Cell:
```

**The input parameter is:** 
- ***c_match*** (``_Cell``): Cell with the highest stimulation relative to aᵢ
- ***abr_list*** (``List[_ABR]``): ABR set.

**Returns:** 
* **_Cell**: The cell with the highest ABR stimulation

---

### Function _cells_affinity_threshold(...)

This function calculates the affinity threshold based on the average affinity between training instances, where aᵢ and aⱼ are a pair of antigens, and affinity is measured by distance (Euclidean, Manhattan, Minkowski, Hamming).   

``` python
def _cells_affinity_threshold(self, antigens_list: npt.NDArray):
```

Following the formula:

$$
\text{affinity\_threshold} = \frac{
    \sum_{i=1}^{n-1} \sum_{j=i+1}^{n} \text{affinity}(a_i, a_j)
}{
    \frac{n(n - 1)}{2}
}
$$

**The input parameter is:** 
- ***antigens_list*** (``NDArray``): List of training antigens.

---

### Function _affinity(...)

Calculates the stimulus between two vectors using metrics.

``` python
def _affinity(self, u: npt.NDArray, v: npt.NDArray) -> float:
```

**The input parameter is:** 
* ***u*** (``npt.NDArray``): Coordinates of the first point.
* ***v*** (``npt.NDArray``): Coordinates of the second point.

**Returns:** 
* (``float``) the stimulus rate between the vectors.

---

### Function _init_memory_c(...)

This function initializes memory cells by randomly selecting `n_antigens_selected` from the list of training antigens.

``` python
def _init_memory_c(self, antigens_list: npt.NDArray) -> List[_Cell]:
```

**The input parameter is:** 
- ***antigens_list*** (``NDArray``): List of training antigens.

**Returns:** 
* ***Mc***: List of initialized memories.

---

### Function __slice_index_list_by_class(...)

The function ``__slice_index_list_by_class(...)``, separates the indices of the lines according to the output class, to go through the sample array, only in the positions that the output is the class that is being trained:

```python
def __slice_index_list_by_class(self, y: npt.NDArray) -> dict:
```

Returns a dictionary with the classes as key and the indices in ``X`` of the samples.

---

# References

---

##### 1 
> BRABAZON, Anthony; O’NEILL, Michael; MCGARRAGHY, Seán. Natural Computing Algorithms. [S. l.]: Springer Berlin Heidelberg, 2015. DOI 10.1007/978-3-662-43631-8. Disponível em: http://dx.doi.org/10.1007/978-3-662-43631-8.
