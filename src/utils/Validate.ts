const Validate = {
  // маска для номера телефона
  phone(currentPhone: string) {
    const value = currentPhone
    const currentIndex = [...currentPhone][0] === '+' ? 1 : 0
    const maxValue = 11 + currentIndex
    const indexes = [
      [0, 1 + currentIndex],
      [currentIndex + 1, 4 + currentIndex],
      [currentIndex + 4, 7 + currentIndex],
      [currentIndex + 7, 9 + currentIndex],
      [currentIndex + 9, 11 + currentIndex],
      [currentIndex + 11, maxValue],
    ]
    let phoneValue = ''
    indexes.forEach((elem, index) => {
      if (index === 0) {
        phoneValue += `${value.substring(elem[0], elem[1])}`
        return
      }
      if (value.substring(elem[0], elem[1]) && index === 1) {
        phoneValue += `-(${value.substring(elem[0], elem[1])}`
      }
      if (value.substring(elem[0], elem[1]) && index === 2) {
        phoneValue += `)-(${value.substring(elem[0], elem[1])}`
      }
      if (value.substring(elem[0], elem[1]) && index === 3) {
        phoneValue += `)-${value.substring(elem[0], elem[1])}`
      }
      if (value.substring(elem[0], elem[1]) && index > 3) {
        phoneValue += `-${value.substring(elem[0], elem[1])}`
      }
    })

    return phoneValue.trim()
  },

  // есть ли спец символ
  specialSymbol(value: string) {
    return /[\.:,;\?!@#\$%\^&\*_\-\+=]/.test(value)
  },

  // есть хотя бы одна заглавная буква
  hasCapital(value: string) {
    return !/^[a-zа-я\d]*$/.test(value)
  },

  // есть хотя бы одна цифра
  hasOneNumber(value: string) {
    return /(?=.*[0-9])/.test(value)
  },

  // не менее 8 символов
  minLength(value: string) {
    return /[0-9a-zA-Zа-яА-Я!@#$%^&*]{8,}/.test(value)
  },
}

export default Validate
