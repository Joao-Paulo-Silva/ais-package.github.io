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

# AIRS (Sistema Imunológico Artificial de Reconhecimento)

O ``AIRS`` é um algoritmo de classificação inspirado no processo de seleção clonal. A versão implementada nesta classe é inspirada na sua versão simplificada, o AIRS2, descrito em[Brabazon, O'Neill, and McGarraghy (2015)](#1)

Trabalhos relacionados e notáveis:
- [Artificial Immune Recognition System V2 - AZZOUG Aghiles](https://github.com/AghilesAzzoug/Artificial-Immune-System)


:::info

**``AIRS``** estende a classe **[``_ABR``](ABR)**, herdando sua funcionalidade base.

:::


## Constructor AIRS:

Nesta classe, há uma adaptação para dados de valor real e uma opção secundária para características binárias.

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

A classe ``AIRS`` tem a finalidade de realizar a classificação utilizando metáforas de seleção e expansão clonal.

**Attributes:**
* ***n_resources*** (``float``): Quantidade total de recursos disponíveis. Defaults to 10.
* ***rate_clonal*** (``int``): Quantidade maxima de clones possíveis de uma classe. Esta quantidade é multiplicada pela (estimulo da célula * rate_hypermutation) para definir o numero de clones. Defaults to 10.
* ***n_antigens_selected*** (``int``): A quantidade de antígenos selecionados aleatoriamente para serem adicionados ao pool inicial de células de memória, por classe.
* ***rate_hypermutation*** (``float``): A taxa de clones mutados derivados de rate_clonal em um fator escalar. Defaults to 0.75.
* ***affinity_threshold_scalar*** (``float``): Limiar de afinidade normalizada. Defaults to 0.75.
* ***k*** (``int``): A quantidade de K vizinhos mais próximos que sera utilizado para eleger um rotulo na previsão. Defaults to 10.
* ***max_iters*** (``int``): Numero máximo de interações no processo de refinamento do conjunto ABR exposto a aᵢ. Defaults to 100.
* ***resource_amplified*** (``float``): Amplificador de consumo de recursos é multiplicado com o estimulo para subtrair recursos. Defaults to 1.0 sem amplificação.
* ***metric*** (``Literal["manhattan", "minkowski", "euclidean"]``): Método utilizado para calcular a distância entre o estímulo e a célula de memória.:

       * ``'euclidiana'`` ➜ O cálculo da distância dá-se pela expressão:  $$\sqrt{(X_1 – X_1)^2 + (Y_2 – Y_2)^2 + ... + (Y_n – Y_n)^2}$$.
    * ``'minkowski'``  ➜ O cálculo da distância dá-se pela expressão: $$( |X_1 – Y_1|^p + |X_2 – Y_2|^p + ... |X_n – Y_n|^p)^\frac{1}{p}$$.
    * ``'manhattan'``  ➜ O cálculo da distância dá-se pela expressão:  $$( |X_1 – X_1| + |Y_2 – Y_2| + ... + |Y_n – Y_n|)$$.

    Defaults to ``'euclidean'``.
    

* ***algorithm*** (``Literal["continuous-features", "binary-features"]``): Define a versão do algoritmo a ser utilizada, de acordo com o tipo de dado, contínuo ou binário. O padrão é "continuous-features".
* **seed** (int): Semente para a geração randômica dos valores nos detectores. Defaults to None.

- ``**kwargs``:
    - **p** (``float``): Este parâmetro armazena o valor de ``p`` utilizada na distância de Minkowski. O padrão é ``2``, o que significa distância euclidiana normalizada. Diferentes valores de p levam a diferentes variantes da distância de Minkowski [saiba mais](https://docs.scipy.org/doc/scipy/reference/generated/scipy.spatial.distance.minkowski.html).

---

### Function fit(...)


A função ``fit(...)``, realiza o treinamento de acordo com ``X`` e ``y``, utilizando o método Sistema Imunológico Artificial de Reconhecimento (``AIRS``).

``` python
 def fit(self, X: npt.NDArray, y: npt.NDArray, verbose: bool = True)
```

**Os parâmetros de entrada são:**

* ``X``: array com as características das amostras com **N** amostras (linhas) e **N** características  (colunas), normalizados para valores entre [0, 1]. 
* ``y``: array com as classes de saídas disposto em **N** amostras que são relacionadas ao ``X``.
* ``verbose``: boolean com valor default ``True``, determina se o feedback da geração dos detectores será imprimido.

*Retorna a instância da classe.*

---

### Function predict(...)

Função para realizar a predição de classes com base na célula de memória criada após o treinamento.

``` python
def predict(self, X: npt.NDArray) -> Optional[npt.NDArray]
```

**Os parâmetros de entrada são:**
* ``X``: array com as características para a previsão, com **N** amostras (Linhas) e **N** colunas.

**Returns:** 
* ``C``: Um array de previsão com as classes de saída para as características informadas. 
* ``None``: se não houver detectores.

---

### Function score(...)

A função ``score(...)`` calcula a precisão do modelo treinado por meio da realização de previsões e do cálculo da acurácia.


```python
def score(self, X: npt.NDArray, y: list) -> float:
```

retorna a acurácia, do tipo ``float``.

---

## Protected Methods

---

### Function _refinement_ABR(...)

A função faz o processo de refinamento do conjunto ABR ate que o valor médio da estimulação seja maior que o limite definido (``affinity_threshold_scalar``)


``` python
def _refinement_ABR(self, ai: npt.NDArray, c_match: _Cell, abr_list: List[_ABR]) -> _Cell:
```

**Os parâmetros de entrada são:**
- ***c_match*** (``_Cell``): Célula com a maior estimulação com relação a aᵢ
- ***abr_list*** (``List[_ABR]``): Conjunto ABR.

**Returns:** 
* **_Cell**: A célula com maior estimulação de ABR.

---

### Function _cells_affinity_threshold(...)

Esta função calcula o limite de afinidade com base na afinidade média entre instâncias de treinamento, onde aᵢ e aⱼ são um par de antígenos, e a afinidade é medida pela distância (Euclidiana, Manhattan, Minkowski, Hamming).

``` python
def _cells_affinity_threshold(self, antigens_list: npt.NDArray):
```

**Seguindo a fórmula:**

$$
\text{affinity\_threshold} = \frac{
    \sum_{i=1}^{n-1} \sum_{j=i+1}^{n} \text{affinity}(a_i, a_j)
}{
    \frac{n(n - 1)}{2}
}
$$

**Os parâmetros de entrada são:**
- ***antigens_list*** (``NDArray``): Lista de antígenos de treinamento.

---

### Function _affinity(...)

Calcula o estimulo entre dois vetores usando métricas

``` python
def _affinity(self, u: npt.NDArray, v: npt.NDArray) -> float:
```

**Os parâmetros de entrada são:**
* ***u*** (``npt.NDArray``): Coordenadas do primeiro ponto.
* ***v*** (``npt.NDArray``): Coordenadas do segundo ponto.

**Returns:** 
* (``float``) Retorna a taxa de estimulo entre os vetores.

---

### Function _init_memory_c(...)

Esta função inicializa as células de memória escolhendo `n_antigens_selected` aleatoriamente da lista de antígenos de treinamento.

``` python
def _init_memory_c(self, antigens_list: npt.NDArray) -> List[_Cell]:
```

**Os parâmetros de entrada são:**
- ***antigens_list*** (``NDArray``): Lista de antígenos de treinamento.

**Returns:** 
* ***Mc***: Lista de memórias inicializadas.

---

### Function __slice_index_list_by_class(...)

A função ``__slice_index_list_by_class(...)``, separa os índices das linhas conforme a classe de saída, para percorrer o array de amostra, apenas nas posições que a saída for a classe que está sendo treinada.

```python
def __slice_index_list_by_class(self, y: npt.NDArray) -> dict:
```

**Os parâmetros de entrada são:**

* ***y*** (``npt.NDArray``): Recebe um array ``y``[``N amostra``] com as classes de saída do array de amostra ``X``.


**Returns:** 
* ``dict``: Um dicionário com a lista de posições do array(``y``), com as classes como chave.

---

# References

---

##### 1 
> BRABAZON, Anthony; O’NEILL, Michael; MCGARRAGHY, Seán. Natural Computing Algorithms. [S. l.]: Springer Berlin Heidelberg, 2015. DOI 10.1007/978-3-662-43631-8. Disponível em: http://dx.doi.org/10.1007/978-3-662-43631-8.
