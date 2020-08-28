import React, {useState} from 'react';


function SearcheInput ({users, setUsers}) {
    const [searche, setSearche] = useState(users ||'');

    const onSubmit = (e) => {
           e.preventDefult();
           setSearche(searche)      
    }

    
    return (

        <form onSubmit={onSubmit}>
            <input
                type="text"
                value={users}
                onChange={event => setUsers(event.target.value)}
             />
        </form>
    )
}

export default SearcheInput;