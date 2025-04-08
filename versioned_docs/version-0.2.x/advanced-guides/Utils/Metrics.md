---
sidebar_position: 1
title: Metrics
sidebar_label: Metrics
lastUpdatedAt: 2025/04/04
author: João Paulo
---

The metrics file provides utilities to measure, analyze, and compare the performance of the package's algorithms in a standardized way.

### Function accuracy_score(...)

Function to calculate precision accuracy based on lists of true labels and
predicted labels.

```python
def accuracy_score(
    y_true: Union[npt.NDArray, list],
    y_pred: Union[npt.NDArray, list]
) -> float
```

**Accuracy Equation:**

The accuracy is defined by the following formula:

$$
{
\text{Accuracy} = \frac{\sum_{i=1}^{n} (y_i = \hat{y}_i)}{n} 
    = \frac{\text{Correct Predictions}}{\text{Total Number}}
}
$$

**Term Definitions**
- $y_i$: the true label for instance i (y_true).
- $\hat{y}_i$: the predicted label for instance i (y_pred).

---

**Parameters**:
* **_y_true_** (``Union[npt.NDArray, list]``): Ground truth (correct) labels.
    Expected to be of the same length as `y_pred`.
* **_y_pred_** (``Union[npt.NDArray, list]``): Predicted labels. Expected to
    be of the same length as `y_true`.

Returns:
* **_Accuracy_** (``float``): The ratio of correct predictions to the total
number of predictions.

**Raises**:
* `ValueError`: If `y_true` or `y_pred` are empty or if they do not have the same length.

---