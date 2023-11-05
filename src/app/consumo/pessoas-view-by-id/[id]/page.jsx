import { AiFillHome, AiFillGithub } from 'react-icons/ai';
import {BiArrowBack} from 'react-icons/bi';

import { redirect } from "next/navigation";
import Link from 'next/link';

export default async function PessoasView({ params }) {

    let item;
    const id = params.id;

    try {
        const response = await fetch(`http://localhost:3000/dados/get-by-id/${id}`);
        item = await response.json();

    } catch (error) {
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
                        <div className="icons">
                            <Link href="/"><AiFillHome /></Link>
                            <Link href="https://github.com/"><AiFillGithub /></Link>
                            <Link href="/consumo/pessoas-view-all"><BiArrowBack /></Link>
                            

                        </div>
                    </li>
                </ul>
            </div>

        </div>
    )
}
