
import Link from "next/link";
import { redirect } from "next/navigation";
import { AiFillHome, AiFillGithub } from 'react-icons/ai';

export default async function EletroView() {

    let items;

    try {
        const response = await fetch('http://localhost:3000/dados/get-all');
        items = await response.json();

    } catch (error) {
        console.log(error);
        redirect('/error');
    }

    return (
        <div>
            <h1>Página das Pessoas</h1>

            <div className="card-eletro-view">

                <ul>
                    {
                        items.map((item) => (

                            <li key={item.id}>
                                <Link href={`/consumo/pessoas-view-by-id/${item.id}`}>
                                    <p className="nome">{item.nome}</p>
                                </Link>
                                <p>{item.postalZip}</p>
                                <p>{item.country}</p>
                                <div className="icons">
                                    <Link href="/"><AiFillHome /></Link>
                                    <Link href="https://github.com/"><AiFillGithub /></Link>

                                </div>
                            </li>


                        ))

                    }

                </ul>

            </div>

        </div>
    )
}
