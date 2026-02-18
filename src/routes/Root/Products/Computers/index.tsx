import { getComputers } from "../../../../data";

export default function Computers() {

    const computers = getComputers();

    return (
        <div>
            {
                computers.map(computer => (
                    <p key={computer.id} >{computer.name}</p>
                ))
            }
        </div>
    );
}