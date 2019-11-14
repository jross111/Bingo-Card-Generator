// import React, { useState } from 'react';



// export function CreateSquare({ addSquare }) {
//     const [value, setValue] = useState("");
//     const handleSubmit = e => {
//         e.preventDefault();
//         if (!value)
//             return;
//         addSquare(value);
//         setValue("");
//     };
//     return (<form onSubmit={handleSubmit}>
//         <input 
//             type="text" 
//             className="input" 
//             value={value} 
//             placeholder="Add a new Square" 
//             onChange={e => setValue(e.target.value)} 
//         />
//     </form>);
// }
// -