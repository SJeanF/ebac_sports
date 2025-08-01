import { typeProduct } from '../store/reducers/cart'
import Produto from '../components/Produto'

import * as S from './styles'
import { useAppSelector } from '../store/reducers/hooks'
import { useGetProductsQuery } from '../services/api'

const ProdutosComponent = () => {
  const { favItens } = useAppSelector((state) => state.fav)
  const { data: produtos, isLoading } = useGetProductsQuery()

  const produtoEstaNosFavoritos = (produto: typeProduct) => {
    const produtoId = produto.id
    const IdsDosFavoritos = favItens.map((f) => f.id)

    return IdsDosFavoritos.includes(produtoId)
  }

  if (isLoading) return <h2>Carregando</h2>

  return (
    <>
      <S.Produtos>
        {produtos?.map((produto) => (
          <Produto
            estaNosFavoritos={produtoEstaNosFavoritos(produto)}
            key={produto.id}
            produto={produto}
          />
        ))}
      </S.Produtos>
    </>
  )
}

export default ProdutosComponent
