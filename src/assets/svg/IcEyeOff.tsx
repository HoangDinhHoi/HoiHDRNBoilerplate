import * as React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';
const IcEyeOff = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M12.0002 19C12.9462 19 13.8102 18.897 14.5982 18.719L12.8412 16.962C12.5682 16.983 12.2912 17 12.0002 17C6.64924 17 4.57624 13.154 4.07424 12C4.27824 11.53 4.74824 10.619 5.58224 9.70297L4.18424 8.30497C2.64624 9.97197 2.06324 11.651 2.05224 11.684C1.98324 11.889 1.98324 12.112 2.05224 12.317C2.07324 12.383 4.36724 19 12.0002 19ZM12.0002 4.99997C10.1632 4.99997 8.65424 5.39597 7.39624 5.98097L3.70724 2.29297L2.29324 3.70697L20.2932 21.707L21.7072 20.293L18.3882 16.974C21.0022 15.023 21.9352 12.359 21.9492 12.317C22.0182 12.112 22.0182 11.889 21.9492 11.684C21.9272 11.617 19.6332 4.99997 12.0002 4.99997ZM16.9722 15.558L14.6922 13.278C14.8822 12.888 15.0002 12.459 15.0002 12C15.0002 10.359 13.6412 8.99997 12.0002 8.99997C11.5412 8.99997 11.1122 9.11797 10.7232 9.30897L8.91524 7.50097C9.79624 7.19297 10.8142 6.99997 12.0002 6.99997C17.3512 6.99997 19.4242 10.846 19.9262 12C19.6242 12.692 18.7602 14.342 16.9722 15.558Z"
      fill={'#616161' ?? props.color}
    />
  </Svg>
);
export default IcEyeOff;