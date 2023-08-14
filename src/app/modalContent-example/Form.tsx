const styles = {
  border: '1px solid gray',
  padding: '5px',
  width: '100%',
}
export const Form = () => {
  return (
    <form>
      <input style={styles} type="text" placeholder="Наименование учреждения" />
      <input style={styles} type="text" placeholder="E-mail" />
    </form>
  )
}
