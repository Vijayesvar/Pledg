    import { Instrument_Sans } from 'next/font/google';

    export const instrumentSans = Instrument_Sans({
      variable: '--font-instrument-sans',
      subsets: ['latin'], // Specify the necessary subsets
      display: 'swap', // Recommended for better performance
      // If not using a variable font, specify a weight:
      // weight: '400',
    });