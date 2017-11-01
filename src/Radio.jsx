import '../style';
import React from 'react';
import RcCheckbox from 'rc-checkbox';
import omit from 'omit.js';
import classNames from 'classnames';

class Radio extends React.Component {
  static RadioItem: any;

  render() {
    const { prefixCls, className, style, children } = this.props;
    const wrapCls = classNames({
      [className]: !!className,
      [`${prefixCls}-wrapper`]: true,
    });
    const mark = (
      <label className={wrapCls} style={style}>
        <RcCheckbox {...omit(this.props, ['className', 'style'])} type="radio" />
        {children}
      </label>
    );
    if (this.props.wrapLabel) {
      return mark;
    }
    return <RcCheckbox {...this.props} type="radio" />;
  }
}
Radio.defaultProps = {
  prefixCls: 'am-radio',
  wrapLabel: true,
};
Radio.propTypes = {
  defaultChecked:React.PropTypes.bool,
  checked:React.PropTypes.bool,
  disabled:React.PropTypes.bool,
  onChange:React.PropTypes.func,
  /** web only */
  prefixCls: React.PropTypes.string,
  listPrefixCls: React.PropTypes.string,
  className: React.PropTypes.string,
  name: React.PropTypes.string,
  wrapLabel:React.PropTypes.bool
};
Radio.displayName = "Radio";
module.exports=Radio;
