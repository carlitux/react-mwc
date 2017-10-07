// @flow
import * as React from 'react';

import styles from '@material/drawer/mdc-drawer.scss';

type Props = {
  children: React.Node,
  type: 'temporary' | 'persistent' | 'permanent',
};

const DrawerToolbarSpacer = ({ type, children }: Props) => (
  <div className={styles[`mdc-${type}-drawer__toolbar-spacer`]}>{children}</div>
);

export default DrawerToolbarSpacer;