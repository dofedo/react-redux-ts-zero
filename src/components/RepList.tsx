import { FormEvent, useState } from "react";
import { useAction } from "./hooks/useAction";
// import { useSelector } from "react-redux";

const RepList: React.FC = () => {
    
    const [term, setTerm] = useState('')
    const { searchReps } = useAction();
    // const state = useSelector((state) => state)
    // console.log(state)

    const onSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        searchReps(term);
    }

    return(
        <div>
            <form onSubmit={onSubmit}>
                <input value={term} onChange={(e) => setTerm(e.target.value) } />

                <button>Search</button>
            </form>
        </div>
    )
}

export default RepList;