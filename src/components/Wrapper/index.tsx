import { ReactEventHandler, ReactNode } from 'react';

export const Wrapper = ({ children, onClose }: { children: ReactNode, onClose: ReactEventHandler }) => {
  return (
    <div onClick={onClose} className="tw--fixed tw--top-0 tw--left-0 tw--w-screen tw--h-screen tw--z-[9999] tw--bg-overlay">
      {children}
    </div>
  )
}
