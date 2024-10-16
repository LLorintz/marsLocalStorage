export type resourcetype={
    name:string,
    amount:number,
    production:number,
    onChange:(value:number)=>void,
    onProdutionChange:(value:number)=>void,
} 

const Resourcr = ({name, amount, production, onChange, onProdutionChange}:resourcetype) => {
  return (
    <div className="resource-container">
      <div className="nameAndButton">
          <div className="resource-name">
            <button type="button" onClick={()=>onChange(1)}>+</button>
            <p>{name}: <span>{amount}</span></p>
            <button type="button" onClick={()=>onChange(-1)}>-</button>
          </div>
          <div className="button-container">
            <button type="button" onClick={()=>onProdutionChange(1)}>+</button>
            <p> production: {production} </p>
            <button type="button" onClick={()=>onProdutionChange(-1)}>-</button>
          </div>
        </div>
      </div>
  )
}

export default Resourcr