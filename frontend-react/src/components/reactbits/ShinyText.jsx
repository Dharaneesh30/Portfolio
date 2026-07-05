import React from 'react'

export default function ShinyText({ as: Tag = 'span', children, className = '', speed = 3, style, ...props }) {
  return (
    <Tag
      className={`shiny-text ${className}`.trim()}
      style={{ ...style, '--shine-speed': `${speed}s` }}
      {...props}
    >
      {children}
    </Tag>
  )
}
