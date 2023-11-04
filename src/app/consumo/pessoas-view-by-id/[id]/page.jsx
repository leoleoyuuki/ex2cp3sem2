
import { redirect } from "next/navigation";

export default async function PessoasView({params}) {

    let item;
    const id = params.id;

    try{    
        const response = await fetch(`http://localhost:3000/dados/get-by-id/${id}`);
        item = await response.json();
        
    }catch(error){
        console.log(error);
        redirect('/error');
    }

  return (
    <div>
        <h1>Página das Pessoas</h1>
        
        <div className="card-eletro-view">
            <ul>
                <li key={item.id}>
                    <p>{item.nome}</p>
                    <p>{item.postalZip}</p>
                    <p>{item.country}</p>
                </li>
            </ul>
        </div>

    </div>
  )
}
