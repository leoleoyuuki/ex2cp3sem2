
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function EletroView() {

    let items;

    try{
        const response = await fetch('http://localhost:3000/dados/get-all');
        items = await response.json();
        
    }catch(error){
        console.log(error);
        redirect('/error');
    }

  return (
    <div>
        <h1>Página das Pessoas</h1>
        
        <div className="card-eletro-view">
                
                <ul>
                    {
                        items.map((item)=>(
                            <Link href={`/consumo/pessoas-view-by-id/${item.id}`}>
                                <li key={item.id}>
                                    <p>{item.nome}</p>
                                    <p>{item.postalZip}</p>
                                    <p>{item.country}</p>
                                </li>
                            </Link>
                        ))
                    }
                </ul>
            
        </div>

    </div>
  )
}
