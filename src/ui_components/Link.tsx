import Link from '@mui/material/Link';

type LinkProps = {
    href?: string,
    underline?: 'none' | 'hover' | 'always',
    style: object,
    action: object,
    context: any,
    children: React.ReactNode
}

const link = ({href, underline, style, children, action, context}: LinkProps) => {
    const { triggerActionEvent } = context();
    const handlerClick = action ?
        (e:React.MouseEvent<HTMLAnchorElement, MouseEvent>) => triggerActionEvent(e, action): undefined;

  return (
    <div>
        <Link 
            style={style}
            onClick={handlerClick}
            underline={underline}>
                {children}
        </Link>
    </div>
  )
}

export default link;
