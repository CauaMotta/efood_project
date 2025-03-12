import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import InputMask from 'react-input-mask'
import { BounceLoader } from 'react-spinners'

import { RootReducer } from '../../store'
import { clearCart, closeCart, removeItem } from '../../store/reducers/cart'
import { priceFormatter } from '../../utils'
import { usePurchaseMutation } from '../../services/api'

import { Button, IsLoadingMessage, Overlay } from '../../styles'
import * as S from './styles'
import variables from '../../styles/variables'
import removeIcon from '/assets/remove-icon.svg'

const Cart = () => {
  const { items, isOpen } = useSelector((state: RootReducer) => state.cart)
  const [purchase, { data, isLoading, isSuccess }] = usePurchaseMutation()
  const dispatch = useDispatch()

  const [delivery, setDelivery] = useState(false)
  const [payment, setPayment] = useState(false)
  const [disableDeliveryButton, setDisableDeliveryButton] = useState(true)
  const [disablePaymentButton, setDisablePaymentButton] = useState(true)

  const form = useFormik({
    initialValues: {
      fullName: '',
      address: '',
      city: '',
      cep: '',
      houseNumber: '',
      complement: '',
      cardName: '',
      cardNumber: '',
      cardCode: '',
      expiresMonth: '',
      expiresYear: ''
    },
    validationSchema: Yup.object({
      fullName: Yup.string()
        .min(3, 'O nome deve ter no mínimo 3 caracteres')
        .required('O nome é obrigatório'),
      address: Yup.string()
        .min(5, 'O endereço deve ter no mínimo 5 caracteres')
        .required('O endereço é obrigatório'),
      city: Yup.string()
        .min(5, 'A cidade deve ter no mínimo 5 caracteres')
        .required('A cidade é obrigatória'),
      cep: Yup.string()
        .min(9, 'O CEP deve ter no mínimo 8 caracteres')
        .max(9, 'O CEP deve ter no máximo 8 caracteres')
        .required('O CEP é obrigatório'),
      houseNumber: Yup.string()
        .min(2, 'O número da casa deve ter no mínimo 2 caracter')
        .max(5, 'O número da casa deve ter no máximo 5 caracteres')
        .required('O número da casa é obrigatório'),
      cardName: Yup.string()
        .min(3, 'O nome no cartão deve ter no mínimo 3 caracteres')
        .required('O nome no cartão é obrigatório'),
      cardNumber: Yup.string()
        .min(19, 'O número do cartão deve ter no mínimo 16 caracteres')
        .max(19, 'O número do cartão deve ter no máximo 16 caracteres')
        .required('O número do cartão é obrigatório'),
      cardCode: Yup.string()
        .min(3, 'O CVV deve ter no mínimo 3 caracteres')
        .max(3, 'O CVV deve ter no máximo 3 caracteres')
        .required('O CVV é obrigatório'),
      expiresMonth: Yup.string()
        .min(2, 'O mês de expiração deve ter no mínimo 2 caracteres')
        .required('O mês de expiração é obrigatório'),
      expiresYear: Yup.string()
        .min(4, 'O ano de expiração deve ter no mínimo 4 caracteres')
        .required('O ano de expiração é obrigatório')
    }),
    onSubmit: (values) => {
      purchase({
        delivery: {
          receiver: values.fullName,
          address: {
            description: values.address,
            city: values.city,
            zipCode: values.cep,
            number: Number(values.houseNumber),
            complement: values.complement
          }
        },
        payment: {
          card: {
            name: values.cardName,
            number: values.cardNumber,
            code: Number(values.cardCode),
            expires: {
              month: Number(values.expiresMonth),
              year: Number(values.expiresYear)
            }
          }
        },
        products: items.map((item) => ({
          id: item.id,
          price: item.preco
        }))
      })
    }
  })

  const getTotalPrice = () => {
    return items.reduce((acc, value) => {
      return (acc += value.preco)
    }, 0)
  }

  const isError = (fieldName: string) => {
    const isTouched = fieldName in form.touched
    const isInvalid = fieldName in form.errors

    if (isTouched && isInvalid) return true
    return false
  }

  const changeFormContainer = (value: string) => {
    if (value === 'Voltar para o carrinho') setDelivery(false)
    if (value === 'Continuar com o pagamento') setPayment(true)
    if (value === 'Voltar para a edição de endereço') setPayment(false)
    if (value === 'Finalizar pagamento') {
      form.handleSubmit()
      setDelivery(false)
      setPayment(false)
    }
    if (value === 'Concluir') {
      dispatch(closeCart())
    }
  }

  const isDisabled =
    delivery && !payment ? disableDeliveryButton : disablePaymentButton

  useEffect(() => {
    const isAnyFieldTouched = Object.values(form.touched).some((value) => value)

    if (isAnyFieldTouched) {
      const deliveryFields = [
        'fullName',
        'address',
        'city',
        'cep',
        'houseNumber'
      ]
      const deliveryFieldsIsInvalid = deliveryFields.some(
        (field) => field in form.errors
      )

      if (deliveryFieldsIsInvalid) setDisableDeliveryButton(true)
      else setDisableDeliveryButton(false)

      const paymentFields = [
        'cardName',
        'cardNumber',
        'cardCode',
        'expiresMonth',
        'expiresYear'
      ]
      const paymentFieldsIsInvalid = paymentFields.some(
        (field) => field in form.errors
      )

      if (paymentFieldsIsInvalid) setDisablePaymentButton(true)
      else setDisablePaymentButton(false)
    }
  }, [form])

  useEffect(() => {
    dispatch(clearCart())
  }, [isSuccess, dispatch])

  return (
    <S.CartContainer className={isOpen ? 'isOpen' : ''}>
      <Overlay onClick={() => dispatch(closeCart())} />
      <S.Container>
        {items.length === 0 && !isSuccess && <p>O seu carrinho está vazio!</p>}
        {!delivery && items.length > 0 && !isLoading && (
          <>
            <ul>
              {items.map((item) => (
                <S.Item>
                  <img src={item.foto} alt={item.nome} />
                  <div>
                    <h3>{item.nome}</h3>
                    <p>{priceFormatter(item.preco)}</p>
                  </div>
                  <button
                    aria-label="remove"
                    onClick={() => dispatch(removeItem(item.id))}
                  >
                    <span
                      style={{ backgroundImage: `url(${removeIcon})` }}
                    ></span>
                  </button>
                </S.Item>
              ))}
            </ul>
            <div className="finalValue">
              <span>Valor total</span>
              <span>{priceFormatter(getTotalPrice())}</span>
            </div>
            <Button type="button" onClick={() => setDelivery(true)}>
              Continuar com a entrega
            </Button>
          </>
        )}
        <S.Form className={delivery || payment ? 'isVisible' : ''}>
          <div
            className={`deliveryContainer ${
              delivery && !payment ? 'isVisible' : ''
            }`}
          >
            <h3>Entrega</h3>
            <S.InputGroup>
              <S.InputField>
                <label htmlFor="fullName">Quem irá receber</label>
                <input
                  id="fullName"
                  type="text"
                  name="fullName"
                  value={form.values.fullName}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  className={isError('fullName') ? 'error' : ''}
                />
              </S.InputField>
              <S.InputField>
                <label htmlFor="address">Endereço</label>
                <input
                  id="address"
                  type="text"
                  name="address"
                  value={form.values.address}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  className={isError('address') ? 'error' : ''}
                />
              </S.InputField>
              <S.InputField>
                <label htmlFor="city">Cidade</label>
                <input
                  id="city"
                  type="text"
                  name="city"
                  value={form.values.city}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  className={isError('city') ? 'error' : ''}
                />
              </S.InputField>
              <div className="numberField">
                <S.InputField>
                  <label htmlFor="cep">CEP</label>
                  <InputMask
                    mask="99999-999"
                    id="cep"
                    type="text"
                    name="cep"
                    value={form.values.cep}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={isError('cep') ? 'error' : ''}
                  />
                </S.InputField>
                <S.InputField>
                  <label htmlFor="houseNumber">Número</label>
                  <InputMask
                    mask="99999"
                    id="houseNumber"
                    type="text"
                    name="houseNumber"
                    value={form.values.houseNumber}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={isError('houseNumber') ? 'error' : ''}
                  />
                </S.InputField>
              </div>
              <S.InputField>
                <label htmlFor="complement">Complemento (opcional)</label>
                <input
                  id="complement"
                  type="text"
                  name="complement"
                  value={form.values.complement}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                />
              </S.InputField>
            </S.InputGroup>
          </div>
          <div className={`paymentContainer ${payment ? 'isVisible' : ''}`}>
            <h3>Pagamento - Valor a pagar {priceFormatter(getTotalPrice())}</h3>
            <S.InputGroup>
              <S.InputField>
                <label htmlFor="cardName">Nome no cartão</label>
                <input
                  id="cardName"
                  type="text"
                  name="cardName"
                  value={form.values.cardName}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  className={isError('cardName') ? 'error' : ''}
                />
              </S.InputField>
              <div className="cardField">
                <S.InputField>
                  <label htmlFor="cardNumber">Número do cartão</label>
                  <InputMask
                    mask="9999 9999 9999 9999"
                    id="cardNumber"
                    type="text"
                    name="cardNumber"
                    value={form.values.cardNumber}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={isError('cardNumber') ? 'error' : ''}
                  />
                </S.InputField>
                <S.InputField>
                  <label htmlFor="cardCode">CVV</label>
                  <InputMask
                    mask="999"
                    id="cardCode"
                    type="text"
                    name="cardCode"
                    value={form.values.cardCode}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={isError('cardCode') ? 'error' : ''}
                  />
                </S.InputField>
              </div>
              <div className="numberField">
                <S.InputField>
                  <label htmlFor="expiresMonth">Mês de vencimento</label>
                  <InputMask
                    mask="99"
                    id="expiresMonth"
                    type="text"
                    name="expiresMonth"
                    value={form.values.expiresMonth}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={isError('expiresMonth') ? 'error' : ''}
                  />
                </S.InputField>
                <S.InputField>
                  <label htmlFor="expiresYear">Ano de Vencimento</label>
                  <InputMask
                    mask="9999"
                    id="expiresYear"
                    type="text"
                    name="expiresYear"
                    value={form.values.expiresYear}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={isError('expiresYear') ? 'error' : ''}
                  />
                </S.InputField>
              </div>
            </S.InputGroup>
          </div>
          <S.ButtonGroup>
            <Button
              type="button"
              onClick={({ currentTarget }) =>
                changeFormContainer(currentTarget.innerText)
              }
              disabled={isDisabled}
            >
              {delivery && !payment
                ? 'Continuar com o pagamento'
                : 'Finalizar pagamento'}
            </Button>
            <Button
              type="button"
              onClick={({ currentTarget }) =>
                changeFormContainer(currentTarget.innerText)
              }
            >
              {delivery && !payment
                ? 'Voltar para o carrinho'
                : 'Voltar para a edição de endereço'}
            </Button>
          </S.ButtonGroup>
        </S.Form>
        {isLoading && (
          <IsLoadingMessage>
            <BounceLoader color={variables.secondaryColor} />
          </IsLoadingMessage>
        )}
        {isSuccess && data && (
          <>
            <h3>Pedido realizado - {data.orderId}</h3>
            <p className="margin-bottom">
              Estamos felizes em informar que seu pedido já está em processo de
              preparação e, em breve, será entregue no endereço fornecido.
            </p>
            <p className="margin-bottom">
              Gostaríamos de ressaltar que nossos entregadores não estão
              autorizados a realizar cobranças extras.
            </p>
            <p className="margin-bottom">
              Lembre-se da importância de higienizar as mãos após o recebimento
              do pedido, garantindo assim sua segurança e bem-estar durante a
              refeição.
            </p>
            <p>
              Esperamos que desfrute de uma deliciosa e agradável experiência
              gastronômica. Bom apetite!
            </p>
            <S.ButtonGroup>
              <Button
                onClick={({ currentTarget }) =>
                  changeFormContainer(currentTarget.innerText)
                }
              >
                Concluir
              </Button>
            </S.ButtonGroup>
          </>
        )}
      </S.Container>
    </S.CartContainer>
  )
}

export default Cart
