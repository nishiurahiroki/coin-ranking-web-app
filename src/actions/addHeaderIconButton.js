export default (iconButton) => ({headerIconButtons}) => {
  headerIconButtons.push(iconButton)
  return {headerIconButtons}
}
