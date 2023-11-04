import { NextResponse } from "next/server";

const pessoas = [
	{
		id: 1,
		nome: "Yeo Cannon",
		postalZip: "58222",
		country: "Indonesia"
	},
	{
		id: 2,
		nome: "Kellie Hopkins",
		postalZip: "43555",
		country: "China"
	},
	{
		id: 3,
		nome: "Lawrence Glenn",
		postalZip: "42087",
		country: "Costa Rica"
	},
	{
		id: 4,
		nome: "Galena Morales",
		postalZip: "02803",
		country: "India"
	},
	{
		id: 5,
		nome: "Idona Juarez",
		postalZip: "458465",
		country: "Italy"
	},
	{
		id: 6,
		nome: "Eliana Miller",
		postalZip: "457455",
		country: "Belgium"
	},
	{
		id: 7,
		nome: "Neville Guerra",
		postalZip: "13172",
		country: "Pakistan"
	},
	{
		id: 8,
		nome: "Bert Petersen",
		postalZip: "3371",
		country: "Philippines"
	},
	{
		id: 9,
		nome: "Jerome King",
		postalZip: "957714",
		country: "South Korea"
	},
	{
		id: 10,
		nome: "Myles Carlson",
		postalZip: "48155",
		country: "Belgium"
	},
	{
		id: 11,
		nome: "George Norman",
		postalZip: "782339",
		country: "Philippines"
	},
	{
		id: 12,
		nome: "Clare Harrington",
		postalZip: "21513",
		country: "South Korea"
	},
	{
		id: 13,
		nome: "Lester Lambert",
		postalZip: "3667",
		country: "Colombia"
	},
	{
		id: 14,
		nome: "Bert Frank",
		postalZip: "1419-2367",
		country: "Australia"
	},
	{
		id: 15,
		nome: "Jenette Kennedy",
		postalZip: "30537",
		country: "South Korea"
	},
	{
		id: 16,
		nome: "Wallace West",
		postalZip: "5855",
		country: "France"
	},
	{
		id: 17,
		nome: "Lane Tate",
		postalZip: "564761",
		country: "Turkey"
	},
	{
		id: 18,
		nome: "Colton Townsend",
		postalZip: "78890",
		country: "South Korea"
	},
	{
		id: 19,
		nome: "Wang Emerson",
		postalZip: "16600",
		country: "Turkey"
	},
	{
		id: 20,
		nome: "Leilani Baxter",
		postalZip: "74721-921",
		country: "Russian Federation"
	},
	{
		id: 21,
		nome: "Vaughan Boone",
		postalZip: "51114",
		country: "Sweden"
	},
	{
		id: 22,
		nome: "Garrison Mcclain",
		postalZip: "41522",
		country: "United States"
	},
	{
		id: 23,
		nome: "Alden Allison",
		postalZip: "542645",
		country: "Ukraine"
	},
	{
		id: 24,
		nome: "Jack Cleveland",
		postalZip: "3791",
		country: "Italy"
	},
	{
		id: 25,
		nome: "Moana Castillo",
		postalZip: "234827",
		country: "Belgium"
	},
	{
		id: 26,
		nome: "Quinn Buck",
		postalZip: "3995",
		country: "Spain"
	},
	{
		id: 27,
		nome: "Drake Ayala",
		postalZip: "6318",
		country: "Australia"
	},
	{
		id: 28,
		nome: "Myles Mendoza",
		postalZip: "848339",
		country: "France"
	},
	{
		id: 29,
		nome: "Riley Good",
		postalZip: "17447",
		country: "Poland"
	},
	{
		id: 30,
		nome: "Stella Mercado",
		postalZip: "35-376",
		country: "Chile"
	}
];

export async function GET(request) {
  

  if(pessoas.length >= 1){
    return NextResponse.json(pessoas); 
  }else{
    return NextResponse.redirect("http://localhost:3000/error")
  }
  
  

}
