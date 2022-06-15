import { FormEvent, useState } from "react";
import { useAction } from "./hooks/useAction";
import { useTypedSelector } from "./hooks/useTypedSelector";

const RepList: React.FC = () => {
    
    const [term, setTerm] = useState('')
    const { searchReps } = useAction();

    const {loading, data, error} = useTypedSelector((state) => state.repositories)
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
            <div>
                {error && <h3>{error}</h3>}
                {loading && <h3>Loading...</h3>}
                {!error && !loading && data}
            </div>
        </div>
    )
}

export default RepList;