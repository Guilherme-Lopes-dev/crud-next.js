interface EntradaProps {
    tipo?: 'text' | 'number'
    texto: string
    valor: any
    somenteLeitura?: boolean
    valorMudou? : (valor: any) => void
    className? : string
}

export default function Entrada(props: EntradaProps) {
    return (
       <div className={`flex flex-col  ${props.className}`}>
        <label htmlFor="">
            {props.texto}
        </label>
        <input className={`border border-purple-500 rounded-lg focus: outline-none bg-gray-100 px-4 py-2 mb-4
        ${props.somenteLeitura? '': 'focus:bg-white' }`}
        onChange={e => props.valorMudou?.(e.target.value)}
         type={props.tipo}  value={props.valor} readOnly={props.somenteLeitura}/>
       </div>
    )
}