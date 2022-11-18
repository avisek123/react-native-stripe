import {CardField, createToken, useStripe} from '@stripe/stripe-react-native';
import {useState} from 'react';
import {Button} from 'react-native';

export default function PaymentScreen() {
  const {confirmPayment} = useStripe();
  const [cardInfo, setCardInfo] = useState({});
  const fetchCardInfo = cardDetails => {
    setCardInfo(cardDetails);
  };
  const onSubmit = async () => {
    console.log({cardInfo});
    if (cardInfo) {
      const resToken = await createToken({
        ...cardInfo,
        type: 'Card',
      });

      console.log({resToken});
    }
  };

  return (
    <>
      <CardField
        postalCodeEnabled={false}
        placeholders={{
          number: '4242 4242 4242 4242',
        }}
        cardStyle={{
          backgroundColor: '#FFFFFF',
          textColor: '#000000',
        }}
        style={{
          width: '100%',
          height: 50,
          marginVertical: 30,
        }}
        onCardChange={cardDetails => {
          fetchCardInfo(cardDetails);
          console.log('cardDetails', cardDetails);
        }}
        onFocus={focusedField => {
          console.log('focusField', focusedField);
        }}
      />
      <Button
        color={cardInfo?.complete ? 'green' : 'gray'}
        onPress={onSubmit}
        title="Pay"></Button>
    </>
  );
}
