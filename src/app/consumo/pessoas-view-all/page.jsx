
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
        <div className="h-auto overflow-scroll p-10">
            <h1>Página das Pessoas</h1>

            <div className="card-eletro-view">
                <table>
                    <tr>
                        <th>Nome</th>
                        <th>PostalZip</th>
                        <th>Country</th>
                        <th>Id</th>
                        <th>Botoes</th>
                    </tr>
                        {
                            items.map((item) => (

                                <tr key={item.id}>
                                    <Link href={`/consumo/pessoas-view-by-id/${item.id}`}>
                                        <th className="nome">{item.nome}</th>
                                    </Link>
                                    <th>{item.postalZip}</th>
                                    <th>{item.country}</th>
                                    <th>{item.id}</th>
                                    <th className="icons flex justify-center border-none">
                                        <Link href="/"><AiFillHome /></Link>
                                        <Link href="https://github.com/"><AiFillGithub /></Link>

                                    </th>
                                </tr>


                            ))

                        }
                </table>
            </div>

        </div>
    )
}
