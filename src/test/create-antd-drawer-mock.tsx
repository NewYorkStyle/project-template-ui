export type TDrawerSpyFactory = (
  impl: (...args: unknown[]) => unknown
) => unknown;

export function createAntdWithDrawerMock(
  actual: typeof import('antd'),
  spy: TDrawerSpyFactory
): any {
  const MockDrawer = ({
    children,
    className,
    closable = true,
    extra,
    keyboard,
    maskClosable,
    onClose,
    open,
    placement,
    size,
    title,
    width,
    ...restProps
  }: any) => {
    if (!open) return null;

    return (
      <div data-testid='antd-drawer' className={className} {...restProps}>
        {title && (
          <div data-testid='drawer-header'>
            <div data-testid='drawer-title'>{title}</div>
            {extra && <div data-testid='drawer-extra'>{extra}</div>}
          </div>
        )}

        <div data-testid='drawer-content'>{children}</div>

        <div
          data-testid='drawer-props'
          style={{display: 'none'}}
          data-placement={placement}
          data-width={width}
          data-size={size}
          data-closable={closable}
          data-mask-closable={maskClosable}
          data-keyboard={keyboard}
        />

        {closable && (
          <button onClick={onClose} data-testid='drawer-close-button'>
            Close
          </button>
        )}
      </div>
    );
  };

  return {
    ...actual,
    Drawer: spy(MockDrawer),
  };
}
