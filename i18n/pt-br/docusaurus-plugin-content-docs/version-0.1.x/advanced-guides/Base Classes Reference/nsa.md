---
sidebar_position: 1
title: Base de Seleção Negativa
sidebar_label: Seleção Negativa
lastUpdatedAt: 2025/04/04
author: João Paulo
---

# NSA._base Class


A classe ``_Base`` contém funções utilitárias com o modificador ``protected`` que podem ser herdadas por várias classes para facilitar o uso. Ela inclui funções para calcular distância, separar dados para melhorar a eficiência de treinamento e previsão, medir precisão e outras funções.

## Funções Protegidas:

---

### def _distance(...):

```python
def _distance(self, u: npt.NDArray, v: npt.NDArray)
```

Função para calcular a distância entre dois pontos usando a "métrica" escolhida.

**Parâmetros**:
* ***u*** (``npt.NDArray``): Coordenadas do primeiro ponto.
* ***v*** (``npt.NDArray``): Coordenadas do segundo ponto.

**Retorna**:
* Distância (``double``) entre os dois pontos.

---

### def _check_and_raise_exceptions_fit(...)

```python
def _check_and_raise_exceptions_fit(self, X: npt.NDArray = None, y: npt.NDArray = None, _class_: Literal['RNSA', 'BNSA'] = 'RNSA')
```
Função responsável por verificar os parâmetros da função fit e lançar exceções se a verificação não for bem-sucedida.

**Parâmetros**:
* **X** (``npt.NDArray``): Array de treinamento, contendo as amostras e suas características, [``N samples`` (linhas)][``N features`` (colunas)].
* ***y*** (``npt.NDArray``): Array de classes alvo de ``X`` com [``N samples`` (linhas)].
* ***_class_*** (Literal[RNSA, BNSA], opcional): Classe atual. O padrão é 'RNSA'.

---

### def _score(...)

```python
def _score(self, X: npt.NDArray, y: list) -> float
```

A função de pontuação (score) calcula a precisão da previsão.

Esta função realiza a previsão de X e verifica quantos elementos são iguais entre o vetor y e y_predicted. 
Esta função foi adicionada para compatibilidade com algumas funções do scikit-learn.

**Parâmetros**:
+ ***X***: np.ndarray
    Conjunto de características com formato (n_amostras, n_características).
+ ***y***: np.ndarray
    Valores verdadeiros com formato (n_amostras,).

**Retorna**:

+ precisão: float
    A precisão do modelo.

---

## Métodos abstratos

### def fit(...)

```python
def fit(self, X: npt.NDArray, y: npt.NDArray, verbose: bool = True)
```

Ajusta o modelo aos dados de treinamento.

Implementação:

- [RNSA](/docs/aisp-techniques/Negative%20Selection/rnsa#function-fit)
- [BNSA](/docs/aisp-techniques/Negative%20Selection/bnsa#function-fit)

### def predict(...)

```python
def predict(self, X) -> Optional[npt.NDArray]:
```

Realiza a previsão dos rótulos para os dados fornecidos.

Implementação:

- [RNSA](/docs/aisp-techniques/Negative%20Selection/rnsa#function-predict)
- [BNSA](/docs/aisp-techniques/Negative%20Selection/bnsa#function-predict)