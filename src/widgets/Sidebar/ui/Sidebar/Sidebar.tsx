import React from 'react';
import {classNames} from "shared/lib/classNames/classNames";
import cls from './Sidebar.module.scss';
import {ThemeSwitcher} from "widgets/ThemeSwicher";

interface SidebarProps {
  className?: string
}

class SidebarPropsImpl implements SidebarProps {
}

export const Sidebar: React.FC<SidebarProps> = (props) => {
  const [collapsed, setCollapsed] = React.useState<boolean>(false);
  const {
    className,
    children
  } = props

  const onToggle = (): void => {
    setCollapsed(prev => !prev)
  }

  return (
    <div
      className={
        classNames(
          cls.Sidebar,
          {[cls.collapsed]: collapsed},
          [className]
        )}
    >
      <button onClick={onToggle}>toggle</button>
      <div className={cls.switchers}>
        <ThemeSwitcher />
      </div>
    </div>
  );
};
