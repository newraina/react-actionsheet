
import './index.css'

import React from 'react'

function noop() {}

class Actionsheet extends React.Component {

  static defaultProps = {
    onRequestClose: noop,
    onCancel: noop,
    cancelText: '取消',
    show: false,
    menus: []
  }

  render() {
    const {
      onRequestClose,
      onCancel,
      cancelText,
      menus,
      show,
    } = this.props

    return (
      <div className={`react-actionsheet${show ? ' react-actionsheet-show' : ''}`}
        onClick={onRequestClose}>
        <div className='react-actionsheet-mask'>
        </div>
        <div className='react-actionsheet-wrap'>
          <div className='react-actionsheet-menu'>
            {
              menus.map((menu, i) => {
                const { content, onClick = noop } = menu
                return (
                  <div key={i} className='react-actionsheet-menu-item' onClick={onClick}>
                    {content}
                  </div>
                )
              })
            }
          </div>
          <div className='react-actionsheet-action'>
            <div className='react-actionsheet-action-item' onClick={onCancel}>
              {cancelText}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

// compiled bundle ignores "export default" values and exports empty object!!
// export default Actionsheet
export default Actionsheet
