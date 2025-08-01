import { setProductsCart, typeProduct } from '../../store/reducers/cart'
import * as S from './styles'
import { setFavoriteItens } from '../../store/reducers/fav'
import { useAppDispatch, useAppSelector } from '../../store/reducers/hooks'

type Props = {
  produto: typeProduct
  estaNosFavoritos: boolean
}

export const paraReal = (valor: number) =>
  new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(
    valor
  )

const ProdutoComponent = ({ produto, estaNosFavoritos }: Props) => {
  const dispatch = useAppDispatch()
  const { favItens } = useAppSelector((state) => state.fav)
  const { cartProducts } = useAppSelector((state) => state.cart)

  const handleFavoriteClick = () => {
    if (favItens.find((p) => p.id === produto.id)) {
      const favItensSemProduto: typeProduct[] = favItens.filter(
        (p) => p.id !== produto.id
      )
      dispatch(setFavoriteItens(favItensSemProduto))
    } else {
      dispatch(setFavoriteItens([...favItens, produto]))
    }
  }

  const handleAddCartButton = () => {
    if (cartProducts.find((p) => p.id === produto.id)) {
      alert('Item já adicionado')
    } else {
      dispatch(setProductsCart([...cartProducts, produto]))
    }
  }

  return (
    <S.Produto>
      <S.Capa>
        <img src={produto.imagem} alt={produto.nome} />
      </S.Capa>
      <S.Titulo>{produto.nome}</S.Titulo>
      <S.Prices>
        <strong>{paraReal(produto.preco)}</strong>
      </S.Prices>
      <S.BtnComprar onClick={handleFavoriteClick} type="button">
        {estaNosFavoritos
          ? '- Remover dos favoritos'
          : '+ Adicionar aos favoritos'}
      </S.BtnComprar>
      <S.BtnComprar onClick={handleAddCartButton} type="button">
        Adicionar ao carrinho
      </S.BtnComprar>
    </S.Produto>
  )
}

export default ProdutoComponent
