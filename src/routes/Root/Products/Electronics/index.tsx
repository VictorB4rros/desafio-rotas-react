import { getEletronics } from "../../../../data";

export default function Electronics() {

    const electronics = getEletronics();

    return (
        <div>
            {
                electronics.map(electronic => (
                    <p key={electronic.id} >{electronic.name}</p>
                ))
            }
        </div>
    );
}