---
sidebar_position: 1
title: Artificial Immune Recognition System Base
sidebar_label: Artificial Immune Recognition System
lastUpdatedAt: 2025/04/07
author: João Paulo
---

# BaseClassifier

The `BaseClassifier` class contains utility functions with the `protected` modifier that can be inherited by various classes for ease of use. It includes functions for distance calculation, data separation to improve training and prediction efficiency, accuracy measurement and other functions.

---

### Function score(...)

```python
def _score(self, X: npt.NDArray, y: list) -> float
```
Score function calculates forecast accuracy.

This function performs the prediction of X and checks how many elements are equal between vector y and y_predicted. 
This function was added for compatibility with some scikit-learn functions.

**Parameters**:
+ ***X*** `np.ndarray`:
    Feature set with shape (n_samples, n_features).
+ ***y*** ` np.ndarray`:
    True values with shape (n_samples,).

**Returns**:

+ accuracy `float`:
    The accuracy of the model.

:::note
This score uses the [**accuracy_score**](/docs/advanced-guides/Utils/Metrics#function-accuracy_score) function.
:::

---

## Protected Functions:

---

### Function _distance(...):

```python
def _distance(self, u: npt.NDArray, v: npt.NDArray)
```

Function to calculate the distance between two points by the chosen ``metric``.

**Parameters**:
* ***u*** (``npt.NDArray``): Coordinates of the first point.
* ***v*** (``npt.NDArray``): Coordinates of the second point.

**returns**:
* Distance (``double``) between the two points.

---

### Function _check_and_raise_exceptions_fit(...):
```python
def _check_and_raise_exceptions_fit(
    X: npt.NDArray = None,
    y: npt.NDArray = None,
    algorithm: Literal[
        "continuous-features", "binary-features"
    ] = "continuous-features"
)
```
Function responsible for verifying fit function parameters and throwing exceptions if the verification is not successful.

**Parameters**:
* ***X*** (``npt.NDArray``): Training array, containing the samples and their characteristics, [``N samples`` (rows)][``N features`` (columns)].
* ***y*** (``npt.NDArray``): Array of target classes of ``X`` with [``N samples`` (lines)].
* ***algorithm*** (algorithm: Literal["continuous-features", "binary-features"], optional): Current algorithm. Defaults to 'continuous-features'.

---

### Function fit(...)

```python
@abstractmethod
def fit(self, X: npt.NDArray, y: npt.NDArray, verbose: bool = True)
```

Function to train the model using the input data ``X`` and corresponding labels ``y``.

This abstract method is implemented by the class that inherits it.

**Parameters:**

* **_X_** (``npt.NDArray``): Input data used for training the model, previously normalized to the range [0, 1].
* **_y_** (``npt.NDArray``): Corresponding labels or target values for the input data.
* **_verbose_** (``bool``, optional): Flag to enable or disable detailed output during \
        training. Default is ``True``.

Returns:
---
* `self`: Returns the instance of the class that implements this method.


Implementation:

- [AIRS](/docs/aisp-techniques/Clonal%20Selection%20Algorithms/AIRS/#function-fit)

---

### Function predict(...)

```python
@abstractmethod
def predict(self, X) -> Optional[npt.NDArray]
```

Function to generate predictions based on the input data ``X``.

This abstract method is implemented by the class that inherits it.

**Parameters:**

* ***X*** (``npt.NDArray``): Input data for which predictions will be generated.

**Returns:**

* ***Predictions*** (``Optional[npt.NDArray]``): Predicted values for each input sample, or ``None`` if the prediction fails.

Implementation:

- [AIRS](/docs/aisp-techniques/Clonal%20Selection%20Algorithms/AIRS/#function-predict)