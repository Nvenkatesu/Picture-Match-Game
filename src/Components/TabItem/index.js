import './index.css'

const TabItem = props => {
  const {details, onChangeTab, categoryItem} = props
  const {displayText, tabId} = details

  const tabClassname = categoryItem === tabId ? `tab click-tab` : 'tab'

  const onchangeTabId = () => {
    onChangeTab(tabId)
  }
  return (
    <li className="list">
      <button type="button" className={tabClassname} onClick={onchangeTabId}>
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
