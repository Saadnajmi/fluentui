import * as React from 'react';
import cx from 'classnames';
import { createSvgIcon } from '../utils/createSvgIcon';
import { iconClassNames } from '../utils/iconClassNames';

export const FilesImageIcon = createSvgIcon({
  svg: ({ classes }) => (
    <svg role="presentation" focusable="false" viewBox="0 0 20 20" className={classes.svg}>
      <g className={cx(iconClassNames.outline, classes.outlinePart)}>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M14 7.5C14 8.32843 13.3284 9 12.5 9C11.6716 9 11 8.32843 11 7.5C11 6.67157 11.6716 6 12.5 6C13.3284 6 14 6.67157 14 7.5ZM13 7.5C13 7.77614 12.7761 8 12.5 8C12.2239 8 12 7.77614 12 7.5C12 7.22386 12.2239 7 12.5 7C12.7761 7 13 7.22386 13 7.5Z"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M3 6C3 4.34315 4.34315 3 6 3H14C15.6569 3 17 4.34315 17 6V14C17 15.6569 15.6569 17 14 17H6C4.34315 17 3 15.6569 3 14V6ZM6 4C4.89543 4 4 4.89543 4 6V14C4 14.3726 4.10191 14.7215 4.27937 15.0201L8.94868 10.432C9.53227 9.85859 10.4677 9.85859 11.0513 10.432L15.7206 15.0201C15.8981 14.7215 16 14.3726 16 14V6C16 4.89543 15.1046 4 14 4H6ZM6 16C5.63085 16 5.28505 15.9 4.98824 15.7256L9.64956 11.1453C9.84409 10.9542 10.1559 10.9542 10.3504 11.1453L15.0118 15.7256C14.7149 15.9 14.3692 16 14 16H6Z"
        />
      </g>
      <g className={cx(iconClassNames.filled, classes.filledPart)}>
        <path d="M12.5 8C12.7761 8 13 7.77614 13 7.5C13 7.22386 12.7761 7 12.5 7C12.2239 7 12 7.22386 12 7.5C12 7.77614 12.2239 8 12.5 8Z" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M3 6C3 4.34315 4.34315 3 6 3H14C15.6569 3 17 4.34315 17 6V14C17 14.6495 16.7936 15.2509 16.4428 15.7419L11.0524 10.4345C10.4686 9.85964 9.53144 9.85964 8.94759 10.4345L3.55724 15.7419C3.20642 15.2509 3 14.6495 3 14V6ZM12.5 9C13.3284 9 14 8.32843 14 7.5C14 6.67157 13.3284 6 12.5 6C11.6716 6 11 6.67157 11 7.5C11 8.32843 11.6716 9 12.5 9Z"
        />
        <path d="M4.26544 16.448C4.75517 16.7956 5.35372 17 6 17H14C14.6463 17 15.2448 16.7956 15.7346 16.448L10.3508 11.1471C10.1562 10.9555 9.84381 10.9555 9.6492 11.1471L4.26544 16.448Z" />
      </g>
    </svg>
  ),
  displayName: 'FilesImageIcon',
});
