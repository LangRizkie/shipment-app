import React, { CSSProperties, MouseEventHandler, SVGAttributes } from 'react'
import dynamic from 'next/dynamic'
import { IconContext } from 'react-icons'

export interface IconProps {
  icon: string
  color?: string
  size?: string
  className?: string
  style?: CSSProperties
  attr?: SVGAttributes<SVGElement>
  onClick?: MouseEventHandler<HTMLInputElement | HTMLButtonElement>
}

const Icon: React.FC<IconProps> = ({ ...props }) => {
  const [library, iconComponent] = props.icon.split('/')

  if (!library || !iconComponent) return <div>Could Not Find Icon</div>

  const lib = library.toLowerCase()
  const Icon = dynamic(() =>
    import(`react-icons/${lib}/index.js`)
      .then((el: JSX.Element) => 
        el[iconComponent as keyof JSX.Element])
  )

  const value: IconContext = {
    color: props.color,
    size: props.size || '1.2rem',
    className: props.className,
    style: props.style,
    attr: props.attr
  }

  return (
    <IconContext.Provider value={value}>
      <Icon />
    </IconContext.Provider>
  )
};

export default Icon
