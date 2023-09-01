import { Lato } from 'next/font/google'
import localFont from 'next/font/local'

// ? Lato
const lato = Lato({ weight: '400', subsets: ['latin'] })

// ? Gilroy
const gilroy = localFont({ src: './Gilroy-Regular.ttf' })

// ? NTSomic
const ntSomic = localFont({ src: './NTSomic-Regular.ttf' })

export const fonts = {
  lato: lato,
  gilroy: gilroy,
  ntSomic: ntSomic,
}

export type FontsType = keyof typeof fonts

export default fonts
