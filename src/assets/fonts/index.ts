import { Lato } from 'next/font/google'
import localFont from 'next/font/local'

// ? Lato
const lato400 = Lato({ weight: '400', subsets: ['latin'] })

// ? Gilroy
const gilroy400 = localFont({ src: './Gilroy-Regular.ttf' })

// ? NTSomic
const ntSomic400 = localFont({ src: './NTSomic-Regular.ttf' })

export const fonts = {
  lato400: lato400,
  gilroy400: gilroy400,
  ntSomic400: ntSomic400,
}

export type FontsType = keyof typeof fonts

export default fonts
