import { FC, PropsWithChildren } from "react"


export const Button : FC<PropsWithChildren> = ({children}): JSX.Element => {
    return <button className="button-content">{children}</button>
}