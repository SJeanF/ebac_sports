import * as S from './styles'

import cesta from '../../assets/cesta.png'
import { paraReal } from '../Produto'
import { useAppSelector } from '../../store/reducers/hooks'

const Header = () => {
  const { cartProducts } = useAppSelector((state) => state.cart)
  const { favItens } = useAppSelector((state) => state.fav)

  const valorTotal = cartProducts.reduce((acc, item) => {
    acc += item.preco
    return acc
  }, 0)

  return (
    <S.Header>
      <h1>EBAC Sports</h1>
      <div>
        <span>{favItens.length} favoritos</span>
        <img src={cesta} />
        <span>
          {cartProducts.length} itens, valor total: {paraReal(valorTotal)}
        </span>
      </div>
    </S.Header>
  )
}

export default Header
