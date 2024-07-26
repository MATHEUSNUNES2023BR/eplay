import Button from '../Button'
import Tag from '../Tag'
import {
  CartContainer,
  CartItem,
  Overlay,
  Prices,
  Quatity,
  SideBar
} from './style'

const Cart = () => (
  <CartContainer>
    <Overlay />
    <SideBar>
      <ul>
        <CartItem>
          <img />
          <div>
            <h3>Nome do jogo</h3>
            <Tag>RPG</Tag>
            <Tag>PS5</Tag>
            <span>R$ 150</span>
          </div>
          <button type="button" />
        </CartItem>
      </ul>
    </SideBar>
    <Quatity>2 jogo(s) no carrinho</Quatity>
    <Prices>
      Total de R$ 250,00 <span>Em até 6x sem juros</span>
    </Prices>
    <Button type={'button'} title="Clique no botão para comprar">
      Continuar com a compra
    </Button>
  </CartContainer>
)
export default Cart
