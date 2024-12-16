import React from 'react';
import { View } from 'react-native';

import Recaptcha from "react-native-recaptcha-that-works";

interface ProposRecaptcha {
  recaptcha:any;
  onVerify:(params: any) => any;
}

const ReCaptcha = ({recaptcha,onVerify}:ProposRecaptcha) => {

  const onExpire = () => {
      console.warn('expired!');
  }

  return (
    <View>
    <Recaptcha
        ref={recaptcha}
        siteKey="6LdXSFwlAAAAAP_TRikzGX565Ne-yONIibgibWPv"
        baseUrl="http://127.0.0.1"
        onVerify={onVerify}
        onExpire={onExpire}
        size="normal"
    />

</View>
  )
}

export default ReCaptcha;


