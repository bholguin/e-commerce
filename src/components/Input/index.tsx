import { FC } from "react"
import { UseFormRegister } from "react-hook-form"

interface IEmailInput{
    placeholder?: string
    type: string,
    name: string
    register: UseFormRegister<any>
}

export const EmailInput: FC<IEmailInput> = (props): JSX.Element => {
    const {
        type,
        placeholder,
        register,
        name
    } = props
    return(
        <div className="input-content">
            <input 
            {...register(name, { 
                    required: "El campo no debe estar vacio", 
                    pattern:{
                        value:  /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                        message: "Debe ser un correo valido"
                    }
                })
            }
            className="input-current" 
            name={name}
            type={type} 
            placeholder={placeholder} 
            />
            <button type="submit" className="input-button"/>
        </div>
    )

}