import {Platform, StyleSheet} from 'react-native';

export const RobotoFonts = {
  Black: {
    fontFamily: 'Roboto-Black', // 900
  },
  BlackItalic: {
    fontFamily: 'Roboto-BlackItalic',
  },
  Bold: {
    fontFamily: 'Roboto-Bold', // 700
  },
  BoldItalic: {
    fontFamily: 'Roboto-BoldItalic',
  },
  Italic: {
    fontFamily: 'Roboto-Italic',
  },
  Light: {
    fontFamily: 'Roboto-Light', // 300
  },
  LightItalic: {
    fontFamily: 'Roboto-LightItalic',
  },
  Medium: {
    fontFamily: 'Roboto-Medium', // 500
  },
  MediumItalic: {
    fontFamily: 'Roboto-MediumItalic',
  },
  Regular: {
    fontFamily: 'Roboto-Regular', // 400
  },
  Thin: {
    fontFamily: 'Roboto-Thin', // 100
  },
  ThinItalic: {
    fontFamily: 'Roboto-ThinItalic',
  },
};

export const TRobotoStyle = StyleSheet.create({
  H4864Bold: {
    ...RobotoFonts.Bold,
    ...Platform.select({
      ios: {
        fontWeight: '700',
      },
    }),
    fontSize: 48,
    lineHeight: 64,
  },
  H2436Bold: {
    ...RobotoFonts.Bold,
    ...Platform.select({
      ios: {
        fontWeight: '700',
      },
    }),
    fontSize: 24,
    lineHeight: 36,
  },
  H2436Medium: {
    ...RobotoFonts.Medium,
    ...Platform.select({
      ios: {
        fontWeight: '500',
      },
    }),
    fontSize: 24,
    lineHeight: 36,
  },
  H2436Regular: {
    ...RobotoFonts.Regular,
    ...Platform.select({
      ios: {
        fontWeight: '400',
      },
    }),
    fontSize: 24,
    lineHeight: 36,
  },
  H2028BoldCap: {
    ...RobotoFonts.Black,
    ...Platform.select({
      ios: {
        fontWeight: '900',
      },
    }),
    fontSize: 20,
    lineHeight: 28,
  },
  H2028Bold: {
    ...RobotoFonts.Bold,
    ...Platform.select({
      ios: {
        fontWeight: '700',
      },
    }),
    fontSize: 20,
    lineHeight: 28,
  },
  H2028Medium: {
    ...RobotoFonts.Medium,
    ...Platform.select({
      ios: {
        fontWeight: '500',
      },
    }),
    fontSize: 20,
    lineHeight: 28,
  },
  H2028Regular: {
    ...RobotoFonts.Regular,
    ...Platform.select({
      ios: {
        fontWeight: '400',
      },
    }),
    fontSize: 20,
    lineHeight: 28,
  },
  H1826Bold: {
    ...RobotoFonts.Bold,
    ...Platform.select({
      ios: {
        fontWeight: '700',
      },
    }),
    fontSize: 18,
    lineHeight: 26,
  },
  H1826Medium: {
    ...RobotoFonts.Medium,
    ...Platform.select({
      ios: {
        fontWeight: '500',
      },
    }),
    fontSize: 18,
    lineHeight: 26,
  },
  H1826Regular: {
    ...RobotoFonts.Regular,
    ...Platform.select({
      ios: {
        fontWeight: '400',
      },
    }),
    fontSize: 18,
    lineHeight: 26,
  },
  H1624Bold: {
    ...RobotoFonts.Bold,
    ...Platform.select({
      ios: {
        fontWeight: '700',
      },
    }),
    fontSize: 16,
    lineHeight: 24,
  },
  H1624Medium: {
    ...RobotoFonts.Medium,
    ...Platform.select({
      ios: {
        fontWeight: '500',
      },
    }),
    fontSize: 16,
    lineHeight: 24,
  },
  H1624Regular: {
    ...RobotoFonts.Regular,
    ...Platform.select({
      ios: {
        fontWeight: '400',
      },
    }),
    fontSize: 16,
    lineHeight: 24,
  },
  H1420Bold: {
    ...RobotoFonts.Bold,
    ...Platform.select({
      ios: {
        fontWeight: '700',
      },
    }),
    fontSize: 14,
    lineHeight: 20,
  },
  H1420Medium: {
    ...RobotoFonts.Medium,
    ...Platform.select({
      ios: {
        fontWeight: '500',
      },
    }),
    fontSize: 14,
    lineHeight: 20,
  },
  H1420Regular: {
    ...RobotoFonts.Regular,
    ...Platform.select({
      ios: {
        fontWeight: '400',
      },
    }),
    fontSize: 14,
    lineHeight: 20,
  },
  H1216Bold: {
    ...RobotoFonts.Bold,
    ...Platform.select({
      ios: {
        fontWeight: '700',
      },
    }),
    fontSize: 12,
    lineHeight: 16,
  },
  H1216Medium: {
    ...RobotoFonts.Medium,
    ...Platform.select({
      ios: {
        fontWeight: '500',
      },
    }),
    fontSize: 12,
    lineHeight: 16,
  },
  H1216Regular: {
    ...RobotoFonts.Regular,
    ...Platform.select({
      ios: {
        fontWeight: '400',
      },
    }),
    fontSize: 12,
    lineHeight: 16,
  },
  H812Regular: {
    ...RobotoFonts.Regular,
    ...Platform.select({
      ios: {
        fontWeight: '400',
      },
    }),
    fontSize: 8,
    lineHeight: 12,
  },
  H1012Bold: {
    ...RobotoFonts.Bold,
    ...Platform.select({
      ios: {
        fontWeight: '700',
      },
    }),
    fontSize: 10,
    lineHeight: 12,
  },
});
