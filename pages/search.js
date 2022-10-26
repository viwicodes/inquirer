import { API, CX } from "../keys"


export default function search({ results }) {
    return (
        <div>
            {/* {results.items?.map((result) => (
                <div key={result.link}>
                    <div>
                        <a href={result.link}>{result.formattedUrl}</a>
                        <a href={result.link}>
                            <h2>{result.title}</h2>
                        </a>
                    </div>
                    <p>{result.snippet}</p>
                </div>
            ))} */}
            {results.items?.map((result) => (
                <div key={result.link}>
                    <a target="_new" href={result.link}>{result.formattedUrl}</a>
                    <a target="_new" href={result.link}><h2>{result.title}</h2></a>
                </div>
            ))}
        </div>
    )
}

export async function getServerSideProps(context) {
    const data = await fetch(`https://www.googleapis.com/customsearch/v1?key=${API}&cx=${CX}&q=${context.query.term}`).then(response => response.json())

    return {
        props: {
            results: data
        }
    }
}

// API = AIzaSyAjwNVTqp5KmC3zgT-MmNIsn7g6eoTTlf4
// CX = 15559cac57d374341