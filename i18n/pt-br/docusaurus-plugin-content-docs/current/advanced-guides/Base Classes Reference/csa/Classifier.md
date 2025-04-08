---
sidebar_position: 1
title: Artificial Immune Recognition System Base
sidebar_label: Artificial Immune Recognition System
lastUpdatedAt: 2025/04/07
author: João Paulo
---

# BaseClassifier

A classe `BaseClassifier` é uma classe utilitária contendo funções com o modificador protected que podem ser herdadas por outras classes do módulo de Expansão e Seleção Clonal. Essas funções oferecem suporte a operações comuns, como o cálculo de distâncias, a separação de dados para otimizar o treinamento e a previsão, além de medir a precisão e realizar outras tarefas necessárias.

---

### Função score(...)

```python
def _score(self, X: npt.NDArray, y: list) -> float
```
A função de pontuação (score) calcula a precisão da previsão.

Esta função realiza a previsão de X e verifica quantos elementos são iguais entre o vetor y e y_predicted. Esta função foi adicionada para compatibilidade com algumas funções do scikit-learn.

**Parameters**:
+ ***X*** `np.ndarray`: Conjunto de características com formato (``n_amostras``, ``n_características``).
+ ***y*** ` np.ndarray`: Valores verdadeiros com formato (``n_amostras``).

**Returns**:

+ precisão `float`: A precisão do modelo.

:::note
Esse estimador usa a função [**accuracy_score**](/docs/advanced-guides/Utils/Metrics#function-accuracy_score) function.
:::

---

## Funções Protegidas:

---

### Função _distance(...):

```python
def _distance(self, u: npt.NDArray, v: npt.NDArray)
```

Função para calcular a distância entre dois pontos usando a "métrica" escolhida.

**Parameters**:
* ***u*** (``npt.NDArray``): Coordenadas do primeiro ponto.
* ***v*** (``npt.NDArray``): Coordenadas do segundo ponto.

**returns**:
* Distância (``double``) entre os dois pontos.

---

### Função _check_and_raise_exceptions_fit(...):
```python
def _check_and_raise_exceptions_fit(
    X: npt.NDArray = None,
    y: npt.NDArray = None,
    algorithm: Literal[
        "continuous-features", "binary-features"
    ] = "continuous-features"
)
```
Função responsável por verificar os parâmetros da função fit e lançar exceções se a verificação não for bem-sucedida.

**Parâmetros**:

* ***X*** (``npt.NDArray``): Array de treinamento, contendo as amostras e suas características, [``N samples`` (linhas)][``N features`` (colunas)].
* ***y*** (``npt.NDArray``): Array de classes alvo de ``X`` com [``N samples`` (linhas)].
* ***algorithm*** (``Literal["continuous-features", "binary-features"]``, opcional): Algoritmo atual. O padrão é 'continuous-features'.

---

### Função fit(...)

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

---

### Função predict(...)

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